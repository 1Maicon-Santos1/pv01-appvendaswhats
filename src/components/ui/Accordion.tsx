"use client";

import { useId, useState } from "react";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  question: string;
  answer: string;
};

function Item({ item, index }: { item: AccordionItem; index: number }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  function toggle() {
    const next = !open;
    setOpen(next);
    if (next) track("open_faq", { question: item.question, position: index + 1 });
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-card border transition-colors duration-200",
        open ? "border-brand/35 bg-surface" : "border-line bg-surface/55 hover:border-line-2",
      )}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={toggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        >
          <span className="font-display text-[1.02rem] font-semibold leading-snug text-ink sm:text-[1.1rem]">
            {item.question}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              "relative grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-200",
              open ? "border-brand/50 bg-brand/12 text-brand" : "border-line-2 text-ink-3",
            )}
          >
            <span className="absolute h-[1.5px] w-3.5 rounded bg-current" />
            <span
              className={cn(
                "absolute h-3.5 w-[1.5px] rounded bg-current transition-transform duration-300",
                open && "scale-y-0",
              )}
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[0.98rem] leading-[1.65] text-ink-2 sm:px-6 sm:pb-6">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <Item key={item.question} item={item} index={index} />
      ))}
    </div>
  );
}
