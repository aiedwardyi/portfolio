"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import RevealOnScroll from "@/components/RevealOnScroll";

const ParticleNetwork = dynamic(() => import("@/components/ParticleNetwork"), {
  ssr: false,
});

const ProjectConstellation = dynamic(
  () => import("@/components/ProjectConstellation"),
  { ssr: false }
);

function SectionDivider() {
  return (
    <div
      className="w-full h-px relative z-10"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)",
      }}
    />
  );
}

export default function ClientPage() {
  return (
    <>
      {/* Film grain */}
      <div className="film-grain" />

      {/* Ambient mesh blobs */}
      <div className="ambient-mesh">
        <div
          className="mesh-blob"
          style={{
            width: 500,
            height: 500,
            background: "rgba(201,168,76,0.03)",
            top: -150,
            right: -100,
          }}
        />
        <div
          className="mesh-blob"
          style={{
            width: 400,
            height: 400,
            background: "rgba(255,255,255,0.015)",
            bottom: "10%",
            left: -100,
            animationDelay: "-8s",
          }}
        />
        <div
          className="mesh-blob"
          style={{
            width: 350,
            height: 350,
            background: "rgba(201,168,76,0.02)",
            top: "50%",
            left: "40%",
            animationDelay: "-16s",
          }}
        />
      </div>

      {/* Particles */}
      <ParticleNetwork />

      {/* Content */}
      <Navigation />
      <Hero />
      <Marquee />
      <Projects />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />

      {/* Project Constellation */}
      <section className="py-28 md:py-32 px-7">
        <div className="max-w-[1100px] mx-auto relative z-10">
          <RevealOnScroll>
            <div
              className="font-mono text-[10px] tracking-[6px] uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              How It Connects
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="font-sans text-[36px] md:text-[40px] font-extrabold tracking-[-1.5px] mb-4 text-white">
              The Network
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p
              className="text-[15px] leading-[1.8] mb-10 max-w-[500px]"
              style={{ color: "var(--text-muted)" }}
            >
              Every project feeds into the next. Hover to trace the connections.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <ProjectConstellation />
          </RevealOnScroll>
        </div>
      </section>

      <SectionDivider />
      <Contact />

      {/* Footer */}
      <footer
        className="border-t py-10 text-center relative z-10"
        style={{ borderColor: "var(--border)" }}
      >
        <p
          className="text-[11px] font-mono tracking-[2px]"
          style={{ color: "#333" }}
        >
          Designed & built by Edward Yi · 2026
        </p>
      </footer>
    </>
  );
}
