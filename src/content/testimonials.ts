/**
 * ============================================================================
 * DEPOIMENTOS REAIS — ATENÇÃO
 * ============================================================================
 * Esta lista está VAZIA de propósito. Nenhum depoimento foi inventado.
 *
 * COMO ADICIONAR UM DEPOIMENTO REAL:
 *   1. adicione um objeto no array TESTIMONIALS abaixo;
 *   2. (opcional) coloque a foto em /public/testimonials/<id>.jpg
 *      — o campo `id` precisa ser igual ao nome do arquivo;
 *   3. a seção de prova aparece sozinha assim que existir pelo menos um item.
 *
 * COMO ADICIONAR PRINTS DE CONVERSA / RESULTADO:
 *   basta soltar as imagens em /public/proof/ (png, jpg ou webp).
 *   Elas são listadas automaticamente, em ordem alfabética.
 *   Nomeie na ordem que quiser exibir: 01-xxx.png, 02-xxx.png ...
 *
 * Nunca publique depoimento, número, avaliação ou print que não seja real.
 */

export type Testimonial = {
  /** Precisa bater com o nome do arquivo em /public/testimonials/ */
  id: string;
  /** Nome real, como a pessoa autorizou. */
  name: string;
  /** Negócio / cidade. Opcional. */
  role?: string;
  /** Texto do depoimento, na íntegra. */
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  // Exemplo de formato (mantido comentado de propósito — não é um depoimento real):
  // {
  //   id: "nome-sobrenome",
  //   name: "Nome Sobrenome",
  //   role: "Negócio, Cidade",
  //   quote: "Texto exato enviado pela pessoa, sem edição.",
  // },
];
