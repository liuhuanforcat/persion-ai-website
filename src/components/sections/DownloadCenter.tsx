"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type PlatformType = "desktop" | "mobile";
type PlatformKey = "macos" | "windows" | "ios" | "android";

interface PlatformItem {
  key: PlatformKey;
  name: string;
  type: PlatformType;
  version: string;
  updatedAt: string;
  downloadUrl: string;
  qrCodeUrl: string;
}

interface FeatureSlide {
  title: string;
  description: string;
  image: string;
}

interface VersionApiResponse {
  productName: string;
  developer: string;
  protocolUrl: string;
  privacyUrl: string;
  platforms: PlatformItem[];
}

const defaultVersionData: VersionApiResponse = {
  productName: "QNSZ 通信客户端",
  developer: "QNSZ 科技（北京）有限公司",
  protocolUrl: "/terms",
  privacyUrl: "/privacy",
  platforms: [
    {
      key: "macos",
      name: "macOS",
      type: "desktop",
      version: "v3.8.2",
      updatedAt: "2026-02-20",
      downloadUrl: "https://download.qnsz.com/client/macos",
      qrCodeUrl:
        "https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=https%3A%2F%2Fdownload.qnsz.com%2Fclient%2Fmacos",
    },
    {
      key: "windows",
      name: "Windows",
      type: "desktop",
      version: "v3.8.2",
      updatedAt: "2026-02-20",
      downloadUrl: "https://download.qnsz.com/client/windows",
      qrCodeUrl:
        "https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=https%3A%2F%2Fdownload.qnsz.com%2Fclient%2Fwindows",
    },
    {
      key: "ios",
      name: "iOS",
      type: "mobile",
      version: "v3.8.1",
      updatedAt: "2026-02-18",
      downloadUrl: "https://download.qnsz.com/client/ios",
      qrCodeUrl:
        "https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=https%3A%2F%2Fdownload.qnsz.com%2Fclient%2Fios",
    },
    {
      key: "android",
      name: "Android",
      type: "mobile",
      version: "v3.8.1",
      updatedAt: "2026-02-18",
      downloadUrl: "https://download.qnsz.com/client/android",
      qrCodeUrl:
        "https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=https%3A%2F%2Fdownload.qnsz.com%2Fclient%2Fandroid",
    },
  ],
};

const featureSlides: FeatureSlide[] = [
  {
    title: "统一通信工作台",
    description:
      "整合语音、视频、消息与会议协作能力，在一个界面内完成日常沟通与任务推进，降低切换成本。",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "跨端会话无缝衔接",
    description:
      "同一账号支持多端登录与消息同步，支持从桌面快速切换到移动端，保证沟通连续性。",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "安全可控的企业通信",
    description:
      "提供组织权限、数据加密与审计留痕能力，帮助企业在高并发沟通场景下保持合规与稳定。",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
  },
];

interface SliderCaptchaModalProps {
  open: boolean;
  platformName: string;
  onClose: () => void;
  onVerified: () => void;
}

