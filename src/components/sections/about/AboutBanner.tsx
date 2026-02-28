"use client";

import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion-variants";

export function AboutBanner() {
  return (
    <section className="relative flex h-[55vh] min-h-[380px] w-full items-center justify-center overflow-hidden bg-gray-900 md:h-[70vh] md:min-h-[480px]">
      {/* 背景图 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/banner@3x.webp')" }}
      />
      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* 装饰元素 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, delay: 0.2, ease: EASE.out }}
          className="mb-4 text-lg tracking-widest text-white/80 md:text-xl"
        >
          关于全能数字
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.hero, delay: 0.4, ease: EASE.out }}
          className="text-3xl font-bold text-white md:text-5xl lg:text-7xl"
        >
          美好沟通 · 连接世界
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.hero, delay: 0.7, ease: EASE.out }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          做混合工作时代的开拓者，用科技的力量，打破空间的界限
        </motion.p>
      </div>
    </section>
  );
}
