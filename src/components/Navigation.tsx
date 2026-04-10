"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, dict } = useLocale();

  const links = [
    { href: "#projects", label: dict.nav.projects },
    { href: "#about", label: dict.nav.about },
    { href: "#experience", label: dict.nav.experience },
    { href: "#contact", label: dict.nav.contact },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          background: "rgba(8,8,10,0.6)",
          backdropFilter: "blur(24px) saturate(1.2)",
          WebkitBackdropFilter: "blur(24px) saturate(1.2)",
          borderColor: "var(--border)",
        }}
      >
        <div className="max-w-[1100px] mx-auto px-7 py-5 flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-mono text-[13px] tracking-[3px] font-medium relative group"
            style={{ color: "var(--gold)" }}
          >
            EDWARD YI
            <span
              className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400"
              style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-9">
            <ul className="flex gap-9 list-none">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="relative text-[12px] font-medium tracking-[1.5px] uppercase transition-colors duration-300 cursor-pointer bg-transparent border-none"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--text)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-muted)")
                    }
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-1.5 left-0 h-px w-0 hover:w-full transition-all duration-300"
                      style={{ background: "var(--gold)" }}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <LocaleToggle locale={locale} />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden bg-transparent border-none cursor-pointer p-1"
            style={{ color: "var(--text)" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[69px] left-0 right-0 z-40 md:hidden border-b"
            style={{
              background: "rgba(8,8,10,0.95)",
              backdropFilter: "blur(24px)",
              borderColor: "var(--border)",
            }}
          >
            <div className="max-w-[1100px] mx-auto px-7 py-6 flex flex-col gap-6">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-[14px] font-medium tracking-[1.5px] uppercase bg-transparent border-none cursor-pointer"
                  style={{ color: "var(--text-muted)" }}
                >
                  {link.label}
                </button>
              ))}
              <div
                className="pt-2 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <LocaleToggle locale={locale} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LocaleToggle({ locale }: { locale: "en" | "ko" }) {
  const baseStyle: React.CSSProperties = {
    fontFamily: "var(--font-jetbrains)",
    letterSpacing: "1.5px",
  };
  const activeStyle: React.CSSProperties = {
    ...baseStyle,
    color: "var(--gold)",
  };
  const inactiveStyle: React.CSSProperties = {
    ...baseStyle,
    color: "var(--text-muted)",
  };

  return (
    <div
      className="flex items-center gap-2 text-[11px] font-medium uppercase select-none"
      aria-label="Language toggle"
    >
      <Link
        href="/"
        prefetch={false}
        scroll={false}
        className="transition-colors duration-300 hover:opacity-80"
        style={locale === "en" ? activeStyle : inactiveStyle}
      >
        EN
      </Link>
      <span style={{ color: "var(--border)" }}>/</span>
      <Link
        href="/ko"
        prefetch={false}
        scroll={false}
        className="transition-colors duration-300 hover:opacity-80"
        style={locale === "ko" ? activeStyle : inactiveStyle}
      >
        KO
      </Link>
    </div>
  );
}
