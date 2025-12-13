"use client"

import "@rainbow-me/rainbowkit/styles.css"
import type React from "react"
import { getDefaultConfig, RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit"
import { WagmiProvider } from "wagmi"
import { scrollSepolia } from "wagmi/chains"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const config = getDefaultConfig({
  appName: "Soll",
  projectId: "soll-web3-social", // WalletConnect project ID placeholder
  chains: [scrollSepolia],
  ssr: true,
})

const queryClient = new QueryClient()

// Custom Soll theme for RainbowKit
const sollLightTheme = lightTheme({
  accentColor: "#ff6a3c",
  accentColorForeground: "white",
  borderRadius: "large",
  fontStack: "system",
})

const sollDarkTheme = darkTheme({
  accentColor: "#ff6a3c",
  accentColorForeground: "white",
  borderRadius: "large",
  fontStack: "system",
})

export function WalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={sollLightTheme} modalSize="compact">
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}