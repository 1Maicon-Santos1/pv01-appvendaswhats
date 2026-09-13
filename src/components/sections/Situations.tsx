import { SITUATIONS } from "@/content/situations";
import { Container, Eyebrow, Lead, Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Situations() {
  return (
    <Section tone="deep" space="normal">
      <Container>
        <Reveal className="max-w-[48rem]">
          <Eyebrow>O que você aprende a enfrentar</Eyebrow>
          <SectionTitle className="mt-4">
            As dez frases que decidem a maior parte das suas vendas
          </SectionTitle>
          <Lead className="mt-5">
            São sempre as mesmas. E é justamente por isso que dá para treinar
            cada uma delas até parar de improvisar a resposta.
          </Lead>
        </Reveal>

        <ul className="mt-11 grid border-t border-line sm:mt-12 sm:grid-cols-2 sm:gap-x-10">
          {SITUATIONS.map((situation, index) => (
            <Reveal
              as="li"
              key={situation.quote}
              delay={(index % 2) * 60}
              className="border-b border-line py-5 sm:py-6"
            >
              <p className="font-display text-[1.12rem] font-bold leading-snug tracking-[-0.015em] text-ink sm:text-[1.22rem]">
                {situation.quote}
              </p>
              <p className="mt-1.5 text-[0.94rem] leading-[1.6] text-ink-3">
                {situation.note}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
