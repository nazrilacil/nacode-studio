// app/harga/HargaContent.tsx
"use client";

import { useLanguage } from "@/components/LanguageProvider";
import PageHeader from "@/components/layout/PageHeader";
import PricingCard from "@/components/pricing/PricingCard";
import PricingComparison from "@/components/pricing/PricingComparison";
import FAQAccordion from "@/components/faq/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { pricingPackages } from "@/data/pricing";
import { faqItems } from "@/data/faq";

export default function HargaContent() {
  const { t } = useLanguage();
  const pricingFaq = faqItems.filter(
    (f) => f.category === "Pricing" || f.category === "Hosting & Domain",
  );

  return (
    <>
      <PageHeader
        eyebrow={t("pages.pricing.eyebrow")}
        title={t("pages.pricing.title")}
        description={t("pages.pricing.description")}
        breadcrumb={[{ label: t("nav.pricing") }]}
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pricingPackages.map((pkg) => (
              <PricingCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
          <p className="mt-8 text-center text-[12px] leading-relaxed text-muted">
            {t("pages.pricing.priceDisclaimer")}
          </p>
        </div>
      </section>
      <section className="border-t border-line py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <PricingComparison />
        </div>
      </section>
      <section className="border-t border-line py-16 sm:py-24">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <h2 className="mb-8 font-display text-2xl font-medium tracking-tight">
            {t("pages.pricing.faqTitle")}
          </h2>
          <FAQAccordion items={pricingFaq} />
        </div>
      </section>
      <CTASection
        title={t("pages.pricing.ctaTitle")}
        description={t("pages.pricing.ctaDescription")}
        whatsappMessage="Hi NACODE, saya butuh rekomendasi paket website yang sesuai untuk bisnis saya."
      />
    </>
  );
}