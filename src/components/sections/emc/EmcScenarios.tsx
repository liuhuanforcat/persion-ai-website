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
    image: "/images/emc/scenarios_one.png",
    name: "消防",
    description: "火灾事故指挥调度、现场视频回传，保障救援高效有序。",
  },
  {
    image: "/images/emc/scenarios_two.png",
    name: "抗洪",
    description: "汛情监控、人员疏散调度，多部门协同快速响应。",
  },
  {
    image: "/images/emc/scenarios_three.png",
    name: "救援",
    description: "突发灾害救援、多部门协同，全流程可视化指挥调度。",
  },
  {
    image: "/images/emc/scenarios_four.png",
    name: "交通事故",
    description: "事故现场可视化、快速处置调度，减少二次伤害风险。",
  },
];

export function EmcScenarios() {
  return (
    <section
      className="bg-gray-900 py-16 md:py-24"
      aria-labelledby="emc-scenarios-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 标题 */}
        <motion.h2
          id="emc-scenarios-title"
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
          覆盖"急、重、危"典型场合，强调平台的实战指挥价值
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
                      <span className="text-4xl">🚨</span>
                    </div>
                  }
                />
              </motion.div>

              {/* 底部信息 */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {s.description}
                </p>
              </div>

              {/* 悬停高亮边框 */}
              <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition-colors duration-300 group-hover:border-orange-500/30" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
