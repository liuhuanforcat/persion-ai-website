"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  fadeInUpVariants,
  imageSlideRightVariants,
  iconGroupContainerVariants,
  iconVariants,
  defaultViewport,
} from "@/lib/motion-variants";

const craftFeatures = [
  { icon: "🎯", label: "极简设计" },
  { icon: "🔧", label: "模块化架构" },
  { icon: "🛡️", label: "军工级品质" },
  { icon: "♻️", label: "绿色环保" },
];

export function Craftsmanship() {
  return (
    <section className="bg-[var(--color-surface-dark)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-14 text-center text-3xl font-bold text-white md:text-4xl"
        >
          匠心工艺，铸就卓越品质
        </motion.h2>

        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
          {/* Left: Icons + Text */}
          <div className="w-full md:w-1/2">
            <motion.div
              variants={iconGroupContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="mb-8 grid grid-cols-2 gap-4"
            >
              {craftFeatures.map((f) => (
                <motion.div
                  key={f.label}
                  variants={iconVariants}
                  className="flex items-center gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xl">
                    {f.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-200">
                    {f.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <p className="text-base leading-relaxed text-gray-400">
                从芯片选型到外观设计，每一个细节都经过精心打磨。采用航空级铝合金机身，
                CNC一体成型工艺，通过 IP67 防护等级认证。模块化硬件设计支持灵活扩展，
                满足不同场景的定制需求。
              </p>
            </motion.div>
          </div>

          {/* Right: Product Image */}
          <motion.div
            variants={imageSlideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="h-40 w-64 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-700 shadow-xl md:h-52 md:w-80" />
                  <div className="absolute -bottom-3 -right-3 h-8 w-32 rounded-full bg-[var(--color-accent)]/20 blur-xl md:h-10 md:w-40" />
                </div>
              </div>
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
