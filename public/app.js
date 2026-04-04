// ── Translations ──────────────────────────────────────────
const TRANSLATIONS = {
  pt: {
    months: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    nav_dashboard: 'Resumo', nav_lista: 'Serviços', nav_clientes: 'Clientes', nav_settings: 'Definições',
    dashboard_title: 'Resumo', dashboard_monthly: 'Mensal', dashboard_alltime: 'Tudo',
    stat_services: 'Serviços', stat_hours: 'Horas Trab.', stat_received: 'Recebido',
    stat_pending: 'Pendente', stat_billed: 'Total Faturado', stat_horimetro: 'Horímetro',
    stat_tips: 'Gorjetas', stat_horimetro_sub: 'delta do período',
    by_client: 'Por Cliente',
    no_data: 'Sem dados', no_data_sub: 'Regista o primeiro serviço deste mês',
    no_services: 'Sem serviços', no_services_sub: 'Toca no botão + para registar',
    form_new_service: 'Novo Serviço', form_edit_service: 'Editar Serviço',
    form_date: 'Data *', form_client: 'Cliente',
    form_no_client: '— nenhum —', form_new_client: '✚ Novo cliente...',
    form_new_client_placeholder: 'Nome do novo cliente',
    form_start_time: 'Hora início', form_end_time: 'Hora fim',
    form_discount_hours: 'Horas a descontar', form_duration: 'Duração líquida (horas)',
    form_horimeter: 'Horímetro', form_horim_start: 'Leitura início (h)', form_horim_end: 'Leitura fim (h)',
    form_billing: 'Faturação', form_price_hour: 'Preço/hora (€)', form_travel: 'Deslocação (€)',
    form_discount_value: 'Desconto (€)', form_payment_status: 'Estado pagamento',
    form_pending: 'Pendente', form_paid: 'Pago', form_total: 'Valor total (€)',
    form_tip: 'Valor adicional / gorjeta (€)', form_tip_placeholder: 'ex: 5.00',
    form_description: 'Descrição / notas', form_desc_placeholder: 'Tipo de trabalho, localização, observações...',
    form_delete: '🗑 Eliminar', form_cancel: 'Cancelar', form_save: '💾 Guardar', form_register: '✚ Registar',
    form_auto: 'calculado auto.',form_auto_or_manual: 'calculado auto. ou manual',
    horim_delta: 'Delta horímetro',
    clients_title: 'Clientes', client_new_label: 'Novo cliente', client_new_placeholder: 'Nome do cliente',
    client_add: '✚ Adicionar', client_remove: 'Remover', client_edit: 'Editar', no_clients: 'Sem clientes',
    client_phone: 'Telefone', client_phone_placeholder: 'Número de telefone',
    client_address: 'Morada', client_address_placeholder: 'Morada do cliente',
    client_details_title: 'Editar cliente', client_save: 'Guardar',
    toast_client_updated: 'actualizado',
    toast_updated: 'Serviço actualizado ✓', toast_registered: 'Serviço registado ✓',
    toast_save_error: 'Erro ao guardar', toast_deleted: 'Eliminado',
    toast_date_required: 'Data obrigatória', toast_client_name_required: 'Escreve o nome do cliente',
    toast_client_added: 'adicionado', toast_client_removed: 'removido', toast_client_exists: 'Cliente já existe',
    toast_restore_ok: 'Backup restaurado. A recarregar...', toast_restore_error: 'Ficheiro inválido',
    confirm_delete_service: 'Eliminar este serviço?',
    confirm_restore: 'Substituir todos os dados pelo backup? Esta acção não pode ser desfeita.',
    confirm_remove_client: 'Remover o cliente',
    confirm_remove_client_suffix: 'Os serviços associados ficam sem cliente.',
    tag_paid: 'Pago', tag_pending: 'Pendente',
    settings_title: 'Definições', settings_backup: 'Backup & Restauro',
    settings_backup_download: '⬇ Descarregar Backup', settings_backup_restore: '⬆ Carregar Backup',
    settings_language: 'Idioma', settings_defaults: 'Valores por defeito',
    settings_default_price: 'Preço/hora por defeito (€)', settings_default_travel: 'Deslocação por defeito (€)',
    settings_default_payment: 'Estado pagamento por defeito',
    settings_currency: 'Símbolo de moeda', settings_theme: 'Tema',
    settings_theme_dark: 'Escuro', settings_theme_light: 'Claro',
    settings_data_stats: 'Estatísticas', settings_total_services: 'Total de serviços',
    settings_total_clients: 'Total de clientes', settings_db_size: 'Tamanho da base de dados',
    settings_date_range: 'Período de dados', settings_version: 'Versão',
    tip_badge: 'gorjeta',
  },
  en: {
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    nav_dashboard: 'Summary', nav_lista: 'Services', nav_clientes: 'Clients', nav_settings: 'Settings',
    dashboard_title: 'Summary', dashboard_monthly: 'Monthly', dashboard_alltime: 'All Time',
    stat_services: 'Services', stat_hours: 'Work Hours', stat_received: 'Received',
    stat_pending: 'Pending', stat_billed: 'Total Billed', stat_horimetro: 'Hourmeter',
    stat_tips: 'Tips', stat_horimetro_sub: 'period delta',
    by_client: 'By Client',
    no_data: 'No data', no_data_sub: 'Register the first service of this month',
    no_services: 'No services', no_services_sub: 'Tap the + button to register',
    form_new_service: 'New Service', form_edit_service: 'Edit Service',
    form_date: 'Date *', form_client: 'Client',
    form_no_client: '— none —', form_new_client: '✚ New client...',
    form_new_client_placeholder: 'New client name',
    form_start_time: 'Start time', form_end_time: 'End time',
    form_discount_hours: 'Discount hours', form_duration: 'Net duration (hours)',
    form_horimeter: 'Hourmeter', form_horim_start: 'Start reading (h)', form_horim_end: 'End reading (h)',
    form_billing: 'Billing', form_price_hour: 'Price/hour (€)', form_travel: 'Travel fee (€)',
    form_discount_value: 'Discount (€)', form_payment_status: 'Payment status',
    form_pending: 'Pending', form_paid: 'Paid', form_total: 'Total value (€)',
    form_tip: 'Additional value / tip (€)', form_tip_placeholder: 'e.g. 5.00',
    form_description: 'Description / notes', form_desc_placeholder: 'Work type, location, observations...',
    form_delete: '🗑 Delete', form_cancel: 'Cancel', form_save: '💾 Save', form_register: '✚ Register',
    form_auto: 'auto-calculated', form_auto_or_manual: 'auto-calculated or manual',
    horim_delta: 'Hourmeter delta',
    clients_title: 'Clients', client_new_label: 'New client', client_new_placeholder: 'Client name',
    client_add: '✚ Add', client_remove: 'Remove', client_edit: 'Edit', no_clients: 'No clients',
    client_phone: 'Phone', client_phone_placeholder: 'Phone number',
    client_address: 'Address', client_address_placeholder: 'Client address',
    client_details_title: 'Edit client', client_save: 'Save',
    toast_client_updated: 'updated',
    toast_updated: 'Service updated ✓', toast_registered: 'Service registered ✓',
    toast_save_error: 'Save error', toast_deleted: 'Deleted',
    toast_date_required: 'Date is required', toast_client_name_required: 'Enter the client name',
    toast_client_added: 'added', toast_client_removed: 'removed', toast_client_exists: 'Client already exists',
    toast_restore_ok: 'Backup restored. Reloading...', toast_restore_error: 'Invalid file',
    confirm_delete_service: 'Delete this service?',
    confirm_restore: 'Replace all data with this backup? This cannot be undone.',
    confirm_remove_client: 'Remove client',
    confirm_remove_client_suffix: 'Associated services will have no client.',
    tag_paid: 'Paid', tag_pending: 'Pending',
    settings_title: 'Settings', settings_backup: 'Backup & Restore',
    settings_backup_download: '⬇ Download Backup', settings_backup_restore: '⬆ Load Backup',
    settings_language: 'Language', settings_defaults: 'Default values',
    settings_default_price: 'Default price/hour (€)', settings_default_travel: 'Default travel fee (€)',
    settings_default_payment: 'Default payment status',
    settings_currency: 'Currency symbol', settings_theme: 'Theme',
    settings_theme_dark: 'Dark', settings_theme_light: 'Light',
    settings_data_stats: 'Statistics', settings_total_services: 'Total services',
    settings_total_clients: 'Total clients', settings_db_size: 'Database size',
    settings_date_range: 'Data range', settings_version: 'Version',
    tip_badge: 'tip',
  },
};

