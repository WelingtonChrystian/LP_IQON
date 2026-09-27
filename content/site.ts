/**
 * Dados institucionais, navegação, botões, mensagens de WhatsApp e textos do hero.
 * Fonte: site atual (iqonagencia.my.canva.site) e base de conhecimento IQON.
 * Campos vazios ("") não são exibidos na página.
 */
type SiteConfig = {
  name: string;
  /** Título da aba e do compartilhamento. */
  title: string;
  /** Assinatura da marca (rodapé). */
  tagline: string;
  /** Descrição usada nos metadados e no compartilhamento. */
  description: string;
  url: string;
  whatsapp: { number: string; display: string };
  instagram: { url: string; handle: string };
  email: string;
};

export const site: SiteConfig = {
  name: "IQON",
  title: "IQON | Marketing estratégico para sua marca ser escolhida",
  tagline: "Marketing para quem não para.",
  description:
    "Agência de marketing estratégico para negócios locais. Posicionamento, conteúdo, tráfego pago e atendimento trabalhando como uma única estratégia.",
  url: resolveSiteUrl(),
  whatsapp: {
    number: "5551984346415",
    display: "(51) 98434-6415",
  },
  instagram: {
    url: "https://www.instagram.com/iqon.agencia/",
    handle: "@iqon.agencia",
  },
  email: "",
};

/**
 * Domínio público, usado no canonical e no Open Graph: o domínio próprio (NEXT_PUBLIC_SITE_URL)
 * ou, na Vercel, o domínio de produção do projeto.
 */
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const navigation = [
  { label: "Método", href: "#metodo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

/**
 * Rótulos dos botões, na ordem em que aparecem.
 * Acompanham a leitura (entender → identificar → conversar) e todos levam a uma
 * conversa no WhatsApp, exceto `heroSecondary`, que rola até o método.
 */
export const ctas = {
  header: "Conversar com a IQON",
  hero: "Quero entender o que minha marca precisa",
  heroSecondary: { label: "Ver como a IQON trabalha", href: "#metodo" },
  diagnosis: "Identificar meus pontos de atenção",
  system: "Conversar sobre a minha marca",
  scope: "Perguntar sobre o escopo",
  question: "Perguntar no WhatsApp",
  conversation: "Quero conversar com a IQON",
} as const;

/** Mensagens que abrem no WhatsApp. O visitante sempre confirma o envio. */
export const whatsappMessages = {
  default: "Olá, IQON! Quero conversar sobre o marketing da minha empresa.",
  question: "Olá, IQON! Tenho uma dúvida antes de conversar sobre minha empresa.",
  /** Rótulos dos dados do formulário dentro da mensagem. */
  fields: { name: "Nome", business: "Empresa", segment: "Segmento", city: "Cidade" },
  /** Título da lista de dificuldades marcadas (uma ou várias). */
  painsHeading: {
    one: "Hoje, minha principal dificuldade é:",
    many: "Hoje, minhas principais dificuldades são:",
  },
} as const;

export const hero = {
  titleLead: "Sua empresa não precisa aparecer mais.",
  titleSignature: "Precisa ser escolhida.",
  subtitle:
    "Posicionamento, conteúdo, tráfego pago e atendimento trabalhando como uma única estratégia\u00a0— para sua marca ser encontrada, entendida e lembrada por quem pode comprar.",
  /** Vem depois dos nomes da equipe (content/team.ts). */
  teamLine: "estratégia, conteúdo, tráfego e atendimento trabalhando na mesma direção.",
} as const;

export const footer = {
  description:
    "Posicionamento, conteúdo, tráfego e atendimento trabalhando juntos para construir marcas mais claras, relevantes e preparadas para crescer.",
  rights: "Todos os direitos reservados.",
} as const;
