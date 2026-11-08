// components/portfolio/PortfolioCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeProject, getProjectCategoryLabel } from "@/lib/localize";
import { getProjectLink } from "@/lib/project-link";
import type { Project } from "@/data/projects";
import EdTechMockup from "@/components/mockups/EdTechMockup";
import AutomotiveMockup from "@/components/mockups/AutomotiveMockup";
import BeautyMockup from "@/components/mockups/BeautyMockup";
import DashboardMockup from "@/components/mockups/DashboardMockup";

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
};

export default function PortfolioCard({ project: rawProject }: Props) {
  const { locale, t } = useLanguage();
  const project = localizeProject(rawProject, locale);
  const categoryLabel = getProjectCategoryLabel(rawProject, locale);
  const link = getProjectLink(rawProject);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-500 hover:border-white/20">
      {/* ⬇️ Wrapper: gambar + tombol hover — tinggi wrapper = tinggi gambar */}
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        {/* Gambar — klik navigasi ke detail */}
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
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
                className="object-cover"
                priority={false}
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

        {/* ⬇️ Tombol hover — sibling dari Link, absolute inset-0 = penuh wrapper gambar */}
        {link && (
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
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

      {/* Meta bar */}
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
  );
}