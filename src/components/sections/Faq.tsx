import { ANCHORS } from "@/config/site";
import { FAQ } from "@/content/faq";
import { Accordion } from "@/components/ui/Accordion";
import { Container, Eyebrow, Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Faq() {
  return (
    <Section id={ANCHORS.faq} space="normal">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-28">
              <Eyebrow>Dúvidas</Eyebrow>
              <SectionTitle className="mt-4 lg:text-[2rem]">
                O que costuma travar a decisão
              </SectionTitle>
              <p className="mt-5 text-[0.98rem] leading-[1.65] text-ink-3">
                Se a sua dúvida não estiver aqui, ela provavelmente é sobre o seu
                caso específico — e a resposta honesta é que o método trata da
                conversa, não do produto que você vende.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={60}>
              <Accordion items={FAQ} />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
