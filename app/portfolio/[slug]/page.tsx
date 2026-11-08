// app/portfolio/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioDetailContent from "./PortfolioDetailContent";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { projectSchema, breadcrumbSchema, JsonLd } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.overview,
    path: `/portfolio/${project.slug}`,
    ogImage: project.coverImage?.src,
  });
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={projectSchema({
          name: project.title,
          description: project.overview,
          url: `${siteConfig.url}/portfolio/${project.slug}`,
          image: project.coverImage?.src
            ? `${siteConfig.url}${project.coverImage.src}`
            : undefined,
          datePublished: project.year,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Portfolio", href: "/portfolio" },
          { label: project.title },
        ])}
      />
      <PortfolioDetailContent project={project} relatedProjects={related} />
    </>
  );
}