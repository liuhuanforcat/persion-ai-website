---
name: website-animation-3d
description: 为官方网站添加动画与 3D 效果（入场动效、滚动动画、微交互、Three.js/React Three Fiber、Lottie）。在用户要求官网动效、3D 展示、滚动视差、或提升页面视觉表现时使用。Trigger: 动画、动效、3D、视差、滚动动画、入场动画、Framer Motion、Three.js、Lottie、微交互。
---
# 官网动画与 3D 效果

为 Next.js 官网提供动画与 3D 实现指引：优先性能与可访问性，按场景选择 CSS、Framer Motion、React Three Fiber 或 Lottie。

## 何时使用本技能

- 用户明确要求「加动画」「3D 效果」「滚动动效」「视差」
- 产品需求中出现「动效」「微交互」「科技感」「3D 展示」
- 在已有页面上增强视觉表现（Banner、卡片、数字滚动等）
- 新建组件或页面区块时，自动参照本技能中的元素动画标准

## 技术选型原则

| 场景                      | 推荐方案                                 | 说明                     |
| ------------------------- | ---------------------------------------- | ------------------------ |
| 简单入场/悬停/过渡        | CSS (transition + transform) 或 Tailwind | 零依赖，首屏友好         |
| 序列动画、手势、布局动画  | Framer Motion                            | React 生态，API 简洁     |
| 3D 场景、模型、粒子、背景 | React Three Fiber (R3F) + drei           | 与 React 集成好          |
| 设计稿动效还原 (AE 导出)  | Lottie (lottie-react)                    | JSON 动画，体积可控      |
| 复杂时间轴、滚动驱动      | GSAP + ScrollTrigger                     | 可选，仅在确有需求时引入 |

**默认优先**：能用 CSS/Tailwind 实现的先用 CSS；需要声明式、编排多元素时用 Framer Motion；需要真实 3D 再上 R3F。

## 项目约定

- 动画组件若依赖浏览器 API（如 `window`、事件）或第三方动画库，需加 `"use client"`。
- 动画相关组件放在 `src/components/ui/`（通用）或 `src/components/sections/`（区块级）。
- 3D 或 Lottie 建议动态导入或放首屏外，避免阻塞 LCP。

```tsx
// 示例：动态导入 3D 区块，减少首屏 bundle
const Hero3D = dynamic(() => import("@/components/sections/Hero3D"), { ssr: false });
```

---

## 动画设计令牌（Design Tokens）

所有动画必须基于统一的设计令牌，确保全站动效一致。

### 时长（Duration）

| 令牌名          | 值      | 适用场景                         |
| --------------- | ------- | -------------------------------- |
| `fast`          | 0.2s    | 微交互：按钮悬停、图标状态切换   |
| `normal`        | 0.35s   | 常规过渡：颜色变化、透明度切换   |
| `medium`        | 0.5s    | 中等动效：卡片入场、下拉展开     |
| `slow`          | 0.7s    | 主体入场：标题、大区块滚动入场   |
| `hero`          | 0.85s   | 首屏/强调元素：Hero 标题、主视觉 |

### 缓动函数（Easing）

| 令牌名          | 值                          | 适用场景                 |
| --------------- | --------------------------- | ------------------------ |
| `easeOut`       | `[0, 0, 0.2, 1]`           | 入场动画（元素进入视口） |
| `easeInOut`     | `[0.4, 0, 0.2, 1]`         | 状态切换、布局变化       |
| `spring`        | `{ type: "spring", damping: 20, stiffness: 300 }` | 弹性交互（拖拽、弹回） |
| `gentle`        | `{ type: "spring", damping: 30, stiffness: 200 }` | 柔和弹性（卡片悬浮）   |

### 延迟与错峰（Delay & Stagger）

| 令牌名            | 值      | 适用场景                         |
| ----------------- | ------- | -------------------------------- |
| `staggerChildren` | 0.12s   | 列表/网格子元素错峰入场          |
| `staggerCards`    | 0.18s   | 卡片组错峰入场                   |
| `titleDelay`      | 0.1s    | 区块标题与副标题之间的延迟       |
| `contentDelay`    | 0.25s   | 标题之后内容区的延迟             |

### 位移量（Offset）

| 令牌名            | 值    | 适用场景                     |
| ----------------- | ----- | ---------------------------- |
| `offsetSmall`     | 16px  | 小元素入场（标签、徽章）     |
| `offsetMedium`    | 36px  | 中等元素入场（段落、描述）   |
| `offsetLarge`     | 48px  | 大元素入场（标题、卡片）     |
| `offsetHero`      | 64px  | 首屏主元素入场               |

