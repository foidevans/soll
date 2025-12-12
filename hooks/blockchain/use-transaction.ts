"use client"

import { useState, useCallback } from "react"
import { useToast } from "@/hooks/use-toast"

export type TransactionStatus = "idle" | "confirming" | "pending" | "success" | "error"

export interface TransactionState {
  status: TransactionStatus
  hash?: string
  error?: string
}

export function useTransaction() {
  const { toast } = useToast()
  const [state, setState] = useState<TransactionState>({ status: "idle" })

  const execute = useCallback(
    async (txFn, options) => {
      try {
        setState({ status: "confirming" })
        toast({
          title: "Waiting for wallet confirmation...",
          description: "Please confirm the transaction in your wallet",
        })

        const tx = await txFn()

        setState({ status: "pending", hash: tx.hash })
        toast({
          title: "Transaction submitted",
          description: `Hash: ${tx.hash.slice(0, 10)}...${tx.hash.slice(-8)}`,
        })

        const result = await tx.wait()

        setState({ status: "success", hash: tx.hash })
        toast({
          title: options?.successMessage || "Transaction confirmed",
          description: "Your transaction was successful",
        })

        options?.onSuccess?.(result)
        return result
      } catch (error) {
        const message = error?.reason || error?.message || "Transaction failed"
        setState({ status: "error", error: message })
        toast({
          title: "Transaction failed",
          description: message,
          variant: "destructive",
        })
        return null
      }
    },
    [toast],
  )

  const reset = useCallback(() => {
    setState({ status: "idle" })
  }, [])

  return {
    ...state,
    isLoading: state.status === "confirming" || state.status === "pending",
    isConfirming: state.status === "confirming",
    isPending: state.status === "pending",
    isSuccess: state.status === "success",
    isError: state.status === "error",
    execute,
    reset,
  }
}
