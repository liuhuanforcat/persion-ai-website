---
name: generate-website-css
description: 为 Next.js 官网生成样式。使用 Tailwind CSS v4、CSS Modules、globals.css。在创建或修改页面/组件样式、响应式布局、主题变量时使用。Trigger: 样式、Tailwind、CSS、响应式、移动端、theme、globals.
---

# Tailwind / Next.js 样式生成

生成符合项目规范的 Next.js 官网样式，以 Tailwind CSS v4 为主，必要时配合 CSS Modules 或全局样式。

## 基本结构

### 全局样式（src/app/globals.css）

- 在根 layout 中已引入，用于：
  - Tailwind 指令：`@import "tailwindcss"`
  - 全局 CSS 变量（如主题色、字体）
  - 少量全局重置或工具类

```css
@import "tailwindcss";

:root {
  --color-primary: #000;
  --color-muted: #666;
  --container-max: 1280px;
}
```

### 组件内样式：优先 Tailwind

在 TSX 中直接写 Tailwind 类名，保持实用类优先、少写自定义 CSS。

```tsx
<section className="mx-auto max-w-7xl px-4 py-16">
  <h2 className="mb-8 text-center text-3xl font-semibold text-gray-900">
    区块标题
  </h2>
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {/* 卡片等 */}
  </div>
</section>
```

### 需要独立样式时：CSS Module

复杂或复用样式块可放在 `*.module.css`，在组件中按类名引用。

```tsx
// Component.tsx
import styles from "./Component.module.css";

export function Component() {
  return <div className={styles.wrapper}>...</div>;
}
```

```css
/* Component.module.css */
.wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
}
```

## Tailwind 常用模式

### 布局与容器

- 居中、最大宽度：`mx-auto max-w-7xl px-4` 或 `container mx-auto px-4`
- 间距：`py-16`、`gap-6`、`space-y-8`
- Flex：`flex`、`flex-col`、`items-center`、`justify-between`、`flex-wrap`
- Grid：`grid`、`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`、`gap-6`

### 文字

- 标题：`text-2xl md:text-4xl font-semibold text-gray-900`
- 正文：`text-base text-gray-600 leading-relaxed`
- 小字/辅助：`text-sm text-gray-500`

### 背景与边框

- 背景：`bg-white`、`bg-gray-50`、`bg-black`
- 圆角：`rounded`、`rounded-lg`、`rounded-full`
- 阴影：`shadow`、`shadow-md`、`hover:shadow-lg`

### Banner 全屏区块

```tsx
<section className="relative h-screen max-h-[1080px] w-full bg-cover bg-center bg-no-repeat">
  <div className="flex h-full items-center justify-center px-4">
    <div className="text-center text-white">
      <p className="text-xl opacity-90">副标题</p>
      <h1 className="mt-2 text-4xl font-bold md:text-6xl">主标题</h1>
    </div>
  </div>
</section>
```

### 卡片

```tsx
<article className="rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md">
  <img src="..." alt="..." className="mb-4 h-40 w-full rounded object-cover" />
  <h3 className="text-lg font-medium">标题</h3>
  <p className="mt-2 text-gray-600">描述</p>
</article>
```

### 图文混排

```tsx
<div className="flex flex-col gap-8 md:flex-row md:items-end">
  <img src="..." alt="..." className="max-w-full flex-1 rounded-lg object-cover md:max-w-xl" />
  <div className="flex-1">
    <div className="flex gap-4">
      <img src="..." alt="" className="h-12 w-12" />
      <p className="text-gray-700">...</p>
    </div>
  </div>
</div>
```

## 响应式设计

- 断点：`sm:`(640px)、`md:`(768px)、`lg:`(1024px)、`xl:`(1280px)
- 移动优先：先写默认（手机），再用断点覆盖（平板、桌面）

```tsx
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="text-2xl md:text-4xl lg:text-5xl">
<div className="px-4 py-8 md:px-8 md:py-16">
```

## 主题/变量（与 Tailwind 结合）

在 `globals.css` 中定义变量，在 Tailwind 或自定义类中使用：

```css
@import "tailwindcss";

:root {
  --color-primary: #0a0a0a;
  --color-surface: #fafafa;
  --radius: 0.5rem;
}
```

```tsx
<div className="rounded-[var(--radius)] bg-[var(--color-surface)]">
```

若项目配置了 Tailwind 的 theme 扩展，可优先使用 theme 中的颜色与间距。

## 动画与过渡

- 过渡：`transition`、`transition-colors`、`duration-300`
- 悬停：`hover:shadow-lg`、`hover:bg-gray-100`
- 简单动画可用 Tailwind：`animate-fade-in` 等（若在 tailwind.config 中已定义）

## 命名与规范

1. **优先 Tailwind**：能用实用类完成的不用自定义 CSS
2. **CSS Module**：类名用 kebab-case，如 `card-title`、`feature-list`
3. **全局变量**：颜色、间距等放在 `:root` 或 theme，保持统一
4. **响应式**：先移动端再断点增强，避免桌面优先
5. **可访问性**：保证对比度，焦点状态可用 `focus:ring`、`focus-visible:outline-none`

## 注意事项

1. 本项目使用 **Tailwind v4**，配置方式可能与 v3 不同，以 `postcss.config.mjs` 和 `globals.css` 为准
2. 图片背景可用 Tailwind：`bg-[url('/images/xxx')]` 或内联 style
3. 少写 !important，用提高选择器优先级或调整类顺序代替
4. 新页面/组件生成时，默认给容器加 `px-4` 或 `container` 避免贴边

## 参考

- 全局样式：`src/app/globals.css`
- 根布局：`src/app/layout.tsx`
- 首页：`src/app/page.tsx`
