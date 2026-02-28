"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const platformItems = [
  { href: "/platform/fusion", label: "融合通信平台" },
  { href: "/platform/meeting", label: "视频会议平台" },
  { href: "/platform/intercom", label: "数字对讲平台" },
  { href: "/platform/emergency", label: "应急指挥平台" },
];

interface HeaderProps {
  onContactClick?: () => void;
  /** "transparent" = 首页模式（初始透明，滚动后白底）；"solid" = 内页模式（始终白底） */
  variant?: "transparent" | "solid";
  /** 当前激活的导航路径，用于高亮当前页 */
  activeNav?: string;
}

export function Header({
  onContactClick,
  variant = "transparent",
  activeNav,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isSolid = variant === "solid" || scrolled;

  useEffect(() => {
    if (variant === "solid") return;
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex shrink-0 items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent)] text-white font-bold text-sm">
            Q
          </div>
          <span
            className={`text-lg font-semibold transition-colors duration-300 ${
              isSolid ? "text-[var(--color-primary)]" : "text-white"
            }`}
          >
            QNSZ
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <NavLink href="/about" solid={isSolid} active={activeNav === "/about"}>
            关于
          </NavLink>
          <NavLink href="/download" solid={isSolid} active={activeNav === "/download"}>
            下载中心
          </NavLink>

          {/* Dropdown: 平台服务 */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((o) => !o)}
              className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isSolid
                  ? "text-[var(--color-text)] hover:bg-gray-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
              aria-expanded={dropdownOpen}
            >
              平台服务
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
                  className="absolute right-0 top-full mt-2 min-w-[200px] rounded-xl border border-gray-100 bg-white py-2 shadow-xl"
                >
                  {platformItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-[var(--color-accent)]"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[var(--color-accent)]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 关联产品 */}
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              isSolid
                ? "text-[var(--color-text)] hover:bg-gray-100"
                : "text-white/90 hover:text-white hover:bg-white/10"
            }`}
          >
            关联产品
            <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${
            isSolid ? "text-[var(--color-text)]" : "text-white"
          }`}
          aria-expanded={mobileOpen}
          aria-label="菜单"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-gray-100 bg-white md:hidden"
          >
            <div className="flex flex-col px-4 py-4">
              <MobileNavLink href="/about" onClick={closeMobile} active={activeNav === "/about"}>
                关于
              </MobileNavLink>
              <MobileNavLink href="/download" onClick={closeMobile} active={activeNav === "/download"}>
                下载中心
              </MobileNavLink>
              <div className="border-t border-gray-100 py-2">
                <p className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                  平台服务
                </p>
                {platformItems.map((item) => (
                  <MobileNavLink
                    key={item.href}
                    href={item.href}
                    onClick={closeMobile}
                  >
                    {item.label}
                  </MobileNavLink>
                ))}
              </div>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                onClick={closeMobile}
              >
                关联产品
                <svg className="h-3.5 w-3.5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  href,
  solid,
  active,
  children,
}: {
  href: string;
  solid: boolean;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        active
          ? solid
            ? "text-[var(--color-accent)] bg-blue-50"
            : "text-white bg-white/15"
          : solid
            ? "text-[var(--color-text)] hover:bg-gray-100"
            : "text-white/90 hover:text-white hover:bg-white/10"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  active,
  children,
}: {
  href: string;
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-lg px-4 py-3 text-sm transition-colors hover:bg-gray-50 ${
        active
          ? "font-semibold text-[var(--color-accent)] bg-blue-50"
          : "text-gray-700"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
