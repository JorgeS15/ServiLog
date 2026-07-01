const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const pkg = require('./package.json');

const app = express();
const PORT = process.env.PORT || 4000;
const DB_PATH = process.env.DB_PATH || '/data/tracker.db';

console.log(`[ServiLog] starting v${pkg.version} (node ${process.version})`);

// Ensure data dir exists
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const UPLOADS_DIR = path.join(dataDir, 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

// Use let so the restore endpoint can close and reopen the connection
function openDb(p) {
  const instance = new Database(p);
  instance.pragma('foreign_keys = ON');
  return instance;
}
let db = openDb(DB_PATH);

// Init schema (fresh installs get English names directly)
db.exec(`
  CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    phone TEXT,
    address TEXT,
    created_at TEXT DEFAULT (datetime('now','localtime'))
  );

  CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    start_time TEXT,
    end_time TEXT,
    duration_hours REAL,
    discount_hours REAL DEFAULT 0,
    client_id INTEGER REFERENCES clients(id),
    description TEXT,
    value REAL,
    price_per_hour REAL,
    travel_fee REAL,
    discount REAL,
    paid INTEGER DEFAULT 0,
    tip REAL DEFAULT 0,
    hourmeter_start REAL,
    hourmeter_end REAL,
    hourmeter_delta REAL,
    vat_rate REAL DEFAULT NULL,
    created_at TEXT DEFAULT (datetime('now','localtime'))
  );

  CREATE TABLE IF NOT EXISTS service_attachments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    service_id INTEGER NOT NULL REFERENCES services(id),
    filename TEXT NOT NULL,
    original_name TEXT,
    mime_type TEXT,
    size INTEGER,
    created_at TEXT DEFAULT (datetime('now','localtime'))
  );

  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT
  );

  CREATE TABLE IF NOT EXISTS quotes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    number INTEGER,
    ref TEXT,
    client_id INTEGER REFERENCES clients(id),
    client_name TEXT,
    client_address TEXT,
    client_phone TEXT,
    description TEXT,
    date TEXT,
    valid_until TEXT,
    hours REAL,
    operator_rate REAL,
    machine_rate REAL,
    travel_fee REAL,
    discount REAL,
    vat_rate REAL,
    notes TEXT,
    status TEXT DEFAULT 'pending',
    created_at TEXT DEFAULT (datetime('now','localtime'))
  );
`);

// Run all migrations — safe to call multiple times
function runMigrations() {
  const tableExists = name => !!db.prepare(`SELECT name FROM sqlite_master WHERE type='table' AND name=?`).get(name);
  const colExists = (tbl, col) =>
    db
      .prepare(`PRAGMA table_info(${tbl})`)
      .all()
      .some(c => c.name === col);

  // Pre-v0.6 column additions (run against old Portuguese table names if still present)
  // Errors here are expected when columns already exist; log anything unexpected.
  const tryAlter = sql => {
    try {
      db.exec(sql);
    } catch (e) {
      if (!e.message.includes('duplicate column name')) console.warn('[migration]', e.message);
    }
  };
  if (tableExists('servicos')) {
    tryAlter(`ALTER TABLE servicos ADD COLUMN horas_desconto REAL DEFAULT 0`);
    tryAlter(`ALTER TABLE servicos ADD COLUMN preco_hora REAL DEFAULT NULL`);
    tryAlter(`ALTER TABLE servicos ADD COLUMN preco_deslocacao REAL DEFAULT NULL`);
    tryAlter(`ALTER TABLE servicos ADD COLUMN desconto REAL DEFAULT NULL`);
    tryAlter(`ALTER TABLE servicos ADD COLUMN pago INTEGER DEFAULT 0`);
    tryAlter(`ALTER TABLE servicos ADD COLUMN gorjeta REAL DEFAULT 0`);
  }
  if (tableExists('clientes')) {
    tryAlter(`ALTER TABLE clientes ADD COLUMN telefone TEXT`);
    tryAlter(`ALTER TABLE clientes ADD COLUMN endereco TEXT`);
  }

  // v0.6.0 — rename tables to English
  if (tableExists('clientes') && !tableExists('clients')) {
    db.exec('ALTER TABLE clientes RENAME TO clients');
  }
  if (tableExists('servicos') && !tableExists('services')) {
    db.exec('ALTER TABLE servicos RENAME TO services');
  }

  // v0.6.0 — rename clients columns
  if (colExists('clients', 'nome')) db.exec('ALTER TABLE clients RENAME COLUMN nome TO name');
  if (colExists('clients', 'telefone')) db.exec('ALTER TABLE clients RENAME COLUMN telefone TO phone');
  if (colExists('clients', 'endereco')) db.exec('ALTER TABLE clients RENAME COLUMN endereco TO address');
  if (colExists('clients', 'criado_em')) db.exec('ALTER TABLE clients RENAME COLUMN criado_em TO created_at');

  // v0.6.0 — rename services columns
  if (colExists('services', 'data')) db.exec('ALTER TABLE services RENAME COLUMN data TO date');
  if (colExists('services', 'hora_inicio')) db.exec('ALTER TABLE services RENAME COLUMN hora_inicio TO start_time');
  if (colExists('services', 'hora_fim')) db.exec('ALTER TABLE services RENAME COLUMN hora_fim TO end_time');
  if (colExists('services', 'duracao_horas'))
    db.exec('ALTER TABLE services RENAME COLUMN duracao_horas TO duration_hours');
  if (colExists('services', 'horas_desconto'))
    db.exec('ALTER TABLE services RENAME COLUMN horas_desconto TO discount_hours');
  if (colExists('services', 'cliente_id')) db.exec('ALTER TABLE services RENAME COLUMN cliente_id TO client_id');
  if (colExists('services', 'descricao')) db.exec('ALTER TABLE services RENAME COLUMN descricao TO description');
  if (colExists('services', 'valor')) db.exec('ALTER TABLE services RENAME COLUMN valor TO value');
  if (colExists('services', 'preco_hora')) db.exec('ALTER TABLE services RENAME COLUMN preco_hora TO price_per_hour');
  if (colExists('services', 'preco_deslocacao'))
    db.exec('ALTER TABLE services RENAME COLUMN preco_deslocacao TO travel_fee');
  if (colExists('services', 'desconto')) db.exec('ALTER TABLE services RENAME COLUMN desconto TO discount');
  if (colExists('services', 'pago')) db.exec('ALTER TABLE services RENAME COLUMN pago TO paid');
  if (colExists('services', 'gorjeta')) db.exec('ALTER TABLE services RENAME COLUMN gorjeta TO tip');
  if (colExists('services', 'horimetro_inicio'))
    db.exec('ALTER TABLE services RENAME COLUMN horimetro_inicio TO hourmeter_start');
  if (colExists('services', 'horimetro_fim'))
    db.exec('ALTER TABLE services RENAME COLUMN horimetro_fim TO hourmeter_end');
  if (colExists('services', 'horimetro_delta'))
    db.exec('ALTER TABLE services RENAME COLUMN horimetro_delta TO hourmeter_delta');
  if (colExists('services', 'criado_em')) db.exec('ALTER TABLE services RENAME COLUMN criado_em TO created_at');

  // v1.2.2 — VAT rate
  tryAlter(`ALTER TABLE services ADD COLUMN vat_rate REAL DEFAULT NULL`);

  // v1.3.0 — scheduling status
  tryAlter(`ALTER TABLE services ADD COLUMN status TEXT DEFAULT 'completed'`);

  // v1.5.0 — split price_per_hour into operator_rate + machine_rate
  tryAlter(`ALTER TABLE services ADD COLUMN operator_rate REAL DEFAULT 0`);
  tryAlter(`ALTER TABLE services ADD COLUMN machine_rate REAL DEFAULT 0`);
  db.prepare(
    `UPDATE services SET operator_rate = COALESCE(price_per_hour, 0)
    WHERE price_per_hour IS NOT NULL AND operator_rate = 0`
  ).run();

  // v1.10.0 — persisted quotes (Orçamentos tab)
  db.exec(`
    CREATE TABLE IF NOT EXISTS quotes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      number INTEGER,
      ref TEXT,
      client_id INTEGER REFERENCES clients(id),
      client_name TEXT,
      client_address TEXT,
      client_phone TEXT,
      description TEXT,
      date TEXT,
      valid_until TEXT,
      hours REAL,
      operator_rate REAL,
      machine_rate REAL,
      travel_fee REAL,
      discount REAL,
      vat_rate REAL,
      notes TEXT,
      status TEXT DEFAULT 'pending',
      created_at TEXT DEFAULT (datetime('now','localtime'))
    );
  `);
}
runMigrations();

// ── Request logging middleware ────────────────────────────
app.use((req, res, next) => {
  if (req.path.startsWith('/api/tiles')) return next();
  const start = Date.now();
  const ip = req.socket.remoteAddress || '';
  res.on('finish', () => {
    const ms = Date.now() - start;
    console.log(`[req] ${req.method} ${req.path} ${res.statusCode} ${ms}ms ${ip}`);
  });
  next();
});

// ── Security headers ──────────────────────────────────────
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  "connect-src 'self' https://nominatim.openstreetmap.org https://router.project-osrm.org",
  "manifest-src 'self'",
  "worker-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
].join('; ');

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', CSP);
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// ── Session-based auth ────────────────────────────────────
// Set APP_PASSWORD env var to enable password protection.
// Sessions are HMAC-signed cookies; they expire on server restart.
const APP_PASSWORD = process.env.APP_PASSWORD;
const SESSION_SECRET = crypto.randomBytes(32).toString('hex');

