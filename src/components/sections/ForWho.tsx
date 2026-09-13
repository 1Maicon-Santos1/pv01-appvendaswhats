import { FOR_WHO, NOT_FOR_WHO } from "@/content/audience";
import { Container, Eyebrow, Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck, IconX } from "@/components/ui/icons";

export function ForWho() {
  return (
    <Section tone="raised" space="normal">
      <Container>
        <Reveal className="max-w-[46rem]">
          <Eyebrow>Antes de você decidir</Eyebrow>
          <SectionTitle className="mt-4">
            Isso não é para todo mundo — e é melhor deixar claro agora
          </SectionTitle>
        </Reveal>

        <div className="mt-11 grid gap-5 sm:mt-12 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl2 border border-brand/25 bg-[#0a2118] p-6 sm:p-8">
              <h3 className="font-display text-[1.2rem] font-bold text-ink sm:text-[1.35rem]">
                Foi feito para
              </h3>
              <ul className="mt-5 flex flex-col gap-3.5">
                {FOR_WHO.map((item) => (
                  <li key={item} className="flex gap-3">
                    <IconCheck className="mt-[0.3rem] h-[1.05rem] w-[1.05rem] shrink-0 text-brand" />
                    <span className="text-[0.98rem] leading-[1.6] text-ink-2">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="h-full rounded-xl2 border border-line bg-surface/50 p-6 sm:p-8">
              <h3 className="font-display text-[1.2rem] font-bold text-ink sm:text-[1.35rem]">
                Não foi feito para
              </h3>
              <ul className="mt-5 flex flex-col gap-3.5">
                {NOT_FOR_WHO.map((item) => (
                  <li key={item} className="flex gap-3">
                    <IconX className="mt-[0.3rem] h-[1.05rem] w-[1.05rem] shrink-0 text-ink-3" />
                    <span className="text-[0.98rem] leading-[1.6] text-ink-3">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
