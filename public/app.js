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
    serv_abbr: 'serv.', discount_abbr: 'desc.',
    form_pictures: 'Fotos', form_pictures_add: 'Adicionar fotos',
    form_pictures_loading: 'A carregar...', form_pictures_empty: 'Sem fotos',
    toast_picture_uploaded: 'Foto adicionada ✓', toast_picture_deleted: 'Foto eliminada',
    confirm_delete_picture: 'Eliminar esta foto?',
    settings_invoice: 'Dados para Faturas',
    invoice_issuer_name: 'Nome / Empresa', invoice_issuer_name_placeholder: 'ex: João Silva - Serviços Agrícolas',
    invoice_issuer_address: 'Morada', invoice_issuer_address_placeholder: 'ex: Rua Principal 10, 3000-000 Coimbra',
    invoice_issuer_nif: 'NIF', invoice_issuer_nif_placeholder: 'ex: 123456789',
    invoice_issuer_email: 'Email', invoice_issuer_email_placeholder: 'ex: joao@email.com',
    invoice_footer_note: 'Nota de rodapé', invoice_footer_note_placeholder: 'ex: Pagamento a 30 dias',
    invoice_btn: '📄 Fatura',
    invoice_title: 'FATURA', invoice_ref: 'Ref.', invoice_date: 'Data',
    invoice_issued_to: 'Faturado a', invoice_services: 'Serviços',
    invoice_col_date: 'Data', invoice_col_desc: 'Descrição', invoice_col_hours: 'Horas',
    invoice_col_rate: 'Preço/h', invoice_col_travel: 'Deslocação', invoice_col_discount: 'Desconto',
    invoice_col_total: 'Total', invoice_subtotal: 'Subtotal', invoice_total: 'Total',
    invoice_tip: 'Valor adicional', invoice_status_paid: 'PAGO', invoice_status_pending: 'PENDENTE',
    invoice_print: 'Imprimir / Guardar PDF',
    invoice_no_issuer: 'Configure os dados da fatura nas Definições antes de gerar uma fatura.',
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
    serv_abbr: 'svc.', discount_abbr: 'disc.',
    form_pictures: 'Pictures', form_pictures_add: 'Add pictures',
    form_pictures_loading: 'Loading...', form_pictures_empty: 'No pictures',
    toast_picture_uploaded: 'Picture added ✓', toast_picture_deleted: 'Picture deleted',
    confirm_delete_picture: 'Delete this picture?',
    settings_invoice: 'Invoice Details',
    invoice_issuer_name: 'Name / Business', invoice_issuer_name_placeholder: 'e.g. John Smith - Farm Services',
    invoice_issuer_address: 'Address', invoice_issuer_address_placeholder: 'e.g. 10 Main St, Springfield',
    invoice_issuer_nif: 'Tax/VAT No.', invoice_issuer_nif_placeholder: 'e.g. 123456789',
    invoice_issuer_email: 'Email', invoice_issuer_email_placeholder: 'e.g. john@email.com',
    invoice_footer_note: 'Footer note', invoice_footer_note_placeholder: 'e.g. Payment due in 30 days',
    invoice_btn: '📄 Invoice',
    invoice_title: 'INVOICE', invoice_ref: 'Ref.', invoice_date: 'Date',
    invoice_issued_to: 'Bill to', invoice_services: 'Services',
    invoice_col_date: 'Date', invoice_col_desc: 'Description', invoice_col_hours: 'Hours',
    invoice_col_rate: 'Rate/h', invoice_col_travel: 'Travel', invoice_col_discount: 'Discount',
    invoice_col_total: 'Total', invoice_subtotal: 'Subtotal', invoice_total: 'Total',
    invoice_tip: 'Additional', invoice_status_paid: 'PAID', invoice_status_pending: 'PENDING',
    invoice_print: 'Print / Save as PDF',
    invoice_no_issuer: 'Please configure your invoice details in Settings before generating an invoice.',
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
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
  clients: [],
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
  calcTotal.manual = false;
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
  else if (view === 'list') await renderList();
  else if (view === 'clients') await renderClients();
  else if (view === 'settings') await renderSettings();
}

