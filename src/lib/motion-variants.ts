import type { Variants } from "framer-motion";

// =============================================
// 动画设计令牌 (Animation Design Tokens)
// =============================================

/** 标准缓动函数 */
export const EASE = {
  /** 入场动画 - 减速进入 */
  out: [0, 0, 0.2, 1] as const,
  /** 状态切换 - 先加速后减速 */
  inOut: [0.4, 0, 0.2, 1] as const,
};

/** 标准弹性配置 */
export const SPRING = {
  /** 按钮/卡片交互 - 快速弹性 */
  snappy: { type: "spring" as const, damping: 20, stiffness: 300 },
  /** 图标/装饰 - 柔和弹性 */
  gentle: { type: "spring" as const, damping: 30, stiffness: 200 },
  /** 图标入场 - 活力弹性 */
  bouncy: { type: "spring" as const, damping: 15, stiffness: 200 },
};

/** 标准时长 (秒) */
export const DURATION = {
  fast: 0.2,
  normal: 0.35,
  medium: 0.5,
  slow: 0.7,
  hero: 0.85,
};

/** 标准位移量 (px) */
export const OFFSET = {
  small: 16,
  medium: 36,
  large: 48,
  hero: 64,
};

/** 标准错峰间隔 (秒) */
export const STAGGER = {
  children: 0.12,
  cards: 0.18,
  lines: 0.15,
};

// =============================================
// 视口触发配置
// =============================================

/** 默认视口配置 - 元素进入视口前 60px 触发，仅一次 */
export const defaultViewport = { once: true, margin: "-60px" as const };

/** 首屏视口配置 - 立即触发 */
export const heroViewport = { once: true, margin: "0px" as const };

/** 深层内容视口配置 - 更晚触发 */
export const deepViewport = { once: true, margin: "-120px" as const };

/** 图片视口配置 - 提前触发避免空白 */
export const imageViewport = { once: true, margin: "-80px" as const };

// =============================================
// 文字动画 Variants
// =============================================

/** 区块主标题 (h2) - 淡入 + 上移 44px, 0.85s */
export const headingVariants: Variants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.hero, ease: EASE.out },
  },
};

/** 副标题/描述文字 (p) - 淡入 + 上移 36px, 0.85s, 延迟 0.15s */
export const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.hero, delay: 0.15, ease: EASE.out },
  },
};

/** 标签/徽章 - 淡入 + 上移 12px + 微缩放, 0.5s */
export const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.medium, ease: EASE.out },
  },
};

// =============================================
// 图片动画 Variants
// =============================================

/** 通用图片入场 - 淡入 + 上移 32px + 微缩放, 0.7s */
export const imageVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
};

/** 图片从左侧滑入 - 淡入 + 左移 60px, 0.85s */
export const imageSlideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.hero, ease: EASE.out },
  },
};

/** 图片从右侧滑入 - 淡入 + 右移 60px, 0.85s */
export const imageSlideRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.hero, ease: EASE.out },
  },
};

// =============================================
// 卡片动画 Variants
// =============================================

/** 卡片容器 - 子元素错峰 0.18s */
export const cardContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER.cards },
  },
};

/** 单张卡片 - 淡入 + 上移 48px, 0.75s */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE.out },
  },
};

// =============================================
// 通用动画 Variants
// =============================================

/** 通用淡入上移 - 淡入 + 上移 32px, 0.7s */
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
};

/** 纯淡入 - 0.5s */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.medium, ease: EASE.out },
  },
};

/** 缩放入场 - 淡入 + 从 0.9 缩放, 0.5s */
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.medium, ease: EASE.out },
  },
};

/** 列表容器 - 子元素错峰 0.12s */
export const listContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER.children },
  },
};

// =============================================
// 图标动画 Variants
// =============================================

/** 图标入场 - 缩放 0.6 + 旋转 -10° 弹入 */
export const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: SPRING.bouncy,
  },
};

// =============================================
// Modal 动画 Variants
// =============================================

/** Modal 遮罩层 - 淡入 0.25s / 淡出 0.2s */
export const modalOverlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

/** Modal 内容区 - 缩放 0.92 + 上移 20px */
export const modalContentVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE.out },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: 20,
    transition: { duration: 0.25 },
  },
};

// =============================================
// 交互状态 (用于 whileHover / whileTap)
// =============================================

/** 按钮悬停 - 微缩放 1.03 */
export const buttonHover = { scale: 1.03 };

/** 按钮点击 - 微缩小 0.97 */
export const buttonTap = { scale: 0.97 };

/** 卡片悬停 - 上浮 10px */
export const cardHover = { y: -10 };

/** 图标悬停 - 缩放 1.15 + 微旋转 */
export const iconHover = { scale: 1.15, rotate: 5 };

/** 图片容器悬停 - 微缩放 1.02 */
export const imageContainerHover = { scale: 1.02 };
