// components/portfolio/CaseStudyDetail.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, ExternalLink, Play } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import PortfolioCard from "./PortfolioCard";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeProject, getProjectCategoryLabel } from "@/lib/localize";
import { getProjectLink } from "@/lib/project-link";
import { buildWhatsAppUrl, waMessages } from "@/lib/whatsapp";
import type { Project } from "@/data/projects";
import EdTechMockup from "@/components/mockups/EdTechMockup";
import AutomotiveMockup from "@/components/mockups/AutomotiveMockup";
import BeautyMockup from "@/components/mockups/BeautyMockup";
import DashboardMockup from "@/components/mockups/DashboardMockup";
import { trackWhatsApp } from "@/lib/analytics";

function Mockup({ variant }: { variant: Project["mockupKey"] }) {
  switch (variant) {
    case "edtech":
      return <EdTechMockup />;
    case "automotive":
      return <AutomotiveMockup />;
    case "beauty":
      return <BeautyMockup />;
    case "dashboard":
      return <DashboardMockup />;
  }
}

type Props = {
  project: Project;
  relatedProjects: Project[];
};

export default function CaseStudyDetail({
  project: rawProject,
  relatedProjects,
}: Props) {
  const { locale, t } = useLanguage();
  const project = localizeProject(rawProject, locale);
  const categoryLabel = getProjectCategoryLabel(rawProject, locale);
  const link = getProjectLink(rawProject);

  return (
    <>
      {/* Hero — foto atau mockup */}
      <section className="border-b border-line py-12 sm:py-16">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <Reveal>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-surface">
              {project.coverImage ? (
                <Image
                  src={project.coverImage.src}
                  alt={project.coverImage.alt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                  priority
                />
              ) : (
                <Mockup variant={project.mockupKey} />
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted">
                  {t("pages.portfolio.detail.category")}
                </div>
                <div className="mt-1 text-[14px] text-ink">{categoryLabel}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted">
                  {t("pages.portfolio.detail.year")}
                </div>
                <div className="mt-1 text-[14px] text-ink">{project.year}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted">
                  {t("pages.portfolio.detail.type")}
                </div>
                <div className="mt-1 text-[14px] text-ink">
                  {project.concept
                    ? t("pages.portfolio.detail.typeConcept")
                    : t("pages.portfolio.detail.typeClient")}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted">
                  {t("pages.portfolio.detail.techStack")}
                </div>
                <div className="mt-1 text-[14px] text-ink">
                  {project.techStack.slice(0, 2).join(", ")}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                <span className="h-px w-8 bg-accent" />
                {t("pages.portfolio.detail.overview")}
              </div>
              <p className="text-[16px] leading-relaxed text-ink/90">
                {project.overview}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-12">
                <h2 className="font-display text-xl font-medium tracking-tight text-ink">
                  {t("pages.portfolio.detail.problem")}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {project.problem}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10">
                <h2 className="font-display text-xl font-medium tracking-tight text-ink">
                  {t("pages.portfolio.detail.solution")}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {project.solution}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12">
                <h2 className="font-display text-xl font-medium tracking-tight text-ink">
                  {t("pages.portfolio.detail.process")}
                </h2>
                <ol className="mt-5 space-y-5">
                  {project.process.map((step, i) => (
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
                    {t("pages.portfolio.detail.features")}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {project.features.map((f) => (
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
                    {t("pages.portfolio.detail.techStack")}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line px-2.5 py-1 text-[11px] text-ink/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {link && (
                <Reveal delay={0.2}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center justify-between overflow-hidden rounded-xl border p-6 transition-colors ${
                      link.isLive
                        ? "border-emerald-500/30 bg-emerald-500/[0.06] hover:border-emerald-400/60 hover:bg-emerald-500/10"
                        : "border-accent/30 bg-accent/[0.06] hover:border-accent/60 hover:bg-accent/10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                          link.isLive
                            ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-400"
                            : "border-accent/40 bg-accent/10 text-accent-2"
                        }`}
                      >
                        <Play className="h-4 w-4 fill-current" />
                      </div>
                      <div>
                        <div
                          className={`text-[10.5px] uppercase tracking-[0.2em] ${
                            link.isLive ? "text-emerald-300/80" : "text-accent-2/80"
                          }`}
                        >
                          {link.isLive
                            ? t("pages.portfolio.detail.liveSite")
                            : t("pages.portfolio.detail.liveDemo")}
                        </div>
                        <div className="mt-0.5 text-[14px] font-medium text-ink">
                          {link.isLive
                            ? t("pages.portfolio.detail.visitSite")
                            : t("pages.portfolio.detail.tryDemo")}
                        </div>
                      </div>
                    </div>
                    <ExternalLink
                      className={`h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                        link.isLive ? "text-emerald-300/80" : "text-accent-2/80"
                      }`}
                    />
                  </a>
                </Reveal>
              )}

              <Reveal delay={0.25}>
                <Magnetic>
                  <a
                    href={buildWhatsAppUrl(waMessages.project(project.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsApp(`project_${project.slug}`)}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium text-bg transition-colors hover:opacity-90"
                  >
                    {t("pages.portfolio.detail.interested")}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — foto tambahan (kalau ada) */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="border-t border-line py-16 sm:py-24">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                <span className="h-px w-8 bg-accent" />
                Gallery
              </div>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-medium tracking-tight">
                Screenshots
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img, i) => (
                <div
                  key={img.src}
                  className={`relative overflow-hidden rounded-lg border border-line bg-surface ${
                    i === 0 && project.gallery!.length % 2 === 1
                      ? "md:col-span-2 lg:col-span-1"
                      : ""
                  }`}
                >
                  <div className="aspect-[16/10]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="border-t border-line py-16 sm:py-24">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <div className="mb-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                  <span className="h-px w-8 bg-accent" />
                  {t("pages.portfolio.detail.related")}
                </div>
                <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-medium tracking-tight">
                  {t("pages.portfolio.detail.related")}
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink"
              >
                {t("pages.portfolio.detail.allRelated")}
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
    </>
  );
}