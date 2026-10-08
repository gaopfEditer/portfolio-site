import type { Metadata } from "next";
import { WorkSection } from "@/components/WorkSection";
import { getPublishedCases } from "@/lib/cases";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Portfolio demos with live sites and public code — AI automation, integrations, and production-ready apps.",
  openGraph: {
    title: `Work | ${siteConfig.displayName}`,
    description:
      "Portfolio demos with live sites and public code — AI automation, integrations, and production-ready apps.",
  },
};

export default function WorkPage() {
  const cases = getPublishedCases();

  return <WorkSection cases={cases} />;
}
