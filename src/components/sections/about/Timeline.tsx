"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  headingVariants,
  defaultViewport,
  EASE,
  DURATION,
} from "@/lib/motion-variants";

interface Milestone {
  id: string;
  year: string;
  month: string;
  title: string;
  description: string;
  image?: string;
}

const milestones: Milestone[] = [
  {
    id: "m1",
    year: "2021",
    month: "11月",
    title: "公司正式成立",
    description:
      "杭州全能数字科技有限公司正式成立，开启实时音视频通讯领域的创业之旅。",
    image: "/images/time-1.png",
  },
  {
    id: "m2",
    year: "2022",
    month: "03月",
    title: "Enheylig 硬件品牌发布",
    description:
      "旗下硬件品牌 Enheylig 正式对外发布，标志着公司硬件产品线的开端。",
    image: "/images/time-2.png",
  },
  {
    id: "m3",
    year: "2022",
    month: "07月",
    title: "RTC 平台发布",
    description:
      "自研实时音视频通信（RTC）平台正式发布，为后续产品矩阵提供核心技术底座。",
    image: "/images/time-3.png",
  },
  {
    id: "m4",
    year: "2022",
    month: "08月",
    title: "首款 4K 相机产品",
    description:
      "推出首款 4K 超高清相机产品，满足高端视频会议和直播场景的画质需求。",
    image: "/images/time-4.png",
  },
  {
    id: "m5",
    year: "2022",
    month: "11月",
    title: "数字对讲系统发布",
    description:
      "数字对讲系统正式发布，为企业和行业客户提供专业的即时通讯解决方案。",
    image: "/images/time-5.png",
  },
  {
    id: "m6",
    year: "2022",
    month: "12月",
    title: "海外市场与新品突破",
    description:
      "开拓海外市场，同步发布分体式终端和智能会议大屏，丰富产品形态。",
    image: "/images/time-6.png",
  },
  {
    id: "m7",
    year: "2023",
    month: "04月",
    title: "四大产品发布",
    description:
      "一次性发布四大核心产品，形成完整的产品体系，覆盖会议、通信、协作、硬件全场景。",
    image: "/images/time-7.png",
  },
  {
    id: "m8",
    year: "2023",
    month: "08月",
    title: "融合通信与应急指挥平台",
    description:
      "融合通信平台与应急指挥平台发布，进军政府及公共安全领域。",
    image: "/images/time-8.png",
  },
  {
    id: "m9",
    year: "2023",
    month: "10月",
    title: "出货量破万，助力教育",
    description:
      "终端设备出货量突破万台，成功助力教育行业数字化转型。",
    image: "/images/time-9.png",
  },
  {
    id: "m10",
    year: "2024",
    month: "03月",
    title: "会议直播与巡检落地",
    description:
      "会议直播系统发布，巡检项目成功落地，持续拓展行业应用场景。",
    image: "/images/time-10.png",
  },
];

const contentVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE.inOut },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -60 : 60,
    transition: { duration: 0.3, ease: EASE.inOut },
  }),
};

const AUTO_INTERVAL = 4000;

