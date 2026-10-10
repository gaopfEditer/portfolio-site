"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/site.config";

const { pricing } = siteConfig;

function formatPriceEn(amount: number) {
  return `From $${amount} ${pricing.currency}`;
}

export function Services() {
  const { locale, t } = useLanguage();
  const prices = [pricing.automationFrom, pricing.appAuditFrom, pricing.scraperFrom];
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t.services.title}</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{t.services.intro}</p>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {t.services.items.map((service, index) => (
            <li
              key={service.title}
              tabIndex={0}
              className={`service-card group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 dark:border-slate-800 dark:bg-slate-900 motion-safe:hover:border-brand-300 motion-safe:hover:shadow-brand-500/20 dark:motion-safe:hover:border-brand-600 md:motion-safe:hover:-translate-y-2 md:motion-safe:hover:scale-[1.02] md:motion-safe:hover:shadow-xl ${
                visible ? "service-card-visible" : "service-card-hidden"
              }`}
              style={{ transitionDelay: visible ? `${index * 90}ms` : undefined }}
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{service.description}</p>
              <ul
                className="service-advantages mt-4 space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800"
                aria-label={service.title}
              >
                {service.advantages.map((line) => (
                  <li
                    key={line}
                    className="service-advantage-item flex gap-2 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <span
                      className="service-check mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-100 text-[10px] font-bold text-brand-800 dark:bg-brand-900/50 dark:text-brand-300"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-brand-700 dark:text-brand-400">
                {t.services.startingFrom(
                  locale === "zh"
                    ? `$${prices[index]!} ${pricing.currency}`
                    : formatPriceEn(prices[index]!),
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
