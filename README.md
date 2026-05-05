# ServiLog

> Self-hosted service log for machines and agricultural equipment — v1.7.0

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
| Invoices | Printable invoice generated from any service |
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

ServiLog is now running at **http://localhost:3000**.

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
      - PORT=3000
      - APP_PASSWORD=your-strong-password
    ports:
      - "3000:3000"
```

When set, all routes (UI and API) require an authenticated session. Sessions are signed with HMAC-SHA256 and stored in an `HttpOnly; SameSite=Strict` cookie. Sign out is available at the bottom of the Settings page.

If `APP_PASSWORD` is not set, the app is open to anyone who can reach the port — suitable for local-network use, but **not recommended for public exposure**.

For additional hardening when self-hosting publicly, consider putting a reverse proxy (e.g. Caddy, Nginx) with HTTPS in front of the container.

---

## License

[MIT](LICENSE)
