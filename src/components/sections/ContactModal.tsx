"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  modalOverlayVariants,
  modalContentVariants,
} from "@/lib/motion-variants";

export function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            variants={modalOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
          />

          {/* Content */}
          <motion.div
            variants={modalContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed left-1/2 top-1/2 z-[101] w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              aria-label="关闭"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Title */}
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-[var(--color-primary)]">
                立即咨询
              </h3>
              <p className="mt-2 text-base text-[var(--color-text-muted)]">
                扫码添加企业微信，获取专属方案
              </p>
            </div>

            {/* QR Code */}
            <div className="mb-6 flex flex-col items-center gap-3">
              <div className="flex h-48 w-48 items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50">
                <div className="flex flex-col items-center gap-2 text-gray-400">
                  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                  </svg>
                  <span className="text-xs">企业微信二维码</span>
                </div>
              </div>
              <span className="text-sm font-medium text-[var(--color-text-muted)]">
                QNSZ科技 · 官方客服
              </span>
            </div>

            {/* Phone */}
            <div className="text-center">
              <p className="text-sm text-[var(--color-text-muted)]">
                或拨打客服热线
              </p>
              <p className="mt-1 text-lg font-semibold tracking-wider text-[var(--color-accent)]">
                400-800-8888
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
