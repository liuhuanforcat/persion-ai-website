import Link from "next/link";

const currentYear = new Date().getFullYear();

export function Footer() {
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
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.enheylig.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Enheylig
                  </a>
                </li>
                <li>
                  <Link href="/platform/fusion" className="hover:text-white">
                    平台服务
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="hover:text-white">
                    下载中心
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
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
          <p className="text-gray-500">© {currentYear} 全能数字 版权所有</p>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-gray-500">
            <span>公安备案号（请替换为实际备案号）</span>
            <span>ICP 备案号（请替换为实际备案号）</span>
            <Link href="/service" className="hover:text-gray-300">
              服务协议
            </Link>
            <Link href="/privacy" className="hover:text-gray-300">
              隐私政策
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
