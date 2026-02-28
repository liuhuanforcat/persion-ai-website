import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DownloadCenter } from "@/components/sections/DownloadCenter";

export const metadata: Metadata = {
  title: "下载中心 - QNSZ科技",
  description:
    "获取 QNSZ 通信客户端最新版下载，支持 macOS、Windows、iOS 与 Android 平台。",
  openGraph: {
    title: "下载中心 - QNSZ科技",
    description: "多平台客户端下载与产品功能展示",
  },
};

export default function DownloadPage() {
  return (
    <>
      <Header variant="solid" activeNav="/download" />
      <main>
        <DownloadCenter />
      </main>
      <Footer />
    </>
  );
}
