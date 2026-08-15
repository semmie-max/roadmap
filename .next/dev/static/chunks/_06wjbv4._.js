(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/originkit/ui/hero-23/sec1-hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sec1Hero",
    ()=>Sec1Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/originkit/ui/hero-23/media-globe'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/originkit/ui/hero-23/scale-frame'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";
"use client";
;
;
;
const A = "/originkit/hero-23";
const HELVETICA = '"Helvetica Neue", Helvetica, Arial, sans-serif';
const NAV_LINKS = [
    {
        label: "Home",
        active: true
    },
    {
        label: "Pricing",
        active: false
    },
    {
        label: "About",
        active: false
    },
    {
        label: "Tools",
        active: false
    }
];
const FLAGS = [
    {
        src: `${A}/flag-canada.svg`,
        alt: "Canada"
    },
    {
        src: `${A}/flag-sweden.svg`,
        alt: "Sweden"
    },
    {
        src: `${A}/flag-brazil.svg`,
        alt: "Brazil"
    },
    {
        src: `${A}/flag-taiwan.svg`,
        alt: "Taiwan"
    },
    {
        src: `${A}/flag-liberia.svg`,
        alt: "Liberia"
    },
    {
        src: `${A}/flag-ireland.svg`,
        alt: "Ireland"
    }
];
const AVATARS = [
    1,
    2,
    3
];
/** Entrance stagger. `hero-reveal` (globals.css) fades + lifts, and collapses to
 *  a plain fade under prefers-reduced-motion. */ const REVEAL = "animate-hero-reveal";
const delay = (ms)=>({
        animationDelay: `${ms}ms`
    });
/** Linearly interpolates a Figma value between two viewport widths, clamped at
 *  both ends — used to grow the tablet frame into the desktop one. */ const interpolate = (from, to)=>{
    const [fromVw, fromPx] = from;
    const [toVw, toPx] = to;
    const slope = (toPx - fromPx) / (toVw - fromVw);
    const intercept = fromPx - slope * fromVw;
    const sign = intercept < 0 ? "-" : "+";
    const track = `calc(${(slope * 100).toFixed(3)}vw ${sign} ${Math.abs(intercept).toFixed(3)}px)`;
    const [min, max] = fromPx < toPx ? [
        fromPx,
        toPx
    ] : [
        toPx,
        fromPx
    ];
    return `clamp(${min}px, ${track}, ${max}px)`;
};
/** Tablet → desktop band (744px → 1280px). */ const fluidLg = (atTablet, atDesktop)=>interpolate([
        744,
        atTablet
    ], [
        1280,
        atDesktop
    ]);
const STARDUST = {
    particleDensity: 10,
    minSize: 1,
    maxSize: 1,
    speed: 10,
    particleSpeed: 1,
    movement: 6,
    angle: 184,
    particleColor: "#FFFFFF33",
    background: "#0F0F0F"
};
const BUTTON_SHADOW = "drop-shadow-[0px_53px_7.5px_rgba(0,0,0,0),0px_34px_7px_rgba(0,0,0,0.01),0px_19px_6px_rgba(0,0,0,0.05),0px_9px_4.5px_rgba(0,0,0,0.09),0px_2px_2.5px_rgba(0,0,0,0.1)]";
const BUTTON_GRADIENT = "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(229, 229, 229) 0%, rgb(229, 229, 229) 100%)";
const LightButton = ({ label, className, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: `relative flex shrink-0 cursor-pointer items-center justify-center rounded-[3px] transition-opacity duration-200 hover:opacity-80 ${className} ${BUTTON_SHADOW}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 rounded-[3px]",
                style: {
                    backgroundImage: BUTTON_GRADIENT
                }
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 85,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "relative shrink-0 whitespace-nowrap text-[16px] leading-normal tracking-[-0.32px] text-[#060e08]",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 90,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_2px_0px_white,inset_0px_-1.5px_0px_0px_rgba(0,0,0,0.23)]"
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 93,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = LightButton;
const DarkButton = ({ label, className, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: `relative flex shrink-0 cursor-pointer items-center justify-center rounded-[3px] border border-solid border-[rgba(255,255,255,0.1)] bg-[#292929] transition-opacity duration-200 hover:opacity-80 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "relative shrink-0 whitespace-nowrap text-[16px] leading-normal tracking-[-0.32px] text-white",
            children: label
        }, void 0, false, {
            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
            lineNumber: 110,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = DarkButton;
const Badge = ({ step })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: delay(step),
        className: `${REVEAL} relative flex shrink-0 items-center justify-center gap-[10px] overflow-clip rounded-[3px] border border-solid border-[rgba(255,255,255,0.1)] bg-[#282828] px-[12px] py-[8px]`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative size-[6px] shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: "",
                    className: "absolute inset-0 block size-full max-w-none",
                    src: `${A}/dot.svg`
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 122,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 121,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "relative shrink-0 whitespace-nowrap text-[12px] leading-normal tracking-[-0.24px] text-white",
                children: "$20M raised led by Sequoia Capital"
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 124,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = Badge;
const Corners = ({ size = "size-[10px]" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute left-0 top-0 ${size}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: "",
                    className: "block size-full max-w-none",
                    src: `${A}/corner-tl.svg`
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 133,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute right-0 top-0 flex items-center justify-center ${size}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-none rotate-180 -scale-y-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative ${size}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: "",
                            className: "block size-full max-w-none",
                            src: `${A}/corner-tr.svg`
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 136,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 135,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-0 right-0 flex items-center justify-center ${size}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-none rotate-180",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative ${size}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: "",
                            className: "block size-full max-w-none",
                            src: `${A}/corner-tr.svg`
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 143,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 142,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-0 left-0 flex items-center justify-center ${size}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-none -scale-y-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative ${size}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: "",
                            className: "block size-full max-w-none",
                            src: `${A}/corner-tl.svg`
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 150,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 149,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 131,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = Corners;
/** Every size below is a raw CSS length, so a caller can hand it a fixed px
 *  value (iPad / desktop frames) or a fluid clamp() (phones). */ const StatCard = ({ className, shadow, media, value, caption, width, padding, gap, radius, border, valueSize, captionSize, tracking, position })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${REVEAL} absolute flex flex-col items-center border-solid border-[rgba(255,255,255,0.1)] bg-[#292929] ${className} ${shadow}`,
        style: {
            ...position,
            width,
            padding,
            gap,
            borderRadius: radius,
            borderWidth: border
        },
        children: [
            media,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full shrink-0 text-center",
                style: {
                    letterSpacing: tracking
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-0 font-bold leading-[1.15] text-[rgba(255,255,255,0.8)]",
                        style: {
                            fontSize: valueSize
                        },
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 207,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "leading-[1.15] text-[rgba(255,255,255,0.6)]",
                        style: {
                            fontSize: captionSize
                        },
                        children: caption
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 213,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 206,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 192,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = StatCard;
const Avatars = ({ size, overlap })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex shrink-0 items-center",
        children: AVATARS.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative shrink-0",
                style: {
                    width: size,
                    height: size,
                    marginRight: n < 3 ? `calc(-1 * ${overlap})` : undefined
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: "",
                    className: "absolute inset-0 block size-full max-w-none",
                    src: `${A}/avatar-${n}.png`
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, n, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 221,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = Avatars;
const FlagRow = ({ size, gap, maskSize, maskPosition, offsetX = "0px", offsetY = "0px" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative col-start-1 row-start-1 flex items-center",
            style: {
                gap,
                marginLeft: `calc(-1 * ${offsetX})`,
                marginTop: offsetY,
                maskImage: `url("${A}/flags-mask.svg")`,
                WebkitMaskImage: `url("${A}/flags-mask.svg")`,
                maskMode: "alpha",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskSize,
                WebkitMaskSize: maskSize,
                ...maskPosition ? {
                    maskPosition,
                    WebkitMaskPosition: maskPosition
                } : {}
            },
            children: FLAGS.map((flag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative shrink-0",
                    style: {
                        width: size,
                        height: size
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        alt: flag.alt,
                        className: "absolute inset-0 block size-full max-w-none",
                        src: flag.src
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, flag.alt, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
            lineNumber: 258,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 257,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = FlagRow;
// iPad and desktop share one card size (Figma 2001:35156 / 2001:58408).
const BIG_CARD = {
    className: "overflow-clip",
    padding: "12px",
    gap: "8px",
    radius: "6px",
    border: "1px",
    valueSize: "28px",
    captionSize: "16px",
    tracking: "-0.4px"
};
const BIG_CARD_LEFT = {
    ...BIG_CARD,
    width: "156px",
    value: "300K+",
    caption: "users globally",
    media: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatars, {
        size: "24px",
        overlap: "12px"
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 308,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0))
};
const BIG_CARD_RIGHT = {
    ...BIG_CARD,
    width: "171px",
    value: "120+",
    caption: "countries supported",
    media: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlagRow, {
        size: "24px",
        gap: "8px",
        maskSize: "184px 24px"
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 316,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0))
};
const CARD_SHADOW_LEFT_DESKTOP = "shadow-[0px_86px_24px_0px_rgba(186,186,186,0),0px_55px_22px_0px_rgba(186,186,186,0.01),0px_31px_19px_0px_rgba(186,186,186,0.05),0px_14px_14px_0px_rgba(186,186,186,0.09),0px_3px_8px_0px_rgba(186,186,186,0.1)]";
const CARD_SHADOW_RIGHT_DESKTOP = "shadow-[0px_86px_24px_0px_rgba(186,186,186,0),0px_55px_22px_0px_rgba(186,186,186,0.01),0px_31px_19px_0px_rgba(186,186,186,0.05),0px_14px_14px_0px_rgba(186,186,186,0.09),0px_3px_8px_0px_rgba(186,186,186,0.1)]";
const CARD_SHADOW_LEFT_MOBILE = "shadow-[0px_35.467px_9.898px_0px_rgba(186,186,186,0),0px_22.683px_9.073px_0px_rgba(186,186,186,0.01),0px_12.785px_7.836px_0px_rgba(186,186,186,0.05),0px_5.774px_5.774px_0px_rgba(186,186,186,0.09),0px_1.237px_3.299px_0px_rgba(186,186,186,0.1)]";
const CARD_SHADOW_RIGHT_MOBILE = "shadow-[0px_35.467px_9.898px_0px_rgba(186,186,186,0),0px_22.683px_9.073px_0px_rgba(186,186,186,0.01),0px_12.785px_7.836px_0px_rgba(186,186,186,0.05),0px_5.774px_5.774px_0px_rgba(186,186,186,0.09),0px_1.237px_3.299px_0px_rgba(186,186,186,0.1)]";
const BRAND_ART = {
    one: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-[10.01%_0.01%_7.49%_24.08%]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: "",
                    className: "absolute inset-0 block size-full max-w-none",
                    src: `${A}/brand-1-type.svg`
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 332,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-[0_78.9%_0_-0.01%]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: "",
                    className: "absolute inset-0 block size-full max-w-none",
                    src: `${A}/brand-1-mark.svg`
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 339,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 330,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    two: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-[0_0_-0.01%_0]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            alt: "",
            className: "absolute inset-0 block size-full max-w-none",
            src: `${A}/brand-2.svg`
        }, void 0, false, {
            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
            lineNumber: 349,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 348,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    three: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-[-0.02%_0_0.02%_0]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            alt: "",
            className: "absolute inset-0 block size-full max-w-none",
            src: `${A}/brand-3.svg`
        }, void 0, false, {
            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
            lineNumber: 354,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 353,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    four: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-[0_-0.01%_0_0.01%]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            alt: "",
            className: "absolute inset-0 block size-full max-w-none",
            src: `${A}/brand-4.svg`
        }, void 0, false, {
            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
            lineNumber: 359,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 358,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
// Logo box sizes are identical on iPad and desktop; only mobile shrinks them.
const BRAND_SIZE = {
    one: "h-[23.741px] w-[130.577px]",
    two: "h-[19.975px] w-[84.396px]",
    three: "h-[34.569px] w-[86.421px]",
    four: "h-[22.045px] w-[97px]"
};
const MOBILE_CELLS = [
    {
        art: "one",
        size: "h-[17.806px] w-[97.933px]"
    },
    {
        art: "two",
        size: "h-[14.982px] w-[63.297px]"
    },
    {
        art: "three",
        size: "h-[25.926px] w-[64.816px]"
    }
];
const IPAD_CELLS = [
    {
        art: "one",
        size: BRAND_SIZE.one
    },
    {
        art: "three",
        size: BRAND_SIZE.three
    },
    {
        art: "four",
        size: BRAND_SIZE.four
    },
    {
        art: "two",
        size: BRAND_SIZE.two
    }
];
const DESKTOP_CELLS = [
    {
        art: "one",
        size: BRAND_SIZE.one
    },
    {
        art: "two",
        size: BRAND_SIZE.two
    },
    {
        art: "three",
        size: BRAND_SIZE.three
    },
    {
        art: "four",
        size: BRAND_SIZE.four
    },
    {
        art: "two",
        size: BRAND_SIZE.two
    }
];
const LogoStrip = ({ className, cells, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${REVEAL} flex items-center border border-solid border-[rgba(255,255,255,0.1)] bg-[#0f0f0f] ${className}`,
        style: style,
        children: [
            cells.map((cell, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative h-full min-w-px flex-[1_0_0] overflow-clip ${index < cells.length - 1 ? "border-r border-solid border-[rgba(255,255,255,0.1)]" : ""}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip ${cell.size}`,
                        children: BRAND_ART[cell.art]
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 409,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Corners, {}, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 422,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 404,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = LogoStrip;
/* ------------------------------- mobile ------------------------------- */ const MobileLayout = ()=>// The whole 402px Figma frame is scaled as one unit, so every ratio — line
    // breaks included — matches the design at any phone width while the layout
    // still grows with the screen. Hands over to the tablet frame at 640px,
    // where the scaled type has reached its 56px size.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScaleFrame, {
        frameWidth: 402,
        className: "w-full overflow-hidden min-[640px]:hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-start gap-[16px] p-[16px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: delay(0),
                    className: `${REVEAL} relative flex h-[59px] w-full shrink-0 items-center justify-center gap-[121px] border border-solid border-[rgba(255,255,255,0.1)] bg-[#0f0f0f] px-[32px] py-[15.5px]`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex min-w-px flex-[1_0_0] items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#home",
                                    className: "relative h-[28px] w-[40px] shrink-0 overflow-clip",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        alt: "Logo",
                                        className: "absolute inset-0 block size-full max-w-none",
                                        src: `${A}/logo.svg`
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 442,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 441,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative size-[24px] shrink-0 cursor-pointer transition-opacity duration-200 hover:opacity-70",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        alt: "Menu",
                                        className: "absolute inset-0 block size-full max-w-none",
                                        src: `${A}/menu.svg`
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 445,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 444,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 440,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Corners, {}, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 448,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 436,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-[628px] w-full shrink-0 overflow-clip border border-solid border-[rgba(255,255,255,0.1)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 overflow-clip",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute left-[-1px] top-[-3px] h-[631px] w-[372px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaStardust, {
                                    query: "(max-width: 639px)",
                                    ...STARDUST
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 455,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 454,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 453,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-[12px] right-[12px] top-[32px] flex h-[304px] flex-col items-center gap-[24px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex w-full shrink-0 flex-col items-center gap-[12px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            step: 80
                                        }, void 0, false, {
                                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                            lineNumber: 462,
                                            columnNumber: 11
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex w-full shrink-0 flex-col items-start gap-[8px] text-center text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    style: delay(160),
                                                    className: `${REVEAL} relative w-[340px] max-w-full shrink-0 text-[35px] leading-[40px] tracking-[-1.4px]`,
                                                    children: "Build Your Global Team. Effortlessly."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                                    lineNumber: 464,
                                                    columnNumber: 13
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: delay(240),
                                                    className: `${REVEAL} relative w-full shrink-0 text-[14px] leading-[1.5] text-[rgba(255,255,255,0.6)]`,
                                                    children: "Hire exceptional talent across 180+ countries, automate compliance, & manage international payroll."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 13
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                            lineNumber: 463,
                                            columnNumber: 11
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 461,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: delay(320),
                                    className: `${REVEAL} relative flex w-full shrink-0 flex-col items-start justify-center gap-[16px] overflow-clip`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightButton, {
                                            label: "Get started",
                                            href: "#start",
                                            className: "w-full px-[24px] py-[14px]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                            lineNumber: 480,
                                            columnNumber: 11
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkButton, {
                                            label: "Book a call",
                                            href: "#book",
                                            className: "w-full px-[24px] py-[14px]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                            lineNumber: 481,
                                            columnNumber: 11
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 476,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 460,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 h-[224px] w-full overflow-clip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: delay(400),
                                    className: `${REVEAL} absolute left-1/2 top-0 h-[371.127px] w-[370.391px] -translate-x-1/2 overflow-clip rounded-[412px]`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaGlobe, {
                                        query: "(max-width: 639px)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 491,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 487,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    className: "overflow-clip",
                                    shadow: CARD_SHADOW_LEFT_MOBILE,
                                    position: {
                                        ...delay(480),
                                        left: "20.02px",
                                        top: "20.41px"
                                    },
                                    value: "300K+",
                                    caption: "users globally",
                                    width: "107.1px",
                                    padding: "8.007px",
                                    gap: "6.006px",
                                    radius: "4.004px",
                                    border: "1.001px",
                                    valueSize: "18.017px",
                                    captionSize: "14.013px",
                                    tracking: "-0.165px",
                                    media: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatars, {
                                        size: "20.019px",
                                        overlap: "4.949px"
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 508,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 494,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    className: "overflow-clip",
                                    shadow: CARD_SHADOW_RIGHT_MOBILE,
                                    position: {
                                        ...delay(560),
                                        right: "12.01px",
                                        top: "131.52px"
                                    },
                                    value: "120+",
                                    caption: "countries supported",
                                    width: "143.134px",
                                    padding: "8.007px",
                                    gap: "6.006px",
                                    radius: "4.004px",
                                    border: "0.412px",
                                    valueSize: "18.017px",
                                    captionSize: "14.013px",
                                    tracking: "-0.165px",
                                    media: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlagRow, {
                                        size: "20.019px",
                                        gap: "6.006px",
                                        maskSize: "145.137px 21.02px",
                                        maskPosition: "2.76px -1.07px",
                                        offsetX: "2.76px",
                                        offsetY: "1.07px"
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 511,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 486,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Corners, {
                            size: "size-[9.326px]"
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 538,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 452,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoStrip, {
                    className: "relative h-[80px] w-full shrink-0",
                    style: delay(640),
                    cells: MOBILE_CELLS
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 542,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
            lineNumber: 434,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 433,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = MobileLayout;
/* -------------------------------- iPad -------------------------------- */ const IpadLayout = ()=>// Figma frame is 744 wide (680 content + 32 gutters); widths stay fluid above
    // that so the same layout carries up to the 1280px desktop breakpoint.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hidden flex-col items-start gap-[16px] p-[16px_32px] min-[640px]:flex desktop-sm:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: delay(0),
                className: `${REVEAL} relative flex h-[59px] w-full shrink-0 items-center justify-center border border-solid border-[rgba(255,255,255,0.1)] bg-[#0f0f0f] px-[32px] py-[15.5px]`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex min-w-px flex-[1_0_0] items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#home",
                                className: "relative h-[28px] w-[40px] shrink-0 overflow-clip",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    alt: "Logo",
                                    className: "absolute inset-0 block size-full max-w-none",
                                    src: `${A}/logo.svg`
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 561,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 560,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative size-[24px] shrink-0 cursor-pointer transition-opacity duration-200 hover:opacity-70",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    alt: "Menu",
                                    className: "absolute inset-0 block size-full max-w-none",
                                    src: `${A}/menu.svg`
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 564,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 563,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 559,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Corners, {}, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 567,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 558,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full shrink-0 overflow-clip border border-solid border-[rgba(255,255,255,0.1)]",
                style: {
                    height: fluidLg(770, 857)
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-clip",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute left-[-1px] top-[-1px] h-[calc(100%+90px)] w-[calc(100%+2px)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaStardust, {
                                query: "(min-width: 640px) and (max-width: 1279px)",
                                ...STARDUST
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 577,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 576,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 575,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-[48px] flex w-[468px] max-w-[calc(100%-48px)] -translate-x-1/2 flex-col items-center gap-[32px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex w-full shrink-0 flex-col items-center gap-[24px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                        step: 80
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 584,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex w-full shrink-0 flex-col items-start gap-[16px] text-center text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                style: delay(160),
                                                className: `${REVEAL} relative w-full shrink-0 text-[56px] leading-[55px] tracking-[-2.24px]`,
                                                children: "Build Your Global Team. Effortlessly."
                                            }, void 0, false, {
                                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                                lineNumber: 586,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: delay(240),
                                                className: `${REVEAL} relative w-full shrink-0 text-[16px] leading-[1.5] text-[rgba(255,255,255,0.6)]`,
                                                children: "Hire exceptional talent across 180+ countries, automate compliance, and manage international payroll."
                                            }, void 0, false, {
                                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                                lineNumber: 589,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 585,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 583,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: delay(320),
                                className: `${REVEAL} relative flex shrink-0 items-center gap-[16px] overflow-clip`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightButton, {
                                        label: "Get started",
                                        href: "#start",
                                        className: "px-[24px] py-[14px]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 602,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkButton, {
                                        label: "Book a call",
                                        href: "#book",
                                        className: "px-[24px] py-[14px]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 603,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 598,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 582,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-full overflow-clip",
                        style: {
                            height: fluidLg(360, 447)
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${REVEAL} absolute left-1/2 top-0 aspect-[680/681.433] -translate-x-1/2 overflow-clip rounded-[999px]`,
                                style: {
                                    ...delay(400),
                                    width: fluidLg(680, 898),
                                    maxWidth: "100%"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaGlobe, {
                                    query: "(min-width: 640px) and (max-width: 1279px)"
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 617,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 613,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                ...BIG_CARD_LEFT,
                                position: {
                                    ...delay(480),
                                    left: fluidLg(32, 85),
                                    top: "8.3%"
                                },
                                shadow: CARD_SHADOW_LEFT_DESKTOP
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 620,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                ...BIG_CARD_RIGHT,
                                position: {
                                    ...delay(560),
                                    right: fluidLg(32, 51),
                                    top: "61.6%"
                                },
                                shadow: CARD_SHADOW_RIGHT_DESKTOP
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 626,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 609,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Corners, {
                        size: "size-[9.479px]"
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 633,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 571,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoStrip, {
                className: "relative h-[95px] w-full shrink-0",
                style: delay(640),
                cells: IPAD_CELLS
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 637,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 556,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = IpadLayout;
/* ------------------------------ desktop ------------------------------- */ const DesktopLayout = ()=>// Exact at 1280; above that every box keeps its proportion of the content
    // width (1184 = 100vw − 96) so the whole section grows with the screen.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hidden w-full flex-col items-start gap-[16px] p-[16px_48px] desktop-sm:flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: delay(0),
                className: `${REVEAL} relative flex w-full items-center justify-center border border-solid border-[rgba(255,255,255,0.1)] bg-[#0f0f0f] px-[32px] py-[16px]`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto flex min-w-px max-w-[1600px] flex-[1_0_0] items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#home",
                                className: "relative h-[28px] w-[40px] shrink-0 overflow-clip",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    alt: "Logo",
                                    className: "absolute inset-0 block size-full max-w-none",
                                    src: `${A}/logo.svg`
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 660,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 659,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightButton, {
                                label: "Get started",
                                href: "#start",
                                className: "px-[16px] py-[12px]"
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 662,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-1/2 top-[calc(50%-0.5px)] flex -translate-x-1/2 -translate-y-1/2 items-center gap-[24px] whitespace-nowrap text-[16px] leading-normal text-white",
                                children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `#${link.label.toLowerCase()}`,
                                        className: `relative shrink-0 cursor-pointer transition-opacity duration-200 ${link.active ? "hover:opacity-80" : "opacity-60 hover:opacity-100"}`,
                                        children: link.label
                                    }, link.label, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 665,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 663,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 658,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Corners, {}, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 677,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 652,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full shrink-0 overflow-clip border border-solid border-[rgba(255,255,255,0.1)]",
                style: {
                    height: "clamp(857px, calc(72.38vw - 69.5px), 1100px)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-clip",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute left-[-75px] top-[-3px] h-[calc(100%+6px)] w-[calc(100%+150px)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaStardust, {
                                query: "(min-width: 1280px)",
                                ...STARDUST
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 687,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 686,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 685,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: "",
                            className: "absolute inset-0 block size-full max-w-none",
                            src: `${A}/corners.svg`
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 691,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 690,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-[48px] flex w-[468px] -translate-x-1/2 flex-col items-center gap-[32px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex w-full shrink-0 flex-col items-center gap-[24px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                        step: 80
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 697,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex w-full shrink-0 flex-col items-start gap-[16px] text-center text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                style: delay(160),
                                                className: `${REVEAL} relative w-full shrink-0 text-[56px] leading-[64px] tracking-[-2.24px]`,
                                                children: "Build Your Global Team. Effortlessly."
                                            }, void 0, false, {
                                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                                lineNumber: 699,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: delay(240),
                                                className: `${REVEAL} relative w-full shrink-0 text-[16px] leading-[1.5] text-[rgba(255,255,255,0.6)]`,
                                                children: "Hire exceptional talent across 180+ countries, automate compliance, and manage international payroll."
                                            }, void 0, false, {
                                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                                lineNumber: 702,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 698,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 696,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: delay(320),
                                className: `${REVEAL} relative flex shrink-0 items-center gap-[16px] overflow-clip`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightButton, {
                                        label: "Get started",
                                        href: "#start",
                                        className: "px-[24px] py-[14px]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 715,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkButton, {
                                        label: "Book a call",
                                        href: "#book",
                                        className: "px-[24px] py-[14px]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 716,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 711,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 695,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-1/2 aspect-[898/447] w-[75.84%] -translate-x-1/2 overflow-clip full-hd:w-[62%] ultrawide:w-[54%]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: delay(400),
                                className: `${REVEAL} absolute left-1/2 top-0 aspect-[898/900] w-full -translate-x-1/2 overflow-clip rounded-[999px]`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaGlobe, {
                                    query: "(min-width: 1280px)"
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 726,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 722,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                ...BIG_CARD_LEFT,
                                position: {
                                    ...delay(480),
                                    left: "9.47%",
                                    top: "7.38%"
                                },
                                shadow: CARD_SHADOW_LEFT_DESKTOP
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 729,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                ...BIG_CARD_RIGHT,
                                position: {
                                    ...delay(560),
                                    right: "5.68%",
                                    top: "61.52%"
                                },
                                shadow: CARD_SHADOW_RIGHT_DESKTOP
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 735,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 721,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 681,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoStrip, {
                className: "relative h-[95px] w-full shrink-0",
                style: delay(640),
                cells: DESKTOP_CELLS
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 744,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 650,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = DesktopLayout;
const Sec1Hero = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full bg-[#181818]",
        style: {
            fontFamily: HELVETICA
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileLayout, {}, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 754,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IpadLayout, {}, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 755,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopLayout, {}, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 756,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 753,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = Sec1Hero;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "LightButton");
__turbopack_context__.k.register(_c1, "DarkButton");
__turbopack_context__.k.register(_c2, "Badge");
__turbopack_context__.k.register(_c3, "Corners");
__turbopack_context__.k.register(_c4, "StatCard");
__turbopack_context__.k.register(_c5, "Avatars");
__turbopack_context__.k.register(_c6, "FlagRow");
__turbopack_context__.k.register(_c7, "LogoStrip");
__turbopack_context__.k.register(_c8, "MobileLayout");
__turbopack_context__.k.register(_c9, "IpadLayout");
__turbopack_context__.k.register(_c10, "DesktopLayout");
__turbopack_context__.k.register(_c11, "Sec1Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_06wjbv4._.js.map