---
name: generate-website-js
description: 为 Next.js 官网生成客户端交互。使用 'use client'、React hooks（useState/useEffect/useCallback）、事件处理、表单与简单动画。在需要轮播、菜单、弹窗、表单校验等交互时使用。Trigger: 交互、轮播、动画、useState、useEffect、'use client'、客户端、点击、表单.
---

# Client 组件与 React 交互生成（Next.js）

在 Next.js 中生成需要交互的客户端逻辑：Client Component、React hooks、事件处理。

## 何时使用 Client Component

- 使用 `useState`、`useEffect`、`useContext` 等 hooks
- 使用浏览器事件：`onClick`、`onChange`、`onSubmit`
- 使用浏览器 API：`window`、`document`、`localStorage`
- 使用仅客户端的库（未做服务端兼容时）

在文件**顶部**写 `'use client'`，再写组件和 hooks。

```tsx
"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((c) => c + 1)}>
      点击 {count}
    </button>
  );
}
```

## 常用交互模式

### 轮播（Banner / 卡片）

```tsx
"use client";

import { useState, useCallback } from "react";

type Slide = { id: string; title: string; subtitle?: string };

export function SimpleCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const go = useCallback(
    (i: number) => setIndex((((i % slides.length) + slides.length) % slides.length)),
    [slides.length]
  );

  return (
    <section className="relative overflow-hidden">
      <div className="relative flex h-[70vh] w-full">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
            style={{
              opacity: i === index ? 1 : 0,
              pointerEvents: i === index ? "auto" : "none",
            }}
          >
            <div className="text-center">
              {s.subtitle && <p className="text-xl opacity-80">{s.subtitle}</p>}
              <h1 className="text-4xl font-bold md:text-6xl">{s.title}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 py-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-black" : "w-2 bg-gray-300"
            }`}
            aria-label={`切换到第 ${i + 1} 页`}
          />
        ))}
      </div>
    </section>
  );
}
```

### 移动端菜单（汉堡菜单）

```tsx
"use client";

import { useState } from "react";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
  { href: "/platform", label: "平台" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="md:hidden"
        aria-expanded={open}
        aria-label="菜单"
      >
        {/* 图标 */}
      </button>
      <nav
        className={`absolute top-full left-0 right-0 bg-white shadow-lg md:static md:flex md:shadow-none ${
          open ? "block" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block py-3 px-4"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
```

### 下拉菜单（导航）

```tsx
"use client";

import { useState, useRef, useEffect } from "react";

const items = [
  { href: "/platform/fusion", label: "融合通信" },
  { href: "/platform/meeting", label: "视频会议" },
];

export function DropdownNav({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1"
        aria-expanded={open}
      >
        {label}
      </button>
      {open && (
        <ul className="absolute top-full left-0 mt-1 min-w-[160px] rounded border bg-white py-2 shadow">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### 滚动动画（简单淡入）

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

export function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

### 表单与校验（简单示例）

```tsx
"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStatus("sending");
    try {
      // await submitToApi({ name, email });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="姓名"
        required
        className="w-full rounded border px-4 py-2"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="邮箱"
        required
        className="w-full rounded border px-4 py-2"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded bg-black px-6 py-2 text-white disabled:opacity-50"
      >
        {status === "sending" ? "提交中..." : "提交"}
      </button>
      {status === "done" && <p className="text-green-600">提交成功</p>}
      {status === "error" && <p className="text-red-600">提交失败，请重试</p>}
    </form>
  );
}
```

## 工具函数

### 防抖

```ts
export function debounce<T extends (...args: unknown[]) => void>(fn: T, ms: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };
}
```

### 节流（滚动等）

```ts
export function throttle<T extends (...args: unknown[]) => void>(fn: T, limit: number) {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

## 代码规范

1. **边界清晰**：仅在有交互的文件顶部加 `'use client'`，子组件可不再写
2. **类型**：为 props 和 state 写 TypeScript 类型
3. **无障碍**：按钮/链接加 `aria-label`，菜单用 `aria-expanded`
4. **清理**：在 `useEffect` 中注册的监听器在 return 中移除
5. **性能**：大列表或重计算用 `useMemo`/`useCallback`，按需使用

## 注意事项

1. **服务端不可用**：`'use client'` 组件中不要依赖 Node 或服务端 API 在模块顶层运行
2. **第三方库**：仅客户端库在 Client Component 中动态 import 或确保其支持 SSR
3. **表单提交**：可配合 Server Action（在服务端处理），减少客户端状态
4. **轮播/复杂动画**：可引入 Swiper、Framer Motion 等，按项目依赖添加

## 参考

- 需要交互的区块：在 `components/sections/` 或 `components/ui/` 下加 `'use client'` 组件
- 根 layout 中引入的 Header/Footer 若含交互，其对应文件需为 Client Component
