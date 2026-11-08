// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import About from "@/components/About";
import PricingPreview from "@/components/PricingPreview";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQPreview from "@/components/FAQPreview";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { websiteSchema, professionalServiceSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Nacode — Modern Web Development Studio",
  description:
    "Nacode is a web development studio creating modern, responsive, and high-performance websites for businesses and brands.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <JsonLd data={professionalServiceSchema()} />
      <Hero />
      <SelectedWork />
      <Services />
      <About />
      <PricingPreview />
      <Process />
      <Testimonials />
      <FAQPreview />
      <CTA />
    </>
  );
}