"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle2, ArrowRight, Loader2, Eye, EyeOff, AlertCircle } from "lucide-react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SollLogo } from "@/components/ui/soll-logo"
import { useAppStore } from "@/lib/store"
import { FloatingShapes } from "@/components/landing/floating-shapes"
import { useUserRegistry } from "@/hooks/blockchain"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const interests = ["DeFi", "NFTs", "DAOs", "Gaming", "Trading", "Development", "Art", "Music"]

export default function SignupPage() {
  const router = useRouter()
  const { address, isConnected, chainId } = useAccount()
  const isCorrectNetwork = chainId === 534351 // Scroll Sepolia
  const { setCurrentUser } = useAppStore()
  const { registerUser, isLoading: isRegistering, isConfirming, isPending } = useUserRegistry()
  const [step, setStep] = useState(1)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [isCreating, setIsCreating] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  const usernameError = username.length > 0 && username.length < 3 ? "Username must be at least 3 characters" : ""
  const passwordError = password.length > 0 && password.length < 6 ? "Password must be at least 6 characters" : ""
  const confirmPasswordError =
    confirmPassword.length > 0 && password !== confirmPassword ? "Passwords do not match" : ""

  const isStep1Valid = username.length >= 3 && password.length >= 6 && password === confirmPassword
  const isStep2Valid = isConnected && isCorrectNetwork

  const shortenedAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null

  const handleCreateAccount = async () => {
    if (!username || !address || !isStep1Valid) return

    setIsCreating(true)

    try {
      const hashedPassword = btoa(password)
      localStorage.setItem("soll_user_password", hashedPassword)
      localStorage.setItem("soll_username", username)

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
        setShowSuccessModal(true)
        setTimeout(() => {
          router.push("/home")
        }, 2000)
      }
    } catch (error) {
      console.error("Registration error:", error)
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
          {/* Step 1: Username & Password */}
          {step === 1 && (
            <div className="space-y-6 animate-slide-in">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Create your account</h2>
                <p className="text-sm text-muted-foreground">Choose a username and secure password</p>
              </div>

              <div className="space-y-4">
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
                  {usernameError && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {usernameError}
                    </p>
                  )}
                  {username && !usernameError && <p className="text-sm text-muted-foreground">{username}.soll</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 rounded-xl pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {passwordError && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {passwordError}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-foreground">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 rounded-xl pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {confirmPasswordError && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {confirmPasswordError}
                    </p>
                  )}
                </div>
              </div>

              <Button
                className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setStep(2)}
                disabled={!isStep1Valid}
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
                    <div className="flex justify-center">
                      <ConnectButton showBalance={false} />
                    </div>
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
                  disabled={!isStep2Valid}
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

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md bg-card border-border text-center">
          <DialogHeader className="items-center">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-accent-foreground" />
            </div>
            <DialogTitle className="text-foreground text-xl">Welcome to Soll!</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Your account has been created successfully. Redirecting you to your feed...
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
