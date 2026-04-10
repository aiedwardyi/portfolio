"use client";

import RevealOnScroll from "./RevealOnScroll";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Experience() {
  const { dict } = useLocale();
  const t = dict.experience;
  const timeline = t.timeline;
  return (
    <section id="experience" className="py-28 md:py-32 px-7">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <RevealOnScroll>
          <div
            className="font-mono text-[10px] tracking-[6px] uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            {t.eyebrow}
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="font-sans text-[36px] md:text-[40px] font-extrabold tracking-[-1.5px] mb-14 text-white">
            {t.heading}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="relative pl-10">
            {/* Timeline line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(180deg, var(--gold), rgba(201,168,76,0.2), transparent)",
              }}
            />

            {timeline.map((item, i) => (
              <div
                key={i}
                className="relative pb-14 last:pb-0 group"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[41px] top-[6px] w-[9px] h-[9px] rounded-full transition-all duration-300 group-hover:scale-[1.3]"
                  style={{
                    background: "var(--bg)",
                    border: "2px solid var(--gold)",
                    boxShadow: "0 0 16px rgba(201,168,76,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--gold)";
                    e.currentTarget.style.boxShadow =
                      "0 0 24px rgba(201,168,76,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--bg)";
                    e.currentTarget.style.boxShadow =
                      "0 0 16px rgba(201,168,76,0.3)";
                  }}
                />
                <div
                  className="font-mono text-[11px] tracking-[2px] mb-2.5"
                  style={{ color: "var(--gold)" }}
                >
                  {item.period}
                </div>
                <div className="text-[20px] font-bold text-white mb-1">
                  {item.role}
                </div>
                <div
                  className="text-[14px] mb-2.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.company}
                </div>
                <div className="text-[13px] leading-[1.7]" style={{ color: "var(--text-muted)" }}>
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
