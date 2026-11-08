// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GithubSlugger from "github-slugger";
import BlogDetailChrome from "./BlogDetailChrome";
import type { Heading } from "@/components/blog/TableOfContents";
import { blogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, JsonLd } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

function extractHeadings(content: string): Heading[] {
  const slugger = new GithubSlugger();
  const regex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let m: RegExpExecArray | null;

  while ((m = regex.exec(content)) !== null) {
    const level = m[1].length;
    const text = m[2].trim();
    if (!text) continue;
    headings.push({ level, text, id: slugger.slug(text) });
  }
  return headings;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
  });
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const meta = blogPosts.find((p) => p.slug === slug);
  if (!meta) notFound();

  const headingsByLocale: Record<string, Heading[]> = {
    id: extractHeadings(meta.content),
  };
  if (meta.translations?.en?.content) {
    headingsByLocale.en = extractHeadings(meta.translations.en.content);
  }

  const postUrl = `${siteConfig.url}/blog/${meta.slug}`;

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: meta.title,
          description: meta.excerpt,
          url: postUrl,
          datePublished: meta.publishedAt,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Blog", href: "/blog" },
          { label: meta.title },
        ])}
      />
      <BlogDetailChrome
        meta={meta}
        headingsByLocale={headingsByLocale}
        postUrl={postUrl}
      />
    </>
  );
}