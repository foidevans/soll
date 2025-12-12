"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, useEffect } from "react"
import { AppStoreProvider } from "@/lib/store"
import { NETWORK } from "@/lib/contracts/config"
import { useToast } from "@/hooks/use-toast"

interface WalletContextType {
  address: string | null
  isConnected: boolean
  isConnecting: boolean
  chainId: number | null
  isCorrectNetwork: boolean
  connect: () => Promise<void>
  disconnect: () => void
  switchNetwork: () => Promise<void>
}

const WalletContext = createContext<WalletContextType | null>(null)

export function useWalletContext() {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error("useWalletContext must be used within Web3Provider")
  }
  return context
}

function WalletProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast()
  const [address, setAddress] = useState<string | null>(null)
  const [chainId, setChainId] = useState<number | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)

  const isCorrectNetwork = chainId === NETWORK.chainId

  // Check for existing connection on mount
  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window !== "undefined" && (window as any).ethereum) {
        try {
          const accounts = await (window as any).ethereum.request({
            method: "eth_accounts",
          })
          if (accounts.length > 0) {
            setAddress(accounts[0])
            const chainIdHex = await (window as any).ethereum.request({
              method: "eth_chainId",
            })
            setChainId(Number.parseInt(chainIdHex, 16))
          }
        } catch (error) {
          console.error("Error checking connection:", error)
        }
      }
    }
    checkConnection()
  }, [])

  // Listen for account and chain changes
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          setAddress(null)
        } else {
          setAddress(accounts[0])
        }
      }

      const handleChainChanged = (chainIdHex: string) => {
        setChainId(Number.parseInt(chainIdHex, 16))
      }
      ;(window as any).ethereum.on("accountsChanged", handleAccountsChanged)
      ;(window as any).ethereum.on("chainChanged", handleChainChanged)

      return () => {
        ;(window as any).ethereum.removeListener("accountsChanged", handleAccountsChanged)
        ;(window as any).ethereum.removeListener("chainChanged", handleChainChanged)
      }
    }
  }, [])

  const switchNetwork = useCallback(async () => {
    if (typeof window === "undefined" || !(window as any).ethereum) {
      toast({
        title: "Wallet not found",
        description: "Please install MetaMask or another Web3 wallet",
        variant: "destructive",
      })
      return
    }

    try {
      await (window as any).ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${NETWORK.chainId.toString(16)}` }],
      })
    } catch (switchError: any) {
      // Chain not added, try to add it
      if (switchError.code === 4902) {
        try {
          await (window as any).ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: `0x${NETWORK.chainId.toString(16)}`,
                chainName: NETWORK.name,
                rpcUrls: [NETWORK.rpcUrl],
                blockExplorerUrls: [NETWORK.blockExplorer],
                nativeCurrency: {
                  name: "ETH",
                  symbol: "ETH",
                  decimals: 18,
                },
              },
            ],
          })
        } catch (addError) {
          toast({
            title: "Failed to add network",
            description: "Please add Scroll Sepolia manually",
            variant: "destructive",
          })
        }
      }
    }
  }, [toast])

  const connect = useCallback(async () => {
    if (typeof window === "undefined" || !(window as any).ethereum) {
      toast({
        title: "Wallet not found",
        description: "Please install MetaMask or another Web3 wallet",
        variant: "destructive",
      })
      return
    }

    setIsConnecting(true)
    try {
      const accounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      })

      if (accounts.length > 0) {
        setAddress(accounts[0])

        const chainIdHex = await (window as any).ethereum.request({
          method: "eth_chainId",
        })
        const currentChainId = Number.parseInt(chainIdHex, 16)
        setChainId(currentChainId)

        // Auto-switch to Scroll Sepolia if on wrong network
        if (currentChainId !== NETWORK.chainId) {
          await switchNetwork()
        }

        toast({
          title: "Wallet connected",
          description: `Connected to ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`,
        })
      }
    } catch (error: any) {
      toast({
        title: "Connection failed",
        description: error?.message || "Failed to connect wallet",
        variant: "destructive",
      })
    } finally {
      setIsConnecting(false)
    }
  }, [toast, switchNetwork])

  const disconnect = useCallback(() => {
    setAddress(null)
    setChainId(null)
    toast({
      title: "Wallet disconnected",
      description: "You have been disconnected from your wallet",
    })
  }, [toast])

  return (
    <WalletContext.Provider
      value={{
        address,
        isConnected: !!address,
        isConnecting,
        chainId,
        isCorrectNetwork,
        connect,
        disconnect,
        switchNetwork,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WalletProvider>
      <AppStoreProvider>{children}</AppStoreProvider>
    </WalletProvider>
  )
}
