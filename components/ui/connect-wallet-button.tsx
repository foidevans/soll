"use client"

import { Wallet, Loader2, CheckCircle2, LogOut, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWallet } from "@/hooks/use-wallet"
import { NETWORK } from "@/lib/contracts/config"

interface ConnectWalletButtonProps {
  showDisconnect?: boolean
}

export function ConnectWalletButton({ showDisconnect = true }: ConnectWalletButtonProps) {
  const { isConnected, isConnecting, isCorrectNetwork, connect, disconnect, switchNetwork, shortenedAddress } =
    useWallet()

  if (isConnected && !isCorrectNetwork) {
    return (
      <Button onClick={switchNetwork} variant="destructive" className="gap-2">
        <AlertTriangle className="h-4 w-4" />
        Switch to {NETWORK.name}
      </Button>
    )
  }

  if (isConnected && shortenedAddress) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">{shortenedAddress}</span>
        </div>
        {showDisconnect && (
          <Button
            variant="ghost"
            size="icon"
            onClick={disconnect}
            className="text-muted-foreground hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        )}
      </div>
    )
  }

  return (
    <Button onClick={connect} disabled={isConnecting} className="gap-2">
      {isConnecting ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Connecting...
        </>
      ) : (
        <>
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </>
      )}
    </Button>
  )
}
