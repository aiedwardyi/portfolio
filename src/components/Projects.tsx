"use client";

import {
  Zap,
  Monitor,
  Microscope,
  MessageSquare,
  GraduationCap,
  Code2,
} from "lucide-react";
import BentoCard from "./BentoCard";
import AnimatedCounter from "./AnimatedCounter";
import RevealOnScroll from "./RevealOnScroll";
import { useLocale } from "@/i18n/LocaleProvider";

function CardIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-5"
      style={{
        background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))",
        border: "1px solid rgba(201,168,76,0.12)",
      }}
    >
      {children}
    </div>
  );
}

function TechPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[10px] py-1 px-3 rounded-md font-mono transition-all duration-300 hover:shadow-[0_0_12px_rgba(201,168,76,0.1)]"
      style={{
        background: "rgba(201,168,76,0.06)",
        color: "var(--gold)",
        border: "1px solid rgba(201,168,76,0.1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(201,168,76,0.12)";
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(201,168,76,0.06)";
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)";
      }}
    >
      {children}
    </span>
  );
}

export default function Projects() {
  const { dict } = useLocale();
  const t = dict.projects;
  return (
    <section id="projects" className="py-28 md:py-32 px-7">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Archon - wide */}
          <BentoCard
            className="md:col-span-2"
            delay={0.2}
            borderColor="rgba(201,168,76,0.08)"
          >
            <CardIcon>
              <Zap size={20} strokeWidth={1.5} style={{ color: "var(--gold)" }} />
            </CardIcon>
            <div
              className="font-mono text-[10px] tracking-[3px] uppercase mb-3.5"
              style={{ color: "var(--gold)" }}
            >
              {t.badges.featured}
            </div>
            <h3 className="text-[22px] font-bold mb-2.5 text-white">Archon</h3>
            <p
              className="text-[13px] leading-[1.7]"
              style={{ color: "var(--text-muted)" }}
            >
              {t.archon.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <TechPill>Python</TechPill>
              <TechPill>React</TechPill>
              <TechPill>Flask</TechPill>
              <TechPill>Multi-Agent</TechPill>
              <TechPill>LLM Orchestration</TechPill>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <span className="font-mono text-[28px] font-black text-white">
                744
                <span className="text-[14px]" style={{ color: "var(--gold)" }}>
                  +
                </span>
              </span>
              <span className="text-[11px]" style={{ color: "#555" }}>
                {t.archon.commitsLabel}
              </span>
              <span
                className="w-px h-6 mx-2"
                style={{ background: "var(--border)" }}
              />
              <a
                href="https://archon.works"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono transition-opacity hover:opacity-80"
                style={{ color: "var(--gold)" }}
              >
                archon.works →
              </a>
            </div>
          </BentoCard>

          {/* Stats */}
          <BentoCard delay={0.3} className="flex flex-col justify-center">
            <div className="flex flex-col gap-7">
              <div>
                <AnimatedCounter
                  target={8}
                  suffix={t.stats.yearsSuffix}
                  className="text-[48px] md:text-[52px] font-black text-white leading-none"
                  suffixClassName="text-[18px] font-normal"

                />
                <div
                  className="text-[13px] mt-1.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {t.stats.yearsLabel}
                </div>
              </div>
              <div className="h-px" style={{ background: "var(--border)" }} />
              <div>
                <AnimatedCounter
                  target={200}
                  suffix="+"
                  className="text-[48px] md:text-[52px] font-black text-white leading-none"
                  suffixClassName="text-[18px] font-normal"
                />
                <div
                  className="text-[13px] mt-1.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {t.stats.projectsLabel}
                </div>
              </div>
              <div className="h-px" style={{ background: "var(--border)" }} />
              <div>
                <AnimatedCounter
                  target={90}
                  suffix="+"
                  className="text-[48px] md:text-[52px] font-black text-white leading-none"
                  suffixClassName="text-[18px] font-normal"
                />
                <div
                  className="text-[13px] mt-1.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {t.stats.developersLabel}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* claude-usage-monitor */}
          <BentoCard delay={0.2}>
            <CardIcon>
              <Monitor size={20} strokeWidth={1.5} style={{ color: "var(--gold)" }} />
            </CardIcon>
            <div
              className="font-mono text-[10px] tracking-[3px] uppercase mb-3.5"
              style={{ color: "#888" }}
            >
              {t.badges.openSource}
            </div>
            <h3 className="text-[22px] font-bold mb-2.5 text-white">
              claude-usage-monitor
            </h3>
            <p
              className="text-[13px] leading-[1.7]"
              style={{ color: "var(--text-muted)" }}
            >
              {t.monitor.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <TechPill>Python</TechPill>
              <TechPill>Bash</TechPill>
              <TechPill>CLI</TechPill>
            </div>
            <div className="mt-4">
              <a
                href="https://github.com/aiedwardyi/claude-usage-monitor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono transition-opacity hover:opacity-80"
                style={{ color: "var(--gold)" }}
              >
                GitHub →
              </a>
            </div>
          </BentoCard>

          {/* Medical AI */}
          <BentoCard delay={0.3} borderColor="rgba(201,168,76,0.08)">
            <CardIcon>
              <Microscope size={20} strokeWidth={1.5} style={{ color: "var(--gold)" }} />
            </CardIcon>
            <div
              className="font-mono text-[10px] tracking-[3px] uppercase mb-3.5"
              style={{ color: "var(--gold)" }}
            >
              {t.badges.patentPending}
            </div>
            <h3 className="text-[22px] font-bold mb-2.5 text-white">
              {t.medical.title}
            </h3>
            <p
              className="text-[13px] leading-[1.7]"
              style={{ color: "var(--text-muted)" }}
            >
              {t.medical.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <TechPill>Python</TechPill>
              <TechPill>PyTorch</TechPill>
              <TechPill>Computer Vision</TechPill>
            </div>
          </BentoCard>

          {/* Quorum */}
          <BentoCard delay={0.4}>
            <CardIcon>
              <MessageSquare
                size={20}
                strokeWidth={1.5}
                style={{ color: "var(--gold)" }}
              />
            </CardIcon>
            <div
              className="font-mono text-[10px] tracking-[3px] uppercase mb-3.5 flex items-center"
              style={{ color: "var(--gold)" }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full mr-2.5"
                style={{
                  background: "var(--gold)",
                  animation: "pulse-gold 2s ease-in-out infinite",
                }}
              />
              {t.badges.buildingNow}
            </div>
            <h3 className="text-[22px] font-bold mb-2.5 text-white">Quorum</h3>
            <p
              className="text-[13px] leading-[1.7]"
              style={{ color: "var(--text-muted)" }}
            >
              {t.quorum.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <TechPill>Next.js</TechPill>
              <TechPill>AI APIs</TechPill>
              <TechPill>SSE</TechPill>
            </div>
          </BentoCard>

          {/* Pyi-thon */}
          <BentoCard delay={0.5}>
            <CardIcon>
              <GraduationCap
                size={20}
                strokeWidth={1.5}
                style={{ color: "var(--gold)" }}
              />
            </CardIcon>
            <div
              className="font-mono text-[10px] tracking-[3px] uppercase mb-3.5"
              style={{ color: "#888" }}
            >
              {t.badges.openSource}
            </div>
            <h3 className="text-[22px] font-bold mb-2.5 text-white">
              Pyi-thon
            </h3>
            <p
              className="text-[13px] leading-[1.7]"
              style={{ color: "var(--text-muted)" }}
            >
              {t.pyithon.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <TechPill>React</TechPill>
              <TechPill>Pyodide</TechPill>
              <TechPill>AI Eval</TechPill>
              <TechPill>Gamification</TechPill>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://pyithon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono transition-opacity hover:opacity-80"
                style={{ color: "var(--gold)" }}
              >
                Pyithon.com →
              </a>
              <span
                className="w-px h-4"
                style={{ background: "var(--border)" }}
              />
              <a
                href="https://github.com/aiedwardyi/pyi-thon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono transition-opacity hover:opacity-80"
                style={{ color: "var(--gold)" }}
              >
                GitHub →
              </a>
            </div>
          </BentoCard>

          {/* Capabilities */}
          <BentoCard delay={0.6}>
            <CardIcon>
              <Code2 size={20} strokeWidth={1.5} style={{ color: "var(--gold)" }} />
            </CardIcon>
            <div
              className="font-mono text-[10px] tracking-[3px] uppercase mb-3.5"
              style={{ color: "#555" }}
            >
              {t.badges.whatIWorkWith}
            </div>
            <div className="flex flex-col gap-3 mt-2">
              {t.capabilities.map((item) => (
                <div
                  key={item}
                  className="text-[13px] flex items-center gap-2.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "var(--gold)" }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