### 视口触发设置

| 设置               | 值                   | 说明                         |
| ------------------ | -------------------- | ---------------------------- |
| `once`             | `true`               | 仅触发一次，不反复播放       |
| `margin` (默认)    | `"-60px"`            | 元素进入视口前 60px 触发     |
| `margin` (首屏)    | `"0px"`              | 首屏元素立即触发             |
| `margin` (延迟触发)| `"-120px"`           | 需要更晚触发的深层内容       |

---

## 元素动画标准

以下为各类 UI 元素的标准动画规范，新建或修改组件时 **必须** 参照执行。

### 一、文字动画标准

#### 1.1 区块主标题（h2）

滚动入场，从下方滑入并淡入。

```tsx
<motion.h2
  initial={{ opacity: 0, y: 44 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.85, ease: [0, 0, 0.2, 1] }}
>
```

**规范要点**：
- 位移量：`y: 44`（大标题用较大偏移，彰显层次感）
- 时长：`0.85s`（hero 级别）
- 缓动：`easeOut`
- 触发：`whileInView`，`once: true`

#### 1.2 区块副标题 / 描述文字（p）

紧随标题入场，延迟 0.15s，位移略小。

```tsx
<motion.p
  initial={{ opacity: 0, y: 36 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.85, delay: 0.15, ease: [0, 0, 0.2, 1] }}
>
```

**规范要点**：
- 位移量：`y: 36`（比标题小，形成视觉层次）
- 延迟：`0.15s`（在标题之后出现）
- 时长：与标题保持一致 `0.85s`

#### 1.3 Hero 首屏标题（逐行错峰）

首屏标题需要更强的存在感，采用逐行错峰入场。

```tsx
// 标题容器
<motion.div
  initial={{ opacity: 0, y: 48 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.85, delay: 0.2, ease: [0, 0, 0.2, 1] }}
>
  {/* 逐行标题 */}
  {titleLines.map((line, i) => (
    <motion.span
      key={i}
      className="block"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.4 + i * 0.15,
        ease: [0, 0, 0.2, 1],
      }}
    >
      {line}
    </motion.span>
  ))}
</motion.div>
```

**规范要点**：
- 容器先入场（`delay: 0.2s`），子行再依次入场（`delay: 0.4 + i * 0.15`）
- 行间错峰间隔：`0.15s`
- 注意首屏使用 `animate` 而非 `whileInView`（首屏无需滚动触发）

#### 1.4 标签 / 徽章（小文字元素）

小型文字元素使用较小位移和较快速度。

```tsx
<motion.span
  initial={{ opacity: 0, y: 12, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, margin: "-40px" }}
  transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
>
```

**规范要点**：
- 位移量：`y: 12`（小元素轻量入场）
- 附带微缩放：`scale: 0.95 → 1`（增加精致感）
- 时长：`0.5s`（medium 级别）

#### 1.5 数字滚动 / 数据展示

用于统计数字、关键指标等需要强调的数值。

```tsx
"use client";
import { useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration });
    }
  }, [isInView, motionValue, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
```

---

### 二、图片动画标准

#### 2.1 通用图片入场（滚动触发淡入）

所有内容图片在进入视口时应有淡入效果，避免突兀出现。

```tsx
<motion.div
  initial={{ opacity: 0, y: 32, scale: 0.97 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
>
  <Image src="..." alt="..." ... />
</motion.div>
```

**规范要点**：
- 用 `motion.div` 包裹 `<Image>`（不直接包裹 Next.js Image 组件以避免兼容问题）
- 微缩放：`scale: 0.97 → 1`（图片缩放更自然）
- 位移：`y: 32`
- 视口 margin：`"-80px"`（图片较大，提前触发避免空白）

#### 2.2 Hero 背景图 / 轮播图切换

轮播/背景图使用纯 CSS 淡入切换，避免 Framer Motion 开销。

```tsx
<div
  className="absolute inset-0 transition-opacity duration-500 ease-in-out"
  style={{ opacity: isActive ? 1 : 0 }}
>
  <Image src="..." alt="..." fill className="object-cover" priority />
</div>
```

**规范要点**：
- 使用 CSS `transition-opacity`（性能优先，仅操作合成层属性）
- `duration-500`（0.5s 是轮播切换的最佳时长）
- 首屏图片加 `priority` 预加载

