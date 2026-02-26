"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  cardContainerVariants,
  cardVariants,
  defaultViewport,
  SPRING,
} from "@/lib/motion-variants";

/* ------------------------------------------------------------------ */
/* 平台数据                                                            */
/* ------------------------------------------------------------------ */

interface Platform {
  id: string;
  name: string;
  /** 点击跳转（桌面端） */
  downloadUrl?: string;
  /** 二维码图片路径（移动端） */
  qrCode?: string;
  version: string;
  updatedAt: string;
  /** hover 提示文案 */
  hoverText: string;
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
    version: "v2.6.0",
    updatedAt: "2025-01-15",
    hoverText: "扫码下载",
    image: "/images/ios.png",
  },
  {
    id: "android",
    name: "Android",
    qrCode: "/images/android-download-qrcode.png",
    version: "v2.6.0",
    updatedAt: "2025-01-15",
    hoverText: "扫码下载",
    image: "/images/android.png",
  },
];

/* ------------------------------------------------------------------ */
/* 卡片子组件                                                          */
/* ------------------------------------------------------------------ */

function PlatformCard({ platform }: { platform: Platform }) {
  const [active, setActive] = useState(false);
  const isDesktop = !!platform.downloadUrl;

  const cardContent = (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={SPRING.snappy}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => { if (!isDesktop) setActive((o) => !o); }}
      className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-gray-100 bg-white px-6 py-10 shadow-sm transition-shadow hover:shadow-xl"
    >
      {/* 平台插画图标 */}
      <div className="mb-5 flex h-24 w-24 items-center justify-center">
        <img
          src={platform.image}
          alt={`${platform.name} 图标`}
          className="h-full w-full object-contain"
        />
      </div>

      {/* 平台名称 */}
      <h3 className="text-lg font-semibold text-gray-900">{platform.name}</h3>

      {/* 版本 & 更新日期 */}
      <p className="mt-1.5 text-xs text-gray-400">
        {platform.version} · {platform.updatedAt}
      </p>

      {/* 移动端：直接显示二维码，不依赖 hover */}
      {!isDesktop && platform.qrCode && (
        <div className="mt-4 flex flex-col items-center gap-2 sm:hidden">
          <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-gray-50 p-1">
            <img
              src={platform.qrCode}
              alt={`${platform.name} 下载二维码`}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-xs text-gray-500">{platform.hoverText}</span>
        </div>
      )}

      {/* hover/tap 悬浮层（大屏保留 hover，小屏点击触发） */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-[#52c41a] backdrop-blur-sm transition-opacity duration-300 ${active ? "opacity-100" : "pointer-events-none opacity-0"} ${!isDesktop ? "hidden sm:flex" : "flex"}`}
      >
        {isDesktop ? (
          <>
            <img
              src="/images/dowload-main.png"
              alt="下载"
              className="h-16 w-16 object-contain brightness-0 invert"
            />
            <span className="text-sm font-medium text-white">{platform.hoverText}</span>
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
            <span className="text-sm font-medium text-white">{platform.hoverText}</span>
          </>
        )}
      </div>
    </motion.div>
  );

  if (isDesktop && platform.downloadUrl) {
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
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
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
      </div>
    </section>
  );
}
