import { DAILY_LOOP } from "@/content/method";
import { Container, Eyebrow, Lead, Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconRepeat } from "@/components/ui/icons";

export function DailyLoop() {
  return (
    <Section space="normal">
      <Container>
        <Reveal className="max-w-[46rem]">
          <Eyebrow>Como funciona no seu dia</Eyebrow>
          <SectionTitle className="mt-4">
            Um bloco por dia, no intervalo entre um cliente e outro
          </SectionTitle>
          <Lead className="mt-5">
            O aplicativo abre já no ponto onde você parou. Não tem “escolher por
            onde começar” nem lista infinita de aula esperando por você.
          </Lead>
        </Reveal>

        <div className="relative mt-12 sm:mt-14">
          {/* linha conectando as etapas no desktop */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-[1.4rem] hidden h-px bg-gradient-to-r from-transparent via-line-2 to-transparent lg:block"
          />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {DAILY_LOOP.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 70} className="relative">
                <span
                  aria-hidden="true"
                  className="relative z-10 grid h-11 w-11 place-items-center rounded-xl border border-line-2 bg-surface font-display text-[0.95rem] font-bold text-brand"
                >
                  {index + 1}
                </span>
                <h3 className="mt-5 font-display text-[1.12rem] font-bold tracking-[-0.015em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.97rem] leading-[1.65] text-ink-2">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={140}>
          <div className="mt-10 flex items-start gap-4 rounded-card border border-line bg-surface/50 p-5 sm:items-center sm:p-6">
            <span
              aria-hidden="true"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand/12 text-brand"
            >
              <IconRepeat className="h-5 w-5" />
            </span>
            <p className="text-[0.98rem] leading-[1.6] text-ink-2">
              <strong className="font-semibold text-ink">
                No dia seguinte o ciclo recomeça
              </strong>{" "}
              — com outra situação, mais perto do jeito que você atende. É a
              repetição que transforma resposta pensada em resposta natural.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
