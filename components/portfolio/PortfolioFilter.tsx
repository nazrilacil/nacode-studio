// components/portfolio/PortfolioFilter.tsx
"use client";

import { Search } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getCategoryFilterLabel } from "@/lib/localize";
import type { ProjectCategory } from "@/data/projects";

const categories: (ProjectCategory | "All")[] = [
  "All",
  "Business Website",
  "Landing Page",
  "Web Application",
  "Education",
  "Local Business",
];

type Props = {
  activeCategory: ProjectCategory | "All";
  onCategoryChange: (cat: ProjectCategory | "All") => void;
  query: string;
  onQueryChange: (q: string) => void;
};

export default function PortfolioFilter({
  activeCategory,
  onCategoryChange,
  query,
  onQueryChange,
}: Props) {
  const { locale, t } = useLanguage();

  return (
    <div className="flex flex-col gap-4 border-b border-line pb-6 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onCategoryChange(cat)}
            className={`rounded-full border px-4 py-1.5 text-[12px] transition-colors ${
              activeCategory === cat
                ? "border-accent bg-accent/10 text-ink"
                : "border-line text-muted hover:text-ink"
            }`}
          >
            {cat === "All" ? t("pages.portfolio.allProjects") : getCategoryFilterLabel(cat, locale)}
          </button>
        ))}
      </div>

      <div className="relative md:w-64">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder={t("pages.portfolio.searchPlaceholder")}
          className="w-full rounded-full border border-line bg-surface py-2.5 pl-9 pr-4 text-[13px] text-ink placeholder:text-muted focus:border-accent/50 focus:outline-none"
        />
      </div>
    </div>
  );
}