function makeSessionToken() {
  return crypto.createHmac('sha256', SESSION_SECRET).update(APP_PASSWORD).digest('hex');
}

function parseCookies(req) {
  const cookies = {};
  for (const part of (req.headers.cookie || '').split(';')) {
    const idx = part.indexOf('=');
    if (idx < 0) continue;
    try {
      cookies[decodeURIComponent(part.slice(0, idx).trim())] = decodeURIComponent(part.slice(idx + 1).trim());
    } catch (_) {}
  }
  return cookies;
}

function isAuthenticated(req) {
  if (!APP_PASSWORD) return true;
  return parseCookies(req).servilog_session === makeSessionToken();
}

// Routes always accessible (login page assets + healthcheck endpoint)
const PUBLIC_PATHS = new Set(['/login', '/favicon.ico', '/api/version']);

if (APP_PASSWORD) {
  app.use((req, res, next) => {
    if (PUBLIC_PATHS.has(req.path)) return next();
    if (isAuthenticated(req)) return next();
    if (req.path.startsWith('/api/')) return res.status(401).json({ error: 'Unauthorized' });
    res.redirect('/login');
  });
} else {
  console.warn('[ServiLog] WARNING: APP_PASSWORD is not set. The app is unprotected.');
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ── Login / Logout ────────────────────────────────────────
app.get('/login', (req, res) => {
  if (!APP_PASSWORD || isAuthenticated(req)) return res.redirect('/');
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Simple in-memory brute-force guard: max 10 failures per IP per 15 min window
const loginAttempts = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const entry = loginAttempts.get(ip);
  if (!entry || now > entry.resetAt) return false;
  return entry.count >= 10;
}
function recordFailure(ip) {
  const now = Date.now();
  const entry = loginAttempts.get(ip);
  if (!entry || now > entry.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 });
  } else {
    entry.count++;
  }
}
function clearAttempts(ip) {
  loginAttempts.delete(ip);
}

app.post('/login', (req, res) => {
  const ip = req.socket.remoteAddress || '';
  if (isRateLimited(ip)) {
    console.log(`[auth] rate-limited ip=${ip}`);
    return res.status(429).redirect('/login?error=2');
  }
  const submitted = String(req.body.password || '');
  const pwdBuf = Buffer.from(APP_PASSWORD || '');
  const subBuf = Buffer.from(submitted);
  const valid = APP_PASSWORD && subBuf.length === pwdBuf.length && crypto.timingSafeEqual(subBuf, pwdBuf);
  if (!valid) {
    recordFailure(ip);
    console.log(`[auth] login fail ip=${ip}`);
    return res.redirect('/login?error=1');
  }
  clearAttempts(ip);
  console.log(`[auth] login ok ip=${ip}`);
  const token = makeSessionToken();
  const secure = process.env.HTTPS === 'true' ? '; Secure' : '';
  res.setHeader('Set-Cookie', `servilog_session=${token}; HttpOnly; SameSite=Strict; Path=/${secure}`);
  res.redirect('/');
});

app.post('/logout', (req, res) => {
  const ip = req.socket.remoteAddress || '';
  console.log(`[auth] logout ip=${ip}`);
  res.setHeader('Set-Cookie', 'servilog_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0');
  res.redirect(APP_PASSWORD ? '/login' : '/');
});

// Serve sw.js dynamically so cache version matches package.json — forces cache bust on every release
const swTemplate = fs.readFileSync(path.join(__dirname, 'public', 'sw.js'), 'utf8');
app.get('/sw.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Cache-Control', 'no-store');
  res.send(swTemplate.replace('__VERSION__', pkg.version));
});

app.use(express.static(path.join(__dirname, 'public')));

