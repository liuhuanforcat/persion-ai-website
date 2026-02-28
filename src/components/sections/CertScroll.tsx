"use client";

import { motion } from "framer-motion";
import { headingVariants, defaultViewport } from "@/lib/motion-variants";

interface CertItem {
  name: string;
  icon: string;
}

const certifications: CertItem[] = [
  { name: "ISO 9001 质量管理", icon: "🏅" },
  { name: "ISO 27001 信息安全", icon: "🔐" },
  { name: "ISO 14001 环境管理", icon: "🌿" },
  { name: "CMMI L3 认证", icon: "📋" },
  { name: "国家高新技术企业", icon: "🏆" },
  { name: "软件著作权 (100+)", icon: "📜" },
  { name: "发明专利 (50+)", icon: "💡" },
  { name: "公安部检测报告", icon: "🛡️" },
  { name: "等保三级认证", icon: "🔒" },
  { name: "IP67 防护认证", icon: "💧" },
  { name: "CCC 强制认证", icon: "✅" },
  { name: "无线电型号核准", icon: "📡" },
  { name: "军工保密资质", icon: "⭐" },
  { name: "入网许可证", icon: "🌐" },
];

const duplicated = [...certifications, ...certifications];

export function CertScroll() {
  return (
    <section className="bg-gradient-to-b from-[#e8edf3] to-[#f0f4f8] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-14 text-center text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
        >
          资质与认证
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#eaeff5] to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#eaeff5] to-transparent md:w-32" />

        {/* Scrolling row */}
        <div className="marquee-container flex w-max gap-5 py-4">
          {duplicated.map((cert, i) => (
            <div
              key={`${cert.name}-${i}`}
              className="flex w-[200px] flex-shrink-0 flex-col items-center gap-3 rounded-xl bg-white px-5 py-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {cert.icon}
              </span>
              <span className="text-center text-sm font-medium text-[var(--color-text)]">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
