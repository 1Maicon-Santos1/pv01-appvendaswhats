import { ANCHORS, BRAND } from "@/config/site";
import { getProductShots, IS_DEV } from "@/lib/assets";
import { PhoneFrame, ScreenshotSlot, WindowFrame } from "@/components/ui/AppFrame";
import { Container, Eyebrow, Lead, Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * POR DENTRO DO APLICATIVO.
 *
 * Enquanto não existirem screenshots reais em /public/product, a seção mostra
 * a descrição das telas (texto verdadeiro sobre o produto) em vez de uma
 * interface inventada. Assim que os arquivos forem adicionados, a mesma seção
 * passa a exibir as imagens automaticamente — sem mudar uma linha de código.
 */
export function AppShowcase() {
  const shots = getProductShots();
  const available = shots.filter((shot) => shot.src);
  const phones = shots.filter((shot) => shot.frame === "phone");
  const windows = shots.filter((shot) => shot.frame === "window");
  const hasImages = available.length > 0;

  return (
    <Section id={ANCHORS.app} tone="raised" space="normal">
      <Container>
        <Reveal className="max-w-[48rem]">
          <Eyebrow>Por dentro do aplicativo</Eyebrow>
          <SectionTitle className="mt-4">
            Não é uma pasta de aulas. É um lugar para onde você volta todo dia.
          </SectionTitle>
          <Lead className="mt-5">
            {BRAND.name} organiza o treino como uma rotina: o dia de hoje em
            primeiro plano, o que já foi feito registrado e o próximo passo
            sempre visível.
          </Lead>
        </Reveal>
      </Container>

      {hasImages ? (
        <>
          <Container className="mt-12 sm:mt-14">
            <ul className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
              {phones
                .filter((shot) => shot.src)
                .map((shot, index) => (
                  <Reveal
                    as="li"
                    key={shot.slug}
                    delay={index * 70}
                    className="w-[72vw] max-w-[290px] shrink-0 snap-center sm:mx-auto sm:w-full"
                  >
                    <PhoneFrame glow={index === 0}>
                      <ScreenshotSlot
                        src={shot.src}
                        alt={`${shot.title} — ${BRAND.name}`}
                        slug={shot.slug}
                      />
                    </PhoneFrame>
                    <h3 className="mt-4 font-display text-[1.02rem] font-bold text-ink">
                      {shot.title}
                    </h3>
                    <p className="mt-1 text-[0.9rem] leading-snug text-ink-3">
                      {shot.caption}
                    </p>
                  </Reveal>
                ))}
            </ul>
          </Container>

          {windows.some((shot) => shot.src) && (
            <Container className="mt-10 sm:mt-14">
              <div className="grid gap-6 lg:grid-cols-2">
                {windows
                  .filter((shot) => shot.src)
                  .map((shot, index) => (
                    <Reveal key={shot.slug} delay={index * 70}>
                      <WindowFrame title={shot.title}>
                        <ScreenshotSlot
                          src={shot.src}
                          alt={`${shot.title} — ${BRAND.name}`}
                          slug={shot.slug}
                          ratio="16/10"
                        />
                      </WindowFrame>
                      <p className="mt-3 text-[0.9rem] leading-snug text-ink-3">
                        {shot.caption}
                      </p>
                    </Reveal>
                  ))}
              </div>
            </Container>
          )}
        </>
      ) : (
        <Container className="mt-11 sm:mt-12">
          {/* Sem screenshots reais: descreve as telas em vez de inventar uma UI. */}
          <ul className="grid gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-2">
            {shots.map((shot, index) => (
              <Reveal
                as="li"
                key={shot.slug}
                delay={index * 50}
                className="bg-surface/80 p-6 sm:p-7"
              >
                <span className="font-display text-[0.78rem] font-bold uppercase tracking-[0.16em] text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-[1.08rem] font-bold tracking-[-0.015em] text-ink">
                  {shot.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-[1.6] text-ink-2">
                  {shot.caption}
                </p>
              </Reveal>
            ))}
          </ul>

          {IS_DEV && (
            <div className="mt-8 rounded-card border border-dashed border-line-2 bg-[#08170f] p-6">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-brand">
                Aviso de desenvolvimento
              </p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">
                Nenhum screenshot real foi encontrado. Coloque as imagens em{" "}
                <code className="rounded bg-black/40 px-1.5 py-0.5 text-ink">
                  /public/product/
                </code>{" "}
                usando exatamente estes nomes para que esta seção passe a exibir
                a galeria:
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {shots.map((shot) => (
                  <li key={shot.slug}>
                    <code className="rounded bg-black/40 px-2 py-1 text-[0.78rem] text-ink-3">
                      {shot.slug}.png
                    </code>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      )}
    </Section>
  );
}
