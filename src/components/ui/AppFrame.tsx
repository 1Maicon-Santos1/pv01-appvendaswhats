import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { IS_DEV } from "@/lib/assets";

/**
 * Moldura de aplicativo (celular ou janela).
 * - Com screenshot real em /public/product -> mostra a imagem.
 * - Sem o arquivo -> mostra um slot com o nome exato do arquivo esperado.
 *   O slot so aparece em desenvolvimento; em producao a moldura vazia nao e
 *   renderizada, para nunca publicar um buraco na pagina.
 */

export function PhoneFrame({
  children,
  className,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div className={cn("relative", className)}>
      {glow && (
        <div
          aria-hidden="true"
          className="glow-brand pointer-events-none absolute -inset-10 -z-10 opacity-70 blur-2xl"
        />
      )}
      <div className="relative rounded-[2.2rem] border border-line-2/70 bg-[#0a1a13] p-2 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.04)]">
        <div className="relative overflow-hidden rounded-[1.7rem] border border-line/70 bg-base-2">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-2 z-10 h-1.5 w-20 -translate-x-1/2 rounded-full bg-black/50"
          />
          {children}
        </div>
      </div>
    </div>
  );
}

export function WindowFrame({
  children,
  className,
  title,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-card border border-line-2/70 bg-[#0a1a13] shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line/70 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#2a3b33]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2a3b33]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2a3b33]" />
        </span>
        {title && (
          <span className="truncate text-[0.75rem] font-medium tracking-wide text-ink-3">
            {title}
          </span>
        )}
      </div>
      <div className="bg-base-2">{children}</div>
    </div>
  );
}

/**
 * Slot de screenshot. Renderiza a imagem real quando existe.
 * Retorna null em producao quando o arquivo ainda nao foi enviado.
 */
export function ScreenshotSlot({
  src,
  alt,
  slug,
  ratio = "9/19.5",
  className,
}: {
  src: string | null;
  alt: string;
  slug: string;
  ratio?: string;
  className?: string;
}) {
  if (src) {
    return (
      <div className={cn("relative w-full", className)} style={{ aspectRatio: ratio }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 90vw, 420px"
          className="object-cover object-top"
        />
      </div>
    );
  }

  if (!IS_DEV) return null;

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-2 border border-dashed border-line-2 bg-[#08170f] p-6 text-center",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      <span className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-brand">
        Slot de screenshot
      </span>
      <span className="text-sm font-medium text-ink-2">{alt}</span>
      <code className="rounded bg-black/40 px-2 py-1 text-[0.75rem] text-ink-3">
        /public/product/{slug}.png
      </code>
    </div>
  );
}
