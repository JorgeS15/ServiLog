const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const pkg = require('./package.json');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = process.env.DB_PATH || '/data/tracker.db';

// Ensure data dir exists
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

// Use let so the restore endpoint can close and reopen the connection
let db = new Database(DB_PATH);

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
    created_at TEXT DEFAULT (datetime('now','localtime'))
  );

  INSERT OR IGNORE INTO clients (name) VALUES
    ('Particular'),
    ('Sem cliente');
`);

// Run all migrations — safe to call multiple times
function runMigrations() {
  const tableExists = name => !!db.prepare(`SELECT name FROM sqlite_master WHERE type='table' AND name=?`).get(name);
  const colExists = (tbl, col) => db.prepare(`PRAGMA table_info(${tbl})`).all().some(c => c.name === col);

  // Pre-v0.6 column additions (run against old Portuguese table names if still present)
  if (tableExists('servicos')) {
    try { db.exec(`ALTER TABLE servicos ADD COLUMN horas_desconto REAL DEFAULT 0`); } catch (_) {}
    try { db.exec(`ALTER TABLE servicos ADD COLUMN preco_hora REAL DEFAULT NULL`); } catch (_) {}
    try { db.exec(`ALTER TABLE servicos ADD COLUMN preco_deslocacao REAL DEFAULT NULL`); } catch (_) {}
    try { db.exec(`ALTER TABLE servicos ADD COLUMN desconto REAL DEFAULT NULL`); } catch (_) {}
    try { db.exec(`ALTER TABLE servicos ADD COLUMN pago INTEGER DEFAULT 0`); } catch (_) {}
    try { db.exec(`ALTER TABLE servicos ADD COLUMN gorjeta REAL DEFAULT 0`); } catch (_) {}
  }
  if (tableExists('clientes')) {
    try { db.exec(`ALTER TABLE clientes ADD COLUMN telefone TEXT`); } catch (_) {}
    try { db.exec(`ALTER TABLE clientes ADD COLUMN endereco TEXT`); } catch (_) {}
  }

  // v0.6.0 — rename tables to English
  if (tableExists('clientes') && !tableExists('clients')) {
    db.exec('ALTER TABLE clientes RENAME TO clients');
  }
  if (tableExists('servicos') && !tableExists('services')) {
    db.exec('ALTER TABLE servicos RENAME TO services');
  }

  // v0.6.0 — rename clients columns
  if (colExists('clients', 'nome'))      db.exec('ALTER TABLE clients RENAME COLUMN nome TO name');
  if (colExists('clients', 'telefone'))  db.exec('ALTER TABLE clients RENAME COLUMN telefone TO phone');
  if (colExists('clients', 'endereco'))  db.exec('ALTER TABLE clients RENAME COLUMN endereco TO address');
  if (colExists('clients', 'criado_em')) db.exec('ALTER TABLE clients RENAME COLUMN criado_em TO created_at');

  // v0.6.0 — rename services columns
  if (colExists('services', 'data'))             db.exec('ALTER TABLE services RENAME COLUMN data TO date');
  if (colExists('services', 'hora_inicio'))      db.exec('ALTER TABLE services RENAME COLUMN hora_inicio TO start_time');
  if (colExists('services', 'hora_fim'))         db.exec('ALTER TABLE services RENAME COLUMN hora_fim TO end_time');
  if (colExists('services', 'duracao_horas'))    db.exec('ALTER TABLE services RENAME COLUMN duracao_horas TO duration_hours');
  if (colExists('services', 'horas_desconto'))   db.exec('ALTER TABLE services RENAME COLUMN horas_desconto TO discount_hours');
  if (colExists('services', 'cliente_id'))       db.exec('ALTER TABLE services RENAME COLUMN cliente_id TO client_id');
  if (colExists('services', 'descricao'))        db.exec('ALTER TABLE services RENAME COLUMN descricao TO description');
  if (colExists('services', 'valor'))            db.exec('ALTER TABLE services RENAME COLUMN valor TO value');
  if (colExists('services', 'preco_hora'))       db.exec('ALTER TABLE services RENAME COLUMN preco_hora TO price_per_hour');
  if (colExists('services', 'preco_deslocacao')) db.exec('ALTER TABLE services RENAME COLUMN preco_deslocacao TO travel_fee');
  if (colExists('services', 'desconto'))         db.exec('ALTER TABLE services RENAME COLUMN desconto TO discount');
  if (colExists('services', 'pago'))             db.exec('ALTER TABLE services RENAME COLUMN pago TO paid');
  if (colExists('services', 'gorjeta'))          db.exec('ALTER TABLE services RENAME COLUMN gorjeta TO tip');
  if (colExists('services', 'horimetro_inicio')) db.exec('ALTER TABLE services RENAME COLUMN horimetro_inicio TO hourmeter_start');
  if (colExists('services', 'horimetro_fim'))    db.exec('ALTER TABLE services RENAME COLUMN horimetro_fim TO hourmeter_end');
  if (colExists('services', 'horimetro_delta'))  db.exec('ALTER TABLE services RENAME COLUMN horimetro_delta TO hourmeter_delta');
  if (colExists('services', 'criado_em'))        db.exec('ALTER TABLE services RENAME COLUMN criado_em TO created_at');
}
runMigrations();

app.use(express.json());

// Serve sw.js dynamically so cache version matches package.json — forces cache bust on every release
const swTemplate = fs.readFileSync(path.join(__dirname, 'public', 'sw.js'), 'utf8');
app.get('/sw.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Cache-Control', 'no-store');
  res.send(swTemplate.replace('__VERSION__', pkg.version));
});

app.use(express.static(path.join(__dirname, 'public')));

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
    const result = db.prepare('INSERT INTO clients (name, phone, address) VALUES (?,?,?)').run(
      name.trim(), phone?.trim() || null, address?.trim() || null
    );
    res.json({ id: result.lastInsertRowid, name: name.trim(), phone: phone?.trim() || null, address: address?.trim() || null });
  } catch (e) {
    res.status(409).json({ error: 'Client already exists' });
  }
});

app.put('/api/clients/:id', (req, res) => {
  const { name, phone, address } = req.body;
  if (!name?.trim()) return res.status(400).json({ error: 'Name is required' });
  try {
    db.prepare('UPDATE clients SET name=?, phone=?, address=? WHERE id=?').run(
      name.trim(), phone?.trim() || null, address?.trim() || null, req.params.id
    );
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
  const { month, year, client_id } = req.query;
  let query = `
    SELECT s.*, c.name as client_name
    FROM services s
    LEFT JOIN clients c ON s.client_id = c.id
    WHERE 1=1
  `;
  const params = [];
  if (month && year) {
    query += ` AND strftime('%Y-%m', s.date) = ?`;
    params.push(`${year}-${month.padStart(2,'0')}`);
  }
  if (client_id) {
    query += ` AND s.client_id = ?`;
    params.push(client_id);
  }
  query += ` ORDER BY s.date DESC, s.start_time DESC`;
  const rows = db.prepare(query).all(...params);
  res.json(rows);
});

app.get('/api/services/:id', (req, res) => {
  const row = db.prepare(`
    SELECT s.*, c.name as client_name
    FROM services s LEFT JOIN clients c ON s.client_id = c.id
    WHERE s.id = ?
  `).get(req.params.id);
  if (!row) return res.status(404).json({ error: 'Not found' });
  res.json(row);
});

// Client already sends net duration_hours (deduction applied) — trust it if provided.
// Only apply discount_hours when computing from start_time/end_time.
function calcDuration(start_time, end_time, duration_hours, discount_hours) {
  if (duration_hours) return parseFloat(duration_hours);
  if (!start_time || !end_time) return null;
  const [h1, m1] = start_time.split(':').map(Number);
  const [h2, m2] = end_time.split(':').map(Number);
  let duration = ((h2 * 60 + m2) - (h1 * 60 + m1)) / 60;
  if (duration < 0) duration += 24;
  if (discount_hours) duration = Math.max(0, duration - parseFloat(discount_hours));
  return parseFloat(duration.toFixed(4));
}

function calcValueAuto(duration, price_per_hour, travel_fee, discount) {
  if (!price_per_hour || !duration) return null;
  let total = parseFloat(price_per_hour) * parseFloat(duration);
  if (travel_fee) total += parseFloat(travel_fee);
  if (discount) total = Math.max(0, total - parseFloat(discount));
  return parseFloat(total.toFixed(2));
}

app.post('/api/services', (req, res) => {
  const {
    date, start_time, end_time, duration_hours, discount_hours,
    client_id, description, value,
    hourmeter_start, hourmeter_end,
    price_per_hour, travel_fee, discount, paid, tip
  } = req.body;

  if (!date) return res.status(400).json({ error: 'Date is required' });

  let delta = null;
  if (hourmeter_start != null && hourmeter_end != null) {
    delta = parseFloat(hourmeter_end) - parseFloat(hourmeter_start);
  }

  const duration = calcDuration(start_time, end_time, duration_hours, discount_hours);
  const finalValue = value ? parseFloat(value) : calcValueAuto(duration, price_per_hour, travel_fee, discount);

  const result = db.prepare(`
    INSERT INTO services
      (date, start_time, end_time, duration_hours, discount_hours, client_id, description, value,
       hourmeter_start, hourmeter_end, hourmeter_delta,
       price_per_hour, travel_fee, discount, paid, tip)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `).run(
    date, start_time || null, end_time || null,
    duration,
    discount_hours ? parseFloat(discount_hours) : 0,
    client_id || null, description || null,
    finalValue,
    hourmeter_start != null ? parseFloat(hourmeter_start) : null,
    hourmeter_end != null ? parseFloat(hourmeter_end) : null,
    delta,
    price_per_hour ? parseFloat(price_per_hour) : null,
    travel_fee ? parseFloat(travel_fee) : null,
    discount ? parseFloat(discount) : null,
    paid ? 1 : 0,
    tip ? parseFloat(tip) : 0
  );

  res.json({ id: result.lastInsertRowid });
});

app.put('/api/services/:id', (req, res) => {
  const {
    date, start_time, end_time, duration_hours, discount_hours,
    client_id, description, value,
    hourmeter_start, hourmeter_end,
    price_per_hour, travel_fee, discount, paid, tip
  } = req.body;

  let delta = null;
  if (hourmeter_start != null && hourmeter_end != null) {
    delta = parseFloat(hourmeter_end) - parseFloat(hourmeter_start);
  }

  const duration = calcDuration(start_time, end_time, duration_hours, discount_hours);
  const finalValue = value ? parseFloat(value) : calcValueAuto(duration, price_per_hour, travel_fee, discount);

  db.prepare(`
    UPDATE services SET
      date=?, start_time=?, end_time=?, duration_hours=?, discount_hours=?,
      client_id=?, description=?, value=?,
      hourmeter_start=?, hourmeter_end=?, hourmeter_delta=?,
      price_per_hour=?, travel_fee=?, discount=?, paid=?, tip=?
    WHERE id=?
  `).run(
    date, start_time || null, end_time || null,
    duration,
    discount_hours ? parseFloat(discount_hours) : 0,
    client_id || null, description || null,
    finalValue,
    hourmeter_start != null ? parseFloat(hourmeter_start) : null,
    hourmeter_end != null ? parseFloat(hourmeter_end) : null,
    delta,
    price_per_hour ? parseFloat(price_per_hour) : null,
    travel_fee ? parseFloat(travel_fee) : null,
    discount ? parseFloat(discount) : null,
    paid ? 1 : 0,
    tip ? parseFloat(tip) : 0,
    req.params.id
  );

  res.json({ ok: true });
});

app.delete('/api/services/:id', (req, res) => {
  db.prepare('DELETE FROM services WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ── Summary / stats ───────────────────────────────────────
// When month+year are absent, returns all-time totals (global view)
app.get('/api/summary', (req, res) => {
  const { month, year } = req.query;
  let where = '1=1';
  const params = [];
  if (month && year) {
    where = `strftime('%Y-%m', date) = ?`;
    params.push(`${year}-${month.padStart(2,'0')}`);
  }

  const stats = db.prepare(`
    SELECT
      COUNT(*) as total_services,
      ROUND(SUM(duration_hours),2) as total_hours,
      ROUND(SUM(value),2) as total_value,
      ROUND(SUM(CASE WHEN paid=1 THEN COALESCE(value,0) + COALESCE(tip,0) ELSE 0 END),2) as total_received,
      ROUND(SUM(CASE WHEN (paid=0 OR paid IS NULL) AND value IS NOT NULL THEN value ELSE 0 END),2) as total_pending,
      ROUND(SUM(hourmeter_delta),2) as total_hourmeter,
      ROUND(SUM(COALESCE(tip,0)),2) as total_tips
    FROM services WHERE ${where}
  `).get(...params);

  const byClient = db.prepare(`
    SELECT c.name, COUNT(*) as services,
           ROUND(SUM(s.duration_hours),2) as hours,
           ROUND(SUM(s.value),2) as value,
           ROUND(SUM(COALESCE(s.tip,0)),2) as tips
    FROM services s
    LEFT JOIN clients c ON s.client_id = c.id
    WHERE ${where}
    GROUP BY s.client_id ORDER BY value DESC
  `).all(...params);

  res.json({ stats, byClient });
});

// ── Export CSV ─────────────────────────────────────────────
app.get('/api/export/csv', (req, res) => {
  const rows = db.prepare(`
    SELECT s.date, s.start_time, s.end_time,
           ROUND(s.discount_hours,2) as discount_hours,
           ROUND(s.duration_hours,2) as duration_hours,
           c.name as client,
           s.description,
           s.price_per_hour, s.travel_fee, s.discount,
           s.value, s.paid,
           ROUND(s.tip,2) as tip,
           s.hourmeter_start, s.hourmeter_end,
           ROUND(s.hourmeter_delta,2) as hourmeter_delta
    FROM services s
    LEFT JOIN clients c ON s.client_id = c.id
    ORDER BY s.date DESC
  `).all();

  const header = 'Date,Start,End,Discount(h),Duration(h),Client,Description,Price/h,Travel,Discount(€),Value(€),Paid,Tip(€),Hourmeter.Start,Hourmeter.End,Hourmeter.Delta\n';
  const csv = header + rows.map(r =>
    [r.date, r.start_time||'', r.end_time||'', r.discount_hours||0, r.duration_hours||'',
     `"${r.client||''}"`, `"${r.description||''}"`,
     r.price_per_hour||'', r.travel_fee||'', r.discount||'',
     r.value||'', r.paid ? 'Yes' : 'No',
     r.tip||0,
     r.hourmeter_start||'', r.hourmeter_end||'', r.hourmeter_delta||'']
    .join(',')
  ).join('\n');

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="services.csv"');
  res.send(csv);
});

// ── Backup ────────────────────────────────────────────────
app.get('/api/backup/download', (req, res) => {
  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Disposition', 'attachment; filename="servilog-backup.db"');
  res.sendFile(path.resolve(DB_PATH));
});

app.post('/api/backup/restore',
  express.raw({ type: 'application/octet-stream', limit: '50mb' }),
  (req, res) => {
    if (!Buffer.isBuffer(req.body) || req.body.length < 16) {
      return res.status(400).json({ error: 'Invalid file' });
    }
    const magic = req.body.slice(0, 16).toString('utf8');
    if (!magic.startsWith('SQLite format 3')) {
      return res.status(400).json({ error: 'Invalid file' });
    }
    db.close();
    fs.writeFileSync(DB_PATH, req.body);
    db = new Database(DB_PATH);
    runMigrations();
    res.json({ ok: true });
  }
);

// ── App stats (for settings page) ────────────────────────
app.get('/api/stats', (req, res) => {
  const totalServices = db.prepare('SELECT COUNT(*) as n FROM services').get().n;
  const totalClients = db.prepare('SELECT COUNT(*) as n FROM clients').get().n;
  const dateRange = db.prepare('SELECT MIN(date) as first, MAX(date) as last FROM services').get();
  let dbSizeBytes = 0;
  try { dbSizeBytes = fs.statSync(DB_PATH).size; } catch (_) {}
  res.json({ totalServices, totalClients, dbSizeBytes, dateRange });
});

app.listen(PORT, () => console.log(`ServiLog running on port ${PORT}`));
