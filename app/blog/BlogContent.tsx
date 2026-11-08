// app/blog/BlogContent.tsx
"use client";

import { useLanguage } from "@/components/LanguageProvider";
import PageHeader from "@/components/layout/PageHeader";
import BlogList from "@/components/blog/BlogList";
import { blogPosts } from "@/data/blog";

export default function BlogContent() {
  const { t } = useLanguage();

  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <PageHeader
        eyebrow={t("pages.blog.eyebrow")}
        title={t("pages.blog.title")}
        description={t("pages.blog.description")}
        breadcrumb={[{ label: t("nav.blog") }]}
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <BlogList posts={sortedPosts} />
        </div>
      </section>
    </>
  );
}