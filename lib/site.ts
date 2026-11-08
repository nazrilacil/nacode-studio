// lib/site.ts
export const siteConfig = {
  name: "Nacode",
  legalName: "Nacode Studio",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nacode.studio",
  description:
    "Nacode is a web development studio creating modern, responsive, and high-performance websites for businesses and brands.",
  email: "nazrilacil04@gmail.com",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6285175414118",
  whatsappMessage:
    "Hi Nacode, I'd like to discuss a website project. Here's a short brief:",
  location: "Pangandaran, Indonesia — Working worldwide",
  founder: {
    name: "Nazril Acil",
    role: "Founder & Web Developer",
  },
  demoBaseUrl: "https://nacode-demos.vercel.app/",
  // Update: Gunakan key terjemahan
  nav: [
    { key: "nav.home", href: "/" },
    { key: "nav.services", href: "/layanan" },
    { key: "nav.portfolio", href: "/portfolio" },
    { key: "nav.pricing", href: "/harga" },
    { key: "nav.about", href: "/tentang" },
    { key: "nav.blog", href: "/blog" },
    { key: "nav.faq", href: "/faq" },
    { key: "nav.contact", href: "/kontak" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(
  /\D/g,
  "",
)}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

export const emailUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "New project inquiry — Nacode",
)}`;