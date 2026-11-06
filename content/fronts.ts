/**
 * Diagrama do sistema: três especialidades trabalhando a partir de um mesmo diagnóstico.
 * Estratégia, Performance e Conversão integradas ao redor do negócio.
 */
export type Front = { id: string; name: string; description: string };

export const frontsSection = {
  title: "Três especialidades. Um mesmo diagnóstico.",
  center: "Seu negócio",
  caption: ["Primeiro o diagnóstico.", "Depois a solução certa."],
  /** Descrição do diagrama para leitores de tela. */
  diagramLabel:
    "Diagrama com três círculos sobrepostos: Estratégia, Performance e Conversão, e o seu negócio no centro, onde os três se integram.",
};

/** Exatamente três itens: topo, base esquerda e base direita no diagrama. */
export const fronts: readonly [Front, Front, Front] = [
  {
    id: "estrategia",
    name: "Estratégia",
    description: "Posicionamento, diferenciação e autoridade de marca.",
  },
  {
    id: "performance",
    name: "Performance",
    description: "Aquisição qualificada, campanhas e inteligência de dados.",
  },
  {
    id: "conversao",
    name: "Conversão",
    description: "Processos comerciais, atendimento ágil e operação.",
  },
];
