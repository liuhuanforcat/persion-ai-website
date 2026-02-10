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
    image: "/images/talkback/feature_one.png",
    title: "全国组网，即时对讲",
    description:
      "全国5000公里对讲，覆盖全国主流频段，实现真正的通信无界限。",
  },
  {
    image: "/images/talkback/feature_two.png",
    title: "兼容多设备接入",
    description:
      "支持多种对讲终端设备接入，包括PC、执法记录仪、数字对讲机、智能胸牌等，打破设备壁垒，高效沟通。",
  },
  {
    image: "/images/talkback/feature_three.png",
    title: "北斗/GPS高精定位",
    description:
      "北斗/GPS高精度定位系统，覆盖范围更广，稳定性更强，支持实时位置查看、轨迹回放。",
  },
  {
    image: "/images/talkback/feature_four.png",
    title: "电子围栏，实时掌控",
    description:
      "基于北斗GPS定位，划定虚拟边界来监控和管理特定区域，提高安全性和控制能力。",
  },
];

export function TalkbackFeatures() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="talkback-features-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 标题 */}
        <motion.h2
          id="talkback-features-title"
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
          距离远、设备广、定位准、管得住
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
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 p-6">
                <ImageWithFallback
                  src={f.image}
                  alt={f.title}
                  className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
                  fallback={
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-400">
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
