// components/Footer.tsx
"use client";

import Link from "next/link";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import Logo from "./Logo";
import { emailUrl, siteConfig, whatsappUrl } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";

// ─── Brand icons (SVG lokal, karena lucide-react v0.263+ menghapus brand icons) ───
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

/**
 * Peta label social → komponen ikon.
 * Label cocok dengan `siteConfig.socials[i].label`.
 */
const socialIconMap: Record<string, React.ElementType> = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GithubIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" aria-label="Nacode — Home" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-muted">
              {t("footer.description")}
            </p>
            <p className="mt-6 flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-muted/70">
              <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
              <span>{siteConfig.location}</span>
            </p>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted/70">
              {t("footer.sitemap")}
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-ink/80 transition-colors hover:text-ink"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted/70">
              {t("footer.social")}
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.socials.map((s) => {
                const Icon = socialIconMap[s.label];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-[14px] text-ink/80 transition-colors hover:text-ink"
                    >
                      {Icon && (
                        <Icon className="h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-accent" />
                      )}
                      <span>{s.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted/70">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={emailUrl}
                  className="group inline-flex items-center gap-2 text-[14px] text-ink/80 transition-colors hover:text-ink"
                >
                  <Mail
                    className="h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-accent"
                    strokeWidth={1.5}
                  />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[14px] text-ink/80 transition-colors hover:text-ink"
                >
                  <MessageCircle
                    className="h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-accent"
                    strokeWidth={1.5}
                  />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-[12px] text-muted">
            © {year} Nacode Studio. {t("footer.copyright")}
          </p>
          <p className="font-serif text-[13px] italic text-muted">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}