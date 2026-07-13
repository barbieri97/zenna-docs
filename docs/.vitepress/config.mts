import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'pt-BR',
  title: 'Zenna',
  description: 'Central de Ajuda do Zenna — Gestão Clínica para psicólogos',
  base: '/', // domínio próprio; se publicar em github.io/<repo>, troque para '/<repo>/'
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap',
      },
    ],
  ],

  themeConfig: {
    siteTitle: 'Zenna',

    nav: [
      { text: 'Início', link: '/' },
      { text: 'Primeiros passos', link: '/primeiros-passos/' },
      {
        text: 'Guias',
        link: '/pacientes/',
        activeMatch: '^/(pacientes|agenda|contratos|financas|documentos|dashboard|assinatura|configuracoes)/',
      },
    ],

    sidebar: [
      {
        text: 'Primeiros passos',
        collapsed: false,
        items: [
          { text: 'Comece por aqui', link: '/primeiros-passos/' },
          { text: 'Criar sua conta', link: '/primeiros-passos/criar-conta' },
          { text: 'Entrar e sair', link: '/primeiros-passos/entrar-e-sair' },
          { text: 'Recuperar senha', link: '/primeiros-passos/recuperar-senha' },
          { text: 'Conhecendo o Zenna', link: '/primeiros-passos/conhecendo-o-zenna' },
        ],
      },
      {
        text: 'Dashboard',
        collapsed: true,
        items: [{ text: 'Visão geral', link: '/dashboard/' }],
      },
      {
        text: 'Pacientes',
        collapsed: true,
        items: [
          { text: 'Visão geral', link: '/pacientes/' },
          { text: 'Cadastrar paciente', link: '/pacientes/cadastrar' },
          { text: 'Responsáveis', link: '/pacientes/responsaveis' },
          { text: 'Buscar e filtrar', link: '/pacientes/buscar-e-filtrar' },
          { text: 'Editar e desativar', link: '/pacientes/editar-e-desativar' },
          { text: 'Lembretes de sessão', link: '/pacientes/lembretes-de-sessao' },
        ],
      },
      {
        text: 'Agenda',
        collapsed: true,
        items: [
          { text: 'Visão geral', link: '/agenda/' },
          { text: 'Agendar uma consulta', link: '/agenda/nova-consulta' },
          { text: 'Sessões recorrentes', link: '/agenda/recorrencia' },
          { text: 'Editar, remarcar e apagar', link: '/agenda/editar-remarcar-apagar' },
          { text: 'Concluir uma sessão', link: '/agenda/concluir-sessao' },
          { text: 'Confirmação de presença', link: '/agenda/confirmacao-de-presenca' },
        ],
      },
      {
        text: 'Contratos',
        collapsed: true,
        items: [
          { text: 'Visão geral', link: '/contratos/' },
          { text: 'Por Sessão', link: '/contratos/por-sessao' },
          { text: 'Mensalidade', link: '/contratos/mensalidade' },
          { text: 'Avaliação Fixa', link: '/contratos/avaliacao-fixa' },
          { text: 'Sessões Pré-pagas', link: '/contratos/sessoes-pre-pagas' },
          { text: 'Política de faltas', link: '/contratos/politica-de-faltas' },
          { text: 'Editar e encerrar', link: '/contratos/editar-e-encerrar' },
        ],
      },
      {
        text: 'Finanças',
        collapsed: true,
        items: [
          { text: 'Visão geral', link: '/financas/' },
          { text: 'Criar uma cobrança', link: '/financas/nova-cobranca' },
          { text: 'Registrar pagamento', link: '/financas/registrar-pagamento' },
          { text: 'Receber com PIX', link: '/financas/pix' },
          { text: 'Enviar e baixar cobranças', link: '/financas/enviar-e-baixar' },
          { text: 'Fluxo de caixa', link: '/financas/fluxo-de-caixa' },
        ],
      },
      {
        text: 'Documentos',
        collapsed: true,
        items: [
          { text: 'Visão geral', link: '/documentos/' },
          { text: 'Enviar um arquivo', link: '/documentos/enviar-arquivo' },
          { text: 'Criar um documento', link: '/documentos/criar-documento' },
          { text: 'Usando o editor', link: '/documentos/editor' },
          { text: 'Assistente de IA', link: '/documentos/assistente-ia' },
        ],
      },
      {
        text: 'Assinatura',
        collapsed: true,
        items: [
          { text: 'Visão geral', link: '/assinatura/' },
          { text: 'Mudar de plano', link: '/assinatura/mudar-de-plano' },
          { text: 'Créditos extras', link: '/assinatura/creditos-extras' },
        ],
      },
      {
        text: 'Configurações',
        collapsed: true,
        items: [
          { text: 'Perfil', link: '/configuracoes/perfil' },
          { text: 'Dados bancários', link: '/configuracoes/dados-bancarios' },
          { text: 'Tipos de sessão', link: '/configuracoes/tipos-de-sessao' },
        ],
      },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Buscar',
            buttonAriaLabel: 'Buscar na Central de Ajuda',
          },
          modal: {
            displayDetails: 'Mostrar detalhes',
            resetButtonTitle: 'Limpar busca',
            backButtonTitle: 'Voltar',
            noResultsText: 'Nenhum resultado para',
            footer: {
              selectText: 'para selecionar',
              navigateText: 'para navegar',
              closeText: 'para fechar',
            },
          },
        },
      },
    },

    outline: { label: 'Nesta página' },
    docFooter: { prev: 'Anterior', next: 'Próximo' },
    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Mudar para o tema claro',
    darkModeSwitchTitle: 'Mudar para o tema escuro',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Voltar ao topo',
    lastUpdated: { text: 'Atualizado em' },

    footer: {
      message: 'Zenna — Gestão Clínica',
    },
  },
})
