"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  headingVariants,
  defaultViewport,
} from "@/lib/motion-variants";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  { date: "2015.06", title: "公司成立", description: "QNSZ科技在北京正式成立，开启融合通信探索之路。" },
  { date: "2016.03", title: "首款产品", description: "自主研发的融合通信平台 V1.0 正式发布并投入商用。" },
  { date: "2017.08", title: "高新认定", description: "通过国家高新技术企业认定，获首轮战略融资。" },
  { date: "2018.05", title: "视频会议", description: "推出云视频会议系统，支持千人级在线会议。" },
  { date: "2019.01", title: "全国布局", description: "在上海、深圳、成都设立研发中心，团队突破 200 人。" },
  { date: "2020.04", title: "应急指挥", description: "应急指挥调度平台上线，助力多地疫情防控通信保障。" },
  { date: "2021.09", title: "数字对讲", description: "新一代数字对讲终端量产，通过 IP67 防护认证。" },
  { date: "2022.06", title: "千企客户", description: "累计服务企事业单位超 1000 家，年营收突破亿元。" },
  { date: "2023.11", title: "AI 赋能", description: "融合 AI 语音助手与智能降噪技术，产品全面智能化升级。" },
  { date: "2024.08", title: "生态拓展", description: "发布多终端融合通信生态，覆盖 PC、手机、穿戴设备等全场景。" },
];

const CARD_WIDTH = 300;
const CARD_GAP = 24;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;

export function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -SCROLL_STEP * 2 : SCROLL_STEP * 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gradient-to-b from-[#f0f4f8] to-[#e8edf3] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-14 text-center text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
        >
          发展里程碑
        </motion.h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 md:-left-5 md:h-12 md:w-12 ${
              canScrollLeft
                ? "text-[var(--color-primary)] hover:bg-gray-50 hover:shadow-xl"
                : "cursor-not-allowed text-gray-300"
            }`}
            aria-label="向左翻页"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 md:-right-5 md:h-12 md:w-12 ${
              canScrollRight
                ? "text-[var(--color-primary)] hover:bg-gray-50 hover:shadow-xl"
                : "cursor-not-allowed text-gray-300"
            }`}
            aria-label="向右翻页"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Timeline */}
          <div
            ref={scrollRef}
            className="scrollbar-hide flex gap-6 overflow-x-auto px-2 py-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {events.map((event, i) => (
              <motion.div
                key={event.date}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: Math.min(i * 0.08, 0.4), ease: [0, 0, 0.2, 1] }}
                className="flex-shrink-0"
                style={{ width: CARD_WIDTH, scrollSnapAlign: "start" }}
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
                  {/* Image placeholder */}
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-5xl font-bold text-[var(--color-accent)]/10">
                        {event.date.slice(0, 4)}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-accent)] to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <span className="mb-1 text-xs font-semibold tracking-wider text-[var(--color-accent)]">
                      {event.date}
                    </span>
                    <h3 className="mb-2 text-base font-bold text-[var(--color-primary)]">
                      {event.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
