import { ANCHORS } from "@/config/site";
import { WEEKS } from "@/content/method";
import { Container, Eyebrow, Lead, Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck } from "@/components/ui/icons";

export function Method30() {
  return (
    <Section id={ANCHORS.jornada} space="normal">
      <Container>
        <Reveal className="max-w-[48rem]">
          <Eyebrow>A jornada de 30 dias</Eyebrow>
          <SectionTitle className="mt-4">
            Quatro semanas, na ordem em que o atendimento realmente acontece
          </SectionTitle>
          <Lead className="mt-5">
            Cada semana resolve uma parte da conversa. Você não pula para
            objeção antes de arrumar a entrada, e não tenta fazer follow-up
            antes de saber conduzir.
          </Lead>
        </Reveal>

        <div className="mt-12 divide-y divide-line border-y border-line sm:mt-14">
          {WEEKS.map((week, index) => (
            <Reveal key={week.label} delay={index * 60}>
              <article className="grid gap-5 py-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
                <div className="lg:col-span-4">
                  <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/8 px-3 py-1 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-brand">
                    {week.label}
                  </span>
                  <h3 className="mt-4 font-display text-[1.35rem] font-bold leading-tight tracking-[-0.02em] text-ink sm:text-[1.6rem]">
                    {week.title}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-[1.6] text-ink-3">
                    {week.focus}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <ul className="grid gap-3 sm:grid-cols-2 lg:gap-x-8">
                    {week.topics.map((topic) => (
                      <li key={topic} className="flex gap-3">
                        <IconCheck className="mt-[0.35rem] h-4 w-4 shrink-0 text-brand" />
                        <span className="text-[0.98rem] leading-[1.6] text-ink-2">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-7 max-w-[46rem] text-[0.95rem] leading-[1.65] text-ink-3">
            A divisão por semanas mostra a lógica da jornada; a ordem exata
            das lições você acompanha dentro do aplicativo. E se um dia passar
            em branco, a sequência retoma de onde você parou — o objetivo é o
            atendimento mudar, não o calendário fechar.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
