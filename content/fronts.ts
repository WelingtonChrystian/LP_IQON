/**
 * Diagrama das três frentes: presença, autoridade e conversão ao redor da marca.
 *
 * É um sistema, não uma sequência: as três frentes trabalham juntas desde o início.
 * Por isso este conteúdo não leva números, prazos, meses nem setas de "próxima fase".
 */
export type Front = { id: string; name: string; description: string };

export const frontsSection = {
  title: "Sua marca precisa funcionar em três frentes.",
  center: "Sua marca",
  caption: ["Não é uma sequência.", "É um sistema."],
  /** Descrição do diagrama para leitores de tela. */
  diagramLabel:
    "Diagrama com três círculos sobrepostos, presença, autoridade e conversão, e a sua marca no centro, onde os três se encontram.",
};

/** Exatamente três itens: a ordem define a posição no diagrama (topo, base esquerda, base direita). */
export const fronts: readonly [Front, Front, Front] = [
  { id: "presenca", name: "Presença", description: "Ser vista pelas pessoas certas." },
  { id: "autoridade", name: "Autoridade", description: "Deixar claro por que escolher você." },
  {
    id: "conversao",
    name: "Conversão",
    description: "Transformar interesse em conversa comercial.",
  },
];