// ── Dashboard ─────────────────────────────────────────────
async function renderDashboard() {
  const el = document.getElementById('view-dashboard');
  const url = state.globalView ? '/api/summary' : `/api/summary?month=${state.month}&year=${state.year}`;
  const data = await api.get(url);
  const { stats, byClient } = data;

  const s = stats || {};
  const cur = getCurrency();
  const monthPicker = state.globalView ? '' : `
    <div class="month-picker">
      <button id="month-prev">‹</button>
      <span class="month-label">${t('months')[state.month-1]} ${state.year}</span>
      <button id="month-next">›</button>
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
        <div class="stat-value">${s.total_services || 0}</div>
      </div>
      <div class="stat-block">
        <div class="stat-label">${t('stat_hours')}</div>
        <div class="stat-value">${s.total_hours != null ? s.total_hours + ' h' : '—'}</div>
      </div>
    </div>

    <div class="card-row" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
      <div class="stat-block">
        <div class="stat-label">${t('stat_received')}</div>
        <div class="stat-value accent">${s.total_received ? s.total_received.toFixed(2) + ' ' + cur : '—'}</div>
      </div>
      <div class="stat-block">
        <div class="stat-label">${t('stat_pending')}</div>
        <div class="stat-value${s.total_pending > 0 ? ' warn' : ''}">${s.total_pending ? s.total_pending.toFixed(2) + ' ' + cur : '—'}</div>
      </div>
    </div>

    <div class="card-row" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
      <div class="stat-block">
        <div class="stat-label">${t('stat_billed')}</div>
        <div class="stat-value">${s.total_value ? s.total_value.toFixed(2) + ' ' + cur : '—'}</div>
      </div>
      <div class="stat-block">
        <div class="stat-label">${t('stat_horimetro')}</div>
        <div class="stat-value">${s.total_hourmeter != null ? s.total_hourmeter + ' h' : '—'}</div>
        <div class="stat-sub">${t('stat_horimetro_sub')}</div>
      </div>
    </div>

    ${s.total_tips > 0 ? `
    <div class="card-row" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
      <div class="stat-block">
        <div class="stat-label">${t('stat_tips')}</div>
        <div class="stat-value accent">${s.total_tips.toFixed(2)} ${cur}</div>
      </div>
      <div class="stat-block"></div>
    </div>` : ''}

    ${byClient.length ? `
    <div class="card">
      <div class="section-title" style="margin-bottom:12px">${t('by_client')}</div>
      ${byClient.map(c => `
        <div class="client-row">
          <div class="client-row-name">${c.name || '—'}</div>
          <div class="client-row-stats">
            <div class="client-row-stat"><strong>${c.services}</strong> ${t('serv_abbr')}</div>
            <div class="client-row-stat"><strong>${c.hours || '—'}</strong> h</div>
            <div class="client-row-stat"><strong>${c.value ? c.value.toFixed(2) + ' ' + cur : '—'}</strong></div>
            ${c.tips > 0 ? `<div class="client-row-stat" style="color:var(--accent)"><strong>+${c.tips.toFixed(2)} ${cur}</strong></div>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
    ` : `<div class="empty"><div class="empty-icon">📊</div><div class="empty-title">${t('no_data')}</div><div class="empty-sub">${t('no_data_sub')}</div></div>`}
  `;

  if (!state.globalView) {
    document.getElementById('month-prev').onclick = () => {
      state.month--; if (state.month < 1) { state.month = 12; state.year--; }
      renderDashboard();
    };
    document.getElementById('month-next').onclick = () => {
      state.month++; if (state.month > 12) { state.month = 1; state.year++; }
      renderDashboard();
    };
  }
}

window.toggleGlobalView = function() {
  state.globalView = !state.globalView;
  renderView(state.view);
};

// ── Service list ──────────────────────────────────────────
async function renderList() {
  const el = document.getElementById('view-list');
  const url = state.globalView ? '/api/services' : `/api/services?month=${state.month}&year=${state.year}`;
  const services = await api.get(url);

  const monthPicker = state.globalView ? '' : `
    <div class="month-picker">
      <button id="list-month-prev">‹</button>
      <span class="month-label" style="min-width:80px">${state.month.toString().padStart(2,'0')}/${state.year}</span>
      <button id="list-month-next">›</button>
    </div>`;

  el.innerHTML = `
    <div class="section-header">
      <span class="section-title">${state.globalView ? t('dashboard_alltime') : `${t('months')[state.month-1]} ${state.year}`}</span>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="btn btn-sm ${state.globalView ? 'btn-primary' : 'btn-ghost'}" onclick="toggleGlobalView()">
          ${t('dashboard_alltime')}
        </button>
        ${monthPicker}
        <a href="/api/export/csv" class="btn btn-ghost btn-sm" download title="Export CSV">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 14v4h14v-4M10 3v10M6 9l4 4 4-4"/></svg>
          CSV
        </a>
      </div>
    </div>
    <div id="services-list">
      ${services.length === 0
        ? `<div class="empty"><div class="empty-icon">🚜</div><div class="empty-title">${t('no_services')}</div><div class="empty-sub">${t('no_services_sub')}</div></div>`
        : services.map(s => serviceCard(s)).join('')
      }
    </div>
  `;

  if (!state.globalView) {
    document.getElementById('list-month-prev').onclick = () => {
      state.month--; if (state.month < 1) { state.month = 12; state.year--; }
      renderList();
    };
    document.getElementById('list-month-next').onclick = () => {
      state.month++; if (state.month > 12) { state.month = 1; state.year++; }
      renderList();
    };
  }

  el.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => editService(parseInt(item.dataset.id)));
  });
}

