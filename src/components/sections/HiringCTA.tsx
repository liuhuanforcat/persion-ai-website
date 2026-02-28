"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  fadeInUpVariants,
  defaultViewport,
} from "@/lib/motion-variants";

export function HiringCTA() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2440] to-[#0a1a30]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,112,243,0.1)_0%,transparent_70%)]" />

      {/* Decorative */}
      <div className="animate-float absolute -right-20 top-10 h-60 w-60 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="animate-pulse-glow absolute -left-16 bottom-16 h-48 w-48 rounded-full bg-cyan-500/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-8">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-6 text-3xl font-bold text-white md:text-4xl"
        >
          与优秀的人，做有挑战的事
        </motion.h2>

        <motion.div
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-10 space-y-2 text-base text-gray-300 md:text-lg"
        >
          <p>我们拥有 300+ 人的精英团队，研发占比超过 60%。</p>
          <p>开放包容的企业文化，扁平高效的协作模式，期待你的加入。</p>
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.a
            href="https://example.com/careers"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[var(--color-primary)] shadow-lg transition-colors duration-200 hover:bg-gray-50"
          >
            加入我们
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
