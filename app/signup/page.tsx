"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SollLogo } from "@/components/ui/soll-logo"
import { ConnectWalletButton } from "@/components/ui/connect-wallet-button"
import { useWallet } from "@/hooks/use-wallet"
import { useAppStore } from "@/lib/store"
import { FloatingShapes } from "@/components/landing/floating-shapes"
import { useUserRegistry } from "@/hooks/blockchain"

const interests = ["DeFi", "NFTs", "DAOs", "Gaming", "Trading", "Development", "Art", "Music"]

export default function SignupPage() {
  const router = useRouter()
  const { address, isConnected, shortenedAddress, isConnecting, connect, isCorrectNetwork } = useWallet()
  const { setCurrentUser } = useAppStore()
  const { registerUser, isLoading: isRegistering, isConfirming, isPending } = useUserRegistry()
  const [step, setStep] = useState(1)
  const [username, setUsername] = useState("")
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [isCreating, setIsCreating] = useState(false)

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  const handleCreateAccount = async () => {
    if (!username || !address) return

    setIsCreating(true)

    try {
      // Call smart contract to register user
      const result = await registerUser(username)

      if (result) {
        setCurrentUser({
          id: crypto.randomUUID(),
          username,
          walletAddress: address,
          bio: "New to the decentralized world",
          avatar: "/diverse-profile-avatars.png",
        })
        router.push("/home")
      }
    } catch (error) {
      console.error("Registration error:", error)
    } finally {
      setIsCreating(false)
    }
  }

  const getButtonText = () => {
    if (isConfirming) return "Waiting for wallet..."
    if (isPending) return "Creating on-chain..."
    if (isCreating) return "Creating..."
    return "Get Started"
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
          <h1 className="text-3xl font-bold text-foreground">Join Soll</h1>
          <p className="text-muted-foreground mt-2">Social, Owned by You</p>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all duration-300 ${
                s === step ? "w-8 bg-primary" : s < step ? "w-8 bg-accent" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>

        {/* Card */}
        <div className="bg-card rounded-3xl p-8 border border-border shadow-xl">
          {/* Step 1: Username */}
          {step === 1 && (
            <div className="space-y-6 animate-slide-in">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Choose your username</h2>
                <p className="text-sm text-muted-foreground">This is how others will see you on Soll</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username" className="text-foreground">
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="satoshi"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 rounded-xl"
                />
                {username && <p className="text-sm text-muted-foreground">{username}.soll</p>}
              </div>

              <Button
                className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setStep(2)}
                disabled={!username}
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Step 2: Connect Wallet */}
          {step === 2 && (
            <div className="space-y-6 animate-slide-in">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Connect your wallet</h2>
                <p className="text-sm text-muted-foreground">Your wallet is your identity on Web3</p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                {!isConnected ? (
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="2" y="6" width="20" height="12" rx="2" />
                        <path d="M16 10h4v4h-4z" />
                      </svg>
                    </div>
                    <ConnectWalletButton showDisconnect={false} />
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <p className="font-medium text-foreground mb-1">Wallet Connected</p>
                    <p className="text-sm text-muted-foreground">{shortenedAddress}</p>
                    {!isCorrectNetwork && (
                      <p className="text-sm text-destructive mt-2">Please switch to Scroll Sepolia</p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 h-12 rounded-xl border-border text-foreground bg-transparent"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button
                  className="flex-1 h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setStep(3)}
                  disabled={!isConnected || !isCorrectNetwork}
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Interests */}
          {step === 3 && (
            <div className="space-y-6 animate-slide-in">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Pick your interests</h2>
                <p className="text-sm text-muted-foreground">We will personalize your feed based on your choices</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedInterests.includes(interest)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 h-12 rounded-xl border-border text-foreground bg-transparent"
                  onClick={() => setStep(2)}
                >
                  Back
                </Button>
                <Button
                  className="flex-1 h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={handleCreateAccount}
                  disabled={isCreating || isRegistering}
                >
                  {isCreating || isRegistering ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {getButtonText()}
                    </>
                  ) : (
                    <>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account? <button className="text-primary hover:underline font-medium">Sign in</button>
        </p>
      </div>
    </div>
  )
}
