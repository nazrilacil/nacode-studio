// app/layanan/[slug]/ServiceDetailContent.tsx
"use client";

import { useLanguage } from "@/components/LanguageProvider";
import PageHeader from "@/components/layout/PageHeader";
import ServiceDetail from "@/components/services/ServiceDetail";
import CTASection from "@/components/sections/CTASection";
import { localizeService } from "@/lib/localize";
import type { Service } from "@/data/services";
import type { Project } from "@/data/projects";

type Props = {
  service: Service;
  relatedProjects: Project[];
};

export default function ServiceDetailContent({
  service,
  relatedProjects,
}: Props) {
  const { locale, t } = useLanguage();
  const localized = localizeService(service, locale);

  return (
    <>
      <PageHeader
        eyebrow={t("pages.services.eyebrow")}
        title={localized.title}
        description={localized.description}
        breadcrumb={[
          { label: t("nav.services"), href: "/layanan" },
          { label: localized.shortTitle },
        ]}
      />
      <ServiceDetail service={service} relatedProjects={relatedProjects} />
      <CTASection
        title={`${t("pages.services.detail.consult")} ${localized.shortTitle}?`}
        description={t("pages.pricing.ctaDescription")}
        whatsappMessage={`Hi NACODE, saya ingin konsultasi mengenai layanan *${localized.title}*.`}
      />
    </>
  );
}