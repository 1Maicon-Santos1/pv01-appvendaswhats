import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Densidade vertical. Ritmo da pagina depende de alternar isso. */
  space?: "tight" | "normal" | "loose";
  /** Fundo da secao. */
  tone?: "base" | "raised" | "deep";
  as?: "section" | "div" | "footer";
};

const SPACE = {
  tight: "py-14 sm:py-16 lg:py-20",
  normal: "py-16 sm:py-20 lg:py-28",
  loose: "py-20 sm:py-28 lg:py-36",
} as const;

const TONE = {
  base: "bg-base",
  raised: "bg-base-2",
  deep: "bg-[#030c08]",
} as const;

export function Section({
  id,
  children,
  className,
  space = "normal",
  tone = "base",
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn("relative w-full", SPACE[space], TONE[tone], className)}
    >
      {children}
    </Tag>
  );
}

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  /** `reading` limita a largura para leitura confortavel de texto corrido. */
  size?: "default" | "reading" | "wide";
}) {
  const width = {
    default: "max-w-[1160px]",
    reading: "max-w-[760px]",
    wide: "max-w-[1320px]",
  }[size];

  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8", width, className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand sm:text-[0.78rem]",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-brand/60" />
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-display text-[1.7rem] font-bold leading-[1.14] tracking-[-0.02em] text-ink text-balance sm:text-[2.25rem] lg:text-[2.75rem]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[1.0625rem] leading-[1.65] text-ink-2 sm:text-lg",
        className,
      )}
    >
      {children}
    </p>
  );
}
