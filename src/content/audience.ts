/** Para quem é / para quem não é — filtro honesto, não muleta de venda. */

export const FOR_WHO: string[] = [
  "Dono de negócio que responde o próprio cliente no WhatsApp, todo dia.",
  "Prestador de serviço que manda orçamento e depois fica no vácuo.",
  "Comércio local, autônomo e profissional que vende por atendimento.",
  "Quem já investe em anúncio, indicação ou vitrine e sente que perde gente no meio do caminho.",
  "Equipe pequena que precisa atender do mesmo jeito, sem depender de quem pegou o celular.",
];

export const NOT_FOR_WHO: string[] = [
  "Quem procura um robô que responda cliente sozinho — o app não faz isso e não promete isso.",
  "Quem quer script pronto para copiar, colar e não adaptar a nada.",
  "Quem não pretende abrir o aplicativo nem por alguns minutos por dia.",
  "Quem espera que o atendimento melhore sem mudar nada no jeito de atender.",
];

/** Comparação improviso x processo. Nenhum número, nenhuma promessa. */
export type ComparisonRow = {
  topic: string;
  before: string;
  after: string;
};

export const COMPARISON: ComparisonRow[] = [
  {
    topic: "Quando chega um “quanto custa?”",
    before: "Você manda o preço e espera.",
    after: "Você entende o contexto antes de falar em número.",
  },
  {
    topic: "Quando o cliente diz “tá caro”",
    before: "Você dá desconto ou trava.",
    after: "Você sabe qual das quatro coisas ele quis dizer com isso.",
  },
  {
    topic: "Quando ele diz “vou pensar”",
    before: "A conversa acaba ali.",
    after: "A conversa termina com um combinado e uma data.",
  },
  {
    topic: "Quando ele some",
    before: "Você não sabe se manda mensagem ou se parece chato.",
    after: "Você tem motivo, hora e limite para voltar.",
  },
  {
    topic: "De um atendimento para o outro",
    before: "Cada conversa é improvisada do zero.",
    after: "Existe um roteiro seu, que melhora a cada semana.",
  },
  {
    topic: "No fim do mês",
    before: "Você lembra das vendas. Não das que pararam no meio.",
    after: "Você enxerga onde as conversas travam e mexe nesse ponto.",
  },
];
