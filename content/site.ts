/**
 * Dados institucionais, navegação, botões, mensagens de WhatsApp e textos do hero.
 * Reposicionamento estratégico IQON: foco em diagnóstico, frentes modulares e execução integrada.
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
  title: "IQON | Estratégia e Soluções para Negócios",
  tagline: "Primeiro o diagnóstico. Depois, a solução certa.",
  description:
    "Investigamos onde estão os gargalos do seu negócio e estruturamos soluções sob medida em estratégia, performance, processos comerciais e operação.",
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
  { label: "Gargalos", href: "#gargalos" },
  { label: "Método", href: "#metodo" },
  { label: "Frentes", href: "#frentes" },
  { label: "Equipe", href: "#equipe" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

/**
 * Rótulos dos botões na jornada consultiva:
 * Entender o momento → identificar gargalos → conhecer o método → iniciar conversa.
 */
export const ctas = {
  header: "Conversar com a IQON",
  hero: "Quero entender o que meu negócio precisa",
  heroSecondary: { label: "Conhecer o Método IQON", href: "#metodo" },
  diagnosis: "Analisar meus gargalos no WhatsApp",
  system: "Conversar sobre o meu negócio",
  scope: "Entender meu plano sob medida",
  question: "Tirar dúvidas no WhatsApp",
  conversation: "Iniciar conversa de diagnóstico",
} as const;

/** Mensagens que abrem no WhatsApp. O visitante sempre confirma o envio. */
export const whatsappMessages = {
  default:
    "Olá, IQON! Quero entender o que meu negócio precisa para avançar e agendar um diagnóstico.",
  question: "Olá, IQON! Tenho uma dúvida sobre o método e as frentes de atuação.",
  /** Rótulos dos dados do formulário dentro da mensagem. */
  fields: { name: "Nome", business: "Empresa", segment: "Segmento", city: "Cidade" },
  /** Título da lista de dificuldades marcadas (uma ou várias). */
  painsHeading: {
    one: "Identifiquei este gargalo no meu negócio:",
    many: "Identifiquei estes gargalos no meu negócio:",
  },
} as const;

export const hero = {
  titleLead: "Sua empresa não precisa aparecer mais.",
  titleSignature: "Precisa ser escolhida.",
  subtitle:
    "A maioria das empresas oferece pacotes prontos. A IQON começa investigando o seu negócio: identificamos onde estão os gargalos reais em posicionamento, atração, atendimento ou operação — estruturando uma solução sob medida para o seu momento.",
  /** Vem depois dos nomes da equipe (content/team.ts). */
  teamLine:
    "estratégia, performance e processos comerciais trabalhando a partir do mesmo diagnóstico.",
} as const;

export const footer = {
  description:
    "Diagnóstico, estratégia, performance e estruturação comercial trabalhando juntos para construir empresas com diferenciação clara, demanda qualificada e capacidade de conversão.",
  rights: "Todos os direitos reservados.",
} as const;
