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
    image: "/images/meeting/scenarios_one.png",
    name: "高端行政会议",
    description: "政府/企业高层会议、远程视频会商，呈现专业严谨的会议体验。",
  },
  {
    image: "/images/meeting/scenarios_two.png",
    name: "协同办公会议",
    description: "日常团队协作、跨部门沟通，让远程办公高效顺畅。",
  },
  {
    image: "/images/meeting/scenarios_three.png",
    name: "大型互动会议",
    description: "大规模会议、培训、活动直播，支持海量并发与实时互动。",
  },
  {
    image: "/images/meeting/scenarios_four.png",
    name: "行业数字化",
    description: "教育、医疗、金融等行业专项场景，赋能行业数字化转型。",
  },
];

export function MeetingScenarios() {
  return (
    <section
      className="bg-gray-900 py-16 md:py-24"
      aria-labelledby="meeting-scenarios-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 标题 */}
        <motion.h2
          id="meeting-scenarios-title"
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
          覆盖从高端行政到日常办公、大型活动到行业专项的全场景会议需求
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
                      <span className="text-4xl">🎬</span>
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
              <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition-colors duration-300 group-hover:border-blue-500/30" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
