import type { ChatScene } from "@/components/ui/ChatThread";

/**
 * Microconversas usadas na seção de reconhecimento.
 * São cenas genéricas de atendimento — não são prints de cliente real
 * e não representam nenhuma pessoa específica.
 */
export const RECOGNITION_SCENES: ChatScene[] = [
  {
    id: "preco",
    label: "Pediu o preço",
    messages: [
      { from: "client", text: "Oi, boa tarde! Quanto fica?", time: "14:28" },
      { from: "you", text: "Boa tarde! Fica R$ 480 😊", time: "14:32", status: "read" },
    ],
    outcome: "Visualizado. Três dias depois, continua visualizado.",
  },
  {
    id: "vou-pensar",
    label: "Depois do orçamento",
    messages: [
      { from: "client", text: "Entendi. Vou pensar e te falo, tá?", time: "10:05" },
      { from: "you", text: "Beleza! Qualquer coisa estou aqui 👍", time: "10:06", status: "read" },
    ],
    outcome: "Ficou combinado que ele volta. Ele não volta.",
  },
  {
    id: "ta-caro",
    label: "A objeção mais comum",
    messages: [
      { from: "client", text: "Nossa, achei caro…", time: "16:41" },
      { from: "you", text: "Consigo fazer por 420, fechado?", time: "16:41", status: "read" },
      { from: "client", text: "Vou ver aqui e te retorno", time: "16:58" },
    ],
    outcome: "Você cortou o preço antes de entender a objeção — e perdeu a margem sem ganhar a venda.",
  },
  {
    id: "terceiro",
    label: "A decisão é de outra pessoa",
    messages: [
      { from: "client", text: "Vou falar com meu marido e te aviso", time: "09:12" },
      { from: "you", text: "Tá bom, fico no aguardo!", time: "09:14", status: "read" },
    ],
    outcome: "A conversa saiu da sua mão e você nem percebeu.",
  },
  {
    id: "follow-up",
    label: "A tentativa de retomar",
    messages: [
      { from: "you", text: "Oi! Tudo bem? Conseguiu ver?", time: "Qui, 11:20", status: "read" },
      { from: "you", text: "Oii, alguma novidade?", time: "Seg, 08:47", status: "read" },
    ],
    outcome: "Follow-up sem motivo vira cobrança. E cobrança afasta.",
  },
  {
    id: "sumiu",
    label: "O interesse que esfriou",
    messages: [
      { from: "client", text: "Adorei! Me manda tudo certinho", time: "Ter, 19:03" },
      { from: "you", text: "Te mandei a proposta agora 🙂", time: "Ter, 19:40", status: "read" },
    ],
    outcome: "Duas semanas depois, a proposta continua sendo a última mensagem.",
  },
];

/** Cena usada no herói — a mais reconhecível de todas. */
export const HERO_SCENE: ChatScene = RECOGNITION_SCENES[1];
