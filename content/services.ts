/**
 * Frentes de Atuação — Arquitetura modular sintetizada e escaneável.
 */
export type ActionFront = {
  id: string;
  shortName: string;
  name: string;
  headline: string;
  audience: string;
  delivers: string[];
  outcome: string;
};

export const frontsOfActionSection = {
  tagline: "Capacidades Modulares",
  title: "Frentes combinadas para o seu momento.",
  intro:
    "A IQON não vende pacotes engessados. Nossas especialidades são combinadas após o diagnóstico do seu negócio.",
};

export const actionModules: ActionFront[] = [
  {
    id: "estrategia",
    shortName: "Estratégia & Marca",
    name: "Estratégia e Posicionamento",
    headline: "Para sua marca deixar de ser comparada por preço e passar a ser escolhida.",
    audience: "Empresas com serviços de excelência que não conseguem comunicar seu diferencial.",
    delivers: [
      "Diagnóstico e proposta única de valor",
      "Posicionamento estratégico de mercado",
      "Identidade verbal, narrativa e tom de voz",
      "Diferenciação clara da concorrência",
    ],
    outcome: "Sua empresa ganha autoridade e uma razão evidente para ser escolhida.",
  },
  {
    id: "conteudo",
    shortName: "Conteúdo & Autoridade",
    name: "Conteúdo e Autoridade",
    headline: "Para construir consistência e desejo sem transformar você em escravo das redes.",
    audience: "Negócios que precisam de presença digital relevante com foco em conversão.",
    delivers: [
      "Planejamento editorial com foco em vendas",
      "Roteiros estratégicos para vídeos e Reels",
      "Copywriting persuasivo e mensagens de valor",
      "Direção criativa de comunicação",
    ],
    outcome: "Cada conteúdo passa a cumprir uma função clara de atração e valor.",
  },
  {
    id: "aquisicao",
    shortName: "Aquisição & Tráfego",
    name: "Aquisição e Performance",
    headline: "Para conectar seu negócio às pessoas certas com engenharia de dados.",
    audience: "Empresas que querem mídia paga com mensuração técnica e previsibilidade.",
    delivers: [
      "Campanhas estruturadas no Meta e Google Ads",
      "Segmentação qualificada e novos públicos",
      "Parametrização técnica de conversão",
      "Otimização contínua de verba e testes",
    ],
    outcome: "Mídia paga com retorno mensurável, integrada ao funil de vendas.",
  },
  {
    id: "presenca",
    shortName: "Presença & Rotinas",
    name: "Presença e Organização Operacional",
    headline: "Para manter a regularidade digital e dar fluidez às rotinas do negócio.",
    audience: "Empresas que precisam manter frequência digital e rotinas de relacionamento organizadas.",
    delivers: [
      "Gestão do calendário e agendamento de posts",
      "Suporte à consistência de presença",
      "Apoio em rotinas, demandas e agendas",
      "Organização de processos com clientes",
    ],
    outcome: "Consistência de marca e rotinas previsíveis sem sobrecarregar sua equipe.",
  },
  {
    id: "comercial",
    shortName: "Comercial & Vendas",
    name: "Processo Comercial e Conversão",
    headline: "Para transformar contatos em vendas concretas com agilidade e método.",
    audience: "Negócios que recebem leads, mas sofrem com demora ou equipe sem padrão de atendimento.",
    delivers: [
      "Diagnóstico do atendimento no WhatsApp",
      "Scripts e fluxos de qualificação de leads",
      "Padronização da jornada de vendas",
      "Treinamento e orientação de equipe",
    ],
    outcome: "Sua equipe atende com velocidade, método e alta taxa de fechamento.",
  },
];

export const customScope = {
  title: "Como funciona a contratação sob medida",
  points: [
    {
      title: "Solução focada na dor real",
      text: "Você contrata apenas as frentes que atacam seu gargalo atual. Sem empurrar serviços desnecessários.",
    },
    {
      title: "Escopo transparente",
      text: "Definimos com clareza o que está incluso e o que não faz parte do trabalho desde o primeiro dia.",
    },
    {
      title: "Responsabilidades claras",
      text: "A IQON assume a inteligência e execução; você paga a mídia direto às plataformas e valida as etapas.",
    },
    {
      title: "Sem fidelidade forçada",
      text: "Trabalhamos com aviso prévio de 30 dias sem multas. Nossa permanência se sustenta no método e na confiança.",
    },
  ],
};