// ── OSM Tile Proxy ────────────────────────────────────────
// Client-side networks (corporate firewalls, browser privacy modes) often
// block <img> requests to *.tile.openstreetmap.org while allowing API
// fetch() calls. Proxying through the server bypasses that restriction:
// the browser only ever talks to 'self', and the server fetches from OSM.
// z/x/y are strictly validated to prevent SSRF.
app.get('/api/tiles/:z/:x/:y', async (req, res) => {
  const z = parseInt(req.params.z, 10);
  const x = parseInt(req.params.x, 10);
  const y = parseInt(req.params.y, 10);
  if (!Number.isInteger(z) || !Number.isInteger(x) || !Number.isInteger(y)) return res.status(400).end();
  if (z < 0 || z > 19 || x < 0 || y < 0) return res.status(400).end();
  const max = 2 ** z;
  if (x >= max || y >= max) return res.status(400).end();

  const sub = ['a', 'b', 'c'][x % 3];
  const url = `https://${sub}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
  try {
    const r = await fetch(url, {
      headers: {
        'User-Agent': `ServiLog/${pkg.version} tile-proxy (+https://github.com/JorgeS15/ServiLog)`,
        Referer: 'https://www.openstreetmap.org/',
      },
    });
    if (!r.ok) {
      console.warn(`[tiles] upstream ${r.status} for ${url}`);
      return res.status(r.status).end();
    }
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // tiles are static; 24 h cache
    res.send(Buffer.from(await r.arrayBuffer()));
  } catch (err) {
    console.error('[tiles] proxy error', err.message);
    res.status(502).end();
  }
});

