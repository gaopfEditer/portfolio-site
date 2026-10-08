import fs from "fs";
import path from "path";
import type { CaseStudy } from "@/lib/caseStudy";

export type { CaseStudy, CaseStudyLocaleFields, CaseStudyText } from "@/lib/caseStudy";
export { getCaseStudyText } from "@/lib/caseStudy";

const casesDirectory = path.join(process.cwd(), "content/cases");

function loadAllCases(): CaseStudy[] {
  if (!fs.existsSync(casesDirectory)) return [];
  const files = fs.readdirSync(casesDirectory).filter((f) => f.endsWith(".json"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(casesDirectory, file), "utf8");
      return JSON.parse(raw) as CaseStudy;
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

/** Cases shown on the site (draft: false). */
export function getPublishedCases(): CaseStudy[] {
  return loadAllCases().filter((c) => !c.draft);
}

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return loadAllCases().find((c) => c.slug === slug && !c.draft);
}

export function getAllCaseSlugs(): string[] {
  return getPublishedCases().map((c) => c.slug);
}
