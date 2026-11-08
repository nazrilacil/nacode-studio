// components/LanguageSwitcher.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Globe } from "lucide-react";
import { useLanguage, locales, type Locale } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = locales.find((l) => l.code === locale) ?? locales[0];

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  function choose(code: Locale) {
    setLocale(code);
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        aria-expanded={open}
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line bg-surface/40 px-3 text-[11px] font-medium text-ink transition-colors hover:border-accent/50 hover:bg-accent/10"
      >
        <Globe className="h-3.5 w-3.5" />
        <span>{current.short}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-[calc(100%+6px)] z-50 w-40 overflow-hidden rounded-lg border border-line bg-surface-elev/95 shadow-2xl backdrop-blur-xl"
          >
            <ul className="py-1">
              {locales.map((lang) => {
                const active = lang.code === locale;
                return (
                  <li key={lang.code}>
                    <button
                      type="button"
                      onClick={() => choose(lang.code)}
                      className={`flex w-full items-center justify-between px-3 py-2 text-[12.5px] transition-colors ${
                        active
                          ? "text-ink"
                          : "text-ink/70 hover:bg-white/5 hover:text-ink"
                      }`}
                    >
                      <span>{lang.label}</span>
                      {active && (
                        <Check className="h-3.5 w-3.5 text-accent" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}