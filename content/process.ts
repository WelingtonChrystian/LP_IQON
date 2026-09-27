/**
 * Processo de trabalho e expectativa de resultado
 * (fonte: "Playbook Operacional" e "Etapa 01 - Imersão e Briefing").
 */
export type Step = {
  title: string;
  text: string;
  /** Frase curta que fecha a etapa. */
  note: string;
};

export const processSection = {
  title: "Você sabe o que acontece depois que chama a IQON.",
};

export const steps: Step[] = [
  {
    title: "Entendemos",
    text: "Você conta o momento da empresa, os desafios e onde sente que a comunicação não está funcionando.",
    note: "Sem proposta pronta antes de entender o cenário.",
  },
  {
    title: "Mergulhamos",
    text: "Fazemos a imersão na marca, organizamos referências, público, diferenciais, tom de voz e objetivos.",
    note: "Antes de produzir, entendemos.",
  },
  {
    title: "Construímos",
    text: "Transformamos a estratégia em posicionamento, conteúdo, campanhas e direcionamentos comerciais.",
    note: "Cada frente conversa com a outra.",
  },
  {
    title: "Colocamos no ar",
    text: "Publicamos os conteúdos e ativamos as campanhas planejadas.",
    note: "A estratégia começa a encontrar o mercado.",
  },
  {
    title: "Analisamos",
    text: "Acompanhamos dados, identificamos o que merece atenção e ajustamos a rota.",
    note: "Marketing não é uma peça pronta. É um processo de aprendizado.",
  },
];

/**
 * Expectativa de resultado. Não transforme este bloco em cronograma: sem meses,
 * fases com prazo ou previsão de quando os clientes chegam.
 */
export const results = {
  title: "O resultado não acontece em uma linha reta.",
  paragraphs: [
    "Cada empresa parte de um lugar diferente. Segmento, oferta, concorrência, histórico, investimento e capacidade comercial influenciam o ritmo.",
    "Por isso, não vendemos uma fórmula que diz quando você terá resultado.",
    "Construímos as condições para que sua marca tenha mais clareza, alcance, confiança e capacidade de conversão.",
  ],
  closing: "Não prometemos milagre. Construímos método.",
};
