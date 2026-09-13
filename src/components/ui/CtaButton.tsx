"use client";

import type { ReactNode } from "react";
import { CHECKOUT_URL } from "@/config/site";
import { track, type TrackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { IconArrow } from "./icons";

type CtaProps = {
  children: ReactNode;
  /** Qual evento este botao dispara. */
  event: Extract<TrackEvent, "click_primary_cta" | "click_final_cta">;
  /** De onde o clique veio — vai junto no evento. */
  origin: string;
  size?: "md" | "lg";
  variant?: "solid" | "ghost";
  className?: string;
  full?: boolean;
};

export function CtaButton({
  children,
  event,
  origin,
  size = "lg",
  variant = "solid",
  className,
  full,
}: CtaProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full font-display font-bold tracking-[-0.01em] transition-[transform,box-shadow,background-color] duration-200 active:translate-y-px";

  const sizes = {
    md: "px-6 py-3 text-[0.95rem] min-h-[48px]",
    lg: "px-7 py-4 text-[1rem] min-h-[56px] sm:text-[1.05rem]",
  } as const;

  const variants = {
    solid:
      "bg-brand text-[#04120a] shadow-[0_10px_30px_-12px_rgba(41,211,102,0.75)] hover:bg-[#34e074] hover:shadow-[0_14px_38px_-12px_rgba(41,211,102,0.85)]",
    ghost:
      "border border-line-2 bg-surface/70 text-ink hover:border-brand/50 hover:bg-surface-2",
  } as const;

  return (
    <a
      href={CHECKOUT_URL}
      onClick={() => track(event, { origin })}
      className={cn(base, sizes[size], variants[variant], full && "w-full", className)}
    >
      <span className="text-center">{children}</span>
      <IconArrow className="h-[1.15em] w-[1.15em] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}
