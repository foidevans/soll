"use client"

import { useState, useCallback } from "react"
import { CONTRACTS } from "@/lib/contracts/config"
import { getContract, getSigner, getProvider } from "@/lib/contracts/contract-factory"
import NetworkGraphABI from "@/lib/abis/NetworkGraph.json"
import { useTransaction } from "./use-transaction"

export function useNetworkGraph() {
  const transaction = useTransaction()
  const [isLoading, setIsLoading] = useState(false)

  const follow = useCallback(
    async (address: string) => {
      const signer = await getSigner()
      if (!signer) throw new Error("No signer available")

      const contract = getContract(CONTRACTS.NetworkGraph, NetworkGraphABI, signer)

      return transaction.execute(
        async () => {
          const tx = await contract.follow(address)
          return tx
        },
        { successMessage: "Successfully followed user!" },
      )
    },
    [transaction],
  )

  const unfollow = useCallback(
    async (address: string) => {
      const signer = await getSigner()
      if (!signer) throw new Error("No signer available")

      const contract = getContract(CONTRACTS.NetworkGraph, NetworkGraphABI, signer)

      return transaction.execute(
        async () => {
          const tx = await contract.unfollow(address)
          return tx
        },
        { successMessage: "Successfully unfollowed user!" },
      )
    },
    [transaction],
  )

  const getFollowers = useCallback(async (address: string): Promise<string[]> => {
    setIsLoading(true)
    try {
      const provider = getProvider()
      if (!provider) return []

      const contract = getContract(CONTRACTS.NetworkGraph, NetworkGraphABI, provider)
      const followers = await contract.getFollowers(address)
      return followers
    } catch (error) {
      console.error("Error fetching followers:", error)
      return []
    } finally {
      setIsLoading(false)
    }
  }, [])

  const getFollowing = useCallback(async (address: string): Promise<string[]> => {
    setIsLoading(true)
    try {
      const provider = getProvider()
      if (!provider) return []

      const contract = getContract(CONTRACTS.NetworkGraph, NetworkGraphABI, provider)
      const following = await contract.getFollowing(address)
      return following
    } catch (error) {
      console.error("Error fetching following:", error)
      return []
    } finally {
      setIsLoading(false)
    }
  }, [])

  const checkIsFollowing = useCallback(async (follower: string, following: string): Promise<boolean> => {
    try {
      const provider = getProvider()
      if (!provider) return false

      const contract = getContract(CONTRACTS.NetworkGraph, NetworkGraphABI, provider)
      return await contract.isFollowing(follower, following)
    } catch (error) {
      console.error("Error checking follow status:", error)
      return false
    }
  }, [])

  return {
    follow,
    unfollow,
    getFollowers,
    getFollowing,
    checkIsFollowing,
    isLoading: isLoading || transaction.isLoading,
    isConfirming: transaction.isConfirming,
    isPending: transaction.isPending,
    transactionHash: transaction.hash,
  }
}
