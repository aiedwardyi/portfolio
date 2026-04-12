import type { Metadata } from "next";
import ClientPage from "@/components/ClientPage";
import { ko } from "@/i18n/ko";

export const metadata: Metadata = {
  title: "에드워드 이 | AI 엔지니어, 창업자, 제품 개발자",
  description:
    "실제로 동작하는 AI 시스템을 설계하고 개발합니다. 8년간 개발팀을 이끌며 200개 이상의 제품을 출시했고, 현재는 AI 도구와 멀티 에이전트 시스템을 개발하고 있습니다.",
  alternates: {
    canonical: "/ko",
    languages: {
      en: "/",
      ko: "/ko",
    },
  },
  openGraph: {
    title: "에드워드 이 | AI 엔지니어, 창업자, 제품 개발자",
    description:
      "실제로 동작하는 AI 시스템을 설계하고 개발합니다. 8년간 개발팀을 이끌며 200개 이상의 제품을 출시했고, 현재는 AI 도구와 멀티 에이전트 시스템을 개발하고 있습니다.",
    url: "https://edwardyi.dev/ko",
    siteName: "Edward Yi",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "에드워드 이 | AI 엔지니어, 창업자, 제품 개발자",
    description:
      "실제로 동작하는 AI 시스템을 설계하고 개발합니다. 8년간 개발팀을 이끌며 200개 이상의 제품을 출시했고, 현재는 AI 도구와 멀티 에이전트 시스템을 개발하고 있습니다.",
    creator: "@aiedwardyi",
  },
};

export default function HomeKo() {
  return <ClientPage locale="ko" dict={ko} />;
}
