/**
 * Manifesto e princípios (fonte: "Posicionamento IQON").
 */
export const manifesto = {
  titleLines: ["O mercado está cheio de gente que posta.", "A IQON existe para construir."],
  /** O argumento: por que uma marca cresce. */
  argument: [
    "Uma marca não cresce porque publicou mais uma arte na terça-feira.",
    "Cresce quando as pessoas certas entendem quem ela é, reconhecem seu valor e encontram uma razão para começar uma conversa.",
  ],
  /** A posição da IQON diante disso. */
  stance:
    "É por isso que a IQON não separa posicionamento, conteúdo, mídia e atendimento em departamentos que não conversam.",
  closing: "Construímos o caminho inteiro.",
};

/** `closing` é a frase que fecha o princípio, destacada na página. */
export type Principle = { title: string; paragraphs: string[]; closing: string };

export const principles: Principle[] = [
  {
    title: "Método acima de opinião",
    paragraphs: [
      "Não criamos por criar.",
      "Toda decisão tem uma razão estratégica. Você pode perguntar, discordar e participar do processo. Se houver um argumento melhor, a estratégia muda.",
    ],
    closing: "Método não é fazer tudo igual. É saber por que cada escolha existe.",
  },
  {
    title: "Autenticidade acima de performance vazia",
    paragraphs: [
      "Sua marca não precisa fingir ser algo que não é para parecer interessante.",
      "A IQON organiza a comunicação, mas preserva aquilo que só você pode oferecer: sua experiência, sua voz e a realidade do seu negócio.",
    ],
    closing: "A gente estrutura. Você continua sendo você.",
  },
  {
    title: "Posicionamento acima de volume",
    paragraphs: [
      "Não trabalhamos para preencher um calendário.",
      "Cada conteúdo precisa cumprir uma função: explicar, diferenciar, gerar percepção, criar confiança ou conduzir uma próxima ação.",
    ],
    closing: "Mais conteúdo não é necessariamente mais presença.",
  },
  {
    title: "Marketing não termina no anúncio",
    paragraphs: [
      "Uma campanha pode levar alguém até você. Uma comunicação pode fazer essa pessoa prestar atenção.",
      "Mas é a experiência depois do clique que decide o que acontece a seguir.",
    ],
    closing: "Por isso, estratégia, mídia e atendimento precisam conversar.",
  },
];
