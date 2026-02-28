"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  cardContainerVariants,
  cardVariants,
  cardHover,
  defaultViewport,
} from "@/lib/motion-variants";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

type Product = {
  image: string;
  name: string;
  tagline: string;
};

const products: Product[] = [
  {
    image: "/images/meeting/product_1.png",
    name: "分体式会议终端",
    tagline: "丰富接口，支持主流平台，无线投屏/白板共享/一键入会",
  },
  {
    image: "/images/meeting/product_2.png",
    name: "分体式会议终端精巧版",
    tagline: "轻量化设计，核心功能，高清画质",
  },
  {
    image: "/images/meeting/product_3.png",
    name: "4K超清视频会议一体式终端",
    tagline: "终端+摄像头+麦克风一体，4K+12X光学变焦",
  },
  {
    image: "/images/meeting/product_4.png",
    name: "会议大屏",
    tagline: "麒麟国产芯片，4K显示，流畅书写，远程批注",
  },
  {
    image: "/images/meeting/product_5.png",
    name: "高清云台摄像机",
    tagline: "12倍光学变焦，红外遥控，一键预置位",
  },
  {
    image: "/images/meeting/product_6.png",
    name: "4K USB摄像机",
    tagline: "120°超广角无畸变，AI智能模式（居中/分格）",
  },
  {
    image: "/images/meeting/product_7.png",
    name: "智能双目云台摄像机",
    tagline: "特写+全景双摄，人物追踪，沉浸式体验",
  },
  {
    image: "/images/meeting/product_8.png",
    name: "桌面智能一体机",
    tagline: "5W扬声器+远场麦克风+120°广角镜头一体",
  },
  {
    image: "/images/meeting/product_9.png",
    name: "无线全向麦音箱",
    tagline: "3A音频+AI降噪，2台无线级联，超低延时",
  },
  {
    image: "/images/meeting/product_10.png",
    name: "会议室智慧门牌",
    tagline: "接入OA平台，实时同步日程，LED灯带状态显示",
  },
  {
    image: "/images/meeting/product_11.png",
    name: "会控平板",
    tagline: "定制系统，可视化操控多设备，替代遥控器",
  },
];

export function MeetingProducts() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="meeting-products-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 标题 */}
        <motion.h2
          id="meeting-products-title"
          className="text-center text-3xl font-semibold text-gray-900 md:text-4xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          选择适合您的产品
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-gray-600"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          从终端到配件，全系列专业会议硬件，满足不同空间和预算需求
        </motion.p>

        {/* 产品卡片网格 */}
        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {products.map((p, i) => (
            <motion.article
              key={i}
              className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
              variants={cardVariants}
              whileHover={cardHover}
            >
              {/* 产品图 */}
              <div className="flex h-48 items-center justify-center bg-gray-50 p-4">
                <ImageWithFallback
                  src={p.image}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  fallback={
                    <div className="flex h-full w-full items-center justify-center text-gray-400">
                      <svg
                        className="h-16 w-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  }
                />
              </div>

              {/* 产品信息 */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {p.tagline}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
