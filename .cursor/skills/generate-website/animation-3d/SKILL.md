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

## 技术选型原则

| 场景 | 推荐方案 | 说明 |
|------|----------|------|
| 简单入场/悬停/过渡 | CSS (transition + transform) 或 Tailwind | 零依赖，首屏友好 |
| 序列动画、手势、布局动画 | Framer Motion | React 生态，API 简洁 |
| 3D 场景、模型、粒子、背景 | React Three Fiber (R3F) + drei | 与 React 集成好 |
| 设计稿动效还原 (AE 导出) | Lottie (lottie-react) | JSON 动画，体积可控 |
| 复杂时间轴、滚动驱动 | GSAP + ScrollTrigger | 可选，仅在确有需求时引入 |

**默认优先**：能用 CSS/Tailwind 实现的先用 CSS；需要声明式、编排多元素时用 Framer Motion；需要真实 3D 再上 R3F。

## 项目约定

- 动画组件若依赖浏览器 API（如 `window`、事件）或第三方动画库，需加 `"use client"`。
- 动画相关组件放在 `src/components/ui/`（通用）或 `src/components/sections/`（区块级）。
- 3D 或 Lottie 建议动态导入或放首屏外，避免阻塞 LCP。

```tsx
// 示例：动态导入 3D 区块，减少首屏 bundle
const Hero3D = dynamic(() => import("@/components/sections/Hero3D"), { ssr: false });
```

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

## 六、与生成流程的衔接

在 [generate-website 主技能](../SKILL.md) 的「生成流程」中：

- **步骤2（样式）** 后若需动效：先判断是纯 CSS 还是需 Framer Motion/Lottie/3D。
- **步骤3（客户端交互）**：若涉及动画，可引用本技能；需 3D 时再引用本技能中的 R3F 部分。
- 新增页面或区块时，若需求含「动画」「3D」，在实现时主动应用本技能并选型。

## 依赖添加速查

| 能力 | 命令 |
|------|------|
| Framer Motion | `npm install framer-motion` |
| React Three Fiber + drei | `npm install three @react-three/fiber @react-three/drei` |
| Lottie | `npm install lottie-react` |

类型：Three/R3F 自带类型；Framer Motion 与 Lottie 通常无需额外 `@types`。
