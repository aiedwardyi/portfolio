export type Locale = "en" | "ko";

export type Segment =
  | { type: "text"; value: string }
  | { type: "strong"; value: string }
  | { type: "em"; value: string };

export type Dictionary = {
  nav: {
    projects: string;
    about: string;
    experience: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2Prefix: string;
    headlineHighlight: string;
    description: string;
    viewMyWork: string;
    getInTouch: string;
    scroll: string;
  };
  marquee: string[];
  projects: {
    eyebrow: string;
    heading: string;
    badges: {
      featured: string;
      openSource: string;
      patentPending: string;
      buildingNow: string;
      whatIWorkWith: string;
    };
    archon: { description: string; commitsLabel: string };
    stats: {
      yearsLabel: string;
      yearsSuffix: string;
      projectsLabel: string;
      developersLabel: string;
    };
    monitor: { description: string };
    medical: { title: string; description: string };
    quorum: { description: string };
    pyithon: { description: string };
    capabilities: string[];
  };
  about: {
    eyebrow: string;
    heading: string;
    name: string;
    role: string;
    paragraphs: Segment[][];
    values: {
      ship: { title: string; description: string };
      tool: { title: string; description: string };
      ownership: { title: string; description: string };
    };
  };
  experience: {
    eyebrow: string;
    heading: string;
    timeline: {
      period: string;
      role: string;
      company: string;
      description: string;
    }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
  };
  footer: string;
};
