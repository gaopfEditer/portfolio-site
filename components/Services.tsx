"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/site.config";

const { pricing } = siteConfig;

function formatPriceEn(amount: number) {
  return `From $${amount} ${pricing.currency}`;
}

export function Services() {
  const { locale, t } = useLanguage();
  const prices = [pricing.automationFrom, pricing.appAuditFrom, pricing.scraperFrom];

  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t.services.title}</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{t.services.intro}</p>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {t.services.items.map((service, index) => (
            <li
              key={service.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
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
