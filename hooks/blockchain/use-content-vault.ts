"use client"

import { useState, useCallback } from "react"
import { CONTRACTS } from "@/lib/contracts/config"
import { getContract, getSigner, getProvider } from "@/lib/contracts/contract-factory"
import ContentVaultABI from "@/lib/abis/ContentVault.json"
import { useTransaction } from "./use-transaction"

export interface ContentData {
  id: bigint
  creator: string
  ipfsHash: string
  metadata: string
  timestamp: bigint
  rewardBalance: bigint
}

export function useContentVault() {
  const transaction = useTransaction()
  const [isLoading, setIsLoading] = useState(false)

  const uploadContent = useCallback(
    async (ipfsHash: string, metadata: string) => {
      const signer = await getSigner()
      if (!signer) throw new Error("No signer available")

      const contract = getContract(CONTRACTS.ContentVault, ContentVaultABI, signer)

      return transaction.execute(
        async () => {
          const tx = await contract.uploadContent(ipfsHash, metadata)
          return tx
        },
        { successMessage: "Content published on-chain!" },
      )
    },
    [transaction],
  )

  const getAllContent = useCallback(async (offset: number, limit: number): Promise<ContentData[]> => {
    setIsLoading(true)
    try {
      const provider = getProvider()
      if (!provider) return []

      const contract = getContract(CONTRACTS.ContentVault, ContentVaultABI, provider)
      const contents = await contract.getAllContent(offset, limit)

      return contents.map((c: any) => ({
        id: c.id,
        creator: c.creator,
        ipfsHash: c.ipfsHash,
        metadata: c.metadata,
        timestamp: c.timestamp,
        rewardBalance: c.rewardBalance,
      }))
    } catch (error) {
      console.error("Error fetching all content:", error)
      return []
    } finally {
      setIsLoading(false)
    }
  }, [])

  const getContentsByCreator = useCallback(async (creator: string): Promise<ContentData[]> => {
    setIsLoading(true)
    try {
      const provider = getProvider()
      if (!provider) return []

      const contract = getContract(CONTRACTS.ContentVault, ContentVaultABI, provider)
      const contents = await contract.getContentsByCreator(creator)

      return contents.map((c: any) => ({
        id: c.id,
        creator: c.creator,
        ipfsHash: c.ipfsHash,
        metadata: c.metadata,
        timestamp: c.timestamp,
        rewardBalance: c.rewardBalance,
      }))
    } catch (error) {
      console.error("Error fetching creator content:", error)
      return []
    } finally {
      setIsLoading(false)
    }
  }, [])

  const claimRewards = useCallback(
    async (contentId: bigint) => {
      const signer = await getSigner()
      if (!signer) throw new Error("No signer available")

      const contract = getContract(CONTRACTS.ContentVault, ContentVaultABI, signer)

      return transaction.execute(
        async () => {
          const tx = await contract.claimRewards(contentId)
          return tx
        },
        { successMessage: "Rewards claimed!" },
      )
    },
    [transaction],
  )

  const claimAllRewards = useCallback(async () => {
    const signer = await getSigner()
    if (!signer) throw new Error("No signer available")

    const contract = getContract(CONTRACTS.ContentVault, ContentVaultABI, signer)

    return transaction.execute(
      async () => {
        const tx = await contract.claimAllRewards()
        return tx
      },
      { successMessage: "All rewards claimed!" },
    )
  }, [transaction])

  const getContentCount = useCallback(async (): Promise<bigint> => {
    try {
      const provider = getProvider()
      if (!provider) return BigInt(0)

      const contract = getContract(CONTRACTS.ContentVault, ContentVaultABI, provider)
      return await contract.contentCount()
    } catch (error) {
      console.error("Error fetching content count:", error)
      return BigInt(0)
    }
  }, [])

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
    transactionHash: transaction.hash,
  }
}
