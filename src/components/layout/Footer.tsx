"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { post } from "@/lib/service";

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    post("/api/v1/auth/connect/test")
      .then((res: any) => {
        console.log(res);
        if (res?.serverTimestamp) {
          setYear(new Date(res.serverTimestamp).getFullYear());
        }
      })
      .catch(() => { });
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-medium text-white">全能数字</p>
            <p className="mt-2 text-sm">用科技的力量，打破空间的界限</p>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-10">
            <div>
              <h3 className="text-sm font-medium text-white">快速链接</h3>
              <ul className="mt-3 space-y-1 text-sm">
                <li>
                  <a
                    href="https://www.enheylig.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-1.5 hover:text-white"
                  >
                    Enheylig
                  </a>
                </li>
                <li>
                  <Link href="/platform/fusion" className="inline-block py-1.5 hover:text-white">
                    平台服务
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="inline-block py-1.5 hover:text-white">
                    下载中心
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="inline-block py-1.5 hover:text-white">
                    关于
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white">联系我们</h3>
              <p className="mt-3 text-sm">
                热线：<a href="tel:0571-86300996" className="hover:text-white">0571-86300996</a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-8 text-sm">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-gray-500">
            <span className="text-xs sm:text-sm">Copyright ©{year}.杭州全能数字科技有限公司 All rights reserved.</span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <a
              href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016825"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-gray-300"
            >
              <img src="/images/jh.png" alt="警徽" className="h-4 w-4" />
              浙公网安备33011002016825号
            </a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              浙ICP备2022000249号-1
            </a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <a href="https://meeting.onlineinline.com/statics/service_agreement.html" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              服务协议
            </a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <a href="https://meeting.onlineinline.com/statics/privacy_policy.html" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              隐私政策
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
