"use client"

import type React from "react"
import { AppStoreProvider } from "@/lib/store"
import { WalletProvider } from "./wallet-provider"
import { CommentsProvider } from "@/lib/comments-store"

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WalletProvider>
      <AppStoreProvider>
        <CommentsProvider>{children}</CommentsProvider>
      </AppStoreProvider>
    </WalletProvider>
  )
}
