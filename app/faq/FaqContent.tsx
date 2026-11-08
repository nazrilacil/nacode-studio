"use client";

import { localizeFAQ } from "@/lib/localize";
import { useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import PageHeader from "@/components/layout/PageHeader";
import FAQAccordion from "@/components/faq/FAQAccordion";
import { faqItems, type FAQCategory } from "@/data/faq";

export default function FaqContent() {
  const { locale, t } = useLanguage();
  const [active, setActive] = useState<FAQCategory | "All">("All");
  const [query, setQuery] = useState("");

  const categories: { key: FAQCategory | "All"; label: string }[] = [
    { key: "All", label: t("pages.faq.all") },
    { key: "General", label: t("pages.faq.categories.general") },
    { key: "Pricing", label: t("pages.faq.categories.pricing") },
    { key: "Development Process", label: t("pages.faq.categories.development") },
    { key: "Hosting & Domain", label: t("pages.faq.categories.hosting") },
    { key: "Maintenance", label: t("pages.faq.categories.maintenance") },
    { key: "Technical", label: t("pages.faq.categories.technical") },
  ];

const filtered = useMemo(() => {
  return faqItems.filter((f) => {
    const local = localizeFAQ(f, locale);
    const matchCat = active === "All" || f.category === active;
    const matchQuery =
      query.trim() === "" ||
      local.question.toLowerCase().includes(query.toLowerCase()) ||
      local.answer.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });
}, [active, query, locale]);

  return (
    <>
      <PageHeader
        eyebrow={t("pages.faq.eyebrow")}
        title={t("pages.faq.title")}
        description={t("pages.faq.description")}
        breadcrumb={[{ label: t("nav.faq") }]}
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("pages.faq.searchPlaceholder")}
            className="mb-6 w-full rounded-full border border-line bg-surface px-5 py-3 text-[14px] text-ink placeholder:text-muted focus:border-accent/50 focus:outline-none"
          />
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`rounded-full border px-4 py-1.5 text-[12px] transition-colors ${
                  active === cat.key ? "border-accent bg-accent/10 text-ink" : "border-line text-muted hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <FAQAccordion items={filtered} />
        </div>
      </section>
    </>
  );
}