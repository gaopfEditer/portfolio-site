"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/site.config";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "How I work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          {siteConfig.displayName}
          <span className="hidden sm:inline text-slate-500 font-normal dark:text-slate-400">
            {" "}
            · Automation dev
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-400"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700"
          >
            Get a quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-slate-200 px-4 py-4 md:hidden dark:border-slate-800"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-1 text-slate-700 dark:text-slate-200"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                Get a quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
