// app/portfolio/[slug]/PortfolioDetailContent.tsx
"use client";

import { useLanguage } from "@/components/LanguageProvider";
import PageHeader from "@/components/layout/PageHeader";
import CaseStudyDetail from "@/components/portfolio/CaseStudyDetail";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  relatedProjects: Project[];
};

export default function PortfolioDetailContent({
  project,
  relatedProjects,
}: Props) {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={
          project.concept ? t("pages.portfolio.concept") : t("nav.portfolio")
        }
        title={project.title}
        description={project.overview}
        breadcrumb={[
          { label: t("nav.portfolio"), href: "/portfolio" },
          { label: project.title },
        ]}
      />
      <CaseStudyDetail project={project} relatedProjects={relatedProjects} />
    </>
  );
}