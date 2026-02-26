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

export function TalkbackDataSecurity() {
  return (
    <section
      className="bg-gray-50 py-16 md:py-24"
      aria-labelledby="talkback-security-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 区块标题 */}
        <motion.h2
          id="talkback-security-title"
          className="text-center text-3xl font-semibold text-gray-900 md:text-4xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          本地＋云端双重备份
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-3xl text-center text-gray-600 leading-relaxed"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          结合本地存储与云端备份技术，实现数据的双重保护。即使设备出现故障，数据也能快速从云端恢复，确保信息安全与业务连续性，为关键数据提供可靠保障。
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
            {/* <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-lg md:p-6"> */}
            <ImageWithFallback
              src="/images/talkback/capabilities.png"
              alt="本地＋云端双重备份架构示意图"
              className="w-full rounded-lg object-contain"
              fallback={
                <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gradient-to-br from-emerald-50 to-teal-100 text-gray-500 md:h-80">
                  <div className="text-center">
                    <p className="text-lg font-medium">双重备份架构示意图</p>
                    <p className="mt-2 text-sm text-gray-400">
                      本地存储 + 云端备份
                    </p>
                  </div>
                </div>
              }
            />
            {/* </div> */}
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
                  icon: "💾",
                  title: "本地存储",
                  desc: "数据实时写入终端本地，保证离线场景下信息不丢失。",
                },
                {
                  icon: "☁️",
                  title: "云端备份",
                  desc: "自动同步至云端，支持随时回溯与恢复，保障业务连续性。",
                },
                {
                  icon: "🔒",
                  title: "加密传输",
                  desc: "全链路加密传输，防止数据在传输过程中被窃取或篡改。",
                },
                {
                  icon: "⚡",
                  title: "快速恢复",
                  desc: "设备故障时可从云端一键恢复，最大程度减少数据损失。",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-xl">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
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
