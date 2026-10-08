import type { MetadataRoute } from "next";
import { getAllCaseSlugs } from "@/lib/cases";
import { siteConfig } from "@/site.config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const cases = getAllCaseSlugs().map((slug) => ({
    url: `${base}/work/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/work/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...cases,
  ];
}
