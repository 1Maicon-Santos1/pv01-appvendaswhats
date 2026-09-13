/**
 * BÔNUS DA OFERTA.
 * Percepção de valor por utilidade — sem ancoragem de preço inventada.
 */

export type Bonus = {
  index: string;
  name: string;
  kicker: string;
  body: string;
  icon: "headphones" | "spark" | "target";
};

export const BONUSES: Bonus[] = [
  {
    index: "Bônus 01",
    name: "Treino de Ouvido",
    kicker: "Biblioteca de áudios e podcasts",
    body: "Nem todo dia dá para sentar e assistir aula. O conteúdo em áudio existe para o trajeto, a fila do banco e o intervalo entre um cliente e outro — os únicos horários livres que um dono de negócio costuma ter.",
    icon: "headphones",
  },
  {
    index: "Bônus 02",
    name: "Checkpoint",
    kicker: "Quizzes de fixação",
    body: "Perguntas rápidas no fim de cada bloco. Servem para uma coisa só: mostrar o que realmente ficou e o que você precisa rever antes de seguir. Aprendizado ativo em vez de conteúdo consumido no automático.",
    icon: "spark",
  },
  {
    index: "Bônus 03",
    name: "Missões Práticas",
    kicker: "Atividades aplicadas ao seu negócio",
    body: "Cada missão sai do aplicativo e vai para uma conversa de verdade. É a diferença entre saber o que responder e já ter respondido daquele jeito pelo menos uma vez.",
    icon: "target",
  },
];
