/**
 * ============================================================================
 * INSTRUMENTACAO
 * ============================================================================
 * A pagina NAO carrega nenhum script de terceiro por conta propria e nao
 * possui nenhum ID inventado. Esta camada apenas empurra eventos para as
 * ferramentas QUE JA ESTIVEREM na pagina.
 *
 * Para ligar o tracking depois:
 *   - Meta Pixel / GTM / GA: instale o snippet oficial no <head> (via
 *     next/script em src/app/layout.tsx) usando o ID real do cliente.
 *   - Nada mais precisa mudar: os eventos abaixo ja estao disparando nos
 *     pontos certos da pagina.
 *
 * Eventos emitidos:
 *   view_offer        -> secao de oferta entrou na tela
 *   click_primary_cta -> qualquer CTA primario acima da oferta
 *   click_final_cta   -> CTA da oferta e do bloco final
 *   open_faq          -> pergunta do FAQ aberta
 */

export type TrackEvent =
  | "view_offer"
  | "click_primary_cta"
  | "click_final_cta"
  | "open_faq";

type Params = Record<string, string | number | boolean>;

type DataLayerWindow = Window & {
  dataLayer?: unknown[];
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
};

export function track(event: TrackEvent, params: Params = {}): void {
  if (typeof window === "undefined") return;

  const w = window as DataLayerWindow;
  const payload = { event, ...params };

  // GTM / GA via dataLayer (so existe se o container tiver sido instalado)
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push(payload);
  }

  // GA4 direto
  if (typeof w.gtag === "function") {
    w.gtag("event", event, params);
  }

  // Meta Pixel — evento customizado
  if (typeof w.fbq === "function") {
    w.fbq("trackCustom", event, params);
  }

  if (process.env.NODE_ENV !== "production") {
    console.debug("[track]", event, params);
  }
}
