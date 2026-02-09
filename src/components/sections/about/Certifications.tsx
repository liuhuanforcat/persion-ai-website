"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  defaultViewport,
} from "@/lib/motion-variants";

interface Certification {
  name: string;
  icon: string;
}

const certifications: Certification[] = [
  { name: "ISO 9000", icon: "🏅" },
  { name: "ISO 14000", icon: "🌿" },
  { name: "ISO 45000", icon: "🛡️" },
  { name: "ISO 27000", icon: "🔒" },
  { name: "ISO 28000", icon: "📦" },
  { name: "ISO 20000", icon: "⚙️" },
  { name: "CCC 证书", icon: "✅" },
  { name: "专利证书", icon: "📜" },
  { name: "知识产权", icon: "💡" },
  { name: "鲲鹏技术认证", icon: "🦅" },
  { name: "CMMI 3 级", icon: "📊" },
  { name: "国家高新企业", icon: "🏢" },
  { name: "科技型中小企业", icon: "🔬" },
  { name: "网络安全等保三级", icon: "🔐" },
];

// 复制一份用于无缝滚动
const doubledCertifications = [...certifications, ...certifications];

export function Certifications() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl"
        >
          我们获得的权威认证
        </motion.h2>
        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mx-auto mb-14 max-w-2xl text-center text-base text-gray-500"
        >
          多项资质认证，彰显技术实力与合规品质
        </motion.p>
      </div>

      {/* 无缝滚动区域 */}
      <div className="relative overflow-hidden">
        {/* 左右渐变遮罩 */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

        <div className="animate-marquee flex w-max gap-6 py-2 hover:[animation-play-state:paused]">
          {doubledCertifications.map((cert, index) => (
            <div
              key={`${cert.name}-${index}`}
              className="flex w-[180px] shrink-0 flex-col items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-5 py-6 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md"
            >
              <span className="text-3xl">{cert.icon}</span>
              <span className="text-center text-sm font-medium text-gray-700">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
