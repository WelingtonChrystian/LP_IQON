/**
 * Perguntas frequentes — Respostas diretas e sintetizadas.
 */
export type FaqItem = { question: string; answer: string };

export const faqSection = {
  tagline: "Perguntas Frequentes",
  title: "Dúvidas antes de começar?",
  intro: "Respostas claras e transparentes sobre como trabalhamos:",
};

export const faq: FaqItem[] = [
  {
    question: "A IQON trabalha com pacotes prontos de serviços?",
    answer:
      "Não. Começamos com um diagnóstico (Raio-X) para identificar onde estão as travas reais. A partir dele, recomendamos apenas as frentes que fazem sentido para o seu momento.",
  },
  {
    question: "Preciso contratar todas as frentes de atuação?",
    answer:
      "Não. As frentes são modulares. Se sua empresa precisa apenas de posicionamento e tráfego pago, contratamos essas áreas. Você não paga por serviços desnecessários.",
  },
  {
    question: "Posso contratar apenas uma frente específica?",
    answer:
      "Sim. Se o diagnóstico apontar que o gargalo principal está apenas na aquisição por anúncios ou apenas na estruturação do atendimento comercial, desenhamos uma proposta focada só nisso.",
  },
  {
    question: "Como funciona a conversa de diagnóstico?",
    answer:
      "Conduzimos uma conversa consultiva para entender como você atrai clientes, como atende e onde estão as perdas de oportunidade. É uma leitura personalizada, sem questionários genéricos.",
  },
  {
    question: "Como é definido o valor do investimento?",
    answer:
      "O valor é proporcional ao plano desenhado: as frentes necessárias e a intensidade da operação. Você tem clareza total dos entregáveis e custos antes de qualquer contratação.",
  },
  {
    question: "A verba de anúncios está inclusa no valor?",
    answer:
      "Não. A inteligência, engenharia e otimização das campanhas ficam com a IQON. O orçamento de mídia é pago por você diretamente à Meta ou ao Google, com total transparência.",
  },
  {
    question: "A IQON dá garantia de vendas ou faturamento?",
    answer:
      "Nenhuma empresa séria pode garantir vendas, pois fatores de mercado, produto e concorrência influenciam. O que garantimos é método rigoroso, execução técnica e melhoria contínua.",
  },
  {
    question: "Existe fidelidade ou contrato mínimo?",
    answer:
      "Não prendemos clientes com cláusulas de fidelidade forçada. Trabalhamos com aviso prévio de 30 dias sem multas. Nossa parceria se sustenta no método e na confiança.",
  },
];
