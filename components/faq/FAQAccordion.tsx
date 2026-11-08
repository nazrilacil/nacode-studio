// components/faq/FAQAccordion.tsx
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeFAQ } from "@/lib/localize";
import type { FAQItem } from "@/data/faq";

type Props = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: Props) {
  const { locale, t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  const localized = items.map((item) => localizeFAQ(item, locale));

  if (items.length === 0) {
    return (
      <p className="py-8 text-center text-[14px] text-muted">
        {t("pages.faq.noResults")}
      </p>
    );
  }

  return (
    <div className="border-t border-line">
      {localized.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={`${item.category}-${i}`} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 py-5 text-left"
            >
              <span className="text-[15px] font-medium text-ink">
                {item.question}
              </span>
              {isOpen ? (
                <Minus className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              ) : (
                <Plus className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
              )}
            </button>
            {isOpen && (
              <div className="pb-5 pr-8 text-[14px] leading-relaxed text-muted">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}