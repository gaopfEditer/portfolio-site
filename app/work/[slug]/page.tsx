import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudyView } from "@/components/CaseStudyView";
import { getAllCaseSlugs, getCaseBySlug } from "@/lib/cases";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
    openGraph: {
      title: item.title,
      description: item.summary,
      images: item.image ? [{ url: item.image }] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) notFound();

  return <CaseStudyView item={item} />;
}
