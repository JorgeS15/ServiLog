# ServiLog

Minimalist web app to log machine/excavator service records.
Installable PWA for mobile, self-hosted with Docker + Caddy.

---

## Features

- Service records: date, client, hours, hour-meter, value, notes
- Hour-meter: manual reading (start/end) + automatic delta calculation
- Client management (predefined list with new-client addition)
- Monthly summary with totals per client
- CSV export
- PWA: installable on Android/iOS
- Dark theme, mobile-first

---

## Deploy

### 1. Prerequisite: shared Docker network with Caddy

If it does not exist yet:
```bash
docker network create caddy_net
```

### 2. Build and start

```bash
git clone <this-repo> servilog
cd servilog
docker compose up -d --build
```

The SQLite database is stored in `./data/tracker.db` (persistent volume).

### 3. Configure Caddy

In your `Caddyfile`, add:

```caddyfile
tracker.your-domain.duckdns.org {
    reverse_proxy servilog:3000
}
```

If Caddy runs in the same `docker-compose.yml` or in a separate stack sharing the `caddy_net` network, the name `servilog` resolves automatically.

Then: `docker exec caddy caddy reload --config /etc/caddy/Caddyfile`

### 4. Install as PWA on mobile

- Android (Chrome): open the URL → menu ⋮ → "Add to Home Screen"
- iOS (Safari): open the URL → share → "Add to Home Screen"

---

## Local development (without Docker)

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
├── data/              # Database (auto-created)
│   └── tracker.db
└── public/
    ├── index.html
    ├── style.css
    ├── app.js
    ├── manifest.json  # PWA manifest
    └── sw.js          # Service worker (offline cache)
```

---

## Data export

- **CSV**: "CSV" button in the Services view, or access `/api/export/csv`
- Exported fields: Date, Start, End, Duration, Client, Description, Value, Hour-meter start/end/delta

---

## Notes

- The database is SQLite — back it up by copying `data/tracker.db`
- No authentication by default — use Caddy with `basicauth` if exposing outside your local network
- PWA icons (icon-192.png, icon-512.png): generate with any PWA icon tool and place in `public/`
