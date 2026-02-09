"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  fadeInUpVariants,
  defaultViewport,
  buttonHover,
  buttonTap,
  SPRING,
} from "@/lib/motion-variants";

export function JoinUs() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-20 md:py-28">
      {/* 背景装饰 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-8">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-6 text-3xl font-bold text-white md:text-4xl"
        >
          期待您的加入
        </motion.h2>

        <motion.div
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mx-auto max-w-2xl space-y-3"
        >
          <p className="text-base leading-relaxed text-gray-300 md:text-lg">
            成立三年，我们现在已经有{" "}
            <span className="font-semibold text-white">100+</span> 小伙伴。
          </p>
          <p className="text-base leading-relaxed text-gray-300 md:text-lg">
            全能数字提供了一个轻松、舒适的工作环境，在这里我们一起实现有趣、有挑战的任务。
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-10"
        >
          <motion.a
            href="https://www.zhipin.com/gongsi/e2d73c5a5b3cbf7a0nV82ty4.html"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={buttonHover}
            whileTap={buttonTap}
            transition={SPRING.snappy}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-gray-900 shadow-lg transition-colors hover:bg-gray-100"
          >
            加入我们
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
