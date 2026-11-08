"use client";

import { useLanguage } from "@/components/LanguageProvider";
import PageHeader from "@/components/layout/PageHeader";
import ProjectInquiryForm from "@/components/forms/ProjectInquiryForm";
import { siteConfig } from "@/lib/site";
import { Mail, MapPin } from "lucide-react";

export default function KontakContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t("pages.contact.eyebrow")}
        title={t("pages.contact.title")}
        description={t("pages.contact.description")}
        breadcrumb={[{ label: t("nav.contact") }]}
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ProjectInquiryForm />
          </div>
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted">{t("pages.contact.email")}</h3>
                <a href={`mailto:${siteConfig.email}`} className="mt-2 flex items-center gap-2 text-[15px] text-ink hover:text-accent-2">
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted">{t("pages.contact.location")}</h3>
                <p className="mt-2 flex items-center gap-2 text-[15px] text-ink/80">
                  <MapPin className="h-4 w-4" />
                  {siteConfig.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}