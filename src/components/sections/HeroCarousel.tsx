"use client";

import { useState, useCallback, useEffect } from "react";

export type HeroSlide = {
  id: string;
  /** 背景图 URL，放 public/images/；也可用视频 URL */
  backgroundImage?: string;
  /** 视频 URL（与 backgroundImage 二选一） */
  videoSrc?: string;
  subtitle: string;
  title: string[];
};

const defaultSlides: HeroSlide[] = [
  {
    id: "1",
    backgroundImage: "/images/index-banner.webp",
    subtitle: "无论身处何地",
    title: ["都能携手创造", "非凡"],
  },
  {
    id: "2",
    backgroundImage: "/images/platform-banner-bg.png",
    subtitle: "远程协作，随时连接",
    title: ["打破距离", "一起创造"],
  },
];

export function HeroCarousel({ slides = defaultSlides }: { slides?: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const go = useCallback(
    (i: number) => setIndex((((i % slides.length) + slides.length) % slides.length)),
    [slides.length]
  );

  useEffect(() => {
    const t = setInterval(() => go(index + 1), 5000);
    return () => clearInterval(t);
  }, [index, go]);

  const slide = slides[index];

  return (
    <section className="relative h-screen min-h-[480px] w-full overflow-hidden" aria-label="首屏轮播">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? "auto" : "none" }}
        >
          {/* 背景：优先视频，其次大图 */}
          {s.videoSrc ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={s.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
            />
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: s.backgroundImage
                  ? `url(${s.backgroundImage})`
                  : "linear-gradient(135deg, #1e3a5f 0%, #0f172a 50%, #1e293b 100%)",
              }}
            />
          )}
          <div className="absolute inset-0 bg-black/40" aria-hidden />
          <div className="relative flex h-full items-center justify-center px-4 text-center">
            <div>
              <p className="text-lg text-white/90 md:text-xl">{s.subtitle}</p>
              <h1 className="mt-3 text-4xl font-bold leading-tight text-white drop-shadow-md md:text-5xl lg:text-6xl">
                {s.title.map((line, j) => (
                  <span key={j} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </div>
          </div>
        </div>
      ))}

      {/* 底部小圆点切换 */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`切换到第 ${i + 1} 屏`}
          />
        ))}
      </div>
    </section>
  );
}
