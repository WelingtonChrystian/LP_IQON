/**
 * Perguntas frequentes (fonte: "FAQ Comercial", "Posicionamento IQON" e "ICP").
 * Cada item de `answer` é um parágrafo.
 */
export type FaqItem = { question: string; answer: string[] };

export const faqSection = {
  title: "O que você precisa saber antes de começar.",
  intro: "Se ainda ficou alguma dúvida, pergunte direto para a equipe.",
};

export const faq: FaqItem[] = [
  {
    question: "Quanto custa trabalhar com a IQON?",
    answer: [
      "O investimento depende do que sua empresa precisa construir e da complexidade da operação. Primeiro entendemos o cenário; depois apresentamos uma proposta coerente com o trabalho necessário.",
    ],
  },
  {
    question: "A verba dos anúncios está inclusa?",
    answer: [
      "Não. A gestão faz parte do trabalho da IQON, mas a verba de mídia é paga diretamente por você à Meta ou ao Google.",
    ],
  },
  {
    question: "Vocês fazem meus Stories?",
    answer: [
      "A IQON cria a direção estratégica, mas os Stories continuam tendo a sua voz. Ensinamos o que comunicar, como gravar e como transformar o cotidiano da empresa em conteúdo.",
    ],
  },
  {
    question: "Em quanto tempo aparecem resultados?",
    answer: [
      "Não existe um prazo universal. Algumas empresas já possuem oferta, marca, histórico e estrutura comercial preparados; outras precisam primeiro organizar essas bases.",
      "A IQON acompanha o processo desde o início e ajusta a estratégia conforme os dados e a resposta do mercado.",
      "Não usamos uma contagem regressiva para prometer resultado.",
    ],
  },
  {
    question: "Vocês garantem vendas?",
    answer: [
      "Não. Nenhuma agência controla todas as variáveis que determinam uma venda.",
      "O nosso compromisso é com aquilo que está sob nossa responsabilidade: estratégia, execução, acompanhamento e otimização.",
    ],
  },
  {
    // Condição comercial vigente (confirmada pela equipe em 27/09/2026): sem prazo mínimo;
    // qualquer lado encerra com um mês de aviso prévio, sem multa.
    question: "Existe contrato mínimo?",
    answer: [
      "Não. Depois de entender a necessidade da sua empresa, apresentamos um contrato com escopo e combinados claros, sem prazo mínimo.",
      "Você não fica preso: qualquer um dos lados pode encerrar o contrato com um mês de aviso prévio, sem multa.",
    ],
  },
  {
    question: "Quanto eu preciso participar?",
    answer: [
      "Você participa onde a sua presença faz diferença: na imersão, nas aprovações e nos conteúdos que dependem da sua experiência.",
      "O planejamento e a execução ficam com a IQON.",
    ],
  },
  {
    question: "Vocês atendem meu segmento?",
    answer: [
      "Nosso foco são negócios locais que dependem de confiança, percepção de valor e relacionamento para vender.",
      "Entre eles estão empresas de saúde, estética, gastronomia, hospitalidade, serviços e outros negócios locais.",
      "Se o seu segmento for diferente, conversamos sobre o cenário antes de dizer se existe aderência.",
    ],
  },
];
