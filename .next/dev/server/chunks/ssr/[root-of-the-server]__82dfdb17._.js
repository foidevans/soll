module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/lib/comments-store.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client"
// import { create } from "zustand"
// import { persist } from "zustand/middleware"
// export interface Comment {
//   id: string
//   postId: string
//   userId: string
//   username: string
//   userAvatar: string
//   text: string
//   timestamp: Date
// }
// interface CommentsState {
//   comments: Comment[]
//   addComment: (comment: Omit<Comment, "id" | "timestamp">) => void
//   getCommentsByPostId: (postId: string) => Comment[]
//   deleteComment: (commentId: string) => void
// }
// export const useCommentsStore = create<CommentsState>()(
//   persist(
//     (set, get) => ({
//       comments: [],
//       addComment: (comment) => {
//         const newComment: Comment = {
//           ...comment,
//           id: crypto.randomUUID(),
//           timestamp: new Date(),
//         }
//         set((state) => ({
//           comments: [...state.comments, newComment],
//         }))
//       },
//       getCommentsByPostId: (postId) => {
//         return get().comments.filter((comment) => comment.postId === postId)
//       },
//       deleteComment: (commentId) => {
//         set((state) => ({
//           comments: state.comments.filter((comment) => comment.id !== commentId),
//         }))
//       },
//     }),
//     {
//       name: "soll-comments-storage",
//     }
//   )
// )
__turbopack_context__.s([
    "CommentsProvider",
    ()=>CommentsProvider,
    "useComments",
    ()=>useComments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const CommentsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
// Initial mock comments
const mockComments = [
    {
        id: "c1",
        postId: "1",
        user: "defi_queen",
        userAvatar: "/woman-crypto-avatar.jpg",
        text: "Amazing work! Can't wait to see the gas optimizations.",
        timestamp: new Date(Date.now() - 1000 * 60 * 15)
    },
    {
        id: "c2",
        postId: "2",
        user: "web3_dev",
        userAvatar: "/developer-avatar.png",
        text: "Solid advice as always!",
        timestamp: new Date(Date.now() - 1000 * 60 * 60)
    }
];
function CommentsProvider({ children }) {
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(mockComments);
    const addComment = (postId, user, userAvatar, text)=>{
        const newComment = {
            id: crypto.randomUUID(),
            postId,
            user,
            userAvatar,
            text,
            timestamp: new Date()
        };
        setComments((prev)=>[
                ...prev,
                newComment
            ]);
    };
    const getCommentsByPostId = (postId)=>{
        return comments.filter((c)=>c.postId === postId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentsContext.Provider, {
        value: {
            comments,
            addComment,
            getCommentsByPostId
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/comments-store.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
function useComments() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CommentsContext);
    if (!context) {
        throw new Error("useComments must be used within CommentsProvider");
    }
    return context;
}
}),
"[project]/lib/store.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppStoreProvider",
    ()=>AppStoreProvider,
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
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
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(mockPosts);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(mockUsers);
    const addPost = (post)=>{
        setPosts((prev)=>[
                post,
                ...prev
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
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
function useAppStore() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    if (!context) {
        throw new Error("useAppStore must be used within AppStoreProvider");
    }
    return context;
}
}),
"[project]/components/providers/web3-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client"
// import type React from "react"
// import { createContext, useContext, useState, useCallback, useEffect } from "react"
// import { AppStoreProvider } from "@/lib/store"
// import { NETWORK } from "@/lib/contracts/config"
// import { useToast } from "@/hooks/use-toast"
// interface WalletContextType {
//   address: string | null
//   isConnected: boolean
//   isConnecting: boolean
//   chainId: number | null
//   isCorrectNetwork: boolean
//   connect: () => Promise<void>
//   disconnect: () => void
//   switchNetwork: () => Promise<void>
// }
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
__turbopack_context__.s([
    "Web3Provider",
    ()=>Web3Provider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@rainbow-me/rainbowkit/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$chunk$2d$RZWDCITT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@rainbow-me/rainbowkit/dist/chunk-RZWDCITT.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$chunk$2d$72HZGUJA$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@rainbow-me/rainbowkit/dist/chunk-72HZGUJA.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$scrollSepolia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/chains/definitions/scrollSepolia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$comments$2d$store$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/comments-store.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './wallet-provider'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
;
;
;
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultConfig"])({
    appName: "Soll",
    projectId: "soll-web3-social",
    chains: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$scrollSepolia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollSepolia"]
    ],
    ssr: true
});
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]();
// Custom Soll theme for RainbowKit
const sollLightTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$chunk$2d$72HZGUJA$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightTheme"])({
    accentColor: "#ff6a3c",
    accentColorForeground: "white",
    borderRadius: "large",
    fontStack: "system"
});
const sollDarkTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$chunk$2d$RZWDCITT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["darkTheme"])({
    accentColor: "#ff6a3c",
    accentColorForeground: "white",
    borderRadius: "large",
    fontStack: "system"
});
function Web3Provider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletProvider, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppStoreProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$comments$2d$store$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommentsProvider"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/providers/web3-provider.tsx",
                lineNumber: 268,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/providers/web3-provider.tsx",
            lineNumber: 267,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/providers/web3-provider.tsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__82dfdb17._.js.map