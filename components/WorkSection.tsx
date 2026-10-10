"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getCaseStudyText, type CaseStudy } from "@/lib/caseStudy";
import { siteConfig } from "@/site.config";

type Props = {
  cases: CaseStudy[];
};

export function WorkSection({ cases }: Props) {
  const { locale, t } = useLanguage();
  const w = t.work;

  return (
    <section id="work" className="section-padding bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{w.title}</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{w.intro}</p>

        {siteConfig.showReviewsPlaceholder && (
          <p className="mt-6 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400">
            {w.upworkNoteBefore}
            <a
              href={siteConfig.links.upwork}
              className="font-medium text-brand-700 underline dark:text-brand-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {w.upworkLink}
            </a>
            {w.upworkNoteAfter}
          </p>
        )}

        <ul className="mt-12 grid gap-10">
          {cases.map((item) => {
            const text = getCaseStudyText(item, locale);
            return (
              <li
                key={item.slug}
                className="work-card group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="grid gap-6 md:grid-cols-2 md:gap-0">
                  <div className="relative aspect-video overflow-hidden md:aspect-auto md:min-h-[240px]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 ease-out motion-safe:md:group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span
                      className="pointer-events-none absolute inset-0 bg-brand-950/0 transition-colors duration-500 motion-safe:md:group-hover:bg-brand-950/10 dark:motion-safe:md:group-hover:bg-brand-400/10"
                      aria-hidden
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 md:p-8">
                    {item.status === "in-progress" && (
                      <span className="mb-2 w-fit rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-900/40 dark:text-amber-200">
                        {w.inProgress}
                      </span>
                    )}
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{text.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{text.summary}</p>
                    <Link
                      href={`/work/${item.slug}/`}
                      className="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:underline dark:text-brand-400"
                    >
                      {w.readCaseStudy}
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
