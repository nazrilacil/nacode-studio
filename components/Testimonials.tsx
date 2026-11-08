// components/Testimonials.tsx
"use client";

import { Quote } from "lucide-react";
import Reveal from "./ui/Reveal";
import { useLanguage } from "./LanguageProvider";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="relative border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-8 bg-accent" />
              {t("home.testimonials.eyebrow")}
            </div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.02em]">
              {t("home.testimonials.title")}
              <br />
              <span className="font-serif italic text-accent-2">
                {t("home.testimonials.titleAccent")}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="max-w-sm text-[15px] leading-relaxed text-muted md:ml-auto md:text-right">
              {t("home.testimonials.description")}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14">
          <div className="relative overflow-hidden rounded-xl border border-line bg-surface/40 p-10 sm:p-14">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-ink/[0.04]" />
            <p className="max-w-2xl font-serif text-[22px] italic leading-relaxed text-ink/70 sm:text-[26px]">
              &ldquo;{t("home.testimonials.quote")}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-accent/15 font-display text-[13px] font-medium text-accent-2">
                N
              </div>
              <div>
                <div className="text-[13px] font-medium text-ink">
                  {t("home.testimonials.authorName")}
                </div>
                <div className="text-[12px] text-muted">
                  {t("home.testimonials.authorRole")}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}