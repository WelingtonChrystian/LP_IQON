/**
 * Manifesto & Princípios Estratégicos — Síntese ágil.
 */
export const manifesto = {
  titleLines: [
    "A maioria das empresas oferece pacotes prontos.",
    "A IQON começa entendendo o seu negócio.",
  ],
  subtitle:
    "Empurrar serviços padronizados não resolve gargalos estruturais. Diagnosticamos a causa real antes de recomendar qualquer investimento.",
};

export type Principle = {
  number: string;
  title: string;
  text: string;
};

export const principles: Principle[] = [
  {
    number: "01",
    title: "Diagnóstico antes da prescrição",
    text: "Investigamos onde estão os gargalos reais para que você invista apenas no que faz sentido agora.",
  },
  {
    number: "02",
    title: "Método acima de fórmulas prontas",
    text: "Toda decisão estratégica é calibrada com dados do seu negócio, sem modismos ou receitas de bolo.",
  },
  {
    number: "03",
    title: "Posicionamento acima de volume",
    text: "Postar sem parar não constrói autoridade. Cada comunicação precisa ter intenção e diferenciar sua marca.",
  },
  {
    number: "04",
    title: "O marketing não termina no clique",
    text: "Atrair atenção é só o início. A velocidade do atendimento e o processo de vendas decidem o fechamento.",
  },
];
