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
  badge: string;
};

const products: Product[] = [
  {
    image: "/images/talkback/product_one.png",
    name: "智能视频胸牌",
    tagline:
      "可佩带式记录仪，4G/Wi-Fi+BT，本地音视频记录+全国视频直播，无功耗信息展示，不限距离对讲",
    badge: "服务人员",
  },
  {
    image: "/images/talkback/product_two.png",
    name: "智能音视频记录仪",
    tagline:
      "可发起/接入音视频会议，群组对讲与广播，快速调度，多群组协同",
    badge: "执法巡检",
  },
  {
    image: "/images/talkback/product_three.png",
    name: "公网对讲机",
    tagline:
      "基于广域网络，跨越地域高质量通话，多用户组同时通话，突破距离限制",
    badge: "通用对讲",
  },
];

export function TalkbackProducts() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="talkback-products-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 标题 */}
        <motion.h2
          id="talkback-products-title"
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
          三款专业终端设备，覆盖服务人员、执法巡检与通用对讲场景
        </motion.p>

        {/* 产品卡片 */}
        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
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
              <div className="relative flex h-56 items-center justify-center bg-gray-50 p-6">
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
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                  }
                />
                {/* 适用标签 */}
                <span className="absolute top-3 right-3 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-medium text-white">
                  {p.badge}
                </span>
              </div>

              {/* 产品信息 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {p.name}
                </h3>
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
