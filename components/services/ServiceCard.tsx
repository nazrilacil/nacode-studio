// components/services/ServiceCard.tsx
"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Rocket,
  Building2,
  Code2,
  GraduationCap,
  ShoppingBag,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeService } from "@/lib/localize";
import type { Service } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Building2,
  Code2,
  GraduationCap,
  ShoppingBag,
  Wrench,
};

type Props = {
  service: Service;
};

export default function ServiceCard({ service: rawService }: Props) {
  const { locale } = useLanguage();
  const service = localizeService(rawService, locale);
  const Icon = iconMap[service.icon] ?? Code2;

  return (
    <Link
      href={`/layanan/${service.slug}`}
      className="group relative flex h-full flex-col rounded-xl border border-line bg-surface/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface"
    >
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface-elev text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="font-display text-[18px] font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-2">
        {service.title}
      </h3>

      <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted">
        {service.description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="text-[12px] text-muted">
          {service.pricingReference}
        </span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}