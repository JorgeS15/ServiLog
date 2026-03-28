// ── State ────────────────────────────────────────────────
const state = {
  view: 'dashboard',
  mes: new Date().getMonth() + 1,
  ano: new Date().getFullYear(),
  clientes: [],
  editingId: null,
};

const MESES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
               'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

// ── API ───────────────────────────────────────────────────
const api = {
  async get(path) {
    const r = await fetch(path);
    return r.json();
  },
  async post(path, body) {
    const r = await fetch(path, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) });
    return r.json();
  },
  async put(path, body) {
    const r = await fetch(path, { method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) });
    return r.json();
  },
  async del(path) {
    const r = await fetch(path, { method:'DELETE' });
    return r.json();
  },
};

// ── Toast ─────────────────────────────────────────────────
function toast(msg, type = 'success') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = `show ${type}`;
  setTimeout(() => el.className = '', 2500);
}

// ── Modal ─────────────────────────────────────────────────
function openModal(title, html) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal-overlay').classList.remove('hidden');
}
function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  state.editingId = null;
}

// ── Navigation ────────────────────────────────────────────
function navigate(view) {
  state.view = view;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === `view-${view}`));
  renderView(view);
}

async function renderView(view) {
  if (view === 'dashboard') await renderDashboard();
  else if (view === 'lista') await renderLista();
  else if (view === 'clientes') await renderClientes();
}

// ── Dashboard ─────────────────────────────────────────────
async function renderDashboard() {
  const el = document.getElementById('view-dashboard');
  const data = await api.get(`/api/resumo?mes=${state.mes}&ano=${state.ano}`);
  const { stats, porCliente } = data;

  const s = stats || {};
  el.innerHTML = `
    <div class="section-header">
      <span class="section-title">Resumo</span>
      <div class="month-picker">
        <button id="mes-prev">‹</button>
        <span class="month-label">${MESES[state.mes-1]} ${state.ano}</span>
        <button id="mes-next">›</button>
      </div>
    </div>

    <div class="card-row" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
      <div class="stat-block">
        <div class="stat-label">Serviços</div>
        <div class="stat-value">${s.total_servicos || 0}</div>
      </div>
      <div class="stat-block">
        <div class="stat-label">Valor Total</div>
        <div class="stat-value accent">${s.total_valor ? s.total_valor.toFixed(2) + ' €' : '—'}</div>
      </div>
    </div>

    <div class="card-row" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px">
      <div class="stat-block">
        <div class="stat-label">Horas Trab.</div>
        <div class="stat-value">${s.total_horas != null ? s.total_horas + ' h' : '—'}</div>
      </div>
      <div class="stat-block">
        <div class="stat-label">Horímetro</div>
        <div class="stat-value">${s.total_horimetro != null ? s.total_horimetro + ' h' : '—'}</div>
        <div class="stat-sub">delta do período</div>
      </div>
    </div>

    ${porCliente.length ? `
    <div class="card">
      <div class="section-title" style="margin-bottom:12px">Por Cliente</div>
      ${porCliente.map(c => `
        <div class="cliente-row">
          <div class="cliente-row-name">${c.nome || '—'}</div>
          <div class="cliente-row-stats">
            <div class="cliente-row-stat"><strong>${c.servicos}</strong> serv.</div>
            <div class="cliente-row-stat"><strong>${c.horas || '—'}</strong> h</div>
            <div class="cliente-row-stat"><strong>${c.valor ? c.valor.toFixed(2) + ' €' : '—'}</strong></div>
          </div>
        </div>
      `).join('')}
    </div>
    ` : `<div class="empty"><div class="empty-icon">📊</div><div class="empty-title">Sem dados</div><div class="empty-sub">Regista o primeiro serviço deste mês</div></div>`}
  `;

  document.getElementById('mes-prev').onclick = () => {
    state.mes--; if (state.mes < 1) { state.mes = 12; state.ano--; }
    renderDashboard();
  };
  document.getElementById('mes-next').onclick = () => {
    state.mes++; if (state.mes > 12) { state.mes = 1; state.ano++; }
    renderDashboard();
  };
}

