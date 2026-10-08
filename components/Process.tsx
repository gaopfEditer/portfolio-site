"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/site.config";

export function Process() {
  const { t } = useLanguage();
  const p = t.process;

  return (
    <section id="process" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{p.title}</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{p.intro}</p>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2">
          {p.steps.map((step, index) => {
            const body =
              index === 3 && typeof step.body === "function"
                ? step.body(siteConfig.bugFixDays)
                : typeof step.body === "string"
                  ? step.body
                  : "";
            return (
              <li
                key={step.title}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800 dark:bg-brand-900/50 dark:text-brand-200"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
