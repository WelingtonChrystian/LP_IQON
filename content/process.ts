/**
 * O Método IQON — Síntese ágil em 3 etapas.
 */
export type Step = {
  number: string;
  stage: string;
  title: string;
  summary: string;
  highlights: string[];
  note: string;
};

export const processSection = {
  tagline: "O Método IQON",
  title: "Primeiro o diagnóstico. Depois, a solução certa.",
  intro:
    "Não começamos perguntando qual serviço você quer contratar. Investigamos a causa raiz para desenhar a solução exata:",
};

export const steps: Step[] = [
  {
    number: "01",
    stage: "Diagnóstico",
    title: "Raio-X do Negócio",
    summary:
      "Investigamos seu ecossistema: atração de clientes, diferenciação de marca, processos de atendimento e gargalos operacionais.",
    highlights: [
      "Leitura precisa da causa raiz",
      "Análise de perda de oportunidades",
      "Sem questionários genéricos",
    ],
    note: "Diagnóstico claro antes de qualquer contratação.",
  },
  {
    number: "02",
    stage: "Planejamento",
    title: "Solução Sob Medida",
    summary:
      "Desenhamos uma combinação personalizada das frentes necessárias para o seu momento, com escopo e entregáveis transparentes.",
    highlights: [
      "Sem pacotes engessados",
      "Entregáveis e limites bem definidos",
      "Investimento focado no que importa",
    ],
    note: "Você só investe no que resolve seu gargalo real.",
  },
  {
    number: "03",
    stage: "Operação",
    title: "Execução Integrada",
    summary:
      "Assumimos a implementação técnica das frentes aprovadas, com acompanhamento próximo, indicadores de negócio e calibração constante.",
    highlights: [
      "Estratégia, tráfego e vendas alinhados",
      "Comunicação direta com a equipe",
      "Otimização contínua com base em dados",
    ],
    note: "Método e melhoria contínua — sem falsas promessas.",
  },
];

export const results = {
  tagline: "Alinhamento & Expectativa",
  title: "O resultado não acontece em uma linha reta.",
  paragraphs: [
    "Cada empresa parte de um ponto diferente. Histórico, ticket, concorrência e preparo comercial influenciam o tempo de maturação.",
    "A IQON não faz promessas vazias como 'fature X em Y dias'. Nosso compromisso é com método rigoroso, execução técnica de alto nível e acompanhamento próximo para construir crescimento consistente.",
  ],
  closing: "Não vendemos atalhos. Construímos método.",
};
