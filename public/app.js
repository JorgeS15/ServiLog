// ── Translations ──────────────────────────────────────────
const TRANSLATIONS = {
  pt: {
    months: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    nav_dashboard: 'Resumo',
    nav_lista: 'Serviços',
    nav_clientes: 'Clientes',
    nav_settings: 'Definições',
    nav_agenda: 'Agenda',
    dashboard_title: 'Resumo',
    dashboard_monthly: 'Mensal',
    dashboard_alltime: 'Tudo',
    stat_services: 'Serviços',
    stat_hours: 'Horas Trab.',
    stat_received: 'Recebido',
    stat_avg_duration: 'Tempo Médio / Serviço',
    stat_total_discount: 'Descontos Totais',
    settings_extra_stats: 'Estatísticas adicionais',
    settings_extra_stats_sub: 'Mostra estatísticas extra no Resumo (tempo médio por serviço, etc.)',
    stat_pending: 'Pendente',
    stat_billed: 'Total Faturado',
    stat_horimetro: 'Horímetro',
    stat_tips: 'Gorjetas',
    stat_horimetro_sub: 'delta do período',
    stat_net: 'Líquido (s/ IVA)',
    stat_gross: 'Bruto (c/ IVA)',
    stat_operator: 'Operador',
    stat_machine: 'Máquina',
    by_client: 'Por Cliente',
    no_data: 'Sem dados',
    no_data_sub: 'Regista o primeiro serviço deste mês',
    no_services: 'Sem serviços',
    no_services_sub: 'Toca no botão + para registar',
    form_new_service: 'Novo Serviço',
    form_edit_service: 'Editar Serviço',
    form_date: 'Data *',
    form_client: 'Cliente',
    form_no_client: '— nenhum —',
    form_new_client: '✚ Novo cliente...',
    form_new_client_placeholder: 'Nome do novo cliente',
    form_start_time: 'Hora início',
    form_end_time: 'Hora fim',
    form_discount_hours: 'Horas a descontar',
    form_duration: 'Duração líquida (horas)',
    form_horimeter: 'Horímetro',
    form_horim_start: 'Leitura início (h)',
    form_horim_end: 'Leitura fim (h)',
    form_billing: 'Faturação',
    form_operator_rate: 'Operador (€/h)',
    form_machine_rate: 'Máquina (€/h)',
    form_travel: 'Deslocação (€)',
    form_discount_value: 'Desconto (€)',
    form_payment_status: 'Estado pagamento',
    form_pending: 'Pendente',
    form_paid: 'Pago',
    form_total: 'Valor total (€)',
    form_tip: 'Valor adicional / gorjeta (€)',
    form_tip_placeholder: 'ex: 5.00',
    form_description: 'Descrição / notas',
    form_desc_placeholder: 'Tipo de trabalho, localização, observações...',
    form_delete: '🗑 Eliminar',
    form_cancel: 'Cancelar',
    form_save: '💾 Guardar',
    form_register: '✚ Registar',
    form_auto: 'calculado auto.',
    form_auto_or_manual: 'calculado auto. ou manual',
    horim_delta: 'Delta horímetro',
    clients_title: 'Clientes',
    client_new_label: 'Novo cliente',
    client_new_placeholder: 'Nome do cliente',
    client_add: '✚ Adicionar',
    client_remove: 'Remover',
    client_edit: 'Editar',
    no_clients: 'Sem clientes',
    client_phone: 'Telefone',
    client_phone_placeholder: 'Número de telefone',
    client_address: 'Morada',
    client_address_placeholder: 'Morada do cliente',
    client_details_title: 'Editar cliente',
    client_save: 'Guardar',
    toast_client_updated: 'actualizado',
    toast_updated: 'Serviço actualizado ✓',
    toast_registered: 'Serviço registado ✓',
    toast_save_error: 'Erro ao guardar',
    toast_deleted: 'Eliminado',
    toast_date_required: 'Data obrigatória',
    toast_client_name_required: 'Escreve o nome do cliente',
    toast_client_added: 'adicionado',
    toast_client_removed: 'removido',
    toast_client_exists: 'Cliente já existe',
    toast_restore_ok: 'Backup restaurado. A recarregar...',
    toast_restore_error: 'Ficheiro inválido',
    confirm_delete_service: 'Eliminar este serviço?',
    confirm_restore: 'Substituir todos os dados pelo backup? Esta acção não pode ser desfeita.',
    confirm_remove_client: 'Remover o cliente',
    confirm_remove_client_suffix: 'Os serviços associados ficam sem cliente.',
    tag_paid: 'Pago',
    tag_pending: 'Pendente',
    settings_title: 'Definições',
    settings_backup: 'Backup & Restauro',
    settings_backup_download: '⬇ Descarregar Backup',
    settings_backup_restore: '⬆ Carregar Backup',
    settings_language: 'Idioma',
    settings_defaults: 'Valores por defeito',
    settings_default_operator_rate: 'Operador por defeito (€/h)',
    settings_default_machine_rate: 'Máquina por defeito (€/h)',
    settings_default_travel: 'Deslocação por defeito (€)',
    settings_default_payment: 'Estado pagamento por defeito',
    settings_currency: 'Símbolo de moeda',
    settings_theme: 'Tema',
    settings_theme_dark: 'Escuro',
    settings_theme_light: 'Claro',
    settings_data_stats: 'Estatísticas',
    settings_total_services: 'Total de serviços',
    settings_total_quotes: 'Total de orçamentos',
    settings_total_clients: 'Total de clientes',
    settings_db_size: 'Tamanho da base de dados',
    settings_date_range: 'Período de dados',
    settings_version: 'Versão',
    tip_badge: 'gorjeta',
    serv_abbr: 'serv.',
    discount_abbr: 'desc.',
    form_pictures: 'Anexos',
    form_pictures_add: 'Adicionar ficheiros',
    form_pictures_loading: 'A carregar...',
    form_pictures_empty: 'Sem anexos',
    toast_picture_uploaded: 'Ficheiro adicionado ✓',
    toast_picture_deleted: 'Ficheiro eliminado',
    confirm_delete_picture: 'Eliminar este ficheiro?',
    settings_total_attachments: 'Total de anexos',
    settings_uploads_size: 'Tamanho dos ficheiros',
    settings_total_size: 'Tamanho total',
    settings_invoice: 'Dados para Faturas',
    invoice_issuer_name: 'Nome / Empresa',
    invoice_issuer_name_placeholder: 'ex: João Silva - Serviços Agrícolas',
    invoice_issuer_address: 'Morada',
    invoice_issuer_address_placeholder: 'ex: Rua Principal 10, 3000-000 Coimbra',
    invoice_issuer_nif: 'NIF',
    invoice_issuer_nif_placeholder: 'ex: 123456789',
    invoice_issuer_email: 'Email',
    invoice_issuer_email_placeholder: 'ex: joao@email.com',
    invoice_issuer_phone: 'Telemóvel',
    invoice_issuer_phone_placeholder: 'ex: 912 345 678',
    invoice_footer_note: 'Nota de rodapé',
    invoice_footer_note_placeholder: 'ex: Pagamento a 30 dias',
    invoice_btn: '📄 Fatura',
    invoice_title: 'FATURA',
    invoice_ref: 'Ref.',
    invoice_date: 'Data',
    invoice_issued_to: 'Faturado a',
    invoice_services: 'Serviços',
    invoice_col_date: 'Data',
    invoice_col_desc: 'Descrição',
    invoice_col_hours: 'Horas',
    invoice_col_rate: 'Preço/h',
    invoice_col_travel: 'Deslocação',
    invoice_col_discount: 'Desconto',
    invoice_col_total: 'Total',
    invoice_subtotal: 'Subtotal',
    invoice_total: 'Total',
    invoice_tip: 'Valor adicional',
    invoice_print: 'Imprimir / Guardar PDF',
    invoice_no_issuer: 'Configure os dados da fatura nas Definições antes de gerar uma fatura.',
    form_vat: 'IVA',
    form_vat_none: 'Sem IVA',
    form_vat_include: 'Com IVA',
    form_vat_rate: 'Taxa IVA (%)',
    form_vat_amount: 'Valor IVA',
    form_vat_gross: 'Total c/ IVA',
    form_status: 'Estado',
    form_status_scheduled: 'Agendado',
    form_status_completed: 'Concluído',
    tag_scheduled: 'Agendado',
    agenda_title: 'Agenda',
    agenda_upcoming: 'Próximos',
    agenda_new_appt: '+ Agendar',
    agenda_no_upcoming: 'Sem agendamentos',
    agenda_no_upcoming_sub: 'Cria um agendamento acima',
    agenda_day_services: 'Serviços do dia',
    agenda_no_day: 'Sem serviços neste dia',
    months_short: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdays_short: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    map_pick: '📍 Selecionar no mapa',
    map_search_placeholder: 'Pesquisar morada...',
    map_drag_hint: 'Clique no mapa ou arraste o pin para selecionar',
    map_confirm: 'Confirmar morada',
    map_my_location: 'A minha localização',
    map_no_results: 'Sem resultados',
    map_locating: 'A localizar...',
    map_lib_error: 'Erro: a biblioteca do mapa não carregou (verifica a ligação / bloqueadores)',
    map_search_error: 'Falha na pesquisa de moradas',
    map_tiles_error: 'Mapa carregado mas os tiles foram bloqueados',
    settings_travel_calc: 'Cálculo automático de deslocação',
    settings_base_address: 'Morada base (ponto de partida)',
    settings_base_address_placeholder: 'Seleciona no mapa ou escreve a morada',
    settings_base_set: 'Morada base definida ✓',
    settings_price_per_km: 'Preço por km (€)',
    settings_fee_step: 'Arredondamento (€)',
    settings_min_fee: 'Mínimo (€)',
    form_calc_travel: '🚗 Calcular deslocação',
    toast_no_base_address: 'Define a morada base nas Definições',
    toast_no_client_address: 'O cliente não tem morada definida',
    toast_travel_calc_error: 'Erro ao calcular distância',
    form_edit_client: '✎ Editar cliente',
    settings_session: 'Sessão',
    settings_logout: 'Terminar sessão',
    settings_diagnostics: 'Diagnóstico',
    settings_diag_sub: 'Use isto se o mapa ou a seleção de moradas não funcionar',
    settings_diag_test: 'Testar serviços do mapa',
    settings_diag_copy: 'Copiar logs',
    settings_diag_copied: 'Logs copiados',
    settings_diag_testing: 'A testar...',
    settings_diag_ok: 'OK',
    settings_diag_fail: 'FALHOU',
    settings_diag_send_test: 'Enviar email de teste',
    settings_diag_sending: 'A enviar...',
    settings_diag_smtp_ok: 'Email enviado para',
    settings_diag_smtp_fail: 'Falha no envio do email',
    settings_diag_smtp_not_configured: 'SMTP não configurado no servidor',
    settings_invoice_number: 'Número da próxima fatura',
    nav_quote: 'Orçamento',
    quote_title: 'ORÇAMENTO',
    quote_new: 'Novo Orçamento',
    quote_generate: '📄 Gerar Orçamento',
    quote_valid_until: 'Válido até',
    quote_est_hours: 'Horas estimadas',
    quote_notes: 'Notas / Condições',
    quote_ref: 'Ref.',
    quote_date: 'Data',
    quote_issued_to: 'Para',
    quote_services: 'Descrição do trabalho',
    quote_col_desc: 'Descrição',
    quote_col_hours: 'Horas',
    quote_col_rate: 'Preço/h',
    quote_col_travel: 'Deslocação',
    quote_col_discount: 'Desconto',
    quote_col_total: 'Total',
    quote_subtotal: 'Subtotal',
    quote_total: 'Total',
    quote_vat: 'IVA',
    quote_print: 'Imprimir / Guardar PDF',
    quote_no_issuer: 'Configure os dados da fatura nas Definições antes de gerar um orçamento.',
    settings_quote: 'Dados para Orçamentos',
    settings_quote_number: 'Número do próximo orçamento',
    settings_lubelogger: 'Integração LubeLogger',
    settings_lubelogger_sub: 'Ligar à sua instância LubeLogger para mostrar o custo total de manutenção da máquina.',
    settings_lubelogger_url: 'Endereço do servidor',
    settings_lubelogger_url_placeholder: 'http://192.168.1.50:5000',
    settings_lubelogger_key: 'Chave da API',
    settings_lubelogger_vehicle_id: 'ID do veículo',
    dashboard_lubelogger: 'Custo Total da Máquina (LubeLogger)',
    dashboard_lubelogger_sub: 'Total acumulado, não filtrado por mês',
    dashboard_lubelogger_error: 'Não foi possível contactar o servidor LubeLogger',
    dashboard_lubelogger_error_vehicle: 'Verifique o ID do veículo nas Definições',
    nav_orcamentos: 'Orçamentos',
    quotes_title: 'Orçamentos',
    quote_saved: 'Orçamento guardado',
    quote_updated: 'Orçamento atualizado',
    quote_edit: 'Editar',
    quote_delete: 'Eliminar',
    confirm_remove_quote: 'Eliminar o orçamento',
    quote_view_pdf: 'PDF',
    quote_duplicate: 'Duplicar',
    quote_to_service: 'Converter em serviço',
    quote_status: 'Estado',
    quote_status_pending: 'Pendente',
    quote_status_accepted: 'Aceite',
    quote_status_rejected: 'Recusado',
    quote_empty: 'Ainda não há orçamentos. Cria um com o botão +.',
    quote_save: '📄 Gerar e guardar',
    toast_quote_removed: 'orçamento eliminado',
    toast_quote_converted: 'Orçamento convertido — confirma e guarda o serviço',
  },
  en: {
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    nav_dashboard: 'Summary',
    nav_lista: 'Services',
    nav_clientes: 'Clients',
    nav_settings: 'Settings',
    nav_agenda: 'Agenda',
    dashboard_title: 'Summary',
    dashboard_monthly: 'Monthly',
    dashboard_alltime: 'All Time',
    stat_services: 'Services',
    stat_hours: 'Work Hours',
    stat_received: 'Received',
    stat_avg_duration: 'Mean Time / Service',
    stat_total_discount: 'Total Discounts',
    settings_extra_stats: 'Additional statistics',
    settings_extra_stats_sub: 'Show extra stats on the Summary (mean time per service, etc.)',
    stat_pending: 'Pending',
    stat_billed: 'Total Billed',
    stat_horimetro: 'Hourmeter',
    stat_tips: 'Tips',
    stat_horimetro_sub: 'period delta',
    stat_net: 'Net (excl. VAT)',
    stat_gross: 'Gross (incl. VAT)',
    stat_operator: 'Operator',
    stat_machine: 'Machine',
    by_client: 'By Client',
    no_data: 'No data',
    no_data_sub: 'Register the first service of this month',
    no_services: 'No services',
    no_services_sub: 'Tap the + button to register',
    form_new_service: 'New Service',
    form_edit_service: 'Edit Service',
    form_date: 'Date *',
    form_client: 'Client',
    form_no_client: '— none —',
    form_new_client: '✚ New client...',
    form_new_client_placeholder: 'New client name',
    form_start_time: 'Start time',
    form_end_time: 'End time',
    form_discount_hours: 'Discount hours',
    form_duration: 'Net duration (hours)',
    form_horimeter: 'Hourmeter',
    form_horim_start: 'Start reading (h)',
    form_horim_end: 'End reading (h)',
    form_billing: 'Billing',
    form_operator_rate: 'Operator (€/h)',
    form_machine_rate: 'Machine (€/h)',
    form_travel: 'Travel fee (€)',
    form_discount_value: 'Discount (€)',
    form_payment_status: 'Payment status',
    form_pending: 'Pending',
    form_paid: 'Paid',
    form_total: 'Total value (€)',
    form_tip: 'Additional value / tip (€)',
    form_tip_placeholder: 'e.g. 5.00',
    form_description: 'Description / notes',
    form_desc_placeholder: 'Work type, location, observations...',
    form_delete: '🗑 Delete',
    form_cancel: 'Cancel',
    form_save: '💾 Save',
    form_register: '✚ Register',
    form_auto: 'auto-calculated',
    form_auto_or_manual: 'auto-calculated or manual',
    horim_delta: 'Hourmeter delta',
    clients_title: 'Clients',
    client_new_label: 'New client',
    client_new_placeholder: 'Client name',
    client_add: '✚ Add',
    client_remove: 'Remove',
    client_edit: 'Edit',
    no_clients: 'No clients',
    client_phone: 'Phone',
    client_phone_placeholder: 'Phone number',
    client_address: 'Address',
    client_address_placeholder: 'Client address',
    client_details_title: 'Edit client',
    client_save: 'Save',
    toast_client_updated: 'updated',
    toast_updated: 'Service updated ✓',
    toast_registered: 'Service registered ✓',
    toast_save_error: 'Save error',
    toast_deleted: 'Deleted',
    toast_date_required: 'Date is required',
    toast_client_name_required: 'Enter the client name',
    toast_client_added: 'added',
    toast_client_removed: 'removed',
    toast_client_exists: 'Client already exists',
    toast_restore_ok: 'Backup restored. Reloading...',
    toast_restore_error: 'Invalid file',
    confirm_delete_service: 'Delete this service?',
    confirm_restore: 'Replace all data with this backup? This cannot be undone.',
    confirm_remove_client: 'Remove client',
    confirm_remove_client_suffix: 'Associated services will have no client.',
    tag_paid: 'Paid',
    tag_pending: 'Pending',
    settings_title: 'Settings',
    settings_backup: 'Backup & Restore',
    settings_backup_download: '⬇ Download Backup',
    settings_backup_restore: '⬆ Load Backup',
    settings_language: 'Language',
    settings_defaults: 'Default values',
    settings_default_operator_rate: 'Default operator rate (€/h)',
    settings_default_machine_rate: 'Default machine rate (€/h)',
    settings_default_travel: 'Default travel fee (€)',
    settings_default_payment: 'Default payment status',
    settings_currency: 'Currency symbol',
    settings_theme: 'Theme',
    settings_theme_dark: 'Dark',
    settings_theme_light: 'Light',
    settings_data_stats: 'Statistics',
    settings_total_services: 'Total services',
    settings_total_quotes: 'Total quotes',
    settings_total_clients: 'Total clients',
    settings_db_size: 'Database size',
    settings_date_range: 'Data range',
    settings_version: 'Version',
    tip_badge: 'tip',
    serv_abbr: 'svc.',
    discount_abbr: 'disc.',
    form_pictures: 'Attachments',
    form_pictures_add: 'Add files',
    form_pictures_loading: 'Loading...',
    form_pictures_empty: 'No attachments',
    toast_picture_uploaded: 'File added ✓',
    toast_picture_deleted: 'File deleted',
    confirm_delete_picture: 'Delete this file?',
    settings_total_attachments: 'Total attachments',
    settings_uploads_size: 'Files size',
    settings_total_size: 'Total size',
    settings_invoice: 'Invoice Details',
    invoice_issuer_name: 'Name / Business',
    invoice_issuer_name_placeholder: 'e.g. John Smith - Farm Services',
    invoice_issuer_address: 'Address',
    invoice_issuer_address_placeholder: 'e.g. 10 Main St, Springfield',
    invoice_issuer_nif: 'Tax/VAT No.',
    invoice_issuer_nif_placeholder: 'e.g. 123456789',
    invoice_issuer_email: 'Email',
    invoice_issuer_email_placeholder: 'e.g. john@email.com',
    invoice_issuer_phone: 'Phone',
    invoice_issuer_phone_placeholder: 'e.g. +351 912 345 678',
    invoice_footer_note: 'Footer note',
    invoice_footer_note_placeholder: 'e.g. Payment due in 30 days',
    invoice_btn: '📄 Invoice',
    invoice_title: 'INVOICE',
    invoice_ref: 'Ref.',
    invoice_date: 'Date',
    invoice_issued_to: 'Bill to',
    invoice_services: 'Services',
    invoice_col_date: 'Date',
    invoice_col_desc: 'Description',
    invoice_col_hours: 'Hours',
    invoice_col_rate: 'Rate/h',
    invoice_col_travel: 'Travel',
    invoice_col_discount: 'Discount',
    invoice_col_total: 'Total',
    invoice_subtotal: 'Subtotal',
    invoice_total: 'Total',
    invoice_tip: 'Additional',
    invoice_print: 'Print / Save as PDF',
    invoice_no_issuer: 'Please configure your invoice details in Settings before generating an invoice.',
    form_vat: 'VAT',
    form_vat_none: 'No VAT',
    form_vat_include: 'Include VAT',
    form_vat_rate: 'VAT rate (%)',
    form_vat_amount: 'VAT amount',
    form_vat_gross: 'Gross total (w/ VAT)',
    form_status: 'Status',
    form_status_scheduled: 'Scheduled',
    form_status_completed: 'Completed',
    tag_scheduled: 'Scheduled',
    agenda_title: 'Agenda',
    agenda_upcoming: 'Upcoming',
    agenda_new_appt: '+ Schedule',
    agenda_no_upcoming: 'No appointments',
    agenda_no_upcoming_sub: 'Create one using the button above',
    agenda_day_services: 'Services on this day',
    agenda_no_day: 'No services on this day',
    months_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays_short: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    map_pick: '📍 Pick on map',
    map_search_placeholder: 'Search address...',
    map_drag_hint: 'Click the map or drag the pin to select',
    map_confirm: 'Confirm address',
    map_my_location: 'My location',
    map_no_results: 'No results',
    map_locating: 'Locating...',
    map_lib_error: 'Error: the map library failed to load (check connection / blockers)',
    map_search_error: 'Address search failed',
    map_tiles_error: 'Map loaded but tiles were blocked',
    settings_travel_calc: 'Auto travel fee',
    settings_base_address: 'Base address (departure point)',
    settings_base_address_placeholder: 'Pick on map or type address',
    settings_base_set: 'Base address set ✓',
    settings_price_per_km: 'Price per km (€)',
    settings_fee_step: 'Rounding step (€)',
    settings_min_fee: 'Minimum fee (€)',
    form_calc_travel: '🚗 Calculate travel',
    toast_no_base_address: 'Set your base address in Settings first',
    toast_no_client_address: 'This client has no address set',
    toast_travel_calc_error: 'Could not calculate distance',
    form_edit_client: '✎ Edit client',
    settings_session: 'Session',
    settings_logout: 'Sign out',
    settings_diagnostics: 'Diagnostics',
    settings_diag_sub: 'Use this if the map or address selection is not working',
    settings_diag_test: 'Test map services',
    settings_diag_copy: 'Copy logs',
    settings_diag_copied: 'Logs copied',
    settings_diag_testing: 'Testing...',
    settings_diag_ok: 'OK',
    settings_diag_fail: 'FAILED',
    settings_diag_send_test: 'Send test email',
    settings_diag_sending: 'Sending...',
    settings_diag_smtp_ok: 'Email sent to',
    settings_diag_smtp_fail: 'Failed to send email',
    settings_diag_smtp_not_configured: 'SMTP not configured on the server',
    settings_invoice_number: 'Next invoice number',
    nav_quote: 'Quote',
    quote_title: 'QUOTATION',
    quote_new: 'New Quote',
    quote_generate: '📄 Generate Quote',
    quote_valid_until: 'Valid until',
    quote_est_hours: 'Estimated hours',
    quote_notes: 'Notes / Terms',
    quote_ref: 'Ref.',
    quote_date: 'Date',
    quote_issued_to: 'To',
    quote_services: 'Job description',
    quote_col_desc: 'Description',
    quote_col_hours: 'Hours',
    quote_col_rate: 'Rate/h',
    quote_col_travel: 'Travel',
    quote_col_discount: 'Discount',
    quote_col_total: 'Total',
    quote_subtotal: 'Subtotal',
    quote_total: 'Total',
    quote_vat: 'VAT',
    quote_print: 'Print / Save PDF',
    quote_no_issuer: 'Configure invoice details in Settings before generating a quote.',
    settings_quote: 'Quote Settings',
    settings_quote_number: 'Next quote number',
    settings_lubelogger: 'LubeLogger Integration',
    settings_lubelogger_sub:
      'Connect to your self-hosted LubeLogger instance to show the lifetime maintenance cost of your machine.',
    settings_lubelogger_url: 'Server address',
    settings_lubelogger_url_placeholder: 'http://192.168.1.50:5000',
    settings_lubelogger_key: 'API key',
    settings_lubelogger_vehicle_id: 'Vehicle ID',
    dashboard_lubelogger: 'Machine Total Cost (LubeLogger)',
    dashboard_lubelogger_sub: 'All-time total, not filtered by month',
    dashboard_lubelogger_error: 'Could not reach LubeLogger server',
    dashboard_lubelogger_error_vehicle: 'Check the Vehicle ID in Settings',
    nav_orcamentos: 'Quotes',
    quotes_title: 'Quotes',
    quote_saved: 'Quote saved',
    quote_updated: 'Quote updated',
    quote_edit: 'Edit',
    quote_delete: 'Delete',
    confirm_remove_quote: 'Delete the quote',
    quote_view_pdf: 'PDF',
    quote_duplicate: 'Duplicate',
    quote_to_service: 'Convert to service',
    quote_status: 'Status',
    quote_status_pending: 'Pending',
    quote_status_accepted: 'Accepted',
    quote_status_rejected: 'Rejected',
    quote_empty: 'No quotes yet. Create one with the + button.',
    quote_save: '📄 Generate & save',
    toast_quote_removed: 'quote deleted',
    toast_quote_converted: 'Quote converted — confirm and save the service',
  },
};

