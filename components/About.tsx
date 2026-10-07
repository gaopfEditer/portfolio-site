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
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">About</h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              Hi, I&apos;m {siteConfig.displayName}. I&apos;m a full-stack developer with about 10 years of
              experience building web apps and integrations for teams in different industries.
            </p>
            <p>
              I focus on AI automation and API integration: connecting CRMs, spreadsheets, email, and
              custom apps so repetitive work runs on a schedule. When templates and no-code hit a wall, I
              write Python or TypeScript that you can maintain.
            </p>
            <p>
              I work remotely from China ({siteConfig.timezone}) and communicate in{" "}
              {siteConfig.preferredLanguage}.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Tech stack
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
