"use client"

import { useState, useCallback } from "react"
import { CONTRACTS } from "@/lib/contracts/config"
import { getContract, getSigner, getProvider } from "@/lib/contracts/contract-factory"
import MockImpactOracleABI from "@/lib/abis/MockImpactOracle.json"
import { useTransaction } from "./use-transaction"

export function useImpactOracle() {
  const transaction = useTransaction()
  const [isLoading, setIsLoading] = useState(false)

  const getImpactScore = useCallback(async (contentId: bigint): Promise<bigint> => {
    setIsLoading(true)
    try {
      const provider = getProvider()
      if (!provider) return BigInt(0)

      const contract = getContract(CONTRACTS.MockImpactOracle, MockImpactOracleABI, provider)
      return await contract.getImpactScore(contentId)
    } catch (error) {
      console.error("Error fetching impact score:", error)
      return BigInt(0)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const updateImpactScore = useCallback(
    async (contentId: bigint, newScore: bigint) => {
      const signer = await getSigner()
      if (!signer) throw new Error("No signer available")

      const contract = getContract(CONTRACTS.MockImpactOracle, MockImpactOracleABI, signer)

      return transaction.execute(
        async () => {
          const tx = await contract.updateImpactScore(contentId, newScore)
          return tx
        },
        { successMessage: "Impact score updated!" },
      )
    },
    [transaction],
  )

  const batchUpdateScores = useCallback(
    async (ids: bigint[], scores: bigint[]) => {
      const signer = await getSigner()
      if (!signer) throw new Error("No signer available")

      const contract = getContract(CONTRACTS.MockImpactOracle, MockImpactOracleABI, signer)

      return transaction.execute(
        async () => {
          const tx = await contract.batchUpdateScores(ids, scores)
          return tx
        },
        { successMessage: "Scores batch updated!" },
      )
    },
    [transaction],
  )

  return {
    getImpactScore,
    updateImpactScore,
    batchUpdateScores,
    isLoading: isLoading || transaction.isLoading,
    isConfirming: transaction.isConfirming,
    isPending: transaction.isPending,
    transactionHash: transaction.hash,
  }
}
