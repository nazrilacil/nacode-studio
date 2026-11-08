// lib/whatsapp.ts
import { siteConfig } from "./site";

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general:
    "Hi NACODE, saya tertarik membuat website untuk bisnis saya. Bisa konsultasi terlebih dahulu?",
  service: (serviceName: string) =>
    `Hi NACODE, saya ingin konsultasi mengenai layanan *${serviceName}*. Bisa dijelaskan lebih lanjut?`,
  pricing: (packageName: string) =>
    `Hi NACODE, saya tertarik dengan paket *${packageName}*. Bisa dikirim detail dan estimasi pengerjaannya?`,
  project: (projectTitle: string) =>
    `Hi NACODE, saya melihat project *${projectTitle}* di portfolio Anda. Saya tertarik membuat website dengan kualitas serupa. Bisa diskusi?`,
  custom:
    "Hi NACODE, saya punya kebutuhan website dengan fitur khusus. Bisa bantu diskusikan solusinya?",
} as const;