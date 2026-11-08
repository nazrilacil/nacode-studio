// components/services/ServiceDetail.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import ServiceFAQAccordion from "./ServiceFAQAccordion";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeService } from "@/lib/localize";
import type { Service } from "@/data/services";
import type { Project } from "@/data/projects";
import { buildWhatsAppUrl, waMessages } from "@/lib/whatsapp";
import { trackWhatsApp } from "@/lib/analytics";


type Props = {
  service: Service;
  relatedProjects: Project[];
};

export default function ServiceDetail({
  service: rawService,
  relatedProjects,
}: Props) {
  const { locale, t } = useLanguage();
  const service = localizeService(rawService, locale);

  return (
    <>
      <section className="border-b border-line py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                <span className="h-px w-8 bg-accent" />
                {t("pages.services.detail.overview")}
              </div>
              <p className="text-[16px] leading-relaxed text-ink/90 sm:text-[17px]">
                {service.longDescription}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-12">
                <h2 className="font-display text-xl font-medium tracking-tight text-ink">
                  {t("pages.services.detail.problems")}
                </h2>
                <ul className="mt-4 space-y-3">
                  {service.problems.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-[14.5px] leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12">
                <h2 className="font-display text-xl font-medium tracking-tight text-ink">
                  {t("pages.services.detail.process")}
                </h2>
                <ol className="mt-5 space-y-5">
                  {service.process.map((step, i) => (
                    <li key={step.step} className="flex gap-4">
                      <span className="shrink-0 font-mono text-[11px] tracking-wider text-accent-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="text-[14px] font-medium text-ink">
                          {step.step}
                        </div>
                        <p className="mt-0.5 text-[13.5px] leading-relaxed text-muted">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-6 lg:sticky lg:top-28">
              <Reveal delay={0.1}>
                <div className="rounded-xl border border-line bg-surface/40 p-6">
                  <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted">
                    {t("pages.services.detail.features")}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-[13.5px] text-ink/80"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="rounded-xl border border-line bg-surface/40 p-6">
                  <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted">
                    {t("pages.services.detail.benefits")}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {service.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-[13.5px] text-ink/80"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-xl border border-line bg-surface/40 p-6">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
                    {t("pages.services.detail.pricingRef")}
                  </div>
                  <div className="mt-2 font-display text-xl font-medium tracking-tight text-ink">
                    {service.pricingReference}
                  </div>
                  <Link
                    href="/harga"
                    className="group mt-4 inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink"
                  >
                    <span className="border-b border-line pb-0.5 group-hover:border-accent">
                      {t("pages.services.detail.viewPricing")}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <Magnetic>
                  <a
                    href={buildWhatsAppUrl(waMessages.service(service.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsApp(`service_${service.slug}`)}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium text-bg transition-colors hover:opacity-90"
                  >
                    {t("pages.services.detail.consult")} {service.shortTitle}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="border-b border-line py-16 sm:py-24">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <div className="mb-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                  <span className="h-px w-8 bg-accent" />
                  {t("pages.services.detail.related")}
                </div>
                <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-medium tracking-tight">
                  {t("pages.services.detail.relatedTitle")}
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink"
              >
                {t("pages.services.detail.allProjects")}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {relatedProjects.map((p) => (
                <PortfolioCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {service.faq.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-[800px] px-5 sm:px-8">
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                <span className="h-px w-8 bg-accent" />
                FAQ
              </div>
              <h2 className="font-display text-[clamp(1.6rem,4vw,2.25rem)] font-medium tracking-tight">
                {t("pages.services.detail.faqTitle")} {service.shortTitle}
              </h2>
            </div>
            <ServiceFAQAccordion items={service.faq} />
          </div>
        </section>
      )}
    </>
  );
}