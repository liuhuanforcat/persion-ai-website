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

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-black/70 backdrop-blur transition-all duration-300 ${scrolled ? "shadow-md" : ""
        }`}
    >
      <div className="mx-auto flex h-13 max-w-7xl items-center justify-between px-4 md:h-13 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="全能数字" className="w-28 h-6" />
        </Link>

        <nav className="flex items-center gap-10 md:gap-20">
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
      </div>
    </header>
  );
}
