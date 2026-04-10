import type { Metadata } from "next";
import {
  Sora,
  Instrument_Sans,
  JetBrains_Mono,
  Noto_Sans_KR,
} from "next/font/google";
import "@fontsource/pretendard/400.css";
import "@fontsource/pretendard/500.css";
import "@fontsource/pretendard/600.css";
import "@fontsource/pretendard/700.css";
import "@fontsource/pretendard/800.css";
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
  title: "Edward Yi | AI Engineer, Founder, Builder",
  description:
    "I build AI systems that ship. 8 years leading dev teams, now building AI tooling, multi-agent systems, and medical AI.",
  metadataBase: new URL("https://edwardyi.dev"),
  openGraph: {
    title: "Edward Yi | AI Engineer, Founder, Builder",
    description:
      "I build AI systems that ship. 8 years leading dev teams, now building AI tooling, multi-agent systems, and medical AI.",
    url: "https://edwardyi.dev",
    siteName: "Edward Yi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edward Yi | AI Engineer, Founder, Builder",
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Edward Yi",
  alternateName: "에드워드 이",
  jobTitle: "AI Engineer, Founder",
  url: "https://edwardyi.dev",
  image: "https://edwardyi.dev/profile.png",
  description:
    "AI engineer and founder. 8 years leading a 90+ developer organization across 200+ shipped products. Now building multi-agent systems, developer tools, and medical AI with a patent pending.",
  sameAs: [
    "https://github.com/aiedwardyi",
    "https://x.com/aiedwardyi",
    "https://linkedin.com/in/aiedwardyi",
    "https://t.me/aiedwardyi",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Multi-Agent Systems",
    "Large Language Models",
    "Computer Vision",
    "Full-Stack Engineering",
    "Blockchain",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Seoul",
    addressCountry: "KR",
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
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
