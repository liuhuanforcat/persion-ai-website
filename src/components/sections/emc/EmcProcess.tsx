"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  defaultViewport,
  EASE,
} from "@/lib/motion-variants";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

type Step = {
  image: string;
  step: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    image: "/images/emc/feature_one.png",
    step: "01",
    title: "事件接报",
    description:
      "多源接入，在线值守：巡逻上报、群众反馈、AI发现、部门推送等多来源突发事件统一接入与值守。",
  },
  {
    image: "/images/emc/feature_two.png",
    step: "02",
    title: "协同会商",
    description:
      "跨部门多终端在线会商：建立融合通信支撑平台，打通上下级和横向部门通讯桥梁，融合接入多通讯终端实现协同会商。",
  },
  {
    image: "/images/emc/feature_three.png",
    step: "03",
    title: "指挥一线",
    description:
      "指令快速上传下达：指挥中心下达指令，一线队员借助单兵/对讲/执法仪接收指令并将现场情况通过音视频+文字实时回传。",
  },
  {
    image: "/images/emc/feature_four.png",
    step: "04",
    title: "总结回溯",
    description:
      "突发事件处置全过程归档：以时间轴方式记录接报→处置→结束全过程指令，关联人/物/组织等调度数据，辅助事后总结评估。",
  },
];

export function EmcProcess() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="emc-process-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 标题 */}
        <motion.h2
          id="emc-process-title"
          className="text-center text-3xl font-semibold text-gray-900 md:text-4xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          处置流程
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-gray-600"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          从接报到回溯，每一步都有平台支撑的全流程闭环
        </motion.p>

        {/* 流程步骤 */}
        <div className="relative mt-16">
          {/* 连接线 — 桌面端 */}
          <div className="pointer-events-none absolute top-24 right-0 left-0 hidden lg:block">
            <div className="mx-auto h-0.5 max-w-5xl bg-gradient-to-r from-orange-200 via-amber-300 to-red-200" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="group relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.75,
                  delay: i * 0.18,
                  ease: EASE.out,
                }}
              >
                {/* 步骤编号圆 */}
                <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-lg font-bold text-white shadow-lg shadow-orange-500/25">
                  {s.step}
                </div>

                {/* 卡片 */}
                <div className="w-full overflow-hidden rounded-xl bg-gray-50 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                  {/* 图标区域 */}
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 p-5">
                    <ImageWithFallback
                      src={s.image}
                      alt={s.title}
                      className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
                      fallback={
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-2xl text-orange-400">
                          ✦
                        </div>
                      }
                    />
                  </div>

                  {/* 文本 */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {s.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
