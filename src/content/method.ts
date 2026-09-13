/**
 * MECANISMO DA OFERTA — Método Conversa que Anda.
 * Quatro movimentos que fazem a conversa continuar em vez de parar.
 */

export type Movement = {
  step: string;
  name: string;
  question: string;
  body: string;
};

export const MOVEMENTS: Movement[] = [
  {
    step: "01",
    name: "Ler",
    question: "Onde essa conversa está?",
    body: "Antes de responder, entender o que o cliente realmente disse. “Tá caro” e “não tenho esse valor agora” parecem a mesma frase e pedem respostas completamente diferentes. Quem lê errado responde errado.",
  },
  {
    step: "02",
    name: "Responder",
    question: "O que eu digo aqui?",
    body: "A resposta que devolve clareza em vez de encerrar o assunto. Nada de script decorado: você aprende a lógica por trás da resposta e adapta para o seu produto, seu preço e o seu jeito de falar.",
  },
  {
    step: "03",
    name: "Conduzir",
    question: "Qual é o próximo passo?",
    body: "Toda mensagem sua termina em algum lugar. Ou termina numa decisão, num combinado, numa data — ou termina no silêncio. Conduzir é escolher onde ela termina antes de apertar enviar.",
  },
  {
    step: "04",
    name: "Retomar",
    question: "E quando ele some?",
    body: "Voltar na conversa parada com motivo, com hora e com limite. Existe diferença entre lembrar e perseguir, e ela está no conteúdo da mensagem — não na quantidade.",
  },
];

/** O ciclo diário dentro do aplicativo. */
export type LoopStep = {
  title: string;
  body: string;
};

export const DAILY_LOOP: LoopStep[] = [
  {
    title: "A situação do dia",
    body: "Você abre o app e encontra uma cena de atendimento que já aconteceu com você. Não é teoria: é a conversa travando na sua frente.",
  },
  {
    title: "A explicação curta",
    body: "Uma aula direta sobre o que está acontecendo ali, por que o cliente reagiu assim e o que muda quando você responde de outro jeito.",
  },
  {
    title: "A atividade prática",
    body: "Você aplica no seu WhatsApp, no seu negócio, com as suas palavras. É aqui que o conteúdo sai da tela e entra no atendimento.",
  },
  {
    title: "A fixação",
    body: "Quiz rápido para conferir o que ficou, progresso marcado e a sequência do dia seguinte já esperando. É o que faz você não parar no dia quatro.",
  },
];

/** As quatro semanas da jornada guiada. */
export type Week = {
  label: string;
  title: string;
  focus: string;
  topics: string[];
};

export const WEEKS: Week[] = [
  {
    label: "Semana 1",
    title: "A base do atendimento",
    focus: "Arrumar a porta de entrada antes de tentar fechar mais.",
    topics: [
      "Como a primeira resposta define o resto da conversa",
      "WhatsApp Business organizado para atender de verdade",
      "Abordagem comercial sem parecer robô nem parecer vendedor de rua",
      "O que fazer com quem só manda “oi”",
    ],
  },
  {
    label: "Semana 2",
    title: "Conduzir em vez de informar",
    focus: "Parar de responder pergunta e começar a conduzir a conversa.",
    topics: [
      "Perguntas que revelam o que o cliente realmente quer",
      "Como apresentar preço sem matar a conversa",
      "Persuasão aplicada a texto curto de mensagem",
      "Proposta que termina num próximo passo, não num “vou pensar”",
    ],
  },
  {
    label: "Semana 3",
    title: "Objeção, silêncio e follow-up",
    focus: "O bloco que mexe direto no que estava sendo perdido.",
    topics: [
      "“Tá caro”, “vou pensar”, “vou falar com meu sócio”",
      "Pedido de desconto: quando dar, quando não dar, como responder",
      "Quando voltar numa conversa parada — e com qual mensagem",
      "Como encerrar um atendimento sem deixar a porta batendo",
    ],
  },
  {
    label: "Semana 4",
    title: "Virar processo",
    focus: "Transformar o que você aprendeu em rotina que se repete sozinha.",
    topics: [
      "Organização comercial de quem atende sozinho ou com equipe pequena",
      "Métricas simples: o que olhar toda semana sem virar planilha",
      "Seu roteiro de atendimento, escrito por você",
      "O que fazer todo dia para as conversas não pararem de novo",
    ],
  },
];
