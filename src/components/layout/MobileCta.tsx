"use client";

import { useEffect, useState } from "react";
import { ANCHORS, CHECKOUT_URL, OFFER } from "@/config/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { IconArrow } from "@/components/ui/icons";

/**
 * Barra fixa de CTA no mobile.
 * Aparece depois do herói e some quando a própria seção de oferta está na
 * tela — para não cobrir o botão principal nem atrapalhar a leitura.
 */
export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const offer = document.getElementById(ANCHORS.oferta);
    let offerVisible = false;
    let scrolledEnough = false;

    const update = () => setVisible(scrolledEnough && !offerVisible);

    const onScroll = () => {
      scrolledEnough = window.scrollY > window.innerHeight * 0.9;
      update();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let observer: IntersectionObserver | undefined;
    if (offer && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          offerVisible = entries.some((entry) => entry.isIntersecting);
          update();
        },
        { threshold: 0.06 },
      );
      observer.observe(offer);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-base/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-300 sm:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <a
        href={CHECKOUT_URL}
        tabIndex={visible ? undefined : -1}
        onClick={() => track("click_primary_cta", { origin: "mobile_sticky" })}
        className="flex min-h-[52px] w-full items-center justify-between gap-3 rounded-full bg-brand px-5 py-3 text-[#04120a]"
      >
        <span className="flex flex-col text-left leading-tight">
          <span className="font-display text-[0.98rem] font-bold">
            Quero destravar minhas conversas
          </span>
          <span className="text-[0.78rem] font-medium opacity-80">
            Acesso completo por {OFFER.priceLabel}
          </span>
        </span>
        <IconArrow className="h-5 w-5 shrink-0" />
      </a>
    </div>
  );
}
