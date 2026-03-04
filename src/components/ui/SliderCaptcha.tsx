"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { get, post } from "@/lib/service";

interface CaptchaData {
  backgroundImageBase64: string;
  sliderImageBase64: string;
  verKey: string;
  yposition: number;
}

interface SliderCaptchaProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (sign: string, expires: string) => void;
}

const SLIDER_SIZE = 60;
const TRACK_HEIGHT = 60;
const BG_WIDTH = 350;
const BG_HEIGHT = 200;

const BRAND = "#1677ff";
const BRAND_LIGHT = "#e6f4ff";
const BRAND_HOVER = "#d9d9d9";
const SUCCESS = "#52c41a";
const SUCCESS_LIGHT = "#f6ffed";
const ERROR = "#ff4d4f";
const ERROR_LIGHT = "#fff2f0";

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

  const handlePointerUp = async () => {
    if (!dragging || !captcha) return;
    setDragging(false);

    try {
      const res = await post("/api/voip/v1/sliderCaptcha/verify", {
        verKey: captcha.verKey,
        xPosition: offsetX,
      });
      const data = (res as { result?: { sign: string; expires: string } }).result
        ?? (res as { data?: { sign: string; expires: string } }).data;

      if (data?.sign) {
        setStatus("success");
        setTimeout(() => onSuccess(data.sign, data.expires), 600);
      } else {
        setStatus("fail");
        setTimeout(() => fetchCaptcha(), 1000);
      }
    } catch {
      setStatus("fail");
      setTimeout(() => fetchCaptcha(), 1000);
    }
  };

  if (!open) return null;

  const statusColor = status === "success" ? SUCCESS : status === "fail" ? ERROR : BRAND;
  const statusBg = status === "success" ? SUCCESS_LIGHT : status === "fail" ? ERROR_LIGHT : BRAND_LIGHT;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/45" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative w-full"
            style={{
              maxWidth: BG_WIDTH + 48,
              borderRadius: 8,
              background: "#fff",
              boxShadow: "0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between"
              style={{
                padding: "16px 24px",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded"
                  style={{ background: BRAND_LIGHT }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L3.5 6.5V12c0 4.7 3.6 9.1 8.5 10 4.9-.9 8.5-5.3 8.5-10V6.5L12 2z"
                      stroke={BRAND}
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                    <path d="M9 12l2 2 4-4" stroke={BRAND} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontSize: 16, fontWeight: 600, color: "rgba(0,0,0,0.88)", lineHeight: "24px" }}>
                  安全验证
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-6 w-6 items-center justify-center rounded transition-colors"
                style={{ color: "rgba(0,0,0,0.45)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(0,0,0,0.88)"; e.currentTarget.style.background = "rgba(0,0,0,0.06)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(0,0,0,0.45)"; e.currentTarget.style.background = "transparent"; }}
                aria-label="关闭"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: "20px 24px 16px" }}>
              {loading ? (
                <div
                  className="flex flex-col items-center justify-center gap-3"
                  style={{ height: BG_HEIGHT + TRACK_HEIGHT + 56 }}
                >
                  <div className="relative h-8 w-8">
                    <div
                      className="absolute inset-0 animate-spin rounded-full"
                      style={{ border: `3px solid ${BRAND_LIGHT}`, borderTopColor: BRAND }}
                    />
                  </div>
                  <span style={{ fontSize: 14, color: "rgba(0,0,0,0.45)" }}>加载中...</span>
                </div>
              ) : captcha ? (
                <>
                  {/* 背景图 + 滑块拼图 */}
                  <div
                    className="relative mx-auto overflow-hidden"
                    style={{
                      width: BG_WIDTH,
                      height: BG_HEIGHT,
                      borderRadius: 6,
                      border: "1px solid #f0f0f0",
                    }}
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
                      className="absolute top-0 left-0"
                      style={{
                        transform: `translateX(${offsetX}px) translateY(${captcha.yposition}px)`,
                        pointerEvents: "none",
                        width: SLIDER_SIZE,
                        height: SLIDER_SIZE,
                        filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.3))",
                        borderRadius: 4,
                      }}
                      draggable={false}
                    />

                    <AnimatePresence>
                      {status !== "idle" && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 flex items-center justify-center"
                          style={{
                            background: status === "success" ? "rgba(82,196,26,0.65)" : "rgba(255,77,79,0.65)",
                            backdropFilter: "blur(2px)",
                          }}
                        >
                          <motion.div
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            className="flex flex-col items-center gap-2"
                          >
                            {status === "success" ? (
                              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="11" fill="white" fillOpacity={0.2} />
                                <path d="M7 12.5l3 3 7-7" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            ) : (
                              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="11" fill="white" fillOpacity={0.2} />
                                <path d="M8 8l8 8M16 8l-8 8" stroke="white" strokeWidth={2.5} strokeLinecap="round" />
                              </svg>
                            )}
                            <span style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>
                              {status === "success" ? "验证成功" : "验证失败，请重试"}
                            </span>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* 滑动轨道 */}
                  <div
                    ref={trackRef}
                    className="relative mx-auto select-none"
                    style={{
                      width: BG_WIDTH,
                      height: TRACK_HEIGHT,
                      marginTop: 16,
                      borderRadius: 6,
                      background: "#fafafa",
                      border: `1px solid ${status === "idle" ? "#d9d9d9" : statusColor}`,
                      transition: "border-color 0.2s",
                      overflow: "hidden",
                    }}
                  >
                    {/* 进度填充 */}
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: offsetX + SLIDER_SIZE,
                        background: statusBg,
                        borderRadius: "5px 0 0 5px",
                        transition: dragging ? "none" : "background 0.2s",
                      }}
                    />

                    {/* 提示文字 */}
                    {offsetX === 0 && status === "idle" && (
                      <span
                        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                        style={{ fontSize: 14, color: "rgba(0,0,0,0.25)", letterSpacing: 1 }}
                      >
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                          className="mr-1.5 flex items-center"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 7l5 5-5 5" opacity={0.4} />
                          </svg>
                        </motion.span>
                        向右拖动滑块完成验证
                      </span>
                    )}

                    {/* 滑块手柄 */}
                    <motion.div
                      onPointerDown={handlePointerDown}
                      onPointerMove={handlePointerMove}
                      onPointerUp={handlePointerUp}
                      className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
                      style={{
                        width: SLIDER_SIZE,
                        left: offsetX,
                        touchAction: "none",
                        cursor: status !== "idle" ? "default" : dragging ? "grabbing" : "grab",
                        background: status === "idle"
                          ? dragging ? BRAND : "#fff"
                          : statusColor,
                        borderRight: `1px solid ${status === "idle" ? (dragging ? BRAND : "#d9d9d9") : statusColor}`,
                        borderRadius: "5px 0 0 5px",
                        transition: dragging ? "none" : "background 0.2s, border-color 0.2s",
                        boxShadow: dragging ? `0 0 0 3px ${BRAND}33` : "none",
                      }}
                      onMouseEnter={(e) => {
                        if (status === "idle" && !dragging) {
                          e.currentTarget.style.background = BRAND_LIGHT;
                          e.currentTarget.style.borderRightColor = BRAND_HOVER;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (status === "idle" && !dragging) {
                          e.currentTarget.style.background = "#fff";
                          e.currentTarget.style.borderRightColor = "#d9d9d9";
                        }
                      }}
                    >
                      {status === "success" ? (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          width="18" height="18" viewBox="0 0 24 24" fill="none"
                        >
                          <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                      ) : status === "fail" ? (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          width="16" height="16" viewBox="0 0 24 24" fill="none"
                        >
                          <path d="M6 6l12 12M18 6L6 18" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" />
                        </motion.svg>
                      ) : (
                        <svg
                          width="14" height="14" viewBox="0 0 24 24" fill="none"
                          stroke={dragging ? "#fff" : "rgba(0,0,0,0.25)"}
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </motion.div>
                  </div>

                  {/* 底部操作 */}
                  <div
                    className="mx-auto flex items-center justify-between"
                    style={{ width: BG_WIDTH, marginTop: 12 }}
                  >
                    <button
                      type="button"
                      onClick={fetchCaptcha}
                      className="inline-flex items-center gap-1 rounded px-1.5 py-1 transition-colors"
                      style={{ fontSize: 13, color: "rgba(0,0,0,0.45)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = BRAND; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(0,0,0,0.45)"; }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 9a8 8 0 0114-4.9M20 15a8 8 0 01-14 4.9" />
                      </svg>
                      换一张
                    </button>
                    <span style={{ fontSize: 12, color: "rgba(0,0,0,0.25)" }}>
                      安全防护由系统提供
                    </span>
                  </div>
                </>
              ) : (
                <div
                  className="flex flex-col items-center justify-center gap-3"
                  style={{ height: BG_HEIGHT + TRACK_HEIGHT + 56, color: "rgba(0,0,0,0.45)" }}
                >
                  <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="30" stroke="#f0f0f0" strokeWidth={2} />
                    <path d="M32 20v16M32 42h.01" stroke="#d9d9d9" strokeWidth={3} strokeLinecap="round" />
                  </svg>
                  <span style={{ fontSize: 14 }}>加载失败</span>
                  <button
                    type="button"
                    onClick={fetchCaptcha}
                    className="rounded-md px-6 py-1.5 text-sm transition-colors"
                    style={{
                      color: BRAND,
                      border: `1px solid ${BRAND}`,
                      background: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.background = BRAND;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = BRAND;
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    重试
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
