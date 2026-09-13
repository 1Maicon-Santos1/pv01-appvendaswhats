/**
 * Situações concretas de atendimento que o método trata.
 * Formato curto de propósito: o leitor precisa reconhecer, não ler.
 */

export type Situation = {
  quote: string;
  note: string;
};

export const SITUATIONS: Situation[] = [
  { quote: "Tá caro.", note: "Quase nunca é sobre o preço. É sobre o que ele ainda não entendeu do valor." },
  { quote: "Vou pensar e te falo.", note: "É onde a maior parte das negociações trava e nunca mais volta." },
  { quote: "Me passa o orçamento.", note: "Mandar o número e esperar é a forma mais rápida de perder." },
  { quote: "Você faz por menos?", note: "Responder “faço” e responder “não faço” são as duas piores opções." },
  { quote: "Vou falar com minha esposa.", note: "A decisão é de duas pessoas e você só está conversando com uma." },
  { quote: "Depois eu te chamo.", note: "Combinado sem data é combinado que não existe." },
  { quote: "Tô só pesquisando.", note: "Pesquisando é sinal de compra, não de desinteresse. Depende do que vem depois." },
  { quote: "(visualizado)", note: "O silêncio também é uma resposta — e tem o que fazer com ela." },
  { quote: "Me manda mais informações.", note: "Informação demais atrasa decisão. Existe um jeito melhor de responder isso." },
  { quote: "Achei em outro lugar mais barato.", note: "Comparação é uma pergunta disfarçada. Vale saber qual." },
];
