# ServiLog

> Self-hosted service log for machines and agricultural equipment — v1.10.6

<img width="677" height="486" alt="image" src="https://github.com/user-attachments/assets/40974a8e-a146-46a2-940a-817de2516ae3" />

Installable PWA with a mobile-first dark UI. Runs entirely in Docker, no cloud required.

---

## Features

| | |
|---|---|
| Service records | Date, client, hours, hour-meter, notes |
| Scheduling | Plan future appointments with a Scheduled status |
| Agenda | Monthly calendar with event chips, day detail panel, upcoming list |
| Hour-meter | Manual start/end with automatic delta |
| Billing | Separate operator and machine hourly rates, travel fee, discount, auto-total |
| Auto travel fee | Calculate road distance from your base to the client and apply a configurable fee formula |
| VAT | Optional per-service VAT rate with live net/gross display |
| Payment tracking | Pending / Paid per service |
| Tips | Counted in received, excluded from billed |
| Attachments | Attach photos, videos, PDFs and documents to any service |
| Clients | Name, address (with map picker), phone; edit client directly from the service form |
| Map picker | Pick client address on an OpenStreetMap map — no API key required |
| Summaries | Monthly and all-time, per client, net and gross; operator and machine cost breakdown |
| Additional statistics | Optional toggle (Settings) to show extra stats on the Summary — currently mean time per service |
| Invoices | Printable invoice generated from any service |
| Quotes (Orçamentos) | Build printable quotes, saved in a dedicated tab — edit, duplicate, set status (pending/accepted/rejected), convert to a service, or re-open the PDF |
| Export | CSV download |
| Settings | Full backup/restore (DB + files), language, theme, invoice details, storage stats |
| PWA | Installable on Android & iOS, works offline |

---

## Installation

**Prerequisites:** [Docker](https://docs.docker.com/get-docker/) with the Compose plugin.

```bash
mkdir servilog && cd servilog
curl -O https://raw.githubusercontent.com/JorgeS15/ServiLog/main/docker-compose.yml
docker compose up -d
```

ServiLog is now running at **http://localhost:4000**.

The database and uploads folder are created automatically under `./data/`.

---

## Install as PWA

Once you have a domain pointing to your server, you can install ServiLog as an app:

- **Android** (Chrome) — open the URL → menu ⋮ → "Add to Home Screen"
- **iOS** (Safari) — open the URL → share icon → "Add to Home Screen"

---

## Backup

Settings → **Download Backup** exports a single `.slb` file containing the SQLite database **and** all uploaded files (photos, videos, documents).

Restore by selecting the `.slb` file (or a legacy `.db` file) in Settings → **Load Backup**.

Manual backup: copy `./data/` — restore by replacing the folder and restarting the container.

---

## Email Notifications

ServiLog can send an email reminder **7 days** and **1 day** before each scheduled service. Configure it via environment variables in `docker-compose.yml`:

```yaml
environment:
  - SMTP_HOST=smtp.gmail.com
  - SMTP_PORT=587
  - SMTP_USER=you@gmail.com
  - SMTP_PASS=your-app-password      # Gmail: use an App Password, not your account password
  - SMTP_FROM=ServiLog <you@gmail.com>
  - NOTIFY_EMAIL=you@gmail.com       # where to send the reminders
  - NOTIFY_TIME=08:00                # time of day to run the check (server local time)
  - SMTP_SECURE=false                # set true only for port 465
```

All four of `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, and `NOTIFY_EMAIL` must be set — notifications are silently disabled if any are missing.

**Gmail tip**: enable 2FA on your Google account, then generate an [App Password](https://myaccount.google.com/apppasswords) to use as `SMTP_PASS`.

---

## Security

ServiLog supports built-in password protection via the `APP_PASSWORD` environment variable. Set it in `docker-compose.yml` to enable a login page:

```yaml
services:
  servilog:
    image: ghcr.io/jorges15/servilog:latest
    container_name: servilog
    restart: unless-stopped
    volumes:
      - ./data:/data
    environment:
      - DB_PATH=/data/tracker.db
      - PORT=4000
      - APP_PASSWORD=your-strong-password
    ports:
      - "4000:4000"
```

When set, all routes (UI and API) require an authenticated session. Sessions are signed with HMAC-SHA256 and stored in an `HttpOnly; SameSite=Strict` cookie. Sign out is available at the bottom of the Settings page.

To add the `Secure` flag (recommended when serving over HTTPS), set `HTTPS=true` in your environment:

```yaml
environment:
  - APP_PASSWORD=your-strong-password
  - HTTPS=true
```

If `APP_PASSWORD` is not set, the app is open to anyone who can reach the port — suitable for local-network use, but **not recommended for public exposure**.

### Security hardening built in

| Measure | Detail |
|---|---|
| **Login rate limiting** | Max 10 failed attempts per IP per 15-minute window; further attempts receive a 429 response |
| **Session cookies** | `HttpOnly; SameSite=Strict` — inaccessible to JavaScript and not sent on cross-site requests. Add `HTTPS=true` env var to also set the `Secure` flag |
| **Content-Security-Policy** | Restricts scripts to `self` + unpkg (Leaflet CDN), API connections to `self` + Nominatim/OSRM, images to OSM tiles — limits XSS exfiltration vectors |
| **XSS prevention** | All user data rendered into HTML is escaped through `escapeHtml()` (covers `&`, `<`, `>`, `"`, `'`) |
| **SQL injection** | Every query uses parameterised statements — no string interpolation into SQL |
| **File upload allowlist** | Attachments restricted to an explicit MIME type list; unsafe types (HTML, SVG, JS) are force-downloaded as `application/octet-stream` |
| **CSV injection** | Export prefixes formula-trigger characters (`=`, `+`, `-`, `@`) to prevent spreadsheet formula execution |
| **Foreign key integrity** | SQLite `PRAGMA foreign_keys = ON` enforced on every database open |
| **Security headers** | `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Content-Security-Policy` on every response |

For additional hardening when self-hosting publicly, consider putting a reverse proxy (e.g. Caddy, Nginx) with HTTPS in front of the container.

---

## License

[MIT](LICENSE)
