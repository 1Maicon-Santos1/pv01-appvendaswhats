"use client";

import { useEffect, useRef } from "react";
import { track, type TrackEvent } from "@/lib/analytics";

/** Dispara um evento uma única vez quando o bloco entra na tela. */
export function ViewTracker({ event }: { event: TrackEvent }) {
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            track(event);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [event]);

  return <span ref={ref} aria-hidden="true" className="block h-px w-full" />;
}