function serviceCard(s) {
  const cur = getCurrency();
  const chips = [];
  const discountH = s.discount_hours > 0 ? ` -${s.discount_hours}h` : '';
  if (s.start_time || s.end_time) {
    chips.push(`<span class="chip hora">🕐 ${s.start_time || '?'}–${s.end_time || '?'}${discountH}${s.duration_hours != null ? ' · ' + s.duration_hours + 'h' : ''}</span>`);
  } else if (s.duration_hours != null) {
    chips.push(`<span class="chip hora">⏱ ${s.duration_hours}h</span>`);
  }
  if (s.hourmeter_start != null || s.hourmeter_end != null) {
    chips.push(`<span class="chip horim">⚙️ ${s.hourmeter_start ?? '?'} → ${s.hourmeter_end ?? '?'} h${s.hourmeter_delta != null ? ' (Δ' + s.hourmeter_delta + ')' : ''}</span>`);
  }
  if (s.price_per_hour != null) {
    let billing = `${s.price_per_hour}${cur}/h`;
    if (s.travel_fee) billing += ` +${s.travel_fee}${cur}`;
    if (s.discount) billing += ` -${s.discount}${cur} ${t('discount_abbr')}`;
    chips.push(`<span class="chip billing">💶 ${billing}</span>`);
  }
  if (s.tip > 0) {
    chips.push(`<span class="chip billing" style="color:var(--accent)">+${parseFloat(s.tip).toFixed(2)}${cur} ${t('tip_badge')}</span>`);
  }
  if (s.attachment_count > 0) {
    chips.push(`<span class="chip">📷 ${s.attachment_count}</span>`);
  }

  const paymentTag = s.value != null
    ? `<div class="payment-tag ${s.paid ? 'paid' : 'pending'}">${s.paid ? t('tag_paid') : t('tag_pending')}</div>`
    : '';

  return `
    <div class="service-item" data-id="${s.id}">
      <div class="service-top">
        <div>
          <div class="service-date">${formatDate(s.date)}</div>
          <div class="service-client">${s.client_name || '—'}</div>
          ${s.description ? `<div class="service-description">${escapeHtml(s.description)}</div>` : ''}
        </div>
        <div style="text-align:right;flex-shrink:0">
          ${s.value != null ? `<div class="service-value">${parseFloat(s.value).toFixed(2)} ${cur}</div>` : ''}
          ${paymentTag}
        </div>
      </div>
      ${chips.length ? `<div class="service-chips">${chips.join('')}</div>` : ''}
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

// ── Service form ──────────────────────────────────────────
function serviceFormHtml(s = {}) {
  const today = new Date().toISOString().slice(0,10);
  const clientOptions = state.clients.map(c =>
    `<option value="${c.id}" ${s.client_id == c.id ? 'selected' : ''}>${escapeHtml(c.name)}</option>`
  ).join('');

  // Pre-fill from settings defaults when creating a new service
  const isNew = !s.id;
  const defaultPricePerHour = isNew ? (s.price_per_hour ?? localStorage.getItem('default_price_per_hour') ?? '') : (s.price_per_hour ?? '');
  const defaultTravelFee = isNew ? (s.travel_fee ?? localStorage.getItem('default_travel_fee') ?? '') : (s.travel_fee ?? '');
  const defaultPaid = isNew ? (s.paid ?? localStorage.getItem('default_paid') ?? '0') : (s.paid ?? '0');

  return `
    <div class="form-grid">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_date')}</label>
          <input type="date" class="form-control" id="f-date" value="${s.date || today}" required>
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_client')}</label>
          <select class="form-control" id="f-client" onchange="onClientChange()">
            <option value="">${t('form_no_client')}</option>
            ${clientOptions}
            <option value="__new__">${t('form_new_client')}</option>
          </select>
          <input type="text" class="form-control" id="f-client-new" placeholder="${t('form_new_client_placeholder')}" style="margin-top:6px;display:none">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_start_time')}</label>
          <input type="time" class="form-control" id="f-start" value="${s.start_time || ''}" oninput="calcDuration()">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_end_time')}</label>
          <input type="time" class="form-control" id="f-end" value="${s.end_time || ''}" oninput="calcDuration()">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_discount_hours')}</label>
          <input type="number" class="form-control" id="f-discount-h" step="0.25" min="0" placeholder="ex: 1" value="${s.discount_hours || ''}" oninput="calcDuration()">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_duration')}</label>
          <input type="number" class="form-control" id="f-duration" step="0.25" min="0" placeholder="${t('form_auto')}" value="${s.duration_hours ?? ''}">
        </div>
      </div>

      <hr class="divider">
      <div class="section-title">${t('form_horimeter')}</div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_horim_start')}</label>
          <input type="number" class="form-control" id="f-horim-start" step="0.1" min="0" placeholder="ex: 1245.3" value="${s.hourmeter_start ?? ''}" oninput="calcHourmeter()">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_horim_end')}</label>
          <input type="number" class="form-control" id="f-horim-end" step="0.1" min="0" placeholder="ex: 1248.8" value="${s.hourmeter_end ?? ''}" oninput="calcHourmeter()">
        </div>
      </div>
      <div id="horim-delta-hint"></div>

      <hr class="divider">
      <div class="section-title">${t('form_billing')}</div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_price_hour')}</label>
          <input type="number" class="form-control" id="f-price-per-hour" step="0.5" min="0" placeholder="ex: 25.00" value="${defaultPricePerHour}" oninput="calcTotal()">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_travel')}</label>
          <input type="number" class="form-control" id="f-travel-fee" step="0.5" min="0" placeholder="ex: 10.00" value="${defaultTravelFee}" oninput="calcTotal()">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_discount_value')}</label>
          <input type="number" class="form-control" id="f-discount" step="0.5" min="0" placeholder="ex: 5.00" value="${s.discount ?? ''}" oninput="calcTotal()">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_payment_status')}</label>
          <select class="form-control" id="f-paid">
            <option value="0" ${!parseInt(defaultPaid) ? 'selected' : ''}>${t('form_pending')}</option>
            <option value="1" ${parseInt(defaultPaid) ? 'selected' : ''}>${t('form_paid')}</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_total')}</label>
          <input type="number" class="form-control" id="f-value" step="0.01" min="0" placeholder="${t('form_auto_or_manual')}" value="${s.value ?? ''}" oninput="calcTotal.manual=true">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_tip')}</label>
          <input type="number" class="form-control" id="f-tip" step="0.01" min="0" placeholder="${t('form_tip_placeholder')}" value="${s.tip || ''}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">${t('form_description')}</label>
        <textarea class="form-control" id="f-description" placeholder="${t('form_desc_placeholder')}">${s.description || ''}</textarea>
      </div>

      ${s.id ? `
      <hr class="divider">
      <div class="section-title">${t('form_pictures')}</div>
      <div id="pictures-grid" class="pictures-grid">
        <span class="pictures-empty">${t('form_pictures_loading')}</span>
      </div>
      <label class="btn btn-secondary btn-sm" style="cursor:pointer;width:fit-content">
        📷 ${t('form_pictures_add')}
        <input type="file" accept="image/*" multiple style="display:none" onchange="uploadPictures(this, ${s.id})">
      </label>
      ` : ''}

      <div class="actions">
        ${s.id ? `<button class="btn btn-danger btn-sm" onclick="deleteService(${s.id})">${t('form_delete')}</button>` : ''}
        ${s.id ? `<button class="btn btn-ghost btn-sm" onclick="generateInvoice(${s.id})">${t('invoice_btn')}</button>` : ''}
        <div style="flex:1"></div>
        <button class="btn btn-secondary" onclick="closeModal()">${t('form_cancel')}</button>
        <button class="btn btn-primary" onclick="saveService(${s.id || 0})">
          ${s.id ? t('form_save') : t('form_register')}
        </button>
      </div>
    </div>
  `;
}

window.onClientChange = function() {
  const sel = document.getElementById('f-client');
  const newInput = document.getElementById('f-client-new');
  newInput.style.display = sel.value === '__new__' ? 'block' : 'none';
  if (sel.value === '__new__') newInput.focus();
};

window.calcDuration = function() {
  const start = document.getElementById('f-start')?.value;
  const end = document.getElementById('f-end')?.value;
  if (!start || !end) return;
  const [h1, m1] = start.split(':').map(Number);
  const [h2, m2] = end.split(':').map(Number);
  let dur = ((h2 * 60 + m2) - (h1 * 60 + m1)) / 60;
  if (dur < 0) dur += 24;
  const discountH = parseFloat(document.getElementById('f-discount-h')?.value) || 0;
  const net = Math.max(0, dur - discountH);
  document.getElementById('f-duration').value = net.toFixed(2);
  calcTotal();
};

window.calcTotal = function() {
  if (calcTotal.manual) return;
  const duration = parseFloat(document.getElementById('f-duration')?.value) || 0;
  const pricePerHour = parseFloat(document.getElementById('f-price-per-hour')?.value) || 0;
  if (!pricePerHour) return;
  const travelFee = parseFloat(document.getElementById('f-travel-fee')?.value) || 0;
  const discount = parseFloat(document.getElementById('f-discount')?.value) || 0;
  const total = Math.max(0, (duration * pricePerHour) + travelFee - discount);
  document.getElementById('f-value').value = total.toFixed(2);
};

window.calcHourmeter = function() {
  const start = parseFloat(document.getElementById('f-horim-start')?.value);
  const end = parseFloat(document.getElementById('f-horim-end')?.value);
  const hint = document.getElementById('horim-delta-hint');
  if (!hint) return;
  if (!isNaN(start) && !isNaN(end)) {
    const delta = (end - start).toFixed(1);
    hint.innerHTML = `<div class="horim-hint">⚙️ ${t('horim_delta')}: <strong>${delta} h</strong></div>`;
  } else {
    hint.innerHTML = '';
  }
};

function getFormData() {
  const clientVal = document.getElementById('f-client').value;
  return {
    date: document.getElementById('f-date').value,
    start_time: document.getElementById('f-start').value || null,
    end_time: document.getElementById('f-end').value || null,
    discount_hours: document.getElementById('f-discount-h').value || null,
    duration_hours: document.getElementById('f-duration').value || null,
    client_id: (clientVal && clientVal !== '__new__') ? clientVal : null,
    description: document.getElementById('f-description').value || null,
    value: document.getElementById('f-value').value || null,
    hourmeter_start: document.getElementById('f-horim-start').value || null,
    hourmeter_end: document.getElementById('f-horim-end').value || null,
    price_per_hour: document.getElementById('f-price-per-hour').value || null,
    travel_fee: document.getElementById('f-travel-fee').value || null,
    discount: document.getElementById('f-discount').value || null,
    paid: document.getElementById('f-paid').value === '1' ? 1 : 0,
    tip: document.getElementById('f-tip').value || null,
  };
}

window.saveService = async function(id) {
  const body = getFormData();
  if (!body.date) { toast(t('toast_date_required'), 'error'); return; }

  // Handle new client creation inline
  if (document.getElementById('f-client').value === '__new__') {
    const newName = document.getElementById('f-client-new').value.trim();
    if (!newName) { toast(t('toast_client_name_required'), 'error'); return; }
    const result = await api.post('/api/clients', { name: newName });
    if (result.error) { toast(result.error, 'error'); return; }
    body.client_id = result.id;
    state.clients = await api.get('/api/clients');
  }

  try {
    let result;
    if (id) {
      result = await api.put(`/api/services/${id}`, body);
    } else {
      result = await api.post('/api/services', body);
    }
    if (result && result.error) throw new Error(result.error);
    toast(id ? t('toast_updated') : t('toast_registered'));
    closeModal();
    renderView(state.view);
  } catch (e) {
    toast(e.message || t('toast_save_error'), 'error');
  }
};

window.deleteService = async function(id) {
  if (!confirm(t('confirm_delete_service'))) return;
  await api.del(`/api/services/${id}`);
  toast(t('toast_deleted'));
  closeModal();
  renderView(state.view);
};

async function editService(id) {
  const s = await api.get(`/api/services/${id}`);
  openModal(t('form_edit_service'), serviceFormHtml(s));
  calcHourmeter();
  loadPictures(id);
}

window.loadPictures = async function(serviceId) {
  const grid = document.getElementById('pictures-grid');
  if (!grid) return;
  const attachments = await api.get(`/api/services/${serviceId}/attachments`);
  if (attachments.length === 0) {
    grid.innerHTML = `<span class="pictures-empty">${t('form_pictures_empty')}</span>`;
    return;
  }
  grid.innerHTML = attachments.map(a => `
    <div class="picture-thumb">
      <img src="/api/attachments/${a.id}" alt="${escapeHtml(a.original_name || '')}" loading="lazy" onclick="viewPicture(${a.id})">
      <button class="picture-thumb-del" onclick="deletePicture(${a.id}, ${serviceId})" title="Delete">✕</button>
    </div>
  `).join('');
};

window.uploadPictures = async function(input, serviceId) {
  const files = Array.from(input.files);
  if (!files.length) return;
  for (const file of files) {
    const r = await fetch(`/api/services/${serviceId}/attachments?name=${encodeURIComponent(file.name)}`, {
      method: 'POST',
      headers: { 'Content-Type': file.type || 'application/octet-stream' },
      body: file,
    });
    const result = await r.json();
    if (result.error) { toast(result.error, 'error'); input.value = ''; return; }
  }
  input.value = '';
  toast(t('toast_picture_uploaded'));
  loadPictures(serviceId);
};

window.deletePicture = async function(id, serviceId) {
  if (!confirm(t('confirm_delete_picture'))) return;
  await api.del(`/api/attachments/${id}`);
  toast(t('toast_picture_deleted'));
  loadPictures(serviceId);
};

window.viewPicture = function(id) {
  window.open(`/api/attachments/${id}`, '_blank');
};

// ── Invoice generator ─────────────────────────────────────
window.generateInvoice = async function(serviceId) {
  const issuerName = (localStorage.getItem('inv_name') || '').trim();
  if (!issuerName) { toast(t('invoice_no_issuer'), 'error'); return; }

  const s = await api.get(`/api/services/${serviceId}`);
  const cur = getCurrency();

  const issuerAddress = (localStorage.getItem('inv_address') || '').trim();
  const issuerNif    = (localStorage.getItem('inv_nif')     || '').trim();
  const issuerEmail  = (localStorage.getItem('inv_email')   || '').trim();
  const footerNote   = (localStorage.getItem('inv_note')    || '').trim();

  const ref   = `F ${new Date().getFullYear()}/${String(serviceId).padStart(4, '0')}`;
  const today = new Date().toLocaleDateString(state.lang === 'pt' ? 'pt-PT' : 'en-GB');

  const esc   = str => (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const escNl = str => esc(str).replace(/\n/g,'<br>');
  const fmt   = n   => (n != null && !isNaN(n)) ? parseFloat(n).toFixed(2) + '\u00a0' + cur : '—';

  const valueAmt    = s.value      != null ? parseFloat(s.value)      : null;
  const tipAmt      = s.tip        ?         parseFloat(s.tip)        : 0;
  const travelAmt   = s.travel_fee ?         parseFloat(s.travel_fee) : 0;
  const discountAmt = s.discount   ?         parseFloat(s.discount)   : 0;
  const grandTotal  = valueAmt != null ? valueAmt + tipAmt : null;
  const isPaid      = !!s.paid;

  const statusLabel = isPaid ? t('invoice_status_paid') : t('invoice_status_pending');
  const statusBg    = isPaid ? 'rgba(46,204,113,0.12)'  : 'rgba(231,76,60,0.10)';
  const statusColor = isPaid ? '#1a8a4a' : '#c0392b';

  const descMain = s.description ? `<div class="td-main">${esc(s.description)}</div>` : '';
  const descSub  = (s.start_time || s.hourmeter_delta)
    ? `<div class="td-sub">${[
        s.start_time && s.end_time ? s.start_time + '\u2013' + s.end_time : (s.start_time || ''),
        s.hourmeter_delta ? '\u2699 \u0394\u00a0' + s.hourmeter_delta + ' h' : ''
      ].filter(Boolean).join(' \u00b7 ')}</div>`
    : '';
  const descCell = descMain + descSub || '<span>—</span>';

  const showRate     = s.price_per_hour != null;
  const showTravel   = travelAmt > 0;
  const showDiscount = discountAmt > 0;

  const html = `<!DOCTYPE html>
<html lang="${state.lang}">
<head>
<meta charset="UTF-8">
<title>${t('invoice_title')} ${ref}</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Helvetica Neue',Arial,sans-serif;font-size:13px;color:#1a1e2e;background:#e8e8e8}
.topbar{background:#1a1e2e;color:#fff;padding:10px 24px;display:flex;justify-content:space-between;align-items:center;gap:12px;position:sticky;top:0;z-index:10}
.topbar-ref{font-size:12px;opacity:.6}
.print-btn{background:#e8a020;color:#000;border:none;border-radius:6px;font-size:13px;font-weight:700;padding:8px 20px;cursor:pointer;letter-spacing:.02em}
.page{max-width:800px;margin:24px auto 48px;background:#fff;padding:52px;box-shadow:0 4px 24px rgba(0,0,0,.12)}
.inv-header{display:flex;justify-content:space-between;align-items:flex-start;gap:24px;margin-bottom:40px;padding-bottom:24px;border-bottom:3px solid #1a1e2e}
.issuer-name{font-size:19px;font-weight:800;margin-bottom:6px}
.issuer-detail{font-size:12px;color:#555c7a;line-height:1.9}
.inv-right{text-align:right}
.inv-title{font-size:38px;font-weight:900;letter-spacing:.06em;line-height:1;margin-bottom:10px}
.inv-meta{font-size:12px;color:#555c7a;line-height:1.9}
.inv-meta strong{color:#1a1e2e}
.sec-label{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#9098b0;margin-bottom:8px}
.bill-to{margin-bottom:32px}
.bill-name{font-size:16px;font-weight:700;margin-bottom:4px}
.bill-detail{font-size:12px;color:#555c7a;line-height:1.9}
table{width:100%;border-collapse:collapse;margin-bottom:24px}
th{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#9098b0;padding:8px 10px;text-align:left;border-bottom:2px solid #d0d4de}
th.r,td.r{text-align:right}
td{padding:13px 10px;font-size:13px;border-bottom:1px solid #ebedf0;vertical-align:top}
.td-main{font-weight:600}
.td-sub{font-size:11px;color:#9098b0;margin-top:3px}
.totals{display:flex;justify-content:flex-end;margin-bottom:28px}
.totals-inner{width:250px}
.tot-row{display:flex;justify-content:space-between;padding:5px 0;font-size:13px;color:#555c7a;border-bottom:1px solid #ebedf0}
.tot-row.grand{font-size:16px;font-weight:800;color:#1a1e2e;padding-top:10px;border-top:2px solid #1a1e2e;border-bottom:none;margin-top:6px}
.status-badge{display:inline-block;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:5px 16px;border-radius:20px;background:${statusBg};color:${statusColor};border:1.5px solid ${statusColor};margin-bottom:32px}
.footer{border-top:1px solid #d0d4de;padding-top:14px;display:flex;justify-content:space-between;align-items:flex-end;font-size:11px;color:#9098b0;margin-top:40px}
@media print{
  body{background:#fff}
  .topbar{display:none}
  .page{margin:0;padding:36px;box-shadow:none;max-width:100%}
}
</style>
</head>
<body>
<div class="topbar">
  <span class="topbar-ref">${t('invoice_title')} &middot; ${ref} &middot; ${today}</span>
  <button class="print-btn" onclick="window.print()">${t('invoice_print')}</button>
</div>
<div class="page">
  <div class="inv-header">
    <div>
      <div class="issuer-name">${esc(issuerName)}</div>
      <div class="issuer-detail">
        ${issuerAddress ? escNl(issuerAddress) + '<br>' : ''}
        ${issuerNif    ? 'NIF: ' + esc(issuerNif) + '<br>' : ''}
        ${issuerEmail  ? esc(issuerEmail) : ''}
      </div>
    </div>
    <div class="inv-right">
      <div class="inv-title">${t('invoice_title')}</div>
      <div class="inv-meta">
        <strong>${t('invoice_ref')}:</strong> ${ref}<br>
        <strong>${t('invoice_date')}:</strong> ${today}
      </div>
    </div>
  </div>

  <div class="bill-to">
    <div class="sec-label">${t('invoice_issued_to')}</div>
    ${s.client_name
      ? `<div class="bill-name">${esc(s.client_name)}</div>
         <div class="bill-detail">
           ${s.client_address ? escNl(s.client_address) + '<br>' : ''}
           ${s.client_phone   ? esc(s.client_phone) : ''}
         </div>`
      : `<div class="bill-name">—</div>`
    }
  </div>

  <div class="sec-label" style="margin-bottom:8px">${t('invoice_services')}</div>
  <table>
    <thead><tr>
      <th>${t('invoice_col_date')}</th>
      <th>${t('invoice_col_desc')}</th>
      <th class="r">${t('invoice_col_hours')}</th>
      ${showRate     ? `<th class="r">${t('invoice_col_rate')}</th>`     : ''}
      ${showTravel   ? `<th class="r">${t('invoice_col_travel')}</th>`   : ''}
      ${showDiscount ? `<th class="r">${t('invoice_col_discount')}</th>` : ''}
      <th class="r">${t('invoice_col_total')}</th>
    </tr></thead>
    <tbody><tr>
      <td style="white-space:nowrap">${formatDate(s.date)}</td>
      <td>${descCell}</td>
      <td class="r">${s.duration_hours != null ? s.duration_hours + '\u00a0h' : '—'}</td>
      ${showRate     ? `<td class="r">${fmt(s.price_per_hour)}</td>` : ''}
      ${showTravel   ? `<td class="r">${fmt(travelAmt)}</td>`        : ''}
      ${showDiscount ? `<td class="r">-${fmt(discountAmt)}</td>`     : ''}
      <td class="r"><strong>${fmt(valueAmt)}</strong></td>
    </tr></tbody>
  </table>

  <div class="totals">
    <div class="totals-inner">
      ${valueAmt != null ? `<div class="tot-row"><span>${t('invoice_subtotal')}</span><span>${fmt(valueAmt)}</span></div>` : ''}
      ${tipAmt ? `<div class="tot-row"><span>${t('invoice_tip')}</span><span>+${fmt(tipAmt)}</span></div>` : ''}
      <div class="tot-row grand"><span>${t('invoice_total')}</span><span>${fmt(grandTotal)}</span></div>
    </div>
  </div>

  <div class="status-badge">${statusLabel}</div>

  <div class="footer">
    <div>${footerNote ? escNl(footerNote) : ''}</div>
    <div>${esc(issuerName)}</div>
  </div>
</div>
</body>
</html>`;

  const w = window.open('', '_blank');
  if (!w) { toast('Popup blocked — allow popups for this site', 'error'); return; }
  w.document.write(html);
  w.document.close();
};

function newService() {
  openModal(t('form_new_service'), serviceFormHtml());
}

// ── Clients ───────────────────────────────────────────────
async function renderClients() {
  const el = document.getElementById('view-clients');
  state.clients = await api.get('/api/clients');

  el.innerHTML = `
    <div class="section-header">
      <span class="section-title">${t('clients_title')}</span>
    </div>

    <div class="card" style="margin-bottom:16px">
      <div class="form-group">
        <label class="form-label">${t('client_new_label')} *</label>
        <input type="text" class="form-control" id="new-client-input" placeholder="${t('client_new_placeholder')}">
      </div>
      <div class="form-group">
        <label class="form-label">${t('client_phone')}</label>
        <input type="text" class="form-control" id="new-client-phone" placeholder="${t('client_phone_placeholder')}">
      </div>
      <div class="form-group">
        <label class="form-label">${t('client_address')}</label>
        <input type="text" class="form-control" id="new-client-address" placeholder="${t('client_address_placeholder')}">
      </div>
      <button class="btn btn-primary" onclick="addClient()" style="width:100%">${t('client_add')}</button>
    </div>

    <div id="clients-list">
      ${state.clients.length === 0
        ? `<div class="empty"><div class="empty-icon">👤</div><div class="empty-title">${t('no_clients')}</div></div>`
        : state.clients.map(c => `
          <div class="client-item">
            <div style="flex:1;min-width:0">
              <div class="client-name">${escapeHtml(c.name)}</div>
              ${c.phone ? `<div class="client-detail">📞 ${escapeHtml(c.phone)}</div>` : ''}
              ${c.address ? `<div class="client-detail">📍 ${escapeHtml(c.address)}</div>` : ''}
            </div>
            <div style="display:flex;gap:6px;flex-shrink:0">
              <button class="btn btn-secondary btn-sm" onclick="editClient(${c.id})">${t('client_edit')}</button>
              <button class="btn btn-danger btn-sm" onclick="deleteClient(${c.id}, '${escapeHtml(c.name)}')">${t('client_remove')}</button>
            </div>
          </div>
        `).join('')
      }
    </div>
  `;

  document.getElementById('new-client-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') addClient();
  });
}

window.addClient = async function() {
  const input = document.getElementById('new-client-input');
  const name = input.value.trim();
  if (!name) return;
  const phone = document.getElementById('new-client-phone').value.trim();
  const address = document.getElementById('new-client-address').value.trim();
  const result = await api.post('/api/clients', { name, phone, address });
  if (result.error) { toast(result.error, 'error'); return; }
  toast(`"${name}" ${t('toast_client_added')}`);
  input.value = '';
  document.getElementById('new-client-phone').value = '';
  document.getElementById('new-client-address').value = '';
  state.clients = await api.get('/api/clients');
  renderClients();
};

window.editClient = function(id) {
  const c = state.clients.find(x => x.id === id);
  if (!c) return;
  openModal(t('client_details_title'), `
    <div class="form-group">
      <label class="form-label">${t('client_new_label')} *</label>
      <input type="text" class="form-control" id="edit-client-name" value="${escapeHtml(c.name)}">
    </div>
    <div class="form-group">
      <label class="form-label">${t('client_phone')}</label>
      <input type="text" class="form-control" id="edit-client-phone" value="${escapeHtml(c.phone || '')}" placeholder="${t('client_phone_placeholder')}">
    </div>
    <div class="form-group">
      <label class="form-label">${t('client_address')}</label>
      <input type="text" class="form-control" id="edit-client-address" value="${escapeHtml(c.address || '')}" placeholder="${t('client_address_placeholder')}">
    </div>
    <div style="display:flex;gap:8px;margin-top:8px">
      <button class="btn btn-secondary" style="flex:1" onclick="closeModal()">${t('form_cancel')}</button>
      <button class="btn btn-primary" style="flex:1" onclick="saveClient(${id})">${t('client_save')}</button>
    </div>
  `);
};

window.saveClient = async function(id) {
  const name = document.getElementById('edit-client-name').value.trim();
  if (!name) { toast(t('toast_client_name_required'), 'error'); return; }
  const phone = document.getElementById('edit-client-phone').value.trim();
  const address = document.getElementById('edit-client-address').value.trim();
  const result = await api.put(`/api/clients/${id}`, { name, phone, address });
  if (result.error) { toast(result.error, 'error'); return; }
  toast(`"${name}" ${t('toast_client_updated')}`);
  closeModal();
  state.clients = await api.get('/api/clients');
  renderClients();
};

window.deleteClient = async function(id, name) {
  if (!confirm(`${t('confirm_remove_client')} "${name}"?\n${t('confirm_remove_client_suffix')}`)) return;
  await api.del(`/api/clients/${id}`);
  toast(`"${name}" ${t('toast_client_removed')}`);
  renderClients();
};

// ── Init ──────────────────────────────────────────────────
async function init() {
  // Migrate legacy localStorage keys (pre-v0.6)
  const lsKeyMigrations = {
    'default_preco_hora': 'default_price_per_hour',
    'default_deslocacao': 'default_travel_fee',
    'default_pago': 'default_paid',
  };
  Object.entries(lsKeyMigrations).forEach(([oldKey, newKey]) => {
    if (localStorage.getItem(oldKey) !== null && localStorage.getItem(newKey) === null) {
      localStorage.setItem(newKey, localStorage.getItem(oldKey));
      localStorage.removeItem(oldKey);
    }
  });

  // Apply saved theme before rendering
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Load clients into state
  state.clients = await api.get('/api/clients');

  // Nav — apply translations and attach click handlers
  const navKeyMap = { dashboard: 'nav_dashboard', list: 'nav_lista', clients: 'nav_clientes', settings: 'nav_settings' };
  document.querySelectorAll('.nav-btn').forEach(btn => {
    const key = navKeyMap[btn.dataset.view];
    if (key) btn.querySelector('span').textContent = t(key);
    btn.addEventListener('click', () => navigate(btn.dataset.view));
  });

  // FAB
  const fab = document.getElementById('fab');
  fab.title = t('form_new_service');
  fab.addEventListener('click', () => {
    openModal(t('form_new_service'), serviceFormHtml());
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

  const defaultPrecoHora = localStorage.getItem('default_price_per_hour') || '';
  const defaultDeslocacao = localStorage.getItem('default_travel_fee') || '';
  const defaultPago = localStorage.getItem('default_paid') || '0';
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
                 oninput="saveSetting('default_price_per_hour', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">${t('settings_default_travel')}</label>
          <input type="number" class="form-control" step="0.5" min="0" value="${escapeHtml(defaultDeslocacao)}"
                 oninput="saveSetting('default_travel_fee', this.value)">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('settings_default_payment')}</label>
          <select class="form-control" onchange="saveSetting('default_paid', this.value)">
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

    <!-- Invoice Details -->
    <div class="card" style="margin-bottom:12px">
      <div class="section-title" style="margin-bottom:12px">${t('settings_invoice')}</div>
      <div class="form-group">
        <label class="form-label">${t('invoice_issuer_name')}</label>
        <input type="text" class="form-control" placeholder="${t('invoice_issuer_name_placeholder')}"
               value="${escapeHtml(localStorage.getItem('inv_name') || '')}"
               oninput="saveSetting('inv_name', this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">${t('invoice_issuer_address')}</label>
        <textarea class="form-control" style="min-height:56px" placeholder="${t('invoice_issuer_address_placeholder')}"
                  oninput="saveSetting('inv_address', this.value)">${escapeHtml(localStorage.getItem('inv_address') || '')}</textarea>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('invoice_issuer_nif')}</label>
          <input type="text" class="form-control" placeholder="${t('invoice_issuer_nif_placeholder')}"
                 value="${escapeHtml(localStorage.getItem('inv_nif') || '')}"
                 oninput="saveSetting('inv_nif', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">${t('invoice_issuer_email')}</label>
          <input type="email" class="form-control" placeholder="${t('invoice_issuer_email_placeholder')}"
                 value="${escapeHtml(localStorage.getItem('inv_email') || '')}"
                 oninput="saveSetting('inv_email', this.value)">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${t('invoice_footer_note')}</label>
        <input type="text" class="form-control" placeholder="${t('invoice_footer_note_placeholder')}"
               value="${escapeHtml(localStorage.getItem('inv_note') || '')}"
               oninput="saveSetting('inv_note', this.value)">
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
  const navKeyMap = { dashboard: 'nav_dashboard', list: 'nav_lista', clients: 'nav_clientes', settings: 'nav_settings' };
  document.querySelectorAll('.nav-btn').forEach(btn => {
    const key = navKeyMap[btn.dataset.view];
    if (key) btn.querySelector('span').textContent = t(key);
  });
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
