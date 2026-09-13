import { BRAND, CTA_LABEL, OFFER, ANCHORS } from "@/config/site";
import { HERO_SCENE } from "@/content/conversations";
import { ChatBubbles } from "@/components/ui/ChatThread";
import { CtaButton } from "@/components/ui/CtaButton";
import { PhoneFrame } from "@/components/ui/AppFrame";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck } from "@/components/ui/icons";

const CREDIBILITY = [
  "Método guiado de 30 dias",
  "68 lições e atividades",
  "Aulas, áudios, quizzes e prática",
];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40"
    >
      {/* fundo: grade sutil + brilho controlado atrás do bloco de texto */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-[0.45] [mask-image:radial-gradient(80%_60%_at_50%_0%,#000_10%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="glow-brand pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] max-w-[130vw] -translate-x-1/2 opacity-60 blur-[60px]"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ---------------------------------------------------- copy --- */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-line-2/80 bg-surface/60 px-3.5 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.09em] text-ink-2 max-[359px]:tracking-[0.02em] sm:text-[0.78rem] sm:tracking-[0.14em]">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-dot" aria-hidden="true" />
                Treino de vendas pelo WhatsApp
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-5 max-w-[17ch] font-display text-[2.2rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink text-balance max-[359px]:text-[1.9rem] sm:max-w-[19ch] sm:text-[3.05rem] lg:text-[3.55rem]">
                <span className="block">Você não tem falta de cliente.</span>
                <span className="mt-1 block text-brand">
                  Você tem conversa parada.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-[38rem] text-[1.05rem] leading-[1.65] text-ink-2 sm:text-[1.15rem]">
                Role o seu WhatsApp para cima. O orçamento de terça sem resposta.
                O “vou pensar” de quinta. O visualizado de ontem, às 14h.
                Nenhuma dessas pessoas disse não — a conversa só parou.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-4 max-w-[38rem] text-[1.05rem] leading-[1.65] text-ink sm:text-[1.1rem]">
                <strong className="font-semibold text-ink">{BRAND.name}</strong> é o
                aplicativo que treina você, em blocos curtos de um dia, a saber o
                que responder e como conduzir a conversa até o próximo passo.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CtaButton event="click_primary_cta" origin="hero" className="w-full sm:w-auto">
                  {CTA_LABEL}
                </CtaButton>
                <a
                  href={`#${ANCHORS.metodo}`}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full px-4 text-[0.95rem] font-medium text-ink-2 underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  Ver como funciona
                </a>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-4 text-[0.9rem] text-ink-3">
                {OFFER.deliverable} por{" "}
                <span className="font-semibold text-ink">{OFFER.priceLabel}</span>.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-line/70 pt-6">
                {CREDIBILITY.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[0.86rem] text-ink-2">
                    <IconCheck className="h-4 w-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* -------------------------------------------------- visual --- */}
          <div className="lg:col-span-5">
            <Reveal delay={180} className="relative mx-auto max-w-[330px] lg:max-w-none">
              <PhoneFrame className="animate-float">
                {/* cabeçalho da conversa */}
                <div className="flex items-center gap-3 border-b border-line/70 bg-[#0d2419] px-4 pb-3 pt-6">
                  <span
                    aria-hidden="true"
                    className="grid h-9 w-9 place-items-center rounded-full bg-[#1c4433] text-sm font-semibold text-ink-2"
                  >
                    C
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[0.9rem] font-semibold text-ink">
                      Cliente
                    </span>
                    <span className="block text-[0.75rem] text-ink-3">
                      pediu orçamento na quinta
                    </span>
                  </span>
                </div>

                <div className="px-4 py-5">
                  <ChatBubbles messages={HERO_SCENE.messages} />

                  <div className="my-5 flex items-center gap-3" aria-hidden="true">
                    <span className="h-px flex-1 bg-line" />
                    <span className="text-[0.75rem] uppercase tracking-[0.16em] text-ink-3">
                      6 dias depois
                    </span>
                    <span className="h-px flex-1 bg-line" />
                  </div>

                  <p className="pb-2 text-center text-[0.85rem] italic text-ink-3">
                    nada
                  </p>
                </div>

                {/* barra de digitação vazia — reforça o silêncio */}
                <div className="flex items-center gap-2 border-t border-line/70 bg-[#0d2419] px-4 py-3">
                  <span className="h-8 flex-1 rounded-full bg-[#132b21]" aria-hidden="true" />
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 place-items-center rounded-full bg-brand/25 text-brand"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                      <path d="M4 12 20 5l-7 15-2-6-7-2Z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
              </PhoneFrame>

              <div className="pointer-events-none absolute -bottom-4 -left-3 rounded-xl border border-warn/30 bg-[#1a1408]/95 px-3.5 py-2.5 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-sm sm:-left-6">
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-warn">
                  Conversa parada
                </p>
                <p className="text-[0.78rem] text-ink-3">não é cliente perdido</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
