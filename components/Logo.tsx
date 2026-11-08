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
  const iconSize = variant === "horizontal" ? "h-6 w-6" : "h-10 w-10";
  
  const NIcon = (
    <svg
      viewBox="0 0 100 100"
      className={`${iconSize} shrink-0 text-ink transition-colors group-hover:text-accent-2`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15 15H38L78 68V15H95V85H72L32 32V85H15V15Z"
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