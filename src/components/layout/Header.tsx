"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const platformLinks = [
  { href: "/platform/fusion", label: "融合通信平台" },
  { href: "/platform/meeting", label: "视频会议平台" },
  { href: "/platform/talkback", label: "数字对讲平台" },
  { href: "/platform/emc", label: "应急指挥平台" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobilePlatformOpen(false);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-black/70 backdrop-blur transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="mx-auto flex h-13 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
          <img src="/images/logo.png" alt="全能数字" className="w-28 h-6" />
        </Link>

        {/* 桌面端导航 */}
        <nav className="hidden items-center gap-10 md:flex md:gap-20">
          <a
            href="https://www.enheylig.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white transition-colors hover:opacity-80"
          >
            <img
              src="/images/enheylig.png"
              alt="Enheylig"
              className="w-20 h-5"
            />
          </a>
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((o) => !o)}
              className="flex items-center gap-1 text-sm font-medium text-white transition-colors hover:opacity-80"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              平台服务
              <svg
                className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-1 min-w-[180px] rounded-lg border border-white/20 bg-black/70 py-2 shadow-lg backdrop-blur">
                {platformLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm text-white/90 hover:bg-white/10"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link
            href="/download"
            className="text-sm font-medium text-white transition-colors hover:opacity-80"
          >
            下载中心
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-white transition-colors hover:opacity-80"
          >
            关于
          </Link>
        </nav>

        {/* 移动端汉堡按钮 */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md text-white md:hidden"
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={mobileMenuOpen}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 移动端顶部下拉菜单 */}
      {/* 遮罩 */}
      <div
        className={`fixed inset-0 top-13 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={closeMobileMenu}
      />
      <nav
        className={`fixed left-0 right-0 top-13 z-50 overflow-hidden bg-gray-900/95 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden ${mobileMenuOpen ? "max-h-[80dvh] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="overflow-y-auto px-4 py-4">
          <a
            href="https://www.enheylig.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-3 py-3 text-white/80 transition-colors hover:bg-white/10"
            onClick={closeMobileMenu}
          >
            <img src="/images/enheylig.png" alt="Enheylig" className="w-20 h-5" />
          </a>

          {/* 平台服务折叠 */}
          <div>
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10"
              onClick={() => setMobilePlatformOpen((o) => !o)}
            >
              平台服务
              <svg
                className={`h-4 w-4 transition-transform ${mobilePlatformOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${mobilePlatformOpen ? "max-h-60" : "max-h-0"}`}
            >
              <ul className="space-y-1 pl-4 pb-2">
                {platformLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/download"
            className="block rounded-lg px-3 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10"
            onClick={closeMobileMenu}
          >
            下载中心
          </Link>
          <Link
            href="/about"
            className="block rounded-lg px-3 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10"
            onClick={closeMobileMenu}
          >
            关于
          </Link>
        </div>
      </nav>
    </header>
  );
}
