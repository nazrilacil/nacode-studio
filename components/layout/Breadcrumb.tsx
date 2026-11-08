// components/layout/Breadcrumb.tsx
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Item = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Item[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-1.5 text-[12px] text-muted"
    >
      <Link href="/" className="transition-colors hover:text-ink">
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <ChevronRight className="h-3 w-3 text-muted/50" />
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink/80" aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}