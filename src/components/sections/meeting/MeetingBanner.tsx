"use client";

import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion-variants";

export function MeetingBanner() {
  return (
    <section className="relative flex h-[80vh] min-h-[520px] w-full items-center justify-center overflow-hidden bg-gray-900">
      {/* 背景图 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/meeting/meetingBanner.png')" }}
      />
      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* 装饰光效 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
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
          视频会议平台
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.hero, delay: 0.7, ease: EASE.out }}
          className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          平台涵盖公有云、私有云会议服务及各类专业音视频终端。终端采用端到端国产化设计，支持4K高清音视频和会议AI功能，全面满足全场景专业音视频会议需求。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, delay: 1.0, ease: EASE.out }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white/80 backdrop-blur-sm">
            云 + 端 一体
          </span>
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white/80 backdrop-blur-sm">
            全场景覆盖
          </span>
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white/80 backdrop-blur-sm">
            安全可靠
          </span>
        </motion.div>
      </div>
    </section>
  );
}
