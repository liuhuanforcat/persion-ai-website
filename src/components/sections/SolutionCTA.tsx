"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  fadeInUpVariants,
  defaultViewport,
} from "@/lib/motion-variants";

export function SolutionCTA({
  onContactClick,
}: {
  onContactClick?: () => void;
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface-dark)] py-20 md:py-28">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute -left-20 top-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="animate-pulse-glow absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-8">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-4 flex items-center justify-center gap-3"
        >
          <svg
            className="h-8 w-8 text-[var(--color-accent)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            定制您的专属解决方案
          </h2>
        </motion.div>

        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-10 text-base text-gray-400"
        >
          我们的技术专家团队将根据您的业务需求，提供一对一的方案咨询服务
        </motion.p>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={onContactClick}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[var(--color-primary)] shadow-lg transition-colors duration-200 hover:bg-gray-50"
          >
            联系我们
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
