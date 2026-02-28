import type { Metadata } from "next";
import { TalkbackBanner } from "@/components/sections/talkback/TalkbackBanner";
import { TalkbackFeatures } from "@/components/sections/talkback/TalkbackFeatures";
import { TalkbackDataSecurity } from "@/components/sections/talkback/TalkbackDataSecurity";
import { TalkbackAI } from "@/components/sections/talkback/TalkbackAI";
import { TalkbackScenarios } from "@/components/sections/talkback/TalkbackScenarios";
import { TalkbackProducts } from "@/components/sections/talkback/TalkbackProducts";

export const metadata: Metadata = {
  title: "数字对讲平台 - 全能数字",
  description:
    "集数字对讲、实时定位、直播记录、应急呼叫于一体，满足数字对讲通讯、工作现场监控指挥、应急状况即时处置等需求。支持智能视频胸牌、音视频记录仪、公网对讲机等终端。",
  openGraph: { images: ["/images/talkback/talkbackBanner.png"] },
};

export default function TalkbackPlatformPage() {
  return (
    <main>
      {/* 首屏 Banner — 不只是对讲机，是一站式平台 */}
      <TalkbackBanner />

      {/* 四大优势 — 距离远、设备广、定位准、管得住 */}
      <TalkbackFeatures />

      {/* 数据安全 — 本地+云端双重备份，打消顾虑 */}
      <TalkbackDataSecurity />

      {/* AI能力 — 语音质检、声纹打卡、语音播报 */}
      <TalkbackAI />

      {/* 应用场景 — 窗口/上门/装维/合规 */}
      <TalkbackScenarios />

      {/* 产品选择 — 胸牌/记录仪/对讲机 */}
      <TalkbackProducts />
    </main>
  );
}
