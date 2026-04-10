import type { Dictionary } from "./types";

export const ko: Dictionary = {
  nav: {
    projects: "프로젝트",
    about: "소개",
    experience: "경력",
    contact: "연락처",
  },
  hero: {
    eyebrow: "edwardyi.dev",
    headlineLine1: "아이디어와 구현 사이,",
    headlineLine2Prefix: "완성된 가치를 ",
    headlineHighlight: "전달합니다.",
    description:
      "AI 엔지니어이자 창업자. 8년간 90명 이상 규모의 개발 조직을 이끌며 200개가 넘는 제품을 출시했습니다. 지금은 멀티 에이전트 시스템, 개발자 도구, 그리고 특허 출원 중인 의료 AI를 만들고 있습니다.",
    viewMyWork: "프로젝트 보기",
    getInTouch: "연락하기",
    scroll: "스크롤",
  },
  marquee: [
    "AI 엔지니어링",
    "멀티 에이전트 시스템",
    "컴퓨터 비전",
    "블록체인",
    "특허 출원 중",
    "풀스택",
    "창업자",
    "200개 이상의 프로젝트 출시",
  ],
  projects: {
    eyebrow: "지금 만드는 것",
    heading: "프로젝트",
    badges: {
      featured: "주요 프로젝트",
      openSource: "오픈소스",
      patentPending: "특허 출원 중",
      buildingNow: "개발 중",
      whatIWorkWith: "사용 기술",
    },
    archon: {
      description:
        "프롬프트를 실제 프로덕션 애플리케이션으로 바꿔주는 멀티 에이전트 AI 플랫폼. 실시간 미리보기, 자동 평가 루프, 그리고 Claude, GPT, Gemini, 로컬 모델까지 아우르는, 모델에 종속되지 않는 오케스트레이션.",
      commitsLabel: "커밋",
    },
    stats: {
      yearsLabel: "개발 조직 운영",
      yearsSuffix: "년",
      projectsLabel: "출시한 프로젝트",
      developersLabel: "조직 규모",
    },
    monitor: {
      description:
        "Claude Code 전용 터미널 상태 표시줄. 실시간 사용량 추적, 별도의 의존성 없이 동작합니다. 터미널이 일터인 개발자를 위해 만들었습니다.",
    },
    medical: {
      title: "의료 AI",
      description:
        "피부 병리 진단을 위한 의료 AI. 특허 출원 중이며, 임상 협업을 진행 중입니다.",
    },
    quorum: {
      description:
        "여러 AI가 합의에 도달하는 그룹 채팅입니다. 다양한 모델이 함께 주제를 논의하고, 구조화된 라운드를 거쳐 의견을 모읍니다.",
    },
    pyithon: {
      description:
        "게임처럼 즐기는 Python 학습 플랫폼. 30단계로 구성된 점진적 학습 과정, Pyodide 기반 브라우저 내 실제 코드 실행, AI 기반 평가까지. 설치 없이, 완전 무료로.",
    },
    capabilities: [
      "멀티 에이전트 시스템",
      "LLM 오케스트레이션",
      "컴퓨터 비전",
      "풀스택 제품 엔지니어링",
      "평가 및 배포",
      "블록체인 & DeFi",
    ],
  },
  about: {
    eyebrow: "어떤 사람일까요",
    heading: "소개",
    paragraphs: [
      [
        { type: "text", value: "저는 " },
        {
          type: "strong",
          value: "8년간 블록체인 개발 회사를 이끌었습니다",
        },
        {
          type: "text",
          value:
            ". 200개가 넘는 제품을 출시했고, 90명 이상의 개발 조직을 운영했으며, 직접 구축한 인프라 위에서 클라이언트들이 ",
        },
        { type: "em", value: "1억 6,700만 달러" },
        { type: "text", value: " 규모의 자산을 운용했습니다." },
      ],
      [
        { type: "text", value: "지금은 " },
        { type: "strong", value: "AI 제품" },
        {
          type: "text",
          value:
            "을 풀타임으로 만들고 있습니다. 멀티 에이전트 플랫폼, 개발자 CLI 도구, 그리고 ",
        },
        { type: "em", value: "특허 출원 중" },
        { type: "text", value: "인 의료 AI 시스템까지 다양한 영역에서 개발하고 있습니다." },
      ],
      [
        {
          type: "text",
          value:
            "개발 과정을 투명하게 공개합니다. 실제로 출시되는 제품을 만드는 일에 관심이 있으시다면, ",
        },
        { type: "strong", value: "함께 만들어 보시죠" },
        { type: "text", value: "." },
      ],
    ],
    values: {
      ship: {
        title: "출시 우선",
        description:
          "데모가 아닌, 실제로 출시된 제품과 사용자, 그리고 피드백 루프에 집중합니다.",
      },
      tool: {
        title: "도구 제작자",
        description:
          "제가 만든 도구는 모두 직접 겪은 문제에서 시작됐습니다. 그중 좋은 것들은 매일 쓰는 인프라가 됩니다.",
      },
      ownership: {
        title: "높은 주인의식",
        description:
          "기능이 아닌 결과를 생각합니다. 제품, 엔지니어링, 채용, 실행이 모두 맞물려야 합니다.",
      },
    },
  },
  experience: {
    eyebrow: "지나온 길",
    heading: "경력",
    timeline: [
      {
        period: "2026 — 현재",
        role: "독립 AI 엔지니어 & 창업자",
        company: "대한민국 서울",
        description:
          "AI 제품을 풀타임으로 개발하고 있습니다. 대표적으로 Archon(멀티 에이전트 배포 플랫폼), 특허 출원 중인 의료 AI, 개발자 도구를 개발하고 있습니다. LLM 오케스트레이션, 컴퓨터 비전, 멀티 에이전트 시스템을 아우르는 풀스택 AI 엔지니어링을 전문으로 합니다.",
      },
      {
        period: "2017 — 2026",
        role: "대표",
        company: "Rock'n'Block — 블록체인 개발 회사",
        description:
          "90명 이상 규모의 개발 조직을 운영하며 200개가 넘는 프로젝트를 출시했습니다. 파트너사들이 총 1억 6,700만 달러 규모의 자금을 유치했고, DeFi 프로토콜, 암호화폐 지갑, NFT 마켓플레이스, 데이터 스트리밍 인프라를 구축했습니다.",
      },
      {
        period: "2014 — 2017",
        role: "대표",
        company: "HitecLED — LED 솔루션",
        description:
          "미국 텍사스 오스틴에서 LED 조명 솔루션 회사를 창업하고 운영했습니다. 하드웨어와 소프트웨어 제품 개발, 공급망 관리, B2B 영업을 총괄했습니다.",
      },
      {
        period: "2013",
        role: "졸업",
        company: "텍사스 오스틴 대학교 (The University of Texas at Austin)",
        description: "Hook 'em. 🤘",
      },
      {
        period: "2003",
        role: "첫 서버 운영 · 14세",
        company: "Counter-Strike 서버 운영 및 대학 입학",
        description:
          "32인용 CS 모드 서버 두 대를 운영했고, 두 서버 모두 24시간 사용자가 가득했습니다. 전용 서버를 임대하고, 데이터 센터를 직접 찾아가고, 이용권을 판매해 수익을 창출했습니다. 같은 해에 대학에 입학했습니다.",
      },
    ],
  },
  contact: {
    eyebrow: "함께 일해요",
    heading: "연락처",
  },
  footer: "디자인 및 개발 — Edward Yi · 2026",
};
