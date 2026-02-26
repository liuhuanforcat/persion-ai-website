"use client";

import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion-variants";

export function TalkbackBanner() {
  return (
    <section className="relative flex h-[60vh] min-h-[400px] w-full items-center justify-center overflow-hidden bg-gray-900 md:h-[80vh] md:min-h-[520px]">
      {/* 背景图 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/talkback/talkbackBanner.png')" }}
      />
      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* 装饰光效 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/8 blur-[120px]" />
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
          className="text-3xl font-bold text-white md:text-5xl lg:text-6xl"
        >
          数字对讲平台
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.hero, delay: 0.7, ease: EASE.out }}
          className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          集数字对讲、实时定位、直播记录、应急呼叫于一体，满足用户对数字对讲通讯、工作现场监控指挥、应急状况即时处置等需求。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, delay: 1.0, ease: EASE.out }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white/80 backdrop-blur-sm">
            对讲通讯
          </span>
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white/80 backdrop-blur-sm">
            实时定位
          </span>
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white/80 backdrop-blur-sm">
            AI 加持
          </span>
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white/80 backdrop-blur-sm">
            数据安全
          </span>
        </motion.div>
      </div>
    </section>
  );
}
