# ServiLog

**v1.0.0** — Self-hosted service log for machines and excavators.
Installable PWA, mobile-first, dark theme. Runs with Docker + Caddy.

---

## Features

- Log service records: date, client, hours, hour-meter, notes
- Hour-meter: manual start/end readings with automatic delta calculation
- Billing per service: hourly rate, travel, discount, total value
- Payment status per service: Pending / Paid
- Tips field — included in total received, not in total billed
- Client management with address and phone number
- Monthly summary and all-time summary per client
- Dashboard: billed vs received vs pending breakdown
- CSV export
- Settings: backup/restore, language selector, theme switcher, default values
- PWA: installable on Android and iOS, works offline
- Dark theme, mobile-first UI

---

## Quick start with Docker

### 1. Create the shared Caddy network (once)

```bash
docker network create caddy_net
```

### 2. Start ServiLog

```bash
mkdir servilog && cd servilog
curl -O https://raw.githubusercontent.com/jorges15/servilog/main/docker-compose.yml
docker compose up -d
```

The SQLite database is created automatically at `./data/tracker.db`.

### 3. Configure Caddy

In your `Caddyfile`:

```caddyfile
your-domain.example.com {
    reverse_proxy servilog:3000
}
```

Reload Caddy:

```bash
docker exec caddy caddy reload --config /etc/caddy/Caddyfile
```

### 4. Install as PWA

- **Android** (Chrome): open the URL → menu ⋮ → "Add to Home Screen"
- **iOS** (Safari): open the URL → share icon → "Add to Home Screen"

---

## Build from source

To build the image locally instead of using the pre-built one, replace the `image:` line in `docker-compose.yml`:

```yaml
    build: .
```

Then:

```bash
git clone https://github.com/jorges15/servilog.git
cd servilog
docker compose up -d --build
```

---

## Local development

```bash
npm install
node server.js
# Open http://localhost:3000
```

---

## File structure

```
servilog/
├── server.js          # Express + SQLite backend
├── package.json
├── Dockerfile
├── docker-compose.yml
├── data/              # Database (auto-created, not in repo)
│   └── tracker.db
└── public/
    ├── index.html
    ├── style.css
    ├── app.js
    ├── manifest.json  # PWA manifest
    └── sw.js          # Service worker (offline cache)
```

---

## Backup

Copy `data/tracker.db` to back up all your data. Restore by replacing the file and restarting the container.

The Settings page also provides in-app backup and restore.

---

## Security

ServiLog has no built-in authentication. If you expose it outside your local network, protect it with Caddy's `basicauth`:

```caddyfile
your-domain.example.com {
    basicauth {
        user $2a$...   # bcrypt hash — generate with: caddy hash-password
    }
    reverse_proxy servilog:3000
}
```

---

## License

MIT