function SliderCaptchaModal({
  open,
  platformName,
  onClose,
  onVerified,
}: SliderCaptchaModalProps) {
  const [dragging, setDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [verified, setVerified] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const pointerIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!open) {
      setDragging(false);
      setProgress(0);
      setVerified(false);
    }
  }, [open]);

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (verified) return;
    pointerIdRef.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (!dragging || verified) return;
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const maxLeft = rect.width - 48;
    const rawLeft = event.clientX - rect.left - 24;
    const nextLeft = Math.max(0, Math.min(rawLeft, maxLeft));
    const nextProgress = maxLeft === 0 ? 0 : (nextLeft / maxLeft) * 100;

    setProgress(nextProgress);

    if (nextProgress >= 99) {
      setVerified(true);
      setDragging(false);
      setProgress(100);
      window.setTimeout(() => {
        onVerified();
        onClose();
      }, 350);
    }
  };

  const endDrag = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (pointerIdRef.current !== null) {
      event.currentTarget.releasePointerCapture(pointerIdRef.current);
      pointerIdRef.current = null;
    }
    if (!verified) {
      setProgress(0);
    }
    setDragging(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/55 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text)]">
              安全验证
            </h3>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              请拖动滑块完成验证后下载 {platformName} 客户端
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
            aria-label="关闭验证弹窗"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div
          ref={trackRef}
          className="relative mt-6 h-12 overflow-hidden rounded-xl border border-[var(--color-border)] bg-gray-50"
        >
          <div
            className="absolute inset-y-0 left-0 rounded-xl bg-[var(--color-accent)]/18 transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
          <p className="absolute inset-0 flex items-center justify-center text-sm font-medium text-[var(--color-text-muted)]">
            {verified ? "验证通过，正在开始下载..." : "向右拖动滑块完成验证"}
          </p>
          <button
            type="button"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            className="absolute top-1/2 h-12 w-12 -translate-y-1/2 rounded-xl bg-[var(--color-accent)] text-white shadow-lg transition"
            style={{
              left: `calc(${progress}% - ${progress > 0 ? "12px" : "0px"})`,
            }}
            aria-label="拖动滑块进行验证"
          >
            <svg
              className="mx-auto h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function PlatformIcon({ platform }: { platform: PlatformKey }) {
  if (platform === "macos") {
    return (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M15.62 2.07c.08 1.04-.3 2.06-.93 2.81-.64.76-1.66 1.35-2.68 1.26-.09-1.02.34-2.09.97-2.81.7-.82 1.78-1.34 2.64-1.26Zm2.96 14.71c-.47 1.08-.7 1.56-1.31 2.53-.85 1.35-2.05 3.04-3.54 3.05-1.33.02-1.67-.86-3.47-.85-1.8 0-2.17.87-3.51.85-1.5-.01-2.64-1.53-3.49-2.88-2.36-3.74-2.61-8.12-1.15-10.37 1.03-1.58 2.66-2.5 4.2-2.5 1.57 0 2.55.86 3.84.86 1.25 0 2.01-.86 3.82-.86 1.37 0 2.83.75 3.85 2.04-3.39 1.86-2.84 6.77.76 8.13Z" />
      </svg>
    );
  }

  if (platform === "windows") {
    return (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M2 3.5 11 2v9H2v-7.5Zm10 7.5V2l10-1.5V11H12ZM2 12h9v10L2 20.5V12Zm10 0h10v11.5L12 22V12Z" />
      </svg>
    );
  }

  if (platform === "ios") {
    return (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M15.62 2.07c.08 1.04-.3 2.06-.93 2.81-.64.76-1.66 1.35-2.68 1.26-.09-1.02.34-2.09.97-2.81.7-.82 1.78-1.34 2.64-1.26Zm2.96 14.71c-.47 1.08-.7 1.56-1.31 2.53-.85 1.35-2.05 3.04-3.54 3.05-1.33.02-1.67-.86-3.47-.85-1.8 0-2.17.87-3.51.85-1.5-.01-2.64-1.53-3.49-2.88-2.36-3.74-2.61-8.12-1.15-10.37 1.03-1.58 2.66-2.5 4.2-2.5 1.57 0 2.55.86 3.84.86 1.25 0 2.01-.86 3.82-.86 1.37 0 2.83.75 3.85 2.04-3.39 1.86-2.84 6.77.76 8.13Z" />
      </svg>
    );
  }

  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.52 8.09a2.64 2.64 0 0 0-2.09 1.03 2.7 2.7 0 0 0-4.86 0 2.64 2.64 0 0 0-2.09-1.03A2.67 2.67 0 0 0 5.82 10.8V16a1.4 1.4 0 0 0 1.4 1.4h.88v2.48a1.12 1.12 0 1 0 2.24 0V17.4h3.32v2.48a1.12 1.12 0 1 0 2.24 0V17.4h.88a1.4 1.4 0 0 0 1.4-1.4v-5.2a2.67 2.67 0 0 0-2.66-2.71Zm-8.08-.95a.9.9 0 1 0-.9-.9.9.9 0 0 0 .9.9Zm5.12 0a.9.9 0 1 0-.9-.9.9.9 0 0 0 .9.9ZM9.2 5.54l-1.2-2.2a.35.35 0 1 0-.61.33l1.22 2.23a3.8 3.8 0 0 1 6.78 0l1.22-2.23a.35.35 0 0 0-.61-.33l-1.2 2.2a4.4 4.4 0 0 0-5.6 0Z" />
    </svg>
  );
}

function DownloadCard({
  platform,
  onDesktopDownload,
}: {
  platform: PlatformItem;
  onDesktopDownload: (platform: PlatformItem) => void;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-[var(--color-accent)]/10 p-3 text-[var(--color-accent)]">
            <PlatformIcon platform={platform.key} />
          </span>
          <h3 className="text-xl font-semibold text-[var(--color-text)]">
            {platform.name}
          </h3>
        </div>
      </div>

      <div className="mt-6 space-y-2 text-sm text-[var(--color-text-muted)]">
        <p>
          版本号：<span className="font-medium text-[var(--color-text)]">{platform.version}</span>
        </p>
        <p>
          更新日期：<span className="font-medium text-[var(--color-text)]">{platform.updatedAt}</span>
        </p>
      </div>

      {platform.type === "desktop" ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--color-primary)]/75 opacity-0 transition duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onDesktopDownload(platform)}
            className="pointer-events-auto rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition hover:scale-[1.02]"
          >
            点击下载
          </button>
        </div>
      ) : (
        <div className="absolute right-4 top-4 rounded-xl border border-[var(--color-border)] bg-white/95 p-2 shadow-md opacity-100 transition md:opacity-0 md:group-hover:opacity-100">
          <img
            src={platform.qrCodeUrl}
            alt={`${platform.name} 下载二维码`}
            className="h-24 w-24 rounded-md bg-white md:h-28 md:w-28"
          />
          <p className="mt-1 text-center text-xs text-[var(--color-text-muted)]">
            扫码下载
          </p>
        </div>
      )}
    </article>
  );
}

