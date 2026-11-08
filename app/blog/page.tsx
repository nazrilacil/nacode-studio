// app/blog/page.tsx
import type { Metadata } from "next";
import BlogContent from "./BlogContent";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Blog & Insight",
  description:
    "Artikel tentang web development, digitalisasi bisnis, UI/UX, dan SEO dari Nacode.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Blog", href: "/blog" }])} />
      <BlogContent />
    </>
  );
}