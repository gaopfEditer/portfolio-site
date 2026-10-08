"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/site.config";

const budgetOptions = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
  "Not sure yet",
];

const timelineOptions = ["ASAP", "2–4 weeks", "1–2 months", "Flexible"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { formspreeEndpoint, email, links } = siteConfig;
  const useFormspree = Boolean(formspreeEndpoint?.trim());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!useFormspree) {
      const subject = encodeURIComponent("Project inquiry from portfolio");
      const body = encodeURIComponent(
        [
          `Name: ${data.get("name")}`,
          `Email: ${data.get("email")}`,
          `Budget: ${data.get("budget")}`,
          `Timeline: ${data.get("timeline")}`,
          "",
          String(data.get("message") ?? ""),
        ].join("\n"),
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Contact / Get a quote
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Tell me what you do by hand today. I usually reply within one business day.
        </p>

        <div className="mt-10 grid gap-12 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 lg:col-span-3"
            action={useFormspree ? formspreeEndpoint : undefined}
            method={useFormspree ? "POST" : undefined}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                What do you do by hand today? / Project description
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Budget range
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                >
                  {timelineOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60"
            >
              {useFormspree
                ? status === "sending"
                  ? "Sending…"
                  : "Send message"
                : "Email project details"}
            </button>

            {!useFormspree && (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Opens your email app with this form pre-filled, or write directly to{" "}
                <a href={`mailto:${email}`} className="font-medium text-brand-700 underline dark:text-brand-400">
                  {email}
                </a>
                .
              </p>
            )}

            {status === "sent" && (
              <p className="text-sm text-green-700 dark:text-green-400" role="status">
                Thanks! Your message was sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-700 dark:text-red-400" role="alert">
                Something went wrong. Please email me directly at{" "}
                <a href={`mailto:${email}`} className="underline">
                  {email}
                </a>
                .
              </p>
            )}
          </form>

          <aside className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Elsewhere</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={links.upwork}
                  className="font-medium text-brand-700 hover:underline dark:text-brand-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire on Upwork
                </a>
              </li>
              <li>
                <a
                  href={links.github}
                  className="font-medium text-brand-700 hover:underline dark:text-brand-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="font-medium text-brand-700 hover:underline dark:text-brand-400">
                  {email}
                </a>
              </li>
            </ul>
            <p className="mt-8 text-sm text-slate-600 dark:text-slate-400">
              After delivery, I include {siteConfig.bugFixDays} days of bug fixes for issues in the agreed
              scope.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
