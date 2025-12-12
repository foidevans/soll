"use client"

import { useAccount, useDisconnect, useSwitchChain } from "wagmi"
import { scrollSepolia } from "wagmi/chains"

export function useWallet() {
  const { address, isConnected, isConnecting, chainId } = useAccount()
  const { disconnect } = useDisconnect()
  const { switchChain } = useSwitchChain()

  const isCorrectNetwork = chainId === scrollSepolia.id

  const shortenAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const switchNetwork = async () => {
    try {
      switchChain({ chainId: scrollSepolia.id })
    } catch (error) {
      console.error("Failed to switch network:", error)
    }
  }

  return {
    address: address ?? null,
    isConnected,
    isConnecting,
    chainId: chainId ?? null,
    isCorrectNetwork,
    connect: () => {}, // RainbowKit handles this via ConnectButton
    disconnect,
    switchNetwork,
    shortenedAddress: address ? shortenAddress(address) : null,
  }
}