const AXIS_LEFT = 12;
const NODE_SIZES = { active: 20, past: 12, future: 10 };

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const mobileItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mobileProgressPx, setMobileProgressPx] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= milestones.length || index === activeIndex)
        return;
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex],
  );

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setDirection(1);
      setActiveIndex((prev) =>
        prev >= milestones.length - 1 ? 0 : prev + 1,
      );
    }, AUTO_INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, paused]);

  const handleUserInteract = useCallback(
    (index: number) => {
      setPaused(true);
      goTo(index);
      setTimeout(() => setPaused(false), AUTO_INTERVAL * 2);
    },
    [goTo],
  );

  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRefs.current[activeIndex];
    const track = trackRef.current;
    const inner = innerRef.current;
    if (!node || !track || !inner) return;

    const trackRect = track.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();
    const scrollLeft =
      nodeRect.left - trackRect.left + track.scrollLeft - trackRect.width / 2 + nodeRect.width / 2;
    track.scrollTo({ left: scrollLeft, behavior: "smooth" });

    const innerRect = inner.getBoundingClientRect();
    const nodeCenterX = nodeRect.left + nodeRect.width / 2 - innerRect.left;
    const paddingLeft = 8;
    setProgressPx(Math.max(0, nodeCenterX - paddingLeft));
  }, [activeIndex]);

  useEffect(() => {
    const container = mobileContainerRef.current;
    const item = mobileItemRefs.current[activeIndex];
    if (!container || !item) return;

    const updateProgress = () => {
      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const nodeCenter = itemRect.top - containerRect.top + 10;
      setMobileProgressPx(Math.max(0, nodeCenter));
    };

    updateProgress();
    const timer = setTimeout(updateProgress, 400);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const active = milestones[activeIndex];
  const [progressPx, setProgressPx] = useState(0);

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
          className="mx-auto mb-10 max-w-2xl text-center text-base text-gray-500 md:mb-16"
        >
          从初创到行业引领者，每一步都踏实而有力
        </motion.p>

        {/* ========== 桌面端 ========== */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.75, ease: EASE.out }}
          className="hidden md:block"
        >
          {/* 时间轴导航 */}
          <div className="relative mx-auto mb-8 max-w-4xl">
            <div
              ref={trackRef}
              className="relative flex items-start overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: "none" }}
            >
              <div
                ref={innerRef}
                className="relative flex w-full min-w-0 items-start justify-between px-2 pt-3 pb-1"
              >
                {/* 底部轨道线 */}
                <div className="absolute left-2 right-2 top-[15px] h-px bg-gray-200/80" />
                {/* 进度线 */}
                <motion.div
                  className="absolute left-2 top-[15px] h-px bg-blue-500"
                  initial={false}
                  animate={{ width: progressPx }}
                  transition={{ duration: 0.5, ease: EASE.inOut }}
                />

                {milestones.map((m, i) => {
                  const isActive = i === activeIndex;
                  const isPast = i <= activeIndex;
                  return (
                    <button
                      key={m.id}
                      ref={(el) => { nodeRefs.current[i] = el; }}
                      onClick={() => handleUserInteract(i)}
                      className="group relative z-10 flex flex-col items-center"
                    >
                      {/* 节点 */}
                      <div
                        className={`relative rounded-full transition-all duration-300 ${isActive
                          ? "h-[10px] w-[10px] bg-blue-600 shadow-[0_0_0_3px_rgba(59,130,246,0.15)]"
                          : isPast
                            ? "h-2 w-2 bg-blue-400"
                            : "h-[7px] w-[7px] border-[1.5px] border-gray-300 bg-white group-hover:border-blue-400"
                          }`}
                      />

                      {/* 日期标签 */}
                      <span
                        className={`mt-2 whitespace-nowrap text-[10px] font-medium transition-colors duration-300 ${isActive
                          ? "font-semibold text-blue-600"
                          : isPast
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500"
                          }`}
                      >
                        {m.year}.{m.month.replace("月", "")}
                      </span>

                      {/* 选中标题 */}
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-0.5 whitespace-nowrap text-[10px] text-gray-400"
                        >
                          {m.title}
                        </motion.span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 内容展示区 */}
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200/80">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col md:flex-row"
              >
                {/* 图片 */}
                <div className="relative w-full overflow-hidden md:w-[38%]">
                  {active.image ? (
                    <img
                      src={active.image}
                      alt={active.title}
                      className="h-full min-h-[160px] w-full object-cover md:min-h-[200px]"
                    />
                  ) : (
                    <div className="flex h-full min-h-[160px] items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 md:min-h-[200px]">
                      <span className="text-4xl font-bold text-white/20">
                        {active.year}
                      </span>
                    </div>
                  )}
                </div>

                {/* 文字 */}
                <div className="flex flex-1 flex-col justify-center px-7 py-6 md:px-8 md:py-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-600">
                      <span className="h-1 w-1 rounded-full bg-blue-500" />
                      {active.year}.{active.month}
                    </span>
                    <span className="text-[11px] text-gray-400">
                      {activeIndex + 1}/{milestones.length}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {active.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-gray-500">
                    {active.description}
                  </p>

                  {/* 前后导航 */}
                  <div className="mt-4 flex items-center gap-1.5">
                    <button
                      onClick={() => handleUserInteract(activeIndex - 1)}
                      disabled={activeIndex === 0}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-30"
                      aria-label="上一个里程碑"
                    >
                      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleUserInteract(activeIndex + 1)}
                      disabled={activeIndex === milestones.length - 1}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-30"
                      aria-label="下一个里程碑"
                    >
                      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ========== 移动端：垂直时间线 ========== */}
        <div className="md:hidden" ref={mobileContainerRef}>
          <div className="relative" style={{ paddingLeft: `${AXIS_LEFT + 20}px` }}>
            {/* 垂直轨道线（灰色底线） */}
            <div
              className="absolute top-0 bottom-0 w-[2px] rounded-full bg-gray-200"
              style={{ left: `${AXIS_LEFT}px` }}
            />
            {/* 进度线（蓝色，基于实际 DOM 位置） */}
            <motion.div
              className="absolute top-0 w-[2px] rounded-full bg-gradient-to-b from-blue-500 to-blue-400"
              style={{ left: `${AXIS_LEFT}px` }}
              initial={false}
              animate={{ height: mobileProgressPx }}
              transition={{ duration: 0.5, ease: EASE.inOut }}
            />

            {milestones.map((m, i) => {
              const isActive = i === activeIndex;
              const isPast = i <= activeIndex;
              const nodeSize = isActive ? NODE_SIZES.active : isPast ? NODE_SIZES.past : NODE_SIZES.future;

              return (
                <motion.div
                  key={m.id}
                  ref={(el) => { mobileItemRefs.current[i] = el; }}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.04,
                    ease: EASE.out,
                  }}
                  className="relative pb-6 last:pb-0"
                >
                  {/* 节点圆点 — 用绝对定位居中到轨道线上 */}
                  <div
                    className="absolute top-1 flex items-center justify-center"
                    style={{
                      left: `${-(AXIS_LEFT + 20) + AXIS_LEFT + 1 - nodeSize / 2}px`,
                      width: `${nodeSize}px`,
                      height: `${nodeSize}px`,
                    }}
                  >
                    <div
                      className={`h-full w-full rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-blue-600 ring-[3px] ring-blue-100"
                          : isPast
                            ? "bg-blue-400"
                            : "border-2 border-gray-300 bg-white"
                      }`}
                    />
                  </div>

                  {/* 卡片内容 */}
                  <button
                    onClick={() => handleUserInteract(i)}
                    className={`w-full rounded-xl text-left transition-all duration-300 ${
                      isActive
                        ? "bg-white p-4 shadow-md shadow-gray-200/60 ring-1 ring-gray-100"
                        : "px-4 py-3"
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold ${
                        isActive ? "text-blue-600" : isPast ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {m.year} 年 {m.month}
                    </span>
                    <h3
                      className={`mt-0.5 text-[15px] font-bold ${
                        isActive ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {m.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASE.inOut }}
                          className="overflow-hidden"
                        >
                          {m.image && (
                            <img
                              src={m.image}
                              alt={m.title}
                              className="mt-3 h-36 w-full rounded-lg object-cover"
                            />
                          )}
                          <p className="mt-2.5 text-sm leading-relaxed text-gray-500">
                            {m.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
