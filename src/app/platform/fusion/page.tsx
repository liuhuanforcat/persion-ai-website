import type { Metadata } from "next";
import { FusionBanner } from "@/components/sections/fusion/FusionBanner";
import { FusionFeatures } from "@/components/sections/fusion/FusionFeatures";
import { FusionCapabilities } from "@/components/sections/fusion/FusionCapabilities";
import { FusionMultiTerminal } from "@/components/sections/fusion/FusionMultiTerminal";
import { FusionScenarios } from "@/components/sections/fusion/FusionScenarios";

export const metadata: Metadata = {
  title: "融合通信平台 - 全能数字",
  description:
    "依托融合通信平台，实现会议、监控、对讲、电话等多平台音视频通信，推动跨部门、跨层级的高效协同会商、联动处置和指挥调度。一套系统解决所有通信问题。",
  openGraph: { images: ["/images/fusion/fusionBanner.png"] },
};

export default function FusionPlatformPage() {
  return (
    <main>
      {/* 首屏 Banner — 一句话说清平台定位 */}
      <FusionBanner />

      {/* 四大优势 — 为什么选我们 */}
      <FusionFeatures />

      {/* 全量融合能力 — 消除兼容性顾虑 */}
      <FusionCapabilities />

      {/* 多端联动 — 一个平台覆盖所有场景 */}
      <FusionMultiTerminal />

      {/* 应用场景 — 让客户对号入座 */}
      <FusionScenarios />
    </main>
  );
}
