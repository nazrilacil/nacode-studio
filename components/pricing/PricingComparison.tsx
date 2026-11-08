// components/pricing/PricingComparison.tsx
"use client";

import { Check, Minus } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { localizePricing } from "@/lib/localize";
import { resolvePrice } from "@/lib/currency";
import { pricingPackages } from "@/data/pricing";

// ─── rows TETAP SAMA seperti versi sebelumnya ───
type CellValue = string | boolean;
type ComparisonRow = {
  labelKey: string;
  values: Record<string, CellValue>;
};

const rows: ComparisonRow[] = [
  {
    labelKey: "domainHosting",
    values: {
      "microsite-bio-link": "Termasuk",
      "landing-page-umkm": "Termasuk",
      "corporate-identity-basic": "Termasuk",
      "enterprise-business-site": "Termasuk",
      "ecommerce-retail-starter": "Termasuk",
      "custom-operational-system": "Setup",
      "strategic-software-partnership": "Custom",
    },
  },
  {
    labelKey: "pageCount",
    values: {
      "microsite-bio-link": "1",
      "landing-page-umkm": "1",
      "corporate-identity-basic": "≤6",
      "enterprise-business-site": "8–12",
      "ecommerce-retail-starter": "Katalog",
      "custom-operational-system": "Custom",
      "strategic-software-partnership": "Enterprise",
    },
  },
  {
    labelKey: "customDesign",
    values: {
      "microsite-bio-link": true,
      "landing-page-umkm": true,
      "corporate-identity-basic": true,
      "enterprise-business-site": true,
      "ecommerce-retail-starter": true,
      "custom-operational-system": true,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "responsive",
    values: {
      "microsite-bio-link": true,
      "landing-page-umkm": true,
      "corporate-identity-basic": true,
      "enterprise-business-site": true,
      "ecommerce-retail-starter": true,
      "custom-operational-system": true,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "seo",
    values: {
      "microsite-bio-link": true,
      "landing-page-umkm": true,
      "corporate-identity-basic": true,
      "enterprise-business-site": true,
      "ecommerce-retail-starter": true,
      "custom-operational-system": true,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "whatsapp",
    values: {
      "microsite-bio-link": true,
      "landing-page-umkm": true,
      "corporate-identity-basic": true,
      "enterprise-business-site": true,
      "ecommerce-retail-starter": true,
      "custom-operational-system": true,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "ssl",
    values: {
      "microsite-bio-link": true,
      "landing-page-umkm": true,
      "corporate-identity-basic": true,
      "enterprise-business-site": true,
      "ecommerce-retail-starter": true,
      "custom-operational-system": true,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "businessEmail",
    values: {
      "microsite-bio-link": false,
      "landing-page-umkm": false,
      "corporate-identity-basic": "1 akun",
      "enterprise-business-site": "10 akun",
      "ecommerce-retail-starter": "1 akun",
      "custom-operational-system": "Custom",
      "strategic-software-partnership": "Custom",
    },
  },
  {
    labelKey: "copywriting",
    values: {
      "microsite-bio-link": false,
      "landing-page-umkm": true,
      "corporate-identity-basic": false,
      "enterprise-business-site": false,
      "ecommerce-retail-starter": false,
      "custom-operational-system": false,
      "strategic-software-partnership": false,
    },
  },
  {
    labelKey: "analytics",
    values: {
      "microsite-bio-link": false,
      "landing-page-umkm": true,
      "corporate-identity-basic": false,
      "enterprise-business-site": false,
      "ecommerce-retail-starter": true,
      "custom-operational-system": true,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "cms",
    values: {
      "microsite-bio-link": false,
      "landing-page-umkm": false,
      "corporate-identity-basic": false,
      "enterprise-business-site": true,
      "ecommerce-retail-starter": true,
      "custom-operational-system": true,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "productCatalog",
    values: {
      "microsite-bio-link": true,
      "landing-page-umkm": false,
      "corporate-identity-basic": false,
      "enterprise-business-site": false,
      "ecommerce-retail-starter": true,
      "custom-operational-system": true,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "shipping",
    values: {
      "microsite-bio-link": false,
      "landing-page-umkm": false,
      "corporate-identity-basic": false,
      "enterprise-business-site": false,
      "ecommerce-retail-starter": true,
      "custom-operational-system": false,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "auth",
    values: {
      "microsite-bio-link": false,
      "landing-page-umkm": false,
      "corporate-identity-basic": false,
      "enterprise-business-site": false,
      "ecommerce-retail-starter": true,
      "custom-operational-system": true,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "sourceCode",
    values: {
      "microsite-bio-link": false,
      "landing-page-umkm": false,
      "corporate-identity-basic": false,
      "enterprise-business-site": false,
      "ecommerce-retail-starter": false,
      "custom-operational-system": true,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "digitalStrategy",
    values: {
      "microsite-bio-link": false,
      "landing-page-umkm": false,
      "corporate-identity-basic": false,
      "enterprise-business-site": false,
      "ecommerce-retail-starter": false,
      "custom-operational-system": false,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "scalable",
    values: {
      "microsite-bio-link": false,
      "landing-page-umkm": false,
      "corporate-identity-basic": false,
      "enterprise-business-site": false,
      "ecommerce-retail-starter": false,
      "custom-operational-system": false,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "multiPlatform",
    values: {
      "microsite-bio-link": false,
      "landing-page-umkm": false,
      "corporate-identity-basic": false,
      "enterprise-business-site": false,
      "ecommerce-retail-starter": false,
      "custom-operational-system": false,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "sla",
    values: {
      "microsite-bio-link": false,
      "landing-page-umkm": false,
      "corporate-identity-basic": false,
      "enterprise-business-site": false,
      "ecommerce-retail-starter": false,
      "custom-operational-system": false,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "highSecurity",
    values: {
      "microsite-bio-link": false,
      "landing-page-umkm": false,
      "corporate-identity-basic": false,
      "enterprise-business-site": false,
      "ecommerce-retail-starter": false,
      "custom-operational-system": false,
      "strategic-software-partnership": true,
    },
  },
  {
    labelKey: "revisions",
    values: {
      "microsite-bio-link": "1×",
      "landing-page-umkm": "2×",
      "corporate-identity-basic": "2×",
      "enterprise-business-site": "3×",
      "ecommerce-retail-starter": "3×",
      "custom-operational-system": "Custom",
      "strategic-software-partnership": "SLA",
    },
  },
  {
    labelKey: "timeline",
    values: {
      "microsite-bio-link": "2–5 hari",
      "landing-page-umkm": "5–7 hari",
      "corporate-identity-basic": "7–10 hari",
      "enterprise-business-site": "14–21 hari",
      "ecommerce-retail-starter": "21–30 hari",
      "custom-operational-system": "30+ hari",
      "strategic-software-partnership": "Roadmap",
    },
  },
];

function renderCell(v: CellValue | undefined, t: (k: string) => string) {
  if (v === undefined) return <span className="text-muted/40">—</span>;
  if (typeof v === "boolean") {
    return v ? (
      <Check className="mx-auto h-4 w-4 text-accent" />
    ) : (
      <Minus className="mx-auto h-4 w-4 text-muted/40" />
    );
  }

  if (v === "Termasuk") return t("common.included");
  if (v === "Setup") return t("common.setup");
  if (v === "Katalog") return t("common.catalog");
  if (v === "Custom") return t("common.customValue");
  if (v === "Enterprise") return t("common.enterpriseValue");
  if (v === "SLA") return "SLA";
  if (v === "Roadmap") return t("common.roadmapValue");

  const akunMatch = v.match(/^(\d+)\s+akun$/);
  if (akunMatch) return `${akunMatch[1]} ${t("common.accountsUnit")}`;

  const hariMatch = v.match(/^(\d+[–-]\d+)\s+hari$/);
  if (hariMatch) return `${hariMatch[1]} ${t("common.daysUnit")}`;

  const thirtyPlus = v.match(/^(\d+\+)\s+hari$/);
  if (thirtyPlus) return `${thirtyPlus[1]} ${t("common.daysUnit")}`;

  return v;
}

export default function PricingComparison() {
  const { locale, t } = useLanguage();
  const localized = pricingPackages.map((p) => localizePricing(p, locale));

  return (
    <div>
      <h2 className="mb-3 font-display text-2xl font-medium tracking-tight">
        {t("pages.pricing.comparison")}
      </h2>
      <p className="mb-8 text-[13px] text-muted">
        {t("pages.pricing.comparisonHint").replace(
          "{count}",
          String(pricingPackages.length),
        )}
      </p>
      <div className="overflow-x-auto rounded-lg border border-line">
        <table className="w-full min-w-[1200px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line bg-surface/40">
              <th className="sticky left-0 z-10 bg-surface/95 py-4 pl-4 pr-4 text-[11px] uppercase tracking-[0.2em] text-muted backdrop-blur-sm">
                {t("pages.pricing.feature")}
              </th>
              {localized.map((pkg) => (
                <th
                  key={pkg.slug}
                  className="px-3 py-4 text-center text-[12px] font-medium leading-tight text-ink"
                >
                  <div className="mx-auto max-w-[120px]">{pkg.name}</div>
                  <div className="mt-1 text-[10px] font-normal text-muted">
                    {resolvePrice(pkg, locale)}    {/* ← harga converted */}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.labelKey} className="border-b border-line">
                <td className="sticky left-0 z-10 bg-bg py-3.5 pl-4 pr-4 text-[13px] text-muted">
                  {t(`pages.pricing.comparisonRows.${row.labelKey}`)}
                </td>
                {pricingPackages.map((pkg) => (
                  <td
                    key={`${row.labelKey}-${pkg.slug}`}
                    className="px-3 py-3.5 text-center text-[12.5px] text-ink/80"
                  >
                    {renderCell(row.values[pkg.slug], t)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}