// lib/currency.ts
import type { Locale } from "@/components/LanguageProvider";

/**
 * ⚠️ Update rate manual secara berkala (idealnya 1×/bulan).
 * Format: 1 IDR = X unit mata uang tujuan.
 *
 * Nilai saat ini (Nov 2025, approximate):
 *   1 USD ≈ Rp 16.000
 *   1 KRW ≈ Rp 12
 *   1 CNY ≈ Rp 2.200
 *   1 JPY ≈ Rp 105
 */
export const exchangeRates: Record<
  Locale,
  {
    currency: string;
    rate: number;
    localeCode: string;
    /** Rounding unit — dibulatkan ke kelipatan ini. */
    rounding: number;
  }
> = {
  id: { currency: "IDR", rate: 1, localeCode: "id-ID", rounding: 1 },
  en: { currency: "USD", rate: 1 / 16000, localeCode: "en-US", rounding: 5 },
  ko: { currency: "KRW", rate: 1 / 12, localeCode: "ko-KR", rounding: 1000 },
  zh: { currency: "CNY", rate: 1 / 2200, localeCode: "zh-CN", rounding: 10 },
  ja: { currency: "JPY", rate: 1 / 105, localeCode: "ja-JP", rounding: 500 },
};

function formatAmount(amount: number, locale: Locale): string {
  const config = exchangeRates[locale];
  const converted = amount * config.rate;
  // Round UP → konservatif untuk quote, tidak pernah underquote
  const rounded = Math.ceil(converted / config.rounding) * config.rounding;

  return new Intl.NumberFormat(config.localeCode, {
    style: "currency",
    currency: config.currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(rounded);
}

/** Format single price. IDR = exact, lainnya = "≈" (estimasi). */
export function formatPrice(amount: number, locale: Locale): string {
  const formatted = formatAmount(amount, locale);
  return locale === "id" ? formatted : `≈ ${formatted}`;
}

/** Format price range. */
export function formatPriceRange(
  min: number,
  max: number,
  locale: Locale,
): string {
  const formatted = `${formatAmount(min, locale)} – ${formatAmount(max, locale)}`;
  return locale === "id" ? formatted : `≈ ${formatted}`;
}

/**
 * Resolusi harga final:
 *   - priceAmount + priceMax → range (converted)
 *   - priceAmount            → single price (converted)
 *   - fallback               → string price (mis. "Hubungi Kami")
 */
export function resolvePrice(
  pkg: { priceAmount?: number; priceMax?: number; price: string },
  locale: Locale,
): string {
  if (pkg.priceAmount !== undefined) {
    if (pkg.priceMax !== undefined) {
      return formatPriceRange(pkg.priceAmount, pkg.priceMax, locale);
    }
    return formatPrice(pkg.priceAmount, locale);
  }
  return pkg.price;
}