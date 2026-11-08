// components/PricingPreview.tsx
"use client";

import {
  ArrowUpRight,
  Check,
  Link2,
  Megaphone,
  Building2,
  Factory,
  ShoppingBag,
  Workflow,
  Network,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Reveal from "./ui/Reveal";
import { useLanguage } from "./LanguageProvider";
import { localizePricing, getPricingCategoryLabel } from "@/lib/localize";
import { resolvePrice } from "@/lib/currency";
import { pricingPackages } from "@/data/pricing";

const iconMap: Record<string, LucideIcon> = {
  Link2,
  Megaphone,
  Building2,
  Factory,
  ShoppingBag,
  Workflow,
  Network,
};

const PREVIEW_SLUGS = [
  "microsite-bio-link",
  "corporate-identity-basic",
  "custom-operational-system",
];

export default function PricingPreview() {
  const { locale, t } = useLanguage();

  const previewPackages = PREVIEW_SLUGS.map((s) =>
    pricingPackages.find((p) => p.slug === s),
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="relative border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mb-14 grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-8 bg-accent" />
              {t("home.pricing.eyebrow")}
            </div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.02em]">
              {t("home.pricing.title")}
              <br />
              <span className="font-serif italic text-accent-2">
                {t("home.pricing.titleAccent")}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="max-w-sm text-[15px] leading-relaxed text-muted md:ml-auto md:text-right">
              {t("home.pricing.subtitle")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {previewPackages.map((rawPkg, i) => {
            const pkg = localizePricing(rawPkg, locale);
            const categoryLabel = getPricingCategoryLabel(rawPkg, locale);
            const Icon = iconMap[pkg.icon] ?? Link2;
            const displayPrice = resolvePrice(pkg, locale);
            return (
              <Reveal key={pkg.slug} delay={i * 0.06}>
                <div
                  className={`relative flex h-full flex-col rounded-xl border p-6 transition-colors ${
                    pkg.highlighted
                      ? "border-accent/50 bg-surface"
                      : "border-line bg-surface/40 hover:border-white/20"
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-2.5 left-6 rounded-full bg-accent px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] text-white">
                      {t("home.pricing.popular")}
                    </div>
                  )}

                  <div className="mb-2.5 flex items-center gap-2">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-line bg-surface-elev text-accent">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-[9.5px] uppercase tracking-[0.16em] text-accent-2/80">
                      {categoryLabel}
                    </span>
                  </div>

                  <h3 className="font-display text-[16px] font-medium leading-snug tracking-tight text-ink">
                    {pkg.name}
                  </h3>
                  <div className="mt-4">
                    <span className="text-[10.5px] uppercase tracking-wider text-muted">
                      {pkg.priceNote}
                    </span>
                    <div className="mt-1 font-display text-2xl font-medium tracking-tight text-ink">
                      {displayPrice}
                    </div>
                  </div>
                  <ul className="mt-4 flex-1 space-y-2">
                    {pkg.features.slice(0, 3).map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-[12.5px] text-ink/80"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/harga"
                    className="group mt-5 inline-flex items-center gap-1.5 text-[13px] text-ink"
                  >
                    <span className="border-b border-line pb-0.5 group-hover:border-accent">
                      {t("home.pricing.viewDetail")}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <Link
            href="/harga"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[14px] text-ink transition-colors hover:border-accent/60 hover:bg-accent/10"
          >
            {t("home.pricing.viewAll").replace(
              "{count}",
              String(pricingPackages.length),
            )}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}