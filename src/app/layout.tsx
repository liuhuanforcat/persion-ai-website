import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QNSZ科技 - 融合通信解决方案",
  description:
    "QNSZ科技专注于融合通信领域，提供视频会议、数字对讲、应急指挥等企业级通信解决方案。",
  openGraph: {
    title: "QNSZ科技 - 融合通信解决方案",
    description: "重新定义企业通信体验",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
