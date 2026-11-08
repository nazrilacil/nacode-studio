// components/sections/CTASection.tsx
"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig, whatsappUrl } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackWhatsApp } from "@/lib/analytics";


type Props = {
  /** Kalau diisi, menggantikan seluruh H2 (tidak ada accent italic otomatis). */
  title?: string;
  /** Kalau diisi, menggantikan deskripsi default. */
  description?: string;
  /** Pesan WhatsApp kontekstual. Kalau kosong, pakai pesan default situs. */
  whatsappMessage?: string;
};

export default function CTASection({
  title,
  description,
  whatsappMessage,
}: Props) {
  const { t } = useLanguage();

  const waHref = whatsappMessage ? buildWhatsAppUrl(whatsappMessage) : whatsappUrl;

  // Subject email ikut bahasa aktif
  const emailSubject = t("common.emailSubject");
  const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <section className="relative overflow-hidden border-t border-line py-28 sm:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(108,99,255,0.18),transparent_70%)]" />
        <div className="absolute inset-0 grid-pattern opacity-25 [mask-image:radial-gradient(circle_at_center,black_20%,transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-[900px] px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(2.4rem,7vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.03em]">
            {title ? (
              title
            ) : (
              <>
                {t("home.cta.title")}
                <br />
                <span className="font-serif italic text-accent">
                  {t("home.cta.titleAccent")}
                </span>
              </>
            )}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-7 max-w-md text-[15px] leading-relaxed text-muted">
            {description ?? t("home.cta.description")}
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp("bottom_cta")}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium text-bg transition-colors hover:opacity-90"
              >
                {t("home.cta.primaryCta")}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={emailHref}
                className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[14px] font-medium text-ink transition-colors hover:border-accent/60 hover:bg-accent/10"
              >
                <Mail className="h-4 w-4" />
                {t("home.cta.secondaryCta")}
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}