"use client";

import { useState, useEffect, useRef } from "react";
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
import { QRCodeSVG } from "qrcode.react";
import { get } from "@/lib/service";
import { SliderCaptcha } from "@/components/ui/SliderCaptcha";

/* ------------------------------------------------------------------ */
/* 类型定义                                                            */
/* ------------------------------------------------------------------ */

interface TerminalInfo {
  downloadUrl: string;
  terminalType: string;
  upgradeDate: string;
  version: string;
}

interface LatestInfoResult {
  A?: TerminalInfo;
  I?: TerminalInfo;
  M?: TerminalInfo;
  W?: TerminalInfo;
}

interface Platform {
  id: string;
  name: string;
  downloadUrl?: string;
  mobileDownloadUrl?: string;
  version: string;
  updatedAt: string;
  hoverText: string;
  mobileButtonText?: string;
  image: string;
}

function buildPlatforms(result?: LatestInfoResult): Platform[] {
  return [
    {
      id: "macos",
      name: "macOS",
      downloadUrl: result?.M?.downloadUrl || "https://apps.apple.com/cn/app/id6480379498",
      version: result?.M ? `v${result.M.version}` : "",
      updatedAt: result?.M?.upgradeDate || "",
      hoverText: "前往 App Store 下载",
      image: "/images/mac.png",
    },
    {
      id: "windows",
      name: "Windows",
      downloadUrl: result?.W?.downloadUrl || "https://api.onlineinline.com/download/windows",
      version: result?.W ? `v${result.W.version}` : "",
      updatedAt: result?.W?.upgradeDate || "",
      hoverText: "点击下载安装包",
      image: "/images/win.png",
    },
    {
      id: "ios",
      name: "iOS",
      mobileDownloadUrl: result?.I?.downloadUrl || "https://apps.apple.com/cn/app/id6480379498",
      mobileButtonText: "前往 App Store 下载",
      version: result?.I ? `v${result.I.version}` : "",
      updatedAt: result?.I?.upgradeDate || "",
      hoverText: "扫码下载",
      image: "/images/ios.png",
    },
    {
      id: "android",
      name: "Android",
      mobileDownloadUrl: result?.A?.downloadUrl || "https://api.onlineinline.com/download/android",
      mobileButtonText: "下载安卓版",
      version: result?.A ? `v${result.A.version}` : "",
      updatedAt: result?.A?.upgradeDate || "",
      hoverText: "扫码下载",
      image: "/images/android.png",
    },
  ];
}

/** 根据设备类型获取对应移动端平台 */
function getMobilePlatform(device: DeviceType, platforms: Platform[]): Platform | null {
  if (device === "android") return platforms.find((p) => p.id === "android") ?? null;
  if (device === "ios") return platforms.find((p) => p.id === "ios") ?? null;
  return null;
}

/* ------------------------------------------------------------------ */
/* 移动端下载按钮（仅显示当前设备平台）                                       */
/* ------------------------------------------------------------------ */

function MobileDownloadView({ platform, onDownloadClick }: { platform: Platform; onDownloadClick: () => void }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariants}
      className="flex flex-col items-center gap-6"
    >
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

      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900">
          {platform.name} 版
        </h3>
        <p className="mt-1.5 text-sm text-gray-400">
          {platform.version} · {platform.updatedAt}
        </p>
      </div>

      <motion.button
        type="button"
        onClick={onDownloadClick}
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
      </motion.button>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* 桌面端卡片                                                          */
/* ------------------------------------------------------------------ */

