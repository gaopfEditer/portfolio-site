/**
 * Edit this file to update your name, links, pricing, and form endpoint.
 */

export const siteConfig = {
  displayName: "Pengfei",
  title: "Pengfei — AI Automation & API Integration Developer",
  tagline:
    "I connect your business tools and add AI, so manual work runs by itself.",
  description:
    "Full-stack developer with ~10 years of experience. Workflow automation, API integration, and custom code when no-code is not enough.",
  locale: "en",
  timezone: "Asia/Shanghai (UTC+8)",
  preferredLanguage: "English (written communication)",

  email: "f1241961245@gmail.com",
  siteUrl: "https://portfolio-site-orpin-three-91.vercel.app",

  links: {
    upwork: "https://www.upwork.com/freelancers/~01c29e20dd0d9fb0f8",
    github: "https://github.com/gaopfEditer",
    linkedin: "", // optional — leave empty to hide
    twitter: "", // optional — leave empty to hide
  },

  /** Formspree form ID or full URL. Leave empty to use mailto fallback. */
  formspreeEndpoint: "", // e.g. "https://formspree.io/f/xxxxxxxx"

  pricing: {
    automationFrom: 120,
    appAuditFrom: 90,
    scraperFrom: 80,
    currency: "USD",
  },

  /** Free bug-fix support days after delivery */
  bugFixDays: 14,

  showReviewsPlaceholder: true,
} as const;

export type SiteConfig = typeof siteConfig;
