// app/faq/page.tsx
import type { Metadata } from "next";
import FaqContent from "./FaqContent";
import { faqItems } from "@/data/faq";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Pertanyaan yang Sering Diajukan",
  description:
    "Jawaban jujur untuk pertanyaan yang paling sering kami terima tentang layanan, harga, dan proses kerja Nacode.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd data={breadcrumbSchema([{ label: "FAQ", href: "/faq" }])} />
      <FaqContent />
    </>
  );
}