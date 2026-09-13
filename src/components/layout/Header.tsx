"use client";

import { useEffect, useState } from "react";
import { ANCHORS, CTA_LABEL } from "@/config/site";
import { cn } from "@/lib/cn";
import { CtaButton } from "@/components/ui/CtaButton";
import { Logo } from "./Logo";

const NAV = [
  { href: `#${ANCHORS.problema}`, label: "O problema" },
  { href: `#${ANCHORS.metodo}`, label: "O método" },
  { href: `#${ANCHORS.app}`, label: "O app" },
  { href: `#${ANCHORS.oferta}`, label: "Oferta" },
  { href: `#${ANCHORS.faq}`, label: "Dúvidas" },
];

export function Header({ logoSrc }: { logoSrc: string | null }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-line/80 bg-base/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1160px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-[4.5rem]">
        <a href="#topo" className="shrink-0" aria-label="Início da página">
          <Logo src={logoSrc} />
        </a>

        <nav aria-label="Seções da página" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[0.88rem] font-medium text-ink-2 transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* O CtaButton ja e inline-flex; o wrapper e quem controla o display
            por breakpoint, para nao depender da ordem das classes do Tailwind. */}
        <span className="hidden shrink-0 sm:block">
          <CtaButton event="click_primary_cta" origin="header" size="md">
            {CTA_LABEL}
          </CtaButton>
        </span>

        <a
          href={`#${ANCHORS.oferta}`}
          className="flex min-h-[40px] shrink-0 items-center rounded-full border border-line-2 px-4 text-[0.85rem] font-semibold text-ink sm:hidden"
        >
          Ver oferta
        </a>
      </div>
    </header>
  );
}
