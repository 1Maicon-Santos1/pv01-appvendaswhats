import { COMPARISON } from "@/content/audience";
import { Container, Eyebrow, Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Comparison() {
  return (
    <Section space="normal">
      <Container>
        <Reveal className="max-w-[46rem]">
          <Eyebrow>A diferença no dia a dia</Eyebrow>
          <SectionTitle className="mt-4">
            A mesma conversa, com e sem processo
          </SectionTitle>
        </Reveal>

        <Reveal delay={60} className="mt-10 sm:mt-12">
          <div className="overflow-hidden rounded-xl2 border border-line">
            {/* cabeçalho — some no mobile, onde cada linha se explica sozinha */}
            <div className="hidden grid-cols-12 gap-6 border-b border-line bg-surface/70 px-6 py-4 lg:grid">
              <span className="col-span-4 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ink-3">
                Situação
              </span>
              <span className="col-span-4 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ink-3">
                No improviso
              </span>
              <span className="col-span-4 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand">
                Com o método treinado
              </span>
            </div>

            <ul className="divide-y divide-line">
              {COMPARISON.map((row) => (
                <li
                  key={row.topic}
                  className="grid gap-3 bg-surface/35 px-5 py-5 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-6"
                >
                  <p className="font-display text-[1rem] font-semibold leading-snug text-ink lg:col-span-4">
                    {row.topic}
                  </p>

                  <p className="flex items-start gap-2.5 text-[0.95rem] leading-[1.55] text-ink-3 lg:col-span-4">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] hidden h-1.5 w-1.5 shrink-0 rounded-full bg-ink-3/60 lg:block"
                    />
                    <span>
                      <span className="mr-1.5 font-semibold text-ink-3 lg:hidden">
                        No improviso:
                      </span>
                      {row.before}
                    </span>
                  </p>

                  <p className="flex items-start gap-2.5 text-[0.95rem] leading-[1.55] text-ink lg:col-span-4">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] hidden h-1.5 w-1.5 shrink-0 rounded-full bg-brand lg:block"
                    />
                    <span>
                      <span className="mr-1.5 font-semibold text-brand lg:hidden">
                        Com o método:
                      </span>
                      {row.after}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
