// components/Logo.tsx
import { siteConfig } from "@/lib/site";

type LogoProps = {
  /** 
   * horizontal: Ikon di kiri, teks di kanan (untuk Navbar)
   * vertical: Ikon di atas, teks di bawah (seperti di kaos)
   * icon-only: Hanya ikon N (untuk favicon/compact)
   */
  variant?: "horizontal" | "vertical" | "icon-only";
  className?: string;
};

export default function Logo({ variant = "horizontal", className = "" }: LogoProps) {
  // Ukuran sedikit diperbesar agar proporsional dengan bentuk logo yang baru
  const iconSize = variant === "horizontal" ? "h-7 w-7" : "h-12 w-12";
  
  const NIcon = (
    <svg
      viewBox="0 0 100 100"
      className={`${iconSize} shrink-0 text-ink transition-colors group-hover:text-accent-2`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Path SVG Baru */}
      <path
        d="M27 85C17 85 10 68 20 52L40 22C47 10 63 10 73 24L88 47C95 60 90 85 75 85C65 85 57 77 51 66L39 81C35 84 31 85 27 85Z"
        fill="currentColor"
      />
    </svg>
  );

  if (variant === "icon-only") {
    return <span className={`inline-flex ${className}`}>{NIcon}</span>;
  }

  if (variant === "vertical") {
    return (
      <span className={`group inline-flex flex-col items-center gap-2 select-none ${className}`}>
        {NIcon}
        <span className="font-display text-[13px] font-semibold tracking-[0.25em] text-ink">
          {siteConfig.name.toUpperCase()}
        </span>
      </span>
    );
  }

  // Default: Horizontal
  return (
    <span className={`group inline-flex items-center gap-3 select-none ${className}`}>
      {NIcon}
      <span className="font-display text-[17px] font-semibold tracking-[0.18em] text-ink">
        {siteConfig.name.toUpperCase()}
      </span>
    </span>
  );
}
