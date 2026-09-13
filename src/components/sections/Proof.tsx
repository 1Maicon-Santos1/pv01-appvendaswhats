import Image from "next/image";
import { getProofShots, getTestimonialPhoto, IS_DEV } from "@/lib/assets";
import { TESTIMONIALS } from "@/content/testimonials";
import { Container, Eyebrow, Lead, Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * PROVA REAL.
 *
 * Regra da página: nada aqui pode ser inventado.
 * - Depoimentos vêm de src/content/testimonials.ts (hoje vazio, de propósito).
 * - Prints de conversa vêm de /public/proof/*.png|jpg|webp.
 *
 * Sem nenhum dos dois, a seção não é renderizada em produção — é melhor não
 * ter seção de prova do que ter prova fabricada. Em desenvolvimento aparece um
 * painel explicando exatamente onde colocar os arquivos.
 */
export function Proof() {
  const proofShots = getProofShots();
  const hasTestimonials = TESTIMONIALS.length > 0;
  const hasProofShots = proofShots.length > 0;

  if (!hasTestimonials && !hasProofShots) {
    if (!IS_DEV) return null;
    return (
      <Section space="tight">
        <Container>
          <div className="rounded-xl2 border border-dashed border-line-2 bg-[#08170f] p-6 sm:p-8">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-brand">
              Seção de prova — aviso de desenvolvimento
            </p>
            <h2 className="mt-3 font-display text-[1.25rem] font-bold text-ink">
              Nenhuma prova real foi adicionada ainda
            </h2>
            <p className="mt-2 max-w-[46rem] text-[0.95rem] leading-relaxed text-ink-2">
              A estrutura está pronta e nada foi inventado. Esta seção não
              aparece em produção enquanto não existir prova de verdade. Para
              ativá-la:
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-[0.92rem] text-ink-2">
              <li>
                <strong className="font-semibold text-ink">Depoimentos:</strong>{" "}
                adicione objetos em{" "}
                <code className="rounded bg-black/40 px-1.5 py-0.5 text-ink-3">
                  src/content/testimonials.ts
                </code>{" "}
                (foto opcional em{" "}
                <code className="rounded bg-black/40 px-1.5 py-0.5 text-ink-3">
                  /public/testimonials/&lt;id&gt;.jpg
                </code>
                ).
              </li>
              <li>
                <strong className="font-semibold text-ink">
                  Prints de conversa e resultado:
                </strong>{" "}
                solte as imagens em{" "}
                <code className="rounded bg-black/40 px-1.5 py-0.5 text-ink-3">
                  /public/proof/
                </code>{" "}
                nomeadas na ordem de exibição (01-…, 02-…).
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section space="normal">
      <Container>
        <Reveal className="max-w-[48rem]">
          <Eyebrow>Quem já está usando</Eyebrow>
          <SectionTitle className="mt-4">
            O que muda quando a conversa deixa de parar
          </SectionTitle>
          <Lead className="mt-5">
            Depoimentos e prints enviados por quem usa o aplicativo, publicados
            como foram recebidos.
          </Lead>
        </Reveal>

        {hasTestimonials && (
          <ul className="mt-11 grid gap-5 sm:mt-12 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => {
              const photo = getTestimonialPhoto(testimonial.id);
              return (
                <Reveal as="li" key={testimonial.id} delay={index * 60}>
                  <figure className="flex h-full flex-col rounded-xl2 border border-line bg-surface/60 p-6 sm:p-7">
                    <blockquote className="flex-1 text-[1rem] leading-[1.7] text-ink-2">
                      “{testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                      {photo ? (
                        <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                          <Image
                            src={photo}
                            alt={testimonial.name}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </span>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#1c4433] text-sm font-semibold text-ink-2"
                        >
                          {testimonial.name.charAt(0)}
                        </span>
                      )}
                      <span className="min-w-0">
                        <span className="block truncate text-[0.95rem] font-semibold text-ink">
                          {testimonial.name}
                        </span>
                        {testimonial.role && (
                          <span className="block truncate text-[0.83rem] text-ink-3">
                            {testimonial.role}
                          </span>
                        )}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </ul>
        )}

        {hasProofShots && (
          <div className="mt-10 sm:mt-12">
            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink-3">
              Prints enviados por quem usa
            </h3>
            <ul className="-mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
              {proofShots.map((src, index) => (
                <Reveal
                  as="li"
                  key={src}
                  delay={index * 50}
                  className="w-[68vw] max-w-[280px] shrink-0 snap-center sm:w-auto sm:max-w-none"
                >
                  <div className="relative aspect-[9/16] overflow-hidden rounded-card border border-line bg-surface">
                    <Image
                      src={src}
                      alt="Print de conversa enviado por quem usa o aplicativo"
                      fill
                      sizes="(max-width: 640px) 68vw, 280px"
                      className="object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </Reveal>
              ))}
            </ul>
            <p className="mt-3 text-[0.8rem] text-ink-3 sm:hidden">
              Arraste para o lado para ver os outros.
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}
