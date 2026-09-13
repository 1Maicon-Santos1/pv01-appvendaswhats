import type { AccordionItem } from "@/components/ui/Accordion";
import { OFFER } from "@/config/site";

/**
 * FAQ = tratamento de objeção, não suporte técnico.
 *
 * ATENÇÃO AO PUBLICAR:
 * A pergunta sobre acesso/instalação está escrita de forma intencionalmente
 * neutra porque os detalhes de plataforma (app nativo, PWA, navegador) não
 * foram confirmados. Confirme com o produtor e ajuste o texto — está marcado
 * com TODO abaixo.
 */
export const FAQ: AccordionItem[] = [
  {
    question: "Eu não sou vendedor. Isso serve para mim?",
    answer:
      "Serve principalmente para quem não se considera vendedor. Quem atende o próprio cliente aprendeu a vender na tentativa e erro, e é exatamente aí que as conversas param. O método não te transforma em outra pessoa: ele mostra o que fazer nas situações que já acontecem no seu dia.",
  },
  {
    question: "Meu negócio é pequeno. Vale a pena?",
    answer:
      "Quanto menor o negócio, mais cada conversa pesa. Quem atende cinquenta pessoas por mês sente uma conversa perdida muito mais do que quem atende cinco mil. O conteúdo foi pensado para quem responde o cliente pessoalmente, não para estrutura grande de vendas.",
  },
  {
    question: "Eu uso WhatsApp há anos. Vou aprender alguma coisa?",
    answer:
      "Usar WhatsApp e conduzir uma negociação por WhatsApp são coisas diferentes. Ninguém tem dificuldade em mandar mensagem. A dificuldade é saber o que responder depois de “tá caro”, o que fazer quando o cliente some e quando voltar sem parecer insistente.",
  },
  {
    question: "É curso ou aplicativo?",
    answer:
      "É um aplicativo de treino. Tem conteúdo dentro — videoaulas, aulas práticas, áudios —, mas ele funciona como uma ferramenta de rotina: mostra o dia de hoje, propõe uma atividade, registra o seu progresso e te puxa de volta amanhã. A diferença para um curso é essa: você não assiste até o fim, você pratica até virar hábito.",
  },
  {
    question: "Não tenho tempo. Quanto isso vai tomar do meu dia?",
    answer:
      "O método é dividido em blocos curtos, um por dia, feitos para caber em uma pausa entre atendimentos. Você não precisa reservar uma tarde. E a atividade do dia é aplicada no seu próprio WhatsApp — ou seja, acontece dentro do trabalho que você já ia fazer.",
  },
  {
    question: "Funciona para o meu segmento?",
    answer:
      "O foco não é o produto que você vende, é a conversa. Pedido de orçamento, silêncio depois do preço, “vou pensar” e pedido de desconto acontecem igual em serviço, comércio local, estética, obra, revenda e prestação autônoma. O que muda é o exemplo — e a adaptação faz parte das atividades.",
  },
  {
    question: "Já tentei usar scripts prontos da internet e não funcionou.",
    answer:
      "Script decorado quebra no segundo em que o cliente responde algo diferente do previsto. Por isso o método trabalha a leitura da situação antes da resposta: você entende por que aquela mensagem funciona e monta a sua, com as suas palavras e o seu preço.",
  },
  {
    question: "Preciso saber de marketing ou de tráfego pago?",
    answer:
      "Não. O conteúdo começa depois que a conversa já existe. Se você tem cliente chegando por indicação, por vitrine, por rede social ou por anúncio, o trabalho aqui é o mesmo: não deixar essa conversa morrer no meio.",
  },
  {
    question: "Serve para quem atende sozinho?",
    answer:
      "Foi pensado exatamente para isso. E também funciona quando existe uma equipe pequena: quando duas ou três pessoas atendem seguindo o mesmo processo, o cliente para de receber respostas diferentes dependendo de quem pegou o celular.",
  },
  {
    question: "Como eu acesso depois de comprar?",
    // TODO: confirmar com o produtor os detalhes exatos de acesso
    // (app nativo, PWA, login por navegador) e detalhar aqui.
    answer:
      "As instruções de acesso chegam para você logo após a compra. Você não precisa de conhecimento técnico nenhum para começar a usar.",
  },
  {
    question: `Por que ${OFFER.priceLabel}?`,
    answer:
      "Porque o preço aqui não é o obstáculo — o obstáculo é começar. A conta que interessa é outra: quanto custa continuar improvisando o atendimento por mais um mês, com as mesmas conversas parando no mesmo ponto.",
  },
  {
    question: "O que exatamente eu recebo por esse valor?",
    answer: `${OFFER.deliverable}: o método guiado de 30 dias, as 68 lições e atividades, as videoaulas e aulas práticas, a biblioteca de áudios, os quizzes de fixação, as atividades aplicadas e o acompanhamento de progresso, metas e conquistas. Qualquer condição adicional aparece na própria tela de pagamento.`,
  },
];
