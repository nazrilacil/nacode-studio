"use client";

import { useLanguage } from "@/components/LanguageProvider";
import PageHeader from "@/components/layout/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight, Lightbulb, Telescope, Target, UserRound } from "lucide-react";

export default function TentangContent() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader
        eyebrow={t("pages.about.eyebrow")}
        title={t("pages.about.title")}
        description={t("pages.about.description")}
        breadcrumb={[{ label: t("nav.about") }]}
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-accent">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <h2 className="font-display text-2xl font-medium tracking-tight">
                    {t("pages.about.whyTitle")}
                  </h2>
                </div>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
                  <p>{t("pages.about.whyP1")}</p>
                  <p>{t("pages.about.whyP2")}</p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <Telescope className="h-4 w-4 text-accent" />
                      <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted">{t("pages.about.vision")}</h3>
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-ink/80">{t("pages.about.visionText")}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-accent" />
                      <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted">{t("pages.about.mission")}</h3>
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-ink/80">{t("pages.about.missionText")}</p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="rounded-xl border border-line bg-surface p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-elev text-accent">
                      <UserRound className="h-4 w-4" />
                    </div>
                    <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted">{t("pages.about.founder")}</h3>
                  </div>
                  <p className="mt-5 font-display text-lg font-medium text-ink">{siteConfig.founder.name}</p>
                  <p className="text-[13px] text-muted">{siteConfig.founder.role}</p>
                  <p className="mt-4 text-[14px] leading-relaxed text-muted">{t("pages.about.founderText")}</p>
                  <a href="/kontak" className="group mt-6 inline-flex items-center gap-2 text-[14px] text-ink">
                    <span className="border-b border-line pb-0.5 group-hover:border-accent">{t("pages.about.startDiscuss")}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}