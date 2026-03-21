"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  borderColor?: string;
}

export default function BentoCard({
  children,
  className = "",
  delay = 0,
  borderColor,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -6,
        scale: 1.01,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      }}
      className={`relative overflow-hidden rounded-[18px] p-8 transition-shadow duration-500 group ${className}`}
      style={{
        background: "var(--surface)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid ${borderColor || "var(--border)"}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)";
        e.currentTarget.style.boxShadow =
          "0 25px 80px rgba(0,0,0,0.5), 0 0 60px rgba(201,168,76,0.06), inset 0 1px 0 rgba(255,255,255,0.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = borderColor || "var(--border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Top shine sweep */}
      <span
        className="absolute top-0 left-[-100%] w-full h-px group-hover:left-[100%] transition-[left] duration-600"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)",
        }}
      />
      {/* Corner glow */}
      <span
        className="absolute -top-[50px] -right-[50px] w-[150px] h-[150px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--gold-glow), transparent)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
