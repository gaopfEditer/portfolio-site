"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/site.config";

export function Footer() {
  const year = new Date().getFullYear();
  const { links } = siteConfig;
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 section-padding sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-slate-900 dark:text-white">{siteConfig.displayName}</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{f.tagline(siteConfig.timezone)}</p>
        </div>
        <ul className="flex flex-wrap gap-4 text-sm">
          <li>
            <a
              href={links.upwork}
              className="text-brand-700 hover:underline dark:text-brand-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {f.upwork}
            </a>
          </li>
          <li>
            <a
              href={links.github}
              className="text-brand-700 hover:underline dark:text-brand-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {f.github}
            </a>
          </li>
          <li>
            <Link href="/#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              {f.contact}
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
        {f.rights(year, siteConfig.displayName)}
      </div>
    </footer>
  );
}
