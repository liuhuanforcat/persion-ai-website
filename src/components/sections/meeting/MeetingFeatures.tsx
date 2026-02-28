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
    image: "/images/meeting/feature_one.png",
    title: "灵活的业务媒体平台",
    description:
      "支持SFU/MCU模式自适应，提供全球化私有化部署，保障超低延迟和多重安全，确保会议稳定流畅。",
  },
  {
    image: "/images/meeting/feature_two.png",
    title: "多端适配，高效协作",
    description:
      "提供Windows、Mac、Android、iOS、Web等原生APP，兼容国产系统，提供协同白板、远程共享、无线投屏等功能，提升协作效率。",
  },
  {
    image: "/images/meeting/feature_three.png",
    title: "标准协议全方位支持",
    description:
      "支持SIP、H.323、监控、传统VoIP、PSTN固话及第三方终端接入，全面兼容主流视频会议设备与平台。",
  },
  {
    image: "/images/meeting/feature_four.png",
    title: "一体化安全防护",
    description:
      "端到端全链路加密（SRTP AES256、DTLS动态协商），支持私有化部署，会议数据本地存储，物理上确保数据安全。",
  },
];

export function MeetingFeatures() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="meeting-features-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 标题 */}
        <motion.h2
          id="meeting-features-title"
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
          灵活部署、全端覆盖、广泛兼容、安全可靠
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
