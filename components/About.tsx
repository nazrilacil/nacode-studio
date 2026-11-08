// components/About.tsx
"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Reveal from "./ui/Reveal";
import { useLanguage } from "./LanguageProvider";

type ValueItem = {
  n: string;
  key: string;
};

const values: ValueItem[] = [
  { n: "01", key: "custom" },
  { n: "02", key: "responsive" },
  { n: "03", key: "performance" },
  { n: "04", key: "seo" },
  { n: "05", key: "transparent" },
  { n: "06", key: "detail" },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                <span className="h-px w-8 bg-accent" />
                {t("home.about.eyebrow")}
              </div>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.02em]">
                {t("home.about.title")}
                <br />
                <span className="font-serif italic text-accent-2">
                  {t("home.about.titleAccent")}
                </span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
                {t("home.about.description")}
              </p>
              <Link
                href="/kontak"
                className="group mt-8 inline-flex items-center gap-2 text-[14px] text-ink"
              >
                <span className="border-b border-line pb-0.5 transition-colors group-hover:border-accent">
                  {t("home.about.cta")}
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.n} delay={i * 0.05}>
                  <div className="border-t border-line pt-4">
                    <div className="font-mono text-[10px] tracking-wider text-muted">
                      {v.n}
                    </div>
                    <h3 className="mt-1.5 text-[15px] font-medium text-ink">
                      {t(`home.about.items.${v.key}.title`)}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">
                      {t(`home.about.items.${v.key}.desc`)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}