// ── LubeLogger Proxy ──────────────────────────────────────
// Reads the machine's maintenance/fuel cost total from a self-hosted
// LubeLogger instance. Proxied server-side so the API key never reaches
// the browser. LubeLogger's own vehicleId filter can't be trusted to
// always narrow the response to one vehicle, so we fetch the array and
// find the matching entry ourselves.
app.get('/api/lubelogger/cost', async (req, res) => {
  const row = key => db.prepare('SELECT value FROM settings WHERE key = ?').get(key)?.value;
  const rawUrl = row('lubelogger_url');
  const apiKey = row('lubelogger_api_key');
  const vehicleId = row('lubelogger_vehicle_id');

  if (!rawUrl || !apiKey || !vehicleId) {
    return res.json({ configured: false });
  }

  const base = rawUrl.replace(/\/+$/, '');
  const url = `${base}/api/vehicle/info?vehicleId=${encodeURIComponent(vehicleId)}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  let list;
  try {
    const r = await fetch(url, {
      headers: { 'x-api-key': apiKey },
      signal: controller.signal,
    });
    if (!r.ok) {
      console.warn(`[lubelogger] upstream ${r.status} for ${url}`);
      return res.status(502).json({ configured: true, error: 'upstream_error', status: r.status });
    }
    list = await r.json();
  } catch (err) {
    if (err.name === 'AbortError') {
      return res.status(504).json({ configured: true, error: 'timeout' });
    }
    console.error('[lubelogger] proxy error', err.message);
    return res.status(502).json({ configured: true, error: 'network_error' });
  } finally {
    clearTimeout(timeout);
  }

  if (!Array.isArray(list)) {
    return res.status(502).json({ configured: true, error: 'invalid_response' });
  }
  const targetId = String(vehicleId);
  const match = list.find(v => String(v?.vehicleData?.id) === targetId);
  if (!match) {
    return res.status(404).json({ configured: true, error: 'vehicle_not_found' });
  }

  const breakdown = {
    service: match.serviceRecordCost || 0,
    repair: match.repairRecordCost || 0,
    upgrade: match.upgradeRecordCost || 0,
    tax: match.taxRecordCost || 0,
    gas: match.gasRecordCost || 0,
  };
  const total = Object.values(breakdown).reduce((a, b) => a + b, 0);
  const vd = match.vehicleData || {};

  res.json({
    configured: true,
    total,
    breakdown,
    vehicle: { year: vd.year, make: vd.make, model: vd.model, licensePlate: vd.licensePlate },
    lastReportedOdometer: match.lastReportedOdometer ?? null,
  });
});

// ── Version ───────────────────────────────────────────────
app.get('/api/version', (req, res) => res.json({ version: pkg.version }));

// ── Clients ───────────────────────────────────────────────
app.get('/api/clients', (req, res) => {
  const rows = db.prepare('SELECT * FROM clients ORDER BY name').all();
  res.json(rows);
});

app.post('/api/clients', (req, res) => {
  const { name, phone, address } = req.body;
  if (!name?.trim()) return res.status(400).json({ error: 'Name is required' });
  try {
    const result = db
      .prepare('INSERT INTO clients (name, phone, address) VALUES (?,?,?)')
      .run(name.trim(), phone?.trim() || null, address?.trim() || null);
    res.json({
      id: result.lastInsertRowid,
      name: name.trim(),
      phone: phone?.trim() || null,
      address: address?.trim() || null,
    });
  } catch (e) {
    res.status(409).json({ error: 'Client already exists' });
  }
});

app.put('/api/clients/:id', (req, res) => {
  const { name, phone, address } = req.body;
  if (!name?.trim()) return res.status(400).json({ error: 'Name is required' });
  try {
    const result = db
      .prepare('UPDATE clients SET name=?, phone=?, address=? WHERE id=?')
      .run(name.trim(), phone?.trim() || null, address?.trim() || null, req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: 'Client not found' });
    res.json({ ok: true });
  } catch (e) {
    res.status(409).json({ error: 'Client already exists' });
  }
});

app.delete('/api/clients/:id', (req, res) => {
  db.prepare('DELETE FROM clients WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ── Services ──────────────────────────────────────────────
app.get('/api/services', (req, res) => {
  const { month, year, client_id, status } = req.query;
  let query = `
    SELECT s.*, c.name as client_name,
           COUNT(a.id) as attachment_count,
           (SELECT id FROM service_attachments WHERE service_id = s.id AND mime_type LIKE 'image/%' ORDER BY created_at LIMIT 1) as first_image_id
    FROM services s
    LEFT JOIN clients c ON s.client_id = c.id
    LEFT JOIN service_attachments a ON a.service_id = s.id
    WHERE 1=1
  `;
  const params = [];
  if (month && year) {
    query += ` AND strftime('%Y-%m', s.date) = ?`;
    params.push(`${year}-${month.padStart(2, '0')}`);
  }
  if (client_id) {
    query += ` AND s.client_id = ?`;
    params.push(client_id);
  }
  if (status) {
    query += ` AND s.status = ?`;
    params.push(status);
  }
  query += ` GROUP BY s.id ORDER BY s.date DESC, s.start_time DESC`;
  const rows = db.prepare(query).all(...params);
  res.json(rows);
});

app.get('/api/appointments/upcoming', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const rows = db
    .prepare(
      `
    SELECT s.id, s.date, s.start_time, s.end_time, s.description,
           s.status, c.name as client_name
    FROM services s
    LEFT JOIN clients c ON s.client_id = c.id
    WHERE s.status = 'scheduled' AND s.date >= ?
    ORDER BY s.date ASC, s.start_time ASC
  `
    )
    .all(today);
  res.json(rows);
});

app.get('/api/services/:id', (req, res) => {
  const row = db
    .prepare(
      `
    SELECT s.*, c.name as client_name, c.phone as client_phone, c.address as client_address
    FROM services s LEFT JOIN clients c ON s.client_id = c.id
    WHERE s.id = ?
  `
    )
    .get(req.params.id);
  if (!row) return res.status(404).json({ error: 'Not found' });
  res.json(row);
});

// Parse a numeric field and clamp it to >= 0; returns null for empty/missing values.
function parseNonNeg(v) {
  if (v == null || v === '') return null;
  const n = parseFloat(v);
  return isNaN(n) ? null : Math.max(0, n);
}

// Client already sends net duration_hours (deduction applied) — trust it if provided.
// Only apply discount_hours when computing from start_time/end_time.
function calcDuration(start_time, end_time, duration_hours, discount_hours) {
  if (duration_hours) return parseFloat(duration_hours);
  if (!start_time || !end_time) return null;
  const [h1, m1] = start_time.split(':').map(Number);
  const [h2, m2] = end_time.split(':').map(Number);
  let duration = (h2 * 60 + m2 - (h1 * 60 + m1)) / 60;
  if (duration < 0) duration += 24;
  if (discount_hours) duration = Math.max(0, duration - parseFloat(discount_hours));
  return parseFloat(duration.toFixed(4));
}

function calcValueAuto(duration, operator_rate, machine_rate, travel_fee, discount) {
  const totalRate = (parseFloat(operator_rate) || 0) + (parseFloat(machine_rate) || 0);
  if (!totalRate || !duration) return null;
  let total = totalRate * parseFloat(duration);
  if (travel_fee) total += parseFloat(travel_fee);
  if (discount) total = Math.max(0, total - parseFloat(discount));
  return parseFloat(total.toFixed(2));
}

app.post('/api/services', (req, res) => {
  const {
    date,
    start_time,
    end_time,
    duration_hours,
    discount_hours,
    client_id,
    description,
    value,
    hourmeter_start,
    hourmeter_end,
    operator_rate,
    machine_rate,
    travel_fee,
    discount,
    paid,
    tip,
    vat_rate,
    status,
  } = req.body;

  if (!date) return res.status(400).json({ error: 'Date is required' });

  let delta = null;
  if (hourmeter_start != null && hourmeter_end != null) {
    delta = parseFloat((parseFloat(hourmeter_end) - parseFloat(hourmeter_start)).toFixed(2));
  }

  const duration = calcDuration(start_time, end_time, duration_hours, discount_hours);
  const finalValue = value
    ? parseFloat(value)
    : calcValueAuto(duration, operator_rate, machine_rate, travel_fee, discount);

  const result = db
    .prepare(
      `
    INSERT INTO services
      (date, start_time, end_time, duration_hours, discount_hours, client_id, description, value,
       hourmeter_start, hourmeter_end, hourmeter_delta,
       operator_rate, machine_rate, travel_fee, discount, paid, tip, vat_rate, status)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `
    )
    .run(
      date,
      start_time || null,
      end_time || null,
      duration,
      parseNonNeg(discount_hours) ?? 0,
      client_id || null,
      description || null,
      finalValue,
      parseNonNeg(hourmeter_start),
      parseNonNeg(hourmeter_end),
      delta != null ? Math.max(0, delta) : null,
      parseNonNeg(operator_rate) ?? 0,
      parseNonNeg(machine_rate) ?? 0,
      parseNonNeg(travel_fee),
      parseNonNeg(discount),
      paid ? 1 : 0,
      parseNonNeg(tip) ?? 0,
      vat_rate != null && vat_rate !== '' ? parseFloat(vat_rate) : null,
      status === 'scheduled' ? 'scheduled' : 'completed'
    );

  res.json({ id: result.lastInsertRowid });
});

app.put('/api/services/:id', (req, res) => {
  const {
    date,
    start_time,
    end_time,
    duration_hours,
    discount_hours,
    client_id,
    description,
    value,
    hourmeter_start,
    hourmeter_end,
    operator_rate,
    machine_rate,
    travel_fee,
    discount,
    paid,
    tip,
    vat_rate,
    status,
  } = req.body;

  let delta = null;
  if (hourmeter_start != null && hourmeter_end != null) {
    delta = parseFloat((parseFloat(hourmeter_end) - parseFloat(hourmeter_start)).toFixed(2));
  }

  const duration = calcDuration(start_time, end_time, duration_hours, discount_hours);
  const finalValue = value
    ? parseFloat(value)
    : calcValueAuto(duration, operator_rate, machine_rate, travel_fee, discount);

  db.prepare(
    `
    UPDATE services SET
      date=?, start_time=?, end_time=?, duration_hours=?, discount_hours=?,
      client_id=?, description=?, value=?,
      hourmeter_start=?, hourmeter_end=?, hourmeter_delta=?,
      operator_rate=?, machine_rate=?, travel_fee=?, discount=?, paid=?, tip=?, vat_rate=?, status=?
    WHERE id=?
  `
  ).run(
    date,
    start_time || null,
    end_time || null,
    duration,
    parseNonNeg(discount_hours) ?? 0,
    client_id || null,
    description || null,
    finalValue,
    parseNonNeg(hourmeter_start),
    parseNonNeg(hourmeter_end),
    delta != null ? Math.max(0, delta) : null,
    parseNonNeg(operator_rate) ?? 0,
    parseNonNeg(machine_rate) ?? 0,
    parseNonNeg(travel_fee),
    parseNonNeg(discount),
    paid ? 1 : 0,
    parseNonNeg(tip) ?? 0,
    vat_rate != null && vat_rate !== '' ? parseFloat(vat_rate) : null,
    status === 'scheduled' ? 'scheduled' : 'completed',
    req.params.id
  );

  res.json({ ok: true });
});

app.delete('/api/services/:id', (req, res) => {
  const attachments = db.prepare('SELECT filename FROM service_attachments WHERE service_id = ?').all(req.params.id);
  attachments.forEach(a => {
    try {
      fs.unlinkSync(path.join(UPLOADS_DIR, a.filename));
    } catch (_) {}
  });
  db.prepare('DELETE FROM service_attachments WHERE service_id = ?').run(req.params.id);
  db.prepare('DELETE FROM services WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ── Quotes (Orçamentos) ───────────────────────────────────
const QUOTE_STATUSES = new Set(['pending', 'accepted', 'rejected']);

function quoteFieldsFromBody(body) {
  return {
    client_id: body.client_id || null,
    client_name: body.client_name?.trim() || null,
    client_address: body.client_address?.trim() || null,
    client_phone: body.client_phone?.trim() || null,
    description: body.description?.trim() || null,
    date: body.date || null,
    valid_until: body.valid_until || null,
    hours: parseNonNeg(body.hours),
    operator_rate: parseNonNeg(body.operator_rate) ?? 0,
    machine_rate: parseNonNeg(body.machine_rate) ?? 0,
    travel_fee: parseNonNeg(body.travel_fee),
    discount: parseNonNeg(body.discount),
    vat_rate: body.vat_rate != null && body.vat_rate !== '' ? parseFloat(body.vat_rate) : null,
    notes: body.notes?.trim() || null,
    status: QUOTE_STATUSES.has(body.status) ? body.status : 'pending',
  };
}

app.get('/api/quotes', (req, res) => {
  const rows = db
    .prepare(
      `
    SELECT q.*, COALESCE(c.name, q.client_name) AS client_name
    FROM quotes q
    LEFT JOIN clients c ON q.client_id = c.id
    ORDER BY q.number DESC, q.id DESC
  `
    )
    .all();
  res.json(rows);
});

app.get('/api/quotes/:id', (req, res) => {
  const row = db
    .prepare(
      `
    SELECT q.*, COALESCE(c.name, q.client_name) AS client_name,
           c.address AS client_address_ref, c.phone AS client_phone_ref
    FROM quotes q
    LEFT JOIN clients c ON q.client_id = c.id
    WHERE q.id = ?
  `
    )
    .get(req.params.id);
  if (!row) return res.status(404).json({ error: 'Not found' });
  res.json(row);
});

app.post('/api/quotes', (req, res) => {
  const f = quoteFieldsFromBody(req.body);
  const number =
    parseInt(db.prepare(`SELECT value FROM settings WHERE key='next_quote_number'`).get()?.value || '1', 10) || 1;
  const ref = `ORC ${new Date().getFullYear()}/${String(number).padStart(4, '0')}`;

  const result = db
    .prepare(
      `
    INSERT INTO quotes
      (number, ref, client_id, client_name, client_address, client_phone, description,
       date, valid_until, hours, operator_rate, machine_rate, travel_fee, discount, vat_rate, notes, status)
    VALUES (@number, @ref, @client_id, @client_name, @client_address, @client_phone, @description,
       @date, @valid_until, @hours, @operator_rate, @machine_rate, @travel_fee, @discount, @vat_rate, @notes, @status)
  `
    )
    .run({ ...f, number, ref });

  // Bump the shared quote counter (server-side, so re-generating an existing quote never advances it)
  db.prepare(
    `INSERT INTO settings (key, value) VALUES ('next_quote_number', ?)
              ON CONFLICT(key) DO UPDATE SET value=excluded.value`
  ).run(String(number + 1));

  res.json({ id: result.lastInsertRowid, number, ref });
});

app.put('/api/quotes/:id', (req, res) => {
  const existing = db.prepare('SELECT id FROM quotes WHERE id = ?').get(req.params.id);
  if (!existing) return res.status(404).json({ error: 'Not found' });
  const f = quoteFieldsFromBody(req.body);
  db.prepare(
    `
    UPDATE quotes SET
      client_id=@client_id, client_name=@client_name, client_address=@client_address,
      client_phone=@client_phone, description=@description, date=@date, valid_until=@valid_until,
      hours=@hours, operator_rate=@operator_rate, machine_rate=@machine_rate, travel_fee=@travel_fee,
      discount=@discount, vat_rate=@vat_rate, notes=@notes, status=@status
    WHERE id=@id
  `
  ).run({ ...f, id: req.params.id });
  res.json({ ok: true });
});

app.delete('/api/quotes/:id', (req, res) => {
  db.prepare('DELETE FROM quotes WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ── Service attachments ───────────────────────────────────
app.get('/api/services/:id/attachments', (req, res) => {
  const rows = db
    .prepare(
      'SELECT id, original_name, mime_type, size, created_at FROM service_attachments WHERE service_id = ? ORDER BY created_at'
    )
    .all(req.params.id);
  res.json(rows);
});

const ALLOWED_MIME_TYPES = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  'image/webp': 'webp',
  'image/heic': 'heic',
  'image/heif': 'heif',
  'video/mp4': 'mp4',
  'video/quicktime': 'mov',
  'video/x-msvideo': 'avi',
  'video/webm': 'webm',
  'application/pdf': 'pdf',
  'application/msword': 'doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
  'application/vnd.ms-excel': 'xls',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
};

app.post('/api/services/:id/attachments', express.raw({ type: '*/*', limit: '100mb' }), (req, res) => {
  const service = db.prepare('SELECT id FROM services WHERE id = ?').get(req.params.id);
  if (!service) return res.status(404).json({ error: 'Service not found' });
  if (!Buffer.isBuffer(req.body) || req.body.length === 0) return res.status(400).json({ error: 'Empty file' });

  const originalName = req.query.name ? decodeURIComponent(req.query.name) : 'file';
  const mimeType = (req.headers['content-type'] || 'application/octet-stream').split(';')[0].trim().toLowerCase();

  if (!ALLOWED_MIME_TYPES[mimeType]) {
    return res.status(400).json({ error: 'File type not allowed' });
  }

  const ext = ALLOWED_MIME_TYPES[mimeType];
  const filename = `${req.params.id}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}.${ext}`;

  fs.writeFileSync(path.join(UPLOADS_DIR, filename), req.body);

  const result = db
    .prepare(
      'INSERT INTO service_attachments (service_id, filename, original_name, mime_type, size) VALUES (?,?,?,?,?)'
    )
    .run(req.params.id, filename, originalName, mimeType, req.body.length);

  res.json({ id: result.lastInsertRowid });
});

// Unsafe MIME types that browsers may execute — always force download instead.
const UNSAFE_MIME_RE =
  /^(text\/html|text\/javascript|application\/javascript|application\/xhtml\+xml|image\/svg\+xml)/i;

app.get('/api/attachments/:id', (req, res) => {
  const a = db.prepare('SELECT * FROM service_attachments WHERE id = ?').get(req.params.id);
  if (!a) return res.status(404).json({ error: 'Not found' });
  const filePath = path.join(UPLOADS_DIR, a.filename);
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found' });
  const mime = a.mime_type || 'application/octet-stream';
  res.setHeader('Content-Type', UNSAFE_MIME_RE.test(mime) ? 'application/octet-stream' : mime);
  res.sendFile(path.resolve(filePath));
});

app.delete('/api/attachments/:id', (req, res) => {
  const a = db.prepare('SELECT * FROM service_attachments WHERE id = ?').get(req.params.id);
  if (!a) return res.status(404).json({ error: 'Not found' });
  try {
    fs.unlinkSync(path.join(UPLOADS_DIR, a.filename));
  } catch (_) {}
  db.prepare('DELETE FROM service_attachments WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ── Summary / stats ───────────────────────────────────────
// When month+year are absent, returns all-time totals (global view)
app.get('/api/summary', (req, res) => {
  const { month, year } = req.query;
  let where = `(status = 'completed' OR status IS NULL)`;
  const params = [];
  if (month && year) {
    where = `strftime('%Y-%m', date) = ? AND (status = 'completed' OR status IS NULL)`;
    params.push(`${year}-${month.padStart(2, '0')}`);
  }

  const stats = db
    .prepare(
      `
    SELECT
      COUNT(*) as total_services,
      ROUND(SUM(duration_hours),2) as total_hours,
      ROUND(SUM(value),2) as total_net,
      ROUND(SUM(COALESCE(value,0) * (1 + COALESCE(vat_rate,0)/100.0)),2) as total_gross,
      ROUND(SUM(CASE WHEN paid=1 THEN COALESCE(value,0)*(1+COALESCE(vat_rate,0)/100.0) + COALESCE(tip,0) ELSE 0 END),2) as total_received,
      ROUND(SUM(CASE WHEN (paid=0 OR paid IS NULL) AND value IS NOT NULL THEN value*(1+COALESCE(vat_rate,0)/100.0) ELSE 0 END),2) as total_pending,
      ROUND(SUM(hourmeter_delta),2) as total_hourmeter,
      ROUND(SUM(COALESCE(tip,0)),2) as total_tips,
      ROUND(SUM(COALESCE(operator_rate,0) * COALESCE(duration_hours,0)),2) as total_operator,
      ROUND(SUM(COALESCE(machine_rate,0)  * COALESCE(duration_hours,0)),2) as total_machine,
      ROUND(SUM(COALESCE(discount,0)),2) as total_discount,
      ROUND(AVG(CASE WHEN duration_hours IS NOT NULL THEN duration_hours END),2) as avg_duration
    FROM services WHERE ${where}
  `
    )
    .get(...params);

  const byClient = db
    .prepare(
      `
    SELECT c.name, COUNT(*) as services,
           ROUND(SUM(s.duration_hours),2) as hours,
           ROUND(SUM(s.value),2) as net,
           ROUND(SUM(COALESCE(s.value,0) * (1 + COALESCE(s.vat_rate,0)/100.0)),2) as value,
           ROUND(SUM(COALESCE(s.tip,0)),2) as tips
    FROM services s
    LEFT JOIN clients c ON s.client_id = c.id
    WHERE ${where}
    GROUP BY s.client_id ORDER BY value DESC
  `
    )
    .all(...params);

  res.json({ stats, byClient });
});

// ── Export CSV ─────────────────────────────────────────────
function csvCell(v) {
  if (v === null || v === undefined) return '';
  const s = String(v);
  // Prefix formula-trigger characters to prevent spreadsheet injection
  const safe = /^[=+\-@\t\r]/.test(s) ? `'${s}` : s;
  if (safe.includes(',') || safe.includes('"') || safe.includes('\n') || safe.includes('\r')) {
    return `"${safe.replace(/"/g, '""')}"`;
  }
  return safe;
}

