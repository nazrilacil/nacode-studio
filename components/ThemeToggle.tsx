// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { trackThemeChange } from "@/lib/analytics";

type IrisState = {
  x: number;
  y: number;
  radius: number;
  color: string;
  phase: "covering" | "revealing";
};

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [iris, setIris] = useState<IrisState | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => setMounted(true), []);

  const currentTheme = resolvedTheme ?? theme;
  const isDark = currentTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  useEffect(() => {
    if (!iris || iris.phase !== "covering") return;
    setTheme(nextTheme);
    trackThemeChange(nextTheme);

    const id = requestAnimationFrame(() => {
      setIris((prev) =>
        prev && prev.phase === "covering"
          ? { ...prev, phase: "revealing" }
          : prev,
      );
    });
    return () => cancelAnimationFrame(id);
  }, [iris, nextTheme, setTheme]);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (iris) return;

    if (reduce) {
      setTheme(nextTheme);
      trackThemeChange(nextTheme);
      return;
    }

    const rect = buttonRef.current?.getBoundingClientRect();
    const fallbackX = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const fallbackY = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const clickX = e.clientX || fallbackX;
    const clickY = e.clientY || fallbackY;

    const maxRadius = Math.hypot(
      Math.max(clickX, window.innerWidth - clickX),
      Math.max(clickY, window.innerHeight - clickY),
    );

    const color = getComputedStyle(document.documentElement)
      .getPropertyValue("--theme-bg")
      .trim();

    setIris({
      x: clickX,
      y: clickY,
      radius: maxRadius,
      color,
      phase: "covering",
    });
  }

  if (!mounted) return <div className="h-10 w-10" aria-hidden />;

  const overlay =
    iris && typeof document !== "undefined"
      ? createPortal(
          <motion.div
            key="iris-overlay"
            initial={false}
            animate={{ scale: iris.phase === "revealing" ? 0 : 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => {
              if (iris.phase === "revealing") setIris(null);
            }}
            style={{
              position: "fixed",
              left: iris.x - iris.radius,
              top: iris.y - iris.radius,
              width: iris.radius * 2,
              height: iris.radius * 2,
              borderRadius: "50%",
              background: iris.color,
              zIndex: 9999,
              pointerEvents: "none",
              transformOrigin: "center",
            }}
            aria-hidden
          />,
          document.body,
        )
      : null;

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={handleClick}
        aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
        aria-busy={!!iris}
        className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent/50 hover:bg-accent/10"
      >
        <Sun
          className={`absolute h-4 w-4 transition-all duration-300 ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
        <Moon
          className={`absolute h-4 w-4 transition-all duration-300 ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />
      </button>
      {overlay}
    </>
  );
}