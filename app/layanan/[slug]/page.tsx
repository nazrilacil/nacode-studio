// app/layanan/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailContent from "./ServiceDetailContent";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema, breadcrumbSchema, JsonLd } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/layanan/${service.slug}`,
  });
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedProjects = projects.filter((p) =>
    service.relatedProjectSlugs.includes(p.slug),
  );

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.title,
          description: service.description,
          url: `${siteConfig.url}/layanan/${service.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Layanan", href: "/layanan" },
          { label: service.shortTitle },
        ])}
      />
      <ServiceDetailContent service={service} relatedProjects={relatedProjects} />
    </>
  );
}