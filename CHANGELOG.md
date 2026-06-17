# Changelog

## [1.7.6] - 2026-06-17

### Security
- **Backup restore bounds checking**: the `.slb` parser now validates every offset and length before reading, and caps `fileCount` at 100 000 — a malformed file could previously cause the parse loop to spin or read past the buffer
- **Cookie `Secure` flag**: session cookies now include `Secure` when the `HTTPS=true` environment variable is set, preventing transmission over plain HTTP on HTTPS deployments

### Changed
- **README**: updated to v1.7.6, added `HTTPS=true` env var documentation, documented the `Secure` cookie flag in the security hardening table, added "Additional statistics" feature row

## [1.7.5] - 2026-06-16

### Added
- **Additional statistics toggle**: new option in Settings to show extra stats on the Summary dashboard; off by default so the dashboard stays clean. Currently includes mean time per service; more stats can be added here in the future

## [1.7.4] - 2026-06-16

### Fixed
- **Unhealthy container**: `/api/version` is now always accessible without authentication — previously the auth middleware returned 401 to Docker's healthcheck `wget` when `APP_PASSWORD` was set, causing the container to be flagged as unhealthy in Portainer

### Added
- **Mean Time / Service stat**: the Summary dashboard now shows the average service duration (in hours) alongside the total work hours, for both monthly and all-time views

## [1.7.3] - 2026-05-11

### Fixed
- **Map interface broken**: added `https://unpkg.com` to the `style-src` CSP directive — Leaflet's CSS is loaded from `unpkg.com` and was being blocked, stripping all map styles and controls

## [1.7.2] - 2026-05-11

### Fixed
- **PWA install restored**: added `manifest-src 'self'` and `worker-src 'self'` CSP directives — Chrome/Chromium require these explicitly and do not reliably inherit from `default-src` under a strict CSP; their absence in v1.7.1 silently broke the "Add to Home Screen" install prompt
- **Contradicting frame policy**: corrected `X-Frame-Options` from `SAMEORIGIN` to `DENY` to align with the existing `frame-ancestors 'none'` CSP directive (browsers already honoured `none`; the old value was dead code)

## [1.7.1] - 2026-05-05

### Security
- **XSS fix**: client name was rendered without escaping in the service card and dashboard by-client list — a malicious name could execute arbitrary JavaScript; wrapped with `escapeHtml()` in both places
- **Content-Security-Policy**: CSP header now sent on every response, restricting scripts to `self` + unpkg (Leaflet), API connections to `self` + Nominatim/OSRM, and images to OSM tile servers
- **Login rate limiting**: `/login` now enforces a max of 10 failed attempts per IP per 15-minute window and returns 429 on further attempts
- **Foreign keys enforced**: `PRAGMA foreign_keys = ON` is now applied on every database open (initial start and all backup restore paths via new `openDb()` helper)
- **PUT /api/clients/:id**: now returns 404 when the target client does not exist instead of silently succeeding with zero rows changed
- **File upload error handling**: `uploadPictures` now checks `r.ok` before parsing the response as JSON, ensuring non-JSON error responses (e.g. from a reverse proxy) are surfaced as user-readable messages

### Changed
- Docker image now includes a `HEALTHCHECK` (`wget` on `/api/version` every 30 s, 5 s timeout) — lets Docker and orchestrators detect silent crashes
- Dependency versions pinned to exact releases (`express 4.22.1`, `better-sqlite3 9.6.0`) for reproducible Docker builds

## [1.7.0] - 2026-05-05

### Added
- **Login page**: a styled login screen (dark theme, ServiLog branding) replaces the browser's Basic Auth prompt when `APP_PASSWORD` is set. Set the env var in `docker-compose.yml` to enable it — leave it unset for open/local-network use
- **Session cookies**: sessions are HMAC-SHA256 signed, `HttpOnly`, `SameSite=Strict`; they expire automatically on server restart

### Security
- **Authentication**: new session-based auth system; set `APP_PASSWORD` env var to protect all routes
- **XSS — escapeHtml**: `escapeHtml()` now also escapes `"` and `'`, closing attribute-injection and JS string-injection vectors
- **XSS — onclick handler**: client name in the delete button is passed via `data-*` attributes instead of being interpolated into a JS string literal, eliminating the stored-XSS risk
- **Security headers**: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and `Referrer-Policy: strict-origin-when-cross-origin` are now sent on every response
- **CSV injection**: export now uses a `csvCell()` helper that properly quotes all fields and prefixes formula-trigger characters (`=`, `+`, `-`, `@`) with `'`
- **File upload allowlist**: the attachment endpoint now rejects any MIME type not in an explicit allowlist (400 error); previously unknown types fell through to a filename-extension guess
- **Attachment serving**: stored MIME types that browsers can execute (`text/html`, `text/javascript`, `image/svg+xml`, etc.) are remapped to `application/octet-stream` when serving downloads
- **Session expiry handling**: API 401 responses now redirect to `/login` instead of surfacing an error in the UI

