/**
 * Gargalos reais do cliente (síntese cirúrgica para leitura em 5 segundos).
 */
export type PainOption = {
  id: string;
  label: string;
};

export type Pain = PainOption & {
  title: string;
  detail: string;
  tag: string;
};

export const diagnosis = {
  tagline: "Diagnóstico Rápido",
  title: "Onde o seu negócio está travando hoje?",
  intro:
    "O problema nem sempre é falta de postagens. Selecione o que parece familiar para avaliarmos no WhatsApp:",
  legend: "Gargalos frequentes",
  status(count: number) {
    if (count === 0) return "Selecione um ou mais gargalos para o diagnóstico.";
    if (count === 1) return "1 ponto identificado. Já pode ir na sua mensagem.";
    return `${count} pontos identificados. Já podem ir na sua mensagem.`;
  },
};

export const pains: Pain[] = [
  {
    id: "diferenciacao",
    tag: "Posicionamento",
    title: "Marca sem diferenciação clara",
    detail: "Você entrega excelência, mas o cliente não percebe o valor e compara você pelo preço.",
    label: "Minha marca não comunica seu diferencial e disputa por preço",
  },
  {
    id: "indicacao",
    tag: "Aquisição",
    title: "Dependência de indicação",
    detail: "Quando o boca a boca diminui, o faturamento oscila por falta de um canal ativo e previsível.",
    label: "Dependo quase só de indicação e não tenho previsibilidade",
  },
  {
    id: "anuncios",
    tag: "Tráfego",
    title: "Anúncios sem retorno claro",
    detail: "Verba investida em mídia paga sem estratégia, sem mensuração técnica ou sem conversão alinhada.",
    label: "Já investi em anúncios sem retorno claro sobre o investimento",
  },
  {
    id: "atendimento",
    tag: "Conversão",
    title: "Leads esfriam no WhatsApp",
    detail: "Demora na resposta, mensagens engessadas ou falta de condução fazem contatos sumirem sem fechar.",
    label: "Recebo contatos no WhatsApp, mas poucos avançam para a venda",
  },
  {
    id: "presenca",
    tag: "Presença",
    title: "Comunicação inconsistente",
    detail: "A rotina engole o tempo e a comunicação digital fica parada ou vira uma obrigação cansativa.",
    label: "Não consigo manter consistência e autoridade na presença digital",
  },
  {
    id: "processo",
    tag: "Operação",
    title: "Equipe ou processos sem método",
    detail: "Falta padrão na condução comercial e gargalos operacionais prejudicam a experiência do cliente.",
    label: "Falta método na equipe ou nos processos comerciais e operacionais",
  },
];

export const unsureOption: PainOption = {
  id: "nao-sei",
  label: "Quero entender o diagnóstico geral do meu negócio",
};

export const painOptions: PainOption[] = [...pains, unsureOption];
