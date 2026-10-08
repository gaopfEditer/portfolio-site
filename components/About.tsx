"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/site.config";

const stack = [
  "Vue & React",
  "NestJS & Node.js",
  "Java & Spring",
  "Python & FastAPI",
  "Docker",
  "n8n / Zapier / Make",
  "OpenAI & Anthropic APIs",
  "PostgreSQL & Google Sheets",
  "Playwright",
];

export function About() {
  const { locale, t } = useLanguage();
  const a = t.about;
  const preferredLanguage =
    locale === "zh" ? "英文（书面沟通）" : siteConfig.preferredLanguage;

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{a.title}</h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-slate-600 dark:text-slate-300">
            <p>{a.p1(siteConfig.displayName)}</p>
            <p>{a.p2}</p>
            <p>{a.p3(siteConfig.timezone, preferredLanguage)}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {a.stackHeading}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
