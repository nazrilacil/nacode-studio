// components/blog/RelatedPosts.tsx
"use client";

import { useLanguage } from "@/components/LanguageProvider";
import BlogCard from "./BlogCard";
import type { BlogPostMeta } from "@/data/blog";

type Props = {
  currentSlug: string;
  currentCategory: BlogPostMeta["category"];
  posts: BlogPostMeta[];
};

export default function RelatedPosts({
  currentSlug,
  currentCategory,
  posts,
}: Props) {
  const { t } = useLanguage();

  const sameCategory = posts.filter(
    (p) => p.slug !== currentSlug && p.category === currentCategory,
  );
  const others = posts.filter(
    (p) => p.slug !== currentSlug && p.category !== currentCategory,
  );
  const related = [...sameCategory, ...others].slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="border-t border-line py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-8 bg-accent" />
              {t("pages.blog.related")}
            </div>
            <h2 className="font-display text-[clamp(1.6rem,4vw,2.25rem)] font-medium tracking-tight">
              {t("pages.blog.relatedTitle")}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}