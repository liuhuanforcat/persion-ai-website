"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  imageVariants,
  defaultViewport,
  imageViewport,
  cardContainerVariants,
  cardVariants,
} from "@/lib/motion-variants";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const capabilities = [
  {
    icon: "🎥",
    title: "视频会议",
    desc: "高清音视频会议，多方实时沟通，支持跨平台接入。",
  },
  {
    icon: "📹",
    title: "视频监控",
    desc: "统一调阅各类监控资源，实时查看现场态势。",
  },
  {
    icon: "📞",
    title: "数字电话",
    desc: "融合传统电话系统，实现一键呼叫与语音调度。",
  },
  {
    icon: "📻",
    title: "视频对讲",
    desc: "集群对讲、单呼组呼，适配多种对讲终端。",
  },
  {
    icon: "🌐",
    title: "物联网 IoT",
    desc: "接入物联传感设备，实现全域感知与数据汇聚。",
  },
  {
    icon: "🏙️",
    title: "数字孪生",
    desc: "三维可视化呈现，直观掌握全局态势与资源分布。",
  },
];

export function FusionMultiTerminal() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="fusion-multi-terminal-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 标题 */}
        <motion.h2
          id="fusion-multi-terminal-title"
          className="text-center text-3xl font-semibold text-gray-900 md:text-4xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          多端联动，构建全场景通信协作能力
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-3xl text-center text-gray-600 leading-relaxed"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          覆盖视频会议、视频监控、数字电话、视频对讲、物联网 IoT、数字孪生等核心场景，满足广泛行业需求，助力上级管理部门与指挥中心高效协同。
        </motion.p>

        {/* 配图 */}
        <motion.div
          className="mt-12"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={imageViewport}
        >
          <div className="overflow-hidden rounded-2xl bg-gray-50 p-4 shadow-lg md:p-8">
            <ImageWithFallback
              src="/images/fusion/multi-terminal.png"
              alt="多端联动示意图 — 展示各场景之间的连接关系"
              className="w-full rounded-lg object-contain"
              fallback={
                <div className="flex h-80 w-full items-center justify-center rounded-lg bg-gradient-to-br from-indigo-50 to-blue-100 text-gray-500 md:h-[480px]">
                  <div className="text-center">
                    <p className="text-lg font-medium">多端联动示意图</p>
                    <p className="mt-2 text-sm text-gray-400">
                      展示各场景之间的连接关系
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </motion.div>

        {/* 场景能力卡片 */}
        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 rounded-xl bg-gray-50 p-5 transition-shadow duration-300 hover:shadow-md"
              variants={cardVariants}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-2xl">
                {cap.icon}
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">{cap.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
