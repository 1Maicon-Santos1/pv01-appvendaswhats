import { INSIDE_DISCLAIMER, INSIDE_MAIN, INSIDE_SECONDARY, type InsideBlock } from "@/content/inside";
import { Container, Eyebrow, Lead, Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconChart,
  IconChat,
  IconHeadphones,
  IconList,
  IconPlay,
  IconRepeat,
  IconTarget,
  IconTrophy,
} from "@/components/ui/icons";

const ICONS = {
  chat: IconChat,
  play: IconPlay,
  headphones: IconHeadphones,
  target: IconTarget,
  chart: IconChart,
  trophy: IconTrophy,
  list: IconList,
  repeat: IconRepeat,
} as const;

function BlockIcon({ name }: { name: InsideBlock["icon"] }) {
  const Icon = ICONS[name];
  return <Icon className="h-5 w-5" />;
}

export function Inside() {
  return (
    <Section space="normal">
      <Container>
        <Reveal className="max-w-[48rem]">
          <Eyebrow>O que vem junto</Eyebrow>
          <SectionTitle className="mt-4">
            Tudo que existe dentro serve para o mesmo objetivo
          </SectionTitle>
          <Lead className="mt-5">
            A quantidade de conteúdo é grande, mas não é o argumento. O que
            importa é que cada peça existe para você atender melhor a próxima
            conversa.
          </Lead>
        </Reveal>

        <div className="mt-11 grid gap-5 sm:mt-12 lg:grid-cols-2">
          {INSIDE_MAIN.map((block, index) => (
            <Reveal key={block.title} delay={index * 60}>
              <article className="flex h-full gap-4 rounded-xl2 border border-line bg-surface/60 p-6 transition-colors duration-200 hover:border-line-2 sm:gap-5 sm:p-7">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/12 text-brand"
                >
                  <BlockIcon name={block.icon} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[1.1rem] font-bold tracking-[-0.015em] text-ink sm:text-[1.18rem]">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-[0.97rem] leading-[1.65] text-ink-2">
                    {block.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <ul className="mt-5 grid gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {INSIDE_SECONDARY.map((block, index) => (
            <Reveal
              as="li"
              key={block.title}
              delay={index * 50}
              className="bg-surface/60 p-5 sm:p-6"
            >
              <span aria-hidden="true" className="inline-flex text-brand">
                <BlockIcon name={block.icon} />
              </span>
              <h3 className="mt-3 font-display text-[0.98rem] font-bold text-ink">
                {block.title}
              </h3>
              <p className="mt-1.5 text-[0.9rem] leading-[1.55] text-ink-3">
                {block.body}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={80}>
          <p className="mt-7 max-w-[48rem] rounded-card border-l-2 border-line-2 bg-surface/40 py-4 pl-5 pr-5 text-[0.95rem] leading-[1.65] text-ink-3">
            {INSIDE_DISCLAIMER}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
