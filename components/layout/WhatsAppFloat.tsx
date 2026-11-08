// components/layout/WhatsAppFloat.tsx
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { buildWhatsAppUrl, waMessages } from "@/lib/whatsapp";
import { trackWhatsApp } from "@/lib/analytics";

export default function WhatsAppFloat() {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const href = buildWhatsAppUrl(waMessages.general);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6"
    >
      <div
        className="relative flex items-center gap-2"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 8, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none hidden whitespace-nowrap rounded-lg border border-line bg-surface-elev/95 px-3 py-1.5 text-[12px] text-ink shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:block"
            >
              Chat via WhatsApp
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hubungi Nacode via WhatsApp"
          onClick={() => trackWhatsApp("floating_button")}
          whileHover={reduce ? undefined : { scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-line bg-surface-elev/95 text-[#25D366] shadow-[0_8px_30px_-8px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-colors duration-300 hover:border-[#25D366]/40"
        >
          {!reduce && (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full border border-[#25D366]/50"
              animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
          )}
          <MessageCircle className="relative h-6 w-6 transition-transform duration-300 ease-out group-hover:-rotate-6" />
        </motion.a>
      </div>
    </motion.div>
  );
}