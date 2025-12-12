"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Camera, Edit3, Copy, Check, LogOut, Settings, Loader2, Gift, Coins } from "lucide-react"
import { AppLayout } from "@/components/layout/app-layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { PostCard } from "@/components/ui/post-card"
import { useAppStore } from "@/lib/store"
import { useWallet } from "@/hooks/use-wallet"
import { useRouter } from "next/navigation"
import { useUserRegistry, useContentVault, useDemoScrollToken } from "@/hooks/blockchain"
import { useIPFSUpload } from "@/hooks/use-ipfs-upload"

export default function ProfilePage() {
  const router = useRouter()
  const { currentUser, setCurrentUser, posts } = useAppStore()
  const { shortenedAddress, address, disconnect } = useWallet()
  const { updateProfile, isLoading: isUpdatingProfile, isConfirming, isPending } = useUserRegistry()
  const { claimAllRewards, getContentsByCreator, isLoading: isLoadingContent } = useContentVault()
  const { getBalance, faucet, isLoading: isLoadingToken } = useDemoScrollToken()
  const { upload } = useIPFSUpload()

  const [isEditing, setIsEditing] = useState(false)
  const [editedBio, setEditedBio] = useState(currentUser?.bio || "")
  const [copied, setCopied] = useState(false)
  const [isSavingBio, setIsSavingBio] = useState(false)
  const [isClaimingRewards, setIsClaimingRewards] = useState(false)
  const [isFauceting, setIsFauceting] = useState(false)
  const [tokenBalance, setTokenBalance] = useState<string>("0")
  const [totalRewards, setTotalRewards] = useState<string>("0")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const user = currentUser || {
    id: "demo",
    username: "demo.soll",
    walletAddress: address || "0x1234...5678",
    bio: "Welcome to your profile! Connect your wallet to get started.",
    avatar: "/diverse-profile-avatars.png",
  }

  const userPosts = posts.filter((post) => post.userId === user.id)

  // Load token balance
  useEffect(() => {
    const loadBalance = async () => {
      if (address) {
        const balance = await getBalance(address)
        setTokenBalance(balance)
      }
    }
    loadBalance()
  }, [address, getBalance])

  // Load rewards from on-chain content
  useEffect(() => {
    const loadRewards = async () => {
      if (address) {
        try {
          const contents = await getContentsByCreator(address)
          const total = contents.reduce((sum, c) => sum + Number(c.rewardBalance), BigInt(0))
          setTotalRewards((Number(total) / 1e18).toFixed(4))
        } catch (error) {
          console.error("Error loading rewards:", error)
        }
      }
    }
    loadRewards()
  }, [address, getContentsByCreator])

  const handleCopyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleSaveBio = async () => {
    if (!currentUser) return

    setIsSavingBio(true)
    try {
      // Update on-chain
      const result = await updateProfile(editedBio, currentUser.avatar || "")

      if (result) {
        // Update local state
        setCurrentUser({ ...currentUser, bio: editedBio })
        setIsEditing(false)
      }
    } catch (error) {
      console.error("Error updating profile:", error)
    } finally {
      setIsSavingBio(false)
    }
  }

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && currentUser) {
      try {
        // Upload to IPFS
        const result = await upload(file)
        const newAvatar = result.url || URL.createObjectURL(file)

        // Update on-chain with new avatar hash
        await updateProfile(currentUser.bio, result.hash || newAvatar)

        // Update local state
        setCurrentUser({ ...currentUser, avatar: newAvatar })
      } catch (error) {
        console.error("Error uploading avatar:", error)
      }
    }
  }

  const handleClaimAllRewards = async () => {
    setIsClaimingRewards(true)
    try {
      await claimAllRewards()
      // Refresh balance after claiming
      if (address) {
        const balance = await getBalance(address)
        setTokenBalance(balance)
        setTotalRewards("0")
      }
    } catch (error) {
      console.error("Error claiming rewards:", error)
    } finally {
      setIsClaimingRewards(false)
    }
  }

  const handleFaucet = async () => {
    setIsFauceting(true)
    try {
      await faucet()
      // Refresh balance after faucet
      if (address) {
        const balance = await getBalance(address)
        setTokenBalance(balance)
      }
    } catch (error) {
      console.error("Error getting tokens:", error)
    } finally {
      setIsFauceting(false)
    }
  }

  const handleSignOut = () => {
    disconnect()
    setCurrentUser(null)
    router.push("/signup")
  }

  const isSaving = isSavingBio || isUpdatingProfile

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto px-4 py-6">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Profile</h1>
            <p className="text-muted-foreground">Manage your identity</p>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground rounded-full">
            <Settings className="h-5 w-5" />
          </Button>
        </header>

        {/* Profile card */}
        <div className="bg-card rounded-3xl p-8 border border-border mb-6">
          <div className="flex flex-col items-center text-center">
            {/* Avatar with upload */}
            <div className="relative mb-4">
              <Avatar className="h-28 w-28 border-4 border-accent">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.username} />
                <AvatarFallback className="bg-secondary text-secondary-foreground text-3xl">
                  {user.username.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 p-2.5 rounded-full bg-primary text-primary-foreground shadow-lg"
                aria-label="Change avatar"
              >
                <Camera className="h-4 w-4" />
              </button>
            </div>

            {/* Username */}
            <h2 className="text-2xl font-bold text-foreground">{user.username}</h2>

            {/* Wallet address */}
            <button
              onClick={handleCopyAddress}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mt-1 px-3 py-1.5 rounded-full bg-secondary/50 transition-colors"
            >
              <span>{shortenedAddress || user.walletAddress}</span>
              {copied ? <Check className="h-3 w-3 text-primary" /> : <Copy className="h-3 w-3" />}
            </button>

            {/* Token Balance */}
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50">
                <Coins className="h-4 w-4 text-accent-foreground" />
                <span className="font-medium text-foreground">{tokenBalance} SCROLL</span>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={handleFaucet}
                disabled={isFauceting || isLoadingToken}
                className="rounded-full bg-transparent"
              >
                {isFauceting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-1" />
                    Getting...
                  </>
                ) : (
                  "Get Tokens"
                )}
              </Button>
            </div>

            {/* Rewards Section */}
            {Number(totalRewards) > 0 && (
              <div className="mt-4 p-4 rounded-2xl bg-primary/10 border border-primary/20 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">Unclaimed Rewards</span>
                  </div>
                  <span className="font-bold text-primary">{totalRewards} SCROLL</span>
                </div>
                <Button
                  size="sm"
                  onClick={handleClaimAllRewards}
                  disabled={isClaimingRewards}
                  className="w-full mt-3 rounded-full bg-primary text-primary-foreground"
                >
                  {isClaimingRewards ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Claiming...
                    </>
                  ) : (
                    "Claim All Rewards"
                  )}
                </Button>
              </div>
            )}

            {/* Bio */}
            <div className="mt-6 w-full">
              {isEditing ? (
                <div className="space-y-3">
                  <Textarea
                    value={editedBio}
                    onChange={(e) => setEditedBio(e.target.value)}
                    className="bg-secondary/50 border-border text-foreground resize-none rounded-xl"
                    placeholder="Tell the world about yourself..."
                  />
                  <div className="flex gap-2 justify-center">
                    <Button
                      size="sm"
                      onClick={handleSaveBio}
                      disabled={isSaving}
                      className="rounded-full bg-primary text-primary-foreground"
                    >
                      {isSaving ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin mr-1" />
                          {isConfirming ? "Confirm..." : isPending ? "Saving..." : "Save"}
                        </>
                      ) : (
                        "Save"
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setIsEditing(false)}
                      disabled={isSaving}
                      className="rounded-full"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-center gap-2">
                  <p className="text-muted-foreground">{user.bio}</p>
                  <button
                    onClick={() => {
                      setEditedBio(user.bio)
                      setIsEditing(true)
                    }}
                    className="text-muted-foreground hover:text-foreground p-1"
                    aria-label="Edit bio"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Sign out */}
            <Button
              variant="ghost"
              onClick={handleSignOut}
              className="mt-6 text-muted-foreground hover:text-destructive rounded-full"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* User's posts */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Your Posts</h3>
          {userPosts.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-2xl border border-border">
              <p className="text-muted-foreground">You haven{"'"}t posted anything yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {userPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
