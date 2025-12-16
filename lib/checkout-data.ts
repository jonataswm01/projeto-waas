// Dados dos modelos/templates disponíveis
export const MODELS = {
  essencial: {
    id: 'essencial' as const,
    name: 'Essencial - Para Começar',
    description: 'Landing Page simples e direta. Perfeita para começar a vender online.',
    style: 'Simples e Direto',
    image: '/essencial-pet-full.png',
    demoUrl: '/sites/essencial-pet',
    planId: 'essencial' as const,
  },
  profissional: {
    id: 'profissional' as const,
    name: 'Profissional - Para Crescer',
    description: 'Site completo com múltiplas páginas. Ideal para empresas que querem parecer grandes.',
    style: 'Exclusivo e Moderno',
    image: '/dentista-full.png',
    demoUrl: '/sites/implantes-premium',
    planId: 'profissional' as const,
  },
  empresarial: {
    id: 'empresarial' as const,
    name: 'Empresarial - Para Empresas',
    description: 'Site institucional completo. Para empresas que precisam de autoridade e credibilidade.',
    style: 'Moderno e Completo',
    image: '/corporativo-nexus-full-site.png',
    demoUrl: '/sites/corporativo-nexus',
    planId: 'empresarial' as const,
  },
} as const

// Preços dos planos
export const PLAN_PRICES = {
  essencial: {
    monthly: 185.9,
    annual: 95.9,
  },
  profissional: {
    monthly: 225.9,
    annual: 125.9,
  },
  empresarial: {
    monthly: 345.9,
    annual: 195.9,
  },
} as const

// Preço do domínio
export const DOMAIN_PRICE_MONTHLY = 10.0 // R$ 10,00 no plano mensal
export const DOMAIN_PRICE_ANNUAL = 0.0 // Grátis no plano anual

// Steps do checkout
export const CHECKOUT_STEPS = [
  {
    number: 1,
    label: 'Configuração',
    nextLabel: 'Revisão',
  },
  {
    number: 2,
    label: 'Revisão',
    nextLabel: 'Identificação',
  },
  {
    number: 3,
    label: 'Identificação',
    nextLabel: 'Pagamento',
  },
  {
    number: 4,
    label: 'Pagamento',
  },
] as const

export type ModelId = keyof typeof MODELS

// Features incluídas em cada plano
export const PLAN_FEATURES = {
  essencial: [
    "Site/LP básica (1 página) responsiva",
    "Seção de serviços/produtos + portfólio enxuto",
    "Contato e WhatsApp integrados",
    "SEO inicial básico para ser achado",
    "Performance otimizada e monitorada",
    "Hospedagem inclusa",
    "SSL grátis",
  ],
  profissional: [
    "Site multipáginas (até 3–4) ou LP avançada",
    "CTAs fortes, provas sociais e estrutura de conversão",
    "Animações/hover/motion pro",
    "Organização por páginas (sobre, serviços, portfólio)",
    "SEO on-page mais completo e performance otimizada",
    "Hospedagem premium",
    "SSL grátis",
  ],
  empresarial: [
    "Site multipáginas completo com serviços individuais",
    "Blog/Notícias para autoridade e SEO contínuo",
    "Efeitos e animações avançadas",
    "Arquitetura pronta para crescer e mais pontos de conversão",
    "Canal de suporte prioritário",
    "Hospedagem premium",
    "SSL grátis",
  ],
} as const
