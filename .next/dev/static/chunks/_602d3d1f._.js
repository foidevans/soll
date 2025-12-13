(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/soll-logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SollLogo",
    ()=>SollLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function SollLogo({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 40 40",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-primary", className),
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "20",
                cy: "20",
                r: "18",
                stroke: "currentColor",
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/components/ui/soll-logo.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "20",
                cy: "20",
                r: "8",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/components/ui/soll-logo.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 2C20 2 28 10 28 20C28 30 20 38 20 38",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/ui/soll-logo.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 2C20 2 12 10 12 20C12 30 20 38 20 38",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/ui/soll-logo.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/soll-logo.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = SollLogo;
var _c;
__turbopack_context__.k.register(_c, "SollLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/store.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppStoreProvider",
    ()=>AppStoreProvider,
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const mockUsers = [
    {
        id: "1",
        username: "vitalik.eth",
        walletAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f8fB12",
        bio: "Building the future of the decentralized web",
        avatar: "/crypto-avatar-man.jpg"
    },
    {
        id: "2",
        username: "satoshi.eth",
        walletAddress: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
        bio: "One block at a time",
        avatar: "/mysterious-avatar.jpg"
    },
    {
        id: "3",
        username: "defi_queen",
        walletAddress: "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
        bio: "DeFi enthusiast | Yield farming",
        avatar: "/woman-crypto-avatar.jpg"
    },
    {
        id: "4",
        username: "nft_collector",
        walletAddress: "0x2546BcD3c84621e976D8185a91A922aE77ECEc30",
        bio: "Collecting digital art since 2020",
        avatar: "/art-collector-avatar.jpg"
    },
    {
        id: "5",
        username: "web3_dev",
        walletAddress: "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E",
        bio: "Smart contract developer | Solidity",
        avatar: "/developer-avatar.png"
    }
];
const mockPosts = [
    {
        id: "1",
        userId: "1",
        username: "vitalik.eth",
        userAvatar: "/crypto-avatar-man.jpg",
        content: "Just deployed a new smart contract. The gas fees are finally reasonable!",
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        likes: 42
    },
    {
        id: "2",
        userId: "2",
        username: "satoshi.eth",
        userAvatar: "/mysterious-avatar.jpg",
        content: "Remember: Not your keys, not your coins. Stay safe out there.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
        likes: 128
    },
    {
        id: "3",
        userId: "3",
        username: "defi_queen",
        userAvatar: "/woman-crypto-avatar.jpg",
        content: "New liquidity pool just dropped. APY looking juicy",
        videoUrl: "/defi-dashboard-chart.jpg",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
        likes: 67
    },
    {
        id: "4",
        userId: "4",
        username: "nft_collector",
        userAvatar: "/art-collector-avatar.jpg",
        content: "Just minted this incredible piece. The artist is truly talented!",
        videoUrl: "/abstract-digital-art-nft.png",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8),
        likes: 89
    },
    {
        id: "5",
        userId: "5",
        username: "web3_dev",
        userAvatar: "/developer-avatar.png",
        content: "Pro tip: Always audit your smart contracts before deployment. Security first!",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
        likes: 156
    }
];
function AppStoreProvider({ children }) {
    _s();
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mockPosts);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mockUsers);
    const addPost = (post)=>{
        setPosts((prev)=>[
                post,
                ...prev
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
        value: {
            currentUser,
            setCurrentUser,
            posts,
            setPosts,
            addPost,
            users,
            setUsers
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/store.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(AppStoreProvider, "3YPh250k5/sH3cS3/NF3ETagqes=");
_c = AppStoreProvider;
function useAppStore() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    if (!context) {
        throw new Error("useAppStore must be used within AppStoreProvider");
    }
    return context;
}
_s1(useAppStore, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AppStoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/contracts/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTRACTS",
    ()=>CONTRACTS,
    "NETWORK",
    ()=>NETWORK
]);
const NETWORK = {
    name: "Scroll Sepolia Testnet",
    chainId: 534351,
    rpcUrl: "https://sepolia-rpc.scroll.io/",
    blockExplorer: "https://sepolia.scrollscan.com/"
};
const CONTRACTS = {
    DemoScrollToken: "0x6C176d28Ce1c6bE488ba989dE6Bae67B6A3B3157",
    MockImpactOracle: "0x3d92AD2ed2773e58C7D5fcDAf3e7fAF34E43054E",
    ContentVault: "0x0F7f3106594cBA402aE03f6BEb781663bB474AB1",
    UserRegistry: "0xFC9C2D839F3831c3431B5D454f3696EF85fd4Fc5",
    NetworkGraph: "0xd4EED03070E89BbC9F84f279d687F0bF48D10851"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-toast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: 'ADD_TOAST',
    UPDATE_TOAST: 'UPDATE_TOAST',
    DISMISS_TOAST: 'DISMISS_TOAST',
    REMOVE_TOAST: 'REMOVE_TOAST'
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: 'REMOVE_TOAST',
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case 'UPDATE_TOAST':
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case 'DISMISS_TOAST':
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case 'REMOVE_TOAST':
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: 'UPDATE_TOAST',
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: 'DISMISS_TOAST',
            toastId: id
        });
    dispatch({
        type: 'ADD_TOAST',
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: 'DISMISS_TOAST',
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/providers/web3-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Web3Provider",
    ()=>Web3Provider,
    "useWalletContext",
    ()=>useWalletContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contracts/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const WalletContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useWalletContext() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WalletContext);
    if (!context) {
        throw new Error("useWalletContext must be used within Web3Provider");
    }
    return context;
}
_s(useWalletContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function WalletProvider({ children }) {
    _s1();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chainId, setChainId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConnecting, setIsConnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isCorrectNetwork = chainId === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NETWORK"].chainId;
    // Check for existing connection on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WalletProvider.useEffect": ()=>{
            const checkConnection = {
                "WalletProvider.useEffect.checkConnection": async ()=>{
                    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.ethereum) {
                        try {
                            const accounts = await window.ethereum.request({
                                method: "eth_accounts"
                            });
                            if (accounts.length > 0) {
                                setAddress(accounts[0]);
                                const chainIdHex = await window.ethereum.request({
                                    method: "eth_chainId"
                                });
                                setChainId(Number.parseInt(chainIdHex, 16));
                            }
                        } catch (error) {
                            console.error("Error checking connection:", error);
                        }
                    }
                }
            }["WalletProvider.useEffect.checkConnection"];
            checkConnection();
        }
    }["WalletProvider.useEffect"], []);
    // Listen for account and chain changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WalletProvider.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== "undefined" && window.ethereum) {
                const handleAccountsChanged = {
                    "WalletProvider.useEffect.handleAccountsChanged": (accounts)=>{
                        if (accounts.length === 0) {
                            setAddress(null);
                        } else {
                            setAddress(accounts[0]);
                        }
                    }
                }["WalletProvider.useEffect.handleAccountsChanged"];
                const handleChainChanged = {
                    "WalletProvider.useEffect.handleChainChanged": (chainIdHex)=>{
                        setChainId(Number.parseInt(chainIdHex, 16));
                    }
                }["WalletProvider.useEffect.handleChainChanged"];
                window.ethereum.on("accountsChanged", handleAccountsChanged);
                window.ethereum.on("chainChanged", handleChainChanged);
                return ({
                    "WalletProvider.useEffect": ()=>{
                        ;
                        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
                        window.ethereum.removeListener("chainChanged", handleChainChanged);
                    }
                })["WalletProvider.useEffect"];
            }
        }
    }["WalletProvider.useEffect"], []);
    const switchNetwork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WalletProvider.useCallback[switchNetwork]": async ()=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || !window.ethereum) {
                toast({
                    title: "Wallet not found",
                    description: "Please install MetaMask or another Web3 wallet",
                    variant: "destructive"
                });
                return;
            }
            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                        {
                            chainId: `0x${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NETWORK"].chainId.toString(16)}`
                        }
                    ]
                });
            } catch (switchError) {
                // Chain not added, try to add it
                if (switchError.code === 4902) {
                    try {
                        await window.ethereum.request({
                            method: "wallet_addEthereumChain",
                            params: [
                                {
                                    chainId: `0x${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NETWORK"].chainId.toString(16)}`,
                                    chainName: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NETWORK"].name,
                                    rpcUrls: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NETWORK"].rpcUrl
                                    ],
                                    blockExplorerUrls: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NETWORK"].blockExplorer
                                    ],
                                    nativeCurrency: {
                                        name: "ETH",
                                        symbol: "ETH",
                                        decimals: 18
                                    }
                                }
                            ]
                        });
                    } catch (addError) {
                        toast({
                            title: "Failed to add network",
                            description: "Please add Scroll Sepolia manually",
                            variant: "destructive"
                        });
                    }
                }
            }
        }
    }["WalletProvider.useCallback[switchNetwork]"], [
        toast
    ]);
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WalletProvider.useCallback[connect]": async ()=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || !window.ethereum) {
                toast({
                    title: "Wallet not found",
                    description: "Please install MetaMask or another Web3 wallet",
                    variant: "destructive"
                });
                return;
            }
            setIsConnecting(true);
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });
                if (accounts.length > 0) {
                    setAddress(accounts[0]);
                    const chainIdHex = await window.ethereum.request({
                        method: "eth_chainId"
                    });
                    const currentChainId = Number.parseInt(chainIdHex, 16);
                    setChainId(currentChainId);
                    // Auto-switch to Scroll Sepolia if on wrong network
                    if (currentChainId !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NETWORK"].chainId) {
                        await switchNetwork();
                    }
                    toast({
                        title: "Wallet connected",
                        description: `Connected to ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`
                    });
                }
            } catch (error) {
                toast({
                    title: "Connection failed",
                    description: error?.message || "Failed to connect wallet",
                    variant: "destructive"
                });
            } finally{
                setIsConnecting(false);
            }
        }
    }["WalletProvider.useCallback[connect]"], [
        toast,
        switchNetwork
    ]);
    const disconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WalletProvider.useCallback[disconnect]": ()=>{
            setAddress(null);
            setChainId(null);
            toast({
                title: "Wallet disconnected",
                description: "You have been disconnected from your wallet"
            });
        }
    }["WalletProvider.useCallback[disconnect]"], [
        toast
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletContext.Provider, {
        value: {
            address,
            isConnected: !!address,
            isConnecting,
            chainId,
            isCorrectNetwork,
            connect,
            disconnect,
            switchNetwork
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/providers/web3-provider.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_s1(WalletProvider, "+64c8QBYbthFIuBUYwYCtXQSjzM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = WalletProvider;
function Web3Provider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletProvider, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppStoreProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/components/providers/web3-provider.tsx",
            lineNumber: 207,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/providers/web3-provider.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_c1 = Web3Provider;
var _c, _c1;
__turbopack_context__.k.register(_c, "WalletProvider");
__turbopack_context__.k.register(_c1, "Web3Provider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-wallet.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWallet",
    ()=>useWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$web3$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/providers/web3-provider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useWallet() {
    _s();
    const { address, isConnected, isConnecting, chainId, isCorrectNetwork, connect, disconnect, switchNetwork } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$web3$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletContext"])();
    const shortenAddress = (addr)=>{
        return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
    };
    return {
        address,
        isConnected,
        isConnecting,
        chainId,
        isCorrectNetwork,
        connect,
        disconnect,
        switchNetwork,
        shortenedAddress: address ? shortenAddress(address) : null
    };
}
_s(useWallet, "7BiX5VY1JQGJ6stFu9cdHnezy9c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$web3$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/connect-wallet-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectWalletButton",
    ()=>ConnectWalletButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-wallet.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contracts/config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ConnectWalletButton({ showDisconnect = true }) {
    _s();
    const { isConnected, isConnecting, isCorrectNetwork, connect, disconnect, switchNetwork, shortenedAddress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    if (isConnected && !isCorrectNetwork) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: switchNetwork,
            variant: "destructive",
            className: "gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/components/ui/connect-wallet-button.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                "Switch to ",
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NETWORK"].name
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/connect-wallet-button.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this);
    }
    if (isConnected && shortenedAddress) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "h-4 w-4 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/connect-wallet-button.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium text-primary",
                            children: shortenedAddress
                        }, void 0, false, {
                            fileName: "[project]/components/ui/connect-wallet-button.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/connect-wallet-button.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                showDisconnect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    onClick: disconnect,
                    className: "text-muted-foreground hover:text-foreground",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/connect-wallet-button.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/connect-wallet-button.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/connect-wallet-button.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onClick: connect,
        disabled: isConnecting,
        className: "gap-2",
        children: isConnecting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-4 w-4 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/components/ui/connect-wallet-button.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this),
                "Connecting..."
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/components/ui/connect-wallet-button.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this),
                "Connect Wallet"
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/ui/connect-wallet-button.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(ConnectWalletButton, "VhEs+D7dLmb40u8H8PiYjZo7cs0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c = ConnectWalletButton;
var _c;
__turbopack_context__.k.register(_c, "ConnectWalletButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/floating-shapes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingShapes",
    ()=>FloatingShapes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function FloatingShapes() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 pointer-events-none overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse-glow"
            }, void 0, false, {
                fileName: "[project]/components/landing/floating-shapes.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl animate-pulse-glow",
                style: {
                    animationDelay: "2s"
                }
            }, void 0, false, {
                fileName: "[project]/components/landing/floating-shapes.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 -right-20 w-72 h-72 rounded-full bg-accent-lime/15 blur-3xl animate-pulse-glow",
                style: {
                    animationDelay: "1s"
                }
            }, void 0, false, {
                fileName: "[project]/components/landing/floating-shapes.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-32 left-20 w-8 h-8 bg-accent rounded-lg rotate-45 animate-float opacity-60"
            }, void 0, false, {
                fileName: "[project]/components/landing/floating-shapes.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-48 right-32 w-6 h-6 bg-primary/40 rounded-full animate-float-slow"
            }, void 0, false, {
                fileName: "[project]/components/landing/floating-shapes.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-48 left-40 w-10 h-10 bg-accent-lime/40 rounded-xl animate-float-delayed"
            }, void 0, false, {
                fileName: "[project]/components/landing/floating-shapes.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/3 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float",
                style: {
                    animationDelay: "3s"
                }
            }, void 0, false, {
                fileName: "[project]/components/landing/floating-shapes.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/3 right-1/4 w-12 h-12 border-2 border-accent/30 rounded-xl rotate-12 animate-float-slow"
            }, void 0, false, {
                fileName: "[project]/components/landing/floating-shapes.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/landing/floating-shapes.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = FloatingShapes;
var _c;
__turbopack_context__.k.register(_c, "FloatingShapes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/contracts/contract-factory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getContract",
    ()=>getContract,
    "getProvider",
    ()=>getProvider,
    "getSigner",
    ()=>getSigner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
const getContract = (address, abi, signerOrProvider)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(address, abi, signerOrProvider);
};
const getProvider = ()=>{
    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.ethereum) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
    }
    return null;
};
const getSigner = async ()=>{
    const provider = getProvider();
    if (provider) {
        return await provider.getSigner();
    }
    return null;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/abis/UserRegistry.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"inputs":[{"internalType":"string","name":"_username","type":"string"}],"name":"registerUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_profilePicHash","type":"string"}],"name":"updateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUser","outputs":[{"components":[{"internalType":"string","name":"username","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"profilePicHash","type":"string"},{"internalType":"bool","name":"exists","type":"bool"}],"internalType":"struct UserRegistry.User","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_username","type":"string"}],"name":"getUserByUsername","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"username","type":"string"}],"name":"UserRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"ProfileUpdated","type":"event"}]);}),
"[project]/hooks/blockchain/use-transaction.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransaction",
    ()=>useTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toast.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useTransaction() {
    _s();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: "idle"
    });
    const execute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransaction.useCallback[execute]": async (txFn, options)=>{
            try {
                setState({
                    status: "confirming"
                });
                toast({
                    title: "Waiting for wallet confirmation...",
                    description: "Please confirm the transaction in your wallet"
                });
                const tx = await txFn();
                setState({
                    status: "pending",
                    hash: tx.hash
                });
                toast({
                    title: "Transaction submitted",
                    description: `Hash: ${tx.hash.slice(0, 10)}...${tx.hash.slice(-8)}`
                });
                const result = await tx.wait();
                setState({
                    status: "success",
                    hash: tx.hash
                });
                toast({
                    title: options?.successMessage || "Transaction confirmed",
                    description: "Your transaction was successful"
                });
                options?.onSuccess?.(result);
                return result;
            } catch (error) {
                const message = error?.reason || error?.message || "Transaction failed";
                setState({
                    status: "error",
                    error: message
                });
                toast({
                    title: "Transaction failed",
                    description: message,
                    variant: "destructive"
                });
                return null;
            }
        }
    }["useTransaction.useCallback[execute]"], [
        toast
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransaction.useCallback[reset]": ()=>{
            setState({
                status: "idle"
            });
        }
    }["useTransaction.useCallback[reset]"], []);
    return {
        ...state,
        isLoading: state.status === "confirming" || state.status === "pending",
        isConfirming: state.status === "confirming",
        isPending: state.status === "pending",
        isSuccess: state.status === "success",
        isError: state.status === "error",
        execute,
        reset
    };
}
_s(useTransaction, "FwgQ/BeS+bkWkVf/GrFlZwdB87I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/blockchain/use-user-registry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserRegistry",
    ()=>useUserRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contracts/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contracts/contract-factory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$UserRegistry$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/abis/UserRegistry.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/blockchain/use-transaction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function useUserRegistry() {
    _s();
    const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransaction"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const registerUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserRegistry.useCallback[registerUser]": async (username)=>{
            const signer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSigner"])();
            if (!signer) throw new Error("No signer available");
            const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].UserRegistry, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$UserRegistry$2e$json__$28$json$29$__["default"], signer);
            return transaction.execute({
                "useUserRegistry.useCallback[registerUser]": async ()=>{
                    const tx = await contract.registerUser(username);
                    return tx;
                }
            }["useUserRegistry.useCallback[registerUser]"], {
                successMessage: "Account created on-chain!"
            });
        }
    }["useUserRegistry.useCallback[registerUser]"], [
        transaction
    ]);
    const updateProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserRegistry.useCallback[updateProfile]": async (bio, profilePicHash)=>{
            const signer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSigner"])();
            if (!signer) throw new Error("No signer available");
            const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].UserRegistry, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$UserRegistry$2e$json__$28$json$29$__["default"], signer);
            return transaction.execute({
                "useUserRegistry.useCallback[updateProfile]": async ()=>{
                    const tx = await contract.updateProfile(bio, profilePicHash);
                    return tx;
                }
            }["useUserRegistry.useCallback[updateProfile]"], {
                successMessage: "Profile updated on-chain!"
            });
        }
    }["useUserRegistry.useCallback[updateProfile]"], [
        transaction
    ]);
    const getUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserRegistry.useCallback[getUser]": async (address)=>{
            setIsLoading(true);
            try {
                const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProvider"])();
                if (!provider) return null;
                const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].UserRegistry, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$UserRegistry$2e$json__$28$json$29$__["default"], provider);
                const user = await contract.getUser(address);
                return {
                    username: user.username,
                    bio: user.bio,
                    profilePicHash: user.profilePicHash,
                    exists: user.exists
                };
            } catch (error) {
                console.error("Error fetching user:", error);
                return null;
            } finally{
                setIsLoading(false);
            }
        }
    }["useUserRegistry.useCallback[getUser]"], []);
    const getUserByUsername = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserRegistry.useCallback[getUserByUsername]": async (username)=>{
            setIsLoading(true);
            try {
                const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProvider"])();
                if (!provider) return null;
                const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].UserRegistry, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$UserRegistry$2e$json__$28$json$29$__["default"], provider);
                const address = await contract.getUserByUsername(username);
                return address === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress ? null : address;
            } catch (error) {
                console.error("Error fetching user by username:", error);
                return null;
            } finally{
                setIsLoading(false);
            }
        }
    }["useUserRegistry.useCallback[getUserByUsername]"], []);
    return {
        registerUser,
        updateProfile,
        getUser,
        getUserByUsername,
        isLoading: isLoading || transaction.isLoading,
        isConfirming: transaction.isConfirming,
        isPending: transaction.isPending,
        transactionHash: transaction.hash
    };
}
_s(useUserRegistry, "njyooqkJcQm5+7HhTBdXDMI9GvM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransaction"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/abis/NetworkGraph.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"follow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"unfollow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getFollowers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getFollowing","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_follower","type":"address"},{"internalType":"address","name":"_following","type":"address"}],"name":"isFollowing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"follower","type":"address"},{"indexed":true,"internalType":"address","name":"following","type":"address"}],"name":"Followed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"follower","type":"address"},{"indexed":true,"internalType":"address","name":"unfollowing","type":"address"}],"name":"Unfollowed","type":"event"}]);}),
"[project]/hooks/blockchain/use-network-graph.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNetworkGraph",
    ()=>useNetworkGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contracts/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contracts/contract-factory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$NetworkGraph$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/abis/NetworkGraph.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/blockchain/use-transaction.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function useNetworkGraph() {
    _s();
    const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransaction"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const follow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNetworkGraph.useCallback[follow]": async (address)=>{
            const signer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSigner"])();
            if (!signer) throw new Error("No signer available");
            const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].NetworkGraph, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$NetworkGraph$2e$json__$28$json$29$__["default"], signer);
            return transaction.execute({
                "useNetworkGraph.useCallback[follow]": async ()=>{
                    const tx = await contract.follow(address);
                    return tx;
                }
            }["useNetworkGraph.useCallback[follow]"], {
                successMessage: "Successfully followed user!"
            });
        }
    }["useNetworkGraph.useCallback[follow]"], [
        transaction
    ]);
    const unfollow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNetworkGraph.useCallback[unfollow]": async (address)=>{
            const signer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSigner"])();
            if (!signer) throw new Error("No signer available");
            const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].NetworkGraph, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$NetworkGraph$2e$json__$28$json$29$__["default"], signer);
            return transaction.execute({
                "useNetworkGraph.useCallback[unfollow]": async ()=>{
                    const tx = await contract.unfollow(address);
                    return tx;
                }
            }["useNetworkGraph.useCallback[unfollow]"], {
                successMessage: "Successfully unfollowed user!"
            });
        }
    }["useNetworkGraph.useCallback[unfollow]"], [
        transaction
    ]);
    const getFollowers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNetworkGraph.useCallback[getFollowers]": async (address)=>{
            setIsLoading(true);
            try {
                const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProvider"])();
                if (!provider) return [];
                const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].NetworkGraph, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$NetworkGraph$2e$json__$28$json$29$__["default"], provider);
                const followers = await contract.getFollowers(address);
                return followers;
            } catch (error) {
                console.error("Error fetching followers:", error);
                return [];
            } finally{
                setIsLoading(false);
            }
        }
    }["useNetworkGraph.useCallback[getFollowers]"], []);
    const getFollowing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNetworkGraph.useCallback[getFollowing]": async (address)=>{
            setIsLoading(true);
            try {
                const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProvider"])();
                if (!provider) return [];
                const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].NetworkGraph, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$NetworkGraph$2e$json__$28$json$29$__["default"], provider);
                const following = await contract.getFollowing(address);
                return following;
            } catch (error) {
                console.error("Error fetching following:", error);
                return [];
            } finally{
                setIsLoading(false);
            }
        }
    }["useNetworkGraph.useCallback[getFollowing]"], []);
    const checkIsFollowing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNetworkGraph.useCallback[checkIsFollowing]": async (follower, following)=>{
            try {
                const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProvider"])();
                if (!provider) return false;
                const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].NetworkGraph, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$NetworkGraph$2e$json__$28$json$29$__["default"], provider);
                return await contract.isFollowing(follower, following);
            } catch (error) {
                console.error("Error checking follow status:", error);
                return false;
            }
        }
    }["useNetworkGraph.useCallback[checkIsFollowing]"], []);
    return {
        follow,
        unfollow,
        getFollowers,
        getFollowing,
        checkIsFollowing,
        isLoading: isLoading || transaction.isLoading,
        isConfirming: transaction.isConfirming,
        isPending: transaction.isPending,
        transactionHash: transaction.hash
    };
}
_s(useNetworkGraph, "A6/0UQWqeNmnaIC8k0s7S00+juY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransaction"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/abis/ContentVault.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"inputs":[{"internalType":"string","name":"_ipfsHash","type":"string"},{"internalType":"string","name":"_metadata","type":"string"}],"name":"uploadContent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_offset","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"getAllContent","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"ipfsHash","type":"string"},{"internalType":"string","name":"metadata","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"rewardBalance","type":"uint256"}],"internalType":"struct ContentVault.Content[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_creator","type":"address"}],"name":"getContentsByCreator","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"ipfsHash","type":"string"},{"internalType":"string","name":"metadata","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"rewardBalance","type":"uint256"}],"internalType":"struct ContentVault.Content[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_contentId","type":"uint256"}],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimAllRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contentCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"contentId","type":"uint256"},{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"string","name":"ipfsHash","type":"string"}],"name":"ContentUploaded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"contentId","type":"uint256"},{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsClaimed","type":"event"}]);}),
"[project]/hooks/blockchain/use-content-vault.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useContentVault",
    ()=>useContentVault
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contracts/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contracts/contract-factory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$ContentVault$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/abis/ContentVault.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/blockchain/use-transaction.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function useContentVault() {
    _s();
    const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransaction"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const uploadContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useContentVault.useCallback[uploadContent]": async (ipfsHash, metadata)=>{
            const signer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSigner"])();
            if (!signer) throw new Error("No signer available");
            const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].ContentVault, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$ContentVault$2e$json__$28$json$29$__["default"], signer);
            return transaction.execute({
                "useContentVault.useCallback[uploadContent]": async ()=>{
                    const tx = await contract.uploadContent(ipfsHash, metadata);
                    return tx;
                }
            }["useContentVault.useCallback[uploadContent]"], {
                successMessage: "Content published on-chain!"
            });
        }
    }["useContentVault.useCallback[uploadContent]"], [
        transaction
    ]);
    const getAllContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useContentVault.useCallback[getAllContent]": async (offset, limit)=>{
            setIsLoading(true);
            try {
                const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProvider"])();
                if (!provider) return [];
                const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].ContentVault, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$ContentVault$2e$json__$28$json$29$__["default"], provider);
                const contents = await contract.getAllContent(offset, limit);
                return contents.map({
                    "useContentVault.useCallback[getAllContent]": (c)=>({
                            id: c.id,
                            creator: c.creator,
                            ipfsHash: c.ipfsHash,
                            metadata: c.metadata,
                            timestamp: c.timestamp,
                            rewardBalance: c.rewardBalance
                        })
                }["useContentVault.useCallback[getAllContent]"]);
            } catch (error) {
                console.error("Error fetching all content:", error);
                return [];
            } finally{
                setIsLoading(false);
            }
        }
    }["useContentVault.useCallback[getAllContent]"], []);
    const getContentsByCreator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useContentVault.useCallback[getContentsByCreator]": async (creator)=>{
            setIsLoading(true);
            try {
                const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProvider"])();
                if (!provider) return [];
                const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].ContentVault, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$ContentVault$2e$json__$28$json$29$__["default"], provider);
                const contents = await contract.getContentsByCreator(creator);
                return contents.map({
                    "useContentVault.useCallback[getContentsByCreator]": (c)=>({
                            id: c.id,
                            creator: c.creator,
                            ipfsHash: c.ipfsHash,
                            metadata: c.metadata,
                            timestamp: c.timestamp,
                            rewardBalance: c.rewardBalance
                        })
                }["useContentVault.useCallback[getContentsByCreator]"]);
            } catch (error) {
                console.error("Error fetching creator content:", error);
                return [];
            } finally{
                setIsLoading(false);
            }
        }
    }["useContentVault.useCallback[getContentsByCreator]"], []);
    const claimRewards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useContentVault.useCallback[claimRewards]": async (contentId)=>{
            const signer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSigner"])();
            if (!signer) throw new Error("No signer available");
            const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].ContentVault, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$ContentVault$2e$json__$28$json$29$__["default"], signer);
            return transaction.execute({
                "useContentVault.useCallback[claimRewards]": async ()=>{
                    const tx = await contract.claimRewards(contentId);
                    return tx;
                }
            }["useContentVault.useCallback[claimRewards]"], {
                successMessage: "Rewards claimed!"
            });
        }
    }["useContentVault.useCallback[claimRewards]"], [
        transaction
    ]);
    const claimAllRewards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useContentVault.useCallback[claimAllRewards]": async ()=>{
            const signer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSigner"])();
            if (!signer) throw new Error("No signer available");
            const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].ContentVault, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$ContentVault$2e$json__$28$json$29$__["default"], signer);
            return transaction.execute({
                "useContentVault.useCallback[claimAllRewards]": async ()=>{
                    const tx = await contract.claimAllRewards();
                    return tx;
                }
            }["useContentVault.useCallback[claimAllRewards]"], {
                successMessage: "All rewards claimed!"
            });
        }
    }["useContentVault.useCallback[claimAllRewards]"], [
        transaction
    ]);
    const getContentCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useContentVault.useCallback[getContentCount]": async ()=>{
            try {
                const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProvider"])();
                if (!provider) return BigInt(0);
                const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].ContentVault, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$ContentVault$2e$json__$28$json$29$__["default"], provider);
                return await contract.contentCount();
            } catch (error) {
                console.error("Error fetching content count:", error);
                return BigInt(0);
            }
        }
    }["useContentVault.useCallback[getContentCount]"], []);
    return {
        uploadContent,
        getAllContent,
        getContentsByCreator,
        claimRewards,
        claimAllRewards,
        getContentCount,
        isLoading: isLoading || transaction.isLoading,
        isConfirming: transaction.isConfirming,
        isPending: transaction.isPending,
        transactionHash: transaction.hash
    };
}
_s(useContentVault, "W/SpEtY8p5clUPtESI9LT30Tl+U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransaction"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/abis/DemoScrollToken.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"inputs":[],"name":"faucet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]);}),
"[project]/hooks/blockchain/use-demo-scroll-token.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDemoScrollToken",
    ()=>useDemoScrollToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contracts/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contracts/contract-factory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$DemoScrollToken$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/abis/DemoScrollToken.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/blockchain/use-transaction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function useDemoScrollToken() {
    _s();
    const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransaction"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const faucet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDemoScrollToken.useCallback[faucet]": async ()=>{
            const signer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSigner"])();
            if (!signer) throw new Error("No signer available");
            const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].DemoScrollToken, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$DemoScrollToken$2e$json__$28$json$29$__["default"], signer);
            return transaction.execute({
                "useDemoScrollToken.useCallback[faucet]": async ()=>{
                    const tx = await contract.faucet();
                    return tx;
                }
            }["useDemoScrollToken.useCallback[faucet]"], {
                successMessage: "Tokens received from faucet!"
            });
        }
    }["useDemoScrollToken.useCallback[faucet]"], [
        transaction
    ]);
    const getBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDemoScrollToken.useCallback[getBalance]": async (address)=>{
            setIsLoading(true);
            try {
                const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProvider"])();
                if (!provider) return "0";
                const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].DemoScrollToken, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$DemoScrollToken$2e$json__$28$json$29$__["default"], provider);
                const balance = await contract.balanceOf(address);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].formatEther(balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
                return "0";
            } finally{
                setIsLoading(false);
            }
        }
    }["useDemoScrollToken.useCallback[getBalance]"], []);
    const transfer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDemoScrollToken.useCallback[transfer]": async (to, value)=>{
            const signer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSigner"])();
            if (!signer) throw new Error("No signer available");
            const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].DemoScrollToken, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$DemoScrollToken$2e$json__$28$json$29$__["default"], signer);
            return transaction.execute({
                "useDemoScrollToken.useCallback[transfer]": async ()=>{
                    const tx = await contract.transfer(to, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseEther(value));
                    return tx;
                }
            }["useDemoScrollToken.useCallback[transfer]"], {
                successMessage: "Transfer successful!"
            });
        }
    }["useDemoScrollToken.useCallback[transfer]"], [
        transaction
    ]);
    return {
        faucet,
        getBalance,
        transfer,
        isLoading: isLoading || transaction.isLoading,
        isConfirming: transaction.isConfirming,
        isPending: transaction.isPending,
        transactionHash: transaction.hash
    };
}
_s(useDemoScrollToken, "wmDLiSQySfVlMt9WI0dy0vZ/E+o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransaction"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/abis/MockImpactOracle.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"inputs":[{"internalType":"uint256","name":"_contentId","type":"uint256"}],"name":"getImpactScore","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_contentId","type":"uint256"},{"internalType":"uint256","name":"_newScore","type":"uint256"}],"name":"updateImpactScore","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"internalType":"uint256[]","name":"_scores","type":"uint256[]"}],"name":"batchUpdateScores","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"contentId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"score","type":"uint256"}],"name":"ScoreUpdated","type":"event"}]);}),
"[project]/hooks/blockchain/use-impact-oracle.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useImpactOracle",
    ()=>useImpactOracle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contracts/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contracts/contract-factory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$MockImpactOracle$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/abis/MockImpactOracle.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/blockchain/use-transaction.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function useImpactOracle() {
    _s();
    const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransaction"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getImpactScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useImpactOracle.useCallback[getImpactScore]": async (contentId)=>{
            setIsLoading(true);
            try {
                const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProvider"])();
                if (!provider) return BigInt(0);
                const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].MockImpactOracle, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$MockImpactOracle$2e$json__$28$json$29$__["default"], provider);
                return await contract.getImpactScore(contentId);
            } catch (error) {
                console.error("Error fetching impact score:", error);
                return BigInt(0);
            } finally{
                setIsLoading(false);
            }
        }
    }["useImpactOracle.useCallback[getImpactScore]"], []);
    const updateImpactScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useImpactOracle.useCallback[updateImpactScore]": async (contentId, newScore)=>{
            const signer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSigner"])();
            if (!signer) throw new Error("No signer available");
            const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].MockImpactOracle, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$MockImpactOracle$2e$json__$28$json$29$__["default"], signer);
            return transaction.execute({
                "useImpactOracle.useCallback[updateImpactScore]": async ()=>{
                    const tx = await contract.updateImpactScore(contentId, newScore);
                    return tx;
                }
            }["useImpactOracle.useCallback[updateImpactScore]"], {
                successMessage: "Impact score updated!"
            });
        }
    }["useImpactOracle.useCallback[updateImpactScore]"], [
        transaction
    ]);
    const batchUpdateScores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useImpactOracle.useCallback[batchUpdateScores]": async (ids, scores)=>{
            const signer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSigner"])();
            if (!signer) throw new Error("No signer available");
            const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$contract$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contracts$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].MockImpactOracle, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$MockImpactOracle$2e$json__$28$json$29$__["default"], signer);
            return transaction.execute({
                "useImpactOracle.useCallback[batchUpdateScores]": async ()=>{
                    const tx = await contract.batchUpdateScores(ids, scores);
                    return tx;
                }
            }["useImpactOracle.useCallback[batchUpdateScores]"], {
                successMessage: "Scores batch updated!"
            });
        }
    }["useImpactOracle.useCallback[batchUpdateScores]"], [
        transaction
    ]);
    return {
        getImpactScore,
        updateImpactScore,
        batchUpdateScores,
        isLoading: isLoading || transaction.isLoading,
        isConfirming: transaction.isConfirming,
        isPending: transaction.isPending,
        transactionHash: transaction.hash
    };
}
_s(useImpactOracle, "DawFrmbKPfQoTetbDTZHW/+aSsQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransaction"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/blockchain/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$user$2d$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/blockchain/use-user-registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$network$2d$graph$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/blockchain/use-network-graph.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$content$2d$vault$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/blockchain/use-content-vault.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$demo$2d$scroll$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/blockchain/use-demo-scroll-token.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$impact$2d$oracle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/blockchain/use-impact-oracle.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/blockchain/use-transaction.ts [app-client] (ecmascript)");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/signup/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignupPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$soll$2d$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/soll-logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$connect$2d$wallet$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/connect-wallet-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-wallet.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$floating$2d$shapes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/floating-shapes.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hooks/blockchain/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$user$2d$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/blockchain/use-user-registry.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const interests = [
    "DeFi",
    "NFTs",
    "DAOs",
    "Gaming",
    "Trading",
    "Development",
    "Art",
    "Music"
];
function SignupPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { address, isConnected, shortenedAddress, isConnecting, connect, isCorrectNetwork } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const { setCurrentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    const { registerUser, isLoading: isRegistering, isConfirming, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$user$2d$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserRegistry"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedInterests, setSelectedInterests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: "",
        password: "",
        confirmPassword: ""
    });
    const toggleInterest = (interest)=>{
        setSelectedInterests((prev)=>prev.includes(interest) ? prev.filter((i)=>i !== interest) : [
                ...prev,
                interest
            ]);
    };
    const validateStep1 = ()=>{
        const newErrors = {
            username: "",
            password: "",
            confirmPassword: ""
        };
        let isValid = true;
        if (!username.trim()) {
            newErrors.username = "Username is required";
            isValid = false;
        }
        if (!password) {
            newErrors.password = "Password is required";
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
            isValid = false;
        }
        if (!confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
            isValid = false;
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };
    const handleStep1Continue = ()=>{
        if (validateStep1()) {
            setStep(2);
        }
    };
    const handleCreateAccount = async ()=>{
        if (!username || !address || !password) return;
        setIsCreating(true);
        try {
            const hashedPassword = btoa(password);
            localStorage.setItem("soll_user_password", hashedPassword);
            localStorage.setItem("soll_user_username", username);
            const result = await registerUser(username);
            if (result) {
                setCurrentUser({
                    id: crypto.randomUUID(),
                    username,
                    walletAddress: address,
                    bio: "New to the decentralized world",
                    avatar: "/diverse-profile-avatars.png"
                });
                router.push("/home");
            }
        } catch (error) {
            console.error("Registration error:", error);
        } finally{
            setIsCreating(false);
        }
    };
    const getButtonText = ()=>{
        if (isConfirming) return "Waiting for wallet...";
        if (isPending) return "Creating on-chain...";
        if (isCreating) return "Creating...";
        return "Get Started";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$floating$2d$shapes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingShapes"], {}, void 0, false, {
                fileName: "[project]/app/signup/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$soll$2d$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SollLogo"], {
                                    className: "h-16 w-16"
                                }, void 0, false, {
                                    fileName: "[project]/app/signup/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/signup/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-foreground",
                                children: "Join Soll"
                            }, void 0, false, {
                                fileName: "[project]/app/signup/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-2",
                                children: "Social, Owned by You"
                            }, void 0, false, {
                                fileName: "[project]/app/signup/page.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/signup/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-2 mb-8",
                        children: [
                            1,
                            2,
                            3,
                            4
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `h-2 rounded-full transition-all duration-300 ${s === step ? "w-8 bg-primary" : s < step ? "w-8 bg-accent" : "w-2 bg-border"}`
                            }, s, false, {
                                fileName: "[project]/app/signup/page.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/signup/page.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-3xl p-8 border border-border shadow-xl",
                        children: [
                            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 animate-slide-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-foreground mb-2",
                                                children: "Create your account"
                                            }, void 0, false, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Choose your username and set a secure password"
                                            }, void 0, false, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/signup/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "username",
                                                        className: "text-foreground",
                                                        children: "Username"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "username",
                                                        placeholder: "satoshi",
                                                        value: username,
                                                        onChange: (e)=>{
                                                            setUsername(e.target.value);
                                                            setErrors((prev)=>({
                                                                    ...prev,
                                                                    username: ""
                                                                }));
                                                        },
                                                        className: `bg-background border-border text-foreground placeholder:text-muted-foreground h-12 rounded-xl ${errors.username ? "border-destructive" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this),
                                                    username && !errors.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: [
                                                            username,
                                                            ".soll"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 52
                                                    }, this),
                                                    errors.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-destructive",
                                                        children: errors.username
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "password",
                                                        className: "text-foreground",
                                                        children: "Password"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "password",
                                                        type: "password",
                                                        placeholder: "At least 6 characters",
                                                        value: password,
                                                        onChange: (e)=>{
                                                            setPassword(e.target.value);
                                                            setErrors((prev)=>({
                                                                    ...prev,
                                                                    password: ""
                                                                }));
                                                        },
                                                        className: `bg-background border-border text-foreground placeholder:text-muted-foreground h-12 rounded-xl ${errors.password ? "border-destructive" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-destructive",
                                                        children: errors.password
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "confirmPassword",
                                                        className: "text-foreground",
                                                        children: "Confirm Password"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "confirmPassword",
                                                        type: "password",
                                                        placeholder: "Re-enter your password",
                                                        value: confirmPassword,
                                                        onChange: (e)=>{
                                                            setConfirmPassword(e.target.value);
                                                            setErrors((prev)=>({
                                                                    ...prev,
                                                                    confirmPassword: ""
                                                                }));
                                                        },
                                                        className: `bg-background border-border text-foreground placeholder:text-muted-foreground h-12 rounded-xl ${errors.confirmPassword ? "border-destructive" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-destructive",
                                                        children: errors.confirmPassword
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 46
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/signup/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90",
                                        onClick: handleStep1Continue,
                                        children: [
                                            "Continue",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "ml-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/signup/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/signup/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 animate-slide-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-foreground mb-2",
                                                children: "Connect your wallet"
                                            }, void 0, false, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Your wallet is your identity on Web3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/signup/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-2xl bg-secondary/50 border border-border",
                                        children: !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-8 h-8 text-primary",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "2",
                                                                y: "6",
                                                                width: "20",
                                                                height: "12",
                                                                rx: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/signup/page.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M16 10h4v4h-4z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/signup/page.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/signup/page.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$connect$2d$wallet$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectWalletButton"], {
                                                    showDisconnect: false
                                                }, void 0, false, {
                                                    fileName: "[project]/app/signup/page.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/signup/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        className: "w-8 h-8 text-accent-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/signup/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-foreground mb-1",
                                                    children: "Wallet Connected"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/signup/page.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: shortenedAddress
                                                }, void 0, false, {
                                                    fileName: "[project]/app/signup/page.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 21
                                                }, this),
                                                !isCorrectNetwork && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-destructive mt-2",
                                                    children: "Please switch to Scroll Sepolia"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/signup/page.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/signup/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/signup/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                className: "flex-1 h-12 rounded-xl border-border text-foreground bg-transparent",
                                                onClick: ()=>setStep(1),
                                                children: "Back"
                                            }, void 0, false, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "flex-1 h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90",
                                                onClick: ()=>setStep(3),
                                                disabled: !isConnected || !isCorrectNetwork,
                                                children: [
                                                    "Continue",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "ml-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/signup/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/signup/page.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this),
                            step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 animate-slide-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-foreground mb-2",
                                                children: "Pick your interests"
                                            }, void 0, false, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "We will personalize your feed based on your choices"
                                            }, void 0, false, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/signup/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: interests.map((interest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>toggleInterest(interest),
                                                className: `px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedInterests.includes(interest) ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"}`,
                                                children: interest
                                            }, interest, false, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 283,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/signup/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                className: "flex-1 h-12 rounded-xl border-border text-foreground bg-transparent",
                                                onClick: ()=>setStep(2),
                                                children: "Back"
                                            }, void 0, false, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "flex-1 h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90",
                                                onClick: ()=>setStep(4),
                                                children: [
                                                    "Continue",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "ml-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 305,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/signup/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/signup/page.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this),
                            step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 animate-slide-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-foreground mb-2",
                                                children: "Ready to join Soll"
                                            }, void 0, false, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Review your details and create your account"
                                            }, void 0, false, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/signup/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 p-4 rounded-2xl bg-secondary/30 border border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Username"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-foreground",
                                                        children: [
                                                            username,
                                                            ".soll"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Wallet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-foreground",
                                                        children: shortenedAddress
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Interests"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-foreground",
                                                        children: [
                                                            selectedInterests.length,
                                                            " selected"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 333,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/signup/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                className: "flex-1 h-12 rounded-xl border-border text-foreground bg-transparent",
                                                onClick: ()=>setStep(3),
                                                children: "Back"
                                            }, void 0, false, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 340,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "flex-1 h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90",
                                                onClick: handleCreateAccount,
                                                disabled: isCreating || isRegistering || !isConnected,
                                                children: isCreating || isRegistering ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "mr-2 h-4 w-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/signup/page.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 23
                                                        }, this),
                                                        getButtonText()
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        "Create Account",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "ml-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/signup/page.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/signup/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/signup/page.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/signup/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-muted-foreground mt-6",
                        children: [
                            "Already have an account? ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-primary hover:underline font-medium",
                                children: "Sign in"
                            }, void 0, false, {
                                fileName: "[project]/app/signup/page.tsx",
                                lineNumber: 370,
                                columnNumber: 36
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/signup/page.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/signup/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/signup/page.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(SignupPage, "D5smJgWs2JkWS9YJDo4aJC7M6Mc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$blockchain$2f$use$2d$user$2d$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserRegistry"]
    ];
});
_c = SignupPage;
var _c;
__turbopack_context__.k.register(_c, "SignupPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_602d3d1f._.js.map