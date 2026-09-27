/**
 * Serviços (fonte: "Serviços Detalhados" e "Serviço Gestão de Mídias Sociais").
 * Confirme com a equipe antes de publicar qualquer alteração de escopo.
 */
export type Service = {
  id: string;
  /** Nome da frente de trabalho. */
  name: string;
  /** Frase de abertura do serviço. */
  title: string;
  /** Para quem é. */
  audience: string;
  /** O que a IQON faz (as tarefas, para dar transparência). */
  delivers: string;
  /** O que muda para o cliente. */
  outcome: string;
};

export const servicesSection = {
  title: "Do primeiro olhar à conversa comercial.",
  intro: "O que cada parte da estratégia entrega na prática, e para quem ela faz mais diferença.",
  deliversLabel: "O que fazemos",
};

export const coreServices: Service[] = [
  {
    id: "posicionamento",
    name: "Posicionamento",
    title: "Pare de parecer igual.",
    audience: "Para empresas que entregam mais do que conseguem comunicar.",
    delivers:
      "Imersão na marca, definição de posicionamento, tom de voz, identidade verbal e direcionamento estratégico da comunicação.",
    outcome: "Sua marca passa a ter algo claro para dizer\u00a0— e uma razão clara para ser lembrada.",
  },
  {
    id: "conteudo",
    name: "Conteúdo",
    title: "Não poste por postar.",
    audience:
      "Para empresas que precisam manter presença sem transformar o dono em produtor de conteúdo.",
    delivers:
      "Planejamento editorial, conteúdo para feed, legendas, roteiros de Reels, aprovação, publicação e organização da presença digital.",
    outcome: "Cada conteúdo passa a ter uma função dentro da estratégia.",
  },
  {
    id: "trafego",
    name: "Tráfego pago",
    title: "Não é sobre colocar dinheiro no botão.",
    audience:
      "Para empresas que querem usar mídia paga com estratégia, acompanhamento e otimização.",
    delivers:
      "Planejamento, configuração, gestão e otimização de campanhas no Meta Ads e Google Ads, com públicos, mensuração e acompanhamento de desempenho.",
    outcome: "Sua verba trabalha com uma estratégia por trás\u00a0— e não sozinha.",
  },
  {
    id: "atendimento",
    name: "Atendimento e conversão",
    title: "O clique não é o fim.",
    audience:
      "Para empresas que recebem contatos, mas percebem oportunidades esfriando no WhatsApp.",
    delivers:
      "Aula estratégica de atendimento e Manual de Atendimento WhatsApp com scripts, direcionamentos e tratamento de objeções.",
    outcome: "Sua equipe sabe o que fazer quando a oportunidade chega.",
  },
];

export type AdditionalService = { name: string; text: string };

export const additionalServicesTitle = "Também fazemos";

export const additionalServices: AdditionalService[] = [
  {
    name: "Google e SEO local",
    text: "Para sua empresa ser encontrada por quem já está procurando pelo que você oferece.",
  },
  {
    name: "Landing pages",
    text: "Páginas pensadas para transformar atenção em ação.",
  },
  {
    name: "Diagnóstico digital",
    text: "Uma visão externa sobre marca, Instagram, Google, WhatsApp, oferta e jornada do cliente.",
  },
  {
    name: "Agentes de IA",
    text: "Automação para atendimento, suporte, pós-venda e reativação\u00a0— quando fizer sentido para a operação.",
  },
  {
    name: "Identidade visual",
    text: "Para empresas que precisam alinhar a aparência da marca ao posicionamento que querem construir.",
  },
];

export const scope = {
  title: "Sem pacote misterioso. Sem letra miúda.",
  intro:
    "Antes de começar, você sabe exatamente o que a IQON assume, o que depende da sua equipe e o que não faz parte da gestão.",
  includedTitle: "Está incluso",
  included: [
    "Imersão e briefing de marca",
    "Planejamento estratégico",
    "Calendário editorial",
    "Conteúdos para feed",
    "Legendas",
    "Roteiros de Reels",
    "Aprovação e ajustes",
    "Agendamento e publicação",
    "Gestão de Meta Ads",
    "Gestão de Google Ads",
    "Direção estratégica para Stories",
    "Aula de atendimento",
    "Manual de Atendimento WhatsApp",
    "Relatório mensal de desempenho",
  ],
  clientSideTitle: "O que depende de você",
  clientSide: [
    {
      item: "Verba de mídia",
      note: "O investimento em anúncios é pago diretamente à Meta ou ao Google.",
    },
    {
      item: "Stories",
      note: "A IQON orienta o que comunicar e como gravar. A presença espontânea da marca continua sendo sua.",
    },
    {
      item: "Identidade visual",
      note: "Pode ser desenvolvida separadamente quando necessário.",
    },
  ],
};
