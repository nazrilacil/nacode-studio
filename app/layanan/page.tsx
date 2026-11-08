import type { Metadata } from "next";
import LayananContent from "./LayananContent";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Layanan Web Development",
  description:
    "Layanan pembuatan website dari Nacode: landing page, company profile, web app custom, website sekolah, e-commerce, dan maintenance.",
  path: "/layanan",
});

export default function LayananPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Layanan", href: "/layanan" }])} />
      <LayananContent />
    </>
  );
}