"use client";

import { useState, useEffect } from "react";

export type DeviceType = "android" | "ios" | "desktop";

function detectDevice(): DeviceType {
  if (typeof navigator === "undefined") return "desktop";

  const ua = navigator.userAgent || navigator.vendor || "";

  if (/android/i.test(ua)) return "android";

  if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) {
    return "ios";
  }

  return "desktop";
}

export function useDeviceType(): DeviceType {
  const [device, setDevice] = useState<DeviceType>("desktop");

  useEffect(() => {
    setDevice(detectDevice());
  }, []);

  return device;
}
