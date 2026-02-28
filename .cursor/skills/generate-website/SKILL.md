---
name: generate-website
description: 根据产品描述生成 Next.js 官网页面（App Router / React / TypeScript / Tailwind）。在用户需要创建新页面、按产品需求生成官网、或添加首页/详情页/平台页内容时使用。遵循本项目 Next.js 16、React 19、Tailwind v4 结构。Trigger: 官网、首页、详情页、平台页、生成页面、产品描述、新建页面、Next.js 页面。
---

# Next.js 官网页面生成

根据产品描述生成符合项目规范的 Next.js 官网页面，包括页面路由、React 组件、样式与客户端交互。

## 快速开始

当收到产品描述时，按以下步骤生成页面：

1. **分析需求**：理解产品描述，确定页面类型（首页、详情页、平台页等）
2. **生成页面与组件结构**：使用 [React 组件与页面结构技能](html-structure/SKILL.md)
3. **生成样式**：使用 [Tailwind/样式生成技能](css-styling/SKILL.md)
4. **生成客户端交互**：使用 [Client 组件与交互技能](js-interaction/SKILL.md)；若需动效或 3D，使用 [动画与 3D 技能](animation-3d/SKILL.md)
5. **验证结构**：确保路由、引用与类型正确

## 项目结构规范

### 文件组织（App Router）

```
src/
├── app/                    # App Router
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 首页
│   ├── globals.css         # 全局样式
│   ├── [segment]/          # 路由段（如 about、platform）
│   │   ├── page.tsx        # 页面组件
│   │   └── layout.tsx      # 可选：段布局
│   └── not-found.tsx       # 404
├── components/             # 共享组件
│   ├── layout/             # Header、Footer 等
│   ├── ui/                 # 通用 UI 组件
│   └── sections/           # 页面区块（Banner、卡片列表等）
└── public/                 # 静态资源（图片、favicon 等）
```

### 命名规范

- **路由**：小写、短横线，如 `about`、`download`、`platform/fusion`
- **组件文件**：PascalCase，如 `BannerCarousel.tsx`、`FeatureCard.tsx`
- **样式**：Tailwind 优先；需独立样式时用 CSS Module（`*.module.css`）
- **图片**：放 `public/`，引用路径如 `/images/logo.png`

## 页面类型

### 1. 首页 (/)
- 包含：轮播 Banner、核心价值、产品特性、解决方案入口
- 文件：`src/app/page.tsx`，可拆分为 `components/sections/*`

### 2. 详情页 (/about、/download)
- 包含：Banner、内容区块、列表
- 文件：`src/app/about/page.tsx` 等

### 3. 平台页 (/platform/[slug] 或 /platform/fusion)
- 包含：Banner、优势介绍、功能列表、应用场景
- 文件：`src/app/platform/fusion/page.tsx` 或动态路由

## 生成流程

### 步骤1：页面与组件结构
调用 React 组件与页面结构技能，提供：
- 页面类型与路由
- 内容描述
- 需要的组件（Banner、卡片、列表等）

### 步骤2：样式
调用 Tailwind/样式技能，提供：
- 对应组件或页面
- 设计/响应式要求

### 步骤3：客户端交互
需要交互时调用 Client 组件与交互技能，提供：
- 交互类型（轮播、动画、菜单、表单等）
- 是否使用 `'use client'` 及 hooks
- 若需求含**动画、3D、视差、Lottie**，同时参考 [动画与 3D 技能](animation-3d/SKILL.md) 做选型与实现

### 步骤4：检查
- 路由与 `layout` 正确
- 图片/资源使用 `/` 开头的 public 路径
- 服务端/客户端边界清晰（默认 Server Component）

## 公共组件

### Layout
- 根布局：`src/app/layout.tsx`（全局 HTML、字体、Footer）
- Header/Footer：放在 `src/components/layout/`，在 layout 或页面中引用

### 技术栈

- **框架**：Next.js 16（App Router）
- **UI**：React 19、TypeScript
- **样式**：Tailwind CSS v4
- **交互**：React hooks、Client Components（`'use client'`）
- **资源**：静态文件放在 `public/`

## 注意事项

1. **默认 Server Component**：无交互的页面与组件不加 `'use client'`
2. **客户端边界**：仅在有 useState、useEffect、事件等时使用 Client Component
3. **Tailwind**：优先用 Tailwind 类名，少写自定义 CSS
4. **类型**：组件 props 与数据使用 TypeScript 类型/接口
5. **路由**：按 App Router 约定组织 `app/` 下目录与 `page.tsx`

## 参考资源

- [项目结构参考](reference/PROJECT_STRUCTURE.md)
- [React 组件与页面结构](html-structure/SKILL.md)
- [Tailwind/样式生成](css-styling/SKILL.md)
- [Client 组件与交互](js-interaction/SKILL.md)
- [官网动画与 3D 效果](animation-3d/SKILL.md)
