import Image from "next/image";
import { BRAND } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * Marca. Usa /public/brand/logo.svg (ou .png) quando o arquivo existir;
 * caso contrário, desenha uma marca tipográfica com o nome configurado.
 */
export function Logo({
  src,
  className,
}: {
  src: string | null;
  className?: string;
}) {
  if (src) {
    return (
      <span className={cn("relative block h-8 w-[150px]", className)}>
        <Image
          src={src}
          alt={BRAND.name}
          fill
          sizes="150px"
          className="object-contain object-left"
          priority
        />
      </span>
    );
  }

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="grid h-8 w-8 place-items-center rounded-[0.6rem] bg-brand text-[#04120a]"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M4 19.5 5.3 16A7.6 7.6 0 1 1 8.6 18.6L4 19.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 12.2h6m-2.2-2.4 2.4 2.4-2.4 2.4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-display text-[0.98rem] font-bold leading-none tracking-[-0.02em] text-ink max-[359px]:hidden">
        {BRAND.name}
      </span>
    </span>
  );
}
