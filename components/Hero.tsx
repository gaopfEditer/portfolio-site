"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-900/30" />
      <div className="mx-auto max-w-5xl section-padding">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-700 dark:text-brand-400">
          {h.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          {h.tagline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">{h.description}</p>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{h.location}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/#work"
            className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            {h.seeWork}
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
          >
            {h.getQuote}
          </Link>
        </div>
      </div>
    </section>
  );
}
