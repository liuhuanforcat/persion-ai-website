import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FusionPlatformPage } from "@/components/sections/FusionPlatformPage";

export const metadata: Metadata = {
  title: "融合通信平台 - QNSZ科技",
  description:
    "面向政企客户的融合通信平台，支持会议、监控、对讲、电话多平台音视频融合与跨层级指挥调度。",
  openGraph: {
    title: "融合通信平台 - QNSZ科技",
    description: "统一指挥调度，打造全量融合、多端联动的协同能力。",
  },
};

export default function FusionPage() {
  return (
    <>
      <Header variant="transparent" />
      <main>
        <FusionPlatformPage />
      </main>
      <Footer />
    </>
  );
}
