"use client";

import { Send, Wrench, Users } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

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
            Who I Am
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="font-sans text-[36px] md:text-[40px] font-extrabold tracking-[-1.5px] mb-14 text-white">
            About
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <RevealOnScroll delay={0.2}>
            <div className="text-[16px] leading-[1.9]" style={{ color: "var(--text-muted)" }}>
              <p>
                I spent{" "}
                <strong className="text-[#ccc] font-semibold">
                  8 years leading a blockchain development company
                </strong>{" "}
                — 200+ products shipped, a 90+ developer organization, and clients who deployed{" "}
                <em className="not-italic" style={{ color: "var(--gold)" }}>
                  $167M
                </em>{" "}
                in capital on infrastructure we built.
              </p>
              <br />
              <p>
                I now build{" "}
                <strong className="text-[#ccc] font-semibold">AI products</strong>{" "}
                full-time — from multi-agent platforms
                to developer CLI tools to a medical AI system with a{" "}
                <em className="not-italic" style={{ color: "var(--gold)" }}>
                  patent pending
                </em>
                .
              </p>
              <br />
              <p>
                I build in public. If you care about shipping real products,{" "}
                <strong className="text-[#ccc] font-semibold">
                  let&apos;s build something together
                </strong>
                .
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="flex flex-col gap-4">
              <ValueCard
                icon={<Send {...iconProps} />}
                title="Ship First"
                description="I optimize for shipped products, real users, and feedback loops — not demoware."
              />
              <ValueCard
                icon={<Wrench {...iconProps} />}
                title="Tool Builder"
                description="Every tool I build started as a problem I hit personally. The best ones become daily infrastructure."
              />
              <ValueCard
                icon={<Users {...iconProps} />}
                title="High Ownership"
                description="I think in outcomes, not functions — product, engineering, hiring, and execution all have to line up."
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
