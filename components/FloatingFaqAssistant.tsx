"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

function scrollToContact(focusField: boolean) {
  const contact = document.getElementById("contact");
  if (contact) {
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
    if (focusField) {
      window.setTimeout(() => document.getElementById("name")?.focus(), 400);
    }
    return;
  }
  window.location.href = "/#contact";
}

export function FloatingFaqAssistant() {
  const { t } = useLanguage();
  const f = t.faqWidget;
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const activeChip = f.chips.find((c) => c.id === activeId);

  const close = useCallback(() => {
    setOpen(false);
    setActiveId(null);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }

      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    const closeBtn = panelRef.current?.querySelector<HTMLElement>("[data-faq-close]");
    closeBtn?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <div className="faq-widget pointer-events-none fixed z-50 inset-x-0 bottom-4 flex justify-end px-4 sm:inset-x-auto sm:right-5 sm:bottom-auto sm:top-[58%] sm:translate-y-[-40%] sm:px-0">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        {open ? (
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="faq-panel w-[min(100vw-2rem,22rem)] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="flex items-start justify-between gap-2">
              <h2 id={titleId} className="text-base font-semibold text-slate-900 dark:text-white">
                {f.panelTitle}
              </h2>
              <button
                type="button"
                data-faq-close
                onClick={close}
                className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-white"
                aria-label={f.closeLabel}
              >
                <span aria-hidden className="text-lg leading-none">
                  ×
                </span>
              </button>
            </div>

            {!activeChip ? (
              <>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{f.welcome}</p>
                <ul className="mt-3 flex max-h-[min(40vh,16rem)] flex-col gap-2 overflow-y-auto">
                  {f.chips.map((chip) => (
                    <li key={chip.id}>
                      <button
                        type="button"
                        onClick={() => setActiveId(chip.id)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-left text-sm text-slate-800 transition hover:border-brand-300 hover:bg-brand-50 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:border-brand-600"
                      >
                        {chip.question}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="mt-2">
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  className="text-sm font-medium text-brand-700 hover:underline dark:text-brand-400"
                >
                  {f.backToQuestions}
                </button>
                <p className="mt-3 text-sm font-medium text-slate-900 dark:text-white">{activeChip.question}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{activeChip.answer}</p>
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  close();
                  scrollToContact(true);
                }}
                className="rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-700"
              >
                {f.ctaQuote}
              </button>
              <button
                type="button"
                onClick={() => {
                  close();
                  scrollToContact(true);
                }}
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                {f.ctaContact}
              </button>
              <Link
                href="/#work"
                onClick={() => close()}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-brand-700 hover:underline dark:text-brand-400"
              >
                {f.ctaWork}
              </Link>
            </div>
          </div>
        ) : null}

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="faq-avatar-btn group relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-200 bg-gradient-to-br from-brand-50 to-white shadow-lg ring-4 ring-white/80 transition hover:scale-105 hover:border-brand-400 dark:border-brand-700 dark:from-slate-800 dark:to-slate-900 dark:ring-slate-950/80"
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-label={open ? f.closeLabel : f.toggleLabel}
        >
          <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden role="img">
            <rect x="14" y="18" width="36" height="32" rx="8" className="fill-brand-500 dark:fill-brand-600" />
            <rect x="20" y="26" width="8" height="8" rx="2" className="fill-white" />
            <rect x="36" y="26" width="8" height="8" rx="2" className="fill-white" />
            <rect x="26" y="40" width="12" height="4" rx="2" className="fill-brand-200" />
            <circle cx="32" cy="12" r="4" className="fill-brand-400" />
            <line x1="32" y1="8" x2="32" y2="4" stroke="currentColor" strokeWidth="2" className="text-brand-500" />
          </svg>
          <span className="faq-avatar-pulse absolute inset-0 rounded-full border-2 border-brand-400/40" aria-hidden />
        </button>
      </div>
    </div>
  );
}
