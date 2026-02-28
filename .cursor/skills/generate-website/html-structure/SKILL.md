---
name: generate-website-html
description: 生成 Next.js 官网的 React 页面与组件结构。根据产品描述创建符合 App Router 的 page.tsx、layout、以及可复用组件（TSX/JSX）。当需要创建新页面、新路由或修改页面结构时使用。
---

# React 组件与页面结构生成（Next.js）

生成符合 Next.js App Router 规范的页面与 React 组件结构（TypeScript/JSX）。

## 基本约定

- 使用 **App Router**：每个路由对应 `app/` 下目录中的 `page.tsx`
- 组件优先 **Server Component**，需要交互时再使用 `'use client'`
- 使用 **TypeScript**：为 props 和数据结构定义类型或接口
- 语义化：合理使用 `<header>`、`<main>`、`<footer>`、`<section>` 等

## 页面模板

### 普通页面（page.tsx）

```tsx
// src/app/about/page.tsx
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "关于我们",
  description: "公司介绍与联系方式",
  openGraph: { images: ["/images/og-about.png"] },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* 页面内容区块 */}
      </main>
      <Footer />
    </>
  );
}
```

### 带布局的段（layout.tsx）

```tsx
// src/app/platform/layout.tsx
export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="platform-layout">
      {children}
    </div>
  );
}
```

### 动态路由（可选）

```tsx
// src/app/platform/[slug]/page.tsx
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export default async function PlatformPage({ params }: Props) {
  const { slug } = await params;
  // 根据 slug 取数据，不存在则 notFound()
  return (
    <>
      <Header />
      <main>{/* 内容 */}</main>
      <Footer />
    </>
  );
}
```

## 常用组件结构

### Banner 轮播（需客户端时用 Client Component）

```tsx
// components/sections/BannerCarousel.tsx
"use client";

import Image from "next/image";

type Slide = { subtitle: string; title: string[]; image?: string };

export function BannerCarousel({ slides }: { slides: Slide[] }) {
  return (
    <section className="relative h-screen max-h-[1080px] w-full overflow-hidden">
      <div className="relative flex h-full w-full">
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl opacity-80">{slide.subtitle}</p>
              <h1 className="text-5xl font-semibold md:text-7xl">
                {slide.title.map((line, j) => (
                  <span key={j} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

### 卡片列表（可纯服务端）

```tsx
// components/sections/FeatureCards.tsx
type Card = {
  image: string;
  icon?: string;
  title: string;
  description: string;
};

export function FeatureCards({
  title,
  cards,
}: {
  title: string;
  cards: Card[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl">
        {title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <article
            key={i}
            className="rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            {card.image && (
              <img
                src={card.image}
                alt={card.title}
                className="mb-4 h-40 w-full rounded object-cover"
              />
            )}
            <div className="flex items-center gap-2">
              {card.icon && (
                <img src={card.icon} alt="" className="h-6 w-6" />
              )}
              <h3 className="text-lg font-medium">{card.title}</h3>
            </div>
            <p className="mt-2 text-gray-600">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
```

### 图文混排区块

```tsx
export function ImageTextBlock({
  title,
  image,
  imageAlt,
  children,
}: {
  title: string;
  image: string;
  imageAlt: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-semibold">{title}</h2>
      <div className="flex flex-col items-end gap-8 md:flex-row">
        <img
          src={image}
          alt={imageAlt}
          className="max-w-full flex-1 rounded-lg object-cover md:max-w-xl"
        />
        <div className="flex-1">{children}</div>
      </div>
    </section>
  );
}
```

### 功能列表

```tsx
type Feature = { icon: string; title: string; desc: string };

export function FeatureList({ features }: { features: Feature[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => (
        <li key={i} className="flex gap-4">
          <img src={f.icon} alt="" className="h-10 w-10 shrink-0" />
          <div>
            <h3 className="font-medium">{f.title}</h3>
            <p className="mt-1 text-gray-600">{f.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
```

## 布局容器

- 使用 Tailwind 做布局：`container`、`mx-auto`、`max-w-7xl`、`px-4`、`py-16` 等
- 区块用 `<section>`，标题用 `<h2>`/`<h3>`，保持层级清晰

## 图片与资源

- 静态资源放在 `public/`，引用以 `/` 开头：`/images/logo.png`
- 优先使用 `next/image`：`<Image src="/images/xxx" width={...} height={...} alt="..." />`
- 所有图片必须有有意义的 `alt`

## 元数据（SEO）

在页面或 layout 中导出 `metadata`：

```tsx
export const metadata: Metadata = {
  title: "页面标题",
  description: "页面描述",
  openGraph: { title: "...", images: ["/images/og.png"] },
};
```

## 注意事项

1. **文件位置**：页面放在 `app/[route]/page.tsx`，共享组件放在 `components/`
2. **命名**：组件 PascalCase，文件与组件同名（如 `BannerCarousel.tsx`）
3. **类型**：为 props 和页面数据定义 TypeScript 类型
4. **服务端优先**：仅在有事件、useState、useEffect 等时加 `'use client'`
5. **路由**：新建页面时在 `app/` 下新建目录并添加 `page.tsx`

## 参考示例

- 首页：`src/app/page.tsx`
- 根布局：`src/app/layout.tsx`
- 关于/平台等：`src/app/about/page.tsx`、`src/app/platform/.../page.tsx`
- 组件：`src/components/layout/`、`src/components/sections/`