function PlatformCard({ platform, onDownloadClick }: {
  platform: Platform;
  onDownloadClick: (p: Platform) => void;
}) {
  const [active, setActive] = useState(false);
  const [qrUrl, setQrUrl] = useState<string | undefined>(undefined);
  const [qrLoading, setQrLoading] = useState(false);
  const hasDirectLink = !!platform.downloadUrl;
  const needsSignedQr = !hasDirectLink && !!platform.mobileDownloadUrl && platform.id === "android";

  const handleMouseEnter = async () => {
    setActive(true);
    if (needsSignedQr) {
      setQrLoading(true);
      try {
        const res = await get("/api/voip/v1/sliderCaptcha/getSign");
        const data = (res as { result?: SignData }).result ?? (res as { data?: SignData }).data;
        if (data?.sign && platform.mobileDownloadUrl) {
          setQrUrl(buildSignedUrl(platform.mobileDownloadUrl, data));
        }
      } catch {
        setQrUrl(undefined);
      } finally {
        setQrLoading(false);
      }
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onDownloadClick(platform);
  };

  const qrValue = needsSignedQr ? qrUrl : platform.mobileDownloadUrl;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={SPRING.snappy}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setActive(false)}
      onClick={(e) => {
        if (hasDirectLink) {
          handleClick(e);
        } else {
          setActive((o) => !o);
        }
      }}
      className="group relative flex h-full cursor-pointer flex-col items-center overflow-hidden rounded-2xl border border-gray-100 bg-white px-6 py-10 shadow-sm transition-shadow hover:shadow-xl"
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
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white backdrop-blur-sm transition-opacity duration-300 ${active ? "opacity-100" : "pointer-events-none opacity-0"
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
        ) : qrLoading ? (
          <div className="flex flex-col items-center gap-2">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-200 border-t-green-500" />
            <span className="text-xs text-gray-400">加载中...</span>
          </div>
        ) : qrValue ? (
          <>
            <div className="flex h-28 w-28 items-center justify-center rounded-xl bg-white p-2">
              <QRCodeSVG
                value={qrValue}
                size={96}
                level="M"
                bgColor="transparent"
                fgColor="#16a34a"
              />
            </div>
            <span className="text-sm font-medium">{platform.hoverText}</span>
          </>
        ) : null}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* 主组件                                                              */
/* ------------------------------------------------------------------ */

interface SignData {
  sign: string;
  expires: string;
}

function buildSignedUrl(baseUrl: string, signData: SignData): string {
  const sep = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${sep}sign=${encodeURIComponent(signData.sign)}&expires=${encodeURIComponent(signData.expires)}`;
}

export function DownloadCards() {
  const device = useDeviceType();
  const [platforms, setPlatforms] = useState<Platform[]>(() => buildPlatforms({}));
  const [captchaOpen, setCaptchaOpen] = useState(false);
  const pendingPlatformRef = useRef<Platform | null>(null);

  useEffect(() => {
    get("/api/voip/v1/upgrade/officialWebsite/latest/info")
      .then((res: { result?: LatestInfoResult }) => {
        if (res?.result) {
          setPlatforms(buildPlatforms(res.result));
        }
      })
      .catch((err: Error) => {
        console.error("[DownloadCards] 获取版本信息失败:", err.message);
      });
  }, []);

  const handleDownloadClick = (platform: Platform) => {
    pendingPlatformRef.current = platform;
    setCaptchaOpen(true);
  };

  const handleCaptchaSuccess = (sign: string, expires: string) => {
    const platform = pendingPlatformRef.current;
    if (!platform) return;

    const downloadUrl = platform.downloadUrl || platform.mobileDownloadUrl;
    if (downloadUrl) {
      window.open(`${downloadUrl}?sign=${sign}&expires=${expires}`, "_blank");
    }
    setCaptchaOpen(false);
    pendingPlatformRef.current = null;
  };

  const mobilePlatform = getMobilePlatform(device, platforms);

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {mobilePlatform ? (
          <MobileDownloadView
            platform={mobilePlatform}
            onDownloadClick={() => handleDownloadClick(mobilePlatform)}
          />
        ) : (
          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {platforms.map((p) => (
              <PlatformCard key={p.id} platform={p} onDownloadClick={handleDownloadClick} />
            ))}
          </motion.div>
        )}
      </div>

      <SliderCaptcha
        open={captchaOpen}
        onClose={() => {
          setCaptchaOpen(false);
          pendingPlatformRef.current = null;
        }}
        onSuccess={handleCaptchaSuccess}
      />
    </section>
  );
}
