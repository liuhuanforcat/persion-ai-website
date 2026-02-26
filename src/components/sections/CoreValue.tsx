"use client";

import { motion } from "framer-motion";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

type Card = {
  image: string;
  icon?: string;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    image: "/images/communicate.png",
    icon: "/images/mic.png",
    title: "沟通",
    description: "解决远程沟通不畅、信息不同步的痛点，让团队无论分散何处都能高效协作、随时连接。",
  },
  {
    image: "/images/education.png",
    icon: "/images/book.png",
    title: "教育",
    description: "打破地域与设备限制，让优质内容触达更多学员，实现互动课堂与远程培训的顺畅体验。",
  },
  {
    image: "/images/amusement.png",
    icon: "/images/game-handle.png",
    title: "娱乐",
    description: "低延时、高画质与多端协同，为直播、互动娱乐等场景带来沉浸式与稳定可靠的表现。",
  },
];

export function CoreValue() {
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="core-value-title">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          id="core-value-title"
          className="text-center text-3xl font-semibold text-gray-900 md:text-4xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85 }}
        >
          用科技的力量，打破空间的界限
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-gray-600"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, delay: 0.15 }}
        >
          我们不只是做会议与音视频，而是支撑沟通、教育、娱乐等多场景，让远距离协作与创造成为可能。
        </motion.p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.article
              key={i}
              className="overflow-hidden rounded-xl bg-gray-50 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, delay: i * 0.18 }}
              whileHover={{ y: -10 }}
            >
              <div className="aspect-[16/10] w-full bg-gray-200">
                <ImageWithFallback
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                  fallback={
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 text-sm text-gray-600">
                      场景图占位
                    </div>
                  }
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  {card.icon && (
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center">
                      <ImageWithFallback
                        src={card.icon}
                        alt=""
                        className="h-8 w-8 object-contain"
                        fallback={null}
                      />
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                </div>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
