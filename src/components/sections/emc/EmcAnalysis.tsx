"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  imageSlideLeftVariants,
  fadeInUpVariants,
  defaultViewport,
  imageViewport,
} from "@/lib/motion-variants";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export function EmcAnalysis() {
  return (
    <section
      className="bg-gray-50 py-16 md:py-24"
      aria-labelledby="emc-analysis-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 标题 */}
        <motion.h2
          id="emc-analysis-title"
          className="text-center text-3xl font-semibold text-gray-900 md:text-4xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          分析研判与资源调度
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-3xl text-center text-gray-600 leading-relaxed"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          通过地图定位事发位置，一键调阅周边视频核实情况，快速评估网格力量分布，助力精准决策，实现高效分析与资源调度。
        </motion.p>

        {/* 图文区域 */}
        <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* 配图 */}
          <motion.div
            className="w-full md:w-3/5"
            variants={imageSlideLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={imageViewport}
          >
            <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-lg md:p-6">
              <ImageWithFallback
                src="/images/emc/capabilities.png"
                alt="分析研判与资源调度示意图 — 地图定位+视频调阅+力量分布"
                className="w-full rounded-lg object-contain"
                fallback={
                  <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gradient-to-br from-orange-50 to-amber-100 text-gray-500 md:h-80">
                    <div className="text-center">
                      <p className="text-lg font-medium">分析研判示意图</p>
                      <p className="mt-2 text-sm text-gray-400">
                        地图定位 + 视频调阅 + 力量分布
                      </p>
                    </div>
                  </div>
                }
              />
            </div>
          </motion.div>

          {/* 要点 */}
          <motion.div
            className="w-full md:w-2/5"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <ul className="space-y-6">
              {[
                {
                  icon: "📍",
                  title: "地图定位",
                  desc: "事发位置实时标注于地图，快速掌握事件方位与周边环境。",
                },
                {
                  icon: "📹",
                  title: "视频调阅",
                  desc: "一键调阅事发点周边监控视频，远程核实现场真实情况。",
                },
                {
                  icon: "👥",
                  title: "力量评估",
                  desc: "快速评估周边网格力量与资源分布，精准调配响应队伍。",
                },
                {
                  icon: "⚡",
                  title: "快速决策",
                  desc: "信息汇聚一屏呈现，辅助指挥官高效研判、果断决策。",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-xl">
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
        </div>
      </div>
    </section>
  );
}
