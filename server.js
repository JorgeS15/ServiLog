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

// Init schema
db.exec(`
  CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE,
    criado_em TEXT DEFAULT (datetime('now','localtime'))
  );

  CREATE TABLE IF NOT EXISTS servicos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    data TEXT NOT NULL,
    hora_inicio TEXT,
    hora_fim TEXT,
    duracao_horas REAL,
    cliente_id INTEGER REFERENCES clientes(id),
    descricao TEXT,
    valor REAL,
    horimetro_inicio REAL,
    horimetro_fim REAL,
    horimetro_delta REAL,
    criado_em TEXT DEFAULT (datetime('now','localtime'))
  );

  INSERT OR IGNORE INTO clientes (nome) VALUES
    ('Particular'),
    ('Sem cliente');
`);

// Run all migrations — safe to call multiple times (errors are silently ignored)
function runMigrations() {
  try { db.exec(`ALTER TABLE servicos ADD COLUMN horas_desconto REAL DEFAULT 0`); } catch (_) {}
  try { db.exec(`ALTER TABLE servicos ADD COLUMN preco_hora REAL DEFAULT NULL`); } catch (_) {}
  try { db.exec(`ALTER TABLE servicos ADD COLUMN preco_deslocacao REAL DEFAULT NULL`); } catch (_) {}
  try { db.exec(`ALTER TABLE servicos ADD COLUMN desconto REAL DEFAULT NULL`); } catch (_) {}
  try { db.exec(`ALTER TABLE servicos ADD COLUMN pago INTEGER DEFAULT 0`); } catch (_) {}
  try { db.exec(`ALTER TABLE servicos ADD COLUMN gorjeta REAL DEFAULT 0`); } catch (_) {}
  try { db.exec(`ALTER TABLE clientes ADD COLUMN telefone TEXT`); } catch (_) {}
  try { db.exec(`ALTER TABLE clientes ADD COLUMN endereco TEXT`); } catch (_) {}
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

// ── Clientes ──────────────────────────────────────────────
app.get('/api/clientes', (req, res) => {
  const rows = db.prepare('SELECT * FROM clientes ORDER BY nome').all();
  res.json(rows);
});

app.post('/api/clientes', (req, res) => {
  const { nome, telefone, endereco } = req.body;
  if (!nome?.trim()) return res.status(400).json({ error: 'Nome obrigatório' });
  try {
    const result = db.prepare('INSERT INTO clientes (nome, telefone, endereco) VALUES (?,?,?)').run(
      nome.trim(), telefone?.trim() || null, endereco?.trim() || null
    );
    res.json({ id: result.lastInsertRowid, nome: nome.trim(), telefone: telefone?.trim() || null, endereco: endereco?.trim() || null });
  } catch (e) {
    res.status(409).json({ error: 'Cliente já existe' });
  }
});

app.put('/api/clientes/:id', (req, res) => {
  const { nome, telefone, endereco } = req.body;
  if (!nome?.trim()) return res.status(400).json({ error: 'Nome obrigatório' });
  try {
    db.prepare('UPDATE clientes SET nome=?, telefone=?, endereco=? WHERE id=?').run(
      nome.trim(), telefone?.trim() || null, endereco?.trim() || null, req.params.id
    );
    res.json({ ok: true });
  } catch (e) {
    res.status(409).json({ error: 'Cliente já existe' });
  }
});

app.delete('/api/clientes/:id', (req, res) => {
  db.prepare('DELETE FROM clientes WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ── Serviços ──────────────────────────────────────────────
app.get('/api/servicos', (req, res) => {
  const { mes, ano, cliente_id } = req.query;
  let query = `
    SELECT s.*, c.nome as cliente_nome
    FROM servicos s
    LEFT JOIN clientes c ON s.cliente_id = c.id
    WHERE 1=1
  `;
  const params = [];
  if (mes && ano) {
    query += ` AND strftime('%Y-%m', s.data) = ?`;
    params.push(`${ano}-${mes.padStart(2,'0')}`);
  }
  if (cliente_id) {
    query += ` AND s.cliente_id = ?`;
    params.push(cliente_id);
  }
  query += ` ORDER BY s.data DESC, s.hora_inicio DESC`;
  const rows = db.prepare(query).all(...params);
  res.json(rows);
});

app.get('/api/servicos/:id', (req, res) => {
  const row = db.prepare(`
    SELECT s.*, c.nome as cliente_nome
    FROM servicos s LEFT JOIN clientes c ON s.cliente_id = c.id
    WHERE s.id = ?
  `).get(req.params.id);
  if (!row) return res.status(404).json({ error: 'Não encontrado' });
  res.json(row);
});

// Client already sends net duracao_horas (deduction applied) — trust it if provided.
// Only apply horas_desconto when computing from hora_inicio/hora_fim.
function calcDuracao(hora_inicio, hora_fim, duracao_horas, horas_desconto) {
  if (duracao_horas) return parseFloat(duracao_horas);
  if (!hora_inicio || !hora_fim) return null;
  const [h1, m1] = hora_inicio.split(':').map(Number);
  const [h2, m2] = hora_fim.split(':').map(Number);
  let duracao = ((h2 * 60 + m2) - (h1 * 60 + m1)) / 60;
  if (duracao < 0) duracao += 24;
  if (horas_desconto) duracao = Math.max(0, duracao - parseFloat(horas_desconto));
  return parseFloat(duracao.toFixed(4));
}

function calcValorAuto(duracao, preco_hora, preco_deslocacao, desconto) {
  if (!preco_hora || !duracao) return null;
  let total = parseFloat(preco_hora) * parseFloat(duracao);
  if (preco_deslocacao) total += parseFloat(preco_deslocacao);
  if (desconto) total = Math.max(0, total - parseFloat(desconto));
  return parseFloat(total.toFixed(2));
}

app.post('/api/servicos', (req, res) => {
  const {
    data, hora_inicio, hora_fim, duracao_horas, horas_desconto,
    cliente_id, descricao, valor,
    horimetro_inicio, horimetro_fim,
    preco_hora, preco_deslocacao, desconto, pago, gorjeta
  } = req.body;

  if (!data) return res.status(400).json({ error: 'Data obrigatória' });

  let delta = null;
  if (horimetro_inicio != null && horimetro_fim != null) {
    delta = parseFloat(horimetro_fim) - parseFloat(horimetro_inicio);
  }

  const duracao = calcDuracao(hora_inicio, hora_fim, duracao_horas, horas_desconto);
  const finalValor = valor ? parseFloat(valor) : calcValorAuto(duracao, preco_hora, preco_deslocacao, desconto);

  const result = db.prepare(`
    INSERT INTO servicos
      (data, hora_inicio, hora_fim, duracao_horas, horas_desconto, cliente_id, descricao, valor,
       horimetro_inicio, horimetro_fim, horimetro_delta,
       preco_hora, preco_deslocacao, desconto, pago, gorjeta)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `).run(
    data, hora_inicio || null, hora_fim || null,
    duracao,
    horas_desconto ? parseFloat(horas_desconto) : 0,
    cliente_id || null, descricao || null,
    finalValor,
    horimetro_inicio != null ? parseFloat(horimetro_inicio) : null,
    horimetro_fim != null ? parseFloat(horimetro_fim) : null,
    delta,
    preco_hora ? parseFloat(preco_hora) : null,
    preco_deslocacao ? parseFloat(preco_deslocacao) : null,
    desconto ? parseFloat(desconto) : null,
    pago ? 1 : 0,
    gorjeta ? parseFloat(gorjeta) : 0
  );

  res.json({ id: result.lastInsertRowid });
});

app.put('/api/servicos/:id', (req, res) => {
  const {
    data, hora_inicio, hora_fim, duracao_horas, horas_desconto,
    cliente_id, descricao, valor,
    horimetro_inicio, horimetro_fim,
    preco_hora, preco_deslocacao, desconto, pago, gorjeta
  } = req.body;

  let delta = null;
  if (horimetro_inicio != null && horimetro_fim != null) {
    delta = parseFloat(horimetro_fim) - parseFloat(horimetro_inicio);
  }

  const duracao = calcDuracao(hora_inicio, hora_fim, duracao_horas, horas_desconto);
  const finalValor = valor ? parseFloat(valor) : calcValorAuto(duracao, preco_hora, preco_deslocacao, desconto);

  db.prepare(`
    UPDATE servicos SET
      data=?, hora_inicio=?, hora_fim=?, duracao_horas=?, horas_desconto=?,
      cliente_id=?, descricao=?, valor=?,
      horimetro_inicio=?, horimetro_fim=?, horimetro_delta=?,
      preco_hora=?, preco_deslocacao=?, desconto=?, pago=?, gorjeta=?
    WHERE id=?
  `).run(
    data, hora_inicio || null, hora_fim || null,
    duracao,
    horas_desconto ? parseFloat(horas_desconto) : 0,
    cliente_id || null, descricao || null,
    finalValor,
    horimetro_inicio != null ? parseFloat(horimetro_inicio) : null,
    horimetro_fim != null ? parseFloat(horimetro_fim) : null,
    delta,
    preco_hora ? parseFloat(preco_hora) : null,
    preco_deslocacao ? parseFloat(preco_deslocacao) : null,
    desconto ? parseFloat(desconto) : null,
    pago ? 1 : 0,
    gorjeta ? parseFloat(gorjeta) : 0,
    req.params.id
  );

  res.json({ ok: true });
});

app.delete('/api/servicos/:id', (req, res) => {
  db.prepare('DELETE FROM servicos WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ── Resumo / stats ─────────────────────────────────────────
// When mes+ano are absent, returns all-time totals (global view)
app.get('/api/resumo', (req, res) => {
  const { mes, ano } = req.query;
  let where = '1=1';
  const params = [];
  if (mes && ano) {
    where = `strftime('%Y-%m', data) = ?`;
    params.push(`${ano}-${mes.padStart(2,'0')}`);
  }

  const stats = db.prepare(`
    SELECT
      COUNT(*) as total_servicos,
      ROUND(SUM(duracao_horas),2) as total_horas,
      ROUND(SUM(valor),2) as total_valor,
      ROUND(SUM(CASE WHEN pago=1 THEN valor ELSE 0 END),2) as total_recebido,
      ROUND(SUM(CASE WHEN (pago=0 OR pago IS NULL) AND valor IS NOT NULL THEN valor ELSE 0 END),2) as total_pendente,
      ROUND(SUM(horimetro_delta),2) as total_horimetro,
      ROUND(SUM(COALESCE(gorjeta,0)),2) as total_gorjetas
    FROM servicos WHERE ${where}
  `).get(...params);

  const porCliente = db.prepare(`
    SELECT c.nome, COUNT(*) as servicos,
           ROUND(SUM(s.duracao_horas),2) as horas,
           ROUND(SUM(s.valor),2) as valor,
           ROUND(SUM(COALESCE(s.gorjeta,0)),2) as gorjetas
    FROM servicos s
    LEFT JOIN clientes c ON s.cliente_id = c.id
    WHERE ${where}
    GROUP BY s.cliente_id ORDER BY valor DESC
  `).all(...params);

  res.json({ stats, porCliente });
});

// ── Export CSV ─────────────────────────────────────────────
app.get('/api/export/csv', (req, res) => {
  const rows = db.prepare(`
    SELECT s.data, s.hora_inicio, s.hora_fim,
           ROUND(s.horas_desconto,2) as horas_desconto,
           ROUND(s.duracao_horas,2) as duracao_horas,
           c.nome as cliente,
           s.descricao,
           s.preco_hora, s.preco_deslocacao, s.desconto,
           s.valor, s.pago,
           ROUND(s.gorjeta,2) as gorjeta,
           s.horimetro_inicio, s.horimetro_fim,
           ROUND(s.horimetro_delta,2) as horimetro_delta
    FROM servicos s
    LEFT JOIN clientes c ON s.cliente_id = c.id
    ORDER BY s.data DESC
  `).all();

  const header = 'Data,Inicio,Fim,Desconto(h),Duracao(h),Cliente,Descricao,Preco/h,Deslocacao,Desconto(€),Valor(€),Pago,Gorjeta(€),Horim.Inicio,Horim.Fim,Horim.Delta\n';
  const csv = header + rows.map(r =>
    [r.data, r.hora_inicio||'', r.hora_fim||'', r.horas_desconto||0, r.duracao_horas||'',
     `"${r.cliente||''}"`, `"${r.descricao||''}"`,
     r.preco_hora||'', r.preco_deslocacao||'', r.desconto||'',
     r.valor||'', r.pago ? 'Sim' : 'Não',
     r.gorjeta||0,
     r.horimetro_inicio||'', r.horimetro_fim||'', r.horimetro_delta||'']
    .join(',')
  ).join('\n');

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="servicos.csv"');
  res.send(csv);
});

// ── Backup ────────────────────────────────────────────────
app.get('/api/backup/download', (req, res) => {
  res.download(DB_PATH, 'servilog-backup.db');
});

// Restore: receives raw SQLite binary via application/octet-stream
app.post('/api/backup/restore',
  express.raw({ type: 'application/octet-stream', limit: '100mb' }),
  (req, res) => {
    const buf = req.body;
    if (!Buffer.isBuffer(buf) || buf.length < 16) {
      return res.status(400).json({ error: 'Invalid file' });
    }
    // Validate SQLite magic header: "SQLite format 3\0"
    const magic = 'SQLite format 3\0';
    for (let i = 0; i < magic.length; i++) {
      if (buf[i] !== magic.charCodeAt(i)) {
        return res.status(400).json({ error: 'Not a valid SQLite database' });
      }
    }
    try {
      db.close();
      fs.writeFileSync(DB_PATH, buf);
      db = new Database(DB_PATH);
      runMigrations();
      res.json({ ok: true });
    } catch (e) {
      res.status(500).json({ error: 'Restore failed: ' + e.message });
    }
  }
);

// ── App stats (for settings page) ────────────────────────
app.get('/api/stats', (req, res) => {
  const totalServices = db.prepare('SELECT COUNT(*) as n FROM servicos').get().n;
  const totalClients = db.prepare('SELECT COUNT(*) as n FROM clientes').get().n;
  const dateRange = db.prepare('SELECT MIN(data) as first, MAX(data) as last FROM servicos').get();
  let dbSizeBytes = 0;
  try { dbSizeBytes = fs.statSync(DB_PATH).size; } catch (_) {}
  res.json({ totalServices, totalClients, dbSizeBytes, dateRange });
});

app.listen(PORT, () => console.log(`ServiLog running on port ${PORT}`));
