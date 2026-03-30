"use client";

import { motion } from "framer-motion";
import KineticText from "./KineticText";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
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
          edwardyi.dev
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease }}
          className="font-sans text-[clamp(40px,7vw,80px)] font-extrabold leading-[1.0] tracking-[-1.5px] md:tracking-[-3px] mb-7"
        >
          <span className="block">
            <KineticText text="I build AI systems" delay={1200} charDelay={45} />
          </span>
          <span className="block">
            <KineticText text="that " delay={2400} charDelay={45} />
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
              <KineticText text="ship." delay={2700} charDelay={70} />
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
          Founder and senior AI engineer. 8 years leading a 90+ developer organization across 200+ shipped products. Now building multi-agent systems, developer tools, and medical AI with a patent pending.
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
            View My Work
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
            Get in Touch
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
        Scroll
      </motion.span>
    </section>
  );
}