#### 2.3 图片悬停效果

产品图、案例图等可交互图片的悬停效果。

```tsx
<motion.div
  className="overflow-hidden rounded-xl"
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
>
  <Image
    src="..."
    alt="..."
    className="transition-transform duration-500 hover:scale-110"
  />
</motion.div>
```

**规范要点**：
- 容器微缩放：`scale: 1.02`（外框微动）
- 内部图片放大：`hover:scale-110`（图片放大产生视差效果）
- 容器需 `overflow-hidden` 防止溢出
- 外层缓动 `easeInOut`，内层用 CSS `transition-transform`

#### 2.4 图片懒加载淡入

图片加载完成后的淡入效果（配合 `ImageWithFallback` 组件使用）。

```tsx
const [loaded, setLoaded] = useState(false);

<div className="relative overflow-hidden">
  <Image
    src="..."
    alt="..."
    className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
    onLoad={() => setLoaded(true)}
  />
  {/* 骨架屏/占位 */}
  {!loaded && (
    <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg" />
  )}
</div>
```

**规范要点**：
- 使用 CSS `transition-opacity`（纯合成层动画）
- 配合骨架屏 `animate-pulse` 提供加载反馈
- 加载完成后淡入，时长 `0.5s`

#### 2.5 图片从侧面滑入

左右布局中图片从侧面滑入，增强叙事感。

```tsx
// 从左侧滑入
<motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.85, ease: [0, 0, 0.2, 1] }}
>
  <Image src="..." alt="..." ... />
</motion.div>

// 从右侧滑入
<motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.85, ease: [0, 0, 0.2, 1] }}
>
  <Image src="..." alt="..." ... />
</motion.div>
```

---

### 三、卡片动画标准

#### 3.1 卡片列表错峰入场

多卡片布局使用容器编排 + 子元素错峰。

```tsx
// 容器 variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

// 卡片 variants
const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0, 0, 0.2, 1] },
  },
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-60px" }}
  className="grid grid-cols-3 gap-6"
>
  {cards.map((card) => (
    <motion.article key={card.id} variants={cardVariants}>
      {/* 卡片内容 */}
    </motion.article>
  ))}
</motion.div>
```

**规范要点**：
- 使用 `variants` + `staggerChildren` 实现编排（比手动 `delay: i * 0.18` 更优雅）
- 错峰间隔：`0.18s`
- 子卡片时长：`0.75s`
- 位移：`y: 48`

#### 3.2 卡片悬停效果

```tsx
<motion.article
  whileHover={{ y: -10 }}
  transition={{ type: "spring", damping: 20, stiffness: 300 }}
  className="transition-shadow duration-300 hover:shadow-lg"
>
```

**规范要点**：
- 上浮：`y: -10`（不宜过大，8–12px 为佳）
- 使用 `spring` 缓动（弹性回弹更自然）
- 阴影变化用 CSS `transition-shadow`（与 Framer Motion 分工）
- 不要同时用 Framer Motion 和 CSS 控制同一属性

---

### 四、按钮 / CTA 动画标准

#### 4.1 按钮悬停与点击

```tsx
<motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", damping: 20, stiffness: 300 }}
  className="transition-colors duration-200"
>
  立即咨询
</motion.button>
```

**规范要点**：
- 悬停缩放：`scale: 1.03`（微妙而不夸张）
- 点击缩放：`scale: 0.97`（按压反馈）
- 颜色变化：CSS `transition-colors duration-200`
- 缓动：`spring`（按钮交互需要即时弹性反馈）

#### 4.2 CTA 区块入场

CTA 按钮组在区块入场时应跟随内容延迟出现。

```tsx
<motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.7, delay: 0.3, ease: [0, 0, 0.2, 1] }}
  className="flex gap-4"
>
  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
    主要操作
  </motion.button>
  <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
    次要操作
  </motion.a>
</motion.div>
```

**规范要点**：
- 延迟：`0.3s`（在标题和描述之后出现）
- 按钮组作为整体入场，内部按钮各自有悬停/点击效果

---

### 五、图标 / 装饰元素动画标准

#### 5.1 图标入场

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
  viewport={{ once: true }}
  transition={{ type: "spring", damping: 15, stiffness: 200 }}
>
  <IconComponent />
