"use client";

import { motion } from "framer-motion";
import {
  cardContainerVariants,
  cardVariants,
  cardHover,
  headingVariants,
  paragraphVariants,
  defaultViewport,
} from "@/lib/motion-variants";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

type Feature = {
  image: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    image: "/images/fusion/feature_one.png",
    title: "统一指挥，一键调度",
    description:
      "一套系统，一个操作台，实现跨部门、跨层级统一指挥，一键调度音视频资源，快速响应，高效协同。",
  },
  {
    image: "/images/fusion/feature_two.png",
    title: "全融合通信能力",
    description:
      "解决各类异构通信终端的音视频互联互通问题，全面满足实战指挥中末端通达的核心需求。",
  },
  {
    image: "/images/fusion/feature_three.png",
    title: "多场景适配的指挥调度模块",
    description:
      "兼具日常值班与办公通信功能，同时满足战时协同指挥和统一调度需求，全面适配多场景指挥调度任务。",
  },
  {
    image: "/images/fusion/feature_four.png",
    title: "无缝衔接，灵活拓展",
    description:
      "提供完善的二次开发接口，轻松实现业务系统与基础音视频系统的无缝集成，助力功能拓展与高效衔接。",
  },
];

export function FusionFeatures() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="fusion-features-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 标题 */}
        <motion.h2
          id="fusion-features-title"
          className="text-center text-3xl font-semibold text-gray-900 md:text-4xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          平台特点
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-gray-600"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          统一、融合、灵活、可扩展——为什么选择我们
        </motion.p>

        {/* 卡片 */}
        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {features.map((f, i) => (
            <motion.article
              key={i}
              className="group relative overflow-hidden rounded-xl bg-gray-50 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              variants={cardVariants}
              whileHover={cardHover}
            >
              {/* 图标区域 */}
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                <ImageWithFallback
                  src={f.image}
                  alt={f.title}
                  className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
                  fallback={
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-2xl text-blue-400">
                      ✦
                    </div>
                  }
                />
              </div>

              {/* 文本 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {f.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
