import { RECOGNITION_SCENES } from "@/content/conversations";
import { ChatCard } from "@/components/ui/ChatThread";
import { Container, Eyebrow, Lead, Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ANCHORS } from "@/config/site";

export function Recognition() {
  return (
    <Section id={ANCHORS.problema} tone="raised" space="normal">
      <Container>
        <Reveal className="max-w-[46rem]">
          <Eyebrow>Isso acontece com você?</Eyebrow>
          <SectionTitle className="mt-4">
            Seis conversas que todo mundo que vende pelo WhatsApp já teve
          </SectionTitle>
          <Lead className="mt-5">
            Não é falta de educação do cliente e não é azar. É sempre o mesmo
            ponto: a conversa chega até certo lugar e para. Veja se alguma delas
            parece familiar.
          </Lead>
        </Reveal>
      </Container>

      {/* mobile: carrossel com snap — desktop: grade */}
      <Container className="mt-10 sm:mt-12">
        <ul
          className="-mx-5 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:items-stretch sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:gap-5"
          style={{ scrollbarWidth: "thin" }}
        >
          {RECOGNITION_SCENES.map((scene, index) => (
            <Reveal
              as="li"
              key={scene.id}
              delay={index * 60}
              className="w-[80vw] max-w-[320px] shrink-0 snap-start sm:w-auto sm:max-w-none"
            >
              <ChatCard scene={scene} />
            </Reveal>
          ))}
        </ul>
        <p className="mt-3 text-[0.8rem] text-ink-3 sm:hidden">
          Arraste para o lado para ver as outras.
        </p>
      </Container>

      <Container className="mt-12 sm:mt-14">
        <Reveal className="mx-auto max-w-[46rem] rounded-xl2 border border-line bg-surface/60 p-6 text-center hairline sm:p-8">
          <p className="font-display text-[1.15rem] font-semibold leading-snug text-ink text-balance sm:text-[1.45rem]">
            Repare que em nenhuma delas o cliente disse não.
          </p>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-2">
            Ele não recusou, não reclamou, não sumiu do mundo. A conversa
            simplesmente ficou sem próximo passo — e virou mais uma linha na sua
            lista de contatos.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
