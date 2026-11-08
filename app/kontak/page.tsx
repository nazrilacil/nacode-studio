// app/kontak/page.tsx
import type { Metadata } from "next";
import KontakContent from "./KontakContent";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Kontak",
  description:
    "Hubungi Nacode untuk konsultasi pembuatan website. Isi form inquiry atau hubungi kami langsung via WhatsApp dan email.",
  path: "/kontak",
});

export default function KontakPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Kontak", href: "/kontak" }])} />
      <KontakContent />
    </>
  );
}