"use client";

import { motion } from "framer-motion";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

type SubSection = {
  title: string;
  image: string;
  imageAlt: string;
  imageRight: boolean;
  points: { icon?: string; text: string }[];
  description: string;
};

const sections: SubSection[] = [
  {
    title: "超低延时，你我零距离",
    image: "/images/low-delayed.png",
    imageAlt: "低延时远程协同示意",
    imageRight: false,
    points: [
      { text: "超低延时" },
      { text: "稳定可靠" },
      { text: "适合远程协同" },
    ],
    description:
      "采用领先的编解码与传输技术，显著降低端到端延时，让远程会议、在线协作如同面对面。稳定抗弱网，保障沟通不中断。",
  },
  {
    title: "内外兼修，别具匠心",
    image: "/images/resolution-main.png",
    imageAlt: "8K 画质与终端工艺",
    imageRight: true,
    points: [
      { text: "8K 画质" },
      { text: "出色音质" },
      { text: "智能终端" },
    ],
    description:
      "深色背景下的硬件与工艺：8K 超高清、专业级音质、多形态终端与智能体验，在品质与细节上满足严苛场景。",
  },
  {
    title: "智始智中，想你所想",
    image: "/images/wisdom.png",
    imageAlt: "多端与智能能力",
    imageRight: false,
    points: [
      { text: "手机 / 电视 / 电脑 / 白板 / 云" },
      { text: "智能画质" },
      { text: "自动取景与降噪" },
    ],
    description:
      "多端覆盖、统一体验；智能画质增强、自动取景、降噪等能力贯穿始终，让产品好用、智能，真正想你所想。",
  },
];

function SubSectionBlock({ section, index }: { section: SubSection; index: number }) {
  const isDark = index === 1;
  const content = (
    <div className="flex flex-1 flex-col justify-center">
      <h3 className={`text-2xl font-semibold md:text-3xl ${isDark ? "text-white" : "text-gray-900"}`}>
        {section.title}
      </h3>
      <ul className="mt-4 space-y-2">
        {section.points.map((p, i) => (
          <li
            key={i}
            className={`flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            {p.icon && <img src={p.icon} alt="" className="h-5 w-5" />}
            <span>{p.text}</span>
          </li>
        ))}
      </ul>
      <p className={`mt-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{section.description}</p>
    </div>
  );

  const media = (
    <div className="flex-1">
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-150">
        <ImageWithFallback
          src={section.image}
          alt={section.imageAlt}
          className="h-full w-full object-cover"
          fallback={
            <div className="flex h-full w-full items-center justify-center bg-gray-300 text-gray-500">
              图/视频占位
            </div>
          }
        />
      </div>
    </div>
  );

  return (
    <motion.div
      className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${section.imageRight ? "md:flex-row-reverse" : ""
        }`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85 }}
    >
      {section.imageRight ? (
        <>
          {content}
          {media}
        </>
      ) : (
        <>
          {media}
          {content}
        </>
      )}
    </motion.div>
  );
}

function SubSectionWrapper({
  section,
  index,
  children,
}: {
  section: SubSection;
  index: number;
  children: React.ReactNode;
}) {
  const isDark = index === 1; // 内外兼修：深色背景
  if (isDark) {
    return (
      <div className="bg-gray-900 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">{children}</div>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">{children}</div>
  );
}

export function ProductCapabilities() {
  return (
    <section className="bg-gray-50 py-16 md:py-24" aria-labelledby="product-capabilities-title">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          id="product-capabilities-title"
          className="text-center text-3xl font-semibold text-gray-900 md:text-4xl"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85 }}
        >
          为什么选我们
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-gray-600"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, delay: 0.15 }}
        >
          能力与场景结合，用产品说话
        </motion.p>
      </div>
      <div className="mt-12 divide-y divide-gray-150">
        {sections.map((sec, i) => (
          <SubSectionWrapper key={i} section={sec} index={i}>
            <SubSectionBlock section={sec} index={i} />
          </SubSectionWrapper>
        ))}
      </div>
    </section>
  );
}
