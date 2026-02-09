"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  headingVariants,
  defaultViewport,
  EASE,
  DURATION,
} from "@/lib/motion-variants";

interface Milestone {
  id: string;
  date: string;
  title: string;
  description: string;
  /** 配图路径（可选） */
  image?: string;
}

const milestones: Milestone[] = [
  {
    id: "m1",
    date: "2021年11月",
    title: "公司正式成立",
    description:
      "杭州全能数字科技有限公司正式成立，开启实时音视频通讯领域的创业之旅。",
    image: "/images/time-1.png",
  },
  {
    id: "m2",
    date: "2022年3月",
    title: "Enheylig 硬件品牌发布",
    description:
      "旗下硬件品牌 Enheylig 正式对外发布，标志着公司硬件产品线的开端。",
    image: "/images/time-2.png",
  },
  {
    id: "m3",
    date: "2022年7月",
    title: "RTC 平台发布",
    description:
      "自研实时音视频通信（RTC）平台正式发布，为后续产品矩阵提供核心技术底座。",
    image: "/images/time-3.png",
  },
  {
    id: "m4",
    date: "2022年8月",
    title: "首款 4K 相机产品",
    description:
      "推出首款 4K 超高清相机产品，满足高端视频会议和直播场景的画质需求。",
    image: "/images/time-4.png",
  },
  {
    id: "m5",
    date: "2022年11月",
    title: "数字对讲系统发布",
    description:
      "数字对讲系统正式发布，为企业和行业客户提供专业的即时通讯解决方案。",
    image: "/images/time-5.png",
  },
  {
    id: "m6",
    date: "2022年12月",
    title: "海外市场与新品突破",
    description:
      "开拓海外市场，同步发布分体式终端和智能会议大屏，丰富产品形态。",
    image: "/images/time-6.png",
  },
  {
    id: "m7",
    date: "2023年4月",
    title: "四大产品发布",
    description:
      "一次性发布四大核心产品，形成完整的产品体系，覆盖会议、通信、协作、硬件全场景。",
    image: "/images/time-7.png",
  },
  {
    id: "m8",
    date: "2023年8月",
    title: "融合通信与应急指挥平台",
    description:
      "融合通信平台与应急指挥平台发布，进军政府及公共安全领域。",
    image: "/images/time-8.png",
  },
  {
    id: "m9",
    date: "2023年10月",
    title: "出货量破万，助力教育",
    description:
      "终端设备出货量突破万台，成功助力教育行业数字化转型。",
    image: "/images/time-9.png",
  },
  {
    id: "m10",
    date: "2024年3月",
    title: "会议直播与巡检落地",
    description:
      "会议直播系统发布，巡检项目成功落地，持续拓展行业应用场景。",
    image: "/images/time-10.png",
  },
];

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl"
        >
          发展历程
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: DURATION.hero, delay: 0.15, ease: EASE.out }}
          className="mx-auto mb-14 max-w-2xl text-center text-base text-gray-500"
        >
          从初创到行业引领者，每一步都踏实而有力
        </motion.p>

        {/* 左右切换按钮 */}
        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100 md:-left-5"
            aria-label="向左滚动"
          >
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100 md:-right-5"
            aria-label="向右滚动"
          >
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 时间轴滚动区域 */}
          <div
            ref={scrollRef}
            className="scrollbar-hide overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="relative flex min-w-max items-start gap-0 px-8 pt-8">
              {/* 时间轴横线 */}
              <div className="absolute left-0 right-0 top-[56px] h-[2px] bg-gray-300" />

              {milestones.map((milestone, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={milestone.id}
                    className="relative flex w-[280px] shrink-0 flex-col items-center px-3"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {/* 节点圆点 */}
                    <div
                      className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? "border-blue-600 bg-blue-600 scale-125"
                          : "border-gray-400 bg-white"
                      }`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                          isActive ? "bg-white" : "bg-gray-400"
                        }`}
                      />
                    </div>

                    {/* 日期 */}
                    <p
                      className={`mt-4 text-sm font-semibold transition-colors duration-300 ${
                        isActive ? "text-blue-600" : "text-gray-500"
                      }`}
                    >
                      {milestone.date}
                    </p>

                    {/* 标题 */}
                    <h3
                      className={`mt-2 text-center text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {milestone.title}
                    </h3>

                    {/* 展开详情 + 配图 */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -8 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -8 }}
                          transition={{
                            duration: 0.3,
                            ease: EASE.inOut,
                          }}
                          className="overflow-hidden"
                        >
                          {milestone.image && (
                            <div className="mt-3 overflow-hidden rounded-lg">
                              <img
                                src={milestone.image}
                                alt={milestone.title}
                                className="h-32 w-[240px] object-cover"
                              />
                            </div>
                          )}
                          <p className="mt-3 max-w-[240px] text-center text-xs leading-relaxed text-gray-500">
                            {milestone.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
