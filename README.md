# ServiLog

> Self-hosted service log for machines and agricultural equipment — v1.6.0

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
| Clients | Name, address (with map picker), phone |
| Map picker | Pick client address on an OpenStreetMap map — no API key required |
| Summaries | Monthly and all-time, per client, net and gross; operator and machine cost breakdown |
| Invoices | Printable invoice generated from any service |
| Export | CSV download |
| Settings | Full backup/restore (DB + files), language, theme, invoice details, storage stats |
| PWA | Installable on Android & iOS, works offline |

---

## Roadmap
Planned features for future releases:
| Feature | Description |
|---|---|
| **Authentication & Users** | Built-in login system with user accounts and role-based access, eliminating the need for an external reverse proxy for auth |
| **Service Attachments** | Upload and attach photos and videos directly to service records (receipts, damage photos, before/after shots) |
| **Service Scheduling** | Schedule upcoming maintenance and services with due-date alerts based on calendar date or hour-meter readings |
| ~~**Invoice Generator**~~ ✅ v1.2.3 | ~~Generate invoices based on the service data (hours, client, etc)~~ |

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

ServiLog has no built-in authentication. If you expose it outside your local network, put a reverse proxy with authentication in front of it (e.g. Caddy `basicauth`, Nginx, Authelia).

---

## License

[MIT](LICENSE)
