"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SollLogo } from "@/components/ui/soll-logo"
import { useWallet } from "@/hooks/use-wallet"
import { useAppStore } from "@/lib/store"
import { FloatingShapes } from "@/components/landing/floating-shapes"
import { useUserRegistry } from "@/hooks/blockchain"

export default function SignInPage() {
  const router = useRouter()
  const { address, isConnected, shortenedAddress, isConnecting, connect, isCorrectNetwork, switchNetwork } = useWallet()
  const { setCurrentUser } = useAppStore()
  const { getUser } = useUserRegistry()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Auto-check if user is registered when wallet connects
  useEffect(() => {
    if (isConnected && address && isCorrectNetwork) {
      checkAndSignIn()
    }
  }, [isConnected, address, isCorrectNetwork])

  const checkAndSignIn = async () => {
    if (!address) return

    setIsLoading(true)
    setError("")

    try {
      console.log("Checking registration for:", address)
      const userData = await getUser(address)

      if (userData && userData.exists) {
        console.log("User found:", userData)
        
        // Set the current user
        setCurrentUser({
          id: crypto.randomUUID(),
          username: userData.username,
          walletAddress: address,
          bio: userData.bio || "Welcome back to Soll",
          avatar: userData.profilePicHash || "/diverse-profile-avatars.png",
        })

        // Redirect to home
        router.push("/home")
      } else {
        setError("No account found for this wallet. Please sign up first.")
      }
    } catch (err) {
      console.error("Sign in error:", err)
      setError("Failed to sign in. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleConnectWallet = async () => {
    try {
      await connect()
    } catch (err) {
      console.error("Connection error:", err)
      setError("Failed to connect wallet. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingShapes />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <SollLogo className="h-16 w-16" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Connect your wallet to sign in</p>
        </div>

        {/* Card */}
        <div className="bg-card rounded-3xl p-8 border border-border shadow-xl">
          <div className="space-y-6">
            {/* Wallet Connection */}
            <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
              {!isConnected ? (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Wallet className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect your wallet to access your account
                  </p>
                  <Button
                    onClick={handleConnectWallet}
                    disabled={isConnecting}
                    className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {isConnecting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        <Wallet className="h-4 w-4 mr-2" />
                        Connect Wallet
                      </>
                    )}
                  </Button>
                </div>
              ) : !isCorrectNetwork ? (
                <div className="text-center">
                  <p className="text-sm text-destructive mb-4">Wrong network detected</p>
                  <Button
                    onClick={switchNetwork}
                    variant="destructive"
                    className="w-full h-12 rounded-xl"
                  >
                    Switch to Scroll Sepolia
                  </Button>
                </div>
              ) : isLoading ? (
                <div className="text-center">
                  <Loader2 className="h-8 w-8 mx-auto mb-4 animate-spin text-primary" />
                  <p className="text-sm text-muted-foreground">Signing you in...</p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <Wallet className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <p className="font-medium text-foreground mb-1">Connected</p>
                  <p className="text-sm text-muted-foreground">{shortenedAddress}</p>
                </div>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                <p className="text-sm text-destructive text-center">{error}</p>
              </div>
            )}

            {/* Retry Button (if error) */}
            {error && isConnected && isCorrectNetwork && (
              <Button
                onClick={checkAndSignIn}
                disabled={isLoading}
                className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Retrying...
                  </>
                ) : (
                  "Retry"
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => router.push("/signup")}
            className="text-primary hover:underline font-medium"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}