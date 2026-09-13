/**
 * O QUE EXISTE DENTRO DO APLICATIVO.
 * Organizado por utilidade, não por quantidade de aulas.
 */

export type InsideBlock = {
  icon: "chat" | "play" | "headphones" | "target" | "chart" | "trophy" | "list" | "repeat";
  title: string;
  body: string;
};

export const INSIDE_MAIN: InsideBlock[] = [
  {
    icon: "chat",
    title: "Método guiado de 30 dias",
    body: "Uma sequência com começo, meio e fim. Você não escolhe por onde começar nem fica perdido numa lista de aulas: o app já mostra qual é o dia de hoje.",
  },
  {
    icon: "play",
    title: "Videoaulas e aulas práticas",
    body: "Conteúdo curto, feito para quem tem cliente esperando. Cada aula trata de uma situação específica do atendimento, não de teoria de vendas em geral.",
  },
  {
    icon: "target",
    title: "68 lições e atividades",
    body: "A profundidade está aí. Mas o que importa é que cada lição termina em alguma coisa para você fazer — não em mais um vídeo assistido.",
  },
  {
    icon: "list",
    title: "WhatsApp Business na prática",
    body: "A ferramenta arrumada do jeito que ajuda a vender: o que configurar, o que organizar e o que parar de fazer no improviso.",
  },
];

export const INSIDE_SECONDARY: InsideBlock[] = [
  {
    icon: "repeat",
    title: "Sequência de estudos",
    body: "O app segura a linha por você. Cada dia abre onde o anterior parou.",
  },
  {
    icon: "trophy",
    title: "Metas e conquistas",
    body: "Gamificação com uma função só: fazer você voltar amanhã.",
  },
  {
    icon: "chart",
    title: "Acompanhamento de progresso",
    body: "Quanto do método você já percorreu e o que falta para fechar o ciclo.",
  },
  {
    icon: "headphones",
    title: "Podcasts e áudios",
    body: "Para continuar no trajeto, na fila e entre um cliente e outro.",
  },
];

/** Frase honesta sobre o que o app não é. Fica logo abaixo da lista. */
export const INSIDE_DISCLAIMER =
  "O aplicativo não responde cliente por você. Ele não é chatbot, não é CRM e não é automação de atendimento. Quem responde continua sendo você — a diferença é saber o que responder.";
