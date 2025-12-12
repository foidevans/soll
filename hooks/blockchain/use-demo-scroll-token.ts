"use client"

import { useState, useCallback } from "react"
import { CONTRACTS } from "@/lib/contracts/config"
import { getContract, getSigner, getProvider } from "@/lib/contracts/contract-factory"
import DemoScrollTokenABI from "@/lib/abis/DemoScrollToken.json"
import { useTransaction } from "./use-transaction"
import { ethers } from "ethers"

export function useDemoScrollToken() {
  const transaction = useTransaction()
  const [isLoading, setIsLoading] = useState(false)

  const faucet = useCallback(async () => {
    const signer = await getSigner()
    if (!signer) throw new Error("No signer available")

    const contract = getContract(CONTRACTS.DemoScrollToken, DemoScrollTokenABI, signer)

    return transaction.execute(
      async () => {
        const tx = await contract.faucet()
        return tx
      },
      { successMessage: "Tokens received from faucet!" },
    )
  }, [transaction])

  const getBalance = useCallback(async (address: string): Promise<string> => {
    setIsLoading(true)
    try {
      const provider = getProvider()
      if (!provider) return "0"

      const contract = getContract(CONTRACTS.DemoScrollToken, DemoScrollTokenABI, provider)
      const balance = await contract.balanceOf(address)
      return ethers.formatEther(balance)
    } catch (error) {
      console.error("Error fetching balance:", error)
      return "0"
    } finally {
      setIsLoading(false)
    }
  }, [])

  const transfer = useCallback(
    async (to: string, value: string) => {
      const signer = await getSigner()
      if (!signer) throw new Error("No signer available")

      const contract = getContract(CONTRACTS.DemoScrollToken, DemoScrollTokenABI, signer)

      return transaction.execute(
        async () => {
          const tx = await contract.transfer(to, ethers.parseEther(value))
          return tx
        },
        { successMessage: "Transfer successful!" },
      )
    },
    [transaction],
  )

  return {
    faucet,
    getBalance,
    transfer,
    isLoading: isLoading || transaction.isLoading,
    isConfirming: transaction.isConfirming,
    isPending: transaction.isPending,
    transactionHash: transaction.hash,
  }
}
