"use client";

import { useEffect } from "react";

/**
 * 响应式 rem 计算：在 1440px ~ 1920px 区间线性缩放根字号。
 * 1440px → 16px，1920px → 21.33px (即 1920/1440 * 16)。
 * 低于 1440 固定 16px，高于 1920 固定 21.33px。
 */
export function RemScript() {
  useEffect(() => {
    function setRem() {
      const w = window.innerWidth;
      const minW = 1440;
      const maxW = 1920;
      const minFs = 16;
      const maxFs = (maxW / minW) * minFs;

      let fs: number;
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

  return null;
}
