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

export function TalkbackAI() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="talkback-ai-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 区块标题 */}
        <motion.h2
          id="talkback-ai-title"
          className="text-center text-3xl font-semibold text-gray-900 md:text-4xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          强大AI处理能力
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-3xl text-center text-gray-600 leading-relaxed"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          集成强大的语音AI处理能力，为用户提供现场语音质检、声纹打卡和语音文本播报等智能化的语音服务，可有效协助用户加强协同管理。
        </motion.p>

        {/* 图文区域 — 图片在右 */}
        <div className="mt-12 flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
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
                  icon: "🎙️",
                  title: "语音质检",
                  desc: "AI实时分析通话质量，自动识别服务用语规范与异常情况，提升服务品质。",
                },
                {
                  icon: "🔊",
                  title: "声纹打卡",
                  desc: "基于声纹识别进行身份验证与签到打卡，安全便捷，杜绝代打卡。",
                },
                {
                  icon: "📝",
                  title: "语音文本播报",
                  desc: "文本内容自动转化为语音播报，适用于调度通知、公告下发等场景。",
                },
                {
                  icon: "🧠",
                  title: "智能降噪",
                  desc: "AI深度学习降噪算法，过滤复杂环境噪音，确保通话清晰稳定。",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xl">
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

          {/* 配图 */}
          <motion.div
            className="w-full md:w-3/5"
            variants={imageSlideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={imageViewport}
          >
            {/* <div className="overflow-hidden rounded-2xl bg-gray-50 p-4 shadow-lg md:p-6"> */}
            <ImageWithFallback
              src="/images/talkback/multi-terminal.png"
              alt="AI处理能力示意图 — 语音质检、声纹打卡、语音播报"
              className="w-full rounded-lg object-contain"
              fallback={
                <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-500 md:h-80">
                  <div className="text-center">
                    <p className="text-lg font-medium">AI能力示意图</p>
                    <p className="mt-2 text-sm text-gray-400">
                      语音质检 · 声纹打卡 · 语音播报
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