// ── i18n helpers ──────────────────────────────────────────
function t(key) {
  return (TRANSLATIONS[state.lang] || TRANSLATIONS['pt'])[key] || key;
}
function getCurrency() {
  return settings['currency'] || '€';
}

// ── Settings (synced to DB) ───────────────────────────────
const settings = {};

// ── LubeLogger cost (cached; all-time, not month-filtered) ─
const lubeloggerState = { data: null, fetchedAt: 0, inFlight: null };
async function loadLubeloggerCost(force = false) {
  const FIVE_MIN = 5 * 60 * 1000;
  if (!force && lubeloggerState.data && Date.now() - lubeloggerState.fetchedAt < FIVE_MIN) {
    return lubeloggerState.data;
  }
  if (lubeloggerState.inFlight) return lubeloggerState.inFlight;
  lubeloggerState.inFlight = api
    .get('/api/lubelogger/cost')
    .then(data => {
      lubeloggerState.data = data;
      lubeloggerState.fetchedAt = Date.now();
      return data;
    })
    .catch(err => {
      lubeloggerState.data = { configured: true, error: err?.message || true };
      lubeloggerState.fetchedAt = Date.now();
      return lubeloggerState.data;
    })
    .finally(() => {
      lubeloggerState.inFlight = null;
    });
  return lubeloggerState.inFlight;
}

// ── Offline write queue ───────────────────────────────────
const offlineQueue = [];
let isReplaying = false;

// ── State ────────────────────────────────────────────────
const state = {
  view: 'dashboard',
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
  clients: [],
  editingId: null,
  lang: localStorage.getItem('lang') || 'pt',
  globalView: false,
  calendarSelectedDay: null,
  calendarServices: [],
};

// ── API ───────────────────────────────────────────────────
const OFFLINE_WRITE_PATHS = ['/api/services', '/api/clients', '/api/quotes'];
function isOfflineWritePath(path) {
  return OFFLINE_WRITE_PATHS.some(p => path === p || path.startsWith(p + '/'));
}

const api = {
  async _handle(r) {
    if (r.status === 401) {
      window.location.href = '/login';
      throw new Error('Session expired');
    }
    if (!r.ok) {
      let msg = `HTTP ${r.status}`;
      try {
        const e = await r.json();
        if (e.error) msg = e.error;
      } catch (_) {}
      throw new Error(msg);
    }
    return r.json();
  },
  get(path) {
    return fetch(path).then(r => api._handle(r));
  },
  async post(path, body) {
    try {
      return await fetch(path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }).then(r => api._handle(r));
    } catch (e) {
      if (e instanceof TypeError && isOfflineWritePath(path)) {
        offlineQueue.push({ method: 'POST', path, body });
        toast('Saved offline — will sync when connected', 'warn');
        return {};
      }
      throw e;
    }
  },
  async put(path, body) {
    try {
      return await fetch(path, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }).then(r => api._handle(r));
    } catch (e) {
      if (e instanceof TypeError && isOfflineWritePath(path)) {
        offlineQueue.push({ method: 'PUT', path, body });
        toast('Saved offline — will sync when connected', 'warn');
        return {};
      }
      throw e;
    }
  },
  async del(path) {
    try {
      return await fetch(path, { method: 'DELETE' }).then(r => api._handle(r));
    } catch (e) {
      if (e instanceof TypeError && isOfflineWritePath(path)) {
        offlineQueue.push({ method: 'DELETE', path, body: null });
        toast('Saved offline — will sync when connected', 'warn');
        return {};
      }
      throw e;
    }
  },
  patch(path, body) {
    return fetch(path, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).then(r => api._handle(r));
  },
};

// ── Toast ─────────────────────────────────────────────────
function toast(msg, type = 'success') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = `show ${type}`;
  setTimeout(() => (el.className = ''), 2500);
}

// ── Diagnostics ───────────────────────────────────────────
// Keeps a rolling in-memory log so failures (which used to vanish into
// silent catch blocks) can be inspected from the console via
// `servilogDiag.dump()` even on mobile where devtools is awkward.
const diag = {
  buffer: [],
  _push(level, args) {
    const stamp = new Date().toISOString();
    const text = args
      .map(a => {
        if (a instanceof Error) return a.stack || a.message;
        return typeof a === 'object'
          ? (() => {
              try {
                return JSON.stringify(a);
              } catch {
                return String(a);
              }
            })()
          : String(a);
      })
      .join(' ');
    this.buffer.push(`${stamp} [${level}] ${text}`);
    if (this.buffer.length > 300) this.buffer.shift();
  },
  log(...a) {
    this._push('info', a);
    console.log('[ServiLog]', ...a);
  },
  warn(...a) {
    this._push('warn', a);
    console.warn('[ServiLog]', ...a);
  },
  error(...a) {
    this._push('error', a);
    console.error('[ServiLog]', ...a);
  },
  dump() {
    return this.buffer.join('\n');
  },
};
window.servilogDiag = diag;

// Surface otherwise-invisible runtime errors.
window.addEventListener('error', e => diag.error('uncaught', e.message, `${e.filename}:${e.lineno}:${e.colno}`));
window.addEventListener('unhandledrejection', e =>
  diag.error('unhandledrejection', (e.reason && (e.reason.stack || e.reason.message)) || e.reason)
);

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
  else if (view === 'quotes') await renderQuotes();
  else if (view === 'settings') await renderSettings();
  else if (view === 'agenda') await renderAgenda();
}

