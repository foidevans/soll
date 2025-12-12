"use client"

import { useState, useCallback } from "react"
import { CONTRACTS } from "@/lib/contracts/config"
import { getContract, getSigner, getProvider } from "@/lib/contracts/contract-factory"
import UserRegistryABI from "@/lib/abis/UserRegistry.json"
import { useTransaction } from "./use-transaction"
import { ethers } from "ethers"

export interface UserData {
  username: string
  bio: string
  profilePicHash: string
  exists: boolean
}

export function useUserRegistry() {
  const transaction = useTransaction()
  const [isLoading, setIsLoading] = useState(false)

  const registerUser = useCallback(
    async (username: string) => {
      const signer = await getSigner()
      if (!signer) throw new Error("No signer available")

      const contract = getContract(CONTRACTS.UserRegistry, UserRegistryABI, signer)

      return transaction.execute(
        async () => {
          const tx = await contract.registerUser(username)
          return tx
        },
        { successMessage: "Account created on-chain!" },
      )
    },
    [transaction],
  )

  const updateProfile = useCallback(
    async (bio: string, profilePicHash: string) => {
      const signer = await getSigner()
      if (!signer) throw new Error("No signer available")

      const contract = getContract(CONTRACTS.UserRegistry, UserRegistryABI, signer)

      return transaction.execute(
        async () => {
          const tx = await contract.updateProfile(bio, profilePicHash)
          return tx
        },
        { successMessage: "Profile updated on-chain!" },
      )
    },
    [transaction],
  )

  const getUser = useCallback(async (address: string): Promise<UserData | null> => {
    setIsLoading(true)
    try {
      const provider = getProvider()
      if (!provider) return null

      const contract = getContract(CONTRACTS.UserRegistry, UserRegistryABI, provider)
      const user = await contract.getUser(address)

      return {
        username: user.username,
        bio: user.bio,
        profilePicHash: user.profilePicHash,
        exists: user.exists,
      }
    } catch (error) {
      console.error("Error fetching user:", error)
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  const getUserByUsername = useCallback(async (username: string): Promise<string | null> => {
    setIsLoading(true)
    try {
      const provider = getProvider()
      if (!provider) return null

      const contract = getContract(CONTRACTS.UserRegistry, UserRegistryABI, provider)
      const address = await contract.getUserByUsername(username)

      return address === ethers.ZeroAddress ? null : address
    } catch (error) {
      console.error("Error fetching user by username:", error)
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    registerUser,
    updateProfile,
    getUser,
    getUserByUsername,
    isLoading: isLoading || transaction.isLoading,
    isConfirming: transaction.isConfirming,
    isPending: transaction.isPending,
    transactionHash: transaction.hash,
  }
}
