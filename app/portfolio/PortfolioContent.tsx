// app/portfolio/PortfolioContent.tsx
"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import PageHeader from "@/components/layout/PageHeader";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter";
import { localizeProject } from "@/lib/localize";
import { projects, type ProjectCategory } from "@/data/projects";

export default function PortfolioContent() {
  const { locale, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const local = localizeProject(p, locale);
      const matchCategory = activeCategory === "All" || p.category === activeCategory;
      const matchQuery =
        query.trim() === "" ||
        local.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [activeCategory, query, locale]);

  return (
    <>
      <PageHeader
        eyebrow={t("pages.portfolio.eyebrow")}
        title={t("pages.portfolio.title")}
        description={t("pages.portfolio.description")}
        breadcrumb={[{ label: t("nav.portfolio") }]}
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <PortfolioFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            query={query}
            onQueryChange={setQuery}
          />
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-[15px] text-muted">{t("pages.portfolio.noResults")}</p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
              {filtered.map((project, i) => (
                <div
                  key={project.slug}
                  className={i % 3 === 0 ? "lg:col-span-7" : "lg:col-span-5"}
                >
                  <PortfolioCard project={project} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}