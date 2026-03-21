"use client";

import { Send, Github, Linkedin, Mail, Twitter } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const contacts = [
  {
    icon: Send,
    label: "Telegram",
    handle: "@aiedwardyi",
    href: "https://t.me/aiedwardyi",
  },
  {
    icon: Twitter,
    label: "X",
    handle: "@aiedwardyi",
    href: "https://x.com/aiedwardyi",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "aiedwardyi",
    href: "https://github.com/aiedwardyi",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "aiedwardyi",
    href: "https://linkedin.com/in/aiedwardyi",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "aiedwardyi@gmail.com",
    href: "mailto:aiedwardyi@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-32 px-7">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <RevealOnScroll>
          <div
            className="font-mono text-[10px] tracking-[6px] uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Let&apos;s Connect
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="font-sans text-[36px] md:text-[40px] font-extrabold tracking-[-1.5px] mb-14 text-white">
            Get in Touch
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <RevealOnScroll key={contact.label} delay={0.2 + i * 0.1}>
                <a
                  href={contact.href}
                  target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-2xl p-7 text-center no-underline transition-all duration-400 group"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(201,168,76,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Bottom gold bar */}
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-[60%] transition-all duration-400"
                    style={{ background: "var(--gold)" }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.1)]"
                    style={{
                      background: "rgba(201,168,76,0.06)",
                      border: "1px solid rgba(201,168,76,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(201,168,76,0.12)";
                      e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(201,168,76,0.06)";
                      e.currentTarget.style.borderColor = "rgba(201,168,76,0.08)";
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      style={{ color: "var(--gold)" }}
                    />
                  </div>
                  <div className="text-[14px] font-bold text-white mb-1">
                    {contact.label}
                  </div>
                  <div
                    className="text-[11px] font-mono"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {contact.handle}
                  </div>
                </a>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
