"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  defaultViewport,
  EASE,
  DURATION,
  imageVariants,
  imageViewport,
} from "@/lib/motion-variants";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

interface BentoItem {
  label: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  /** Tailwind grid span classes */
  span: string;
  /** Card height class */
  height: string;
  color: string;
  accentBg: string;
  accentBorder: string;
}

const items: BentoItem[] = [
  {
    label: "云端服务",
    title: "弹性云端，全球触达",
    description:
      "基于分布式架构的云端媒体服务，支持全球化节点部署与智能调度，提供毫秒级音视频传输。",
    highlights: ["全球分布式节点", "智能路由调度", "弹性扩缩容", "99.99% SLA"],
    image: "/images/meeting/capabilities.png",
    span: "md:col-span-2 md:row-span-2",
    height: "h-[320px] md:h-full",
    color: "text-blue-600",
    accentBg: "bg-blue-50",
    accentBorder: "group-hover:border-blue-200",
  },
  {
    label: "平台能力",
    title: "核心引擎，一站赋能",
    description:
      "自研 RTC 引擎 + 信令服务 + 媒体处理三位一体，提供会议控制、录制回放、协作白板等全套能力。",
    highlights: ["SFU/MCU 自适应", "端到端加密", "协作白板"],
    image: "/images/meeting/capabilities.png",
    span: "md:col-span-1",
    height: "h-[280px]",
    color: "text-indigo-600",
    accentBg: "bg-indigo-50",
    accentBorder: "group-hover:border-indigo-200",
  },
  {
    label: "协议兼容",
    title: "开放互联，广泛兼容",
    description:
      "全面支持 SIP/H.323/RTSP 等标准协议，无缝对接主流会议系统与监控设备。",
    highlights: ["SIP / H.323", "RTSP 监控接入", "PSTN 网关"],
    image: "/images/meeting/capabilities.png",
    span: "md:col-span-1",
    height: "h-[280px]",
    color: "text-violet-600",
    accentBg: "bg-violet-50",
    accentBorder: "group-hover:border-violet-200",
  },
  {
    label: "终端矩阵",
    title: "全系终端，场景覆盖",
    description:
      "从 4K 智能摄像头到一体式会议大屏，从桌面终端到移动端 APP，形成软硬一体的完整产品矩阵。",
    highlights: ["4K 智能摄像头", "一体式会议终端", "会议大屏", "多端 APP"],
    image: "/images/meeting/capabilities.png",
    span: "md:col-span-2",
    height: "h-[260px]",
    color: "text-cyan-600",
    accentBg: "bg-cyan-50",
    accentBorder: "group-hover:border-cyan-200",
  },
];

function BentoCard({
  item,
  index,
}: {
  item: BentoItem;
  index: number;
}) {
  const isLarge = index === 0;

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white transition-all duration-300 hover:shadow-xl ${item.span} ${item.height} ${item.accentBorder}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{
        duration: DURATION.slow,
        delay: index * 0.1,
        ease: EASE.out,
      }}
    >
      {/* 背景图 */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.14]"
          fallback={<div />}
        />
      </div>

      {/* 悬停渐变 */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${item.accentBg}`}
        style={{ opacity: undefined }}
      />

      {/* 内容 */}
      <div className={`relative flex h-full flex-col justify-between ${isLarge ? "p-8 md:p-10" : "p-6 md:p-7"}`}>
        <div>
          {/* 标签 */}
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${item.accentBg} ${item.color}`}
          >
            {item.label}
          </span>

          {/* 标题 */}
          <h3
            className={`mt-4 font-bold text-gray-900 ${isLarge ? "text-2xl md:text-3xl" : "text-xl"}`}
          >
            {item.title}
          </h3>

          {/* 描述 */}
          <p
            className={`mt-3 leading-relaxed text-gray-500 ${isLarge ? "max-w-md text-base" : "text-sm"}`}
          >
            {item.description}
          </p>
        </div>

        {/* 亮点标签 */}
        <div className="mt-5 flex flex-wrap gap-2">
          {item.highlights.map((h) => (
            <span
              key={h}
              className="rounded-full bg-gray-100/80 px-3 py-1 text-xs font-medium text-gray-600 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/80"
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* 装饰圆 */}
      <div
        className={`pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full opacity-[0.04] transition-all duration-700 group-hover:-bottom-10 group-hover:-right-10 group-hover:opacity-[0.08] ${item.color === "text-blue-600" ? "bg-blue-500" : item.color === "text-indigo-600" ? "bg-indigo-500" : item.color === "text-violet-600" ? "bg-violet-500" : "bg-cyan-500"}`}
      />
    </motion.article>
  );
}

export function MeetingArchitecture() {
  return (
    <section
      className="bg-gray-50 pb-16 md:pb-24"
      aria-labelledby="meeting-architecture-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* <motion.h2
          id="meeting-architecture-title"
          className="text-center text-3xl font-semibold text-gray-900 md:text-4xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          为什么选择我们
        </motion.h2> */}
        {/* <motion.p
          className="mx-auto mt-4 max-w-3xl text-center text-gray-600 leading-relaxed"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          从云端到终端的完整架构，每一层都经过精心设计
        </motion.p> */}

        {/* Bento Grid: 4 列，第 1 项占 2x2，第 2/3 各 1x1，第 4 项占 2x1 */}
        {/* <div className="mt-14 grid gap-4 md:grid-cols-4 md:grid-rows-[auto_auto]">
          {items.map((item, i) => (
            <BentoCard key={item.label} item={item} index={i} />
          ))}
        </div> */}
      </div>
      {/* 架构全景图 */}
      <motion.div
        // className="px-4 md:px-8"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={imageViewport}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ImageWithFallback
            src="/images/meeting/capabilities.png"
            alt="视频会议平台架构全景图 — 展示从云端到终端的整体架构"
            className="block w-full object-contain"
            fallback={
              <div className="flex h-80 w-full items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-500 md:h-[480px]">
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
    </section>
  );
}