// ── Dashboard ─────────────────────────────────────────────
async function renderDashboard() {
  const el = document.getElementById('view-dashboard');
  const url = state.globalView ? '/api/summary' : `/api/summary?month=${state.month}&year=${state.year}`;
  const [data, lube] = await Promise.all([api.get(url), loadLubeloggerCost()]);
  const { stats, byClient } = data;

  const s = stats || {};
  const cur = getCurrency();
  const monthPicker = state.globalView
    ? ''
    : `
    <div class="month-picker">
      <button id="month-prev">‹</button>
      <span class="month-label">${t('months')[state.month - 1]} ${state.year}</span>
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

    ${
      settings['extra_stats'] === '1'
        ? `
    <div class="card-row" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
      <div class="stat-block">
        <div class="stat-label">${t('stat_avg_duration')}</div>
        <div class="stat-value">${s.avg_duration != null ? s.avg_duration + ' h' : '—'}</div>
      </div>
      <div class="stat-block">
        <div class="stat-label">${t('stat_total_discount')}</div>
        <div class="stat-value">${s.total_discount ? s.total_discount.toFixed(2) + ' ' + cur : '—'}</div>
      </div>
    </div>`
        : ''
    }

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
        <div class="stat-label">${t('stat_net')}</div>
        <div class="stat-value">${s.total_net ? s.total_net.toFixed(2) + ' ' + cur : '—'}</div>
      </div>
      <div class="stat-block">
        <div class="stat-label">${t('stat_gross')}</div>
        <div class="stat-value accent">${s.total_gross ? s.total_gross.toFixed(2) + ' ' + cur : '—'}</div>
      </div>
    </div>

    <div class="card-row" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
      <div class="stat-block">
        <div class="stat-label">${t('stat_horimetro')}</div>
        <div class="stat-value">${s.total_hourmeter != null ? s.total_hourmeter + ' h' : '—'}</div>
        <div class="stat-sub">${t('stat_horimetro_sub')}</div>
      </div>
      ${
        s.total_tips > 0
          ? `
      <div class="stat-block">
        <div class="stat-label">${t('stat_tips')}</div>
        <div class="stat-value accent">${s.total_tips.toFixed(2)} ${cur}</div>
      </div>`
          : '<div class="stat-block"></div>'
      }
    </div>

    ${
      s.total_operator > 0 || s.total_machine > 0
        ? `
    <div class="card-row" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
      <div class="stat-block">
        <div class="stat-label">${t('stat_operator')}</div>
        <div class="stat-value">${s.total_operator ? s.total_operator.toFixed(2) + ' ' + cur : '—'}</div>
      </div>
      <div class="stat-block">
        <div class="stat-label">${t('stat_machine')}</div>
        <div class="stat-value">${s.total_machine ? s.total_machine.toFixed(2) + ' ' + cur : '—'}</div>
      </div>
    </div>`
        : ''
    }

    ${
      lube && lube.configured !== false
        ? `
    <div class="card" style="margin-bottom:12px">
      <div class="section-title" style="margin-bottom:6px">${t('dashboard_lubelogger')}</div>
      <div style="font-size:11px;color:var(--text3);margin-bottom:8px">${t('dashboard_lubelogger_sub')}</div>
      ${
        lube.error
          ? `
        <div style="font-size:12px;color:var(--text3)">${lube.error === 'vehicle_not_found' ? t('dashboard_lubelogger_error_vehicle') : t('dashboard_lubelogger_error')}</div>
      `
          : `
        <div class="stat-value accent" style="font-size:20px">${lube.total.toFixed(2)} ${cur}</div>
        ${
          lube.vehicle
            ? `
          <div style="font-size:11px;color:var(--text3);margin-top:4px">
            ${[lube.vehicle.year, lube.vehicle.make, lube.vehicle.model].filter(Boolean).map(escapeHtml).join(' ')}
            ${lube.vehicle.licensePlate ? ' · ' + escapeHtml(lube.vehicle.licensePlate) : ''}
          </div>`
            : ''
        }
      `
      }
    </div>`
        : ''
    }

    ${
      byClient.length
        ? `
    <div class="card">
      <div class="section-title" style="margin-bottom:12px">${t('by_client')}</div>
      ${byClient
        .map(
          c => `
        <div class="client-row">
          <div class="client-row-name">${escapeHtml(c.name || '—')}</div>
          <div class="client-row-stats">
            <div class="client-row-stat"><strong>${c.services}</strong> ${t('serv_abbr')}</div>
            <div class="client-row-stat"><strong>${c.hours || '—'}</strong> h</div>
            <div class="client-row-stat"><strong>${c.value ? c.value.toFixed(2) + ' ' + cur : '—'}</strong>${c.net != null && c.net !== c.value ? `<div style="font-size:10px;color:var(--text3)">${t('stat_net')}: ${c.net.toFixed(2)} ${cur}</div>` : ''}</div>
            ${c.tips > 0 ? `<div class="client-row-stat" style="color:var(--accent)"><strong>+${c.tips.toFixed(2)} ${cur}</strong></div>` : ''}
          </div>
        </div>
      `
        )
        .join('')}
    </div>
    `
        : `<div class="empty"><div class="empty-icon">📊</div><div class="empty-title">${t('no_data')}</div><div class="empty-sub">${t('no_data_sub')}</div></div>`
    }
  `;

  if (!state.globalView) {
    document.getElementById('month-prev').onclick = () => {
      state.month--;
      if (state.month < 1) {
        state.month = 12;
        state.year--;
      }
      renderDashboard();
    };
    document.getElementById('month-next').onclick = () => {
      state.month++;
      if (state.month > 12) {
        state.month = 1;
        state.year++;
      }
      renderDashboard();
    };
  }
}

window.toggleGlobalView = function () {
  state.globalView = !state.globalView;
  renderView(state.view);
};

