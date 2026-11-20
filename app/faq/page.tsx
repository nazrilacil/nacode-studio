// app/faq/page.tsx
import type { Metadata } from "next";
import FaqContent from "./FaqContent";
import { faqItems } from "@/data/faq";
import { localizeFAQ } from "@/lib/localize";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "FAQ Jasa Pembuatan Website: Harga, Proses, Hosting",
  description:
    "Jawaban jujur tentang harga, proses kerja, domain, hosting, dan perawatan website di Nacode Studio.",
  path: "/faq",
});

export default function FAQPage() {
  const itemsId = faqItems.map((f) => ({ ...f, ...localizeFAQ(f, "id") }));

  return (
    <>
      <JsonLd data={faqSchema(itemsId)} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Beranda", href: "/" },
          { label: "FAQ", href: "/faq" },
        ])}
      />
      <FaqContent />
    </>
  );
}