</motion.div>
```

**规范要点**：
- 缩放从 `0.6` 开始（图标小，缩放幅度可以大一些）
- 微旋转 `rotate: -10 → 0`（增加活力）
- 使用 `spring` 缓动（图标弹入更灵动）

#### 5.2 图标悬停（卡片内图标）

```tsx
<motion.div
  whileHover={{ scale: 1.15, rotate: 5 }}
  transition={{ type: "spring", damping: 15, stiffness: 300 }}
>
  <IconComponent />
</motion.div>
```

#### 5.3 装饰性背景元素（浮动/呼吸）

页面中的装饰圆点、渐变色块等使用 CSS 动画无限循环。

```css
/* globals.css */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}

.animate-float { animation: float 6s ease-in-out infinite; }
.animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
```

---

### 六、导航 / Header 动画标准

#### 6.1 Header 滚动变化

```tsx
<header
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white/95 shadow-md backdrop-blur-md"
      : "bg-transparent"
  }`}
>
```

**规范要点**：
- 使用 CSS `transition-all duration-300`（纯 CSS，性能最优）
- 包含 `backdrop-blur` 毛玻璃效果
- 不使用 Framer Motion（Header 频繁渲染，减少开销）

#### 6.2 移动端菜单展开

```tsx
<motion.nav
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: "auto" }}
  exit={{ opacity: 0, height: 0 }}
  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
>
```

#### 6.3 下拉菜单

```tsx
<motion.div
  initial={{ opacity: 0, y: -8, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: -8, scale: 0.98 }}
  transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
>
```

---

### 七、弹窗 / Modal 动画标准

#### 7.1 Modal 入场与退场

```tsx
// 遮罩层
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.25 }}
  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
/>

// 弹窗内容
<motion.div
  initial={{ opacity: 0, scale: 0.92, y: 20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.92, y: 20 }}
  transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
  className="bg-white rounded-2xl shadow-2xl"
>
```

**规范要点**：
- 遮罩层：仅淡入淡出，时长 `0.25s`
- 内容区：缩放 `0.92 → 1` + 微上移 `y: 20 → 0`
- 必须配合 `<AnimatePresence>` 实现退场动画
- 遮罩加 `backdrop-blur-sm`

---

### 八、页面级过渡动画标准

#### 8.1 区块整体入场编排

一个完整区块内部元素的入场顺序规范：

| 顺序 | 元素     | 延迟  | 说明                       |
| ---- | -------- | ----- | -------------------------- |
| 1    | 区块标题 | 0s    | 首先入场，锚定视觉焦点     |
| 2    | 副标题   | 0.15s | 紧随标题                   |
| 3    | 内容/图片| 0.25s | 主体内容区                 |
| 4    | 卡片组   | 0.30s | 开始错峰，间隔 0.18s       |
| 5    | CTA 按钮 | 0.40s | 最后出现，引导用户操作     |

#### 8.2 区块间滚动节奏

- 相邻区块的 `whileInView` 触发应自然衔接，不应同时触发多个区块
- 通过 `viewport.margin` 控制触发时机：上方区块 `"-60px"`，下方更深区块可加大到 `"-120px"`
- 避免"瀑布式"同时入场：确保每个区块在用户视口中独立触发

---

## Framer Motion 可复用 Variants 参考

建议在项目中创建 `src/lib/motion-variants.ts` 统一管理动画变体：

```ts
// src/lib/motion-variants.ts
import type { Variants } from "framer-motion";

// ---- 文字 ----
export const headingVariants: Variants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.85, ease: [0, 0, 0.2, 1] },
  },
};

export const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.85, delay: 0.15, ease: [0, 0, 0.2, 1] },
  },
};

// ---- 图片 ----
export const imageVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, ease: [0, 0, 0.2, 1] },
  },
};

export const imageSlideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.85, ease: [0, 0, 0.2, 1] },
  },
};

export const imageSlideRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.85, ease: [0, 0, 0.2, 1] },
  },
};

// ---- 卡片 ----
export const cardContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0, 0, 0.2, 1] },
  },
};

// ---- 通用 ----
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0, 0, 0.2, 1] },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
};

// ---- 图标 ----
export const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10 },
  visible: {
    opacity: 1, scale: 1, rotate: 0,
    transition: { type: "spring", damping: 15, stiffness: 200 },
  },
};

// ---- Modal ----
export const modalOverlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const modalContentVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.35, ease: [0, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0, scale: 0.92, y: 20,
    transition: { duration: 0.25 },
  },
};

// ---- 视口配置 ----
export const defaultViewport = { once: true, margin: "-60px" as const };
export const heroViewport = { once: true, margin: "0px" as const };
export const deepViewport = { once: true, margin: "-120px" as const };
```