## [1.6.1] - 2026-04-26

### Added
- **Edit client from service form**: when a client is selected in the service form, an "Edit client" button appears inline — opens the client editor without leaving the form context
- **Reordered navigation**: menu order is now Summary → Services → Agenda → Clients → Settings

## [1.6.0] - 2026-04-26

### Added
- **Auto travel fee**: Settings → "Auto travel fee" card — configure base address (with map picker), price/km, rounding step, and minimum fee
- Service form: 🚗 button next to the travel fee field; calculates road distance from base to client address (OSRM routing API, straight-line Haversine fallback) and applies `fee = max(min, ceil(dist × €/km ÷ step) × step)`
- Base address coordinates cached in localStorage after first geocode; cleared when address is manually edited
- Map picker now captures and exposes lat/lng to caller via optional `onConfirm` callback

### Fixed
- Backup filename now includes the date (e.g. `servilog-backup-2026-04-26.slb`) instead of a generic name
- Backup restore is now atomic: changes are written to temp paths first and swapped in one step — a failed restore can no longer corrupt the live database or uploads folder
- API calls now properly check HTTP status and surface server-side error messages to the user instead of silently failing
- Base address hint in Settings updates immediately after confirming the map picker, without needing a page reload

## [1.5.0] - 2026-04-25

### Added
- **Operator rate** and **Machine rate** fields in the billing section; total price/hour = operator + machine
- Summary dashboard shows individual **Operator** and **Machine** cost totals for the selected period (operator rate × hours and machine rate × hours)
- Settings: two separate default rate fields (Operator /h and Machine /h) replace the single price/hour default

### Changed
- Service cards show combined rate as `15+15€/h` when both rates are set, or a single rate if only one is used
- CSV export now has `Operator/h` and `Machine/h` columns instead of `Price/h`
- Invoice rate column shows the combined operator + machine rate

### Migration
- Existing services: old `price_per_hour` value is automatically carried over as `operator_rate`; `machine_rate` starts at 0

## [1.4.0] - 2026-04-22

### Added
- **Map picker** for client address: "📍 Pick on map" button opens an OpenStreetMap panel (Leaflet.js, no API key required)
  - Click or drag the pin → address auto-filled via Nominatim reverse geocoding
  - Address search box with live results and 400 ms debounce
  - "My location" button uses the device GPS
  - Pre-centers on the existing address when re-opened
- **Agenda calendar**: day cells now show full event chips (client name, colour-coded orange/blue) instead of dots; clicking a chip opens the service directly; "+N" overflow indicator for busy days
- **File attachments**: services now accept any file type — images, video (MP4, MOV, WebM), PDF, Word, Excel — up to 100 MB; non-image files display a 🎬 / 📄 / 📎 icon

### Fixed
- Storage statistics now correctly report uploads folder size separately from the SQLite database, plus a combined total — previously only the DB file was counted

### Changed
- Attachment section renamed from "Fotos / Photos" to "Anexos / Attachments"

## [1.3.0] - 2026-04-22

### Added
- Agenda tab: monthly calendar grid with dot indicators, day detail panel, upcoming appointments list
- Appointment scheduling: services now have a `status` field (`completed` | `scheduled`)
- Scheduled services shown with a blue "Scheduled" badge on service cards and in all views
- Service form auto-defaults status to "Scheduled" when a future date is selected
- New API endpoint: `GET /api/appointments/upcoming` — returns scheduled services with date ≥ today
- Dashboard summary and CSV export exclude scheduled (unbilled) services from financial aggregations

## [1.2.3] - 2026-04-20

### Added
- Full backup now exports a `.slb` bundle containing the SQLite database **and** all uploaded service photos (custom binary format, zero new dependencies)
- Restore accepts both new `.slb` bundles and legacy `.db` files (backwards compatible)
- Restore size limit raised from 50 MB to 500 MB
- Dashboard summary: **Líquido (s/ IVA)** and **Bruto (c/ IVA)** stat blocks showing net and gross billed totals
- Horímetro delta and Gorjetas share a single row in the summary, reducing visual clutter

