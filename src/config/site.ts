/**
 * ============================================================================
 * PONTO UNICO DE CONFIGURACAO DA PAGINA
 * ============================================================================
 * Tudo que muda quando a oferta muda esta aqui. Nao espalhe link de checkout,
 * preco ou nome de marca pelos componentes.
 *
 * PARA CONECTAR O CHECKOUT:
 *   1. crie um arquivo .env.local na raiz do projeto
 *   2. adicione:  NEXT_PUBLIC_CHECKOUT_URL=https://seu-checkout-real.com/...
 *   3. rode o build de novo
 * Sem a variavel, todos os botoes rolam a pagina ate a secao de oferta.
 *
 * PARA TROCAR O NOME DO APLICATIVO:
 *   altere BRAND.name abaixo. O nome aparece na copy, no <title>, no
 *   Open Graph e no rodape a partir daqui.
 */

export const BRAND = {
  /** Nome comercial usado na pagina inteira. Trocar aqui troca em todo lugar. */
  name: "Conversa que Anda",
  /** Descricao curta de posicionamento. Nao e slogan de anuncio. */
  tagline: "Treino prático de vendas para o WhatsApp de quem atende cliente todo dia",
  /** Dominio de producao. Usado no metadataBase / Open Graph. */
  siteUrl: "https://conversaqueanda.com.br",
  /** Nome do metodo proprietario (mecanismo da oferta). */
  method: "Método Conversa que Anda",
  /** Contato exibido no rodape. Substitua pelo canal real de suporte. */
  supportEmail: "", // TODO: informar o e-mail real de suporte
} as const;

export const OFFER = {
  /** Preco principal da oferta. */
  priceLabel: "R$ 37",
  priceCurrency: "BRL",
  priceAmount: 37,
  /** O que o comprador recebe. Nao adicione condicao comercial nao confirmada. */
  deliverable: "Acesso ao aplicativo completo",
} as const;

/**
 * Destino de TODOS os CTAs primarios.
 * Enquanto o checkout real nao existir, o valor cai para a ancora da oferta.
 */
export const CHECKOUT_URL: string =
  process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim() || "#oferta";

/** true quando o checkout real ja foi configurado. */
export const HAS_CHECKOUT: boolean = CHECKOUT_URL !== "#oferta";

/** Texto do CTA primario. Um so, repetido nos pontos certos da pagina. */
export const CTA_LABEL = "Quero destravar minhas conversas";

/** Ancoras usadas pelo menu e pelos CTAs secundarios. */
export const ANCHORS = {
  problema: "problema",
  metodo: "metodo",
  app: "app",
  jornada: "jornada",
  bonus: "bonus",
  oferta: "oferta",
  faq: "faq",
} as const;
