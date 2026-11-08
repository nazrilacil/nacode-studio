// app/blog/[slug]/BlogDetailChrome.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeBlog } from "@/lib/localize";
import PageHeader from "@/components/layout/PageHeader";
import ReadingProgress from "@/components/blog/ReadingProgress";
import TableOfContents, {
  type Heading,
} from "@/components/blog/TableOfContents";
import ShareButtons from "@/components/blog/ShareButtons";
import RelatedPosts from "@/components/blog/RelatedPosts";
import CTASection from "@/components/sections/CTASection";
import { blogPosts, type BlogPostMeta } from "@/data/blog";
import { siteConfig } from "@/lib/site";

type Props = {
  meta: BlogPostMeta;
  headingsByLocale: Record<string, Heading[]>;
  postUrl: string;
};

export default function BlogDetailChrome({
  meta,
  headingsByLocale,
  postUrl,
}: Props) {
  const { t, locale } = useLanguage();
  const localized = localizeBlog(meta, locale);
  const headings = headingsByLocale[locale] ?? headingsByLocale.en ?? headingsByLocale.id ?? [];

  const localeCode = locale === "id" ? "id-ID" : locale;
  const formattedDate = new Intl.DateTimeFormat(localeCode, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${meta.publishedAt}T00:00:00Z`));

  return (
    <>
      <ReadingProgress />
      <PageHeader
        eyebrow={meta.category}
        title={localized.title}
        description={localized.excerpt}
        breadcrumb={[
          { label: t("nav.blog"), href: "/blog" },
          { label: localized.title },
        ]}
      />

      <div className="border-b border-line">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-5 py-4 text-[12px] text-muted sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span>{formattedDate}</span>
            <span className="text-muted/40">·</span>
            <span>
              {meta.readingTime} {t("common.minRead")}
            </span>
            <span className="text-muted/40">·</span>
            <span>{siteConfig.founder.name}</span>
          </div>
          <ShareButtons url={postUrl} title={localized.title} />
        </div>
      </div>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_240px] lg:gap-16">
          <div className="min-w-0">
            <article className="prose mx-auto max-w-[720px]">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug]}
              >
                {localized.content}
              </ReactMarkdown>
            </article>

            <div className="mx-auto mt-14 max-w-[720px] border-t border-line pt-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface-elev font-display text-[15px] font-medium text-ink">
                    {siteConfig.founder.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-ink">
                      {siteConfig.founder.name}
                    </div>
                    <div className="text-[12px] text-muted">
                      {siteConfig.founder.role}
                    </div>
                  </div>
                </div>
                <ShareButtons url={postUrl} title={localized.title} />
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-[720px]">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-ink"
              >
                <ArrowUpRight className="h-3.5 w-3.5 rotate-[-135deg] transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                {t("pages.blog.backToBlog")}
              </Link>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        </div>
      </section>

      <RelatedPosts
        currentSlug={meta.slug}
        currentCategory={meta.category}
        posts={blogPosts}
      />

      <CTASection
        title={t("home.cta.title")}
        description={t("home.cta.description")}
        whatsappMessage={`Hi NACODE, saya membaca artikel "${localized.title}" dan ingin konsultasi project website.`}
      />
    </>
  );
}