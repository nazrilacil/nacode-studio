// components/blog/BlogCard.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeBlog } from "@/lib/localize";
import type { BlogCategory, BlogPostMeta } from "@/data/blog";

const categoryTint: Record<BlogCategory, { glow: string; text: string }> = {
  "Website Development": { glow: "rgba(108,99,255,0.22)", text: "text-[#A5A0FF]" },
  "Business Digitalization": { glow: "rgba(245,180,90,0.18)", text: "text-amber-200/90" },
  "UI/UX Design": { glow: "rgba(230,140,180,0.20)", text: "text-rose-200/90" },
  SEO: { glow: "rgba(90,200,160,0.18)", text: "text-emerald-200/90" },
  Technology: { glow: "rgba(120,180,240,0.20)", text: "text-sky-200/90" },
};

type Props = {
  post: BlogPostMeta;
  featured?: boolean;
};

export default function BlogCard({ post, featured = false }: Props) {
  const { t, locale } = useLanguage();
  const localized = localizeBlog(post, locale);
  const tint = categoryTint[post.category];
  const localeCode = locale === "id" ? "id-ID" : locale;

  const formatDate = (iso: string) =>
    new Intl.DateTimeFormat(localeCode, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${iso}T00:00:00Z`));

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group relative grid overflow-hidden rounded-xl border border-line bg-surface/40 transition-colors duration-500 hover:border-white/20 lg:grid-cols-12"
      >
        <div className="relative overflow-hidden border-b border-line lg:col-span-5 lg:border-b-0 lg:border-r">
          <div
            className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            aria-hidden
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${tint.glow}, transparent 65%)`,
              }}
            />
            <div className="absolute inset-0 grid-pattern opacity-25 [mask-image:radial-gradient(circle_at_center,black_20%,transparent_70%)]" />
            <div className="relative flex h-full min-h-[220px] flex-col justify-between p-6 sm:p-8">
              <div className={`text-[10px] uppercase tracking-[0.24em] ${tint.text}`}>
                {t("pages.blog.featured")}
              </div>
              <div className="font-serif text-[46px] italic leading-none text-white/[0.07] sm:text-[64px]">
                {post.readingTime.toString().padStart(2, "0")}′
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted">
              <span className={tint.text}>{post.category}</span>
              <span className="text-muted/40">·</span>
              <span>
                {post.readingTime} {t("common.minRead")}
              </span>
            </div>
            <h2 className="mt-4 font-display text-[22px] font-medium leading-[1.15] tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-2 sm:text-[28px]">
              {localized.title}
            </h2>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted sm:text-[15px]">
              {localized.excerpt}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-line pt-5">
            <time dateTime={post.publishedAt} className="text-[12px] text-muted">
              {formatDate(post.publishedAt)}
            </time>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface/40 transition-colors duration-500 hover:border-white/20"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          aria-hidden
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${tint.glow}, transparent 70%)`,
            }}
          />
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="relative flex h-full items-end justify-end p-5">
            <span className="font-serif text-[40px] italic leading-none text-white/[0.06]">
              {post.readingTime}′
            </span>
          </div>
        </div>

        {post.featured && (
          <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm">
            {t("pages.blog.featured")}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-[10.5px] uppercase tracking-[0.18em] text-muted">
          <span className={tint.text}>{post.category}</span>
          <span className="text-muted/40">·</span>
          <span>
            {post.readingTime} {t("common.minRead")}
          </span>
        </div>

        <h3 className="mt-3 font-display text-[17px] font-medium leading-snug tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-2 sm:text-[18px]">
          {localized.title}
        </h3>

        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted">
          {localized.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
          <time dateTime={post.publishedAt} className="text-[11.5px] text-muted">
            {formatDate(post.publishedAt)}
          </time>
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}