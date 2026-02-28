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
    image: "/images/talkback/scenarios_one.png",
    name: "窗口服务",
    description: "银行/政务窗口，服务过程留痕、质检，提升服务质量与合规性。",
  },
  {
    image: "/images/talkback/scenarios_two.png",
    name: "上门服务",
    description: "外勤人员上门，实时定位、现场记录，保障服务可追溯。",
  },
  {
    image: "/images/talkback/scenarios_three.png",
    name: "装维检修",
    description: "设备维修维护，远程指导、对讲协同，降低返工率。",
  },
  {
    image: "/images/talkback/scenarios_four.png",
    name: "合规检查",
    description: "执法/检查现场，录音录像、轨迹回溯，确保过程透明可查。",
  },
];

export function TalkbackScenarios() {
  return (
    <section
      className="bg-gray-900 py-16 md:py-24"
      aria-labelledby="talkback-scenarios-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 标题 */}
        <motion.h2
          id="talkback-scenarios-title"
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
          从窗口到现场，让一线团队沟通更高效、管理更精准
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
                      <span className="text-4xl">📡</span>
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
              <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition-colors duration-300 group-hover:border-emerald-500/30" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
