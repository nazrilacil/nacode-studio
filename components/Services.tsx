// components/Services.tsx
"use client";

import {
  ArrowUpRight,
  Code2,
  Gauge,
  Layout,
  PenTool,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Reveal from "./ui/Reveal";
import { useLanguage } from "./LanguageProvider";

type ServiceItem = {
  n: string;
  key: string;
  icon: LucideIcon;
};

const services: ServiceItem[] = [
  { n: "01", key: "business", icon: Layout },
  { n: "02", key: "landing", icon: Rocket },
  { n: "03", key: "custom", icon: Code2 },
  { n: "04", key: "design", icon: PenTool },
  { n: "05", key: "optimization", icon: Gauge },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative border-t border-line py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                <span className="h-px w-8 bg-accent" />
                {t("home.services.eyebrow")}
              </div>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.02em]">
                {t("home.services.title")}
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
                {t("home.services.subtitle")}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="border-b border-line">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.n} delay={i * 0.04}>
                  <div className="group relative border-t border-line">
                    <div className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                    <div className="flex items-start gap-5 py-7 sm:gap-8 sm:py-8">
                      <span className="w-8 shrink-0 pt-1 font-mono text-[11px] tracking-wider text-muted">
                        {s.n}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-display text-[22px] font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-2 sm:text-[26px]">
                          {t(`home.services.items.${s.key}.title`)}
                        </h3>
                        <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-muted sm:text-[15px]">
                          {t(`home.services.items.${s.key}.desc`)}
                        </p>
                      </div>
                      <Icon className="mt-1 h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:text-accent" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2} className="mt-10">
            <Link
              href="/kontak"
              className="group inline-flex items-center gap-2 text-[14px] text-muted transition-colors hover:text-ink"
            >
              {t("home.services.bottomLink")}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}