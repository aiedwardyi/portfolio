import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: "https://edwardyi.dev",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://edwardyi.dev",
          ko: "https://edwardyi.dev/ko",
        },
      },
    },
    {
      url: "https://edwardyi.dev/ko",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://edwardyi.dev",
          ko: "https://edwardyi.dev/ko",
        },
      },
    },
  ];
}