// ── Lista de serviços ─────────────────────────────────────
async function renderLista() {
  const el = document.getElementById('view-lista');
  const servicos = await api.get(`/api/servicos?mes=${state.mes}&ano=${state.ano}`);

  el.innerHTML = `
    <div class="section-header">
      <span class="section-title">${MESES[state.mes-1]} ${state.ano}</span>
      <div style="display:flex;gap:8px;align-items:center">
        <div class="month-picker">
          <button id="lista-mes-prev">‹</button>
          <span class="month-label" style="min-width:80px">${state.mes.toString().padStart(2,'0')}/${state.ano}</span>
          <button id="lista-mes-next">›</button>
        </div>
        <a href="/api/export/csv" class="btn btn-ghost btn-sm" download title="Exportar CSV">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 14v4h14v-4M10 3v10M6 9l4 4 4-4"/></svg>
          CSV
        </a>
      </div>
    </div>
    <div id="servicos-list">
      ${servicos.length === 0
        ? `<div class="empty"><div class="empty-icon">🚜</div><div class="empty-title">Sem serviços</div><div class="empty-sub">Toca no botão + para registar</div></div>`
        : servicos.map(s => servicoCard(s)).join('')
      }
    </div>
  `;

  document.getElementById('lista-mes-prev').onclick = () => {
    state.mes--; if (state.mes < 1) { state.mes = 12; state.ano--; }
    renderLista();
  };
  document.getElementById('lista-mes-next').onclick = () => {
    state.mes++; if (state.mes > 12) { state.mes = 1; state.ano++; }
    renderLista();
  };

  el.querySelectorAll('.servico-item').forEach(item => {
    item.addEventListener('click', () => editServico(parseInt(item.dataset.id)));
  });
}

function servicoCard(s) {
  const chips = [];
  if (s.hora_inicio || s.hora_fim) {
    chips.push(`<span class="chip hora">🕐 ${s.hora_inicio || '?'}–${s.hora_fim || '?'}${s.duracao_horas != null ? ' · ' + s.duracao_horas + 'h' : ''}</span>`);
  } else if (s.duracao_horas != null) {
    chips.push(`<span class="chip hora">⏱ ${s.duracao_horas}h</span>`);
  }
  if (s.horimetro_inicio != null || s.horimetro_fim != null) {
    chips.push(`<span class="chip horim">⚙️ ${s.horimetro_inicio ?? '?'} → ${s.horimetro_fim ?? '?'} h${s.horimetro_delta != null ? ' (Δ' + s.horimetro_delta + ')' : ''}</span>`);
  }

  return `
    <div class="servico-item" data-id="${s.id}">
      <div class="servico-top">
        <div>
          <div class="servico-data">${formatDate(s.data)}</div>
          <div class="servico-cliente">${s.cliente_nome || '—'}</div>
          ${s.descricao ? `<div class="servico-desc">${escapeHtml(s.descricao)}</div>` : ''}
        </div>
        ${s.valor != null ? `<div class="servico-valor">${parseFloat(s.valor).toFixed(2)} €</div>` : ''}
      </div>
      ${chips.length ? `<div class="servico-chips">${chips.join('')}</div>` : ''}
    </div>
  `;
}

