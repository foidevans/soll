(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/providers/web3-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
"use client";
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 // const WalletContext = createContext<WalletContextType | null>(null)
 // export function useWalletContext() {
 //   const context = useContext(WalletContext)
 //   if (!context) {
 //     throw new Error("useWalletContext must be used within Web3Provider")
 //   }
 //   return context
 // }
 // function WalletProvider({ children }: { children: React.ReactNode }) {
 //   const { toast } = useToast()
 //   const [address, setAddress] = useState<string | null>(null)
 //   const [chainId, setChainId] = useState<number | null>(null)
 //   const [isConnecting, setIsConnecting] = useState(false)
 //   const isCorrectNetwork = chainId === NETWORK.chainId
 //   // Check for existing connection on mount
 //   useEffect(() => {
 //     const checkConnection = async () => {
 //       if (typeof window !== "undefined" && (window as any).ethereum) {
 //         try {
 //           const accounts = await (window as any).ethereum.request({
 //             method: "eth_accounts",
 //           })
 //           if (accounts.length > 0) {
 //             setAddress(accounts[0])
 //             const chainIdHex = await (window as any).ethereum.request({
 //               method: "eth_chainId",
 //             })
 //             setChainId(Number.parseInt(chainIdHex, 16))
 //           }
 //         } catch (error) {
 //           console.error("Error checking connection:", error)
 //         }
 //       }
 //     }
 //     checkConnection()
 //   }, [])
 //   // Listen for account and chain changes
 //   useEffect(() => {
 //     if (typeof window !== "undefined" && (window as any).ethereum) {
 //       const handleAccountsChanged = (accounts: string[]) => {
 //         if (accounts.length === 0) {
 //           setAddress(null)
 //         } else {
 //           setAddress(accounts[0])
 //         }
 //       }
 //       const handleChainChanged = (chainIdHex: string) => {
 //         setChainId(Number.parseInt(chainIdHex, 16))
 //       }
 //       ;(window as any).ethereum.on("accountsChanged", handleAccountsChanged)
 //       ;(window as any).ethereum.on("chainChanged", handleChainChanged)
 //       return () => {
 //         ;(window as any).ethereum.removeListener("accountsChanged", handleAccountsChanged)
 //         ;(window as any).ethereum.removeListener("chainChanged", handleChainChanged)
 //       }
 //     }
 //   }, [])
 //   const switchNetwork = useCallback(async () => {
 //     if (typeof window === "undefined" || !(window as any).ethereum) {
 //       toast({
 //         title: "Wallet not found",
 //         description: "Please install MetaMask or another Web3 wallet",
 //         variant: "destructive",
 //       })
 //       return
 //     }
 //     try {
 //       await (window as any).ethereum.request({
 //         method: "wallet_switchEthereumChain",
 //         params: [{ chainId: `0x${NETWORK.chainId.toString(16)}` }],
 //       })
 //     } catch (switchError: any) {
 //       // Chain not added, try to add it
 //       if (switchError.code === 4902) {
 //         try {
 //           await (window as any).ethereum.request({
 //             method: "wallet_addEthereumChain",
 //             params: [
 //               {
 //                 chainId: `0x${NETWORK.chainId.toString(16)}`,
 //                 chainName: NETWORK.name,
 //                 rpcUrls: [NETWORK.rpcUrl],
 //                 blockExplorerUrls: [NETWORK.blockExplorer],
 //                 nativeCurrency: {
 //                   name: "ETH",
 //                   symbol: "ETH",
 //                   decimals: 18,
 //                 },
 //               },
 //             ],
 //           })
 //         } catch (addError) {
 //           toast({
 //             title: "Failed to add network",
 //             description: "Please add Scroll Sepolia manually",
 //             variant: "destructive",
 //           })
 //         }
 //       }
 //     }
 //   }, [toast])
 //   const connect = useCallback(async () => {
 //     if (typeof window === "undefined" || !(window as any).ethereum) {
 //       toast({
 //         title: "Wallet not found",
 //         description: "Please install MetaMask or another Web3 wallet",
 //         variant: "destructive",
 //       })
 //       return
 //     }
 //     setIsConnecting(true)
 //     try {
 //       const accounts = await (window as any).ethereum.request({
 //         method: "eth_requestAccounts",
 //       })
 //       if (accounts.length > 0) {
 //         setAddress(accounts[0])
 //         const chainIdHex = await (window as any).ethereum.request({
 //           method: "eth_chainId",
 //         })
 //         const currentChainId = Number.parseInt(chainIdHex, 16)
 //         setChainId(currentChainId)
 //         // Auto-switch to Scroll Sepolia if on wrong network
 //         if (currentChainId !== NETWORK.chainId) {
 //           await switchNetwork()
 //         }
 //         toast({
 //           title: "Wallet connected",
 //           description: `Connected to ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`,
 //         })
 //       }
 //     } catch (error: any) {
 //       toast({
 //         title: "Connection failed",
 //         description: error?.message || "Failed to connect wallet",
 //         variant: "destructive",
 //       })
 //     } finally {
 //       setIsConnecting(false)
 //     }
 //   }, [toast, switchNetwork])
 //   const disconnect = useCallback(() => {
 //     setAddress(null)
 //     setChainId(null)
 //     toast({
 //       title: "Wallet disconnected",
 //       description: "You have been disconnected from your wallet",
 //     })
 //   }, [toast])
 //   return (
 //     <WalletContext.Provider
 //       value={{
 //         address,
 //         isConnected: !!address,
 //         isConnecting,
 //         chainId,
 //         isCorrectNetwork,
 //         connect,
 //         disconnect,
 //         switchNetwork,
 //       }}
 //     >
 //       {children}
 //     </WalletContext.Provider>
 //   )
 // }
 // export function Web3Provider({ children }: { children: React.ReactNode }) {
 //   return (
 //     <WalletProvider>
 //       <AppStoreProvider>{children}</AppStoreProvider>
 //     </WalletProvider>
 //   )
 // }
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@vercel/analytics/dist/next/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/nextjs/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/nextjs/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
"use client";
;
;
// package.json
var name = "@vercel/analytics";
var version = "1.3.1";
// src/queue.ts
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        (window.vaq = window.vaq || []).push(params);
    };
};
// src/utils.ts
function isBrowser() {
    return typeof window !== "undefined";
}
function detectEnvironment() {
    try {
        const env = ("TURBOPACK compile-time value", "development");
        if ("TURBOPACK compile-time truthy", 1) {
            return "development";
        }
    } catch (e) {}
    return "production";
}
function setMode(mode = "auto") {
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    const mode = isBrowser() ? window.vam : detectEnvironment();
    return mode || "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function computeRoute(pathname, pathParams) {
    if (!pathname || !pathParams) {
        return pathname;
    }
    let result = pathname;
    try {
        const entries = Object.entries(pathParams);
        for (const [key, value] of entries){
            if (!Array.isArray(value)) {
                const matcher = turnValueToRegExp(value);
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[${key}]`);
                }
            }
        }
        for (const [key, value] of entries){
            if (Array.isArray(value)) {
                const matcher = turnValueToRegExp(value.join("/"));
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[...${key}]`);
                }
            }
        }
        return result;
    } catch (e) {
        return pathname;
    }
}
function turnValueToRegExp(value) {
    return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
// src/generic.ts
var DEV_SCRIPT_URL = "https://va.vercel-scripts.com/v1/script.debug.js";
var PROD_SCRIPT_URL = "/_vercel/insights/script.js";
function inject(props = {
    debug: true
}) {
    var _a;
    if (!isBrowser()) return;
    setMode(props.mode);
    initQueue();
    if (props.beforeSend) {
        (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
    }
    const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : PROD_SCRIPT_URL);
    if (document.head.querySelector(`script[src*="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
    script.dataset.sdkv = version;
    if (props.disableAutoTrack) {
        script.dataset.disableAutoTrack = "1";
    }
    if (props.endpoint) {
        script.dataset.endpoint = props.endpoint;
    }
    if (props.dsn) {
        script.dataset.dsn = props.dsn;
    }
    script.onerror = ()=>{
        const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);
    };
    if (isDevelopment() && props.debug === false) {
        script.dataset.debug = "false";
    }
    document.head.appendChild(script);
}
function pageview({ route, path }) {
    var _a;
    (_a = window.va) == null ? void 0 : _a.call(window, "pageview", {
        route,
        path
    });
}
// src/react.tsx
function Analytics(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            inject({
                framework: props.framework || "react",
                ...props.route !== void 0 && {
                    disableAutoTrack: true
                },
                ...props
            });
        }
    }["Analytics.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            if (props.route && props.path) {
                pageview({
                    route: props.route,
                    path: props.path
                });
            }
        }
    }["Analytics.useEffect"], [
        props.route,
        props.path
    ]);
    return null;
}
;
var useRoute = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const finalParams = {
        ...Object.fromEntries(searchParams.entries()),
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- can be empty in pages router
        ...params || {}
    };
    return {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- can be empty in pages router
        route: params ? computeRoute(path, finalParams) : null,
        path
    };
};
// src/nextjs/index.tsx
function AnalyticsComponent(props) {
    const { route, path } = useRoute();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Analytics, {
        path,
        route,
        ...props,
        framework: "next"
    });
}
function Analytics2(props) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AnalyticsComponent, {
        ...props
    }));
}
;
 //# sourceMappingURL=index.mjs.map
}),
]);

//# sourceMappingURL=_455494a7._.js.map