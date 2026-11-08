// app/harga/page.tsx
import type { Metadata } from "next";
import HargaContent from "./HargaContent";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Harga Pembuatan Website",
  description:
    "Paket pembuatan website Nacode: microsite, landing page, company profile, e-commerce, dan custom app. Semua sudah termasuk domain & hosting.",
  path: "/harga",
});

export default function HargaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Harga", href: "/harga" }])} />
      <HargaContent />
    </>
  );
}