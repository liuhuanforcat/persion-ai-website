"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion-variants";

export function DownloadHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      {/* 背景图 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/des-banner.png')" }}
      />
      {/* 叠加渐变保证文字可读 */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-transparent to-gray-900/60" />

      {/* 装饰光效 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-8">
        {/* 产品标识 - 使用下载图标 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: DURATION.medium, ease: EASE.out }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 shadow-xl backdrop-blur-sm"
        >
          <img
            src="/images/dowload-main.png"
            alt="下载"
            className="h-12 w-12 object-contain"
          />
        </motion.div>

        {/* 主标题 */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.hero, delay: 0.15, ease: EASE.out }}
          className="text-2xl font-bold text-white md:text-5xl"
        >
          下载会点点客户端
        </motion.h1>

        {/* 开发者信息 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, delay: 0.35, ease: EASE.out }}
          className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gray-300"
        >
          <span>开发者：杭州全能数字科技有限公司</span>
          <span className="hidden text-gray-500 sm:inline">|</span>
          <Link
            href="/service"
            className="underline decoration-gray-500 underline-offset-4 transition-colors hover:text-white"
          >
            服务协议
          </Link>
          <Link
            href="/privacy"
            className="underline decoration-gray-500 underline-offset-4 transition-colors hover:text-white"
          >
            隐私政策
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
