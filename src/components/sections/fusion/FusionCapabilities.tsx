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

export function FusionCapabilities() {
  return (
    <section
      className="bg-gray-50 py-16 md:py-24"
      aria-labelledby="fusion-capabilities-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 标题 */}
        <motion.h2
          id="fusion-capabilities-title"
          className="text-center text-3xl font-semibold text-gray-900 md:text-4xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          全量融合能力，兼容现网设备
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-3xl text-center text-gray-600 leading-relaxed"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          兼容主流通信终端，支持无缝对接现网设备，拓展通信覆盖范围，简化应用流程，并提供全面的
          API 和 SDK 接口，助力快速集成与灵活扩展。
        </motion.p>

        {/* 配图 */}
        <motion.div
          className="mt-12"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={imageViewport}
        >
          {/* <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-lg md:p-8"> */}
          <ImageWithFallback
            src="/images/fusion/capabilities.png"
            alt="融合能力全景图 — 展示支持的各类终端和协议"
            className="w-full rounded-lg object-contain"
            fallback={
              <div className="flex h-80 w-full items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-500 md:h-[480px]">
                <div className="text-center">
                  <p className="text-lg font-medium">融合能力全景图</p>
                  <p className="mt-2 text-sm text-gray-400">
                    展示支持的各类终端和协议
                  </p>
                </div>
              </div>
            }
          />
          {/* </div> */}
        </motion.div>

        {/* 能力标签 */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {[
            "视频会议终端",
            "视频监控设备",
            "对讲终端",
            "数字电话",
            "SIP/H.323",
            "RTSP/GB28181",
            "API/SDK 接口",
            "物联网设备",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-blue-50 hover:text-blue-700"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
