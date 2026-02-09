"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  defaultViewport,
} from "@/lib/motion-variants";

interface Certification {
  name: string;
  /** 图片路径 */
  image: string;
}

const certifications: Certification[] = [
  { name: "ISO 9000", image: "/images/iso.png" },
  { name: "ISO 14000", image: "/images/iso.png" },
  { name: "ISO 45000", image: "/images/iso.png" },
  { name: "ISO 27000", image: "/images/iso.png" },
  { name: "ISO 28000", image: "/images/iso.png" },
  { name: "ISO 20000", image: "/images/iso.png" },
  { name: "CCC 证书", image: "/images/3c.png" },
  { name: "专利证书", image: "/images/patent.png" },
  { name: "知识产权", image: "/images/intellectual.png" },
  { name: "鲲鹏技术认证", image: "/images/kunpeng.png" },
  { name: "CMMI 3 级", image: "/images/cmmi.png" },
  { name: "国家高新企业", image: "/images/gaoxin_qiye.png" },
  { name: "科技型中小企业", image: "/images/gaoxin_qiye.png" },
  { name: "网络安全等保三级", image: "/images/db-3.png" },
];

// 复制一份用于无缝滚动
const doubledCertifications = [...certifications, ...certifications];

export function Certifications() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* 背景装饰 */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/certificate-bg.png')" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
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
              className="flex w-[180px] shrink-0 flex-col items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="h-full w-full object-contain"
                />
              </div>
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
