/**
 * "Quatro partes. Uma estratégia.": como a IQON conecta o trabalho.
 * Cada parte mostra o mecanismo (`text`) e a transformação que ele gera (`result`).
 * O detalhe de cada entrega fica em content/services.ts.
 */
export type SystemPart = { id: string; name: string; text: string; result: string };

export const systemSection = {
  title: "Quatro partes. Uma estratégia.",
  intro:
    "A IQON reúne as principais etapas da presença digital em uma única operação estratégica.",
  closing: "Uma estratégia só funciona quando as partes puxam para o mesmo lado.",
};

export const systemParts: SystemPart[] = [
  {
    id: "posicionamento",
    name: "Posicionamento",
    text: "Primeiro, entendemos o que torna sua empresa relevante e como isso precisa ser percebido.",
    result: "Você deixa de parecer apenas mais uma opção.",
  },
  {
    id: "conteudo",
    name: "Conteúdo",
    text: "Transformamos esse posicionamento em uma presença que informa, diferencia e permanece na memória.",
    result: "Seu Instagram passa a trabalhar a favor da sua marca.",
  },
  {
    id: "trafego",
    name: "Tráfego",
    text: "Colocamos a mensagem diante das pessoas certas e usamos os dados para otimizar o que está funcionando.",
    result: "Mídia deixa de ser simplesmente “impulsionar”.",
  },
  {
    id: "atendimento",
    name: "Atendimento",
    text: "Organizamos a experiência depois do contato para que oportunidades não sejam perdidas por falta de processo.",
    result: "A conversa passa a ter direção.",
  },
];
