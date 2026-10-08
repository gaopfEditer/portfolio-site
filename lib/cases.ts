import fs from "fs";
import path from "path";

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  status: "published" | "in-progress";
  draft: boolean;
  featured: boolean;
  image: string;
  /** Optional second screenshot on the case page (e.g. admin UI). */
  secondaryImage?: string;
  problem: string;
  solution: string;
  stack: string[];
  links: {
    repo: string;
    live: string;
  };
};

const casesDirectory = path.join(process.cwd(), "content/cases");

function loadAllCases(): CaseStudy[] {
  if (!fs.existsSync(casesDirectory)) return [];
  const files = fs
    .readdirSync(casesDirectory)
    .filter((f) => f.endsWith(".json"));
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
