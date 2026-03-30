"use client";

import { useState, useEffect, useRef } from "react";

interface KineticTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  charDelay?: number;
  glitchChars?: string;
}

export default function KineticText({
  text,
  className = "",
  style,
  delay = 0,
  charDelay = 50,
  glitchChars = "01!@#$%^&*_-+=|:<>/~",
}: KineticTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [glitchChar, setGlitchChar] = useState("");
  const [showGlitch, setShowGlitch] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (indexRef.current >= text.length) return;

    let cancelled = false;

    const glitchTimeout = setTimeout(() => {
      if (cancelled) return;
      const idx = indexRef.current;
      setGlitchChar(glitchChars[idx % glitchChars.length]);
      setShowGlitch(true);

      const resolveTimeout = setTimeout(() => {
        if (cancelled) return;
        indexRef.current = idx + 1;
        setDisplayed(text.slice(0, idx + 1));
        setShowGlitch(false);
      }, 25);

      cleanupRef.current = resolveTimeout;
    }, charDelay);

    const cleanupRef = { current: 0 as unknown as ReturnType<typeof setTimeout> };

    return () => {
      cancelled = true;
      clearTimeout(glitchTimeout);
      clearTimeout(cleanupRef.current);
    };
  }, [started, displayed, text, charDelay, glitchChars]);

  return (
    <span ref={ref} className={className} style={style}>
      {displayed}
      {showGlitch && (
        <span style={{ color: "var(--gold)", opacity: 0.6 }}>
          {glitchChar}
        </span>
      )}
      {started && displayed.length < text.length && (
        <span
          className="inline-block w-[2px] ml-0.5"
          style={{
            height: "0.85em",
            backgroundColor: "var(--gold)",
            animation: "cursor-blink 0.6s step-end infinite",
            verticalAlign: "text-bottom",
          }}
        />
      )}
    </span>
  );
}
