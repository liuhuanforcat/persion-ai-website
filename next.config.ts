import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined,
  distDir: "dist",
  trailingSlash: false,  // 加这行
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://172.25.11.120/:path*",
      },
    ];
  },
};

export default nextConfig;
