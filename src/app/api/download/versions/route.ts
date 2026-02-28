import { NextResponse } from "next/server";

const versionData = {
  productName: "QNSZ 通信客户端",
  developer: "QNSZ 科技（北京）有限公司",
  protocolUrl: "/terms",
  privacyUrl: "/privacy",
  platforms: [
    {
      key: "macos",
      name: "macOS",
      type: "desktop",
      version: "v3.8.2",
      updatedAt: "2026-02-20",
      downloadUrl: "https://download.qnsz.com/client/macos",
      qrCodeUrl:
        "https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=https%3A%2F%2Fdownload.qnsz.com%2Fclient%2Fmacos",
    },
    {
      key: "windows",
      name: "Windows",
      type: "desktop",
      version: "v3.8.2",
      updatedAt: "2026-02-20",
      downloadUrl: "https://download.qnsz.com/client/windows",
      qrCodeUrl:
        "https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=https%3A%2F%2Fdownload.qnsz.com%2Fclient%2Fwindows",
    },
    {
      key: "ios",
      name: "iOS",
      type: "mobile",
      version: "v3.8.1",
      updatedAt: "2026-02-18",
      downloadUrl: "https://download.qnsz.com/client/ios",
      qrCodeUrl:
        "https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=https%3A%2F%2Fdownload.qnsz.com%2Fclient%2Fios",
    },
    {
      key: "android",
      name: "Android",
      type: "mobile",
      version: "v3.8.1",
      updatedAt: "2026-02-18",
      downloadUrl: "https://download.qnsz.com/client/android",
      qrCodeUrl:
        "https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=https%3A%2F%2Fdownload.qnsz.com%2Fclient%2Fandroid",
    },
  ],
};

export async function GET() {
  return NextResponse.json(versionData, { status: 200 });
}