app.get('/api/export/csv', (req, res) => {
  const rows = db
    .prepare(
      `
    SELECT s.date, s.start_time, s.end_time,
           ROUND(s.discount_hours,2) as discount_hours,
           ROUND(s.duration_hours,2) as duration_hours,
           c.name as client,
           s.description,
           s.operator_rate, s.machine_rate, s.travel_fee, s.discount,
           s.value, s.paid,
           ROUND(s.tip,2) as tip,
           s.hourmeter_start, s.hourmeter_end,
           ROUND(s.hourmeter_delta,2) as hourmeter_delta,
           COALESCE(s.status,'completed') as status
    FROM services s
    LEFT JOIN clients c ON s.client_id = c.id
    ORDER BY s.date DESC
  `
    )
    .all();

  const header =
    'Date,Start,End,Discount(h),Duration(h),Client,Description,Operator/h,Machine/h,Travel,Discount(€),Value(€),Paid,Tip(€),Hourmeter.Start,Hourmeter.End,Hourmeter.Delta,Status\n';
  const csv =
    header +
    rows
      .map(r =>
        [
          r.date,
          r.start_time || '',
          r.end_time || '',
          r.discount_hours || 0,
          r.duration_hours || '',
          r.client || '',
          r.description || '',
          r.operator_rate || 0,
          r.machine_rate || 0,
          r.travel_fee || '',
          r.discount || '',
          r.value || '',
          r.paid ? 'Yes' : 'No',
          r.tip || 0,
          r.hourmeter_start || '',
          r.hourmeter_end || '',
          r.hourmeter_delta || '',
          r.status,
        ]
          .map(csvCell)
          .join(',')
      )
      .join('\n');

  console.log(`[export] csv rows=${rows.length}`);
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="services.csv"');
  res.send(csv);
});

