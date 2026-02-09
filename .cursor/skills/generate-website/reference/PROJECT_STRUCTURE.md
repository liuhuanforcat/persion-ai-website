# Next.js 项目结构参考

## 目录结构

```
qnsz-website/
├── .cursor/
│   └── skills/
│       └── generate-website/   # 本技能集
├── public/                     # 静态资源（根路径 /）
│   ├── images/                 # 图片
│   │   ├── logo.png
│   │   ├── favicon.ico
│   │   └── ...
│   └── ...
├── src/
│   ├── app/                    # App Router
│   │   ├── layout.tsx          # 根布局（全局 HTML、字体、Provider）
│   │   ├── page.tsx            # 首页 /
│   │   ├── globals.css         # 全局样式（Tailwind 等）
│   │   ├── favicon.ico         # 可选：应用 favicon
│   │   ├── about/              # 关于页 /about
│   │   │   └── page.tsx
│   │   ├── download/           # 下载页 /download
│   │   │   └── page.tsx
│   │   ├── platform/           # 平台相关
│   │   │   ├── layout.tsx      # 可选：平台段布局
│   │   │   ├── fusion/         # 融合通信 /platform/fusion
│   │   │   │   └── page.tsx
│   │   │   └── [slug]/         # 可选：动态路由 /platform/[slug]
│   │   │       └── page.tsx
│   │   └── not-found.tsx       # 404
│   └── components/             # 共享组件
│       ├── layout/             # Header、Footer、MobileNav
│       │   ├── Header.tsx
│       │   ├── Footer.tsx
│       │   └── MobileNav.tsx
│       ├── ui/                 # 通用 UI（按钮、卡片、轮播等）
│       │   └── ...
│       └── sections/           # 页面区块（Banner、FeatureCards 等）
│           └── ...
├── next.config.ts              # Next.js 配置
├── tailwind.config.ts          # 可选：Tailwind 扩展
├── postcss.config.mjs          # PostCSS（Tailwind v4）
├── tsconfig.json
├── package.json
└── README.md
```

## 文件命名与约定

### 路由（app/）

- 每个可访问路径对应一个目录下的 `page.tsx`
- 路由名：小写、短横线，如 `about`、`platform`、`platform/fusion`
- 动态路由：`[slug]`、`[id]` 等

### 组件（components/）

- 文件名：PascalCase，如 `Header.tsx`、`BannerCarousel.tsx`
- 默认 Server Component；需要交互时在文件顶部加 `'use client'`

### 样式

- 全局：`src/app/globals.css`
- 组件级：Tailwind 类名为主；复杂样式可用 `ComponentName.module.css`

### 静态资源

- 放在 `public/`，引用路径以 `/` 开头，如 `/images/logo.png`

## 页面类型示例

### 首页 (/)

- **文件**：`src/app/page.tsx`
- **内容**：Banner、核心价值、产品特性、解决方案入口等区块，可拆到 `components/sections/`

### 关于页 (/about)

- **文件**：`src/app/about/page.tsx`
- **内容**：Banner 标题、公司介绍、里程碑、联系方式等

### 下载页 (/download)

- **文件**：`src/app/download/page.tsx`
- **内容**：下载列表、版本说明、下载链接

### 平台页 (/platform/fusion 等)

- **文件**：`src/app/platform/fusion/page.tsx` 或 `src/app/platform/[slug]/page.tsx`
- **内容**：Banner、优势、功能列表、应用场景等

## 技术栈

- **框架**：Next.js 16（App Router）
- **UI**：React 19、TypeScript
- **样式**：Tailwind CSS v4（PostCSS）
- **交互**：React hooks、Client Components（`'use client'`）

## 常用命令

```bash
# 开发
yarn dev    # 或 npm run dev

# 构建
yarn build  # 或 npm run build

# 生产运行
yarn start  # 或 npm run start
```

## 元数据与 SEO

在 `layout.tsx` 或 `page.tsx` 中导出：

```ts
export const metadata = {
  title: "页面标题",
  description: "页面描述",
  openGraph: { images: ["/images/og.png"] },
};
```

## 注意事项

1. **默认服务端**：不写 `'use client'` 的组件为 Server Component
2. **客户端边界**：仅在有状态、事件、浏览器 API 的组件上加 `'use client'`
3. **图片**：优先使用 `next/image`，静态资源放 `public/`
4. **类型**：为 props 和页面/API 数据使用 TypeScript 类型
