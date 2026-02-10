"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  imageVariants,
  defaultViewport,
  imageViewport,
} from "@/lib/motion-variants";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export function MeetingArchitecture() {
  return (
    <section
      className="bg-gray-50 py-16 md:py-24"
      aria-labelledby="meeting-architecture-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 标题 */}
        <motion.h2
          id="meeting-architecture-title"
          className="text-center text-3xl font-semibold text-gray-900 md:text-4xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          平台架构
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-3xl text-center text-gray-600 leading-relaxed"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          从云端服务到硬件终端的完整架构，一图看清平台全貌与技术能力覆盖面
        </motion.p>

        {/* 架构全景图 */}
        <motion.div
          className="mt-12"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={imageViewport}
        >
          <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-lg md:p-8">
            <ImageWithFallback
              src="/images/meeting/capabilities.png"
              alt="视频会议平台架构全景图 — 展示从云端到终端的整体架构"
              className="w-full rounded-lg object-contain"
              fallback={
                <div className="flex h-80 w-full items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-500 md:h-[480px]">
                  <div className="text-center">
                    <p className="text-lg font-medium">平台架构全景图</p>
                    <p className="mt-2 text-sm text-gray-400">
                      从云端到终端的整体能力架构
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