// ── Backup ────────────────────────────────────────────────
// Bundle format (SLB1): magic(4) | dbSize(4 LE) | dbData | fileCount(4 LE)
//   then per file: nameLen(4 LE) | name(UTF-8) | dataLen(4 LE) | data
app.get('/api/backup/download', (req, res) => {
  const dbBuf = fs.readFileSync(DB_PATH);
  const files = [];
  if (fs.existsSync(UPLOADS_DIR)) {
    for (const name of fs.readdirSync(UPLOADS_DIR)) {
      const p = path.join(UPLOADS_DIR, name);
      if (fs.statSync(p).isFile()) files.push({ name, data: fs.readFileSync(p) });
    }
  }

  const dbSizeBuf = Buffer.allocUnsafe(4);
  dbSizeBuf.writeUInt32LE(dbBuf.length, 0);
  const countBuf = Buffer.allocUnsafe(4);
  countBuf.writeUInt32LE(files.length, 0);
  const parts = [Buffer.from('SLB1'), dbSizeBuf, dbBuf, countBuf];

  for (const f of files) {
    const nb = Buffer.from(f.name, 'utf8');
    const nlb = Buffer.allocUnsafe(4);
    nlb.writeUInt32LE(nb.length, 0);
    const dsb = Buffer.allocUnsafe(4);
    dsb.writeUInt32LE(f.data.length, 0);
    parts.push(nlb, nb, dsb, f.data);
  }

  const dateStr = new Date().toISOString().slice(0, 10);
  const totalSize = parts.reduce((s, b) => s + b.length, 0);
  console.log(`[backup] download size=${totalSize}`);
  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Disposition', `attachment; filename="servilog-backup-${dateStr}.slb"`);
  res.send(Buffer.concat(parts));
});

