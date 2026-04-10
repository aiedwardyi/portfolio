"use client";

import Image from "next/image";
import { Send, Wrench, Users } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { renderSegments, useLocale } from "@/i18n/LocaleProvider";

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[14px] p-6 transition-all duration-400 group cursor-default"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)";
        e.currentTarget.style.background = "rgba(201,168,76,0.02)";
        e.currentTarget.style.transform = "translateX(4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.background = "var(--surface)";
        e.currentTarget.style.transform = "translateX(0)";
      }}
    >
      {/* Gold left border on hover */}
      <span
        className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "var(--gold)" }}
      />
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
        style={{
          background: "rgba(201,168,76,0.06)",
          border: "1px solid rgba(201,168,76,0.08)",
        }}
      >
        {icon}
      </div>
      <h4 className="text-[14px] font-bold text-white mb-1.5">{title}</h4>
      <p className="text-[12px] leading-[1.6]" style={{ color: "var(--text-muted)" }}>
        {description}
      </p>
    </div>
  );
}

export default function About() {
  const { dict } = useLocale();
  const t = dict.about;
  const iconProps = {
    size: 16,
    strokeWidth: 1.5,
    style: { color: "var(--gold)" } as React.CSSProperties,
  };

  return (
    <section id="about" className="py-28 md:py-32 px-7">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <RevealOnScroll delay={0.2}>
            <div>
              {/* Profile photo: ~140px on mobile centered, ~220px on desktop left-aligned */}
              <div
                className="relative w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden mx-auto md:mx-0 mb-8 md:mb-10"
                style={{
                  border: "1px solid rgba(201,168,76,0.15)",
                  boxShadow: "0 0 40px rgba(201,168,76,0.06)",
                }}
              >
                <Image
                  src="/profile.png"
                  alt="Edward Yi"
                  fill
                  sizes="(max-width: 768px) 140px, 200px"
                  style={{ objectFit: "cover" }}
                  priority={false}
                />
              </div>
              <div className="text-[16px] leading-[1.9]" style={{ color: "var(--text-muted)" }}>
                {t.paragraphs.map((segments, i) => (
                  <div key={i}>
                    {i > 0 && <br />}
                    <p>{renderSegments(segments)}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="flex flex-col gap-4">
              <ValueCard
                icon={<Send {...iconProps} />}
                title={t.values.ship.title}
                description={t.values.ship.description}
              />
              <ValueCard
                icon={<Wrench {...iconProps} />}
                title={t.values.tool.title}
                description={t.values.tool.description}
              />
              <ValueCard
                icon={<Users {...iconProps} />}
                title={t.values.ownership.title}
                description={t.values.ownership.description}
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
