"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion-variants";

export function DownloadHero() {
  return (
    <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.medium, ease: EASE.out }}
          className="text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl"
        >
          下载会点点客户端
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.medium, delay: 0.1, ease: EASE.out }}
          className="mt-4 text-base text-gray-500 md:text-lg"
        >
          多平台支持，随时随地开启高效协作
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DURATION.slow, delay: 0.25, ease: EASE.out }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-gray-400"
        >
          <span>开发者：杭州全能数字科技有限公司</span>
          <span className="hidden sm:inline">·</span>
          <Link
            href="/service"
            className="transition-colors hover:text-gray-700"
          >
            服务协议
          </Link>
          <span>·</span>
          <Link
            href="/privacy"
            className="transition-colors hover:text-gray-700"
          >
            隐私政策
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