export function DownloadCenter() {
  const [versionData, setVersionData] =
    useState<VersionApiResponse>(defaultVersionData);
  const [loadingVersions, setLoadingVersions] = useState(true);
  const [captchaOpen, setCaptchaOpen] = useState(false);
  const [selectedDesktop, setSelectedDesktop] = useState<PlatformItem | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const wheelLockRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function loadVersions() {
      try {
        const response = await fetch("/api/download/versions", {
          cache: "no-store",
        });
        if (!response.ok) return;
        const data = (await response.json()) as VersionApiResponse;
        if (!cancelled) {
          setVersionData(data);
        }
      } catch {
        // keep default fallback data
      } finally {
        if (!cancelled) {
          setLoadingVersions(false);
        }
      }
    }

    void loadVersions();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleDesktopDownload = useCallback((platform: PlatformItem) => {
    setSelectedDesktop(platform);
    setCaptchaOpen(true);
  }, []);

  const handleVerified = useCallback(() => {
    if (selectedDesktop?.downloadUrl) {
      window.open(selectedDesktop.downloadUrl, "_blank", "noopener,noreferrer");
    }
  }, [selectedDesktop]);

  const goToSlide = useCallback((next: number) => {
    const total = featureSlides.length;
    const normalized = (next + total) % total;
    setActiveSlide(normalized);
  }, []);

  const handleFeatureWheel = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      if (wheelLockRef.current) return;
      if (Math.abs(event.deltaY) < 8) return;

      wheelLockRef.current = true;
      if (event.deltaY > 0) {
        goToSlide(activeSlide + 1);
      } else {
        goToSlide(activeSlide - 1);
      }

      window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 450);
    },
    [activeSlide, goToSlide]
  );

  const activeFeature = useMemo(() => featureSlides[activeSlide], [activeSlide]);

  return (
    <div className="bg-gradient-to-b from-[#f6f9ff] via-white to-white">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-28 md:px-8 md:pt-32">
        <div className="rounded-2xl border border-[var(--color-border)] bg-white/80 p-6 shadow-sm backdrop-blur md:p-8">
          <h1 className="text-3xl font-semibold text-[var(--color-primary)] md:text-4xl">
            下载中心
          </h1>
          <p className="mt-3 text-base text-[var(--color-text)]">
            产品名称：{versionData.productName}
          </p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            开发者：{versionData.developer}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            <a
              href={versionData.protocolUrl}
              className="rounded-full border border-[var(--color-border)] px-3 py-1 text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              服务协议
            </a>
            <a
              href={versionData.privacyUrl}
              className="rounded-full border border-[var(--color-border)] px-3 py-1 text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              隐私政策
            </a>
            {loadingVersions && (
              <span className="text-xs text-[var(--color-text-light)]">
                正在同步最新版本信息...
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 md:px-8 md:pb-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {versionData.platforms.map((platform) => (
            <DownloadCard
              key={platform.key}
              platform={platform}
              onDesktopDownload={handleDesktopDownload}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-24">
        <div
          className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-sm"
          onWheel={handleFeatureWheel}
        >
          <div className="grid items-center gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative h-[300px] w-full overflow-hidden md:h-[420px]">
              <img
                key={activeFeature.image}
                src={activeFeature.image}
                alt={activeFeature.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                产品功能展示
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[var(--color-primary)] md:text-3xl">
                {activeFeature.title}
              </h2>
              <p className="mt-4 leading-7 text-[var(--color-text-muted)]">
                {activeFeature.description}
              </p>
              <div className="mt-8 flex items-center gap-2">
                {featureSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 rounded-full transition ${
                      index === activeSlide
                        ? "w-8 bg-[var(--color-accent)]"
                        : "w-2.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`切换到第 ${index + 1} 个功能介绍`}
                  />
                ))}
              </div>
              <p className="mt-3 text-xs text-[var(--color-text-light)]">
                使用鼠标滚轮可切换下一页功能截图
              </p>
            </div>
          </div>
        </div>
      </section>

      <SliderCaptchaModal
        open={captchaOpen}
        platformName={selectedDesktop?.name ?? ""}
        onClose={() => setCaptchaOpen(false)}
        onVerified={handleVerified}
      />
    </div>
  );
}
