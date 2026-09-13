import { ANCHORS, BRAND } from "@/config/site";
import { MOVEMENTS } from "@/content/method";
import { Container, Eyebrow, Lead, Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Mechanism() {
  return (
    <Section id={ANCHORS.metodo} tone="raised" space="normal">
      <Container>
        <Reveal className="max-w-[48rem]">
          <Eyebrow>O mecanismo</Eyebrow>
          <SectionTitle className="mt-4">
            {BRAND.method}: quatro movimentos que fazem a conversa continuar
          </SectionTitle>
          <Lead className="mt-5">
            Não é um roteiro para decorar. São quatro perguntas que você passa a
            fazer sozinho, no meio do atendimento, antes de apertar enviar.
          </Lead>
        </Reveal>

        <ol className="relative mt-12 sm:mt-14">
          {/* trilho vertical conectando os movimentos */}
          <span
            aria-hidden="true"
            className="absolute bottom-8 left-[1.4rem] top-8 w-px bg-gradient-to-b from-brand/60 via-line-2 to-transparent sm:left-[1.65rem]"
          />

          {MOVEMENTS.map((movement, index) => (
            <Reveal
              as="li"
              key={movement.name}
              delay={index * 70}
              className="relative flex gap-5 pb-9 last:pb-0 sm:gap-7"
            >
              <span
                aria-hidden="true"
                className="relative z-10 mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand/35 bg-[#0a2118] font-display text-[0.82rem] font-bold text-brand sm:h-[3.3rem] sm:w-[3.3rem] sm:text-[0.9rem]"
              >
                {movement.step}
              </span>

              <div className="min-w-0 flex-1 pt-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-[1.3rem] font-bold tracking-[-0.02em] text-ink sm:text-[1.55rem]">
                    {movement.name}
                  </h3>
                  <p className="text-[0.92rem] font-medium text-accent">
                    “{movement.question}”
                  </p>
                </div>
                <p className="mt-3 max-w-[44rem] text-[1rem] leading-[1.7] text-ink-2">
                  {movement.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-4 rounded-xl2 border border-brand/25 bg-[#0a2118] p-6 sm:p-8">
            <p className="font-display text-[1.1rem] font-semibold leading-snug text-ink text-balance sm:text-[1.3rem]">
              E a parte que muda tudo: isso não é conteúdo para assistir. É
              treino para repetir.
            </p>
            <p className="mt-3 max-w-[46rem] text-[1rem] leading-[1.7] text-ink-2">
              Cada dia dentro do aplicativo traz uma situação real, uma
              explicação curta e uma atividade para aplicar na conversa que está
              aberta agora no seu celular. Situação, entendimento, resposta,
              prática — e de novo no dia seguinte, até virar o seu jeito de
              atender.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
