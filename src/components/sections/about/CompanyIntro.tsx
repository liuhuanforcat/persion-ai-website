"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  defaultViewport,
  fadeInUpVariants,
} from "@/lib/motion-variants";

const highlights = [
  { label: "成立年份", value: "2021", suffix: "年" },
  { label: "服务领域", value: "5+", suffix: "个" },
  { label: "团队规模", value: "100+", suffix: "人" },
  { label: "产品覆盖", value: "全栈", suffix: "" },
];

export function CompanyIntro() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-6 text-center text-3xl font-bold text-gray-900 md:text-4xl"
        >
          全能数字是什么？
        </motion.h2>

        <motion.div
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mx-auto max-w-4xl"
        >
          <p className="text-center text-base leading-relaxed text-gray-600 md:text-lg">
            杭州全能数字科技有限公司成立于 2021 年，是实时音视频通讯应用的引领者。
            我们以"做混合工作时代的开拓者，让美好沟通连接世界"为使命，致力于为客户提供
            从 PaaS 到 SaaS 再到硬件的全栈解决方案。业务覆盖政府、商业、金融、教育、医疗等多个领域，
            帮助各行各业实现高效、稳定、安全的实时音视频通讯。
          </p>
        </motion.div>

        {/* 关键数字 */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center rounded-2xl bg-gray-50 px-6 py-8 transition-shadow hover:shadow-md"
            >
              <span className="text-3xl font-bold text-gray-900 md:text-4xl">
                {item.value}
                <span className="ml-0.5 text-lg font-medium text-gray-500">
                  {item.suffix}
                </span>
              </span>
              <span className="mt-2 text-sm text-gray-500">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
