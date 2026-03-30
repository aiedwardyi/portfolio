"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const ParticleNetwork = dynamic(() => import("@/components/ParticleNetwork"), {
  ssr: false,
});

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
