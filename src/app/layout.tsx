import type { Metadata } from "next";
import {
  Sora,
  Instrument_Sans,
  JetBrains_Mono,
  Noto_Sans_KR,
} from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const notoKr = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Edward Yi — AI Engineer, Founder, Builder",
  description:
    "I build AI systems that ship. 8 years leading dev teams, now building AI tooling, multi-agent systems, and medical AI.",
  metadataBase: new URL("https://edwardyi.dev"),
  openGraph: {
    title: "Edward Yi — AI Engineer, Founder, Builder",
    description:
      "I build AI systems that ship. 8 years leading dev teams, now building AI tooling, multi-agent systems, and medical AI.",
    url: "https://edwardyi.dev",
    siteName: "Edward Yi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edward Yi — AI Engineer, Founder, Builder",
    description:
      "I build AI systems that ship. 8 years leading dev teams, now building AI tooling, multi-agent systems, and medical AI.",
    creator: "@aiedwardyi",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ko: "/ko",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${instrument.variable} ${jetbrains.variable} ${notoKr.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