### Changed
- **Recebido** and **Pendente** summary values now display gross amounts (including VAT)
- Per-client breakdown shows gross value with a net sub-label when VAT is present

## [1.2.2] - 2026-04-18

### Added
- Per-service VAT toggle with editable rate (default 23 %)
- Live VAT amount and gross total in the service form
- Service cards display gross total and a VAT % chip when VAT is enabled
- Invoices include a VAT line in the totals breakdown

## [1.2.1] - 2026-04-16

### Fixed
- Hourmeter delta floating-point display (e.g. `5.399999…` now shows as `5.4`)
- Hourmeter start/end readings removed from the invoice service description
- Default clients "Particular" and "Sem cliente" no longer reappear after every server restart

## [1.2.0] - 2026-04-14

### Added
- Invoice generator: generates a printable, self-contained HTML invoice from any service
- Invoice opens in a new browser tab with a Print / Save as PDF button
- Invoice includes issuer details, client details, service table, VAT row, totals, and payment status badge
- Invoice reference format: `F {YEAR}/{SERVICE_ID}`
- Settings card for invoice issuer details (business name, address, NIF, email, footer/payment terms note)
- `GET /api/services/:id` now returns `client_phone` and `client_address` for invoice population

## [1.1.0] - 2026-04-10

### Added
- Photo attachments: attach one or more photos to any service (JPEG, PNG, WEBP, HEIC, etc.)
- Photos are stored in `/data/uploads/` and linked via the `service_attachments` table
- Photo grid with lightbox viewer and per-photo delete in the service detail view

## [1.0.0] - 2026-04-07

### Changed
- Bumped to stable v1.0.0 release
- Fixed silent suppression of migration errors — errors are now logged to console
- Fixed `saveService` not surfacing server-side errors to the user

## [0.6.0] - 2026-04-07

### Changed
- Renamed all database tables and columns from Portuguese to English (`clientes→clients`, `servicos→services`, column names throughout)
- Rewrote `server.js` with English identifiers throughout
- Tips (`gorjeta`) are now included in "total received" but not in "total billed"

## [0.5.2] - 2026-04-06

### Fixed
- Manual total value override was being ignored on save
- i18n polish: corrected several missing/wrong translation keys

## [0.5.1] - 2026-04-06

### Added
- All-time toggle on the Services tab (show all services across all months)

### Fixed
- Language change was not updating the navigation tab labels

## [0.5.0] - 2026-04-05

### Added
- Global (all-time) summary view on the Dashboard
- Tips field (`gorjeta`) per service
- Settings page with backup/restore, language selector, theme switcher, and default values
- Address and phone number fields on client records

## [0.4.0] - 2026-03-29

### Fixed
- Double deduction bug: duration was being reduced by `horas_desconto` twice (once client-side, once server-side)

### Added
- Billing section in service form: preço/hora, deslocação, desconto (€)
- Payment status field per service: Pendente / Pago
- Auto-calculation of total value from `preço/hora × duração + deslocação − desconto`
- Dashboard now shows Recebido vs Pendente split
- Service card shows payment badge (Pago/Pendente) and billing chip
- CSV export includes new billing and payment columns

## [0.3.0] - 2026-03-29

### Added
- Inline client creation from the service form dropdown (select "✚ Novo cliente...")
- "Horas a descontar" field per service (lunch break, etc.) — deducted from auto-calculated duration
- Duration field renamed to "Duração líquida" to reflect the net value after deduction
- Service card now shows deduction in the time chip (e.g. 08:00–17:00 -1h · 8h)

### Changed
- `server.js`: extracted `calcDuracao()` helper; `horas_desconto` stored in DB and applied to duration
- CSV export includes `Desconto(h)` column

## [0.2.0] - 2026-03-28

### Changed
- Renamed project from `maquina-tracker` to `ServiLog`
- Updated Docker image reference to `ghcr.io/jorges15/servilog:latest`
- Updated service worker cache name to `servilog-v2` (invalidates old cache)
- Updated PWA manifest brand strings to `ServiLog`
- Translated README from Portuguese to English
- Added `.gitignore`
- Added `CHANGELOG.md`
- Added GitHub Actions workflow for automated Docker builds

## [0.1.0] - Initial release

- Initial release as `maquina-tracker`
