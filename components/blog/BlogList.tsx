// components/blog/BlogList.tsx
"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import BlogCard from "./BlogCard";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeBlog } from "@/lib/localize";
import type { BlogCategory, BlogPostMeta } from "@/data/blog";

const categories: (BlogCategory | "All")[] = [
  "All",
  "Website Development",
  "Business Digitalization",
  "UI/UX Design",
  "SEO",
  "Technology",
];

type Props = {
  posts: BlogPostMeta[];
};

export default function BlogList({ posts }: Props) {
  const { t, locale } = useLanguage();
  const [active, setActive] = useState<BlogCategory | "All">("All");
  const [query, setQuery] = useState("");

  const featured = useMemo(() => {
    const f = posts.find((p) => p.featured);
    return f ?? posts[0];
  }, [posts]);

  const filtered = useMemo(() => {
    return posts
      .filter((p) => p.slug !== featured?.slug)
      .filter((p) => {
        const local = localizeBlog(p, locale);
        const matchCat = active === "All" || p.category === active;
        const matchQuery =
          query.trim() === "" ||
          local.title.toLowerCase().includes(query.toLowerCase()) ||
          local.excerpt.toLowerCase().includes(query.toLowerCase());
        return matchCat && matchQuery;
      });
  }, [posts, active, query, featured, locale]);

  const showFeatured = useMemo(() => {
    if (!featured) return false;
    const local = localizeBlog(featured, locale);
    return (
      (active === "All" || featured.category === active) &&
      (query.trim() === "" ||
        local.title.toLowerCase().includes(query.toLowerCase()) ||
        local.excerpt.toLowerCase().includes(query.toLowerCase()))
    );
  }, [featured, active, query, locale]);

  return (
    <>
      <div className="mb-10 flex flex-col gap-5 border-b border-line pb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-1.5 text-[12px] transition-colors ${
                active === cat
                  ? "border-accent bg-accent/10 text-ink"
                  : "border-line text-muted hover:text-ink"
              }`}
            >
              {cat === "All" ? t("pages.blog.allCategories") : cat}
            </button>
          ))}
        </div>
        <div className="relative md:w-64">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("pages.blog.searchPlaceholder")}
            className="w-full rounded-full border border-line bg-surface py-2.5 pl-9 pr-4 text-[13px] text-ink placeholder:text-muted focus:border-accent/50 focus:outline-none"
          />
        </div>
      </div>

      {showFeatured && featured && (
        <div className="mb-10">
          <BlogCard post={featured} featured />
        </div>
      )}

      {filtered.length === 0 && !showFeatured ? (
        <div className="rounded-xl border border-line bg-surface/40 py-20 text-center">
          <p className="text-[15px] text-muted">{t("pages.blog.noResults")}</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActive("All");
            }}
            className="mt-4 text-[13px] text-accent hover:underline"
          >
            {t("common.reset")}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  );
}