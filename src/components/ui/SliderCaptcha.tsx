"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { get } from "@/lib/service";

interface CaptchaData {
  backgroundImageBase64: string;
  sliderImageBase64: string;
  verKey: string;
  yposition: number;
}

interface SliderCaptchaProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (verKey: string, xPosition: number) => void;
}

const SLIDER_SIZE = 60;
const TRACK_HEIGHT = 60;
const BG_WIDTH = 350;
const BG_HEIGHT = 200;

export function SliderCaptcha({ open, onClose, onSuccess }: SliderCaptchaProps) {
  const [captcha, setCaptcha] = useState<CaptchaData | null>(null);
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [status, setStatus] = useState<"idle" | "success" | "fail">("idle");

  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);

  const maxOffset = BG_WIDTH - SLIDER_SIZE;

  const fetchCaptcha = useCallback(async () => {
    setLoading(true);
    setOffsetX(0);
    setStatus("idle");
    try {
      const res = await get("/api/voip/v1/sliderCaptcha/generate");
      const data = (res as { result?: CaptchaData }).result ?? (res as { data?: CaptchaData }).data;
      if (data) setCaptcha(data);
    } catch {
      console.error("[SliderCaptcha] 获取验证码失败");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (open) fetchCaptcha();
  }, [open, fetchCaptcha]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (status !== "idle") return;
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setDragging(true);
    startXRef.current = e.clientX - offsetX;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const x = Math.min(Math.max(0, e.clientX - startXRef.current), maxOffset);
    setOffsetX(x);
  };

  const handlePointerUp = () => {
    if (!dragging || !captcha) return;
    setDragging(false);
    onSuccess(captcha.verKey, offsetX);
  };

  const handleRetry = () => {
    fetchCaptcha();
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* 遮罩 */}
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            aria-label="关闭"
          />

          {/* 弹窗 */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.35 }}
            className="relative w-full max-w-[390px] rounded-2xl bg-white p-5 shadow-2xl"
          >
            {/* 关闭按钮 */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              aria-label="关闭"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="mb-4 text-base font-semibold text-gray-900">
              安全验证
            </h3>

            {loading ? (
              <div className="flex h-[220px] items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-blue-600" />
              </div>
            ) : captcha ? (
              <>
                {/* 背景图 + 滑块拼图 */}
                <div
                  className="relative mx-auto overflow-hidden rounded-lg"
                  style={{ width: BG_WIDTH, height: BG_HEIGHT }}
                >
                  <img
                    src={captcha.backgroundImageBase64}
                    alt="验证背景"
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                  <img
                    src={captcha.sliderImageBase64}
                    alt="滑块拼图"
                    className="absolute top-0 left-0 h-full"
                    style={{
                      transform: `translateX(${offsetX}px) translateY(${captcha.yposition}px)`,
                      pointerEvents: "none",
                      display: 'inline-block',
                      width: SLIDER_SIZE,
                      height: SLIDER_SIZE,
                    }}
                    draggable={false}
                  />

                  {/* 成功/失败状态 */}
                  {status !== "idle" && (
                    <div
                      className={`absolute inset-0 flex items-center justify-center text-sm font-medium text-white ${status === "success" ? "bg-green-500/70" : "bg-red-500/70"
                        }`}
                    >
                      {status === "success" ? "验证成功" : "验证失败，请重试"}
                    </div>
                  )}
                </div>

                {/* 滑动轨道 */}
                <div
                  ref={trackRef}
                  className="relative mx-auto mt-4 overflow-hidden rounded-full bg-gray-100"
                  style={{ width: BG_WIDTH, height: TRACK_HEIGHT }}
                >
                  {/* 进度条 */}
                  <div
                    className={`absolute left-0 top-0 h-full rounded-full transition-colors ${status === "success"
                      ? "bg-green-100"
                      : status === "fail"
                        ? "bg-red-100"
                        : "bg-blue-50"
                      }`}
                    style={{ width: offsetX + SLIDER_SIZE }}
                  />

                  {/* 提示文字 */}
                  {offsetX === 0 && status === "idle" && (
                    <span className="absolute inset-0 flex items-center justify-center text-sm text-gray-400 select-none">
                      向右拖动滑块完成验证
                    </span>
                  )}

                  {/* 滑块手柄 */}
                  <div
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    className={`absolute top-0 flex items-center justify-center rounded-full bg-white shadow-md transition-shadow cursor-grab active:cursor-grabbing ${dragging ? "shadow-lg ring-2 ring-blue-300" : "shadow hover:shadow-md"
                      } ${status === "success" ? "bg-green-500 text-white" : status === "fail" ? "bg-red-500 text-white" : "text-blue-600"}`}
                    style={{
                      width: SLIDER_SIZE,
                      height: SLIDER_SIZE,
                      transform: `translateX(${offsetX}px)`,
                      touchAction: "none",
                    }}
                  >
                    {status === "success" ? (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : status === "fail" ? (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* 底部操作 */}
                <div className="mt-3 flex items-center justify-between" style={{ width: BG_WIDTH, margin: "12px auto 0" }}>
                  <button
                    type="button"
                    onClick={handleRetry}
                    className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 9a8 8 0 0114-4.9M20 15a8 8 0 01-14 4.9" />
                    </svg>
                    换一张
                  </button>
                </div>
              </>
            ) : (
              <div className="flex h-[220px] flex-col items-center justify-center gap-3 text-gray-400">
                <p className="text-sm">加载失败</p>
                <button
                  onClick={handleRetry}
                  className="rounded-lg bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200"
                >
                  重试
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
