"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const platformLinks = [
  { href: "/platform/fusion", label: "融合通信平台" },
  { href: "/platform/meeting", label: "视频会议平台" },
  { href: "/platform/talkback", label: "数字对讲平台" },
  { href: "/platform/emc", label: "应急指挥平台" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const isLight = !scrolled;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-18 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold">
            {isLight ? (
              <span className="text-white drop-shadow-md">全能数字</span>
            ) : (
              <span className="text-gray-900">全能数字</span>
            )}
          </span>
        </Link>

        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:opacity-80 ${isLight ? "text-white" : "text-gray-700"
              }`}
          >
            关于
          </Link>
          <Link
            href="/download"
            className={`text-sm font-medium transition-colors hover:opacity-80 ${isLight ? "text-white" : "text-gray-700"
              }`}
          >
            下载中心
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((o) => !o)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80 ${isLight ? "text-white" : "text-gray-700"
                }`}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-1 min-w-[180px] rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                {platformLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a
            href="https://www.enheylig.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-medium transition-colors hover:opacity-80 ${isLight ? "text-white" : "text-gray-700"
              }`}
          >
            Enheylig
          </a>
        </nav>
      </div>
    </header>
  );
}
