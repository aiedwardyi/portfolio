"use client";

import { createContext, useContext, useEffect } from "react";
import type { Dictionary, Locale, Segment } from "./types";

type LocaleContextValue = { locale: Locale; dict: Dictionary };

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, dict }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}

export function renderSegments(segments: Segment[]): React.ReactNode {
  return segments.map((seg, i) => {
    if (seg.type === "strong") {
      return (
        <strong key={i} className="text-[#ccc] font-semibold">
          {seg.value}
        </strong>
      );
    }
    if (seg.type === "em") {
      return (
        <em key={i} className="not-italic" style={{ color: "var(--gold)" }}>
          {seg.value}
        </em>
      );
    }
    return <span key={i}>{seg.value}</span>;
  });
}
