"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const { locale, dict } = useLocale();
  const t = dict.hero;
  // Korean characters fill ~1em x 1em, so they need looser leading and
  // neutral letter-spacing. Latin display type wants tight leading and
  // negative tracking for the dramatic look.
  const headlineClass =
    locale === "ko"
      ? "font-sans text-[clamp(40px,7vw,80px)] font-extrabold leading-[1.2] tracking-normal mb-9"
      : "font-sans text-[clamp(40px,7vw,80px)] font-extrabold leading-[1.0] tracking-[-1.5px] md:tracking-[-3px] mb-7";
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 relative px-7">
      <div className="max-w-[1100px] mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease }}
          className="font-mono text-[11px] tracking-[6px] uppercase mb-7"
          style={{ color: "var(--gold)" }}
        >
          {t.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease }}
          className={headlineClass}
        >
          <span className="block">{t.headlineLine1}</span>
          <span className="block">
            {t.headlineLine2Prefix}
            <span
              className="inline-block"
              style={{
                background:
                  "linear-gradient(135deg, var(--gold-light), var(--gold), #a08030)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
                animation: "shimmer 3s ease-in-out infinite",
              }}
            >
              {t.headlineHighlight}
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease }}
          className="text-[17px] max-w-[500px] leading-[1.8] mb-11"
          style={{ color: "var(--text-muted)" }}
        >
          {t.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block font-semibold text-[13px] py-3.5 px-8 rounded-lg transition-all duration-300 tracking-[0.5px] hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
              color: "#0a0a0a",
              boxShadow: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 12px 40px rgba(201,168,76,0.25)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "none")
            }
          >
            {t.viewMyWork}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block font-medium text-[13px] py-3.5 px-8 rounded-lg border transition-all duration-300 tracking-[0.5px]"
            style={{
              background: "transparent",
              color: "var(--text)",
              borderColor: "rgba(255,255,255,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color = "var(--gold)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(201,168,76,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {t.getInTouch}
          </a>
        </motion.div>
      </div>

      {/* Vertical scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-[60px] left-7 w-px h-20 hidden md:block"
        style={{
          background: "linear-gradient(180deg, var(--gold), transparent)",
        }}
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-[30px] left-[18px] font-mono text-[9px] tracking-[3px] uppercase hidden md:block"
        style={{
          color: "var(--text-muted)",
          writingMode: "vertical-rl",
        }}
      >
        {t.scroll}
      </motion.span>
    </section>
  );
}
