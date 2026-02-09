# Next.js 官网生成 Skill 使用指南

## 概述

这是一套为 **Next.js 官网项目**定制的 Cursor Skill 技能集，可根据产品描述自动生成符合项目规范的页面与组件（App Router、React、TypeScript、Tailwind）。

## Skill 结构

```
generate-website/
├── SKILL.md                    # 主技能：整体生成流程
├── html-structure/
│   └── SKILL.md                # React 组件与页面结构
├── css-styling/
│   └── SKILL.md                # Tailwind / 样式生成
├── js-interaction/
│   └── SKILL.md                # Client 组件与交互（hooks、事件）
├── reference/
│   └── PROJECT_STRUCTURE.md    # Next.js 项目结构参考
└── README.md                    # 本文件
```

## 使用方法

### 方式一：直接描述需求

直接向 Cursor 描述产品需求，例如：

```
根据以下产品描述生成官网页面：
- 产品名称：智能会议系统
- 主要功能：视频会议、屏幕共享、录制回放
- 目标用户：企业用户
- 页面类型：平台详情页
```

Cursor 会按 Next.js 规范生成对应路由、页面组件和样式。

### 方式二：明确指定使用技能

也可以明确说明使用本技能：

```
使用 generate-website skill 生成一个关于「在线教育平台」的官网首页
```

## 技能说明

### 1. 主技能 (generate-website)

**触发场景**：
- 需要创建新的官网页面
- 需要根据产品描述生成整页或区块
- 需要添加/调整页面内容

**功能**：
- 分析产品需求与页面类型
- 协调子技能（结构、样式、交互）
- 校验路由与文件结构

### 2. React 组件与页面结构 (html-structure)

**触发场景**：
- 需要创建或修改页面（`page.tsx`）
- 需要新增布局或可复用组件
- 需要调整页面区块与组件划分

**功能**：
- 生成 App Router 下的 `page.tsx`、`layout.tsx`
- 提供 Banner、卡片、列表等组件结构示例
- 保持 TypeScript 与语义化

### 3. Tailwind / 样式 (css-styling)

**触发场景**：
- 需要为页面或组件写样式
- 需要响应式布局或主题变量
- 需要统一视觉风格

**功能**：
- 以 Tailwind 类名为主生成样式
- 必要时使用 CSS Module 或 `globals.css`
- 遵循项目现有样式约定

### 4. Client 组件与交互 (js-interaction)

**触发场景**：
- 需要轮播、菜单、表单等交互
- 需要 `useState`、`useEffect` 等 hooks
- 需要事件处理或客户端逻辑

**功能**：
- 生成带 `'use client'` 的组件
- 提供轮播、下拉菜单、滚动动画、表单等示例
- 遵循 React 与无障碍基本规范

## 使用示例

### 示例1：生成首页

```
用户：根据以下内容生成官网首页：
- 公司名称：全能数字
- 核心价值：沟通、教育、娱乐
- 产品特点：超低延时、8K 画质、智能体验
- 需要轮播 Banner

Cursor 会：
1. 在 src/app/page.tsx 中组织首页结构
2. 在 src/components/sections/ 下添加 Banner、价值展示等组件
3. 使用 Tailwind 写样式，轮播使用 Client Component
4. 保持与现有 layout、globals 一致
```

### 示例2：生成平台详情页

```
用户：创建一个「融合通信平台」的详情页，包含：
- Banner 标题
- 平台优势介绍
- 5 个功能特性
- 3 个应用场景

Cursor 会：
1. 创建 src/app/platform/fusion/page.tsx（或相应路由）
2. 在 components/sections/ 中抽取可复用区块
3. 使用 Tailwind 做布局与响应式
4. 如需交互再使用 Client 组件
```

### 示例3：修改现有页面

```
用户：在首页增加一个「客户案例」区块，3 个卡片，带图片和标题

Cursor 会：
1. 在 src/app/page.tsx 中引入新区块组件
2. 新增组件（如 ClientCaseCards）并写 Tailwind 样式
3. 保持现有代码风格与类型定义
```

## 最佳实践

1. **描述尽量具体**：产品描述越清晰，生成的页面越贴需求
2. **明确页面类型**：说明是首页、关于页、平台页等，便于选路由和布局
3. **说明交互需求**：是否需要轮播、菜单、表单等，便于决定是否用 Client Component
4. **生成后检查**：确认路由、组件位置、类型和样式是否符合预期
5. **迭代优化**：在生成结果基础上再补充或调整

## 注意事项

1. **路由**：新页面在 `app/` 下新建目录并添加 `page.tsx`
2. **组件位置**：共享组件放 `components/`，按 layout / ui / sections 分类
3. **样式**：优先 Tailwind，少写自定义 CSS
4. **服务端/客户端**：默认 Server Component，仅在有交互时使用 `'use client'`
5. **类型**：为 props 和数据结构补充 TypeScript 类型

## 故障排除

### Skill 没有被触发

- 在描述中带上「生成官网」「创建页面」「Next.js 页面」等关键词
- 或直接说「使用 generate-website skill」

### 生成的文件不符合预期

- 查看 `reference/PROJECT_STRUCTURE.md` 确认目录与命名
- 参考现有 `src/app/`、`src/components/` 的写法
- 要求 Cursor 参考现有代码风格再生成

### 缺少交互或样式

- 明确说明需要哪些交互（轮播、菜单、表单等）
- 说明是否需要响应式或特定风格
- 要求按子技能（js-interaction / css-styling）补充

## 更新日志

- **v2.0.0** (2026-02-09)：改为 Next.js 技能集（App Router、React 19、TypeScript、Tailwind v4）
- **v1.0.0**：初始版本（原 Gulp/HTML/CSS/JS 官网生成）

## 反馈

若发现 skill 有误或需要扩展，可：
1. 对照实际项目结构检查 skill 描述
2. 参考现有页面与组件的实现
3. 更新对应 SKILL.md 或本 README
