/**
 * Diagnóstico: dores reais do cliente ideal (ICP IQON).
 * O que o visitante marca aqui ou no formulário final entra na mensagem de WhatsApp.
 */
export type PainOption = {
  id: string;
  /** Texto da opção no formulário final, em primeira pessoa: é o que vai na mensagem. */
  label: string;
};

export type Pain = PainOption & {
  /** Frase do diagnóstico. */
  title: string;
  /** Consequência, logo abaixo da frase. */
  detail: string;
};

export const diagnosis = {
  title: "Onde sua marca está perdendo oportunidades?",
  intro:
    "Marque o que parece familiar. No final, esses pontos podem ir direto para a sua mensagem no WhatsApp\u00a0— para a nossa conversa começar pelo que realmente importa.",
  /** Nome do grupo de opções para leitores de tela. */
  legend: "Pontos que parecem familiares",
  status(count: number) {
    if (count === 0) return "Se preferir, conte tudo para a gente na conversa.";
    if (count === 1) return "1 ponto identificado. Ele já pode ir na sua mensagem.";
    return `${count} pontos identificados. Eles já podem ir na sua mensagem.`;
  },
};

export const pains: Pain[] = [
  {
    id: "indicacao",
    title: "Os clientes chegam quase só por indicação.",
    detail: "Quando a indicação diminui, o movimento também diminui.",
    label: "Dependo demais de indicação",
  },
  {
    id: "instagram",
    title: "Seu Instagram não representa o nível do seu negócio.",
    detail: "Você entrega muito mais do que a sua presença digital consegue mostrar.",
    label: "Meu Instagram não representa meu negócio",
  },
  {
    id: "diferenciacao",
    title: "Sua marca parece igual às concorrentes.",
    detail: "Quando o valor não está claro, o preço acaba virando parte importante da decisão.",
    label: "Minha marca parece igual às concorrentes",
  },
  {
    id: "trafego",
    title: "Você já colocou dinheiro em anúncios sem entender o retorno.",
    detail: "Tráfego acelera uma estratégia. Não substitui uma estratégia.",
    label: "Já investi em anúncios sem retorno claro",
  },
  {
    id: "atendimento",
    title: "As pessoas chegam no WhatsApp, mas poucas avançam.",
    detail: "Atrair atenção não basta quando a conversa comercial não acompanha.",
    label: "Recebo contatos, mas eles não avançam",
  },
];

/** Opção extra, só no formulário final, para quem ainda não identificou o problema. */
export const unsureOption: PainOption = {
  id: "nao-sei",
  label: "Ainda não sei exatamente onde está o problema",
};

/** Todas as opções do formulário, na ordem em que aparecem (e entram na mensagem). */
export const painOptions: PainOption[] = [...pains, unsureOption];
