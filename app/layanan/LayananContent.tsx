"use client";

import { useLanguage } from "@/components/LanguageProvider";
import PageHeader from "@/components/layout/PageHeader";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export default function LayananContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t("pages.services.eyebrow")}
        title={t("pages.services.title")}
        description={t("pages.services.description")}
        breadcrumb={[{ label: t("nav.services") }]}
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}