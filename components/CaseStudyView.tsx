"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getCaseStudyText, type CaseStudy } from "@/lib/caseStudy";
import { siteConfig } from "@/site.config";

export function CaseStudyView({ item }: { item: CaseStudy }) {
  const { locale, t } = useLanguage();
  const text = getCaseStudyText(item, locale);
  const c = t.case;

  return (
    <article className="section-padding">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/work/"
          className="text-sm font-medium text-brand-700 hover:underline dark:text-brand-400"
        >
          {c.backToWork}
        </Link>
        <header className="mt-6">
          {item.status === "in-progress" && (
            <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-900/40 dark:text-amber-200">
              {t.work.inProgress}
            </span>
          )}
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {text.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{text.summary}</p>
        </header>

        <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
          <Image src={item.image} alt="" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 768px" />
        </div>

        {item.secondaryImage ? (
          <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
            <Image
              src={item.secondaryImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        ) : null}

        <div className="prose prose-slate mt-10 max-w-none dark:prose-invert">
          <h2 className="text-xl font-semibold">{c.problem}</h2>
          <p className="text-slate-600 dark:text-slate-300">{text.problem}</p>
          <h2 className="mt-8 text-xl font-semibold">{c.solution}</h2>
          <p className="text-slate-600 dark:text-slate-300">{text.solution}</p>
          <h2 className="mt-8 text-xl font-semibold">{c.stack}</h2>
          <ul className="flex flex-wrap gap-2 list-none pl-0">
            {item.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm dark:border-slate-700 dark:bg-slate-900"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {item.links.repo ? (
            <a
              href={item.links.repo}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.viewRepo}
            </a>
          ) : (
            <span className="rounded-lg border border-dashed border-slate-300 px-4 py-2 text-sm text-slate-500 dark:border-slate-600">
              {c.repoSoon}
            </span>
          )}
          {item.links.live ? (
            <a
              href={item.links.live}
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.liveDemo}
            </a>
          ) : (
            <span className="rounded-lg border border-dashed border-slate-300 px-4 py-2 text-sm text-slate-500 dark:border-slate-600">
              {c.demoSoon}
            </span>
          )}
        </div>

        <p className="mt-12 rounded-lg bg-brand-50 p-4 text-sm text-brand-900 dark:bg-brand-950/50 dark:text-brand-100">
          {c.ctaBefore}
          <Link href="/#contact" className="font-semibold underline">
            {c.ctaQuote}
          </Link>
          {c.ctaMiddle}
          <a href={siteConfig.links.upwork} className="font-semibold underline" target="_blank" rel="noopener noreferrer">
            Upwork
          </a>
          {c.ctaAfter}
        </p>
      </div>
    </article>
  );
}
