// lib/seo.ts
import type { Metadata } from "next";
import { siteConfig } from "./site";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
};

/**
 * Builder untuk metadata konsisten di semua halaman.
 * Otomatis append brand suffix + set canonical + OG + Twitter.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage = "/opengraph-image",
  type = "website",
  publishedTime,
  noIndex = false,
}: SeoProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    path === "/"
      ? title
      : `${title} — ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      ...(ogImage && {
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: fullTitle,
          },
        ],
      }),
      ...(type === "article" && publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}