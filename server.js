const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = process.env.DB_PATH || '/data/tracker.db';

// Ensure data dir exists
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const db = new Database(DB_PATH);

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

// Migration: add horas_desconto if not exists
try { db.exec(`ALTER TABLE servicos ADD COLUMN horas_desconto REAL DEFAULT 0`); } catch (_) {}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── Clientes ──────────────────────────────────────────────
app.get('/api/clientes', (req, res) => {
  const rows = db.prepare('SELECT * FROM clientes ORDER BY nome').all();
  res.json(rows);
});

app.post('/api/clientes', (req, res) => {
  const { nome } = req.body;
  if (!nome?.trim()) return res.status(400).json({ error: 'Nome obrigatório' });
  try {
    const result = db.prepare('INSERT INTO clientes (nome) VALUES (?)').run(nome.trim());
    res.json({ id: result.lastInsertRowid, nome: nome.trim() });
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

function calcDuracao(hora_inicio, hora_fim, duracao_horas, horas_desconto) {
  let duracao = duracao_horas;
  if (!duracao && hora_inicio && hora_fim) {
    const [h1, m1] = hora_inicio.split(':').map(Number);
    const [h2, m2] = hora_fim.split(':').map(Number);
    duracao = ((h2 * 60 + m2) - (h1 * 60 + m1)) / 60;
    if (duracao < 0) duracao += 24;
  }
  if (duracao && horas_desconto) {
    duracao = Math.max(0, duracao - parseFloat(horas_desconto));
  }
  return duracao ? parseFloat(duracao) : null;
}

app.post('/api/servicos', (req, res) => {
  const {
    data, hora_inicio, hora_fim, duracao_horas, horas_desconto,
    cliente_id, descricao, valor,
    horimetro_inicio, horimetro_fim
  } = req.body;

  if (!data) return res.status(400).json({ error: 'Data obrigatória' });

  let delta = null;
  if (horimetro_inicio != null && horimetro_fim != null) {
    delta = parseFloat(horimetro_fim) - parseFloat(horimetro_inicio);
  }

  const duracao = calcDuracao(hora_inicio, hora_fim, duracao_horas, horas_desconto);

  const result = db.prepare(`
    INSERT INTO servicos
      (data, hora_inicio, hora_fim, duracao_horas, horas_desconto, cliente_id, descricao, valor,
       horimetro_inicio, horimetro_fim, horimetro_delta)
    VALUES (?,?,?,?,?,?,?,?,?,?,?)
  `).run(
    data, hora_inicio || null, hora_fim || null,
    duracao,
    horas_desconto ? parseFloat(horas_desconto) : 0,
    cliente_id || null, descricao || null,
    valor ? parseFloat(valor) : null,
    horimetro_inicio != null ? parseFloat(horimetro_inicio) : null,
    horimetro_fim != null ? parseFloat(horimetro_fim) : null,
    delta
  );

  res.json({ id: result.lastInsertRowid });
});

app.put('/api/servicos/:id', (req, res) => {
  const {
    data, hora_inicio, hora_fim, duracao_horas, horas_desconto,
    cliente_id, descricao, valor,
    horimetro_inicio, horimetro_fim
  } = req.body;

  let delta = null;
  if (horimetro_inicio != null && horimetro_fim != null) {
    delta = parseFloat(horimetro_fim) - parseFloat(horimetro_inicio);
  }

  const duracao = calcDuracao(hora_inicio, hora_fim, duracao_horas, horas_desconto);

  db.prepare(`
    UPDATE servicos SET
      data=?, hora_inicio=?, hora_fim=?, duracao_horas=?, horas_desconto=?,
      cliente_id=?, descricao=?, valor=?,
      horimetro_inicio=?, horimetro_fim=?, horimetro_delta=?
    WHERE id=?
  `).run(
    data, hora_inicio || null, hora_fim || null,
    duracao,
    horas_desconto ? parseFloat(horas_desconto) : 0,
    cliente_id || null, descricao || null,
    valor ? parseFloat(valor) : null,
    horimetro_inicio != null ? parseFloat(horimetro_inicio) : null,
    horimetro_fim != null ? parseFloat(horimetro_fim) : null,
    delta, req.params.id
  );

  res.json({ ok: true });
});

app.delete('/api/servicos/:id', (req, res) => {
  db.prepare('DELETE FROM servicos WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ── Resumo / stats ─────────────────────────────────────────
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
      ROUND(SUM(horimetro_delta),2) as total_horimetro
    FROM servicos WHERE ${where}
  `).get(...params);

  const porCliente = db.prepare(`
    SELECT c.nome, COUNT(*) as servicos,
           ROUND(SUM(s.duracao_horas),2) as horas,
           ROUND(SUM(s.valor),2) as valor
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
           s.valor,
           s.horimetro_inicio, s.horimetro_fim,
           ROUND(s.horimetro_delta,2) as horimetro_delta
    FROM servicos s
    LEFT JOIN clientes c ON s.cliente_id = c.id
    ORDER BY s.data DESC
  `).all();

  const header = 'Data,Inicio,Fim,Desconto(h),Duracao(h),Cliente,Descricao,Valor(€),Horim.Inicio,Horim.Fim,Horim.Delta\n';
  const csv = header + rows.map(r =>
    [r.data, r.hora_inicio||'', r.hora_fim||'', r.horas_desconto||0, r.duracao_horas||'',
     `"${r.cliente||''}"`, `"${r.descricao||''}"`,
     r.valor||'', r.horimetro_inicio||'', r.horimetro_fim||'', r.horimetro_delta||'']
    .join(',')
  ).join('\n');

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="servicos.csv"');
  res.send(csv);
});

app.listen(PORT, () => console.log(`Tracker a correr na porta ${PORT}`));
