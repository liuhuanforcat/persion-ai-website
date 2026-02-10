"use client";

import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion-variants";

export function FusionBanner() {
  return (
    <section className="relative flex h-[80vh] min-h-[520px] w-full items-center justify-center overflow-hidden bg-gray-900">
      {/* 背景图 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/fusion/fusionBanner.png')" }}
      />
      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* 装饰光效 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, delay: 0.2, ease: EASE.out }}
          className="mb-4 text-base tracking-widest text-white/70 md:text-lg"
        >
          平台服务
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.hero, delay: 0.4, ease: EASE.out }}
          className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
        >
          融合通信平台
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.hero, delay: 0.7, ease: EASE.out }}
          className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          依托融合通信平台，实现会议、监控、对讲、电话等多平台音视频通信，推动跨部门、跨层级的高效协同会商、联动处置和指挥调度。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, delay: 1.0, ease: EASE.out }}
          className="mt-8"
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white/80 backdrop-blur-sm">
            一套系统，解决所有通信问题
          </span>
        </motion.div>
      </div>
    </section>
  );
}
