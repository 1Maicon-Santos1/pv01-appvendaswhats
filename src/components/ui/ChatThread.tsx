import { cn } from "@/lib/cn";

export type ChatMessage = {
  from: "client" | "you";
  text: string;
  time?: string;
  /** "read" mostra o indicador de visualizado. */
  status?: "read" | "sent";
};

export type ChatScene = {
  id: string;
  /** Contexto curto acima da conversa. */
  label: string;
  messages: ChatMessage[];
  /** O desfecho — e aqui que a cena doi. */
  outcome: string;
};

function ReadTicks({ read }: { read: boolean }) {
  return (
    <svg
      viewBox="0 0 20 12"
      className={cn("h-3 w-[18px] shrink-0", read ? "text-accent" : "text-ink-3")}
      aria-hidden="true"
    >
      <path
        d="M1 6.6 4.2 10 11 2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.6 6.6 10.8 10 18 2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChatBubbles({ messages }: { messages: ChatMessage[] }) {
  return (
    <ol className="flex flex-col gap-2.5">
      {messages.map((message, index) => {
        const mine = message.from === "you";
        return (
          <li
            key={index}
            className={cn("flex w-full", mine ? "justify-end" : "justify-start")}
          >
            <div
              className={cn(
                "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[0.94rem] leading-snug shadow-[0_2px_10px_-6px_rgba(0,0,0,0.6)] sm:text-[0.97rem]",
                mine
                  ? "rounded-br-md bg-[#12503a] text-ink"
                  : "rounded-bl-md bg-[#132b21] text-ink-2",
              )}
            >
              <p className="whitespace-pre-line">{message.text}</p>
              {(message.time || message.status) && (
                <span
                  className={cn(
                    "mt-1 flex items-center gap-1 text-[0.75rem] tabular-nums",
                    mine ? "justify-end text-ink-3" : "text-ink-3",
                  )}
                >
                  {message.time}
                  {mine && message.status && (
                    <ReadTicks read={message.status === "read"} />
                  )}
                </span>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/** Cena completa de conversa: contexto, bolhas e desfecho. */
export function ChatCard({
  scene,
  className,
}: {
  scene: ChatScene;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface/80 hairline",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line/80 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-brand/70" aria-hidden="true" />
        <span className="text-[0.75rem] font-medium uppercase tracking-[0.14em] text-ink-3">
          {scene.label}
        </span>
      </div>

      <div className="flex-1 px-4 py-4">
        <ChatBubbles messages={scene.messages} />
      </div>

      <figcaption className="border-t border-line/80 bg-[#071a12] px-4 py-3.5">
        <p className="text-[0.92rem] font-medium leading-snug text-warn">
          {scene.outcome}
        </p>
      </figcaption>
    </figure>
  );
}
