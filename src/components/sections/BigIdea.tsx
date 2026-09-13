import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function BigIdea() {
  return (
    <Section tone="deep" space="loose" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(70%_70%_at_50%_50%,#000,transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="glow-brand pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[760px] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 opacity-40 blur-[70px]"
      />

      <Container size="reading" className="relative text-center">
        <Reveal>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-accent sm:text-[0.78rem]">
            A virada
          </p>
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-6 font-display text-[1.75rem] font-bold leading-[1.18] tracking-[-0.025em] text-ink text-balance sm:text-[2.5rem] lg:text-[3rem]">
            Vender mais pelo WhatsApp quase nunca é conseguir mais conversas.
            <span className="mt-3 block text-brand">
              Na maioria das vezes é terminar as que você já tem.
            </span>
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-[38rem] text-[1.03rem] leading-[1.7] text-ink-2 sm:text-[1.1rem]">
            Enquanto a atenção vai toda para atrair mais gente, as conversas que
            já chegaram ficam empilhadas ali. Cada uma com um nome, um orçamento
            e um dia em que parou.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-5 max-w-[38rem] text-[1.03rem] leading-[1.7] text-ink sm:text-[1.1rem]">
            Elas não precisam de mais investimento. Precisam de{" "}
            <strong className="font-semibold text-brand">próximo passo</strong>.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
