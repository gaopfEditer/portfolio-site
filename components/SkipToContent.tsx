"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function SkipToContent() {
  const { t } = useLanguage();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg dark:focus:bg-slate-900"
    >
      {t.skipToContent}
    </a>
  );
}
