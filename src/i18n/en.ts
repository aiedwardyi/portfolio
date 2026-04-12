import type { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    projects: "Projects",
    about: "About",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    eyebrow: "edwardyi.dev",
    headlineLine1: "I build AI systems",
    headlineLine2Prefix: "that ",
    headlineHighlight: "ship.",
    description:
      "Founder and senior AI engineer. 8 years leading a 90+ developer organization across 200+ shipped products. Now building multi-agent systems and developer tools.",
    viewMyWork: "View My Work",
    getInTouch: "Get in Touch",
    scroll: "Scroll",
  },
  marquee: [
    "AI Engineering",
    "Multi-Agent Systems",
    "Computer Vision",
    "Blockchain",
    "Full-Stack",
    "Founder",
    "200+ Projects Shipped",
  ],
  projects: {
    eyebrow: "What I'm Building",
    heading: "Projects",
    badges: {
      featured: "Featured",
      openSource: "Open Source",
      buildingNow: "Building Now",
      whatIWorkWith: "What I Work With",
    },
    archon: {
      description:
        "Multi-agent AI platform that turns prompts into production applications. Live previews, automated evaluation loops, and model-agnostic orchestration across Claude, GPT, Gemini, and local models.",
      commitsLabel: "commits",
    },
    stats: {
      yearsLabel: "Leading development teams",
      yearsSuffix: " years",
      projectsLabel: "Projects shipped",
      developersLabel: "Developers at peak",
    },
    monitor: {
      description:
        "Terminal statusline for Claude Code. Real-time quota tracking, zero dependencies. Built for devs who live in the CLI.",
    },
    quorum: {
      description:
        "Multi-AI group chat for consensus. Multiple models discuss topics together and converge through structured rounds.",
    },
    pyithon: {
      description:
        "Gamified Python learning platform. 30 progressive levels, real code execution in-browser via Pyodide, AI-powered evaluation. Zero setup, completely free.",
    },
    capabilities: [
      "Multi-Agent Systems",
      "LLM Orchestration",
      "Computer Vision",
      "Full-Stack Product Engineering",
      "Evals & Deployment",
      "Blockchain & DeFi",
    ],
  },
  about: {
    eyebrow: "Who I Am",
    heading: "About",
    name: "Edward Yi",
    role: "AI Engineer · Founder",
    paragraphs: [
      [
        { type: "text", value: "I spent " },
        {
          type: "strong",
          value: "8 years leading a blockchain development company",
        },
        {
          type: "text",
          value:
            ". 200+ products shipped, a 90+ developer organization, and clients deploying ",
        },
        { type: "em", value: "$167M" },
        { type: "text", value: " in capital on infrastructure we built." },
      ],
      [
        { type: "text", value: "I now build " },
        { type: "strong", value: "AI products" },
        {
          type: "text",
          value:
            " full-time. Multi-agent platforms, developer CLI tools, and full-stack applications.",
        },
      ],
      [
        {
          type: "text",
          value:
            "I build in public. If you care about shipping real products, ",
        },
        { type: "strong", value: "let's build something together" },
        { type: "text", value: "." },
      ],
    ],
    values: {
      ship: {
        title: "Ship First",
        description:
          "I optimize for shipped products, real users, and feedback loops, not demoware.",
      },
      tool: {
        title: "Tool Builder",
        description:
          "Every tool I build started as a problem I hit personally. The best ones become daily infrastructure.",
      },
      ownership: {
        title: "High Ownership",
        description:
          "I think in outcomes, not functions. Product, engineering, hiring, and execution all have to line up.",
      },
    },
  },
  experience: {
    eyebrow: "Where I've Been",
    heading: "Experience",
    timeline: [
      {
        period: "2026 - Present",
        role: "Independent AI Engineer & Founder",
        company: "Seoul, South Korea",
        description:
          "Building AI products full-time. Archon (multi-agent delivery platform), developer tools, and full-stack AI engineering across LLM orchestration and multi-agent systems.",
      },
      {
        period: "2017 - 2026",
        role: "President",
        company: "Rock'n'Block, Blockchain Development Company",
        description:
          "90+ developer organization, 200+ projects shipped. Partners raised $167M. Built DeFi protocols, crypto wallets, NFT marketplaces, and data streaming infrastructure.",
      },
      {
        period: "2014 - 2017",
        role: "CEO",
        company: "HitecLED, LED Solutions",
        description:
          "Founded and operated LED lighting solutions company in Austin, TX. Hardware and software product development, supply chain management, and B2B sales.",
      },
      {
        period: "2013",
        role: "Graduate",
        company: "The University of Texas at Austin",
        description: "Hook 'em. 🤘",
      },
      {
        period: "2003",
        role: "First Servers · Age 14",
        company: "Counter-Strike & College",
        description:
          "Ran two 32-player CS mod servers, both full 24/7. Rented dedicated servers, visited data centers, and monetized access. Started college the same year.",
      },
    ],
  },
  contact: {
    eyebrow: "Let's Connect",
    heading: "Get in Touch",
  },
  footer: "Designed & built by Edward Yi · 2026",
};