// ── i18n helpers ──────────────────────────────────────────
function t(key) {
  return (TRANSLATIONS[state.lang] || TRANSLATIONS['pt'])[key] || key;
}
function getCurrency() {
  return localStorage.getItem('currency') || '€';
}

// ── State ────────────────────────────────────────────────
const state = {
  view: 'dashboard',
  mes: new Date().getMonth() + 1,
  ano: new Date().getFullYear(),
  clientes: [],
  editingId: null,
  lang: localStorage.getItem('lang') || 'pt',
  globalView: false,
};

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
  else if (view === 'settings') await renderSettings();
}

// ── Dashboard ─────────────────────────────────────────────
async function renderDashboard() {
  const el = document.getElementById('view-dashboard');
  const url = state.globalView ? '/api/resumo' : `/api/resumo?mes=${state.mes}&ano=${state.ano}`;
  const data = await api.get(url);
  const { stats, porCliente } = data;

  const s = stats || {};
  const cur = getCurrency();
  const monthPicker = state.globalView ? '' : `
    <div class="month-picker">
      <button id="mes-prev">‹</button>
      <span class="month-label">${t('months')[state.mes-1]} ${state.ano}</span>
      <button id="mes-next">›</button>
    </div>`;

  el.innerHTML = `
    <div class="section-header">
      <span class="section-title">${t('dashboard_title')}</span>
      <div style="display:flex;gap:6px;align-items:center">
        <button class="btn btn-sm ${state.globalView ? 'btn-primary' : 'btn-ghost'}" onclick="toggleGlobalView()">
          ${t('dashboard_alltime')}
        </button>
        ${monthPicker}
      </div>
    </div>

    <div class="card-row" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
      <div class="stat-block">
        <div class="stat-label">${t('stat_services')}</div>
        <div class="stat-value">${s.total_servicos || 0}</div>
      </div>
      <div class="stat-block">
        <div class="stat-label">${t('stat_hours')}</div>
        <div class="stat-value">${s.total_horas != null ? s.total_horas + ' h' : '—'}</div>
      </div>
    </div>

    <div class="card-row" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
      <div class="stat-block">
        <div class="stat-label">${t('stat_received')}</div>
        <div class="stat-value accent">${s.total_recebido ? s.total_recebido.toFixed(2) + ' ' + cur : '—'}</div>
      </div>
      <div class="stat-block">
        <div class="stat-label">${t('stat_pending')}</div>
        <div class="stat-value${s.total_pendente > 0 ? ' warn' : ''}">${s.total_pendente ? s.total_pendente.toFixed(2) + ' ' + cur : '—'}</div>
      </div>
    </div>

    <div class="card-row" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
      <div class="stat-block">
        <div class="stat-label">${t('stat_billed')}</div>
        <div class="stat-value">${s.total_valor ? s.total_valor.toFixed(2) + ' ' + cur : '—'}</div>
      </div>
      <div class="stat-block">
        <div class="stat-label">${t('stat_horimetro')}</div>
        <div class="stat-value">${s.total_horimetro != null ? s.total_horimetro + ' h' : '—'}</div>
        <div class="stat-sub">${t('stat_horimetro_sub')}</div>
      </div>
    </div>

    ${s.total_gorjetas > 0 ? `
    <div class="card-row" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
      <div class="stat-block">
        <div class="stat-label">${t('stat_tips')}</div>
        <div class="stat-value accent">${s.total_gorjetas.toFixed(2)} ${cur}</div>
      </div>
      <div class="stat-block"></div>
    </div>` : ''}

    ${porCliente.length ? `
    <div class="card">
      <div class="section-title" style="margin-bottom:12px">${t('by_client')}</div>
      ${porCliente.map(c => `
        <div class="cliente-row">
          <div class="cliente-row-name">${c.nome || '—'}</div>
          <div class="cliente-row-stats">
            <div class="cliente-row-stat"><strong>${c.servicos}</strong> serv.</div>
            <div class="cliente-row-stat"><strong>${c.horas || '—'}</strong> h</div>
            <div class="cliente-row-stat"><strong>${c.valor ? c.valor.toFixed(2) + ' ' + cur : '—'}</strong></div>
            ${c.gorjetas > 0 ? `<div class="cliente-row-stat" style="color:var(--accent)"><strong>+${c.gorjetas.toFixed(2)} ${cur}</strong></div>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
    ` : `<div class="empty"><div class="empty-icon">📊</div><div class="empty-title">${t('no_data')}</div><div class="empty-sub">${t('no_data_sub')}</div></div>`}
  `;

  if (!state.globalView) {
    document.getElementById('mes-prev').onclick = () => {
      state.mes--; if (state.mes < 1) { state.mes = 12; state.ano--; }
      renderDashboard();
    };
    document.getElementById('mes-next').onclick = () => {
      state.mes++; if (state.mes > 12) { state.mes = 1; state.ano++; }
      renderDashboard();
    };
  }
}

window.toggleGlobalView = function() {
  state.globalView = !state.globalView;
  renderDashboard();
};

// ── Lista de serviços ─────────────────────────────────────
async function renderLista() {
  const el = document.getElementById('view-lista');
  const servicos = await api.get(`/api/servicos?mes=${state.mes}&ano=${state.ano}`);

  el.innerHTML = `
    <div class="section-header">
      <span class="section-title">${t('months')[state.mes-1]} ${state.ano}</span>
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
        ? `<div class="empty"><div class="empty-icon">🚜</div><div class="empty-title">${t('no_services')}</div><div class="empty-sub">${t('no_services_sub')}</div></div>`
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
  const cur = getCurrency();
  const chips = [];
  const descontoH = s.horas_desconto > 0 ? ` -${s.horas_desconto}h` : '';
  if (s.hora_inicio || s.hora_fim) {
    chips.push(`<span class="chip hora">🕐 ${s.hora_inicio || '?'}–${s.hora_fim || '?'}${descontoH}${s.duracao_horas != null ? ' · ' + s.duracao_horas + 'h' : ''}</span>`);
  } else if (s.duracao_horas != null) {
    chips.push(`<span class="chip hora">⏱ ${s.duracao_horas}h</span>`);
  }
  if (s.horimetro_inicio != null || s.horimetro_fim != null) {
    chips.push(`<span class="chip horim">⚙️ ${s.horimetro_inicio ?? '?'} → ${s.horimetro_fim ?? '?'} h${s.horimetro_delta != null ? ' (Δ' + s.horimetro_delta + ')' : ''}</span>`);
  }
  if (s.preco_hora != null) {
    let billing = `${s.preco_hora}${cur}/h`;
    if (s.preco_deslocacao) billing += ` +${s.preco_deslocacao}${cur}`;
    if (s.desconto) billing += ` -${s.desconto}${cur} desc.`;
    chips.push(`<span class="chip billing">💶 ${billing}</span>`);
  }
  // Show tip chip when there's an additional value
  if (s.gorjeta > 0) {
    chips.push(`<span class="chip billing" style="color:var(--accent)">+${parseFloat(s.gorjeta).toFixed(2)}${cur} ${t('tip_badge')}</span>`);
  }

  const pagoTag = s.valor != null
    ? `<div class="pago-tag ${s.pago ? 'pago' : 'pendente'}">${s.pago ? t('tag_paid') : t('tag_pending')}</div>`
    : '';

  return `
    <div class="servico-item" data-id="${s.id}">
      <div class="servico-top">
        <div>
          <div class="servico-data">${formatDate(s.data)}</div>
          <div class="servico-cliente">${s.cliente_nome || '—'}</div>
          ${s.descricao ? `<div class="servico-desc">${escapeHtml(s.descricao)}</div>` : ''}
        </div>
        <div style="text-align:right;flex-shrink:0">
          ${s.valor != null ? `<div class="servico-valor">${parseFloat(s.valor).toFixed(2)} ${cur}</div>` : ''}
          ${pagoTag}
        </div>
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

  // Pre-fill from settings defaults when creating a new service
  const isNew = !s.id;
  const defaultPrecoHora = isNew ? (s.preco_hora ?? localStorage.getItem('default_preco_hora') ?? '') : (s.preco_hora ?? '');
  const defaultDeslocacao = isNew ? (s.preco_deslocacao ?? localStorage.getItem('default_deslocacao') ?? '') : (s.preco_deslocacao ?? '');
  const defaultPago = isNew ? (s.pago ?? localStorage.getItem('default_pago') ?? '0') : (s.pago ?? '0');

  return `
    <div class="form-grid">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_date')}</label>
          <input type="date" class="form-control" id="f-data" value="${s.data || today}" required>
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_client')}</label>
          <select class="form-control" id="f-cliente" onchange="onClienteChange()">
            <option value="">${t('form_no_client')}</option>
            ${clienteOptions}
            <option value="__novo__">${t('form_new_client')}</option>
          </select>
          <input type="text" class="form-control" id="f-cliente-novo" placeholder="${t('form_new_client_placeholder')}" style="margin-top:6px;display:none">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_start_time')}</label>
          <input type="time" class="form-control" id="f-hinicio" value="${s.hora_inicio || ''}" oninput="calcDuracao()">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_end_time')}</label>
          <input type="time" class="form-control" id="f-hfim" value="${s.hora_fim || ''}" oninput="calcDuracao()">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_discount_hours')}</label>
          <input type="number" class="form-control" id="f-desconto" step="0.25" min="0" placeholder="ex: 1" value="${s.horas_desconto || ''}" oninput="calcDuracao()">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_duration')}</label>
          <input type="number" class="form-control" id="f-duracao" step="0.25" min="0" placeholder="${t('form_auto')}" value="${s.duracao_horas ?? ''}">
        </div>
      </div>

      <hr class="divider">
      <div class="section-title">${t('form_horimeter')}</div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_horim_start')}</label>
          <input type="number" class="form-control" id="f-horim-in" step="0.1" min="0" placeholder="ex: 1245.3" value="${s.horimetro_inicio ?? ''}" oninput="calcHorim()">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_horim_end')}</label>
          <input type="number" class="form-control" id="f-horim-out" step="0.1" min="0" placeholder="ex: 1248.8" value="${s.horimetro_fim ?? ''}" oninput="calcHorim()">
        </div>
      </div>
      <div id="horim-delta-hint"></div>

      <hr class="divider">
      <div class="section-title">${t('form_billing')}</div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_price_hour')}</label>
          <input type="number" class="form-control" id="f-preco-hora" step="0.5" min="0" placeholder="ex: 25.00" value="${defaultPrecoHora}" oninput="calcValor()">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_travel')}</label>
          <input type="number" class="form-control" id="f-deslocacao" step="0.5" min="0" placeholder="ex: 10.00" value="${defaultDeslocacao}" oninput="calcValor()">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_discount_value')}</label>
          <input type="number" class="form-control" id="f-desconto-valor" step="0.5" min="0" placeholder="ex: 5.00" value="${s.desconto ?? ''}" oninput="calcValor()">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_payment_status')}</label>
          <select class="form-control" id="f-pago">
            <option value="0" ${!parseInt(defaultPago) ? 'selected' : ''}>${t('form_pending')}</option>
            <option value="1" ${parseInt(defaultPago) ? 'selected' : ''}>${t('form_paid')}</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_total')}</label>
          <input type="number" class="form-control" id="f-valor" step="0.01" min="0" placeholder="${t('form_auto_or_manual')}" value="${s.valor ?? ''}" oninput="calcValor.manual=true">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_tip')}</label>
          <input type="number" class="form-control" id="f-gorjeta" step="0.01" min="0" placeholder="${t('form_tip_placeholder')}" value="${s.gorjeta || ''}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">${t('form_description')}</label>
        <textarea class="form-control" id="f-desc" placeholder="${t('form_desc_placeholder')}">${s.descricao || ''}</textarea>
      </div>

      <div class="actions">
        ${s.id ? `<button class="btn btn-danger btn-sm" onclick="deleteServico(${s.id})">${t('form_delete')}</button>` : ''}
        <div style="flex:1"></div>
        <button class="btn btn-secondary" onclick="closeModal()">${t('form_cancel')}</button>
        <button class="btn btn-primary" onclick="saveServico(${s.id || 0})">
          ${s.id ? t('form_save') : t('form_register')}
        </button>
      </div>
    </div>
  `;
}

window.onClienteChange = function() {
  const sel = document.getElementById('f-cliente');
  const novoInput = document.getElementById('f-cliente-novo');
  novoInput.style.display = sel.value === '__novo__' ? 'block' : 'none';
  if (sel.value === '__novo__') novoInput.focus();
};

window.calcDuracao = function() {
  const ini = document.getElementById('f-hinicio')?.value;
  const fim = document.getElementById('f-hfim')?.value;
  if (!ini || !fim) return;
  const [h1, m1] = ini.split(':').map(Number);
  const [h2, m2] = fim.split(':').map(Number);
  let dur = ((h2 * 60 + m2) - (h1 * 60 + m1)) / 60;
  if (dur < 0) dur += 24;
  const desconto = parseFloat(document.getElementById('f-desconto')?.value) || 0;
  const net = Math.max(0, dur - desconto);
  document.getElementById('f-duracao').value = net.toFixed(2);
  calcValor();
};

window.calcValor = function() {
  const duracao = parseFloat(document.getElementById('f-duracao')?.value) || 0;
  const precoHora = parseFloat(document.getElementById('f-preco-hora')?.value) || 0;
  if (!precoHora) return;
  const deslocacao = parseFloat(document.getElementById('f-deslocacao')?.value) || 0;
  const desconto = parseFloat(document.getElementById('f-desconto-valor')?.value) || 0;
  const total = Math.max(0, (duracao * precoHora) + deslocacao - desconto);
  document.getElementById('f-valor').value = total.toFixed(2);
};

window.calcHorim = function() {
  const ini = parseFloat(document.getElementById('f-horim-in')?.value);
  const fim = parseFloat(document.getElementById('f-horim-out')?.value);
  const hint = document.getElementById('horim-delta-hint');
  if (!hint) return;
  if (!isNaN(ini) && !isNaN(fim)) {
    const delta = (fim - ini).toFixed(1);
    hint.innerHTML = `<div class="horim-hint">⚙️ ${t('horim_delta')}: <strong>${delta} h</strong></div>`;
  } else {
    hint.innerHTML = '';
  }
};

function getFormData() {
  const clienteVal = document.getElementById('f-cliente').value;
  return {
    data: document.getElementById('f-data').value,
    hora_inicio: document.getElementById('f-hinicio').value || null,
    hora_fim: document.getElementById('f-hfim').value || null,
    horas_desconto: document.getElementById('f-desconto').value || null,
    duracao_horas: document.getElementById('f-duracao').value || null,
    cliente_id: (clienteVal && clienteVal !== '__novo__') ? clienteVal : null,
    descricao: document.getElementById('f-desc').value || null,
    valor: document.getElementById('f-valor').value || null,
    horimetro_inicio: document.getElementById('f-horim-in').value || null,
    horimetro_fim: document.getElementById('f-horim-out').value || null,
    preco_hora: document.getElementById('f-preco-hora').value || null,
    preco_deslocacao: document.getElementById('f-deslocacao').value || null,
    desconto: document.getElementById('f-desconto-valor').value || null,
    pago: document.getElementById('f-pago').value === '1' ? 1 : 0,
    gorjeta: document.getElementById('f-gorjeta').value || null,
  };
}

window.saveServico = async function(id) {
  const body = getFormData();
  if (!body.data) { toast(t('toast_date_required'), 'error'); return; }

  // Handle new client creation inline
  if (document.getElementById('f-cliente').value === '__novo__') {
    const novoNome = document.getElementById('f-cliente-novo').value.trim();
    if (!novoNome) { toast(t('toast_client_name_required'), 'error'); return; }
    const result = await api.post('/api/clientes', { nome: novoNome });
    if (result.error) { toast(result.error, 'error'); return; }
    body.cliente_id = result.id;
    state.clientes = await api.get('/api/clientes');
  }

  try {
    if (id) {
      await api.put(`/api/servicos/${id}`, body);
      toast(t('toast_updated'));
    } else {
      await api.post('/api/servicos', body);
      toast(t('toast_registered'));
    }
    closeModal();
    renderView(state.view);
  } catch (e) {
    toast(t('toast_save_error'), 'error');
  }
};

window.deleteServico = async function(id) {
  if (!confirm(t('confirm_delete_service'))) return;
  await api.del(`/api/servicos/${id}`);
  toast(t('toast_deleted'));
  closeModal();
  renderView(state.view);
};

async function editServico(id) {
  const s = await api.get(`/api/servicos/${id}`);
  openModal(t('form_edit_service'), servicoFormHtml(s));
  calcHorim();
  // Don't auto-recalc duration on edit — keep stored value
}

function novoServico() {
  openModal(t('form_new_service'), servicoFormHtml());
}

// ── Clientes ──────────────────────────────────────────────
async function renderClientes() {
  const el = document.getElementById('view-clientes');
  state.clientes = await api.get('/api/clientes');

  el.innerHTML = `
    <div class="section-header">
      <span class="section-title">${t('clients_title')}</span>
    </div>

    <div class="card" style="margin-bottom:16px">
      <div class="form-group">
        <label class="form-label">${t('client_new_label')} *</label>
        <input type="text" class="form-control" id="novo-cliente-input" placeholder="${t('client_new_placeholder')}">
      </div>
      <div class="form-group">
        <label class="form-label">${t('client_phone')}</label>
        <input type="text" class="form-control" id="novo-cliente-telefone" placeholder="${t('client_phone_placeholder')}">
      </div>
      <div class="form-group">
        <label class="form-label">${t('client_address')}</label>
        <input type="text" class="form-control" id="novo-cliente-endereco" placeholder="${t('client_address_placeholder')}">
      </div>
      <button class="btn btn-primary" onclick="adicionarCliente()" style="width:100%">${t('client_add')}</button>
    </div>

    <div id="clientes-list">
      ${state.clientes.length === 0
        ? `<div class="empty"><div class="empty-icon">👤</div><div class="empty-title">${t('no_clients')}</div></div>`
        : state.clientes.map(c => `
          <div class="cliente-item">
            <div style="flex:1;min-width:0">
              <div class="cliente-nome">${escapeHtml(c.nome)}</div>
              ${c.telefone ? `<div class="cliente-detail">📞 ${escapeHtml(c.telefone)}</div>` : ''}
              ${c.endereco ? `<div class="cliente-detail">📍 ${escapeHtml(c.endereco)}</div>` : ''}
            </div>
            <div style="display:flex;gap:6px;flex-shrink:0">
              <button class="btn btn-secondary btn-sm" onclick="editarCliente(${c.id})">${t('client_edit')}</button>
              <button class="btn btn-danger btn-sm" onclick="eliminarCliente(${c.id}, '${escapeHtml(c.nome)}')">${t('client_remove')}</button>
            </div>
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
  const telefone = document.getElementById('novo-cliente-telefone').value.trim();
  const endereco = document.getElementById('novo-cliente-endereco').value.trim();
  const result = await api.post('/api/clientes', { nome, telefone, endereco });
  if (result.error) { toast(result.error, 'error'); return; }
  toast(`"${nome}" ${t('toast_client_added')}`);
  input.value = '';
  document.getElementById('novo-cliente-telefone').value = '';
  document.getElementById('novo-cliente-endereco').value = '';
  state.clientes = await api.get('/api/clientes');
  renderClientes();
};

window.editarCliente = function(id) {
  const c = state.clientes.find(x => x.id === id);
  if (!c) return;
  openModal(t('client_details_title'), `
    <div class="form-group">
      <label class="form-label">${t('client_new_label')} *</label>
      <input type="text" class="form-control" id="edit-cliente-nome" value="${escapeHtml(c.nome)}">
    </div>
    <div class="form-group">
      <label class="form-label">${t('client_phone')}</label>
      <input type="text" class="form-control" id="edit-cliente-telefone" value="${escapeHtml(c.telefone || '')}" placeholder="${t('client_phone_placeholder')}">
    </div>
    <div class="form-group">
      <label class="form-label">${t('client_address')}</label>
      <input type="text" class="form-control" id="edit-cliente-endereco" value="${escapeHtml(c.endereco || '')}" placeholder="${t('client_address_placeholder')}">
    </div>
    <div style="display:flex;gap:8px;margin-top:8px">
      <button class="btn btn-secondary" style="flex:1" onclick="closeModal()">${t('form_cancel')}</button>
      <button class="btn btn-primary" style="flex:1" onclick="salvarCliente(${id})">${t('client_save')}</button>
    </div>
  `);
};

window.salvarCliente = async function(id) {
  const nome = document.getElementById('edit-cliente-nome').value.trim();
  if (!nome) { toast(t('toast_client_name_required'), 'error'); return; }
  const telefone = document.getElementById('edit-cliente-telefone').value.trim();
  const endereco = document.getElementById('edit-cliente-endereco').value.trim();
  const result = await api.put(`/api/clientes/${id}`, { nome, telefone, endereco });
  if (result.error) { toast(result.error, 'error'); return; }
  toast(`"${nome}" ${t('toast_client_updated')}`);
  closeModal();
  state.clientes = await api.get('/api/clientes');
  renderClientes();
};

window.eliminarCliente = async function(id, nome) {
  if (!confirm(`${t('confirm_remove_client')} "${nome}"?\n${t('confirm_remove_client_suffix')}`)) return;
  await api.del(`/api/clientes/${id}`);
  toast(`"${nome}" ${t('toast_client_removed')}`);
  renderClientes();
};

// ── Init ──────────────────────────────────────────────────
async function init() {
  // Apply saved theme before rendering
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Load clientes into state
  state.clientes = await api.get('/api/clientes');

  // Nav
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.view));
  });

  // FAB
  document.getElementById('fab').addEventListener('click', () => {
    openModal(t('form_new_service'), servicoFormHtml());
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

  // Version footer
  api.get('/api/version').then(v => {
    const el = document.getElementById('app-footer');
    if (el) el.textContent = `ServiLog v${v.version}`;
  });
}

document.addEventListener('DOMContentLoaded', init);

// ── Settings ──────────────────────────────────────────────
async function renderSettings() {
  const el = document.getElementById('view-settings');

  // Fetch app stats and version
  const [stats, version] = await Promise.all([api.get('/api/stats'), api.get('/api/version')]);

  const defaultPrecoHora = localStorage.getItem('default_preco_hora') || '';
  const defaultDeslocacao = localStorage.getItem('default_deslocacao') || '';
  const defaultPago = localStorage.getItem('default_pago') || '0';
  const currency = getCurrency();
  const theme = localStorage.getItem('theme') || 'dark';

  el.innerHTML = `
    <div class="section-header">
      <span class="section-title">${t('settings_title')}</span>
    </div>

    <!-- Backup & Restore -->
    <div class="card" style="margin-bottom:12px">
      <div class="section-title" style="margin-bottom:12px">${t('settings_backup')}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <a href="/api/backup/download" class="btn btn-secondary btn-sm" download>
          ${t('settings_backup_download')}
        </a>
        <button class="btn btn-secondary btn-sm" onclick="triggerRestore()">
          ${t('settings_backup_restore')}
        </button>
      </div>
      <input type="file" id="restore-input" accept=".db,.sqlite,application/octet-stream"
             style="display:none" onchange="doRestore(this)">
    </div>

    <!-- Language -->
    <div class="card" style="margin-bottom:12px">
      <div class="section-title" style="margin-bottom:12px">${t('settings_language')}</div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-sm ${state.lang === 'pt' ? 'btn-primary' : 'btn-secondary'}" onclick="setLang('pt')">PT</button>
        <button class="btn btn-sm ${state.lang === 'en' ? 'btn-primary' : 'btn-secondary'}" onclick="setLang('en')">EN</button>
      </div>
    </div>

    <!-- Default Values -->
    <div class="card" style="margin-bottom:12px">
      <div class="section-title" style="margin-bottom:12px">${t('settings_defaults')}</div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('settings_default_price')}</label>
          <input type="number" class="form-control" step="0.5" min="0" value="${escapeHtml(defaultPrecoHora)}"
                 oninput="saveSetting('default_preco_hora', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">${t('settings_default_travel')}</label>
          <input type="number" class="form-control" step="0.5" min="0" value="${escapeHtml(defaultDeslocacao)}"
                 oninput="saveSetting('default_deslocacao', this.value)">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('settings_default_payment')}</label>
          <select class="form-control" onchange="saveSetting('default_pago', this.value)">
            <option value="0" ${defaultPago === '0' ? 'selected' : ''}>${t('form_pending')}</option>
            <option value="1" ${defaultPago === '1' ? 'selected' : ''}>${t('form_paid')}</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">${t('settings_currency')}</label>
          <input type="text" class="form-control" maxlength="3" value="${escapeHtml(currency)}"
                 oninput="saveSetting('currency', this.value)">
        </div>
      </div>
    </div>

    <!-- Appearance / Theme -->
    <div class="card" style="margin-bottom:12px">
      <div class="section-title" style="margin-bottom:12px">${t('settings_theme')}</div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-sm ${theme === 'dark' ? 'btn-primary' : 'btn-secondary'}" onclick="setTheme('dark')">${t('settings_theme_dark')}</button>
        <button class="btn btn-sm ${theme === 'light' ? 'btn-primary' : 'btn-secondary'}" onclick="setTheme('light')">${t('settings_theme_light')}</button>
      </div>
    </div>

    <!-- Data Statistics -->
    <div class="card" style="margin-bottom:12px">
      <div class="section-title" style="margin-bottom:12px">${t('settings_data_stats')}</div>
      <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border)">
        <span class="stat-label">${t('settings_total_services')}</span>
        <span>${stats.totalServices}</span>
      </div>
      <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border)">
        <span class="stat-label">${t('settings_total_clients')}</span>
        <span>${stats.totalClients}</span>
      </div>
      <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border)">
        <span class="stat-label">${t('settings_db_size')}</span>
        <span>${formatBytes(stats.dbSizeBytes)}</span>
      </div>
      <div style="display:flex;justify-content:space-between;padding:6px 0">
        <span class="stat-label">${t('settings_date_range')}</span>
        <span>${stats.dateRange && stats.dateRange.first ? stats.dateRange.first + ' → ' + stats.dateRange.last : '—'}</span>
      </div>
    </div>

    <!-- Version -->
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span class="stat-label">${t('settings_version')}</span>
        <span>ServiLog v${version.version}</span>
      </div>
    </div>
  `;
}

// ── Settings helpers ──────────────────────────────────────
window.saveSetting = function(key, value) {
  localStorage.setItem(key, value);
};

window.setLang = function(lang) {
  state.lang = lang;
  localStorage.setItem('lang', lang);
  renderSettings();
};

window.setTheme = function(theme) {
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  renderSettings();
};

window.triggerRestore = function() {
  document.getElementById('restore-input').click();
};

window.doRestore = async function(input) {
  if (!input.files[0]) return;
  if (!confirm(t('confirm_restore'))) { input.value = ''; return; }
  try {
    const r = await fetch('/api/backup/restore', {
      method: 'POST',
      headers: { 'Content-Type': 'application/octet-stream' },
      body: input.files[0],
    });
    const result = await r.json();
    if (result.error) { toast(result.error, 'error'); return; }
    toast(t('toast_restore_ok'));
    setTimeout(() => location.reload(), 1500);
  } catch (_) {
    toast(t('toast_restore_error'), 'error');
  }
};

function formatBytes(bytes) {
  if (!bytes) return '—';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(2) + ' MB';
}
