import { ANCHORS } from "@/config/site";
import { BONUSES } from "@/content/bonus";
import { Container, Eyebrow, Lead, Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconHeadphones, IconSpark, IconTarget } from "@/components/ui/icons";

const ICONS = {
  headphones: IconHeadphones,
  spark: IconSpark,
  target: IconTarget,
} as const;

export function Bonus() {
  return (
    <Section id={ANCHORS.bonus} tone="raised" space="normal">
      <Container>
        <Reveal className="max-w-[48rem]">
          <Eyebrow className="text-accent">
            <span className="sr-only">Bônus incluídos</span>
            <span aria-hidden="true">Incluído no acesso</span>
          </Eyebrow>
          <SectionTitle className="mt-4">
            Três recursos que existem para o conteúdo não morrer na tela
          </SectionTitle>
          <Lead className="mt-5">
            A maior parte do que a gente aprende some em uma semana. Estes três
            servem para o que você estudou virar comportamento no atendimento —
            e não mais um curso começado.
          </Lead>
        </Reveal>

        <div className="mt-11 grid gap-5 sm:mt-12 lg:grid-cols-3">
          {BONUSES.map((bonus, index) => {
            const Icon = ICONS[bonus.icon];
            return (
              <Reveal key={bonus.name} delay={index * 70}>
                <article className="flex h-full flex-col overflow-hidden rounded-xl2 border border-accent/22 bg-[#08191a]">
                  <span
                    aria-hidden="true"
                    className="h-[3px] w-full bg-gradient-to-r from-accent/70 via-accent/25 to-transparent"
                  />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-accent">
                        {bonus.index}
                      </span>
                      <span
                        aria-hidden="true"
                        className="grid h-9 w-9 place-items-center rounded-full bg-accent/10 text-accent"
                      >
                        <Icon className="h-[1.15rem] w-[1.15rem]" />
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-[1.3rem] font-bold tracking-[-0.02em] text-ink">
                      {bonus.name}
                    </h3>
                    <p className="mt-1 text-[0.88rem] font-medium text-ink-3">
                      {bonus.kicker}
                    </p>
                    <p className="mt-4 text-[0.97rem] leading-[1.65] text-ink-2">
                      {bonus.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
