import type { SVGProps } from "react";

/**
 * Conjunto de icones proprio, em SVG inline.
 * Evita uma dependencia inteira de biblioteca de icones por ~12 formas.
 * Todos herdam currentColor e tem stroke consistente (1.6).
 */

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Base>
);

export const IconX = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Base>
);

export const IconArrow = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12h15m-6-6 6 6-6 6" />
  </Base>
);

export const IconChat = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 12.5c0 3.9-3.6 7-8 7-1 0-2-.15-2.9-.44L4 20.5l1.5-3.6A6.6 6.6 0 0 1 4 12.5c0-3.9 3.6-7 8-7s8 3.1 8 7Z" />
  </Base>
);

export const IconClock = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7.5V12l3 2" />
  </Base>
);

export const IconHeadphones = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <path d="M4 14h2.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V14Zm16 0h-2.5a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1V14Z" />
  </Base>
);

export const IconTarget = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 4v2m0 12v2M4 12h2m12 0h2" />
  </Base>
);

export const IconTrophy = (p: IconProps) => (
  <Base {...p}>
    <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
    <path d="M8 5.5H5.5v1A3.5 3.5 0 0 0 8.6 10M16 5.5h2.5v1A3.5 3.5 0 0 1 15.4 10" />
    <path d="M12 13v3m-3 4h6l-.5-2.5h-5L9 20Z" />
  </Base>
);

export const IconChart = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 19.5h16" />
    <path d="M7 19.5V12m5 7.5V6m5 13.5v-5.5" />
  </Base>
);

export const IconList = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 6.5h11M9 12h11M9 17.5h11" />
    <path d="M4.5 6.5h.01M4.5 12h.01M4.5 17.5h.01" />
  </Base>
);

export const IconPlay = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.2" />
    <path d="M10.4 9.3v5.4l4.4-2.7-4.4-2.7Z" fill="currentColor" stroke="none" />
  </Base>
);

export const IconSpark = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 4.5 13.7 9l4.5 1.7-4.5 1.7L12 17l-1.7-4.6L5.8 10.7 10.3 9 12 4.5Z" />
    <path d="M18.5 16.5 19 18l1.5.5-1.5.5-.5 1.5-.5-1.5L16.5 18l1.5-.5.5-1.5Z" />
  </Base>
);

export const IconCalendar = (p: IconProps) => (
  <Base {...p}>
    <rect x="3.5" y="5.5" width="17" height="15" rx="2.5" />
    <path d="M3.5 10h17M8 3.5v4m8-4v4" />
  </Base>
);

export const IconRepeat = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 9.5A4.5 4.5 0 0 1 8.5 5H18m0 0-3-3m3 3-3 3" />
    <path d="M20 14.5a4.5 4.5 0 0 1-4.5 4.5H6m0 0 3 3m-3-3 3-3" />
  </Base>
);

export const IconWhats = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20Z" />
    <path d="M9.2 9.1c-.2 1.6 2 4.1 3.6 4.6.5.1 1.1-.4 1.4-.8.2-.3.6-.3.9-.1l1 .7c.3.2.4.6.2.9-.5.8-1.4 1.3-2.3 1.1-2.7-.5-5.4-3.2-5.9-5.9-.2-.9.3-1.8 1.1-2.3.3-.2.7-.1.9.2l.7 1c.2.3.2.7-.1.9-.4.3-.9.9-.8 1.4" />
  </Base>
);