app.post('/api/backup/restore', express.raw({ type: 'application/octet-stream', limit: '500mb' }), (req, res) => {
  if (!Buffer.isBuffer(req.body) || req.body.length < 8) {
    return res.status(400).json({ error: 'Invalid file' });
  }
  const magic4 = req.body.slice(0, 4).toString('ascii');

  if (magic4 === 'SLB1') {
    try {
      // Parse phase — fully into memory before touching any live files
      let off = 4;
      const dbSize = req.body.readUInt32LE(off);
      off += 4;
      const dbData = req.body.slice(off, off + dbSize);
      off += dbSize;
      if (!dbData.slice(0, 15).toString('utf8').startsWith('SQLite format 3')) {
        return res.status(400).json({ error: 'Invalid backup: bad database' });
      }
      const fileCount = req.body.readUInt32LE(off);
      off += 4;
      if (fileCount > 100000) throw new Error('Too many files');
      const uploadFiles = [];
      for (let i = 0; i < fileCount; i++) {
        if (off + 4 > req.body.length) throw new Error('Truncated');
        const nl = req.body.readUInt32LE(off);
        off += 4;
        if (off + nl > req.body.length) throw new Error('Truncated');
        const name = req.body.slice(off, off + nl).toString('utf8');
        off += nl;
        if (off + 4 > req.body.length) throw new Error('Truncated');
        const dl = req.body.readUInt32LE(off);
        off += 4;
        if (off + dl > req.body.length) throw new Error('Truncated');
        const data = req.body.slice(off, off + dl);
        off += dl;
        uploadFiles.push({ name: path.basename(name), data });
      }

      // Write phase — temp locations only
      const tmpDb = DB_PATH + '.restoring';
      const tmpUploads = UPLOADS_DIR + '_restoring';
      fs.writeFileSync(tmpDb, dbData);
      fs.mkdirSync(tmpUploads, { recursive: true });
      for (const f of uploadFiles) {
        fs.writeFileSync(path.join(tmpUploads, f.name), f.data);
      }

      // Swap phase — all temp writes succeeded, now commit atomically
      const oldUploads = UPLOADS_DIR + '_old_' + Date.now();
      db.close();
      fs.renameSync(tmpDb, DB_PATH);
      if (fs.existsSync(UPLOADS_DIR)) fs.renameSync(UPLOADS_DIR, oldUploads);
      fs.renameSync(tmpUploads, UPLOADS_DIR);
      db = openDb(DB_PATH);
      runMigrations();
      try {
        fs.rmSync(oldUploads, { recursive: true, force: true });
      } catch (_) {}

      console.log('[backup] restore ok');
      res.json({ ok: true });
    } catch (e) {
      // Clean up any temp files left behind
      try {
        fs.unlinkSync(DB_PATH + '.restoring');
      } catch (_) {}
      try {
        fs.rmSync(UPLOADS_DIR + '_restoring', { recursive: true, force: true });
      } catch (_) {}
      // If DB was closed but not yet reopened, reopen what's there
      if (!db.open) {
        try {
          db = openDb(DB_PATH);
          runMigrations();
        } catch (_) {}
      }
      console.log(`[backup] restore error ${e.message}`);
      res.status(400).json({ error: 'Corrupt backup file' });
    }
  } else if (req.body.slice(0, 15).toString('utf8').startsWith('SQLite format 3')) {
    // Legacy .db backup — no pictures
    const tmpDb = DB_PATH + '.restoring';
    try {
      fs.writeFileSync(tmpDb, req.body);
      db.close();
      fs.renameSync(tmpDb, DB_PATH);
      db = openDb(DB_PATH);
      runMigrations();
      console.log('[backup] restore ok');
      res.json({ ok: true });
    } catch (e) {
      try {
        fs.unlinkSync(tmpDb);
      } catch (_) {}
      if (!db.open) {
        try {
          db = openDb(DB_PATH);
          runMigrations();
        } catch (_) {}
      }
      console.log(`[backup] restore error ${e.message}`);
      res.status(400).json({ error: 'Restore failed' });
    }
  } else {
    res.status(400).json({ error: 'Invalid file' });
  }
});

// ── App stats (for settings page) ────────────────────────
app.get('/api/stats', (req, res) => {
  const totalServices = db.prepare('SELECT COUNT(*) as n FROM services').get().n;
  const totalClients = db.prepare('SELECT COUNT(*) as n FROM clients').get().n;
  const totalQuotes = db.prepare('SELECT COUNT(*) as n FROM quotes').get().n;
  const totalAttachments = db.prepare('SELECT COUNT(*) as n FROM service_attachments').get().n;
  const dateRange = db.prepare('SELECT MIN(date) as first, MAX(date) as last FROM services').get();
  let dbSizeBytes = 0;
  let uploadsSizeBytes = 0;
  try {
    dbSizeBytes = fs.statSync(DB_PATH).size;
  } catch (_) {}
  try {
    for (const name of fs.readdirSync(UPLOADS_DIR)) {
      try {
        uploadsSizeBytes += fs.statSync(path.join(UPLOADS_DIR, name)).size;
      } catch (_) {}
    }
  } catch (_) {}
  res.json({ totalServices, totalClients, totalQuotes, totalAttachments, dbSizeBytes, uploadsSizeBytes, dateRange });
});

// ── Settings API ──────────────────────────────────────────
const SETTINGS_ALLOWLIST = new Set([
  'lang',
  'theme',
  'currency',
  'extra_stats',
  'default_operator_rate',
  'default_machine_rate',
  'default_travel_fee',
  'default_paid',
  'base_address',
  'base_lat',
  'base_lng',
  'travel_price_per_km',
  'travel_fee_step',
  'travel_min_fee',
  'inv_name',
  'inv_address',
  'inv_nif',
  'inv_email',
  'inv_phone',
  'inv_note',
  'next_invoice_number',
  'next_quote_number',
  'lubelogger_url',
  'lubelogger_api_key',
  'lubelogger_vehicle_id',
]);

