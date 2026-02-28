"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  cardContainerVariants,
  cardVariants,
  defaultViewport,
  headingVariants,
  paragraphVariants,
} from "@/lib/motion-variants";

const platformFeatures = [
  {
    icon: "🎯",
    title: "统一指挥，一键调度",
    description:
      "一套系统一个操作台，跨部门音视频资源一键调度，显著提升协同处置效率。",
  },
  {
    icon: "🔗",
    title: "全融合通信能力",
    description:
      "解决异构终端互联互通难题，满足“末端通达”的实战需求，实现全链路联动。",
  },
  {
    icon: "🧭",
    title: "多场景适配",
    description:
      "覆盖日常值班办公与战时协同指挥双模式，灵活适配多层级、多类型调度场景。",
  },
  {
    icon: "🧩",
    title: "无缝衔接，灵活拓展",
    description:
      "提供完善的二次开发接口，支持业务系统与音视频系统快速集成与持续演进。",
  },
];

const scenarioItems = [
  {
    name: "公安",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "消防",
    image:
      "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "应急",
    image:
      "https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "医疗",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  },
];

export function FusionPlatformPage() {
  const bannerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start start", "end start"],
  });

  const bannerScale = useTransform(scrollYProgress, [0, 0.85], [0.92, 1]);
  const bannerOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    function setRem() {
      const w = window.innerWidth;
      const minW = 1440;
      const maxW = 1920;
      const minFs = 16;
      const maxFs = (maxW / minW) * minFs;

      let fs = minFs;
      if (w <= minW) {
        fs = minFs;
      } else if (w >= maxW) {
        fs = maxFs;
      } else {
        fs = minFs + ((w - minW) / (maxW - minW)) * (maxFs - minFs);
      }

      document.documentElement.style.fontSize = `${fs}px`;
    }

    setRem();
    window.addEventListener("resize", setRem);

    return () => {
      window.removeEventListener("resize", setRem);
      document.documentElement.style.fontSize = "";
    };
  }, []);

  return (
    <>
      <section
        ref={bannerRef}
        className="relative flex min-h-[620px] items-center overflow-hidden pt-20 md:min-h-[760px]"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=80"
            alt="融合通信平台首屏背景"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#081322]/90 via-[#0b1d33]/86 to-[#0a1728]/92" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <motion.div style={{ scale: bannerScale, opacity: bannerOpacity }}>
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.16em] text-white/80 md:text-sm">
              FUSION COMMUNICATION PLATFORM
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              融合通信平台
            </h1>
            <p className="mt-6 max-w-4xl text-base leading-8 text-white/85 md:text-xl">
              会议、监控、对讲、电话多平台音视频通信深度融合，面向跨部门跨层级指挥调度场景，
              构建统一、实时、可靠的协同作战能力。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="text-center text-3xl font-semibold text-[var(--color-primary)] md:text-4xl"
          >
            平台四大特点
          </motion.h2>
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mx-auto mt-4 max-w-3xl text-center text-[var(--color-text-muted)]"
          >
            聚焦实战调度场景，打造可统一指挥、可跨域互通、可持续拓展的融合通信底座。
          </motion.p>

          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {platformFeatures.map((item) => (
              <motion.article
                key={item.title}
                variants={cardVariants}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-7"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="text-center text-3xl font-semibold text-[var(--color-primary)] md:text-4xl"
          >
            全量融合能力
          </motion.h2>
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mx-auto mt-4 max-w-4xl text-center leading-7 text-[var(--color-text-muted)]"
          >
            兼容主流通信终端和现网设备，提供完整 API / SDK 能力，
            帮助政企客户快速完成业务系统对接和音视频能力延展。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={defaultViewport}
            transition={{ duration: 0.72, ease: [0, 0, 0.2, 1] }}
            className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2200&q=80"
              alt="融合能力架构示意图"
              className="h-[280px] w-full object-cover md:h-[460px]"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="text-center text-3xl font-semibold text-[var(--color-primary)] md:text-4xl"
          >
            多端联动
          </motion.h2>
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mx-auto mt-4 max-w-4xl text-center leading-7 text-[var(--color-text-muted)]"
          >
            覆盖视频会议、视频监控、数字电话、视频对讲、物联网 IoT、数字孪生六大核心场景，
            强化上级管理部门与指挥中心协同调度能力。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={defaultViewport}
            transition={{ duration: 0.72, ease: [0, 0, 0.2, 1] }}
            className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2200&q=80"
              alt="多终端协作示意图"
              className="h-[280px] w-full object-cover md:h-[460px]"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="text-center text-3xl font-semibold text-[var(--color-primary)] md:text-4xl"
          >
            应用场景
          </motion.h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {scenarioItems.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 26, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={defaultViewport}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: [0, 0, 0.2, 1],
                }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={item.image}
                  alt={`${item.name} 场景`}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/55" />
                <h3 className="absolute bottom-5 left-5 text-2xl font-semibold tracking-wide text-white">
                  {item.name}
                </h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
