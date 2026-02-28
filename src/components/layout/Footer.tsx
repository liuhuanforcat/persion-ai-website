import Link from "next/link";

const navLinks = [
  { href: "/about", label: "关于我们" },
  { href: "/download", label: "下载中心" },
  { href: "/platform/fusion", label: "融合通信平台" },
  { href: "/platform/meeting", label: "视频会议平台" },
  { href: "/platform/intercom", label: "数字对讲平台" },
  { href: "/platform/emergency", label: "应急指挥平台" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-surface-dark)] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent)] text-white font-bold text-sm">
                Q
              </div>
              <span className="text-lg font-semibold text-white">QNSZ</span>
            </Link>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: 客服热线 */}
          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="text-sm text-gray-400">客服热线</p>
            <div className="flex items-center gap-3">
              <svg
                className="h-6 w-6 text-[var(--color-accent)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="text-2xl font-semibold tracking-wider text-white">
                400-800-8888
              </span>
            </div>
            <p className="text-xs text-gray-500">
              工作日 9:00 - 18:00
            </p>
          </div>
        </div>
      </div>

      {/* 版权信息 */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-6 text-xs text-gray-500 md:flex-row md:justify-center md:gap-4 md:px-8">
          <span>© {new Date().getFullYear()} QNSZ科技 版权所有</span>
          <Separator />
          <a
            href="https://beian.mps.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-gray-400"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
            京公网安备 XXXXXXXXXX号
          </a>
          <Separator />
          <a
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gray-400"
          >
            京ICP备XXXXXXXX号
          </a>
          <Separator />
          <a href="/terms" className="transition-colors hover:text-gray-400">
            服务协议
          </a>
          <Separator />
          <a href="/privacy" className="transition-colors hover:text-gray-400">
            隐私政策
          </a>
        </div>
      </div>
    </footer>
  );
}

function Separator() {
  return <span className="hidden text-gray-700 md:inline">|</span>;
}
