import type { Metadata } from "next";
import { DownloadHero } from "@/components/sections/download/DownloadHero";
import { DownloadCards } from "@/components/sections/download/DownloadCards";
import { ProductFeatures } from "@/components/sections/download/ProductFeatures";

export const metadata: Metadata = {
  title: "下载会点点客户端 - 全能数字",
  description:
    "下载会点点客户端，支持 macOS、Windows、iOS、Android 多平台。高清会议稳定流畅，日程管理便捷高效。",
  openGraph: { images: ["/images/logo.png"] },
};

export default function DownloadPage() {
  return (
    <main>
      <DownloadHero />
      <DownloadCards />
      <ProductFeatures />
    </main>
  );
}
