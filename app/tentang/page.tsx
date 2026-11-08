// app/tentang/page.tsx
import type { Metadata } from "next";
import TentangContent from "./TentangContent";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Tentang Nacode",
  description:
    "Nacode adalah independent web development studio yang membantu bisnis membangun kehadiran digital melalui website modern dan terarah.",
  path: "/tentang",
});

export default function TentangPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ label: "Tentang", href: "/tentang" }])}
      />
      <TentangContent />
    </>
  );
}