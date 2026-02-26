"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  cardContainerVariants,
  cardVariants,
  defaultViewport,
} from "@/lib/motion-variants";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

type Scenario = {
  image: string;
  name: string;
  description: string;
  accent: string;
};

const scenarios: Scenario[] = [
  {
    image: "/images/meeting/scenarios_one.png",
    name: "高端行政会议",
    description: "政府/企业高层会议、远程视频会商，呈现专业严谨的会议体验。",
    accent: "from-blue-500/80 to-blue-600/80",
  },
  {
    image: "/images/meeting/scenarios_two.png",
    name: "协同办公会议",
    description: "日常团队协作、跨部门沟通，让远程办公高效顺畅。",
    accent: "from-indigo-500/80 to-indigo-600/80",
  },
  {
    image: "/images/meeting/scenarios_three.png",
    name: "大型互动会议",
    description: "大规模会议、培训、活动直播，支持海量并发与实时互动。",
    accent: "from-violet-500/80 to-violet-600/80",
  },
  {
    image: "/images/meeting/scenarios_four.png",
    name: "行业数字化",
    description: "教育、医疗、金融等行业专项场景，赋能行业数字化转型。",
    accent: "from-cyan-500/80 to-cyan-600/80",
  },
];

export function MeetingScenarios() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="meeting-scenarios-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          id="meeting-scenarios-title"
          className="text-center text-3xl font-semibold text-gray-900 md:text-4xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          应用场景
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-gray-500"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          覆盖从高端行政到日常办公、大型活动到行业专项的全场景会议需求
        </motion.p>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {scenarios.map((s, i) => (
            <motion.article
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50 hover:ring-gray-300/60"
              variants={cardVariants}
            >
              {/* 场景图 + 悬停遮罩 */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <ImageWithFallback
                  src={s.image}
                  alt={`${s.name}场景`}
                  className="h-full w-full object-cover"
                  fallback={
                    <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
                      <span className="text-4xl">🎬</span>
                    </div>
                  }
                />
              </div>

              {/* 底部信息 */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-gray-900">
                  {s.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                  {s.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
