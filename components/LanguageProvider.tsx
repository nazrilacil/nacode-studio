// components/LanguageProvider.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import idDict from "@/dictionaries/id.json";
import enDict from "@/dictionaries/en.json";
import koDict from "@/dictionaries/ko.json";
import zhDict from "@/dictionaries/zh.json";
import jaDict from "@/dictionaries/ja.json";

export type Locale = "id" | "en" | "ko" | "zh" | "ja";

export const locales: { code: Locale; label: string; short: string }[] = [
  { code: "id", label: "Indonesia", short: "ID" },
  { code: "en", label: "English", short: "EN" },
  { code: "ko", label: "한국어", short: "KO" },
  { code: "zh", label: "中文", short: "ZH" },
  { code: "ja", label: "日本語", short: "JA" },
];

type Dictionary = typeof idDict;
const dictionaries: Record<Locale, Dictionary> = {
  id: idDict,
  en: enDict as Dictionary,
  ko: koDict as Dictionary,
  zh: zhDict as Dictionary,
  ja: jaDict as Dictionary,
};

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (keyPath: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("nacode-locale") as Locale | null;
    if (saved && ["id", "en", "ko", "zh", "ja"].includes(saved)) {
      setLocaleState(saved);
    }
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("nacode-locale", newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = (keyPath: string): string => {
    if (!mounted) return "";
    const dict = dictionaries[locale];
    const keys = keyPath.split(".");
    let value: any = dict;
    for (const key of keys) {
      if (value[key] === undefined) {
        console.warn(`Translation missing: ${keyPath} for ${locale}`);
        return keyPath;
      }
      value = value[key];
    }
    return value as string;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}