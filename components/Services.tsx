import { siteConfig } from "@/site.config";

const { pricing } = siteConfig;

function formatFrom(amount: number) {
  return `From $${amount} ${pricing.currency}`;
}

const services = [
  {
    title: "Workflow automation & AI integration",
    description:
      "Connect n8n, Zapier, Make, or custom Python/Node.js flows. Chatbots with OpenAI or Claude, PDF and email data extraction, and AI agents that follow your rules.",
    price: formatFrom(pricing.automationFrom),
  },
  {
    title: "Fix & launch your app",
    description:
      "Fix, finish, and deploy existing web apps—including ones built with Lovable, Cursor, or Bolt. I start with a short audit report so you know what is wrong before we build.",
    price: formatFrom(pricing.appAuditFrom),
  },
  {
    title: "Custom development & scraping",
    description:
      "Full-stack web apps and dashboards. Playwright browser automation and web scraping when you need reliable data from the open web.",
    price: formatFrom(pricing.scraperFrom),
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Services</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Clear scope, fixed quotes when possible, and real code you can own.
        </p>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
              <p className="mt-6 text-sm font-medium text-brand-700 dark:text-brand-400">{service.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