app.get('/api/settings', (req, res) => {
  const rows = db.prepare('SELECT key, value FROM settings').all();
  const result = {};
  for (const row of rows) result[row.key] = row.value;
  res.json(result);
});

app.patch('/api/settings', (req, res) => {
  const body = req.body;
  if (!body || typeof body !== 'object') return res.status(400).json({ error: 'Invalid body' });
  const upsert = db.prepare(
    'INSERT INTO settings (key, value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value'
  );
  const upsertMany = db.transaction(entries => {
    for (const [key, value] of entries) {
      if (!SETTINGS_ALLOWLIST.has(key)) continue;
      upsert.run(key, String(value));
    }
  });
  upsertMany(Object.entries(body));
  res.json({ ok: true });
});

// ── Notification test ─────────────────────────────────────
app.post('/api/notify/test', async (req, res) => {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !NOTIFY_EMAIL) {
    return res.status(400).json({ error: 'SMTP not configured' });
  }
  const transport = createMailTransport();
  try {
    await transport.sendMail({
      from: SMTP_FROM,
      to: NOTIFY_EMAIL,
      subject: `[ServiLog] Test email`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;font-size:14px;color:#1a1e2e;background:#f4f4f4;margin:0;padding:20px">
  <div style="max-width:540px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.10)">
    <div style="background:#1a1e2e;color:#fff;padding:18px 24px">
      <span style="font-size:17px;font-weight:700">✅ ServiLog — SMTP OK</span>
    </div>
    <div style="padding:24px">
      <p>This is a test email sent from ServiLog v${pkg.version}.</p>
      <p style="margin-top:12px;color:#666;font-size:12px">SMTP: ${SMTP_HOST}:${SMTP_PORT} → ${NOTIFY_EMAIL}</p>
    </div>
  </div>
</body></html>`,
    });
    console.log(`[notify] test email sent → ${NOTIFY_EMAIL}`);
    res.json({ ok: true, to: NOTIFY_EMAIL });
  } catch (err) {
    console.error(`[notify] test email error: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
});

// ── Email notifications ───────────────────────────────────
// Triggered daily at NOTIFY_TIME (default 08:00 local server time).
// Sends one email per scheduled service due in exactly 7 days or 1 day.
// Required env vars: SMTP_HOST, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL
// Optional: SMTP_PORT (default 587), SMTP_FROM, SMTP_SECURE (true/false),
//           NOTIFY_TIME (HH:MM, default "08:00")

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;
const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL;
const NOTIFY_TIME = process.env.NOTIFY_TIME || '08:00';

function createMailTransport() {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !NOTIFY_EMAIL) return null;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

function dateOffsetISO(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function fmtDate(iso) {
  if (!iso) return iso;
  const [y, m, day] = iso.split('-');
  return `${day}/${m}/${y}`;
}

async function sendServiceReminder(service, daysUntil) {
  const transport = createMailTransport();
  if (!transport) return;

  const label = daysUntil === 1 ? 'amanhã' : `em ${daysUntil} dias`;
  const labelEn = daysUntil === 1 ? 'tomorrow' : `in ${daysUntil} days`;
  const client = service.client_name || '—';
  const dateStr = fmtDate(service.date);
  const timeStr = service.start_time ? ` às ${service.start_time}` : '';
  const desc = service.description || '';

  const html = `
<!DOCTYPE html><html><head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;font-size:14px;color:#1a1e2e;background:#f4f4f4;margin:0;padding:20px">
  <div style="max-width:540px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.10)">
    <div style="background:#1a1e2e;color:#fff;padding:18px 24px;display:flex;align-items:center;gap:12px">
      <span style="font-size:22px">📅</span>
      <span style="font-size:17px;font-weight:700">ServiLog — Lembrete de Serviço</span>
    </div>
    <div style="padding:24px">
      <p style="font-size:16px;margin:0 0 18px">Tens um serviço agendado <strong>${label}</strong>:</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:8px 0;color:#666;width:110px">Data</td><td style="padding:8px 0;font-weight:600">${dateStr}${timeStr}</td></tr>
        <tr><td style="padding:8px 0;color:#666">Cliente</td><td style="padding:8px 0;font-weight:600">${client}</td></tr>
        ${desc ? `<tr><td style="padding:8px 0;color:#666">Descrição</td><td style="padding:8px 0">${desc}</td></tr>` : ''}
      </table>
      <p style="margin:20px 0 0;font-size:12px;color:#999">— ServiLog v${pkg.version}</p>
    </div>
  </div>
</body></html>`;

  const subject = `[ServiLog] Serviço ${label} — ${client} (${dateStr})`;

  try {
    await transport.sendMail({ from: SMTP_FROM, to: NOTIFY_EMAIL, subject, html });
    console.log(`[notify] email sent: service ${service.id} (${daysUntil}d) → ${NOTIFY_EMAIL}`);
  } catch (err) {
    console.error(`[notify] email error: ${err.message}`);
  }
}

async function runNotificationCheck() {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !NOTIFY_EMAIL) return;
  console.log('[notify] running daily check');
  const targets = [
    { days: 7, date: dateOffsetISO(7) },
    { days: 1, date: dateOffsetISO(1) },
  ];
  for (const { days, date } of targets) {
    const services = db
      .prepare(
        `
      SELECT s.id, s.date, s.start_time, s.description, c.name as client_name
      FROM services s
      LEFT JOIN clients c ON s.client_id = c.id
      WHERE s.status = 'scheduled' AND s.date = ?
    `
      )
      .all(date);
    for (const svc of services) {
      await sendServiceReminder(svc, days);
    }
    if (services.length) console.log(`[notify] ${services.length} reminder(s) for ${date} (${days}d notice)`);
  }
}

function scheduleNotifications() {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !NOTIFY_EMAIL) {
    console.log('[notify] SMTP not configured — notifications disabled');
    return;
  }
  const [hh, mm] = NOTIFY_TIME.split(':').map(Number);
  function msUntilNext() {
    const now = new Date();
    const next = new Date(now);
    next.setHours(hh, mm, 0, 0);
    if (next <= now) next.setDate(next.getDate() + 1);
    return next - now;
  }
  function scheduleNext() {
    const delay = msUntilNext();
    console.log(`[notify] next check in ${Math.round(delay / 60000)} min (at ${NOTIFY_TIME})`);
    setTimeout(async () => {
      await runNotificationCheck();
      scheduleNext();
    }, delay);
  }
  scheduleNext();
}

scheduleNotifications();

// Bind explicitly to 0.0.0.0 so the container healthcheck (127.0.0.1) can reach it
// regardless of IPv6/dual-stack behaviour.
app.listen(PORT, '0.0.0.0', () => console.log(`[ServiLog] v${pkg.version} running on port ${PORT}`));
