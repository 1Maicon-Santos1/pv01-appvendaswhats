import { Container, Eyebrow, Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function RealProblem() {
  return (
    <Section space="normal">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <Eyebrow>O verdadeiro problema</Eyebrow>
              <SectionTitle className="mt-4">
                A parte difícil já aconteceu. Você só não foi treinado para o que
                vem depois.
              </SectionTitle>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col gap-6 text-[1.03rem] leading-[1.72] text-ink-2 sm:text-[1.08rem]">
              <Reveal>
                <p>
                  O cliente te achou. Te chamou. Perguntou. Isso é interesse — e
                  interesse custa caro, seja em anúncio, em indicação, em vitrine
                  ou nas suas horas de balcão.
                </p>
              </Reveal>

              <Reveal delay={60}>
                <p>
                  Só que aí começa a parte que ninguém ensinou. Você responde de
                  cabeça. Cada atendimento é montado do zero, na hora, no meio de
                  outras cinco coisas. O que decide a venda deixa de ser o seu
                  produto e passa a ser{" "}
                  <strong className="font-semibold text-ink">
                    o seu dia, o seu humor e a frase que veio na cabeça naquele
                    momento
                  </strong>
                  .
                </p>
              </Reveal>

              <Reveal delay={100}>
                <p>
                  Quando dá certo, você não sabe direito por quê. Quando dá
                  errado, também não. E sem saber o que funcionou, não tem como
                  repetir.
                </p>
              </Reveal>

              <Reveal delay={140}>
                <div className="relative rounded-xl2 border-l-2 border-brand bg-surface/50 py-5 pl-6 pr-5 sm:pl-8">
                  <p className="font-display text-[1.15rem] font-semibold leading-snug text-ink text-balance sm:text-[1.3rem]">
                    Improviso não é falta de esforço. É falta de processo.
                  </p>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-2">
                    Você já se esforça bastante. Responde rápido, atende no
                    domingo, manda áudio explicando tudo. O que falta não é
                    energia — é um caminho fixo para as situações que se repetem
                    toda semana.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <p>
                  E elas se repetem. São sempre as mesmas: o preço, o “vou
                  pensar”, o desconto, o sócio, o marido, a esposa, o silêncio.
                  Se são sempre as mesmas, dá para treinar.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
