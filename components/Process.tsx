import { siteConfig } from "@/site.config";

const steps = [
  {
    title: "Tell me your tools and goal",
    body: "Share what you do by hand today, which apps you use, and what “done” looks like.",
  },
  {
    title: "Written plan, fixed price, timeline",
    body: "You get a short written plan with scope, price, and delivery dates before work starts.",
  },
  {
    title: "Small working part first",
    body: "We ship a thin slice early so you can test the flow and give feedback.",
  },
  {
    title: "Delivery with docs and support",
    body: "", // filled below with config
  },
];

steps[3].body = `You receive source code, a setup guide, and ${siteConfig.bugFixDays} days of free bug fixes for issues in the agreed scope after launch.`;

export function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">How I work</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Simple steps. No surprises.
        </p>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800 dark:bg-brand-900/50 dark:text-brand-200"
                aria-hidden
              >
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
