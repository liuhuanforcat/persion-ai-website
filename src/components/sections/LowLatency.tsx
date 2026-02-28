"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  imageSlideLeftVariants,
  fadeInUpVariants,
  iconGroupContainerVariants,
  iconVariants,
  defaultViewport,
} from "@/lib/motion-variants";

const features = [
  { icon: "⚡", label: "超低延时" },
  { icon: "🔒", label: "端到端加密" },
  { icon: "📡", label: "高清传输" },
  { icon: "🌐", label: "全球节点" },
];

export function LowLatency() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-14 text-center text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
        >
          毫秒级响应，让沟通零距离
        </motion.h2>

        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* Left: Video */}
          <motion.div
            variants={imageSlideLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-surface-dark)] to-[var(--color-primary)] shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-white/60">
                  <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="text-sm">演示视频</span>
                </div>
              </div>
              {/* Placeholder for video - replace src with actual video */}
              {/*
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/videos/low-latency-demo.mp4" type="video/mp4" />
              </video>
              */}
            </div>
          </motion.div>

          {/* Right: Icons + Text */}
          <div className="w-full md:w-1/2">
            <motion.div
              variants={iconGroupContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="mb-8 grid grid-cols-2 gap-4"
            >
              {features.map((f) => (
                <motion.div
                  key={f.label}
                  variants={iconVariants}
                  className="flex items-center gap-3 rounded-xl bg-[var(--color-surface)] p-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-xl">
                    {f.icon}
                  </span>
                  <span className="text-sm font-medium text-[var(--color-primary)]">
                    {f.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                基于自研低延时传输协议，端到端延迟低至 80ms。结合全球分布式节点与智能路由算法，
                无论身处何地，都能享受清晰流畅的音视频通信体验。支持 1080P 高清视频传输，
                弱网环境下依然稳定可靠。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