使用示例：

```tsx
"use client";
import { motion } from "framer-motion";
import {
  headingVariants,
  paragraphVariants,
  cardContainerVariants,
  cardVariants,
  defaultViewport,
} from "@/lib/motion-variants";

export function FeatureSection({ features }) {
  return (
    <section>
      <motion.h2 variants={headingVariants} initial="hidden" whileInView="visible" viewport={defaultViewport}>
        核心功能
      </motion.h2>
      <motion.p variants={paragraphVariants} initial="hidden" whileInView="visible" viewport={defaultViewport}>
        描述文字
      </motion.p>
      <motion.div variants={cardContainerVariants} initial="hidden" whileInView="visible" viewport={defaultViewport} className="grid grid-cols-3 gap-6">
        {features.map((f) => (
          <motion.article key={f.id} variants={cardVariants}>
            {f.title}
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
```

---

## 一、CSS / Tailwind 动效

适用于：淡入、上滑、缩放、悬停高亮、简单过渡。

- 使用 `transition-*`、`transform`、`opacity`；避免动画 `width`/`height`，优先 `scale`/`translate`。
- 减少重排：多使用 `transform` 和 `opacity`（合成层）。
- 可选 `prefers-reduced-motion` 关闭或减弱动画。

```css
/* globals.css 或组件内 */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

推荐在 `globals.css` 中定义的通用 CSS keyframes：

```css
/* === 通用入场动画 === */
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in-left {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slide-in-right {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes scale-in {
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
}

/* === 装饰动画（循环） === */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}

/* === 骨架屏 === */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

Tailwind 示例：

```tsx
<div className="transition-all duration-300 hover:scale-105 hover:shadow-lg opacity-0 animate-fade-in">
```

自定义 keyframes 在 `tailwind.config.*` 或 `globals.css` 中定义。

## 二、Framer Motion

适用于：列表错峰入场、页面过渡、拖拽、布局动画。

- 安装：`npm install framer-motion`
- 仅在有动画的组件内导入，避免在服务端执行；组件文件顶部加 `"use client"`。

常用模式：

```tsx
"use client";
import { motion } from "framer-motion";

// 单元素入场
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>

// 列表错峰
{items.map((item, i) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1 }}
  />
))}

// 视差（根据 scroll 或 mouse 更新 y）
<motion.div style={{ y: parallaxY }} />
```

- 使用 `whileInView` 做滚动触发时，建议设 `once: true` 和合适 `margin`，避免重复触发。
- 大列表用 `layout` 需注意性能；可对可见区域做虚拟化。
- **推荐使用 `src/lib/motion-variants.ts` 中的预定义 variants**（见上方「可复用 Variants 参考」）。

## 三、React Three Fiber（3D）

适用于：3D 背景、产品展示、粒子/星空、科技感首屏。

- 安装：`npm install three @react-three/fiber @react-three/drei`
- 3D 画布必须运行在客户端：根组件 `"use client"` 或使用 `dynamic(..., { ssr: false })`。
- 画布尺寸建议用 `invalidateFrameloop` 或 `useFrame` 配合 resize observer，或固定宽高比容器。

最小示例：

```tsx
"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
```

- 性能：控制物体数量与分辨率；移动端可降像素比 `gl={{ pixelRatio: Math.min(2, window.devicePixelRatio) }}`。
- 背景类 3D 可设为 `position: fixed` 或 `absolute` 并 `z-index: -1`，避免遮挡内容。

## 四、Lottie

适用于：设计提供的 JSON 动效（图标动效、插画、加载动画）。

- 安装：`npm install lottie-react`
- 将 JSON 放在 `public/`（如 `public/lottie/hero.json`），或通过接口下发。

```tsx
"use client";
import Lottie from "lottie-react";

<Lottie animationData={data} loop className="w-full h-full" />
// 或
<Lottie path="/lottie/hero.json" loop />
```

- 首屏 Lottie 建议控制体积（&lt; 200KB）；大文件可延迟加载或放在首屏外。

## 五、可访问性

- 尊重 `prefers-reduced-motion: reduce`：通过 CSS 或 JS 检测后关闭/简化动画。
- 避免仅用动效传达关键信息；必要时配合文案或 `aria-live`。
- 3D 场景需考虑键盘与焦点：若可交互，提供焦点顺序与跳过选项。
- Framer Motion 中可通过 hook 检测并降级：

```tsx
import { useReducedMotion } from "framer-motion";

const shouldReduce = useReducedMotion();
const variants = shouldReduce ? reducedVariants : fullVariants;
```

## 六、性能守则

| 规则                             | 说明                                               |
| -------------------------------- | -------------------------------------------------- |
| 仅动画合成层属性                 | `transform`、`opacity` 优先；避免 `width`/`height`/`top`/`left` |
| 首屏避免重型动画库               | 首屏仅用 CSS；Framer Motion 按需，3D/Lottie 动态导入 |
| `whileInView` 设置 `once: true`  | 避免反复触发重渲染                                  |
| 控制同时动画数量                 | 同一视口内不超过 5 个独立动画                       |
| 移动端降级                       | 复杂动画在移动端简化或关闭（通过 `useMediaQuery` 判断）|
| 避免 layout 动画滥用             | `layout` prop 会触发重排，大列表慎用                |

## 七、与生成流程的衔接

在 [generate-website 主技能](../SKILL.md) 的「生成流程」中：

- **步骤2（样式）** 后若需动效：先判断是纯 CSS 还是需 Framer Motion/Lottie/3D。
- **步骤3（客户端交互）**：若涉及动画，可引用本技能；需 3D 时再引用本技能中的 R3F 部分。
- 新增页面或区块时，若需求含「动画」「3D」，在实现时主动应用本技能并选型。
- **新建任何组件时**，必须参照「元素动画标准」章节，为文字、图片、卡片等选择对应的标准动画。
- **优先使用 `src/lib/motion-variants.ts` 中的预定义 variants**，保持全站动效一致性。

## 依赖添加速查

| 能力                     | 命令                                                       |
| ------------------------ | ---------------------------------------------------------- |
| Framer Motion            | `npm install framer-motion`                              |
| React Three Fiber + drei | `npm install three @react-three/fiber @react-three/drei` |
| Lottie                   | `npm install lottie-react`                               |

类型：Three/R3F 自带类型；Framer Motion 与 Lottie 通常无需额外 `@types`。

## 速查表：元素 → 动画映射

| 元素类型         | 入场方式                 | 时长    | 位移/缩放      | 缓动         | 触发方式       |
| ---------------- | ------------------------ | ------- | -------------- | ------------ | -------------- |
| 区块标题 h2      | 淡入 + 上移              | 0.85s   | y: 44          | easeOut      | whileInView    |
| 副标题/描述 p    | 淡入 + 上移              | 0.85s   | y: 36          | easeOut      | whileInView    |
| Hero 标题        | 逐行错峰                 | 0.7s/行 | y: 28          | easeOut      | animate        |
| 标签/徽章        | 淡入 + 上移 + 微缩放     | 0.5s    | y: 12, s: 0.95 | easeOut      | whileInView    |
| 通用图片         | 淡入 + 上移 + 微缩放     | 0.7s    | y: 32, s: 0.97 | easeOut      | whileInView    |
| 侧滑图片         | 淡入 + 水平滑入          | 0.85s   | x: ±60         | easeOut      | whileInView    |
| 轮播图           | 淡入切换                 | 0.5s    | opacity only   | ease-in-out  | CSS transition |
| 图片悬停         | 容器微缩放 + 图片放大    | 0.35s   | s: 1.02 / 1.10 | easeInOut    | hover          |
| 卡片（列表）     | 错峰淡入 + 上移          | 0.75s   | y: 48          | easeOut      | whileInView    |
| 卡片悬停         | 上浮 + 阴影              | spring  | y: -10         | spring       | hover          |
| 按钮悬停         | 微缩放                   | spring  | s: 1.03        | spring       | hover          |
| 按钮点击         | 微缩小                   | spring  | s: 0.97        | spring       | tap            |
| 图标入场         | 缩放 + 旋转弹入          | spring  | s: 0.6, r: -10 | spring       | whileInView    |
| Modal 遮罩       | 淡入                     | 0.25s   | opacity only   | linear       | mount          |
| Modal 内容       | 缩放 + 上移              | 0.35s   | s: 0.92, y: 20 | easeOut      | mount          |
| Header           | 背景/阴影过渡            | 0.3s    | —              | —            | CSS scroll     |
| 装饰元素         | 浮动/呼吸循环            | 4–6s    | y: ±20px       | ease-in-out  | CSS infinite   |
