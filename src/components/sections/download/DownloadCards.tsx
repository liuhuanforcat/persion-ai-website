"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  cardContainerVariants,
  cardVariants,
  defaultViewport,
  fadeInUpVariants,
  SPRING,
  DURATION,
  EASE,
} from "@/lib/motion-variants";
import { useDeviceType, type DeviceType } from "@/hooks/useDeviceType";

/* ------------------------------------------------------------------ */
/* 平台数据                                                            */
/* ------------------------------------------------------------------ */

interface Platform {
  id: string;
  name: string;
  /** 点击跳转（桌面端 hover 面板） */
  downloadUrl?: string;
  /** 手机端直接下载链接 */
  mobileDownloadUrl?: string;
  /** 二维码图片路径（桌面端展示） */
  qrCode?: string;
  version: string;
  updatedAt: string;
  /** hover 提示文案 */
  hoverText: string;
  /** 手机端按钮文案 */
  mobileButtonText?: string;
  /** 平台插画图片路径 */
  image: string;
}

const platforms: Platform[] = [
  {
    id: "macos",
    name: "macOS",
    downloadUrl: "https://apps.apple.com/cn/app/id6480379498",
    version: "v2.6.0",
    updatedAt: "2025-01-15",
    hoverText: "前往 App Store 下载",
    image: "/images/mac.png",
  },
  {
    id: "windows",
    name: "Windows",
    downloadUrl: "https://api.onlineinline.com/download/windows",
    version: "v2.6.0",
    updatedAt: "2025-01-15",
    hoverText: "点击下载安装包",
    image: "/images/win.png",
  },
  {
    id: "ios",
    name: "iOS",
    qrCode: "/images/ios-download-qrcode.png",
    mobileDownloadUrl: "https://apps.apple.com/cn/app/id6480379498",
    mobileButtonText: "前往 App Store 下载",
    version: "v2.6.0",
    updatedAt: "2025-01-15",
    hoverText: "扫码下载",
    image: "/images/ios.png",
  },
  {
    id: "android",
    name: "Android",
    qrCode: "/images/android-download-qrcode.png",
    mobileDownloadUrl: "https://api.onlineinline.com/download/android",
    mobileButtonText: "下载安卓版",
    version: "v2.6.0",
    updatedAt: "2025-01-15",
    hoverText: "扫码下载",
    image: "/images/android.png",
  },
];

/** 根据设备类型获取对应移动端平台 */
function getMobilePlatform(device: DeviceType): Platform | null {
  if (device === "android") return platforms.find((p) => p.id === "android") ?? null;
  if (device === "ios") return platforms.find((p) => p.id === "ios") ?? null;
  return null;
}

/* ------------------------------------------------------------------ */
/* 移动端下载按钮（仅显示当前设备平台）                                       */
/* ------------------------------------------------------------------ */

function MobileDownloadView({ platform }: { platform: Platform }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariants}
      className="flex flex-col items-center gap-6"
    >
      {/* 平台图标 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: DURATION.medium, ease: EASE.out }}
        className="flex h-28 w-28 items-center justify-center"
      >
        <img
          src={platform.image}
          alt={`${platform.name} 图标`}
          className="h-full w-full object-contain"
        />
      </motion.div>

      {/* 平台信息 */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900">
          {platform.name} 版
        </h3>
        <p className="mt-1.5 text-sm text-gray-400">
          {platform.version} · {platform.updatedAt}
        </p>
      </div>

      {/* 下载按钮 */}
      <motion.a
        href={platform.mobileDownloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.97 }}
        className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-base font-medium text-white shadow-lg transition-colors active:bg-gray-800"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
        {platform.mobileButtonText}
      </motion.a>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* 桌面端卡片                                                          */
/* ------------------------------------------------------------------ */

function PlatformCard({ platform }: { platform: Platform }) {
  const [active, setActive] = useState(false);
  const hasDirectLink = !!platform.downloadUrl;

  const cardContent = (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={SPRING.snappy}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => {
        if (!hasDirectLink) setActive((o) => !o);
      }}
      className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-gray-100 bg-white px-6 py-10 shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="mb-5 flex h-24 w-24 items-center justify-center">
        <img
          src={platform.image}
          alt={`${platform.name} 图标`}
          className="h-full w-full object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{platform.name}</h3>

      <p className="mt-1.5 text-xs text-gray-400">
        {platform.version} · {platform.updatedAt}
      </p>

      {/* hover/tap 悬浮层 */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white backdrop-blur-sm transition-opacity duration-300 ${
          active ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {hasDirectLink ? (
          <>
            <img
              src="/images/dowload-main.png"
              alt="下载"
              className="h-16 w-16"
            />
            <span className="text-sm font-medium">{platform.hoverText}</span>
          </>
        ) : (
          <>
            <div className="flex h-28 w-28 items-center justify-center rounded-xl bg-white p-1.5">
              <img
                src={platform.qrCode!}
                alt={`${platform.name} 下载二维码`}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-sm font-medium">{platform.hoverText}</span>
          </>
        )}
      </div>
    </motion.div>
  );

  if (hasDirectLink && platform.downloadUrl) {
    return (
      <a
        href={platform.downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`下载 ${platform.name} 版本`}
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

/* ------------------------------------------------------------------ */
/* 主组件                                                              */
/* ------------------------------------------------------------------ */

export function DownloadCards() {
  const device = useDeviceType();
  const mobilePlatform = getMobilePlatform(device);

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {mobilePlatform ? (
          /* 移动端：仅显示当前设备对应平台的下载按钮 */
          <MobileDownloadView platform={mobilePlatform} />
        ) : (
          /* 桌面端：四宫格卡片 */
          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {platforms.map((p) => (
              <PlatformCard key={p.id} platform={p} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
