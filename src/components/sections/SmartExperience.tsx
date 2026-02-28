"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  fadeInUpVariants,
  imageSlideLeftVariants,
  iconGroupContainerVariants,
  iconVariants,
  defaultViewport,
} from "@/lib/motion-variants";

const terminalIcons = [
  { icon: "💻", label: "PC端" },
  { icon: "📱", label: "手机端" },
  { icon: "📺", label: "大屏端" },
  { icon: "⌚", label: "穿戴端" },
  { icon: "🎙️", label: "对讲终端" },
  { icon: "📹", label: "会议终端" },
];

export function SmartExperience() {
  return (
    <section className="bg-[var(--color-surface)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-14 text-center text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
        >
          AI 驱动，智能化通信新体验
        </motion.h2>

        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* Left: Image */}
          <motion.div
            variants={imageSlideLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg">
                    <svg
                      className="h-10 w-10 text-[var(--color-accent)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-muted)]">
                    AI 智能场景
                  </span>
                </div>
              </div>
              <div className="animate-float absolute right-6 top-6 h-12 w-12 rounded-xl bg-white/80 shadow-md" />
              <div className="animate-pulse-glow absolute bottom-8 left-8 h-10 w-10 rounded-lg bg-white/60 shadow-md" />
            </div>
          </motion.div>

          {/* Right: Icons + Text */}
          <div className="w-full md:w-1/2">
            <motion.div
              variants={iconGroupContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="mb-8 grid grid-cols-3 gap-3"
            >
              {terminalIcons.map((t) => (
                <motion.div
                  key={t.label}
                  variants={iconVariants}
                  className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md"
                >
                  <span className="text-2xl">{t.icon}</span>
                  <span className="text-xs font-medium text-[var(--color-text-muted)]">
                    {t.label}
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
                内置 AI 语音助手与智能降噪算法，支持实时语音转文字、会议纪要自动生成。
                多终端无缝切换，从桌面到移动端、从会议终端到穿戴设备，一个账号畅享所有功能。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
