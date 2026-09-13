import { ANCHORS, CTA_LABEL, OFFER } from "@/config/site";
import { Container, Eyebrow, Section, SectionTitle } from "@/components/ui/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/Reveal";
import { ViewTracker } from "@/components/ui/ViewTracker";
import { IconCheck } from "@/components/ui/icons";

const INCLUDED = [
  "Método guiado de 30 dias, na ordem certa",
  "68 lições e atividades práticas",
  "Videoaulas e aulas aplicadas ao atendimento",
  "Conteúdo de WhatsApp Business, abordagem e follow-up",
  "Bloco completo de objeções e persuasão",
  "Métricas simples e organização comercial",
  "Bônus 01 — Treino de Ouvido (áudios e podcasts)",
  "Bônus 02 — Checkpoint (quizzes de fixação)",
  "Bônus 03 — Missões Práticas (atividades no seu WhatsApp)",
  "Progresso, sequência, metas e conquistas",
];

export function Offer() {
  return (
    <Section id={ANCHORS.oferta} tone="deep" space="loose" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="glow-brand pointer-events-none absolute left-1/2 top-0 h-[380px] w-[820px] max-w-[130vw] -translate-x-1/2 opacity-50 blur-[70px]"
      />

      <Container className="relative">
        <ViewTracker event="view_offer" />

        <Reveal className="mx-auto max-w-[46rem] text-center">
          <Eyebrow className="justify-center">A oferta</Eyebrow>
          <SectionTitle className="mt-4">
            {OFFER.deliverable} por {OFFER.priceLabel}
          </SectionTitle>
          <p className="mx-auto mt-5 max-w-[38rem] text-[1.03rem] leading-[1.7] text-ink-2">
            Sem valor riscado ao lado, porque não existe valor riscado.{" "}
            {OFFER.priceLabel} é o preço.
          </p>
        </Reveal>

        <div className="mt-11 grid gap-6 sm:mt-12 lg:grid-cols-12 lg:items-start lg:gap-8">
          {/* ---------------------------------------------- cartão do preço --- */}
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl2 border border-brand/35 bg-[#0a2118] shadow-[0_40px_90px_-50px_rgba(41,211,102,0.55)]">
              <div className="border-b border-brand/20 bg-brand/8 px-6 py-4 text-center sm:px-8">
                <p className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-brand">
                  O aplicativo completo + os 3 bônus
                </p>
              </div>

              <div className="px-6 py-8 text-center sm:px-8">
                <p className="flex items-start justify-center gap-1.5 font-display font-extrabold tracking-[-0.04em] text-ink">
                  <span className="mt-2 text-[1.6rem] sm:mt-3 sm:text-[2rem]">R$</span>
                  <span className="text-[4.2rem] leading-[0.9] sm:text-[5.2rem]">
                    {OFFER.priceAmount}
                  </span>
                </p>

                <CtaButton
                  event="click_final_cta"
                  origin="offer_card"
                  full
                  className="mt-7"
                >
                  {CTA_LABEL}
                </CtaButton>

                <p className="mt-4 text-[0.85rem] leading-relaxed text-ink-3">
                  Você recebe as instruções de acesso logo depois da compra.
                </p>
              </div>

              <div className="border-t border-line/70 bg-[#08170f] px-6 py-5 sm:px-8">
                <p className="text-[0.88rem] leading-[1.6] text-ink-3">
                  Não tem contador regressivo nesta página, não tem “últimas
                  vagas” e não tem preço que sobe à meia-noite. Se você voltar
                  amanhã, vai encontrar exatamente isto aqui.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ------------------------------------------------ o que vem junto --- */}
          <Reveal delay={80} className="lg:col-span-7">
            <div className="rounded-xl2 border border-line bg-surface/50 p-6 sm:p-8">
              <h3 className="font-display text-[1.15rem] font-bold text-ink sm:text-[1.3rem]">
                O que entra no acesso
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-x-6">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <IconCheck className="mt-[0.3rem] h-[1rem] w-[1rem] shrink-0 text-brand" />
                    <span className="text-[0.95rem] leading-[1.55] text-ink-2">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-line pt-6">
                <h4 className="font-display text-[1.02rem] font-semibold text-ink">
                  Sobre o preço
                </h4>
                <p className="mt-3 text-[0.97rem] leading-[1.7] text-ink-2">
                  Pense na última conversa que parou depois do orçamento. Você
                  lembra do nome da pessoa e lembra do valor que estava em jogo.
                </p>
                <p className="mt-3 text-[0.97rem] leading-[1.7] text-ink-2">
                  Continuar improvisando também tem custo — só que ele não
                  aparece numa nota, aparece nas conversas que param. É essa
                  comparação que vale fazer aqui, não a de {OFFER.priceLabel}{" "}
                  contra zero.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
