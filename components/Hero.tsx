"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import HeroVisual from "./HeroVisual";
import Magnetic from "./ui/Magnetic";
import { whatsappUrl } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";
import { trackWhatsApp } from "@/lib/analytics";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();

  const title1Words = t("hero.title1").split(" ").filter(Boolean);
  const title2Words = t("hero.title2").split(" ").filter(Boolean);
  const accentWord = t("hero.titleAccent");

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
  };
  const word = {
    hidden: { y: "110%" },
    show: { y: "0%", transition: { duration: 0.85, ease } },
  };

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(108,99,255,0.13),transparent_70%)]" />
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-28">
        <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7">
          <motion.div variants={item} className="mb-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" />
            {t("hero.eyebrow")}
          </motion.div>

          <h1 className="font-display text-[clamp(2.6rem,7vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.03em]">
            <span className="block">
              {title1Words.map((w, i) => (
                <span key={`t1-${i}`} className="inline-block overflow-hidden align-top">
                  <motion.span variants={word} className="inline-block">
                    {w}{i < title1Words.length - 1 && "\u00A0"}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className="mt-1 block">
              {title2Words.map((w, i) => (
                <span key={`t2-${i}`} className="inline-block overflow-hidden align-top">
                  <motion.span variants={word} className="inline-block">{w}&nbsp;</motion.span>
                </span>
              ))}
              <span className="inline-block overflow-hidden align-top">
                <motion.span variants={word} className="inline-block font-serif italic text-accent">
                  {accentWord}
                </motion.span>
              </span>
            </span>
          </h1>

          <motion.p variants={item} className="mt-7 max-w-[480px] text-[15px] leading-relaxed text-muted sm:text-base">
            {t("hero.description")}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Link href="/portfolio" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[14px] font-medium text-bg transition-colors hover:opacity-90">
                {t("hero.ctaWork")}
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </Link>
            </Magnetic>
            <Magnetic>
              <a href={whatsappUrl} target="_blank" 
              onClick={() => trackWhatsApp("hero_start_project")}
              rel="noopener noreferrer" 
              className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[14px] font-medium text-ink transition-colors hover:border-accent/60 hover:bg-accent/10">
                {t("hero.ctaProject")}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-2.5 text-[12px] text-muted">
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 text-emerald-400 status-pulse" />
            {t("common.available")} — {new Date().getFullYear()}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.35, ease }} className="relative lg:col-span-5">
          <HeroVisual />
        </motion.div>
      </div>

      <div className="mx-auto max-w-[1280px] px-5 pb-10 sm:px-8">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-muted/70">
          <span className="h-px w-10 bg-ink/20" />
          {t("hero.scroll")}
        </div>
      </div>
    </section>
  );
}