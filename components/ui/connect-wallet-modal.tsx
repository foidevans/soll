"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ConnectWalletModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ConnectWalletModal({ open, onOpenChange }: ConnectWalletModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Connect Wallet</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Please connect your wallet to add a comment.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center py-4">
          <ConnectButton showBalance={false} />
        </div>
      </DialogContent>
    </Dialog>
  )
}