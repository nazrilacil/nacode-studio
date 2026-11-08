// components/SelectedWork.tsx
"use client";

import { ArrowUpRight, ExternalLink, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "./ui/Reveal";
import { useLanguage } from "./LanguageProvider";
import { localizeProject, getProjectCategoryLabel } from "@/lib/localize";
import { getProjectLink } from "@/lib/project-link";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import EdTechMockup from "./mockups/EdTechMockup";
import AutomotiveMockup from "./mockups/AutomotiveMockup";
import BeautyMockup from "./mockups/BeautyMockup";
import DashboardMockup from "./mockups/DashboardMockup";

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

const DISPLAY_META: Record<string, { span: string; aspect: string }> = {
  "otak-kancil": { span: "lg:col-span-7", aspect: "aspect-[16/11]" },
  "automotive-pangandaran": {
    span: "lg:col-span-5",
    aspect: "aspect-[4/5] lg:aspect-auto lg:h-full",
  },
  "beauty-studio": {
    span: "lg:col-span-5",
    aspect: "aspect-[4/5] lg:aspect-auto lg:h-full",
  },
  "digital-business-platform": { span: "lg:col-span-7", aspect: "aspect-[16/11]" },
};

export default function SelectedWork() {
  const { locale, t } = useLanguage();

  const displayProjects = projects
    .filter((p) => DISPLAY_META[p.slug])
    .map((p) => ({ ...p, ...DISPLAY_META[p.slug] }));

  return (
    <section id="work" className="relative border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mb-14 grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-8 bg-accent" />
              {t("home.work.eyebrow")}
            </div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.02em]">
              {t("home.work.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="max-w-sm text-[15px] leading-relaxed text-muted md:text-right">
              {t("home.work.subtitle")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          {displayProjects.map((rawProject, i) => {
            const project = localizeProject(rawProject, locale);
            const categoryLabel = getProjectCategoryLabel(rawProject, locale);
            const link = getProjectLink(rawProject);
            const meta = DISPLAY_META[rawProject.slug];

            return (
              <Reveal
                key={project.slug}
                delay={i * 0.06}
                className={`${meta.span} h-full`}
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-500 hover:border-white/20">
                  {/* Wrapper: gambar + tombol hover */}
                  <div className={`relative w-full overflow-hidden ${meta.aspect}`}>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      aria-label={`View case study ${project.title}`}
                      className="absolute inset-0"
                    >
                      <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
                        {project.coverImage ? (
                          <Image
                            src={project.coverImage.src}
                            alt={project.coverImage.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 640px"
                            className="object-cover"
                          />
                        ) : (
                          <Mockup variant={project.mockupKey} />
                        )}
                      </div>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                      {project.concept && (
                        <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm">
                          {t("pages.portfolio.concept")}
                        </div>
                      )}

                      {link && (
                        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm">
                          <span
                            className={`relative inline-block h-1.5 w-1.5 rounded-full ${
                              link.isLive ? "bg-emerald-400" : "bg-accent-2"
                            }`}
                          />
                          {link.badgeLabel}
                        </div>
                      )}
                    </Link>

                    {/* Tombol hover — absolute inset-0 flex center */}
                    {link && (
                      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[12px] font-medium text-white shadow-lg backdrop-blur-md transition-all ${
                            link.isLive
                              ? "border-emerald-400/40 bg-emerald-500/90 hover:bg-emerald-500"
                              : "border-white/20 bg-black/70 hover:border-accent/60 hover:bg-accent"
                          }`}
                        >
                          <Play className="h-3 w-3 fill-current" />
                          {link.buttonLabel}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Meta */}
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="flex flex-1 items-start justify-between gap-4 border-t border-line p-5 transition-colors hover:bg-surface-elev/40"
                  >
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-lg font-medium tracking-tight text-ink sm:text-xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-[13px] text-muted">{categoryLabel}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <span className="text-[12px] text-muted">{project.year}</span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-12 flex justify-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[14px] text-ink transition-colors hover:border-accent/60 hover:bg-accent/10"
          >
            {t("home.work.viewAll")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}