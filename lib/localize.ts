// lib/localize.ts
import type { Locale } from "@/components/LanguageProvider";
import type { FAQItem } from "@/data/faq";
import type { BlogPostMeta } from "@/data/blog";
import type { PricingPackage } from "@/data/pricing";
import type { Service } from "@/data/services";
import type { Project, ProjectCategory } from "@/data/projects";

export function localizeFAQ(item: FAQItem, locale: Locale): FAQItem {
  if (locale === "id" || !item.translations) return item;
  const tr = item.translations[locale];
  if (!tr) return item;
  return { ...item, question: tr.question, answer: tr.answer };
}

export function localizeBlog(post: BlogPostMeta, locale: Locale): BlogPostMeta {
  if (locale === "id" || !post.translations) return post;
  const tr = post.translations[locale];
  if (!tr) return post;
  let content = tr.content;
  if (!content && locale !== "en") content = post.translations.en?.content;
  if (!content) content = post.content;
  return { ...post, title: tr.title, excerpt: tr.excerpt, content };
}

export function localizePricing(
  pkg: PricingPackage,
  locale: Locale,
): PricingPackage {
  if (locale === "id" || !pkg.translations) return pkg;
  const tr = pkg.translations[locale];
  if (!tr) return pkg;
  return {
    ...pkg,
    name: tr.name,
    priceNote: tr.priceNote,
    description: tr.description,
    includesDomain: tr.includesDomain,
    pages: tr.pages,
    features: tr.features,
    revisions: tr.revisions,
    timeline: tr.timeline,
    maintenance: tr.maintenance,
    ctaLabel: tr.ctaLabel,
    ...(pkg.priceAmount === undefined && tr.price ? { price: tr.price } : {}),
  };
}

export function getPricingCategoryLabel(
  pkg: PricingPackage,
  locale: Locale,
): string {
  if (locale === "id" || !pkg.translations) return pkg.category;
  return pkg.translations[locale]?.category ?? pkg.category;
}

export function localizeService(service: Service, locale: Locale): Service {
  if (locale === "id" || !service.translations) return service;
  const tr = service.translations[locale];
  if (!tr) return service;
  const en = service.translations.en;
  return {
    ...service,
    title: tr.title,
    shortTitle: tr.shortTitle,
    description: tr.description,
    longDescription: tr.longDescription,
    pricingReference: tr.pricingReference,
    features: tr.features ?? en?.features ?? service.features,
    benefits: tr.benefits ?? en?.benefits ?? service.benefits,
    problems: tr.problems ?? en?.problems ?? service.problems,
    process: tr.process ?? en?.process ?? service.process,
    faq: tr.faq ?? en?.faq ?? service.faq,
  };
}

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "id" || !project.translations) return project;
  const tr = project.translations[locale];
  if (!tr) return project;
  const en = project.translations.en;
  return {
    ...project,
    title: tr.title ?? project.title,
    overview: tr.overview ?? en?.overview ?? project.overview,
    problem: tr.problem ?? en?.problem ?? project.problem,
    solution: tr.solution ?? en?.solution ?? project.solution,
    features: tr.features ?? en?.features ?? project.features,
    process: tr.process ?? en?.process ?? project.process,
    // category tetap enum untuk filter, hanya display yang diterjemahkan
  };
}

/**
 * Mengembalikan label kategori project yang diterjemahkan.
 * Filter tetap pakai enum asli (`project.category`).
 */
export function getProjectCategoryLabel(
  project: Project,
  locale: Locale,
): string {
  if (locale === "id") return project.category;
  return project.translations?.[locale]?.category ?? project.category;
}

/**
 * Kategori display untuk filter chip di `/portfolio` — diterjemahkan
 * tanpa bergantung pada satu project.
 */
export function getCategoryFilterLabel(
  category: ProjectCategory,
  locale: Locale,
): string {
  const map: Record<Locale, Record<ProjectCategory, string>> = {
    id: {
      "Business Website": "Business Website",
      "Landing Page": "Landing Page",
      "Web Application": "Web Application",
      Education: "Education",
      "Local Business": "Local Business",
    },
    en: {
      "Business Website": "Business Website",
      "Landing Page": "Landing Page",
      "Web Application": "Web Application",
      Education: "Education",
      "Local Business": "Local Business",
    },
    ko: {
      "Business Website": "비즈니스 웹사이트",
      "Landing Page": "랜딩 페이지",
      "Web Application": "웹 애플리케이션",
      Education: "교육",
      "Local Business": "로컬 비즈니스",
    },
    zh: {
      "Business Website": "企业网站",
      "Landing Page": "落地页",
      "Web Application": "Web 应用",
      Education: "教育",
      "Local Business": "本地企业",
    },
    ja: {
      "Business Website": "ビジネスウェブサイト",
      "Landing Page": "ランディングページ",
      "Web Application": "Webアプリケーション",
      Education: "教育",
      "Local Business": "ローカルビジネス",
    },
  };
  return map[locale][category];
}