"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

type Slide = {
  id: string;
  subtitle: string;
  title: string[];
  bgColor?: string;
};

const defaultSlides: Slide[] = [
  {
    id: "1",
    subtitle: "连接 · 协作 · 创新",
    title: ["重新定义", "企业通信体验"],
    bgColor: "from-[#0a1628] via-[#0d2137] to-[#061220]",
  },
  {
    id: "2",
    subtitle: "安全可靠 · 高效智能",
    title: ["融合通信", "赋能千行百业"],
    bgColor: "from-[#0d1b2a] via-[#1b2838] to-[#0a1520]",
  },
  {
    id: "3",
    subtitle: "自主可控 · 国产替代",
    title: ["打造新一代", "智慧通信平台"],
    bgColor: "from-[#10182a] via-[#152035] to-[#0b1320]",
  },
];

export function BannerCarousel({ slides = defaultSlides }: { slides?: Slide[] }) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen max-h-[900px] min-h-[600px] w-full overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 ease-in-out ${slide.bgColor}`}
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="animate-float absolute -left-10 bottom-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative flex h-full items-center justify-center px-4">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
            style={{
              opacity: i === index ? 1 : 0,
              pointerEvents: i === index ? "auto" : "none",
            }}
          >
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: i === index ? 1 : 0, y: i === index ? 0 : 20 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0, 0, 0.2, 1] }}
                className="mb-6 text-base tracking-[0.2em] text-blue-300/80 md:text-lg"
              >
                {slide.subtitle}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: i === index ? 1 : 0, y: i === index ? 0 : 48 }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0, 0, 0.2, 1] }}
                className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
              >
                {slide.title.map((line, j) => (
                  <motion.span
                    key={j}
                    className="block"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{
                      opacity: i === index ? 1 : 0,
                      y: i === index ? 0 : 28,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.4 + j * 0.15,
                      ease: [0, 0, 0.2, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-10 bg-white"
                : "w-3 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`切换到第 ${i + 1} 页`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-white/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
}
