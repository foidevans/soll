"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface User {
  id: string
  username: string
  walletAddress: string
  bio: string
  avatar: string
}

export interface Post {
  id: string
  userId: string
  username: string
  userAvatar: string
  content: string
  videoUrl?: string
  timestamp: Date
  likes: number
}

interface AppState {
  currentUser: User | null
  setCurrentUser: (user: User | null) => void
  posts: Post[]
  setPosts: (posts: Post[]) => void
  addPost: (post: Post) => void
  users: User[]
  setUsers: (users: User[]) => void
}

const AppContext = createContext<AppState | undefined>(undefined)

const mockUsers: User[] = [
  {
    id: "1",
    username: "vitalik.eth",
    walletAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f8fB12",
    bio: "Building the future of the decentralized web",
    avatar: "/crypto-avatar-man.jpg",
  },
  {
    id: "2",
    username: "satoshi.eth",
    walletAddress: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
    bio: "One block at a time",
    avatar: "/mysterious-avatar.jpg",
  },
  {
    id: "3",
    username: "defi_queen",
    walletAddress: "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
    bio: "DeFi enthusiast | Yield farming",
    avatar: "/woman-crypto-avatar.jpg",
  },
  {
    id: "4",
    username: "nft_collector",
    walletAddress: "0x2546BcD3c84621e976D8185a91A922aE77ECEc30",
    bio: "Collecting digital art since 2020",
    avatar: "/art-collector-avatar.jpg",
  },
  {
    id: "5",
    username: "web3_dev",
    walletAddress: "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E",
    bio: "Smart contract developer | Solidity",
    avatar: "/developer-avatar.png",
  },
]

const mockPosts: Post[] = [
  {
    id: "1",
    userId: "1",
    username: "vitalik.eth",
    userAvatar: "/crypto-avatar-man.jpg",
    content: "Just deployed a new smart contract. The gas fees are finally reasonable!",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    likes: 42,
  },
  {
    id: "2",
    userId: "2",
    username: "satoshi.eth",
    userAvatar: "/mysterious-avatar.jpg",
    content: "Remember: Not your keys, not your coins. Stay safe out there.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    likes: 128,
  },
  {
    id: "3",
    userId: "3",
    username: "defi_queen",
    userAvatar: "/woman-crypto-avatar.jpg",
    content: "New liquidity pool just dropped. APY looking juicy",
    videoUrl: "/defi-dashboard-chart.jpg",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
    likes: 67,
  },
  {
    id: "4",
    userId: "4",
    username: "nft_collector",
    userAvatar: "/art-collector-avatar.jpg",
    content: "Just minted this incredible piece. The artist is truly talented!",
    videoUrl: "/abstract-digital-art-nft.png",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8),
    likes: 89,
  },
  {
    id: "5",
    userId: "5",
    username: "web3_dev",
    userAvatar: "/developer-avatar.png",
    content: "Pro tip: Always audit your smart contracts before deployment. Security first!",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    likes: 156,
  },
]

export function AppStoreProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [posts, setPosts] = useState<Post[]>(mockPosts)
  const [users, setUsers] = useState<User[]>(mockUsers)

  const addPost = (post: Post) => {
    setPosts((prev) => [post, ...prev])
  }

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser, posts, setPosts, addPost, users, setUsers }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppStore() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppStore must be used within AppStoreProvider")
  }
  return context
}
