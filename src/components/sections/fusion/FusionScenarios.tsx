"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  cardContainerVariants,
  cardVariants,
  defaultViewport,
  imageContainerHover,
} from "@/lib/motion-variants";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

type Scenario = {
  image: string;
  name: string;
  description: string;
};

const scenarios: Scenario[] = [
  {
    image: "/images/fusion/scenario_1.png",
    name: "公安",
    description: "构建跨层级指挥体系，多警种协同联动，实时调度一线力量。",
  },
  {
    image: "/images/fusion/scenario_2.png",
    name: "消防",
    description: "灾情信息实时汇聚，远程可视化指挥，支撑高效灭火救援。",
  },
  {
    image: "/images/fusion/scenario_3.png",
    name: "应急",
    description: "融合多方通信资源，统一调度指挥，快速响应各类突发事件。",
  },
  {
    image: "/images/fusion/scenario_4.png",
    name: "医疗",
    description: "远程会诊与调度协同，打通院前院内通信壁垒，争分夺秒挽救生命。",
  },
];

export function FusionScenarios() {
  return (
    <section
      className="bg-gray-900 py-16 md:py-24"
      aria-labelledby="fusion-scenarios-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 标题 */}
        <motion.h2
          id="fusion-scenarios-title"
          className="text-center text-3xl font-semibold text-white md:text-4xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          应用场景
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-gray-400"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          深耕行业场景，为每个领域提供专属通信解决方案
        </motion.p>

        {/* 场景卡片 */}
        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {scenarios.map((s, i) => (
            <motion.article
              key={i}
              className="group relative overflow-hidden rounded-xl bg-gray-800 transition-shadow duration-300 hover:shadow-xl"
              variants={cardVariants}
            >
              {/* 场景图 */}
              <motion.div
                className="aspect-[4/3] w-full overflow-hidden"
                whileHover={imageContainerHover}
              >
                <ImageWithFallback
                  src={s.image}
                  alt={`${s.name}场景`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallback={
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800 text-gray-500">
                      <span className="text-4xl">🏛️</span>
                    </div>
                  }
                />
              </motion.div>

              {/* 底部信息 */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {s.description}
                </p>
              </div>

              {/* 悬停高亮边框 */}
              <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition-colors duration-300 group-hover:border-blue-500/30" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
