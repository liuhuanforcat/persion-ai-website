"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  imageSlideRightVariants,
  fadeInUpVariants,
  defaultViewport,
  imageViewport,
} from "@/lib/motion-variants";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export function EmcSmartPlan() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="emc-smart-plan-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 标题 */}
        <motion.h2
          id="emc-smart-plan-title"
          className="text-center text-3xl font-semibold text-gray-900 md:text-4xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          预案智能化推荐
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-3xl text-center text-gray-600 leading-relaxed"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          根据事件类型自动关联预案，并智能推荐最优处理方案，避免人工筛选的低效与不准确，提升应急响应速度和决策准确性，确保快速、精确地应对突发事件。
        </motion.p>

        {/* 图文区域 — 图片在右 */}
        <div className="mt-12 flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
          {/* 要点 */}
          <motion.div
            className="w-full md:w-2/5"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
          >
            <ul className="space-y-6">
              {[
                {
                  icon: "🔍",
                  title: "自动关联",
                  desc: "系统根据事件类型、等级自动匹配关联预案，无需人工翻阅。",
                },
                {
                  icon: "🤖",
                  title: "智能推荐",
                  desc: "基于历史案例与规则引擎，智能推荐最优处置方案与资源配置。",
                },
                {
                  icon: "⏱️",
                  title: "快速响应",
                  desc: "从事件接报到预案推荐仅需秒级，大幅缩短决策准备时间。",
                },
                {
                  icon: "🎯",
                  title: "精准处置",
                  desc: "预案与现场数据联动，确保每一步处置操作精准到位。",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-xl">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 配图 */}
          <motion.div
            className="w-full md:w-3/5"
            variants={imageSlideRightVariants}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.25, ease: "easeOut" }}
            viewport={imageViewport}
          >
            {/* <div className="overflow-hidden rounded-2xl bg-gray-50 p-4 shadow-lg md:p-6"> */}
            <ImageWithFallback
              src="/images/emc/multi-terminal.png"
              alt="预案智能化推荐示意图 — 自动关联预案与智能方案推荐"
              className="w-full rounded-lg object-contain"

              fallback={
                <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gradient-to-br from-amber-50 to-orange-100 text-gray-500 md:h-80">
                  <div className="text-center">
                    <p className="text-lg font-medium">预案推荐界面示意图</p>
                    <p className="mt-2 text-sm text-gray-400">
                      自动关联 · 智能推荐 · 快速响应
                    </p>
                  </div>
                </div>
              }
            />
            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
