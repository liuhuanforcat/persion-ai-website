"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  cardContainerVariants,
  cardVariants,
  defaultViewport,
} from "@/lib/motion-variants";

type SceneCard = {
  image: string;
  icon: string;
  label: string;
  description: string;
};

const defaultCards: SceneCard[] = [
  {
    image: "/images/scene-gov.jpg",
    icon: "🏛️",
    label: "政务办公",
    description: "安全可控的政务通信解决方案，支持跨部门协同与加密通话，保障信息安全。",
  },
  {
    image: "/images/scene-enterprise.jpg",
    icon: "🏢",
    label: "企业协作",
    description: "一体化融合通信平台，整合即时消息、视频会议、云盘共享，提升团队效率。",
  },
  {
    image: "/images/scene-emergency.jpg",
    icon: "🚨",
    label: "应急指挥",
    description: "多级联动指挥调度系统，实时音视频联通，快速响应突发事件。",
  },
];

export function SceneCards({
  title = "以融合通信技术，连接每一个关键场景",
  cards = defaultCards,
}: {
  title?: string;
  cards?: SceneCard[];
}) {
  return (
    <section className="bg-[var(--color-surface)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-4 text-center text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mx-auto mb-14 max-w-2xl text-center text-base text-[var(--color-text-muted)]"
        >
          覆盖多行业、多场景的通信需求，让协作无边界
        </motion.p>

        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card, i) => (
            <motion.article
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="flex h-full items-center justify-center text-6xl opacity-30 transition-transform duration-500 group-hover:scale-110">
                  {card.icon}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="text-2xl">{card.icon}</span>
                  <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                    {card.label}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
