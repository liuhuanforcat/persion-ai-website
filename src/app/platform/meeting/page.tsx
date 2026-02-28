import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MeetingPlatformPage } from "@/components/sections/MeetingPlatformPage";

export const metadata: Metadata = {
  title: "视频会议平台 - QNSZ科技",
  description:
    "提供公有云、私有云会议服务及专业音视频终端，支持 4K 高清与会议 AI 能力，满足政企全场景会议需求。",
  openGraph: {
    title: "视频会议平台 - QNSZ科技",
    description: "云端一体、专业稳定的视频会议平台服务。",
  },
};

export default function MeetingPage() {
  return (
    <>
      <Header variant="transparent" />
      <main>
        <MeetingPlatformPage />
      </main>
      <Footer />
    </>
  );
}
