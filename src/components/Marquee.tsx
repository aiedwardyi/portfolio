"use client";

import { useLocale } from "@/i18n/LocaleProvider";

function MarqueeContent({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-0 shrink-0">
          <span className="font-mono text-[13px] tracking-[3px] uppercase whitespace-nowrap" style={{ color: "#333" }}>
            {item}
          </span>
          <span
            className="inline-block w-1 h-1 rounded-full mx-6 shrink-0"
            style={{ background: "var(--gold)" }}
          />
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  const { dict } = useLocale();
  const items = dict.marquee;
  return (
    <div
      className="overflow-hidden py-5 border-y"
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className="flex gap-0 w-max"
        style={{ animation: "marquee 35s linear infinite" }}
      >
        <div className="flex shrink-0">
          <MarqueeContent items={items} />
        </div>
        <div className="flex shrink-0">
          <MarqueeContent items={items} />
        </div>
        <div className="flex shrink-0">
          <MarqueeContent items={items} />
        </div>
      </div>
    </div>
  );
}
