"use client";

import { useEffect } from "react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

/** 企业微信二维码图片路径，请将实际二维码放到 public/images/wecom-qr.png */
const WECOM_QR = "/images/wecom-qr.png";

export function ContactModal({ open, onClose }: ContactModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* 遮罩：点击关闭 */}
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="关闭"
      />
      <div className="relative max-w-sm rounded-2xl bg-white p-6 shadow-xl">
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          onClick={onClose}
          aria-label="关闭"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 id="contact-modal-title" className="pr-8 text-lg font-semibold text-gray-900">
          音视频专家在线
        </h2>
        <p className="mt-1 text-sm text-gray-600">一对一解决方案设计指导</p>
        <div className="mt-6 flex justify-center">
          <div className="flex h-48 w-48 items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50">
            <img
              src={WECOM_QR}
              alt="企业微信二维码"
              className="h-full w-full rounded-lg object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
              }}
            />
            <span className="hidden text-sm text-gray-500">请放置二维码图片至 public/images/wecom-qr.png</span>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          加不上可致电 <a href="tel:0571-86300996" className="font-medium text-gray-900 hover:underline">0571-86300996</a>
        </p>
      </div>
    </div>
  );
}
