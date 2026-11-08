// components/HeroVisual.tsx
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[600px]">
      {/* 1. Ambient Glow di belakang foto */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,99,255,0.25),transparent_65%)] blur-3xl" />

      {/* 2. Grid Pattern halus (opsional, untuk tekstur) */}
      <div className="absolute inset-4 grid-pattern opacity-20 [mask-image:radial-gradient(circle_at_center,black_20%,transparent_70%)]" />

      {/* 3. Foto Utama dengan Animasi Melayang */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex justify-center"
        style={{
          // Trik CSS untuk memudarkan background putih di tepi foto
          // sehingga menyatu dengan background gelap website
          maskImage: "radial-gradient(circle at 50% 50%, black 45%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 45%, transparent 70%)",
        }}
      >
        <Image
          src="/images/hero-cmo.png"
          alt="Founder Nacode memegang laptop dengan logo Nacode"
          width={800}
          height={800}
          priority
          // mix-blend-screen/lighten akan membuat area gelap (seperti kaos hitam) 
          // menyatu dengan background gelap
          className="h-auto w-full object-contain mix-blend-lighten"
        />
      </motion.div>

      {/* 4. Elemen Dekoratif Tambahan (Crop Marks) */}
      <svg
        viewBox="0 0 16 16"
        className="absolute left-0 top-10 h-4 w-4 text-white/20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M1 5V1h4" />
      </svg>
      <svg
        viewBox="0 0 16 16"
        className="absolute bottom-10 right-0 h-4 w-4 rotate-180 text-white/20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M1 5V1h4" />
      </svg>
    </div>
  );
}