// ── Service list ──────────────────────────────────────────
async function renderList() {
  const el = document.getElementById('view-list');
  const url = state.globalView ? '/api/services' : `/api/services?month=${state.month}&year=${state.year}`;
  const services = await api.get(url);

  const monthPicker = state.globalView
    ? ''
    : `
    <div class="month-picker">
      <button id="list-month-prev">‹</button>
      <span class="month-label" style="min-width:80px">${state.month.toString().padStart(2, '0')}/${state.year}</span>
      <button id="list-month-next">›</button>
    </div>`;

  el.innerHTML = `
    <div class="section-header">
      <span class="section-title">${state.globalView ? t('dashboard_alltime') : `${t('months')[state.month - 1]} ${state.year}`}</span>
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
      ${
        services.length === 0
          ? `<div class="empty"><div class="empty-icon">🚜</div><div class="empty-title">${t('no_services')}</div><div class="empty-sub">${t('no_services_sub')}</div></div>`
          : services.map(s => serviceCard(s)).join('')
      }
    </div>
  `;

  if (!state.globalView) {
    document.getElementById('list-month-prev').onclick = () => {
      state.month--;
      if (state.month < 1) {
        state.month = 12;
        state.year--;
      }
      renderList();
    };
    document.getElementById('list-month-next').onclick = () => {
      state.month++;
      if (state.month > 12) {
        state.month = 1;
        state.year++;
      }
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
  if (s.first_image_id) {
    chips.push(
      `<span class="chip" style="padding:2px 4px"><img src="/api/attachments/${s.first_image_id}" style="height:32px;width:48px;object-fit:cover;border-radius:4px;vertical-align:middle"></span>`
    );
  }
  const discountH = s.discount_hours > 0 ? ` -${s.discount_hours}h` : '';
  if (s.start_time || s.end_time) {
    chips.push(
      `<span class="chip hora">🕐 ${s.start_time || '?'}–${s.end_time || '?'}${discountH}${s.duration_hours != null ? ' · ' + s.duration_hours + 'h' : ''}</span>`
    );
  } else if (s.duration_hours != null) {
    chips.push(`<span class="chip hora">⏱ ${s.duration_hours}h</span>`);
  }
  if (s.hourmeter_start != null || s.hourmeter_end != null) {
    chips.push(
      `<span class="chip horim">⚙️ ${s.hourmeter_start ?? '?'} → ${s.hourmeter_end ?? '?'} h${s.hourmeter_delta != null ? ' (Δ' + parseFloat(s.hourmeter_delta).toFixed(1) + ')' : ''}</span>`
    );
  }
  const opRate = s.operator_rate != null ? parseFloat(s.operator_rate) : 0;
  const machRate = s.machine_rate != null ? parseFloat(s.machine_rate) : 0;
  if (opRate || machRate) {
    const rateStr = opRate && machRate ? `${opRate}+${machRate}${cur}/h` : `${opRate || machRate}${cur}/h`;
    let billing = rateStr;
    if (s.travel_fee) billing += ` +${s.travel_fee}${cur}`;
    if (s.discount) billing += ` -${s.discount}${cur} ${t('discount_abbr')}`;
    chips.push(`<span class="chip billing">💶 ${billing}</span>`);
  }
  if (s.tip > 0) {
    chips.push(
      `<span class="chip billing" style="color:var(--accent)">+${parseFloat(s.tip).toFixed(2)}${cur} ${t('tip_badge')}</span>`
    );
  }
  if (s.attachment_count > 0) {
    chips.push(`<span class="chip">📷 ${s.attachment_count}</span>`);
  }
  if (s.vat_rate != null) {
    chips.push(`<span class="chip">${t('form_vat')} ${parseFloat(s.vat_rate)}%</span>`);
  }

  const grossValue =
    s.value != null
      ? s.vat_rate != null
        ? parseFloat(s.value) * (1 + parseFloat(s.vat_rate) / 100)
        : parseFloat(s.value)
      : null;

  const isScheduled = s.status === 'scheduled';
  const statusTag = isScheduled
    ? `<div class="payment-tag scheduled">${t('tag_scheduled')}</div>`
    : grossValue != null
      ? `<div class="payment-tag ${s.paid ? 'paid' : 'pending'}">${s.paid ? t('tag_paid') : t('tag_pending')}</div>`
      : '';

  return `
    <div class="service-item" data-id="${s.id}">
      <div class="service-top">
        <div>
          <div class="service-date">${formatDate(s.date)}</div>
          <div class="service-client">${escapeHtml(s.client_name || '—')}</div>
          ${s.description ? `<div class="service-description">${escapeHtml(s.description)}</div>` : ''}
        </div>
        <div style="text-align:right;flex-shrink:0">
          ${grossValue != null ? `<div class="service-value">${grossValue.toFixed(2)} ${cur}</div>` : ''}
          ${statusTag}
        </div>
      </div>
      ${chips.length ? `<div class="service-chips">${chips.join('')}</div>` : ''}
    </div>
  `;
}

function formatDate(d) {
  if (!d) return '';
  const [y, m, day] = d.split('-');
  return `${day}/${m}/${y}`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ── Service form ──────────────────────────────────────────
function serviceFormHtml(s = {}) {
  const today = new Date().toISOString().slice(0, 10);
  const clientOptions = state.clients
    .map(c => `<option value="${c.id}" ${s.client_id == c.id ? 'selected' : ''}>${escapeHtml(c.name)}</option>`)
    .join('');

  // Pre-fill from settings defaults when creating a new service
  const isNew = !s.id;
  const defaultOperatorRate = isNew
    ? (s.operator_rate ?? settings['default_operator_rate'] ?? '')
    : (s.operator_rate ?? '');
  const defaultMachineRate = isNew
    ? (s.machine_rate ?? settings['default_machine_rate'] ?? '')
    : (s.machine_rate ?? '');
  const defaultTravelFee = isNew ? (s.travel_fee ?? settings['default_travel_fee'] ?? '') : (s.travel_fee ?? '');
  const defaultPaid = isNew ? (s.paid ?? settings['default_paid'] ?? '0') : (s.paid ?? '0');

  const serviceDate = s.date || today;
  const defaultStatus = s.status || (serviceDate > today ? 'scheduled' : 'completed');
  const hasExistingClient = !!(s.client_id && state.clients.some(c => c.id == s.client_id));

  return `
    <div class="form-grid">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_date')}</label>
          <input type="date" class="form-control" id="f-date" value="${serviceDate}" required onchange="onDateChange(${isNew ? 'true' : 'false'})">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_status')}</label>
          <select class="form-control" id="f-status">
            <option value="completed" ${defaultStatus === 'completed' ? 'selected' : ''}>${t('form_status_completed')}</option>
            <option value="scheduled" ${defaultStatus === 'scheduled' ? 'selected' : ''}>${t('form_status_scheduled')}</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group" style="grid-column:1/-1">
          <label class="form-label">${t('form_client')}</label>
          <select class="form-control" id="f-client" onchange="onClientChange()">
            <option value="">${t('form_no_client')}</option>
            ${clientOptions}
            <option value="__new__">${t('form_new_client')}</option>
          </select>
          <input type="text" class="form-control" id="f-client-new" placeholder="${t('form_new_client_placeholder')}" style="margin-top:6px;display:none">
          <button class="btn btn-ghost btn-sm" id="f-client-edit" type="button" style="margin-top:6px;display:${hasExistingClient ? 'inline-flex' : 'none'}" onclick="editClientFromService()">${t('form_edit_client')}</button>
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
          <label class="form-label">${t('form_operator_rate')}</label>
          <input type="number" class="form-control" id="f-operator-rate" step="0.5" min="0" placeholder="ex: 15.00" value="${defaultOperatorRate}" oninput="calcTotal()">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_machine_rate')}</label>
          <input type="number" class="form-control" id="f-machine-rate" step="0.5" min="0" placeholder="ex: 15.00" value="${defaultMachineRate}" oninput="calcTotal()">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_travel')}</label>
          <div style="display:flex;gap:6px">
            <input type="number" class="form-control" id="f-travel-fee" step="0.5" min="0" placeholder="ex: 10.00" value="${defaultTravelFee}" oninput="calcTotal()">
            <button type="button" class="btn btn-ghost btn-sm" id="btn-calc-travel"
                    onclick="calcTravelFeeFromClient()" title="${t('form_calc_travel')}" style="white-space:nowrap">🚗</button>
          </div>
        </div>
        <div class="form-group"></div>
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
          <input type="number" class="form-control" id="f-value" step="0.01" min="0" placeholder="${t('form_auto_or_manual')}" value="${s.value ?? ''}" oninput="calcTotal.manual=true;updateVatDisplay()">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_tip')}</label>
          <input type="number" class="form-control" id="f-tip" step="0.01" min="0" placeholder="${t('form_tip_placeholder')}" value="${s.tip || ''}">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_vat')}</label>
          <select class="form-control" id="f-vat-enabled" onchange="onVatChange()">
            <option value="0" ${s.vat_rate == null ? 'selected' : ''}>${t('form_vat_none')}</option>
            <option value="1" ${s.vat_rate != null ? 'selected' : ''}>${t('form_vat_include')}</option>
          </select>
        </div>
        <div class="form-group" id="f-vat-rate-grp" ${s.vat_rate == null ? 'style="display:none"' : ''}>
          <label class="form-label">${t('form_vat_rate')}</label>
          <input type="number" class="form-control" id="f-vat-rate" min="0" max="100" step="0.01"
                 placeholder="23" value="${s.vat_rate != null ? s.vat_rate : 23}"
                 oninput="updateVatDisplay()">
        </div>
      </div>
      <div id="f-vat-gross-row" ${s.vat_rate == null ? 'style="display:none"' : ''}>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">${t('form_vat_amount')}</label>
            <input type="number" class="form-control" id="f-vat-amount" readonly step="0.01" placeholder="—" style="color:var(--text2)">
          </div>
          <div class="form-group">
            <label class="form-label">${t('form_vat_gross')}</label>
            <input type="number" class="form-control" id="f-vat-gross" readonly step="0.01" placeholder="—" style="color:var(--accent);font-weight:700">
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">${t('form_description')}</label>
        <textarea class="form-control" id="f-description" placeholder="${t('form_desc_placeholder')}">${s.description || ''}</textarea>
      </div>

      ${
        s.id
          ? `
      <hr class="divider">
      <div class="section-title">${t('form_pictures')}</div>
      <div id="pictures-grid" class="pictures-grid">
        <span class="pictures-empty">${t('form_pictures_loading')}</span>
      </div>
      <label class="btn btn-secondary btn-sm" style="cursor:pointer;width:fit-content">
        📷 ${t('form_pictures_add')}
        <input type="file" accept="image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx" multiple style="display:none" onchange="uploadPictures(this, ${s.id})">
      </label>
      `
          : ''
      }

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

window.onClientChange = function () {
  const sel = document.getElementById('f-client');
  const newInput = document.getElementById('f-client-new');
  const editBtn = document.getElementById('f-client-edit');
  const isExistingClient = sel.value && sel.value !== '__new__';
  newInput.style.display = sel.value === '__new__' ? 'block' : 'none';
  if (editBtn) editBtn.style.display = isExistingClient ? 'inline-flex' : 'none';
  if (sel.value === '__new__') newInput.focus();
};

window.editClientFromService = function () {
  const id = parseInt(document.getElementById('f-client').value);
  if (!id) return;
  editClient(id);
};

window.calcDuration = function () {
  const start = document.getElementById('f-start')?.value;
  const end = document.getElementById('f-end')?.value;
  if (!start || !end) return;
  const [h1, m1] = start.split(':').map(Number);
  const [h2, m2] = end.split(':').map(Number);
  let dur = (h2 * 60 + m2 - (h1 * 60 + m1)) / 60;
  if (dur < 0) dur += 24;
  const discountH = parseFloat(document.getElementById('f-discount-h')?.value) || 0;
  const net = Math.max(0, dur - discountH);
  document.getElementById('f-duration').value = net.toFixed(2);
  calcTotal();
};

window.calcTotal = function () {
  if (!calcTotal.manual) {
    const duration = parseFloat(document.getElementById('f-duration')?.value) || 0;
    const operatorRate = parseFloat(document.getElementById('f-operator-rate')?.value) || 0;
    const machineRate = parseFloat(document.getElementById('f-machine-rate')?.value) || 0;
    const totalRate = operatorRate + machineRate;
    if (totalRate) {
      const travelFee = parseFloat(document.getElementById('f-travel-fee')?.value) || 0;
      const discount = parseFloat(document.getElementById('f-discount')?.value) || 0;
      const total = Math.max(0, duration * totalRate + travelFee - discount);
      document.getElementById('f-value').value = total.toFixed(2);
    }
  }
  updateVatDisplay();
};

window.calcTravelFeeFromClient = async function () {
  const btn = document.getElementById('btn-calc-travel');
  if (btn) btn.disabled = true;
  try {
    const clientId = document.getElementById('f-client')?.value;
    const client = state.clients.find(c => String(c.id) === String(clientId));
    if (!client?.address) {
      toast(t('toast_no_client_address'), 'error');
      return;
    }

    const base = await getBaseCoords();
    if (!base) {
      toast(t('toast_no_base_address'), 'warn');
      return;
    }

    const result = await geocodeAddress(client.address);
    if (!result) {
      toast(t('toast_travel_calc_error'), 'error');
      return;
    }

    const clientLat = parseFloat(result.lat),
      clientLng = parseFloat(result.lon);
    const distKm = await getRoadDistanceKm(base.lat, base.lng, clientLat, clientLng);
    const fee = applyTravelFeeFormula(distKm);

    const feeInput = document.getElementById('f-travel-fee');
    if (feeInput) {
      feeInput.value = fee.toFixed(2);
      calcTotal.manual = false;
      calcTotal();
    }
    toast(`🚗 ${distKm.toFixed(1)} km → ${fee.toFixed(2)} ${getCurrency()}`, 'success');
  } catch (_) {
    toast(t('toast_travel_calc_error'), 'error');
  } finally {
    if (btn) btn.disabled = false;
  }
};

window.onVatChange = function () {
  const enabled = document.getElementById('f-vat-enabled')?.value === '1';
  const rateGrp = document.getElementById('f-vat-rate-grp');
  if (rateGrp) rateGrp.style.display = enabled ? '' : 'none';
  updateVatDisplay();
};

window.updateVatDisplay = function () {
  const grossRow = document.getElementById('f-vat-gross-row');
  if (!grossRow) return;
  const enabled = document.getElementById('f-vat-enabled')?.value === '1';
  grossRow.style.display = enabled ? '' : 'none';
  if (!enabled) return;
  const net = parseFloat(document.getElementById('f-value')?.value) || 0;
  const rate = parseFloat(document.getElementById('f-vat-rate')?.value) || 0;
  const vatAmt = (net * rate) / 100;
  const amountEl = document.getElementById('f-vat-amount');
  const grossEl = document.getElementById('f-vat-gross');
  if (amountEl) amountEl.value = vatAmt.toFixed(2);
  if (grossEl) grossEl.value = (net + vatAmt).toFixed(2);
};

window.calcHourmeter = function () {
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
    client_id: clientVal && clientVal !== '__new__' ? clientVal : null,
    description: document.getElementById('f-description').value || null,
    value: document.getElementById('f-value').value || null,
    hourmeter_start: document.getElementById('f-horim-start').value || null,
    hourmeter_end: document.getElementById('f-horim-end').value || null,
    operator_rate: document.getElementById('f-operator-rate').value || null,
    machine_rate: document.getElementById('f-machine-rate').value || null,
    travel_fee: document.getElementById('f-travel-fee').value || null,
    discount: document.getElementById('f-discount').value || null,
    paid: document.getElementById('f-paid').value === '1' ? 1 : 0,
    tip: document.getElementById('f-tip').value || null,
    vat_rate:
      document.getElementById('f-vat-enabled').value === '1'
        ? parseFloat(document.getElementById('f-vat-rate').value) || 23
        : null,
    status: document.getElementById('f-status')?.value || 'completed',
  };
}

window.saveService = async function (id) {
  const body = getFormData();
  if (!body.date) {
    toast(t('toast_date_required'), 'error');
    return;
  }

  // Handle new client creation inline
  if (document.getElementById('f-client').value === '__new__') {
    const newName = document.getElementById('f-client-new').value.trim();
    if (!newName) {
      toast(t('toast_client_name_required'), 'error');
      return;
    }
    const result = await api.post('/api/clients', { name: newName });
    if (result.error) {
      toast(result.error, 'error');
      return;
    }
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

window.deleteService = async function (id) {
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
  updateVatDisplay();
  loadPictures(id);
}

window.loadPictures = async function (serviceId) {
  const grid = document.getElementById('pictures-grid');
  if (!grid) return;
  const attachments = await api.get(`/api/services/${serviceId}/attachments`);
  if (attachments.length === 0) {
    grid.innerHTML = `<span class="pictures-empty">${t('form_pictures_empty')}</span>`;
    return;
  }
  grid.innerHTML = attachments
    .map(a => {
      const mime = a.mime_type || '';
      const isImage = mime.startsWith('image/');
      const isVideo = mime.startsWith('video/');
      const isPdf = mime === 'application/pdf';
      const icon = isVideo ? '🎬' : isPdf ? '📄' : '📎';
      const name = escapeHtml(a.original_name || 'file');
      const inner = isImage
        ? `<img src="/api/attachments/${a.id}" alt="${name}" loading="lazy">`
        : `<div class="file-thumb-icon">${icon}<span class="file-thumb-name">${name}</span></div>`;
      return `
      <div class="picture-thumb${isImage ? '' : ' file-thumb'}" onclick="viewPicture(${a.id})" title="${name}">
        ${inner}
        <button class="picture-thumb-del" onclick="event.stopPropagation();deletePicture(${a.id}, ${serviceId})" title="Delete">✕</button>
      </div>`;
    })
    .join('');
};

window.uploadPictures = async function (input, serviceId) {
  const files = Array.from(input.files);
  if (!files.length) return;
  for (const file of files) {
    const r = await fetch(`/api/services/${serviceId}/attachments?name=${encodeURIComponent(file.name)}`, {
      method: 'POST',
      headers: { 'Content-Type': file.type || 'application/octet-stream' },
      body: file,
    });
    if (!r.ok) {
      let msg = `Upload failed (${r.status})`;
      try {
        const e = await r.json();
        if (e.error) msg = e.error;
      } catch (_) {}
      toast(msg, 'error');
      input.value = '';
      return;
    }
    const result = await r.json();
    if (result.error) {
      toast(result.error, 'error');
      input.value = '';
      return;
    }
  }
  input.value = '';
  toast(t('toast_picture_uploaded'));
  loadPictures(serviceId);
};

window.deletePicture = async function (id, serviceId) {
  if (!confirm(t('confirm_delete_picture'))) return;
  await api.del(`/api/attachments/${id}`);
  toast(t('toast_picture_deleted'));
  loadPictures(serviceId);
};

window.viewPicture = function (id) {
  window.open(`/api/attachments/${id}`, '_blank');
};

// ── Invoice generator ─────────────────────────────────────
window.generateInvoice = async function (serviceId) {
  const issuerName = (settings['inv_name'] || '').trim();
  if (!issuerName) {
    toast(t('invoice_no_issuer'), 'error');
    return;
  }

  const s = await api.get(`/api/services/${serviceId}`);
  const cur = getCurrency();

  const issuerAddress = (settings['inv_address'] || '').trim();
  const issuerNif = (settings['inv_nif'] || '').trim();
  const issuerEmail = (settings['inv_email'] || '').trim();
  const issuerPhone = (settings['inv_phone'] || '').trim();
  const footerNote = (settings['inv_note'] || '').trim();

  const invNum = settings['next_invoice_number'] || '1';
  const ref = `F ${new Date().getFullYear()}/${String(parseInt(invNum)).padStart(4, '0')}`;
  const today = new Date().toLocaleDateString(state.lang === 'pt' ? 'pt-PT' : 'en-GB');

  const esc = str => (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const escNl = str => esc(str).replace(/\n/g, '<br>');
  const fmt = n => (n != null && !isNaN(n) ? parseFloat(n).toFixed(2) + '\u00a0' + cur : '—');

  const valueAmt = s.value != null ? parseFloat(s.value) : null;
  const tipAmt = s.tip ? parseFloat(s.tip) : 0;
  const travelAmt = s.travel_fee ? parseFloat(s.travel_fee) : 0;
  const discountAmt = s.discount ? parseFloat(s.discount) : 0;
  const vatRate = s.vat_rate != null ? parseFloat(s.vat_rate) : null;
  const vatAmt = vatRate != null && valueAmt != null ? (valueAmt * vatRate) / 100 : 0;
  const grandTotal = valueAmt != null ? valueAmt + vatAmt + tipAmt : null;

  const descMain = s.description ? `<div class="td-main">${esc(s.description)}</div>` : '';
  const descSub = s.start_time
    ? `<div class="td-sub">${s.start_time}${s.end_time ? '\u2013' + s.end_time : ''}</div>`
    : '';
  const descCell = descMain + descSub || '<span>—</span>';

  const opRate = s.operator_rate != null ? parseFloat(s.operator_rate) : 0;
  const machRate = s.machine_rate != null ? parseFloat(s.machine_rate) : 0;
  const totalRate = opRate + machRate;
  const showRate = totalRate > 0;
  const showTravel = travelAmt > 0;
  const showDiscount = discountAmt > 0;
  // Labour portion, backing the travel fee and discount out of the net value so
  // each can be shown as its own line in the table.
  const laborAmt = valueAmt != null ? valueAmt - travelAmt + discountAmt : null;

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
.inv-header{display:flex;justify-content:space-between;align-items:flex-start;gap:28px;margin-bottom:40px;padding-bottom:24px;border-bottom:3px solid #1a1e2e}
.inv-header>div:first-child{flex:1;min-width:0}
.inv-header>.inv-right{flex-shrink:0;max-width:40%}
.issuer-name{font-size:18px;font-weight:800;margin-bottom:6px;overflow-wrap:anywhere;word-break:break-word}
.issuer-detail{font-size:12px;color:#555c7a;line-height:1.9;overflow-wrap:anywhere}
.inv-right{text-align:right}
.inv-title{font-size:23px;font-weight:900;letter-spacing:.04em;line-height:1.1;margin-bottom:10px}
.inv-meta{font-size:12px;color:#555c7a;line-height:1.9}
.inv-meta strong{color:#1a1e2e}
.sec-label{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#9098b0;margin-bottom:8px}
.bill-to{margin-bottom:32px}
.bill-name{font-size:16px;font-weight:700;margin-bottom:4px;overflow-wrap:anywhere}
.bill-detail{font-size:12px;color:#555c7a;line-height:1.9}
table{width:100%;border-collapse:collapse;margin-bottom:24px}
th{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#9098b0;padding:8px 10px;text-align:left;border-bottom:2px solid #d0d4de}
th.r,td.r{text-align:right}
td{padding:13px 10px;font-size:13px;border-bottom:1px solid #ebedf0;vertical-align:top}
.td-main{font-weight:600;white-space:pre-wrap;overflow-wrap:anywhere}
.td-sub{font-size:11px;color:#9098b0;margin-top:3px}
.totals{display:flex;justify-content:flex-end;margin-bottom:28px}
.totals-inner{width:250px}
.tot-row{display:flex;justify-content:space-between;padding:5px 0;font-size:13px;color:#555c7a;border-bottom:1px solid #ebedf0}
.tot-row.grand{font-size:16px;font-weight:800;color:#1a1e2e;padding-top:10px;border-top:2px solid #1a1e2e;border-bottom:none;margin-top:6px}
/* Remove the browser's print header/footer (date, document title, about:blank URL) */
@page{margin:0;size:A4}
/* Fill an A4 sheet: the flexible spacer pushes the totals to the bottom */
.page{display:flex;flex-direction:column;min-height:297mm}
.spacer{flex:1 1 auto;min-height:24px}
.notes-block{margin-bottom:8px}
.notes-body{font-size:12px;color:#555c7a;line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere}
@media print{
  body{background:#fff}
  .topbar{display:none}
  .page{margin:0;padding:46px 52px;box-shadow:none;max-width:100%}
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
        ${issuerNif ? 'NIF: ' + esc(issuerNif) + '<br>' : ''}
        ${issuerPhone ? 'Tel: ' + esc(issuerPhone) + '<br>' : ''}
        ${issuerEmail ? esc(issuerEmail) : ''}
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
    ${
      s.client_name
        ? `<div class="bill-name">${esc(s.client_name)}</div>
         <div class="bill-detail">
           ${s.client_address ? escNl(s.client_address) + '<br>' : ''}
           ${s.client_phone ? esc(s.client_phone) : ''}
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
      ${showRate ? `<th class="r">${t('invoice_col_rate')}</th>` : ''}
      <th class="r">${t('invoice_col_total')}</th>
    </tr></thead>
    <tbody><tr>
      <td style="white-space:nowrap">${formatDate(s.date)}</td>
      <td>${descCell}</td>
      <td class="r">${s.duration_hours != null ? s.duration_hours + '\u00a0h' : '—'}</td>
      ${showRate ? `<td class="r">${fmt(totalRate)}</td>` : ''}
      <td class="r"><strong>${fmt(laborAmt)}</strong></td>
    </tr>
      ${
        showTravel
          ? `<tr>
        <td></td>
        <td><div class="td-main">${t('invoice_col_travel')}</div></td>
        <td class="r">—</td>
        ${showRate ? '<td class="r">—</td>' : ''}
        <td class="r"><strong>${fmt(travelAmt)}</strong></td>
      </tr>`
          : ''
      }
      ${
        showDiscount
          ? `<tr>
        <td></td>
        <td><div class="td-main">${t('invoice_col_discount')}</div></td>
        <td class="r">—</td>
        ${showRate ? '<td class="r">—</td>' : ''}
        <td class="r"><strong>-${fmt(discountAmt)}</strong></td>
      </tr>`
          : ''
      }
    </tbody>
  </table>

  ${
    footerNote
      ? `<div class="notes-block">
    <div class="sec-label" style="margin-bottom:6px">${t('quote_notes')}</div>
    <div class="notes-body">${escNl(footerNote)}</div>
  </div>`
      : ''
  }

  <div class="spacer"></div>

  <div class="totals">
    <div class="totals-inner">
      ${valueAmt != null ? `<div class="tot-row"><span>${t('invoice_subtotal')}</span><span>${fmt(valueAmt)}</span></div>` : ''}
      ${vatRate != null ? `<div class="tot-row"><span>${t('form_vat')} (${vatRate}%)</span><span>+${fmt(vatAmt)}</span></div>` : ''}
      ${tipAmt ? `<div class="tot-row"><span>${t('invoice_tip')}</span><span>+${fmt(tipAmt)}</span></div>` : ''}
      <div class="tot-row grand"><span>${t('invoice_total')}</span><span>${fmt(grandTotal)}</span></div>
    </div>
  </div>
</div>
</body>
</html>`;

  const w = window.open('', '_blank');
  if (!w) {
    toast('Popup blocked — allow popups for this site', 'error');
    return;
  }
  w.document.write(html);
  w.document.close();
  // Bump invoice number
  saveSetting('next_invoice_number', String(parseInt(settings['next_invoice_number'] || '1') + 1));
};

// ── Quote view ────────────────────────────────────────────
function quoteFormHtml(q = {}) {
  const has = k => q[k] != null && q[k] !== '';
  const today = has('date') ? q.date : new Date().toISOString().slice(0, 10);
  const validUntil = has('valid_until')
    ? q.valid_until
    : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  const selClientId = q.client_id != null ? String(q.client_id) : '';
  // A custom (free-text) client is one with a name but no linked client_id.
  const isCustomClient = !selClientId && has('client_name');
  const clientOptions = state.clients
    .map(
      c => `<option value="${c.id}"${String(c.id) === selClientId ? ' selected' : ''}>${escapeHtml(c.name)}</option>`
    )
    .join('');

  const val = (k, def = '') => (has(k) ? escapeHtml(String(q[k])) : def !== '' ? escapeHtml(String(def)) : '');
  const opRate = val(
    'operator_rate',
    q.id != null || isCustomClient || has('description') ? '' : settings['default_operator_rate'] || ''
  );
  const machRate = val(
    'machine_rate',
    q.id != null || isCustomClient || has('description') ? '' : settings['default_machine_rate'] || ''
  );
  const travel = val(
    'travel_fee',
    q.id != null || isCustomClient || has('description') ? '' : settings['default_travel_fee'] || ''
  );
  const vatSel = has('vat_rate') ? String(parseFloat(q.vat_rate)) : '';
  const saveLabel = q.id != null ? t('quote_generate') : t('quote_save');
  const editId = q.id != null ? q.id : '';
  const editRef = q.ref ? escapeHtml(q.ref) : '';
  const editCreated = q.created_at ? escapeHtml(q.created_at) : '';

  return `
    <div class="form-grid" data-quote-id="${editId}" data-quote-ref="${editRef}" data-quote-created="${editCreated}">
      <div class="form-group">
        <label class="form-label">${t('form_client')}</label>
        <select class="form-control" id="q-client-select" onchange="onQuoteClientChange()">
          <option value=""${!selClientId && !isCustomClient ? ' selected' : ''}>${t('form_no_client')}</option>
          ${clientOptions}
          <option value="__custom__"${isCustomClient ? ' selected' : ''}>✎ ${t('form_new_client_placeholder')}...</option>
        </select>
        <input type="text" class="form-control" id="q-client-custom"
               placeholder="${t('form_new_client_placeholder')}"
               value="${isCustomClient ? escapeHtml(q.client_name) : ''}"
               style="margin-top:6px;display:${isCustomClient ? 'block' : 'none'}">
      </div>

      <div class="form-group">
        <label class="form-label">${t('quote_services')}</label>
        <textarea class="form-control" id="q-description" rows="3"
                  placeholder="${t('form_desc_placeholder')}">${has('description') ? escapeHtml(q.description) : ''}</textarea>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('quote_date')}</label>
          <input type="date" class="form-control" id="q-date" value="${today}">
        </div>
        <div class="form-group">
          <label class="form-label">${t('quote_valid_until')}</label>
          <input type="date" class="form-control" id="q-valid-until" value="${validUntil}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">${t('quote_est_hours')}</label>
        <input type="number" class="form-control" id="q-hours"
               step="0.25" min="0" placeholder="ex: 4" value="${val('hours')}"
               oninput="calcQuoteTotal()">
      </div>

      <hr class="divider">

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_operator_rate')}</label>
          <input type="number" class="form-control" id="q-operator-rate"
                 step="0.5" min="0" placeholder="ex: 15.00"
                 value="${opRate}"
                 oninput="calcQuoteTotal()">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_machine_rate')}</label>
          <input type="number" class="form-control" id="q-machine-rate"
                 step="0.5" min="0" placeholder="ex: 15.00"
                 value="${machRate}"
                 oninput="calcQuoteTotal()">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_travel')}</label>
          <div style="display:flex;gap:6px">
            <input type="number" class="form-control" id="q-travel"
                   step="0.5" min="0" placeholder="ex: 10.00"
                   value="${travel}"
                   oninput="calcQuoteTotal()">
            <button type="button" class="btn btn-ghost btn-sm" id="q-btn-calc-travel"
                    onclick="calcQuoteTravelFee()" title="${t('form_calc_travel')}" style="white-space:nowrap">🚗</button>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">${t('form_discount_value')}</label>
          <input type="number" class="form-control" id="q-discount"
                 step="0.5" min="0" placeholder="ex: 5.00" value="${val('discount')}"
                 oninput="calcQuoteTotal()">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('form_vat')}</label>
          <select class="form-control" id="q-vat" onchange="calcQuoteTotal()">
            <option value=""${vatSel === '' ? ' selected' : ''}>${t('form_vat_none')}</option>
            <option value="6"${vatSel === '6' ? ' selected' : ''}>6%</option>
            <option value="13"${vatSel === '13' ? ' selected' : ''}>13%</option>
            <option value="23"${vatSel === '23' ? ' selected' : ''}>23%</option>
          </select>
        </div>
        <div class="form-group"></div>
      </div>

      <div class="form-group">
        <label class="form-label">${t('quote_notes')}</label>
        <textarea class="form-control" id="q-notes" rows="3"
                  placeholder="${t('invoice_footer_note_placeholder')}">${has('notes') ? escapeHtml(q.notes) : ''}</textarea>
      </div>

      <div id="quote-total-display" style="padding:12px;background:var(--bg3);border-radius:8px;margin-bottom:12px;font-size:14px;display:none">
        <div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--border)">
          <span style="color:var(--text2)">${t('quote_subtotal')}</span>
          <span id="qt-subtotal">—</span>
        </div>
        <div id="qt-vat-row" style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--border);display:none">
          <span style="color:var(--text2)">${t('quote_vat')}</span>
          <span id="qt-vat">—</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:6px 0;font-weight:700;font-size:16px">
          <span>${t('quote_total')}</span>
          <span id="qt-total" style="color:var(--accent)">—</span>
        </div>
      </div>

      <button class="btn btn-primary" style="width:100%;margin-top:4px" onclick="saveQuote()">
        ${saveLabel}
      </button>
    </div>
  `;
}

function openQuoteModal(q = {}) {
  openModal(q && q.id != null ? t('quote_edit') + ' ' + (q.ref || '') : t('quote_new'), quoteFormHtml(q));
  // Recompute the live total once the prefilled fields are in the DOM.
  setTimeout(() => {
    try {
      calcQuoteTotal();
    } catch (_) {}
  }, 0);
}

window.onQuoteClientChange = function () {
  const sel = document.getElementById('q-client-select');
  const custom = document.getElementById('q-client-custom');
  if (custom) custom.style.display = sel.value === '__custom__' ? 'block' : 'none';
};

window.calcQuoteTravelFee = async function () {
  const btn = document.getElementById('q-btn-calc-travel');
  if (btn) btn.disabled = true;
  try {
    const clientId = document.getElementById('q-client-select')?.value;
    const client = state.clients.find(c => String(c.id) === String(clientId));
    if (!client?.address) {
      toast(t('toast_no_client_address'), 'error');
      return;
    }

    const base = await getBaseCoords();
    if (!base) {
      toast(t('toast_no_base_address'), 'warn');
      return;
    }

    const result = await geocodeAddress(client.address);
    if (!result) {
      toast(t('toast_travel_calc_error'), 'error');
      return;
    }

    const clientLat = parseFloat(result.lat),
      clientLng = parseFloat(result.lon);
    const distKm = await getRoadDistanceKm(base.lat, base.lng, clientLat, clientLng);
    const fee = applyTravelFeeFormula(distKm);

    const feeInput = document.getElementById('q-travel');
    if (feeInput) {
      feeInput.value = fee.toFixed(2);
      calcQuoteTotal();
    }
    toast(`🚗 ${distKm.toFixed(1)} km → ${fee.toFixed(2)} ${getCurrency()}`, 'success');
  } catch (_) {
    toast(t('toast_travel_calc_error'), 'error');
  } finally {
    if (btn) btn.disabled = false;
  }
};

window.calcQuoteTotal = function () {
  const hours = parseFloat(document.getElementById('q-hours')?.value) || 0;
  const opRate = parseFloat(document.getElementById('q-operator-rate')?.value) || 0;
  const machRate = parseFloat(document.getElementById('q-machine-rate')?.value) || 0;
  const travel = parseFloat(document.getElementById('q-travel')?.value) || 0;
  const discount = parseFloat(document.getElementById('q-discount')?.value) || 0;
  const vatRate = parseFloat(document.getElementById('q-vat')?.value) || 0;

  const subtotal = Math.max(0, hours * (opRate + machRate) + travel - discount);
  const vatAmt = (subtotal * vatRate) / 100;
  const total = subtotal + vatAmt;

  const cur = getCurrency();
  const display = document.getElementById('quote-total-display');
  const subEl = document.getElementById('qt-subtotal');
  const vatRow = document.getElementById('qt-vat-row');
  const vatEl = document.getElementById('qt-vat');
  const totEl = document.getElementById('qt-total');

  if (display && subtotal > 0) {
    display.style.display = 'block';
    if (subEl) subEl.textContent = subtotal.toFixed(2) + ' ' + cur;
    if (vatRow) vatRow.style.display = vatRate > 0 ? 'flex' : 'none';
    if (vatEl) vatEl.textContent = '+' + vatAmt.toFixed(2) + ' ' + cur;
    if (totEl) totEl.textContent = total.toFixed(2) + ' ' + cur;
  } else if (display) {
    display.style.display = 'none';
  }
};

// Read the quote form fields into a normalized object (DB field names).
// For a linked client, snapshot the client's address/phone so the PDF and the
// stored record stay correct even if the client is edited later.
function readQuoteForm() {
  const clientSel = document.getElementById('q-client-select');
  const clientCustom = document.getElementById('q-client-custom');
  let client_id = null,
    client_name = '',
    client_address = '',
    client_phone = '';
  if (clientSel) {
    if (clientSel.value === '__custom__') {
      client_name = (clientCustom?.value || '').trim();
    } else if (clientSel.value) {
      client_id = parseInt(clientSel.value, 10);
      const found = state.clients.find(c => String(c.id) === String(clientSel.value));
      if (found) {
        client_name = found.name;
        client_address = found.address || '';
        client_phone = found.phone || '';
      }
    }
  }
  return {
    client_id,
    client_name: client_name || null,
    client_address: client_address || null,
    client_phone: client_phone || null,
    description: document.getElementById('q-description')?.value || '',
    date: document.getElementById('q-date')?.value || new Date().toISOString().slice(0, 10),
    valid_until: document.getElementById('q-valid-until')?.value || '',
    hours: parseFloat(document.getElementById('q-hours')?.value) || 0,
    operator_rate: parseFloat(document.getElementById('q-operator-rate')?.value) || 0,
    machine_rate: parseFloat(document.getElementById('q-machine-rate')?.value) || 0,
    travel_fee: parseFloat(document.getElementById('q-travel')?.value) || 0,
    discount: parseFloat(document.getElementById('q-discount')?.value) || 0,
    vat_rate: parseFloat(document.getElementById('q-vat')?.value) || 0,
    notes: document.getElementById('q-notes')?.value || '',
  };
}

// Compute subtotal / VAT / grand total from a quote record or form object.
function quoteTotals(q) {
  const hours = parseFloat(q.hours) || 0;
  const rate = (parseFloat(q.operator_rate) || 0) + (parseFloat(q.machine_rate) || 0);
  const travel = parseFloat(q.travel_fee) || 0;
  const discount = parseFloat(q.discount) || 0;
  const vatRate = parseFloat(q.vat_rate) || 0;
  const subtotal = Math.max(0, hours * rate + travel - discount);
  const vatAmt = (subtotal * vatRate) / 100;
  return { subtotal, vatAmt, grandTotal: subtotal + vatAmt };
}

// Build the print-ready quotation HTML from a normalized quote object.
function buildQuoteHtml(data) {
  const issuerName = (settings['inv_name'] || '').trim();
  const clientName = data.client_name || '';
  const clientAddress = data.client_address || '';
  const clientPhone = data.client_phone || '';
  const description = data.description || '';
  const notes = data.notes || '';
  const hours = parseFloat(data.hours) || 0;
  const opRate = parseFloat(data.operator_rate) || 0;
  const machRate = parseFloat(data.machine_rate) || 0;
  const travel = parseFloat(data.travel_fee) || 0;
  const discount = parseFloat(data.discount) || 0;
  const vatRate = parseFloat(data.vat_rate) || 0;
  const validUntil = data.valid_until || '';

  const issuerAddress = (settings['inv_address'] || '').trim();
  const issuerNif = (settings['inv_nif'] || '').trim();
  const issuerEmail = (settings['inv_email'] || '').trim();
  const issuerPhone = (settings['inv_phone'] || '').trim();
  const footerNote = (settings['inv_note'] || '').trim();

  const ref = data.ref || `ORC ${new Date().getFullYear()}/0000`;

  const esc = str => (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const escNl = str => esc(str).replace(/\n/g, '<br>');
  const fmt = n => (n != null && !isNaN(n) ? parseFloat(n).toFixed(2) + ' ' + getCurrency() : '—');

  const totalRate = opRate + machRate;
  const workAmt = hours * totalRate;
  const subtotal = Math.max(0, hours * totalRate + travel - discount);
  const vatAmt = (subtotal * vatRate) / 100;
  const grandTotal = subtotal + vatAmt;

  const showRate = totalRate > 0;
  const showTravel = travel > 0;
  const showDiscount = discount > 0;

  const locale = state.lang === 'pt' ? 'pt-PT' : 'en-GB';
  // Top-right date = when the quote was created (created_at), falling back to today for a brand-new quote.
  const created = data.created_at || data.date;
  const today = created
    ? new Date(String(created).replace(' ', 'T')).toLocaleDateString(locale)
    : new Date().toLocaleDateString(locale);
  const validFmt = validUntil ? new Date(validUntil).toLocaleDateString(locale) : '';

  return `<!DOCTYPE html>
