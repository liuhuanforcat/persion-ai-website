(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/motion-variants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DURATION",
    ()=>DURATION,
    "EASE",
    ()=>EASE,
    "OFFSET",
    ()=>OFFSET,
    "SPRING",
    ()=>SPRING,
    "STAGGER",
    ()=>STAGGER,
    "badgeVariants",
    ()=>badgeVariants,
    "buttonHover",
    ()=>buttonHover,
    "buttonTap",
    ()=>buttonTap,
    "cardContainerVariants",
    ()=>cardContainerVariants,
    "cardHover",
    ()=>cardHover,
    "cardVariants",
    ()=>cardVariants,
    "deepViewport",
    ()=>deepViewport,
    "defaultViewport",
    ()=>defaultViewport,
    "fadeInUpVariants",
    ()=>fadeInUpVariants,
    "fadeInVariants",
    ()=>fadeInVariants,
    "headingVariants",
    ()=>headingVariants,
    "heroViewport",
    ()=>heroViewport,
    "iconHover",
    ()=>iconHover,
    "iconVariants",
    ()=>iconVariants,
    "imageContainerHover",
    ()=>imageContainerHover,
    "imageSlideLeftVariants",
    ()=>imageSlideLeftVariants,
    "imageSlideRightVariants",
    ()=>imageSlideRightVariants,
    "imageVariants",
    ()=>imageVariants,
    "imageViewport",
    ()=>imageViewport,
    "listContainerVariants",
    ()=>listContainerVariants,
    "modalContentVariants",
    ()=>modalContentVariants,
    "modalOverlayVariants",
    ()=>modalOverlayVariants,
    "paragraphVariants",
    ()=>paragraphVariants,
    "scaleInVariants",
    ()=>scaleInVariants
]);
const EASE = {
    /** 入场动画 - 减速进入 */ out: [
        0,
        0,
        0.2,
        1
    ],
    /** 状态切换 - 先加速后减速 */ inOut: [
        0.4,
        0,
        0.2,
        1
    ]
};
const SPRING = {
    /** 按钮/卡片交互 - 快速弹性 */ snappy: {
        type: "spring",
        damping: 20,
        stiffness: 300
    },
    /** 图标/装饰 - 柔和弹性 */ gentle: {
        type: "spring",
        damping: 30,
        stiffness: 200
    },
    /** 图标入场 - 活力弹性 */ bouncy: {
        type: "spring",
        damping: 15,
        stiffness: 200
    }
};
const DURATION = {
    fast: 0.2,
    normal: 0.35,
    medium: 0.5,
    slow: 0.7,
    hero: 0.85
};
const OFFSET = {
    small: 16,
    medium: 36,
    large: 48,
    hero: 64
};
const STAGGER = {
    children: 0.12,
    cards: 0.18,
    lines: 0.15
};
const defaultViewport = {
    once: true,
    margin: "-60px"
};
const heroViewport = {
    once: true,
    margin: "0px"
};
const deepViewport = {
    once: true,
    margin: "-120px"
};
const imageViewport = {
    once: true,
    margin: "-80px"
};
const headingVariants = {
    hidden: {
        opacity: 0,
        y: 44
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION.hero,
            ease: EASE.out
        }
    }
};
const paragraphVariants = {
    hidden: {
        opacity: 0,
        y: 36
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION.hero,
            delay: 0.15,
            ease: EASE.out
        }
    }
};
const badgeVariants = {
    hidden: {
        opacity: 0,
        y: 12,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: DURATION.medium,
            ease: EASE.out
        }
    }
};
const imageVariants = {
    hidden: {
        opacity: 0,
        y: 32,
        scale: 0.97
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: DURATION.slow,
            ease: EASE.out
        }
    }
};
const imageSlideLeftVariants = {
    hidden: {
        opacity: 0,
        x: -60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: DURATION.hero,
            ease: EASE.out
        }
    }
};
const imageSlideRightVariants = {
    hidden: {
        opacity: 0,
        x: 60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: DURATION.hero,
            ease: EASE.out
        }
    }
};
const cardContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: STAGGER.cards
        }
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 48
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: EASE.out
        }
    }
};
const fadeInUpVariants = {
    hidden: {
        opacity: 0,
        y: 32
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION.slow,
            ease: EASE.out
        }
    }
};
const fadeInVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: DURATION.medium,
            ease: EASE.out
        }
    }
};
const scaleInVariants = {
    hidden: {
        opacity: 0,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: DURATION.medium,
            ease: EASE.out
        }
    }
};
const listContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: STAGGER.children
        }
    }
};
const iconVariants = {
    hidden: {
        opacity: 0,
        scale: 0.6,
        rotate: -10
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: SPRING.bouncy
    }
};
const modalOverlayVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.25
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
};
const modalContentVariants = {
    hidden: {
        opacity: 0,
        scale: 0.92,
        y: 20
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: DURATION.normal,
            ease: EASE.out
        }
    },
    exit: {
        opacity: 0,
        scale: 0.92,
        y: 20,
        transition: {
            duration: 0.25
        }
    }
};
const buttonHover = {
    scale: 1.03
};
const buttonTap = {
    scale: 0.97
};
const cardHover = {
    y: -10
};
const iconHover = {
    scale: 1.15,
    rotate: 5
};
const imageContainerHover = {
    scale: 1.02
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/about/AboutBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutBanner",
    ()=>AboutBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion-variants.ts [app-client] (ecmascript)");
"use client";
;
;
;
function AboutBanner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative flex h-[55vh] min-h-[380px] w-full items-center justify-center overflow-hidden bg-gray-900 md:h-[70vh] md:min-h-[480px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
                style: {
                    backgroundImage: "url('/images/banner@3x.webp')"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/about/AboutBanner.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/about/AboutBanner.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-20 -right-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/about/AboutBanner.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/about/AboutBanner.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/about/AboutBanner.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 px-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DURATION"].slow,
                            delay: 0.2,
                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].out
                        },
                        className: "mb-4 text-lg tracking-widest text-white/80 md:text-xl",
                        children: "关于全能数字"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/about/AboutBanner.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 48
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DURATION"].hero,
                            delay: 0.4,
                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].out
                        },
                        className: "text-3xl font-bold text-white md:text-5xl lg:text-7xl",
                        children: "美好沟通 · 连接世界"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/about/AboutBanner.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 28
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DURATION"].hero,
                            delay: 0.7,
                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].out
                        },
                        className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg",
                        children: "做混合工作时代的开拓者，用科技的力量，打破空间的界限"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/about/AboutBanner.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/about/AboutBanner.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/about/AboutBanner.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = AboutBanner;
