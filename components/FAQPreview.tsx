// components/FAQPreview.tsx
"use client";

import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import Link from "next/link";
import Reveal from "./ui/Reveal";
import { useLanguage } from "./LanguageProvider";
import { localizeFAQ } from "@/lib/localize";
import { faqItems } from "@/data/faq";

const previewItems = faqItems.slice(0, 4);

export default function FAQPreview() {
  const { locale, t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  const localized = previewItems.map((item) => localizeFAQ(item, locale));

  return (
    <section className="relative border-t border-line py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-8 bg-accent" />
              {t("home.faq.eyebrow")}
            </div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.02em]">
              {t("home.faq.title")}
              <br />
              <span className="font-serif italic text-accent-2">
                {t("home.faq.titleAccent")}
              </span>
            </h2>
            <Link
              href="/faq"
              className="group mt-8 inline-flex items-center gap-2 text-[14px] text-ink"
            >
              <span className="border-b border-line pb-0.5 group-hover:border-accent">
                {t("home.faq.viewAll")}
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="border-t border-line">
            {localized.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={`${item.category}-${i}`} delay={i * 0.05}>
                  <div className="border-b border-line">
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
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}