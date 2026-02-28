import type { Metadata } from "next";
import { MeetingBanner } from "@/components/sections/meeting/MeetingBanner";
import { MeetingFeatures } from "@/components/sections/meeting/MeetingFeatures";
import { MeetingArchitecture } from "@/components/sections/meeting/MeetingArchitecture";
import { MeetingScenarios } from "@/components/sections/meeting/MeetingScenarios";
import { MeetingProducts } from "@/components/sections/meeting/MeetingProducts";

export const metadata: Metadata = {
  title: "视频会议平台 - 全能数字",
  description:
    "涵盖公有云、私有云会议服务及各类专业音视频终端，采用端到端国产化设计，支持4K高清音视频和会议AI功能，全面满足全场景专业音视频会议需求。",
  openGraph: { images: ["/images/meeting/meetingBanner.png"] },
};

export default function MeetingPlatformPage() {
  return (
    <main>
      {/* 首屏 Banner — 云+端一体的会议解决方案 */}
      <MeetingBanner />

      {/* 四大优势 — 灵活部署、全端覆盖、广泛兼容、安全可靠 */}
      <MeetingFeatures />

      {/* 平台架构图 — 一图看清平台全貌 */}
      <MeetingArchitecture />

      {/* 应用场景 — 让客户对号入座 */}
      <MeetingScenarios />

      {/* 产品选择 — 全系列硬件终端选型 */}
      <MeetingProducts />
    </main>
  );
}