<html lang="${state.lang}">
<head>
<meta charset="UTF-8">
<title>${esc(ref)}</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Helvetica Neue',Arial,sans-serif;font-size:13px;color:#1a1e2e;background:#e8e8e8}
.topbar{background:#1a1e2e;color:#fff;padding:10px 24px;display:flex;justify-content:space-between;align-items:center;gap:12px;position:sticky;top:0;z-index:10}
.topbar-ref{font-size:12px;opacity:.6}
.print-btn{background:#e8a020;color:#000;border:none;border-radius:6px;font-size:13px;font-weight:700;padding:8px 20px;cursor:pointer;letter-spacing:.02em}
.page{max-width:800px;margin:24px auto 48px;background:#fff;padding:52px;box-shadow:0 4px 24px rgba(0,0,0,.12)}
.inv-header{display:flex;justify-content:space-between;align-items:flex-start;gap:28px;margin-bottom:40px;padding-bottom:24px;border-bottom:3px solid #1a1e2e}
.inv-header>div:first-child{flex:1;min-width:0}
.inv-header>.inv-right{flex-shrink:0;max-width:40%}
.issuer-name{font-size:18px;font-weight:800;margin-bottom:6px;overflow-wrap:anywhere;word-break:break-word}
.issuer-detail{font-size:12px;color:#555c7a;line-height:1.9;overflow-wrap:anywhere}
.inv-right{text-align:right}
.inv-title{font-size:23px;font-weight:900;letter-spacing:.04em;line-height:1.1;margin-bottom:10px}
.inv-meta{font-size:12px;color:#555c7a;line-height:1.9}
.inv-meta strong{color:#1a1e2e}
.sec-label{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#9098b0;margin-bottom:8px}
.bill-to{margin-bottom:32px}
.bill-name{font-size:16px;font-weight:700;margin-bottom:4px;overflow-wrap:anywhere}
table{width:100%;border-collapse:collapse;margin-bottom:24px}
th{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#9098b0;padding:8px 10px;text-align:left;border-bottom:2px solid #d0d4de}
th.r,td.r{text-align:right}
td{padding:13px 10px;font-size:13px;border-bottom:1px solid #ebedf0;vertical-align:top}
.td-main{font-weight:600;white-space:pre-wrap;overflow-wrap:anywhere}
.totals{display:flex;justify-content:flex-end;margin-bottom:28px}
.totals-inner{width:250px}
.tot-row{display:flex;justify-content:space-between;padding:5px 0;font-size:13px;color:#555c7a;border-bottom:1px solid #ebedf0}
.tot-row.grand{font-size:16px;font-weight:800;color:#1a1e2e;padding-top:10px;border-top:2px solid #1a1e2e;border-bottom:none;margin-top:6px}
.footer{border-top:1px solid #d0d4de;padding-top:14px;display:flex;justify-content:space-between;align-items:flex-end;font-size:11px;color:#9098b0;margin-top:40px}
/* Remove the browser's print header/footer (date, document title, about:blank URL) */
@page{margin:0;size:A4}
/* Fill an A4 sheet: the flexible spacer pushes the totals to the bottom */
.page{display:flex;flex-direction:column;min-height:297mm}
.spacer{flex:1 1 auto;min-height:24px}
.notes-block{margin-bottom:8px}
.notes-body{font-size:12px;color:#555c7a;line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere}
@media print{
  body{background:#fff}
  .topbar{display:none}
  .page{margin:0;padding:46px 52px;box-shadow:none;max-width:100%}
}
</style>
</head>
<body>
<div class="topbar">
  <span class="topbar-ref">${t('quote_title')} &middot; ${ref} &middot; ${today}</span>
  <button class="print-btn" onclick="window.print()">${t('quote_print')}</button>
</div>
<div class="page">
  <div class="inv-header">
    <div>
      <div class="issuer-name">${esc(issuerName)}</div>
      <div class="issuer-detail">
        ${issuerAddress ? escNl(issuerAddress) + '<br>' : ''}
        ${issuerNif ? 'NIF: ' + esc(issuerNif) + '<br>' : ''}
        ${issuerPhone ? 'Tel: ' + esc(issuerPhone) + '<br>' : ''}
        ${issuerEmail ? esc(issuerEmail) : ''}
      </div>
    </div>
    <div class="inv-right">
      <div class="inv-title">${t('quote_title')}</div>
      <div class="inv-meta">
        <strong>${t('quote_ref')}:</strong> ${ref}<br>
        <strong>${t('quote_date')}:</strong> ${today}<br>
        ${validFmt ? `<strong>${t('quote_valid_until')}:</strong> ${validFmt}` : ''}
      </div>
    </div>
  </div>

  <div class="bill-to">
    <div class="sec-label">${t('quote_issued_to')}</div>
    ${
      clientName
        ? `<div class="bill-name">${esc(clientName)}</div>
         <div class="bill-detail">
           ${clientAddress ? escNl(clientAddress) + '<br>' : ''}
           ${clientPhone ? esc(clientPhone) : ''}
         </div>`
        : `<div class="bill-name">—</div>`
    }
  </div>

  <div class="sec-label" style="margin-bottom:8px">${t('quote_services')}</div>
  <table>
    <thead><tr>
      <th>${t('quote_col_desc')}</th>
      <th class="r">${t('quote_col_hours')}</th>
      ${showRate ? `<th class="r">${t('quote_col_rate')}</th>` : ''}
      <th class="r">${t('quote_col_total')}</th>
    </tr></thead>
    <tbody><tr>
      <td>${description ? `<div class="td-main">${esc(description)}</div>` : '<span>—</span>'}</td>
      <td class="r">${hours > 0 ? hours + ' h' : '—'}</td>
      ${showRate ? `<td class="r">${fmt(totalRate)}</td>` : ''}
      <td class="r"><strong>${fmt(workAmt)}</strong></td>
    </tr>
      ${
        showTravel
          ? `<tr>
        <td><div class="td-main">${t('quote_col_travel')}</div></td>
        <td class="r">—</td>
        ${showRate ? '<td class="r">—</td>' : ''}
        <td class="r"><strong>${fmt(travel)}</strong></td>
      </tr>`
          : ''
      }
      ${
        showDiscount
          ? `<tr>
        <td><div class="td-main">${t('quote_col_discount')}</div></td>
        <td class="r">—</td>
        ${showRate ? '<td class="r">—</td>' : ''}
        <td class="r"><strong>-${fmt(discount)}</strong></td>
      </tr>`
          : ''
      }
    </tbody>
  </table>

  ${
    notes || footerNote
      ? `<div class="notes-block">
    <div class="sec-label" style="margin-bottom:6px">${t('quote_notes')}</div>
    <div class="notes-body">${escNl(notes || footerNote)}</div>
  </div>`
      : ''
  }

  <div class="spacer"></div>

  <div class="totals">
    <div class="totals-inner">
      <div class="tot-row"><span>${t('quote_subtotal')}</span><span>${fmt(subtotal)}</span></div>
      ${vatRate > 0 ? `<div class="tot-row"><span>${t('quote_vat')} (${vatRate}%)</span><span>+${fmt(vatAmt)}</span></div>` : ''}
      <div class="tot-row grand"><span>${t('quote_total')}</span><span>${fmt(grandTotal)}</span></div>
    </div>
  </div>

</div>
</body>
</html>`;
}

// Open the print-ready quotation in a new tab.
function openQuotePdf(data) {
  const w = window.open('', '_blank');
  if (!w) {
    toast('Popup blocked — allow popups for this site', 'error');
    return false;
  }
  w.document.write(buildQuoteHtml(data));
  w.document.close();
  return true;
}

// Persist the quote (create or update) and open its PDF. Auto-save on generate.
window.saveQuote = async function () {
  const issuerName = (settings['inv_name'] || '').trim();
  if (!issuerName) {
    toast(t('quote_no_issuer'), 'error');
    return;
  }

  const grid = document.querySelector('#modal-body .form-grid[data-quote-id]');
  const editId = grid && grid.dataset.quoteId ? grid.dataset.quoteId : '';
  const payload = readQuoteForm();

  let ref;
  // Top-right date on the PDF = when the quote was created. On edit keep the
  // original created_at; on a new quote it is being created right now.
  let created = new Date().toISOString().slice(0, 10);
  try {
    if (editId) {
      await api.put(`/api/quotes/${editId}`, payload);
      ref = grid.dataset.quoteRef || '';
      created = grid.dataset.quoteCreated || created;
      toast(t('quote_updated'));
    } else {
      const res = await api.post('/api/quotes', payload);
      ref = res.ref || '';
      // Keep the local settings cache in sync with the server-side counter bump.
      if (res.number != null) settings['next_quote_number'] = String(res.number + 1);
      toast(t('quote_saved'));
    }
  } catch (e) {
    toast(e.message || 'Error', 'error');
    return;
  }

  openQuotePdf({ ...payload, ref, created_at: created });
  closeModal();
  if (state.view === 'quotes') renderQuotes();
};

// ── Quotes (Orçamentos) list ──────────────────────────────
async function renderQuotes() {
  const el = document.getElementById('view-quotes');
  const quotes = await api.get('/api/quotes');
  state.quotes = quotes;

  const locale = state.lang === 'pt' ? 'pt-PT' : 'en-GB';
  const fmt = n => (n != null && !isNaN(n) ? parseFloat(n).toFixed(2) + ' ' + getCurrency() : '—');
  const statusOpts = cur =>
    ['pending', 'accepted', 'rejected']
      .map(s => `<option value="${s}"${cur === s ? ' selected' : ''}>${t('quote_status_' + s)}</option>`)
      .join('');

  el.innerHTML = `
    <div class="section-header">
      <span class="section-title">${t('quotes_title')}</span>
    </div>

    <div id="quotes-list">
      ${
        quotes.length === 0
          ? `<div class="empty"><div class="empty-icon">📄</div><div class="empty-title">${t('quote_empty')}</div></div>`
          : quotes
              .map(q => {
                const { grandTotal } = quoteTotals(q);
                const dateStr = q.date ? new Date(q.date).toLocaleDateString(locale) : '';
                return `
            <div class="client-item" style="flex-direction:column;align-items:stretch;gap:8px">
              <div style="display:flex;justify-content:space-between;gap:10px">
                <div style="min-width:0">
                  <div class="client-name">${escapeHtml(q.ref || '')}</div>
                  <div class="client-detail">${escapeHtml(q.client_name || '—')}${dateStr ? ' · ' + dateStr : ''}</div>
                </div>
                <div style="font-weight:800;color:var(--accent);flex-shrink:0">${fmt(grandTotal)}</div>
              </div>
              <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">
                <select class="form-control" style="width:auto;padding:4px 8px;font-size:12px" onchange="setQuoteStatus(${q.id}, this.value)">
                  ${statusOpts(q.status || 'pending')}
                </select>
                <button class="btn btn-secondary btn-sm" onclick="editQuote(${q.id})">${t('quote_edit')}</button>
                <button class="btn btn-ghost btn-sm" onclick="viewQuotePdf(${q.id})">${t('quote_view_pdf')}</button>
                <button class="btn btn-ghost btn-sm" onclick="duplicateQuote(${q.id})">${t('quote_duplicate')}</button>
                <button class="btn btn-ghost btn-sm" onclick="convertQuoteToService(${q.id})">${t('quote_to_service')}</button>
                <button class="btn btn-danger btn-sm" onclick="deleteQuote(${q.id})">${t('quote_delete')}</button>
              </div>
            </div>`;
              })
              .join('')
      }
    </div>
  `;
}

window.editQuote = async function (id) {
  const q = await api.get(`/api/quotes/${id}`);
  openQuoteModal(q);
};

window.duplicateQuote = async function (id) {
  const q = await api.get(`/api/quotes/${id}`);
  delete q.id;
  delete q.ref;
  delete q.number;
  delete q.created_at;
  q.status = 'pending';
  openQuoteModal(q); // no id → saved as a brand-new quote
};

window.viewQuotePdf = async function (id) {
  const q = await api.get(`/api/quotes/${id}`);
  openQuotePdf(q);
};

window.setQuoteStatus = async function (id, status) {
  const q = (state.quotes || []).find(x => x.id === id);
  if (!q) return;
  await api.put(`/api/quotes/${id}`, { ...q, status });
  q.status = status;
  toast(t('quote_updated'));
};

window.deleteQuote = async function (id) {
  const q = (state.quotes || []).find(x => x.id === id);
  const label = (q && q.ref) || id;
  if (!confirm(`${t('confirm_remove_quote')} "${label}"?`)) return;
  await api.del(`/api/quotes/${id}`);
  toast(`"${label}" ${t('toast_quote_removed')}`);
  renderQuotes();
};

// Convert an accepted quote into a service: opens the service form prefilled
// with the overlapping fields so the user only confirms date/hours and saves.
window.convertQuoteToService = async function (id) {
  const q = await api.get(`/api/quotes/${id}`);
  const prefill = {
    client_id: q.client_id || undefined,
    description: q.description || '',
    operator_rate: q.operator_rate,
    machine_rate: q.machine_rate,
    travel_fee: q.travel_fee,
    discount: q.discount,
    vat_rate: q.vat_rate,
  };
  openModal(t('form_new_service'), serviceFormHtml(prefill));
  toast(t('toast_quote_converted'));
};

function newService() {
  openModal(t('form_new_service'), serviceFormHtml());
}

window.onDateChange = function (isNew) {
  if (!isNew) return;
  const todayStr = new Date().toISOString().slice(0, 10);
  const dateVal = document.getElementById('f-date')?.value;
  const statusEl = document.getElementById('f-status');
  if (!dateVal || !statusEl) return;
  statusEl.value = dateVal > todayStr ? 'scheduled' : 'completed';
};

// ── Agenda / Calendar ─────────────────────────────────────
async function renderAgenda() {
  const el = document.getElementById('view-agenda');
  const [monthServices, upcoming] = await Promise.all([
    api.get(`/api/services?month=${state.month}&year=${state.year}`),
    api.get('/api/appointments/upcoming'),
  ]);
  state.calendarServices = monthServices;

  const byDay = {};
  for (const s of monthServices) {
    if (!byDay[s.date]) byDay[s.date] = [];
    byDay[s.date].push(s);
  }

  el.innerHTML = `
    <div class="section-header">
      <span class="section-title">${t('agenda_title')}</span>
      <div style="display:flex;gap:6px;align-items:center">
        <button class="btn btn-sm btn-primary" onclick="scheduleNew()">${t('agenda_new_appt')}</button>
        <div class="month-picker">
          <button id="agenda-prev">‹</button>
          <span class="month-label">${t('months_short')[state.month - 1]} ${state.year}</span>
          <button id="agenda-next">›</button>
        </div>
      </div>
    </div>

    <div class="card" style="padding:10px">
      ${renderCalendarGrid(state.year, state.month, byDay, state.calendarSelectedDay)}
    </div>

    <div id="day-detail-panel"></div>

    <div class="card" style="margin-top:12px">
      <div class="section-title" style="margin-bottom:12px">${t('agenda_upcoming')}</div>
      ${renderUpcomingList(upcoming)}
    </div>
  `;

  document.getElementById('agenda-prev').onclick = () => {
    state.month--;
    if (state.month < 1) {
      state.month = 12;
      state.year--;
    }
    state.calendarSelectedDay = null;
    renderAgenda();
  };
  document.getElementById('agenda-next').onclick = () => {
    state.month++;
    if (state.month > 12) {
      state.month = 1;
      state.year++;
    }
    state.calendarSelectedDay = null;
    renderAgenda();
  };

  el.querySelectorAll('.upcoming-item').forEach(item => {
    item.addEventListener('click', () => editService(parseInt(item.dataset.id)));
  });

  if (state.calendarSelectedDay) {
    const dayServices = state.calendarServices.filter(s => s.date === state.calendarSelectedDay);
    renderDayPanel(state.calendarSelectedDay, dayServices);
  }
}

function renderCalendarGrid(year, month, byDay, selectedDay) {
  const firstDay = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const today = new Date().toISOString().slice(0, 10);

  // Mon-first offset: JS getDay() is 0=Sun,1=Mon..6=Sat → (day+6)%7 → Mon=0
  const startOffset = (firstDay.getDay() + 6) % 7;

  const cells = [];
  for (let i = 0; i < startOffset; i++) {
    cells.push(`<div class="cal-cell cal-empty"></div>`);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const services = byDay[dateStr] || [];
    const isToday = dateStr === today;
    const isSelected = dateStr === selectedDay;

    const MAX_CHIPS = 2;
    const chips = services
      .slice(0, MAX_CHIPS)
      .map(s => {
        const label = escapeHtml((s.client_name || s.description || '—').slice(0, 12));
        const cls = s.status === 'scheduled' ? 'cal-event-scheduled' : 'cal-event-completed';
        return `<div class="cal-event ${cls}" onclick="event.stopPropagation();editService(${s.id})">${label}</div>`;
      })
      .join('');
    const overflow =
      services.length > MAX_CHIPS ? `<div class="cal-event-more">+${services.length - MAX_CHIPS}</div>` : '';

    const classes = ['cal-cell', isToday ? 'cal-today' : '', isSelected ? 'cal-selected' : '']
      .filter(Boolean)
      .join(' ');

    cells.push(`
      <div class="${classes}" data-date="${dateStr}" onclick="selectCalDay('${dateStr}')">
        <span class="cal-day-num">${d}</span>
        ${chips}${overflow}
      </div>`);
  }

  const totalCells = cells.length;
  const remainder = totalCells % 7;
  if (remainder !== 0) {
    for (let i = 0; i < 7 - remainder; i++) cells.push(`<div class="cal-cell cal-empty"></div>`);
  }

  const headers = t('weekdays_short')
    .map(d => `<div class="cal-header-cell">${d}</div>`)
    .join('');
  return `<div class="cal-weekdays">${headers}</div><div class="cal-days">${cells.join('')}</div>`;
}

window.selectCalDay = function (dateStr) {
  state.calendarSelectedDay = dateStr;
  document.querySelectorAll('.cal-cell').forEach(c => {
    c.classList.toggle('cal-selected', c.dataset.date === dateStr);
  });
  const services = state.calendarServices.filter(s => s.date === dateStr);
  renderDayPanel(dateStr, services);
};

function renderDayPanel(dateStr, services) {
  const panel = document.getElementById('day-detail-panel');
  if (!panel) return;
  panel.innerHTML = `
    <div class="card" style="margin-top:10px">
      <div class="section-title" style="margin-bottom:10px">
        ${t('agenda_day_services')} — ${formatDate(dateStr)}
      </div>
      ${
        services.length === 0
          ? `<div class="empty-sub" style="color:var(--text3);padding:12px 0">${t('agenda_no_day')}</div>`
          : services.map(s => serviceCard(s)).join('')
      }
    </div>
  `;
  panel.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => editService(parseInt(item.dataset.id)));
  });
}

function renderUpcomingList(upcoming) {
  if (!upcoming.length) {
    return `<div class="empty-sub" style="color:var(--text3);padding:4px 0">${t('agenda_no_upcoming')}</div>`;
  }
  const groups = {};
  for (const s of upcoming) {
    if (!groups[s.date]) groups[s.date] = [];
    groups[s.date].push(s);
  }
  return Object.entries(groups)
    .map(
      ([date, services]) => `
    <div class="upcoming-group">
      <div class="upcoming-date-label">${formatDate(date)}</div>
      ${services
        .map(
          s => `
        <div class="upcoming-item service-item" data-id="${s.id}" style="cursor:pointer">
          <div class="service-top">
            <div>
              <div class="service-client">${escapeHtml(s.client_name || '—')}</div>
              ${s.description ? `<div class="service-description">${escapeHtml(s.description)}</div>` : ''}
              ${s.start_time ? `<div class="service-date">${s.start_time}${s.end_time ? ' – ' + s.end_time : ''}</div>` : ''}
            </div>
            <div class="payment-tag scheduled">${t('tag_scheduled')}</div>
          </div>
        </div>
      `
        )
        .join('')}
    </div>
  `
    )
    .join('');
}

window.scheduleNew = function () {
  const date = state.calendarSelectedDay || new Date().toISOString().slice(0, 10);
  openModal(t('form_new_service'), serviceFormHtml({ date, status: 'scheduled' }));
};

// ── Map picker ────────────────────────────────────────────
const mapPicker = {
  map: null,
  marker: null,
  targetId: null,
  resolvedAddress: '',
  lat: null,
  lng: null,
  onConfirm: null,
};

window.openMapPicker = function (targetInputId) {
  mapPicker.targetId = targetInputId;
  mapPicker.resolvedAddress = '';
  mapPicker.lat = null;
  mapPicker.lng = null;
  mapPicker.onConfirm = null;

  diag.log('openMapPicker', { target: targetInputId });

  // Hard guard: if Leaflet itself didn't load, nothing below will work. This
  // is the single most common cause of "map never shows" — surface it loudly
  // instead of throwing silently inside requestAnimationFrame.
  if (typeof L === 'undefined') {
    diag.error('Leaflet global "L" is undefined — /vendor/leaflet/leaflet.js did not load/execute');
    toast(t('map_lib_error'), 'error');
    return;
  }

  const overlay = document.getElementById('map-picker-overlay');
  overlay.classList.remove('hidden');

  // Update i18n strings in the static HTML
  document.getElementById('map-search-input').placeholder = t('map_search_placeholder');
  document.getElementById('map-resolved-address').textContent = t('map_drag_hint');
  overlay.querySelector('.map-picker-footer .btn-primary').textContent = t('map_confirm');
  document.getElementById('map-search-results').innerHTML = '';
  document.getElementById('map-search-input').value = '';

  requestAnimationFrame(() => {
    try {
      if (!mapPicker.map) {
        // Pin Leaflet's image path to the locally-hosted vendor copy so that
        // browser privacy settings / ad-blockers cannot block an external CDN.
        L.Icon.Default.imagePath = '/vendor/leaflet/images/';

        // Default center: Portugal
        mapPicker.map = L.map('map-leaflet').setView([39.5, -8.0], 6);

        const tiles = L.tileLayer('/api/tiles/{z}/{x}/{y}.png', {
          attribution: '© <a href="https://www.openstreetmap.org">OpenStreetMap</a>',
          maxZoom: 19,
        });
        let tileErrors = 0,
          tilesLoaded = 0;
        tiles.on('tileerror', err => {
          tileErrors++;
          if (tileErrors === 1) {
            diag.error('tile load failed (tiles blocked or offline)', err && err.tile && err.tile.src);
            toast(t('map_tiles_error'), 'error');
          }
        });
        tiles.on('load', () => {
          tilesLoaded++;
          diag.log('tiles loaded ok', { tilesLoaded, tileErrors });
        });
        tiles.addTo(mapPicker.map);

        mapPicker.marker = L.marker([39.5, -8.0], { draggable: true }).addTo(mapPicker.map);
        mapPicker.marker.on('dragend', () => {
          const { lat, lng } = mapPicker.marker.getLatLng();
          reverseGeocode(lat, lng);
        });
        mapPicker.map.on('click', e => {
          mapPicker.marker.setLatLng(e.latlng);
          reverseGeocode(e.latlng.lat, e.latlng.lng);
        });

        // Deterministically fix tile rendering: invalidate the map size the
        // moment the container actually gets non-zero dimensions, rather than
        // guessing with fixed timeouts (which raced and left the map blank).
        const container = document.getElementById('map-leaflet');
        if (window.ResizeObserver) {
          const ro = new ResizeObserver(() => {
            if (container.clientHeight > 0) mapPicker.map.invalidateSize();
          });
          ro.observe(container);
        }
        diag.log('map created');
      }

      const c = document.getElementById('map-leaflet');
      diag.log('map container size', { w: c.clientWidth, h: c.clientHeight });
      if (c.clientHeight === 0) diag.warn('map container has zero height — tiles will not render until it has size');

      mapPicker.map.invalidateSize();

      // If there's an existing address, try to show it on the map
      const existing = document.getElementById(targetInputId)?.value?.trim();
      if (existing) geocodeForMap(existing);
    } catch (err) {
      diag.error('openMapPicker init failed', err);
      toast(t('map_lib_error'), 'error');
    }
  });
};

async function reverseGeocode(lat, lng) {
  mapPicker.lat = lat;
  mapPicker.lng = lng;
  const hint = document.getElementById('map-resolved-address');
  hint.textContent = t('map_locating');
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`;
    const r = await fetch(url, { headers: { 'Accept-Language': state.lang === 'pt' ? 'pt' : 'en' } });
    diag.log('reverseGeocode', { status: r.status, lat, lng });
    if (!r.ok) throw new Error(`Nominatim HTTP ${r.status}`);
    const data = await r.json();
    const addr = buildAddressString(data.address) || data.display_name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
    mapPicker.resolvedAddress = addr;
    hint.textContent = addr;
  } catch (err) {
    diag.error('reverseGeocode failed', err);
    // Still fall back to coordinates so the user can confirm a location.
    const coords = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
    mapPicker.resolvedAddress = coords;
    hint.textContent = coords;
  }
}

function buildAddressString(a) {
  if (!a) return '';
  const parts = [];
  if (a.road) parts.push(a.house_number ? `${a.road} ${a.house_number}` : a.road);
  const city = a.city || a.town || a.village || a.municipality || a.county;
  if (city) parts.push(city);
  if (a.postcode) parts.push(a.postcode);
  if (a.country && parts.length < 2) parts.push(a.country);
  return parts.join(', ');
}

async function geocodeAddress(query) {
  try {
    const r = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`,
      { headers: { 'Accept-Language': state.lang === 'pt' ? 'pt' : 'en' } }
    );
    diag.log('geocodeAddress', { status: r.status, query });
    if (!r.ok) throw new Error(`Nominatim HTTP ${r.status}`);
    const data = await r.json();
    return data[0] || null;
  } catch (err) {
    diag.error('geocodeAddress failed', err);
    return null;
  }
}

async function geocodeForMap(query) {
  const result = await geocodeAddress(query);
  if (result) {
    const lat = parseFloat(result.lat);
    const lon = parseFloat(result.lon);
    mapPicker.map.setView([lat, lon], 15);
    mapPicker.marker.setLatLng([lat, lon]);
    mapPicker.lat = lat;
    mapPicker.lng = lon;
    mapPicker.resolvedAddress = query;
    document.getElementById('map-resolved-address').textContent = query;
  }
}

let mapSearchTimeout;
window.onMapSearch = function (query) {
  clearTimeout(mapSearchTimeout);
  const results = document.getElementById('map-search-results');
  if (!query.trim()) {
    results.innerHTML = '';
    return;
  }
  mapSearchTimeout = setTimeout(async () => {
    try {
      const r = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=5&addressdetails=1`,
        { headers: { 'Accept-Language': state.lang === 'pt' ? 'pt' : 'en' } }
      );
      diag.log('onMapSearch', { status: r.status, query });
      if (!r.ok) throw new Error(`Nominatim HTTP ${r.status}`);
      const data = await r.json();
      results.innerHTML = data.length
        ? data
            .map(
              (item, i) => `
            <div class="map-search-result" data-idx="${i}">
              ${escapeHtml(item.display_name)}
            </div>`
            )
            .join('')
        : `<div class="map-search-result map-no-result">${t('map_no_results')}</div>`;
      if (data.length) {
        const _results = data;
        results.querySelectorAll('[data-idx]').forEach(el => {
          el.addEventListener('click', () => {
            const item = _results[+el.dataset.idx];
            selectMapResult(item.lat, item.lon, item.display_name);
          });
        });
      }
    } catch (err) {
      diag.error('onMapSearch failed', err);
      results.innerHTML = `<div class="map-search-result map-no-result">${t('map_search_error')}</div>`;
    }
  }, 400);
};

window.selectMapResult = function (lat, lon, displayName) {
  const latlng = [parseFloat(lat), parseFloat(lon)];
  mapPicker.map.setView(latlng, 16);
  mapPicker.marker.setLatLng(latlng);
  mapPicker.lat = parseFloat(lat);
  mapPicker.lng = parseFloat(lon);
  if (displayName) {
    mapPicker.resolvedAddress = displayName;
    document.getElementById('map-resolved-address').textContent = displayName;
  }
  document.getElementById('map-search-results').innerHTML = '';
  document.getElementById('map-search-input').value = '';
  reverseGeocode(lat, lon);
};

window.useMyLocation = function () {
  if (!navigator.geolocation) {
    toast('Geolocation not supported', 'error');
    return;
  }
  document.getElementById('map-resolved-address').textContent = t('map_locating');
  navigator.geolocation.getCurrentPosition(
    pos => {
      const { latitude, longitude } = pos.coords;
      mapPicker.map.setView([latitude, longitude], 16);
      mapPicker.marker.setLatLng([latitude, longitude]);
      reverseGeocode(latitude, longitude);
    },
    () => toast(t('map_locating'), 'error')
  );
};

window.confirmMapPicker = function () {
  if (mapPicker.resolvedAddress && mapPicker.targetId) {
    const input = document.getElementById(mapPicker.targetId);
    if (input) {
      input.value = mapPicker.resolvedAddress;
      input.dispatchEvent(new Event('input'));
    }
  }
  if (mapPicker.onConfirm && mapPicker.lat != null) {
    mapPicker.onConfirm(mapPicker.lat, mapPicker.lng, mapPicker.resolvedAddress);
  }
  mapPicker.onConfirm = null;
  closeMapPicker();
};

window.closeMapPicker = function () {
  document.getElementById('map-picker-overlay').classList.add('hidden');
  document.getElementById('map-search-results').innerHTML = '';
};

// ── Travel fee distance helpers ───────────────────────────

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.asin(Math.sqrt(a));
}

async function getRoadDistanceKm(lat1, lng1, lat2, lng2) {
  try {
    const r = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${lng1},${lat1};${lng2},${lat2}?overview=false`
    );
    const d = await r.json();
    if (d.code === 'Ok' && d.routes?.length) return d.routes[0].distance / 1000;
  } catch (_) {}
  return haversineKm(lat1, lng1, lat2, lng2);
}

function applyTravelFeeFormula(distKm) {
  const pricePerKm = parseFloat(settings['travel_price_per_km'] || '1');
  const step = parseFloat(settings['travel_fee_step'] || '5');
  const minFee = parseFloat(settings['travel_min_fee'] || '20');
  const raw = distKm * pricePerKm;
  const stepped = Math.ceil(raw / step) * step;
  return Math.max(minFee, stepped);
}

async function getBaseCoords() {
  const cachedLat = parseFloat(settings['base_lat']);
  const cachedLng = parseFloat(settings['base_lng']);
  if (!isNaN(cachedLat) && !isNaN(cachedLng)) return { lat: cachedLat, lng: cachedLng };
  const addr = (settings['base_address'] || '').trim();
  if (!addr) return null;
  const result = await geocodeAddress(addr);
  if (!result) return null;
  const lat = parseFloat(result.lat),
    lng = parseFloat(result.lon);
  saveSetting('base_lat', String(lat));
  saveSetting('base_lng', String(lng));
  return { lat, lng };
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
        <button class="btn btn-ghost btn-sm" style="margin-top:6px" type="button" onclick="openMapPicker('new-client-address')">${t('map_pick')}</button>
      </div>
      <button class="btn btn-primary" onclick="addClient()" style="width:100%">${t('client_add')}</button>
    </div>

    <div id="clients-list">
      ${
        state.clients.length === 0
          ? `<div class="empty"><div class="empty-icon">👤</div><div class="empty-title">${t('no_clients')}</div></div>`
          : state.clients
              .map(
                c => `
          <div class="client-item">
            <div style="flex:1;min-width:0">
              <div class="client-name">${escapeHtml(c.name)}</div>
              ${c.phone ? `<div class="client-detail">📞 ${escapeHtml(c.phone)}</div>` : ''}
              ${c.address ? `<div class="client-detail">📍 ${escapeHtml(c.address)}</div>` : ''}
            </div>
            <div style="display:flex;gap:6px;flex-shrink:0">
              <button class="btn btn-secondary btn-sm" onclick="editClient(${c.id})">${t('client_edit')}</button>
              <button class="btn btn-danger btn-sm" data-cid="${c.id}" data-cname="${escapeHtml(c.name)}" onclick="deleteClient(+this.dataset.cid, this.dataset.cname)">${t('client_remove')}</button>
            </div>
          </div>
        `
              )
              .join('')
      }
    </div>
  `;

  document.getElementById('new-client-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') addClient();
  });
}

window.addClient = async function () {
  const input = document.getElementById('new-client-input');
  const name = input.value.trim();
  if (!name) return;
  const phone = document.getElementById('new-client-phone').value.trim();
  const address = document.getElementById('new-client-address').value.trim();
  const result = await api.post('/api/clients', { name, phone, address });
  if (result.error) {
    toast(result.error, 'error');
    return;
  }
  toast(`"${name}" ${t('toast_client_added')}`);
  input.value = '';
  document.getElementById('new-client-phone').value = '';
  document.getElementById('new-client-address').value = '';
  state.clients = await api.get('/api/clients');
  renderClients();
};

window.editClient = function (id) {
  const c = state.clients.find(x => x.id === id);
  if (!c) return;
  openModal(
    t('client_details_title'),
    `
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
      <button class="btn btn-ghost btn-sm" style="margin-top:6px" type="button" onclick="openMapPicker('edit-client-address')">${t('map_pick')}</button>
    </div>
    <div style="display:flex;gap:8px;margin-top:8px">
      <button class="btn btn-secondary" style="flex:1" onclick="closeModal()">${t('form_cancel')}</button>
      <button class="btn btn-primary" style="flex:1" onclick="saveClient(${id})">${t('client_save')}</button>
    </div>
  `
  );
};

window.saveClient = async function (id) {
  const name = document.getElementById('edit-client-name').value.trim();
  if (!name) {
    toast(t('toast_client_name_required'), 'error');
    return;
  }
  const phone = document.getElementById('edit-client-phone').value.trim();
  const address = document.getElementById('edit-client-address').value.trim();
  const result = await api.put(`/api/clients/${id}`, { name, phone, address });
  if (result.error) {
    toast(result.error, 'error');
    return;
  }
  toast(`"${name}" ${t('toast_client_updated')}`);
  closeModal();
  state.clients = await api.get('/api/clients');
  renderClients();
};

window.deleteClient = async function (id, name) {
  if (!confirm(`${t('confirm_remove_client')} "${name}"?\n${t('confirm_remove_client_suffix')}`)) return;
  await api.del(`/api/clients/${id}`);
  toast(`"${name}" ${t('toast_client_removed')}`);
  renderClients();
};

// ── Offline badge ─────────────────────────────────────────
function updateOfflineBadge() {
  let badge = document.getElementById('offline-badge');
  if (!navigator.onLine) {
    if (!badge) {
      badge = document.createElement('div');
      badge.id = 'offline-badge';
      badge.textContent = '⚠ Offline';
      badge.style.cssText =
        'position:fixed;top:8px;right:8px;background:#c0392b;color:#fff;padding:4px 10px;border-radius:6px;font-size:12px;font-weight:700;z-index:9999';
      document.body.appendChild(badge);
    }
  } else {
    if (badge) badge.remove();
  }
}

window.addEventListener('online', async () => {
  updateOfflineBadge();
  if (isReplaying || offlineQueue.length === 0) return;
  isReplaying = true;
  let synced = 0;
  while (offlineQueue.length > 0) {
    const req = offlineQueue[0];
    try {
      const opts = { method: req.method, headers: { 'Content-Type': 'application/json' } };
      if (req.body != null) opts.body = JSON.stringify(req.body);
      const r = await fetch(req.path, opts);
      if (r.status >= 400 && r.status < 500) {
        offlineQueue.shift(); // skip 4xx errors
      } else if (!r.ok) {
        break; // network/server error — stop and retry later
      } else {
        offlineQueue.shift();
        synced++;
      }
    } catch (e) {
      break; // still offline
    }
  }
  isReplaying = false;
  if (synced > 0) {
    toast(`Synced ${synced} pending change${synced > 1 ? 's' : ''}`);
    renderView(state.view);
  }
});

window.addEventListener('offline', updateOfflineBadge);

// ── Init ──────────────────────────────────────────────────
async function init() {
  // Migrate legacy localStorage keys (pre-v0.6)
  const lsKeyMigrations = {
    default_preco_hora: 'default_price_per_hour',
    default_price_per_hour: 'default_operator_rate',
    default_deslocacao: 'default_travel_fee',
    default_pago: 'default_paid',
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

  // Load settings from server and populate settings object
  try {
    const serverSettings = await api.get('/api/settings');
    // Merge server settings into settings object and localStorage (cache)
    Object.assign(settings, serverSettings);
    for (const [k, v] of Object.entries(serverSettings)) {
      localStorage.setItem(k, v);
    }
    // Push any localStorage keys not on server up to the server
    const keysToSync = [
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
      'lubelogger_url',
      'lubelogger_api_key',
      'lubelogger_vehicle_id',
    ];
    const toSync = {};
    for (const k of keysToSync) {
      if (serverSettings[k] == null && localStorage.getItem(k) != null) {
        toSync[k] = localStorage.getItem(k);
        settings[k] = localStorage.getItem(k);
      }
    }
    if (Object.keys(toSync).length > 0) {
      api.patch('/api/settings', toSync).catch(() => {});
    }
  } catch (_) {
    // Offline or server error — fall back to localStorage
    const keysToLoad = [
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
      'lubelogger_url',
      'lubelogger_api_key',
      'lubelogger_vehicle_id',
    ];
    for (const k of keysToLoad) {
      if (localStorage.getItem(k) != null) settings[k] = localStorage.getItem(k);
    }
  }

  // Re-apply theme from settings (may have changed)
  const resolvedTheme = settings['theme'] || 'dark';
  document.documentElement.setAttribute('data-theme', resolvedTheme);
  // Update state.lang from settings
  if (settings['lang']) state.lang = settings['lang'];

  // Show offline badge if needed
  updateOfflineBadge();

  // Nav — apply translations and attach click handlers
  const navKeyMap = {
    dashboard: 'nav_dashboard',
    list: 'nav_lista',
    clients: 'nav_clientes',
    quotes: 'nav_orcamentos',
    settings: 'nav_settings',
    agenda: 'nav_agenda',
  };
  document.querySelectorAll('.nav-btn').forEach(btn => {
    const key = navKeyMap[btn.dataset.view];
    if (key) btn.querySelector('span').textContent = t(key);
    btn.addEventListener('click', () => navigate(btn.dataset.view));
  });

  // FAB — shows a two-item menu (New Service / New Quote)
  const fab = document.getElementById('fab');
  const fabMenu = document.getElementById('fab-menu');
  const fabNewService = document.getElementById('fab-new-service');
  const fabNewQuote = document.getElementById('fab-new-quote');
  function updateFabLabels() {
    if (fabNewService) fabNewService.textContent = '📋 ' + t('form_new_service');
    if (fabNewQuote) fabNewQuote.textContent = '📄 ' + t('quote_new');
  }
  updateFabLabels();
  window._updateFabLabels = updateFabLabels;

  function closeFabMenu() {
    fabMenu?.classList.add('hidden');
  }
  fab.addEventListener('click', e => {
    e.stopPropagation();
    fabMenu?.classList.toggle('hidden');
  });
  fabNewService?.addEventListener('click', () => {
    closeFabMenu();
    openModal(t('form_new_service'), serviceFormHtml());
  });
  fabNewQuote?.addEventListener('click', () => {
    closeFabMenu();
    openQuoteModal();
  });
  document.addEventListener('click', e => {
    if (!fabMenu?.classList.contains('hidden') && !fab.contains(e.target) && !fabMenu.contains(e.target)) {
      closeFabMenu();
    }
  });

  // Modal close (only via the explicit close button, not by clicking the backdrop)
  document.getElementById('modal-close').addEventListener('click', closeModal);

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

  const defaultOperatorRate = settings['default_operator_rate'] || '';
  const defaultMachineRate = settings['default_machine_rate'] || '';
  const baseAddress = settings['base_address'] || '';
  const baseCoordsSet = !!settings['base_lat'];
  const travelPricePerKm = settings['travel_price_per_km'] || '1';
  const travelFeeStep = settings['travel_fee_step'] || '5';
  const travelMinFee = settings['travel_min_fee'] || '20';
  const defaultDeslocacao = settings['default_travel_fee'] || '';
  const defaultPago = settings['default_paid'] || '0';
  const currency = getCurrency();
  const theme = settings['theme'] || 'dark';

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
      <input type="file" id="restore-input" accept=".slb,.db,.sqlite,application/octet-stream"
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

    <!-- Auto Travel Fee -->
    <div class="card" style="margin-bottom:12px">
      <div class="section-title" style="margin-bottom:12px">${t('settings_travel_calc')}</div>
      <div class="form-group" style="margin-bottom:10px">
        <label class="form-label">${t('settings_base_address')}</label>
        <div style="display:flex;gap:6px;align-items:center">
          <input type="text" class="form-control" id="base-address-input"
                 placeholder="${t('settings_base_address_placeholder')}"
                 value="${escapeHtml(baseAddress)}"
                 oninput="saveSetting('base_address',this.value);delete settings['base_lat'];delete settings['base_lng'];localStorage.removeItem('base_lat');localStorage.removeItem('base_lng')">
          <button class="btn btn-ghost btn-sm" onclick="openBaseAddressPicker()" style="white-space:nowrap">
            ${t('map_pick')}
          </button>
        </div>
        <div id="base-address-hint" style="font-size:11px;color:var(--text3);margin-top:4px${baseAddress ? '' : ';display:none'}">
          ${baseCoordsSet ? '📍 ' + t('settings_base_set') : '⚠ ' + t('map_drag_hint')}
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('settings_price_per_km')}</label>
          <input type="number" class="form-control" step="0.1" min="0" value="${escapeHtml(travelPricePerKm)}"
                 oninput="saveSetting('travel_price_per_km', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">${t('settings_fee_step')}</label>
          <input type="number" class="form-control" step="1" min="1" value="${escapeHtml(travelFeeStep)}"
                 oninput="saveSetting('travel_fee_step', this.value)">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('settings_min_fee')}</label>
          <input type="number" class="form-control" step="1" min="0" value="${escapeHtml(travelMinFee)}"
                 oninput="saveSetting('travel_min_fee', this.value)">
        </div>
        <div class="form-group"></div>
      </div>
    </div>

    <!-- Default Values -->
    <div class="card" style="margin-bottom:12px">
      <div class="section-title" style="margin-bottom:12px">${t('settings_defaults')}</div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('settings_default_operator_rate')}</label>
          <input type="number" class="form-control" step="0.5" min="0" value="${escapeHtml(defaultOperatorRate)}"
                 oninput="saveSetting('default_operator_rate', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">${t('settings_default_machine_rate')}</label>
          <input type="number" class="form-control" step="0.5" min="0" value="${escapeHtml(defaultMachineRate)}"
                 oninput="saveSetting('default_machine_rate', this.value)">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('settings_default_travel')}</label>
          <input type="number" class="form-control" step="0.5" min="0" value="${escapeHtml(defaultDeslocacao)}"
                 oninput="saveSetting('default_travel_fee', this.value)">
        </div>
        <div class="form-group"></div>
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
               value="${escapeHtml(settings['inv_name'] || '')}"
               oninput="saveSetting('inv_name', this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">${t('invoice_issuer_address')}</label>
        <textarea class="form-control" style="min-height:56px" placeholder="${t('invoice_issuer_address_placeholder')}"
                  oninput="saveSetting('inv_address', this.value)">${escapeHtml(settings['inv_address'] || '')}</textarea>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('invoice_issuer_nif')}</label>
          <input type="text" class="form-control" placeholder="${t('invoice_issuer_nif_placeholder')}"
                 value="${escapeHtml(settings['inv_nif'] || '')}"
                 oninput="saveSetting('inv_nif', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">${t('invoice_issuer_email')}</label>
          <input type="email" class="form-control" placeholder="${t('invoice_issuer_email_placeholder')}"
                 value="${escapeHtml(settings['inv_email'] || '')}"
                 oninput="saveSetting('inv_email', this.value)">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${t('invoice_issuer_phone')}</label>
        <input type="tel" class="form-control" placeholder="${t('invoice_issuer_phone_placeholder')}"
               value="${escapeHtml(settings['inv_phone'] || '')}"
               oninput="saveSetting('inv_phone', this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">${t('invoice_footer_note')}</label>
        <input type="text" class="form-control" placeholder="${t('invoice_footer_note_placeholder')}"
               value="${escapeHtml(settings['inv_note'] || '')}"
               oninput="saveSetting('inv_note', this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">${t('settings_invoice_number')}</label>
        <input type="number" class="form-control" min="1" value="${escapeHtml(settings['next_invoice_number'] || '1')}"
               oninput="saveSetting('next_invoice_number', this.value)">
      </div>
    </div>

    <!-- Quote Settings -->
    <div class="card" style="margin-bottom:12px">
      <div class="section-title" style="margin-bottom:12px">${t('settings_quote')}</div>
      <div class="form-group">
        <label class="form-label">${t('settings_quote_number')}</label>
        <input type="number" class="form-control" min="1" value="${escapeHtml(settings['next_quote_number'] || '1')}"
               oninput="saveSetting('next_quote_number', this.value)">
      </div>
    </div>

    <!-- LubeLogger Integration -->
    <div class="card" style="margin-bottom:12px">
      <div class="section-title" style="margin-bottom:12px">${t('settings_lubelogger')}</div>
      <div style="font-size:12px;color:var(--text3);margin-bottom:10px">${t('settings_lubelogger_sub')}</div>
      <div class="form-group">
        <label class="form-label">${t('settings_lubelogger_url')}</label>
        <input type="text" class="form-control" placeholder="${t('settings_lubelogger_url_placeholder')}"
               value="${escapeHtml(settings['lubelogger_url'] || '')}"
               oninput="saveSetting('lubelogger_url', this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">${t('settings_lubelogger_key')}</label>
        <input type="password" class="form-control" autocomplete="off"
               value="${escapeHtml(settings['lubelogger_api_key'] || '')}"
               onfocus="if (this.value === '••••••••') this.value = ''"
               oninput="saveSetting('lubelogger_api_key', this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">${t('settings_lubelogger_vehicle_id')}</label>
        <input type="number" class="form-control" min="1" step="1"
               value="${escapeHtml(settings['lubelogger_vehicle_id'] || '')}"
               oninput="saveSetting('lubelogger_vehicle_id', this.value)">
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

    <!-- Extra Stats -->
    <div class="card" style="margin-bottom:12px">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px">
        <div>
          <div class="section-title">${t('settings_extra_stats')}</div>
          <div style="font-size:12px;color:var(--text3);margin-top:2px">${t('settings_extra_stats_sub')}</div>
        </div>
        <label class="toggle-switch">
          <input type="checkbox" id="extra-stats-toggle"
                 ${settings['extra_stats'] === '1' ? 'checked' : ''}
                 onchange="saveSetting('extra_stats', this.checked ? '1' : '0'); renderDashboard && navigate('dashboard')">
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>

    <!-- Data Statistics -->
    <div class="card" style="margin-bottom:12px">
      <div class="section-title" style="margin-bottom:12px">${t('settings_data_stats')}</div>
      ${[
        [t('settings_total_services'), stats.totalServices],
        [t('settings_total_clients'), stats.totalClients],
        [t('settings_total_quotes'), stats.totalQuotes],
        [t('settings_total_attachments'), stats.totalAttachments],
        [t('settings_db_size'), formatBytes(stats.dbSizeBytes)],
        [t('settings_uploads_size'), formatBytes(stats.uploadsSizeBytes)],
        [t('settings_total_size'), formatBytes((stats.dbSizeBytes || 0) + (stats.uploadsSizeBytes || 0))],
        [t('settings_date_range'), stats.dateRange?.first ? stats.dateRange.first + ' → ' + stats.dateRange.last : '—'],
      ]
        .map(
          ([label, value], i, arr) => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;${i < arr.length - 1 ? 'border-bottom:1px solid var(--border)' : ''}">
          <span class="stat-label">${label}</span>
          <span style="font-size:13px">${value}</span>
        </div>`
        )
        .join('')}
    </div>

    <!-- Version -->
    <div class="card" style="margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span class="stat-label">${t('settings_version')}</span>
        <span>ServiLog v${version.version}</span>
      </div>
    </div>

    <!-- Diagnostics -->
    <div class="card" style="margin-bottom:12px">
      <div class="section-title" style="margin-bottom:4px">${t('settings_diagnostics')}</div>
      <div style="font-size:12px;color:var(--text3);margin-bottom:10px">${t('settings_diag_sub')}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-secondary btn-sm" onclick="runMapDiagnostics()">${t('settings_diag_test')}</button>
        <button class="btn btn-secondary btn-sm" onclick="sendTestEmail()">${t('settings_diag_send_test')}</button>
        <button class="btn btn-secondary btn-sm" onclick="copyDiagnostics()">${t('settings_diag_copy')}</button>
      </div>
      <pre id="diag-output" style="display:none;margin-top:10px;padding:10px;background:var(--bg3);border:1px solid var(--border);border-radius:8px;font-size:11px;line-height:1.5;white-space:pre-wrap;word-break:break-word;max-height:240px;overflow:auto"></pre>
    </div>

    <!-- Session / Logout -->
    <div class="card">
      <div class="section-title" style="margin-bottom:12px">${t('settings_session')}</div>
      <form method="POST" action="/logout">
        <button type="submit" class="btn btn-secondary btn-sm">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" style="vertical-align:-2px;margin-right:5px">
            <path d="M13 3h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4"/>
            <polyline points="9 15 14 10 9 5"/>
            <line x1="14" y1="10" x2="3" y2="10"/>
          </svg>${t('settings_logout')}
        </button>
      </form>
    </div>
  `;
}

// ── Settings helpers ──────────────────────────────────────

// Runs live connectivity checks for the three things the map depends on:
// the Leaflet library, the OSM tile server, and the Nominatim geocoder.
// Results are written both to the diagnostics log and to the on-screen panel.
window.runMapDiagnostics = async function () {
  const out = document.getElementById('diag-output');
  out.style.display = 'block';
  out.textContent = t('settings_diag_testing');

  const lines = [];
  const ok = t('settings_diag_ok'),
    fail = t('settings_diag_fail');

  // 1) Leaflet library loaded?
  const leafletOk = typeof L !== 'undefined';
  lines.push(`Leaflet (L): ${leafletOk ? ok + ' v' + (L.version || '?') : fail}`);
  diag.log('diag: leaflet', leafletOk);

  // 2) Local vendor asset reachable?
  try {
    const r = await fetch('/vendor/leaflet/leaflet.js', { method: 'HEAD' });
    lines.push(`/vendor/leaflet/leaflet.js: ${r.ok ? ok : fail} (HTTP ${r.status})`);
    diag.log('diag: vendor leaflet.js', r.status);
  } catch (e) {
    lines.push(`/vendor/leaflet/leaflet.js: ${fail} (${e.message})`);
    diag.error('diag vendor', e);
  }

  // 3) Tile proxy reachable?
  await new Promise(resolve => {
    const img = new Image();
    const timer = setTimeout(() => {
      lines.push(`Tile proxy: ${fail} (timeout)`);
      diag.error('diag tiles timeout');
      resolve();
    }, 6000);
    img.onload = () => {
      clearTimeout(timer);
      lines.push(`Tile proxy: ${ok}`);
      diag.log('diag tiles ok');
      resolve();
    };
    img.onerror = () => {
      clearTimeout(timer);
      lines.push(`Tile proxy: ${fail} (error)`);
      diag.error('diag tiles error');
      resolve();
    };
    img.src = '/api/tiles/0/0/0.png?' + Date.now();
  });

  // 4) Nominatim geocoder reachable?
  try {
    const r = await fetch('https://nominatim.openstreetmap.org/search?q=Leiria&format=json&limit=1');
    const data = r.ok ? await r.json() : null;
    lines.push(`Nominatim: ${r.ok && data && data.length ? ok : fail} (HTTP ${r.status})`);
    diag.log('diag nominatim', r.status, data && data.length);
  } catch (e) {
    lines.push(`Nominatim: ${fail} (${e.message})`);
    diag.error('diag nominatim', e);
  }

  lines.push('', '— recent log —', diag.dump());
  out.textContent = lines.join('\n');
};

window.copyDiagnostics = async function () {
  const out = document.getElementById('diag-output');
  out.style.display = 'block';
  const text = `ServiLog diagnostics @ ${new Date().toISOString()}\nUA: ${navigator.userAgent}\nURL: ${location.href}\n\n${diag.dump()}`;
  if (out.textContent.trim() === '' || out.textContent === t('settings_diag_testing')) out.textContent = text;
  try {
    await navigator.clipboard.writeText(text);
    toast(t('settings_diag_copied'));
  } catch (_) {
    // Clipboard API unavailable (e.g. non-HTTPS) — fall back to showing the text to copy manually.
    out.textContent = text;
  }
};

window.sendTestEmail = async function () {
  const btn = [...document.querySelectorAll('.btn')].find(b => b.textContent.trim() === t('settings_diag_send_test'));
  if (btn) {
    btn.disabled = true;
    btn.textContent = t('settings_diag_sending');
  }
  try {
    const r = await fetch('/api/notify/test', { method: 'POST' });
    const data = await r.json();
    if (r.ok) {
      toast(`${t('settings_diag_smtp_ok')} ${data.to}`, 'success');
    } else {
      const msg =
        data.error === 'SMTP not configured'
          ? t('settings_diag_smtp_not_configured')
          : `${t('settings_diag_smtp_fail')}: ${data.error}`;
      toast(msg, 'error');
    }
  } catch (_) {
    toast(t('settings_diag_smtp_fail'), 'error');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = t('settings_diag_send_test');
    }
  }
};

window.openBaseAddressPicker = function () {
  mapPicker.onConfirm = (lat, lng, addr) => {
    saveSetting('base_address', addr);
    saveSetting('base_lat', String(lat));
    saveSetting('base_lng', String(lng));
    const inp = document.getElementById('base-address-input');
    if (inp) inp.value = addr;
    const hint = document.getElementById('base-address-hint');
    if (hint) {
      hint.style.display = '';
      hint.textContent = '📍 ' + t('settings_base_set');
    }
  };
  openMapPicker('base-address-input');
};

window.saveSetting = function (key, value) {
  settings[key] = value;
  localStorage.setItem(key, value);
  api.patch('/api/settings', { [key]: value }).catch(() => {});
  if (key === 'lubelogger_url' || key === 'lubelogger_api_key' || key === 'lubelogger_vehicle_id') {
    lubeloggerState.data = null;
    lubeloggerState.fetchedAt = 0;
  }
};

window.setLang = function (lang) {
  state.lang = lang;
  saveSetting('lang', lang);
  const navKeyMap = {
    dashboard: 'nav_dashboard',
    list: 'nav_lista',
    clients: 'nav_clientes',
    quotes: 'nav_orcamentos',
    settings: 'nav_settings',
    agenda: 'nav_agenda',
  };
  document.querySelectorAll('.nav-btn').forEach(btn => {
    const key = navKeyMap[btn.dataset.view];
    if (key) btn.querySelector('span').textContent = t(key);
  });
  if (window._updateFabLabels) window._updateFabLabels();
  renderSettings();
};

window.setTheme = function (theme) {
  saveSetting('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  renderSettings();
};

window.triggerRestore = function () {
  document.getElementById('restore-input').click();
};

window.doRestore = async function (input) {
  if (!input.files[0]) return;
  if (!confirm(t('confirm_restore'))) {
    input.value = '';
    return;
  }
  try {
    const r = await fetch('/api/backup/restore', {
      method: 'POST',
      headers: { 'Content-Type': 'application/octet-stream' },
      body: input.files[0],
    });
    const result = await r.json();
    if (result.error) {
      toast(result.error, 'error');
      return;
    }
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
