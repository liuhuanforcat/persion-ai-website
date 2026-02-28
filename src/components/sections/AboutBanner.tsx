"use client";

import { motion } from "framer-motion";

export function AboutBanner() {
  return (
    <section className="relative flex h-[420px] w-full items-center justify-center overflow-hidden md:h-[520px]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2137] to-[#0a1a30]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,112,243,0.12)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.08)_0%,transparent_50%)]" />

      {/* Decorative */}
      <div className="animate-float absolute -right-24 top-16 h-72 w-72 rounded-full bg-blue-400/5 blur-3xl" />
      <div className="animate-pulse-glow absolute -left-16 bottom-8 h-56 w-56 rounded-full bg-cyan-400/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0, 0, 0.2, 1] }}
          className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          以科技之力，连接无限可能
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0, 0, 0.2, 1] }}
          className="mx-auto mt-6 h-0.5 w-16 bg-[var(--color-accent)]"
        />
      </div>
    </section>
  );
}
