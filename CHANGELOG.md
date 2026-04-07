# Changelog

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
