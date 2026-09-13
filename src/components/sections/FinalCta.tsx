import { CTA_LABEL, OFFER } from "@/config/site";
import { Container, Section } from "@/components/ui/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <Section tone="raised" space="loose" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(65%_65%_at_50%_50%,#000,transparent_80%)]"
      />

      <Container size="reading" className="relative text-center">
        <Reveal>
          <p className="font-display text-[1.85rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-ink text-balance sm:text-[2.6rem]">
            As conversas vão continuar chegando amanhã.
            <span className="mt-3 block text-brand">
              A pergunta é o que você vai responder nelas.
            </span>
          </p>
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-7 max-w-[36rem] text-[1.03rem] leading-[1.7] text-ink-2">
            Você já faz a parte cara: atrair a pessoa, atender, responder no
            horário que der. Falta a parte que ninguém te ensinou — conduzir até
            o próximo passo, e voltar quando o silêncio aparecer.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-9 flex flex-col items-center gap-3">
            <CtaButton
              event="click_final_cta"
              origin="final"
              className="w-full sm:w-auto"
            >
              {CTA_LABEL}
            </CtaButton>
            <p className="text-[0.9rem] text-ink-3">
              {OFFER.deliverable} por{" "}
              <span className="font-semibold text-ink">{OFFER.priceLabel}</span>.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