function formatDate(d) {
  if (!d) return '';
  const [y,m,day] = d.split('-');
  return `${day}/${m}/${y}`;
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ── Formulário de serviço ─────────────────────────────────
function servicoFormHtml(s = {}) {
  const today = new Date().toISOString().slice(0,10);
  const clienteOptions = state.clientes.map(c =>
    `<option value="${c.id}" ${s.cliente_id == c.id ? 'selected' : ''}>${escapeHtml(c.nome)}</option>`
  ).join('');

  return `
    <div class="form-grid">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Data *</label>
          <input type="date" class="form-control" id="f-data" value="${s.data || today}" required>
        </div>
        <div class="form-group">
          <label class="form-label">Cliente</label>
          <select class="form-control" id="f-cliente">
            <option value="">— nenhum —</option>
            ${clienteOptions}
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Hora início</label>
          <input type="time" class="form-control" id="f-hinicio" value="${s.hora_inicio || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">Hora fim</label>
          <input type="time" class="form-control" id="f-hfim" value="${s.hora_fim || ''}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Duração (horas) <span class="form-hint" style="display:inline">— calculado automaticamente se tiveres hora início/fim</span></label>
        <input type="number" class="form-control" id="f-duracao" step="0.25" min="0" placeholder="ex: 3.5" value="${s.duracao_horas ?? ''}">
      </div>

      <hr class="divider">
      <div class="section-title">Horímetro</div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Leitura início (h)</label>
          <input type="number" class="form-control" id="f-horim-in" step="0.1" min="0" placeholder="ex: 1245.3" value="${s.horimetro_inicio ?? ''}" oninput="calcHorim()">
        </div>
        <div class="form-group">
          <label class="form-label">Leitura fim (h)</label>
          <input type="number" class="form-control" id="f-horim-out" step="0.1" min="0" placeholder="ex: 1248.8" value="${s.horimetro_fim ?? ''}" oninput="calcHorim()">
        </div>
      </div>
      <div id="horim-delta-hint"></div>

      <hr class="divider">

      <div class="form-group">
        <label class="form-label">Valor cobrado (€)</label>
        <input type="number" class="form-control" id="f-valor" step="0.01" min="0" placeholder="ex: 150.00" value="${s.valor ?? ''}">
      </div>

      <div class="form-group">
        <label class="form-label">Descrição / notas</label>
        <textarea class="form-control" id="f-desc" placeholder="Tipo de trabalho, localização, observações...">${s.descricao || ''}</textarea>
      </div>

      <div class="actions">
        ${s.id ? `<button class="btn btn-danger btn-sm" onclick="deleteServico(${s.id})">🗑 Eliminar</button>` : ''}
        <div style="flex:1"></div>
        <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
        <button class="btn btn-primary" onclick="saveServico(${s.id || 0})">
          ${s.id ? '💾 Guardar' : '✚ Registar'}
        </button>
      </div>
    </div>
  `;
}

window.calcHorim = function() {
  const ini = parseFloat(document.getElementById('f-horim-in')?.value);
  const fim = parseFloat(document.getElementById('f-horim-out')?.value);
  const hint = document.getElementById('horim-delta-hint');
  if (!hint) return;
  if (!isNaN(ini) && !isNaN(fim)) {
    const delta = (fim - ini).toFixed(1);
    hint.innerHTML = `<div class="horim-hint">⚙️ Delta horímetro: <strong>${delta} h</strong></div>`;
  } else {
    hint.innerHTML = '';
  }
};

function getFormData() {
  return {
    data: document.getElementById('f-data').value,
    hora_inicio: document.getElementById('f-hinicio').value || null,
    hora_fim: document.getElementById('f-hfim').value || null,
    duracao_horas: document.getElementById('f-duracao').value || null,
    cliente_id: document.getElementById('f-cliente').value || null,
    descricao: document.getElementById('f-desc').value || null,
    valor: document.getElementById('f-valor').value || null,
    horimetro_inicio: document.getElementById('f-horim-in').value || null,
    horimetro_fim: document.getElementById('f-horim-out').value || null,
  };
}

window.saveServico = async function(id) {
  const body = getFormData();
  if (!body.data) { toast('Data obrigatória', 'error'); return; }

  try {
    if (id) {
      await api.put(`/api/servicos/${id}`, body);
      toast('Serviço actualizado ✓');
    } else {
      await api.post('/api/servicos', body);
      toast('Serviço registado ✓');
    }
    closeModal();
    renderView(state.view);
  } catch (e) {
    toast('Erro ao guardar', 'error');
  }
};

window.deleteServico = async function(id) {
  if (!confirm('Eliminar este serviço?')) return;
  await api.del(`/api/servicos/${id}`);
  toast('Eliminado');
  closeModal();
  renderView(state.view);
};

async function editServico(id) {
  const s = await api.get(`/api/servicos/${id}`);
  openModal('Editar Serviço', servicoFormHtml(s));
  calcHorim();
}

function novoServico() {
  openModal('Novo Serviço', servicoFormHtml());
}

// ── Clientes ──────────────────────────────────────────────
async function renderClientes() {
  const el = document.getElementById('view-clientes');
  state.clientes = await api.get('/api/clientes');

  el.innerHTML = `
    <div class="section-header">
      <span class="section-title">Clientes</span>
    </div>

    <div class="card" style="margin-bottom:16px">
      <div class="form-group" style="flex-direction:row;gap:8px;align-items:flex-end">
        <div style="flex:1">
          <label class="form-label">Novo cliente</label>
          <input type="text" class="form-control" id="novo-cliente-input" placeholder="Nome do cliente">
        </div>
        <button class="btn btn-primary" onclick="adicionarCliente()" style="flex-shrink:0">✚ Adicionar</button>
      </div>
    </div>

    <div id="clientes-list">
      ${state.clientes.length === 0
        ? `<div class="empty"><div class="empty-icon">👤</div><div class="empty-title">Sem clientes</div></div>`
        : state.clientes.map(c => `
          <div class="cliente-item">
            <div>
              <div class="cliente-nome">${escapeHtml(c.nome)}</div>
            </div>
            <button class="btn btn-danger btn-sm" onclick="eliminarCliente(${c.id}, '${escapeHtml(c.nome)}')">Remover</button>
          </div>
        `).join('')
      }
    </div>
  `;

  document.getElementById('novo-cliente-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') adicionarCliente();
  });
}

window.adicionarCliente = async function() {
  const input = document.getElementById('novo-cliente-input');
  const nome = input.value.trim();
  if (!nome) return;
  const result = await api.post('/api/clientes', { nome });
  if (result.error) { toast(result.error, 'error'); return; }
  toast(`"${nome}" adicionado`);
  input.value = '';
  state.clientes = await api.get('/api/clientes');
  renderClientes();
};

window.eliminarCliente = async function(id, nome) {
  if (!confirm(`Remover o cliente "${nome}"?\nOs serviços associados ficam sem cliente.`)) return;
  await api.del(`/api/clientes/${id}`);
  toast(`"${nome}" removido`);
  renderClientes();
};

// ── Init ──────────────────────────────────────────────────
async function init() {
  // Load clientes into state
  state.clientes = await api.get('/api/clientes');

  // Nav
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.view));
  });

  // FAB
  document.getElementById('fab').addEventListener('click', () => {
    openModal('Novo Serviço', servicoFormHtml());
  });

  // Modal close
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });

  // Register SW
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(console.warn);
  }

  navigate('dashboard');
}

document.addEventListener('DOMContentLoaded', init);
