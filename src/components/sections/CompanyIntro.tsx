"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  defaultViewport,
} from "@/lib/motion-variants";

export function CompanyIntro() {
  return (
    <section className="bg-[var(--color-surface)] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <motion.p
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-6 text-xl font-semibold text-[var(--color-accent)] md:text-2xl"
        >
          我们是谁？
        </motion.p>

        <motion.div
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="space-y-6 text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg md:leading-8"
        >
          <p>
            QNSZ科技成立于 2015 年，是一家专注于融合通信领域的国家高新技术企业。
            公司秉承"连接·协作·创新"的使命，致力于为政府、企业及行业客户提供
            安全可靠、高效智能的统一通信解决方案。
          </p>
          <p>
            历经多年技术沉淀与行业深耕，公司已建立起覆盖融合通信平台、视频会议系统、
            数字对讲终端、应急指挥调度等核心产品线，服务范围涵盖政务办公、公共安全、
            能源交通、智慧城市等数十个行业领域，累计服务超过 2000 家企事业单位。
          </p>
          <p>
            公司总部位于北京，在全国多个核心城市设有研发中心与服务网点，
            研发团队占比超过 60%，拥有百余项自主知识产权与核心技术专利，
            是融合通信领域值得信赖的技术合作伙伴。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
