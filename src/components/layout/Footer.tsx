import { ANCHORS, BRAND } from "@/config/site";
import { Container } from "@/components/ui/Section";
import { Logo } from "./Logo";

export function Footer({ logoSrc }: { logoSrc: string | null }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-[#030c08] py-12 sm:py-14">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[24rem]">
            <Logo src={logoSrc} />
            <p className="mt-4 text-[0.92rem] leading-[1.6] text-ink-3">
              {BRAND.tagline}.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
              {[
                { href: `#${ANCHORS.problema}`, label: "O problema" },
                { href: `#${ANCHORS.metodo}`, label: "O método" },
                { href: `#${ANCHORS.app}`, label: "O app" },
                { href: `#${ANCHORS.bonus}`, label: "Bônus" },
                { href: `#${ANCHORS.oferta}`, label: "Oferta" },
                { href: `#${ANCHORS.faq}`, label: "Dúvidas" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.9rem] text-ink-2 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {BRAND.supportEmail && (
              <p className="mt-5 text-[0.9rem] text-ink-3">
                Suporte:{" "}
                <a
                  href={`mailto:${BRAND.supportEmail}`}
                  className="text-ink-2 underline underline-offset-4 hover:text-ink"
                >
                  {BRAND.supportEmail}
                </a>
              </p>
            )}
          </nav>
        </div>

        <div className="mt-10 border-t border-line pt-6">
          <p className="text-[0.82rem] leading-[1.6] text-ink-3">
            © {year} {BRAND.name}. Todos os direitos reservados.
          </p>
          <p className="mt-2 max-w-[46rem] text-[0.82rem] leading-[1.6] text-ink-3">
            Este produto é um material de capacitação em vendas e atendimento.
            Não possui vínculo, patrocínio ou endosso do WhatsApp, da Meta
            Platforms, Inc. ou de qualquer uma de suas marcas. Resultados
            dependem da aplicação de cada pessoa no próprio negócio.
          </p>
        </div>
      </Container>
    </footer>
  );
}
