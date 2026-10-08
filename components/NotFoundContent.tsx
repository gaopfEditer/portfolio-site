"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export function NotFoundContent() {
  const { t } = useLanguage();
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{t.notFound.title}</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{t.notFound.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.notFound.home}
          </Link>
          <Link
            href="/work/"
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:border-slate-600 dark:text-slate-100"
          >
            {t.notFound.work}
          </Link>
        </div>
      </div>
    </div>
  );
}
