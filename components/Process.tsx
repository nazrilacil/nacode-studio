// components/Process.tsx
"use client";

import Reveal from "./ui/Reveal";
import { useLanguage } from "./LanguageProvider";

type StepItem = {
  n: string;
  key: string;
};

const steps: StepItem[] = [
  { n: "01", key: "discovery" },
  { n: "02", key: "design" },
  { n: "03", key: "development" },
  { n: "04", key: "launch" },
];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-line py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mb-16 grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-8 bg-accent" />
              {t("home.process.eyebrow")}
            </div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.02em]">
              {t("home.process.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="max-w-sm text-[15px] leading-relaxed text-muted md:ml-auto md:text-right">
              {t("home.process.subtitle")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative border-t border-line pt-7">
                <div className="absolute -top-px left-0 h-px w-10 bg-accent" />
                <div className="font-mono text-[11px] tracking-wider text-accent-2">
                  {s.n}
                </div>
                <h3 className="mt-3 font-display text-lg font-medium tracking-tight text-ink">
                  {t(`home.process.items.${s.key}.title`)}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  {t(`home.process.items.${s.key}.desc`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}