var _c;
__turbopack_context__.k.register(_c, "AboutBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/about/CompanyIntro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompanyIntro",
    ()=>CompanyIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion-variants.ts [app-client] (ecmascript)");
"use client";
;
;
;
const highlights = [
    {
        label: "成立年份",
        value: "2021",
        suffix: "年"
    },
    {
        label: "服务领域",
        value: "5+",
        suffix: "个"
    },
    {
        label: "团队规模",
        value: "100+",
        suffix: "人"
    },
    {
        label: "产品覆盖",
        value: "全栈",
        suffix: ""
    }
];
function CompanyIntro() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-20 md:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 md:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingVariants"],
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultViewport"],
                    className: "mb-6 text-center text-3xl font-bold text-gray-900 md:text-4xl",
                    children: "全能数字是什么？"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/about/CompanyIntro.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paragraphVariants"],
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultViewport"],
                    className: "mx-auto max-w-4xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-base leading-relaxed text-gray-600 md:text-lg",
                        children: '杭州全能数字科技有限公司成立于 2021 年，是实时音视频通讯应用的引领者。 我们以"做混合工作时代的开拓者，让美好沟通连接世界"为使命，致力于为客户提供 从 PaaS 到 SaaS 再到硬件的全栈解决方案。业务覆盖政府、商业、金融、教育、医疗等多个领域， 帮助各行各业实现高效、稳定、安全的实时音视频通讯。'
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/about/CompanyIntro.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/about/CompanyIntro.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeInUpVariants"],
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultViewport"],
                    className: "mt-14 grid grid-cols-2 gap-6 md:grid-cols-4",
                    children: highlights.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center rounded-2xl bg-gray-50 px-6 py-8 transition-shadow hover:shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl font-bold text-gray-900 md:text-4xl",
                                    children: [
                                        item.value,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-0.5 text-lg font-medium text-gray-500",
                                            children: item.suffix
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/about/CompanyIntro.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/about/CompanyIntro.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-2 text-sm text-gray-500",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/about/CompanyIntro.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/src/components/sections/about/CompanyIntro.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/about/CompanyIntro.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/about/CompanyIntro.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/about/CompanyIntro.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = CompanyIntro;
var _c;
__turbopack_context__.k.register(_c, "CompanyIntro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/about/Timeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeline",
    ()=>Timeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion-variants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const milestones = [
    {
        id: "m1",
        year: "2021",
        month: "11月",
        title: "公司正式成立",
        description: "杭州全能数字科技有限公司正式成立，开启实时音视频通讯领域的创业之旅。",
        image: "/images/time-1.png"
    },
    {
        id: "m2",
        year: "2022",
        month: "03月",
        title: "Enheylig 硬件品牌发布",
        description: "旗下硬件品牌 Enheylig 正式对外发布，标志着公司硬件产品线的开端。",
        image: "/images/time-2.png"
    },
    {
        id: "m3",
        year: "2022",
        month: "07月",
        title: "RTC 平台发布",
        description: "自研实时音视频通信（RTC）平台正式发布，为后续产品矩阵提供核心技术底座。",
        image: "/images/time-3.png"
    },
    {
        id: "m4",
        year: "2022",
        month: "08月",
        title: "首款 4K 相机产品",
        description: "推出首款 4K 超高清相机产品，满足高端视频会议和直播场景的画质需求。",
        image: "/images/time-4.png"
    },
    {
        id: "m5",
        year: "2022",
        month: "11月",
        title: "数字对讲系统发布",
        description: "数字对讲系统正式发布，为企业和行业客户提供专业的即时通讯解决方案。",
        image: "/images/time-5.png"
    },
    {
        id: "m6",
        year: "2022",
        month: "12月",
        title: "海外市场与新品突破",
        description: "开拓海外市场，同步发布分体式终端和智能会议大屏，丰富产品形态。",
        image: "/images/time-6.png"
    },
    {
        id: "m7",
        year: "2023",
        month: "04月",
        title: "四大产品发布",
        description: "一次性发布四大核心产品，形成完整的产品体系，覆盖会议、通信、协作、硬件全场景。",
        image: "/images/time-7.png"
    },
    {
        id: "m8",
        year: "2023",
        month: "08月",
        title: "融合通信与应急指挥平台",
        description: "融合通信平台与应急指挥平台发布，进军政府及公共安全领域。",
        image: "/images/time-8.png"
    },
    {
        id: "m9",
        year: "2023",
        month: "10月",
        title: "出货量破万，助力教育",
        description: "终端设备出货量突破万台，成功助力教育行业数字化转型。",
        image: "/images/time-9.png"
    },
    {
        id: "m10",
        year: "2024",
        month: "03月",
        title: "会议直播与巡检落地",
        description: "会议直播系统发布，巡检项目成功落地，持续拓展行业应用场景。",
        image: "/images/time-10.png"
    }
];
const contentVariants = {
    enter: (dir)=>({
            opacity: 0,
            x: dir > 0 ? 60 : -60
        }),
    center: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.45,
            ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].inOut
        }
    },
    exit: (dir)=>({
            opacity: 0,
            x: dir > 0 ? -60 : 60,
            transition: {
                duration: 0.3,
                ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].inOut
            }
        })
};
const AUTO_INTERVAL = 4000;
const AXIS_LEFT = 12;
const NODE_SIZES = {
    active: 20,
    past: 12,
    future: 10
};
function Timeline() {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mobileContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mobileItemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [mobileProgressPx, setMobileProgressPx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const goTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Timeline.useCallback[goTo]": (index)=>{
            if (index < 0 || index >= milestones.length || index === activeIndex) return;
            setDirection(index > activeIndex ? 1 : -1);
            setActiveIndex(index);
        }
    }["Timeline.useCallback[goTo]"], [
        activeIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Timeline.useEffect": ()=>{
            if (paused) return;
            timerRef.current = setTimeout({
                "Timeline.useEffect": ()=>{
                    setDirection(1);
                    setActiveIndex({
                        "Timeline.useEffect": (prev)=>prev >= milestones.length - 1 ? 0 : prev + 1
                    }["Timeline.useEffect"]);
                }
            }["Timeline.useEffect"], AUTO_INTERVAL);
            return ({
                "Timeline.useEffect": ()=>{
                    if (timerRef.current) clearTimeout(timerRef.current);
                }
            })["Timeline.useEffect"];
        }
    }["Timeline.useEffect"], [
        activeIndex,
        paused
    ]);
    const handleUserInteract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Timeline.useCallback[handleUserInteract]": (index)=>{
            setPaused(true);
            goTo(index);
            setTimeout({
                "Timeline.useCallback[handleUserInteract]": ()=>setPaused(false)
            }["Timeline.useCallback[handleUserInteract]"], AUTO_INTERVAL * 2);
        }
    }["Timeline.useCallback[handleUserInteract]"], [
        goTo
    ]);
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Timeline.useEffect": ()=>{
            const node = nodeRefs.current[activeIndex];
            const track = trackRef.current;
            const inner = innerRef.current;
            if (!node || !track || !inner) return;
            const trackRect = track.getBoundingClientRect();
            const nodeRect = node.getBoundingClientRect();
            const scrollLeft = nodeRect.left - trackRect.left + track.scrollLeft - trackRect.width / 2 + nodeRect.width / 2;
            track.scrollTo({
                left: scrollLeft,
                behavior: "smooth"
            });
            const innerRect = inner.getBoundingClientRect();
            const nodeCenterX = nodeRect.left + nodeRect.width / 2 - innerRect.left;
            const paddingLeft = 8;
            setProgressPx(Math.max(0, nodeCenterX - paddingLeft));
        }
    }["Timeline.useEffect"], [
        activeIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Timeline.useEffect": ()=>{
            const container = mobileContainerRef.current;
            const item = mobileItemRefs.current[activeIndex];
            if (!container || !item) return;
            const updateProgress = {
                "Timeline.useEffect.updateProgress": ()=>{
                    const containerRect = container.getBoundingClientRect();
                    const itemRect = item.getBoundingClientRect();
                    const nodeCenter = itemRect.top - containerRect.top + 10;
                    setMobileProgressPx(Math.max(0, nodeCenter));
                }
            }["Timeline.useEffect.updateProgress"];
            updateProgress();
            const timer = setTimeout(updateProgress, 400);
            return ({
                "Timeline.useEffect": ()=>clearTimeout(timer)
            })["Timeline.useEffect"];
        }
    }["Timeline.useEffect"], [
        activeIndex
    ]);
    const active = milestones[activeIndex];
    const [progressPx, setProgressPx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gray-50 py-20 md:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 md:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingVariants"],
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultViewport"],
                    className: "mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl",
                    children: "发展历程"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0,
                        y: 36
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultViewport"],
                    transition: {
                        duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DURATION"].hero,
                        delay: 0.15,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].out
                    },
                    className: "mx-auto mb-10 max-w-2xl text-center text-base text-gray-500 md:mb-16",
                    children: "从初创到行业引领者，每一步都踏实而有力"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 48
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultViewport"],
                    transition: {
                        duration: 0.75,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].out
                    },
                    className: "hidden md:block",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mx-auto mb-8 max-w-4xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: trackRef,
                                className: "relative flex items-start overflow-x-auto scrollbar-hide",
                                style: {
                                    scrollbarWidth: "none"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: innerRef,
                                    className: "relative flex w-full min-w-0 items-start justify-between px-2 pt-3 pb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-2 right-2 top-[15px] h-px bg-gray-200/80"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute left-2 top-[15px] h-px bg-blue-500",
                                            initial: false,
                                            animate: {
                                                width: progressPx
                                            },
                                            transition: {
                                                duration: 0.5,
                                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].inOut
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this),
                                        milestones.map((m, i)=>{
                                            const isActive = i === activeIndex;
                                            const isPast = i <= activeIndex;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                ref: (el)=>{
                                                    nodeRefs.current[i] = el;
                                                },
                                                onClick: ()=>handleUserInteract(i),
                                                className: "group relative z-10 flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `relative rounded-full transition-all duration-300 ${isActive ? "h-[10px] w-[10px] bg-blue-600 shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" : isPast ? "h-2 w-2 bg-blue-400" : "h-[7px] w-[7px] border-[1.5px] border-gray-300 bg-white group-hover:border-blue-400"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `mt-2 whitespace-nowrap text-[10px] font-medium transition-colors duration-300 ${isActive ? "font-semibold text-blue-600" : isPast ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500"}`,
                                                        children: [
                                                            m.year,
                                                            ".",
                                                            m.month.replace("月", "")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 23
                                                    }, this),
                                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: -4
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        className: "mt-0.5 whitespace-nowrap text-[10px] text-gray-400",
                                                        children: m.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, m.id, true, {
                                                fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                lineNumber: 275,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/about/Timeline.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200/80",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                custom: direction,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    custom: direction,
                                    variants: contentVariants,
                                    initial: "enter",
                                    animate: "center",
                                    exit: "exit",
                                    className: "flex flex-col md:flex-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full overflow-hidden md:w-[38%]",
                                            children: active.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: active.image,
                                                alt: active.title,
                                                className: "h-full min-h-[160px] w-full object-cover md:min-h-[200px]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                lineNumber: 335,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-full min-h-[160px] items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 md:min-h-[200px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-4xl font-bold text-white/20",
                                                    children: active.year
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                lineNumber: 341,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-1 flex-col justify-center px-7 py-6 md:px-8 md:py-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-2 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "h-1 w-1 rounded-full bg-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                                    lineNumber: 353,
                                                                    columnNumber: 23
                                                                }, this),
                                                                active.year,
                                                                ".",
                                                                active.month
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] text-gray-400",
                                                            children: [
                                                                activeIndex + 1,
                                                                "/",
                                                                milestones.length
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-gray-900",
                                                    children: active.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 max-w-sm text-[13px] leading-relaxed text-gray-500",
                                                    children: active.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleUserInteract(activeIndex - 1),
                                                            disabled: activeIndex === 0,
                                                            className: "flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-30",
                                                            "aria-label": "上一个里程碑",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "13",
                                                                height: "13",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                strokeWidth: 2,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    d: "M15 19l-7-7 7-7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                                    lineNumber: 376,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleUserInteract(activeIndex + 1),
                                                            disabled: activeIndex === milestones.length - 1,
                                                            className: "flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-30",
                                                            "aria-label": "下一个里程碑",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "13",
                                                                height: "13",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                strokeWidth: 2,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    d: "M9 5l7 7-7 7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                                    lineNumber: 386,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                            lineNumber: 350,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, active.id, true, {
                                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/about/Timeline.tsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden",
                    ref: mobileContainerRef,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        style: {
                            paddingLeft: `${AXIS_LEFT + 20}px`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 bottom-0 w-[2px] rounded-full bg-gray-200",
                                style: {
                                    left: `${AXIS_LEFT}px`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                lineNumber: 400,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute top-0 w-[2px] rounded-full bg-gradient-to-b from-blue-500 to-blue-400",
                                style: {
                                    left: `${AXIS_LEFT}px`
                                },
                                initial: false,
                                animate: {
                                    height: mobileProgressPx
                                },
                                transition: {
                                    duration: 0.5,
                                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].inOut
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this),
                            milestones.map((m, i)=>{
                                const isActive = i === activeIndex;
                                const isPast = i <= activeIndex;
                                const nodeSize = isActive ? NODE_SIZES.active : isPast ? NODE_SIZES.past : NODE_SIZES.future;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    ref: (el)=>{
                                        mobileItemRefs.current[i] = el;
                                    },
                                    initial: {
                                        opacity: 0,
                                        x: -16
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true,
                                        margin: "-30px"
                                    },
                                    transition: {
                                        duration: 0.45,
                                        delay: i * 0.04,
                                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].out
                                    },
                                    className: "relative pb-6 last:pb-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-1 flex items-center justify-center",
                                            style: {
                                                left: `${-(AXIS_LEFT + 20) + AXIS_LEFT + 1 - nodeSize / 2}px`,
                                                width: `${nodeSize}px`,
                                                height: `${nodeSize}px`
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `h-full w-full rounded-full transition-all duration-300 ${isActive ? "bg-blue-600 ring-[3px] ring-blue-100" : isPast ? "bg-blue-400" : "border-2 border-gray-300 bg-white"}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                lineNumber: 441,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                            lineNumber: 433,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleUserInteract(i),
                                            className: `w-full rounded-xl text-left transition-all duration-300 ${isActive ? "bg-white p-4 shadow-md shadow-gray-200/60 ring-1 ring-gray-100" : "px-4 py-3"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs font-semibold ${isActive ? "text-blue-600" : isPast ? "text-gray-500" : "text-gray-400"}`,
                                                    children: [
                                                        m.year,
                                                        " 年 ",
                                                        m.month
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                    lineNumber: 461,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `mt-0.5 text-[15px] font-bold ${isActive ? "text-gray-900" : "text-gray-700"}`,
                                                    children: m.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            height: 0,
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            height: "auto",
                                                            opacity: 1
                                                        },
                                                        exit: {
                                                            height: 0,
                                                            opacity: 0
                                                        },
                                                        transition: {
                                                            duration: 0.35,
                                                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].inOut
                                                        },
                                                        className: "overflow-hidden",
                                                        children: [
                                                            m.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: m.image,
                                                                alt: m.title,
                                                                className: "mt-3 h-36 w-full rounded-lg object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2.5 text-sm leading-relaxed text-gray-500",
                                                                children: m.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                                lineNumber: 491,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                        lineNumber: 477,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                            lineNumber: 453,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, m.id, true, {
                                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                                    lineNumber: 419,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/about/Timeline.tsx",
                        lineNumber: 398,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/about/Timeline.tsx",
                    lineNumber: 397,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/about/Timeline.tsx",
            lineNumber: 222,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/about/Timeline.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
_s(Timeline, "guZwYFoF4DM88phGgU730sV70N0=");
_c = Timeline;
var _c;
__turbopack_context__.k.register(_c, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/about/Certifications.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Certifications",
    ()=>Certifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion-variants.ts [app-client] (ecmascript)");
"use client";
;
;
;
const certifications = [
    {
        name: "ISO 9000",
        image: "/images/iso.png"
    },
    {
        name: "ISO 14000",
        image: "/images/iso.png"
    },
    {
        name: "ISO 45000",
        image: "/images/iso.png"
    },
    {
        name: "ISO 27000",
        image: "/images/iso.png"
    },
    {
        name: "ISO 28000",
        image: "/images/iso.png"
    },
    {
        name: "ISO 20000",
        image: "/images/iso.png"
    },
    {
        name: "CCC 证书",
        image: "/images/3c.png"
    },
    {
        name: "专利证书",
        image: "/images/patent.png"
    },
    {
        name: "知识产权",
        image: "/images/intellectual.png"
    },
    {
        name: "鲲鹏技术认证",
        image: "/images/kunpeng.png"
    },
    {
        name: "CMMI 3 级",
        image: "/images/cmmi.png"
    },
    {
        name: "国家高新企业",
        image: "/images/gaoxin_qiye.png"
    },
    {
        name: "科技型中小企业",
        image: "/images/gaoxin_qiye.png"
    },
    {
        name: "网络安全等保三级",
        image: "/images/db-3.png"
    }
];
// 复制一份用于无缝滚动
const doubledCertifications = [
    ...certifications,
    ...certifications
];
function Certifications() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-white py-20 md:py-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40",
                style: {
                    backgroundImage: "url('/images/certificate-bg.png')"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/about/Certifications.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-7xl px-4 md:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingVariants"],
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultViewport"],
                        className: "mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl",
                        children: "我们获得的权威认证"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/about/Certifications.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paragraphVariants"],
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultViewport"],
                        className: "mx-auto mb-14 max-w-2xl text-center text-base text-gray-500",
                        children: "多项资质认证，彰显技术实力与合规品质"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/about/Certifications.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/about/Certifications.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/about/Certifications.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/about/Certifications.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-marquee flex w-max gap-6 py-2 hover:[animation-play-state:paused]",
                        children: doubledCertifications.map((cert, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-[180px] shrink-0 flex-col items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-14 w-14 items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: cert.image,
                                            alt: cert.name,
                                            className: "h-full w-full object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/about/Certifications.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/about/Certifications.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-center text-sm font-medium text-gray-700",
                                        children: cert.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/about/Certifications.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, `${cert.name}-${index}`, true, {
                                fileName: "[project]/src/components/sections/about/Certifications.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/about/Certifications.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/about/Certifications.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/about/Certifications.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Certifications;
var _c;
__turbopack_context__.k.register(_c, "Certifications");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/about/JoinUs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JoinUs",
    ()=>JoinUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion-variants.ts [app-client] (ecmascript)");
"use client";
;
;
;
function JoinUs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden py-20 md:py-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
                style: {
                    backgroundImage: "url('/images/partner.png')"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/about/JoinUs.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gray-900/85"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/about/JoinUs.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/about/JoinUs.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/about/JoinUs.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/about/JoinUs.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-7xl px-4 text-center md:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingVariants"],
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultViewport"],
                        className: "mb-6 text-3xl font-bold text-white md:text-4xl",
                        children: "期待您的加入"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/about/JoinUs.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paragraphVariants"],
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultViewport"],
                        className: "mx-auto max-w-2xl space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base leading-relaxed text-gray-300 md:text-lg",
                                children: [
                                    "成立三年，我们现在已经有",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-white",
                                        children: "100+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/about/JoinUs.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    " 小伙伴。"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/about/JoinUs.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base leading-relaxed text-gray-300 md:text-lg",
                                children: "全能数字提供了一个轻松、舒适的工作环境，在这里我们一起实现有趣、有挑战的任务。"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/about/JoinUs.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/about/JoinUs.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeInUpVariants"],
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultViewport"],
                        className: "mt-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: "https://www.zhipin.com/gongsi/e2d73c5a5b3cbf7a0nV82ty4.html",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            whileHover: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonHover"],
                            whileTap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonTap"],
                            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRING"].snappy,
                            className: "inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-gray-900 shadow-lg transition-colors hover:bg-gray-100",
                            children: [
                                "加入我们",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-4 w-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/about/JoinUs.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/about/JoinUs.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/about/JoinUs.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/about/JoinUs.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/about/JoinUs.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/about/JoinUs.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = JoinUs;
var _c;
__turbopack_context__.k.register(_c, "JoinUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/about/ContactInfo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactInfo",
    ()=>ContactInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion-variants.ts [app-client] (ecmascript)");
"use client";
;
;
;
const contacts = [
    {
        id: "address",
        image: "/images/address.png",
        label: "公司地址",
        value: "浙江省杭州市余杭区五常街道关瑞大厦C座3楼",
        href: undefined
    },
    {
        id: "phone",
        image: "/images/phone.png",
        label: "联系电话",
        value: "0571-86300996",
        href: "tel:0571-86300996"
    },
    {
        id: "email",
        image: "/images/email.png",
        label: "商务邮箱",
        value: "business@onlineinline.com",
        href: "mailto:business@onlineinline.com"
    }
];
function ContactInfo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gray-50 py-20 md:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 md:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingVariants"],
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultViewport"],
                    className: "mb-14 text-center text-3xl font-bold text-gray-900 md:text-4xl",
                    children: "联系我们"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/about/ContactInfo.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardContainerVariants"],
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultViewport"],
                    className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                    children: contacts.map((contact)=>{
                        const inner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 transition-colors group-hover:bg-blue-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: contact.image,
                                        alt: contact.label,
                                        className: "h-7 w-7 object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/about/ContactInfo.tsx",
                                        lineNumber: 61,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/about/ContactInfo.tsx",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-2 text-sm font-medium text-gray-500",
                                    children: contact.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/about/ContactInfo.tsx",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base font-medium text-gray-900",
                                    children: contact.value
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/about/ContactInfo.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardVariants"],
                            whileHover: {
                                y: -6
                            },
                            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2d$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRING"].snappy,
                            className: "group flex flex-col items-center rounded-2xl bg-white px-6 py-10 text-center shadow-sm transition-shadow hover:shadow-lg",
                            children: contact.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: contact.href,
                                className: "flex flex-col items-center",
                                children: inner
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/about/ContactInfo.tsx",
                                lineNumber: 85,
                                columnNumber: 19
                            }, this) : inner
                        }, contact.id, false, {
                            fileName: "[project]/src/components/sections/about/ContactInfo.tsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/about/ContactInfo.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/about/ContactInfo.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/about/ContactInfo.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = ContactInfo;
var _c;
__turbopack_context__.k.register(_c, "ContactInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_38c8b5d5._.js.map