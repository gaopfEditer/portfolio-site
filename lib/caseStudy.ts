import type { Locale } from "@/lib/i18n/locale";

export type CaseStudyLocaleFields = {
  title: string;
  summary: string;
  problem: string;
  solution: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  status: "published" | "in-progress";
  draft: boolean;
  featured: boolean;
  image: string;
  secondaryImage?: string;
  problem: string;
  solution: string;
  stack: string[];
  links: {
    repo: string;
    live: string;
  };
  zh?: CaseStudyLocaleFields;
};

export type CaseStudyText = CaseStudyLocaleFields;

export function getCaseStudyText(item: CaseStudy, locale: Locale): CaseStudyText {
  if (locale === "zh" && item.zh) return item.zh;
  return {
    title: item.title,
    summary: item.summary,
    problem: item.problem,
    solution: item.solution,
  };
}
