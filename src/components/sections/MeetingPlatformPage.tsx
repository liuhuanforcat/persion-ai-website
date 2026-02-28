"use client";

import { motion } from "framer-motion";
import {
  cardContainerVariants,
  cardVariants,
  defaultViewport,
  headingVariants,
  imageVariants,
  paragraphVariants,
} from "@/lib/motion-variants";

const deployModes = [
  {
    title: "公有云会议服务",
    description:
      "快速开通、弹性扩容，适合跨区域协作与多组织接入场景，降低平台建设周期。",
    icon: "☁️",
  },
  {
    title: "私有云会议服务",
    description:
      "核心数据本地化部署，保障政企信息安全与可控合规，支持分级权限和审计管理。",
    icon: "🔒",
  },
  {
    title: "专业音视频终端",
    description:
      "覆盖会议室、桌面端与移动端，提供高品质采集与编解码能力，提升会议体验一致性。",
    icon: "🎥",
  },
];

const capabilities = [
  {
    title: "4K 超清音视频",
    description: "端到端高清传输，画面细节清晰，语音还原稳定自然。",
  },
  {
    title: "会议 AI 能力",
    description: "支持会议纪要、内容提取与智能辅助，提升信息沉淀效率。",
  },
  {
    title: "国产化兼容设计",
    description: "终端与平台支持国产化软硬件体系，满足自主可控建设要求。",
  },
  {
    title: "全场景协同",
    description: "覆盖日常会商、远程调度、应急联动等多场景专业会议需求。",
  },
];

const scenarioCards = [
  "跨部门联合会商",
  "远程专家会诊",
  "应急指挥调度",
  "日常行政办公",
];

export function MeetingPlatformPage() {
  return (
    <>
      <section className="relative flex min-h-[560px] items-center overflow-hidden pt-18 md:min-h-[680px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=2200&q=80"
            alt="视频会议平台首屏背景"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#091523]/92 via-[#0d2038]/85 to-[#0d2038]/78" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 md:px-8 md:py-26">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0, 0, 0.2, 1] }}
            className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-[0.12em] text-white/80"
          >
            VIDEO CONFERENCE PLATFORM
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0, 0, 0.2, 1] }}
            className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            视频会议平台
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0, 0, 0.2, 1] }}
            className="mt-6 max-w-4xl text-base leading-8 text-white/85 md:text-xl"
          >
            平台涵盖公有云、私有云会议服务及各类专业音视频终端，
            支持 4K 高清音视频与会议 AI 能力，全面满足政企全场景专业会议需求。
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="text-center text-3xl font-semibold text-[var(--color-primary)] md:text-4xl"
          >
            平台服务能力
          </motion.h2>
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mx-auto mt-4 max-w-3xl text-center leading-7 text-[var(--color-text-muted)]"
          >
            以“云 + 端 + 管”的统一架构，构建可快速接入、稳定可靠、长期演进的视频会议基础设施。
          </motion.p>

          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {deployModes.map((item) => (
              <motion.article
                key={item.title}
                variants={cardVariants}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="text-center text-3xl font-semibold text-[var(--color-primary)] md:text-4xl"
          >
            全场景专业会议体验
          </motion.h2>
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mx-auto mt-4 max-w-4xl text-center leading-7 text-[var(--color-text-muted)]"
          >
            通过高质量音视频引擎、会议 AI 与终端协同机制，确保从日常沟通到应急会商都能高效稳定运行。
          </motion.p>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=80"
              alt="视频会议协同场景示意"
              className="h-[280px] w-full object-cover md:h-[430px]"
            />
          </motion.div>

          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-8 grid gap-4 md:grid-cols-2"
          >
            {capabilities.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="rounded-xl border border-[var(--color-border)] bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="text-center text-3xl font-semibold text-[var(--color-primary)] md:text-4xl"
          >
            典型应用场景
          </motion.h2>
          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {scenarioCards.map((name) => (
              <motion.article
                key={name}
                variants={cardVariants}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center"
              >
                <div className="mx-auto mb-3 h-2 w-10 rounded-full bg-[var(--color-accent)]/75" />
                <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                  {name}
                </h3>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
