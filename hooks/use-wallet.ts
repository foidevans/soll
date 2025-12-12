"use client"

import { useWalletContext } from "@/components/providers/web3-provider"

export function useWallet() {
  const { address, isConnected, isConnecting, chainId, isCorrectNetwork, connect, disconnect, switchNetwork } =
    useWalletContext()

  const shortenAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  return {
    address,
    isConnected,
    isConnecting,
    chainId,
    isCorrectNetwork,
    connect,
    disconnect,
    switchNetwork,
    shortenedAddress: address ? shortenAddress(address) : null,
  }
}
