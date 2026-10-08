"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const next = locale === "en" ? "zh" : "en";
  const label = locale === "en" ? t.langSwitch.toChinese : t.langSwitch.toEnglish;

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      className={`rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-900 ${className}`}
      aria-label={locale === "en" ? "Switch to Chinese" : "Switch to English"}
    >
      {label}
    </button>
  );
}
