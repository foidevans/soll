"use client"

import { useState, useEffect } from "react"
import { Search, Loader2 } from "lucide-react"
import { AppLayout } from "@/components/layout/app-layout"
import { UserCard } from "@/components/ui/user-card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAppStore } from "@/lib/store"
import { useWallet } from "@/hooks/use-wallet"
import { useNetworkGraph } from "@/hooks/blockchain"

export default function NetworkPage() {
  const { users } = useAppStore()
  const { address } = useWallet()
  const {
    follow,
    unfollow,
    getFollowing,
    checkIsFollowing,
    isLoading: isTxLoading,
    isConfirming,
    isPending,
  } = useNetworkGraph()
  const [searchQuery, setSearchQuery] = useState("")
  const [connectedUsers, setConnectedUsers] = useState<Set<string>>(new Set())
  const [loadingUserId, setLoadingUserId] = useState<string | null>(null)
  const [isLoadingFollowing, setIsLoadingFollowing] = useState(true)

  useEffect(() => {
    const loadFollowing = async () => {
      if (!address) {
        setIsLoadingFollowing(false)
        return
      }

      try {
        const following = await getFollowing(address)
        // Map blockchain addresses to user IDs
        const followingSet = new Set<string>()
        for (const user of users) {
          if (following.includes(user.walletAddress?.toLowerCase())) {
            followingSet.add(user.id)
          }
        }
        setConnectedUsers(followingSet)
      } catch (error) {
        console.error("Error loading following:", error)
      } finally {
        setIsLoadingFollowing(false)
      }
    }

    loadFollowing()
  }, [address, getFollowing, users])

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.bio.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleConnect = async (userId: string, userAddress: string) => {
    if (!address || !userAddress) return

    setLoadingUserId(userId)

    try {
      const isCurrentlyFollowing = connectedUsers.has(userId)

      if (isCurrentlyFollowing) {
        const result = await unfollow(userAddress)
        if (result) {
          setConnectedUsers((prev) => {
            const newSet = new Set(prev)
            newSet.delete(userId)
            return newSet
          })
        }
      } else {
        const result = await follow(userAddress)
        if (result) {
          setConnectedUsers((prev) => {
            const newSet = new Set(prev)
            newSet.add(userId)
            return newSet
          })
        }
      }
    } catch (error) {
      console.error("Connection error:", error)
    } finally {
      setLoadingUserId(null)
    }
  }

  const connected = filteredUsers.filter((u) => connectedUsers.has(u.id))
  const suggestions = filteredUsers.filter((u) => !connectedUsers.has(u.id))

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto px-4 py-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Network</h1>
          <p className="text-muted-foreground">Discover and connect with others</p>
        </header>

        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search people..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground h-12 rounded-xl"
          />
        </div>

        {isLoadingFollowing ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            <span className="ml-2 text-muted-foreground">Loading network...</span>
          </div>
        ) : (
          <Tabs defaultValue="suggestions" className="w-full">
            <TabsList className="w-full mb-6 bg-secondary/50 p-1 rounded-xl">
              <TabsTrigger
                value="suggestions"
                className="flex-1 rounded-lg data-[state=active]:bg-card data-[state=active]:text-foreground"
              >
                Suggestions
              </TabsTrigger>
              <TabsTrigger
                value="connected"
                className="flex-1 rounded-lg data-[state=active]:bg-card data-[state=active]:text-foreground"
              >
                Connected ({connected.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="suggestions" className="space-y-3">
              {suggestions.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No suggestions found</p>
                </div>
              ) : (
                suggestions.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    isConnected={false}
                    isLoading={loadingUserId === user.id}
                    onConnect={() => handleConnect(user.id, user.walletAddress || "")}
                  />
                ))
              )}
            </TabsContent>

            <TabsContent value="connected" className="space-y-3">
              {connected.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">You haven{"'"}t connected with anyone yet</p>
                </div>
              ) : (
                connected.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    isConnected={true}
                    isLoading={loadingUserId === user.id}
                    onConnect={() => handleConnect(user.id, user.walletAddress || "")}
                  />
                ))
              )}
            </TabsContent>
          </Tabs>
        )}
      </div>
    </AppLayout>
  )
}
