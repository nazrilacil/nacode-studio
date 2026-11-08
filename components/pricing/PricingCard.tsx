// components/pricing/PricingCard.tsx
"use client";

import {
  Check,
  Link2,
  Megaphone,
  Building2,
  Factory,
  ShoppingBag,
  Workflow,
  Network,
  MessageCircle,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { localizePricing, getPricingCategoryLabel } from "@/lib/localize";
import { resolvePrice } from "@/lib/currency";
import { buildWhatsAppUrl, waMessages } from "@/lib/whatsapp";
import type { PricingPackage } from "@/data/pricing";
import { trackWhatsApp } from "@/lib/analytics";

const iconMap: Record<string, LucideIcon> = {
  Link2,
  Megaphone,
  Building2,
  Factory,
  ShoppingBag,
  Workflow,
  Network,
};

type Props = {
  pkg: PricingPackage;
};

export default function PricingCard({ pkg: rawPkg }: Props) {
  const { locale, t } = useLanguage();
  const pkg = localizePricing(rawPkg, locale);
  const categoryLabel = getPricingCategoryLabel(rawPkg, locale);
  const Icon = iconMap[pkg.icon] ?? Link2;
  const displayPrice = resolvePrice(pkg, locale);

  return (
    <div
      className={`relative flex h-full flex-col rounded-xl border p-7 transition-colors ${
        pkg.highlighted
          ? "border-accent/50 bg-surface"
          : "border-line bg-surface/40 hover:border-white/20"
      }`}
    >
      {pkg.highlighted && (
        <div className="absolute -top-2.5 left-7 rounded-full bg-accent px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] text-white">
          {t("pages.pricing.popular")}
        </div>
      )}

      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-elev text-accent">
          <Icon className="h-4 w-4" />
        </div>
        <span className="text-[10.5px] uppercase tracking-[0.18em] text-accent-2/80">
          {categoryLabel}
        </span>
      </div>

      <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-ink">
        {pkg.name}
      </h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
        {pkg.description}
      </p>

      <div className="mt-6">
        <div className="text-[11px] uppercase tracking-wider text-muted">
          {pkg.priceNote}
        </div>
        <div className="mt-1 font-display text-2xl font-medium tracking-tight text-ink">
          {displayPrice}
        </div>
      </div>

      <ul className="mt-6 flex-1 space-y-2.5">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[13px] text-ink/80">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
            {f}
          </li>
        ))}
      </ul>

      <dl className="mt-6 space-y-2 border-t border-line pt-4 text-[12px]">
        <div className="flex justify-between gap-4">
          <dt className="text-muted">{t("pages.pricing.domainHosting")}</dt>
          <dd className="text-right text-ink/80">{pkg.includesDomain}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted">{t("pages.pricing.pages")}</dt>
          <dd className="text-right text-ink/80">{pkg.pages}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted">{t("pages.pricing.revisions")}</dt>
          <dd className="text-right text-ink/80">{pkg.revisions}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted">{t("pages.pricing.timeline")}</dt>
          <dd className="text-right text-ink/80">{pkg.timeline}</dd>
        </div>
      </dl>

      <a
        href={buildWhatsAppUrl(waMessages.pricing(pkg.name))}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsApp(`pricing_${pkg.slug}`)}
        className={`group relative mt-6 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 text-[13px] font-medium transition-all duration-300 active:scale-[0.98] ${
          pkg.highlighted
            ? "bg-ink text-bg hover:opacity-90 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.35)]"
            : "border border-line text-ink hover:border-accent/60 hover:bg-accent/10 hover:shadow-[0_10px_30px_-12px_rgba(108,99,255,0.55)]"
        }`}
      >
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden ${
            pkg.highlighted
              ? "bg-gradient-to-r from-transparent via-black/[0.08] to-transparent"
              : "bg-gradient-to-r from-transparent via-white/20 to-transparent"
          }`}
        />
        <MessageCircle className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 motion-reduce:transition-none" />
        <span className="relative">{pkg.ctaLabel}</span>
        <ArrowUpRight className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
      </a>
    </div>
  );
}