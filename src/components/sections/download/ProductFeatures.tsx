"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  defaultViewport,
  EASE,
  DURATION,
  SPRING,
  buttonTap,
} from "@/lib/motion-variants";

/* ------------------------------------------------------------------ */
/* 特性数据                                                            */
/* ------------------------------------------------------------------ */

interface Feature {
  id: string;
  tag: string;
  title: string;
  description: string;
  /** 产品截图占位 - 替换为实际截图路径 */
  image: string;
}

const features: Feature[] = [
  {
    id: "hd-meeting",
    tag: "超清体验",
    title: "高清会议 稳定流畅",
    description:
      "超清会议视频，稳定流畅低延时。支持多方高清视频通话，智能带宽自适应，即使在弱网环境下也能保持画面清晰、声音流畅，让每一次沟通都如面对面般自然。",
    image: "/images/show-box-image-2.png",
  },
  {
    id: "schedule",
    tag: "高效管理",
    title: "日程管理 便捷高效",
    description:
      "会议便捷预约，日程一目了然。一键创建会议、智能提醒、日历视图直观展示，轻松管理每一天的工作安排，再也不会错过重要会议。",
    image: "/images/show-box-image.png",
  },
];

/* ------------------------------------------------------------------ */
/* 组件                                                                */
/* ------------------------------------------------------------------ */

const AUTO_PLAY_INTERVAL = 3000;

export function ProductFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = features[activeIndex];
  const pausedRef = useRef(false);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pausedRef.current) next();
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 区块标题 */}
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl"
        >
          产品特性
        </motion.h2>
        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mx-auto mb-14 max-w-2xl text-center text-base text-gray-500"
        >
          简洁易用，让沟通更高效
        </motion.p>

        {/* 内容区域：左文案 + 右截图 */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* 左侧：特性切换 */}
          <div
            className="w-full lg:w-[45%]"
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
          >
            <div className="space-y-4">
              {features.map((feature, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.button
                    key={feature.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    whileTap={buttonTap}
                    className={`group w-full rounded-2xl border p-6 text-left transition-all duration-300 ${isActive
                        ? "border-blue-200 bg-blue-50/70 shadow-md"
                        : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50"
                      }`}
                  >
                    {/* 标签 */}
                    <span
                      className={`inline-block rounded-full px-3 py-0.5 text-xs font-medium transition-colors ${isActive
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                        }`}
                    >
                      {feature.tag}
                    </span>

                    {/* 标题 */}
                    <h3
                      className={`mt-3 text-lg font-semibold transition-colors ${isActive ? "text-gray-900" : "text-gray-700"
                        }`}
                    >
                      {feature.title}
                    </h3>

                    {/* 描述（仅激活时展示） */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: EASE.inOut }}
                          className="overflow-hidden text-sm leading-relaxed text-gray-500"
                        >
                          <span className="block pt-3">{feature.description}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* 右侧：产品截图 */}
          <div className="relative w-full lg:w-[55%]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: DURATION.medium, ease: EASE.inOut }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    src={active.image}
                    alt={active.title}
                    className="h-full w-full object-contain p-4"
                    onError={(e) => {
                      // 图片不存在时显示占位
                      const target = e.currentTarget;
                      target.style.display = "none";
                      target.parentElement!.classList.add("fallback-active");
                    }}
                  />
                  {/* 占位 fallback */}
                  <div className="pointer-events-none absolute inset-0 hidden items-center justify-center [.fallback-active>&]:flex">
                    <div className="text-center">
                      <svg className="mx-auto h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="mt-2 text-sm text-gray-400">{active.title} 截图</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 装饰元素 */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-blue-100/50 blur-2xl" />
            <div className="pointer-events-none absolute -top-4 -left-4 h-24 w-24 rounded-full bg-indigo-100/50 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
