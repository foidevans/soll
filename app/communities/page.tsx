"use client"

import { useState } from "react"
import { Search, Users } from "lucide-react"
import { AppLayout } from "@/components/layout/app-layout"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const allCommunities = [
  {
    id: "1",
    name: "DeFi Builders",
    members: "12.4K",
    category: "Finance",
    joined: false,
    description: "Building the future of decentralized finance",
  },
  {
    id: "2",
    name: "NFT Collectors",
    members: "8.9K",
    category: "Art",
    joined: true,
    description: "Curating and collecting digital art",
  },
  {
    id: "3",
    name: "DAO Governance",
    members: "5.2K",
    category: "Governance",
    joined: false,
    description: "Decentralized decision making",
  },
  {
    id: "4",
    name: "Smart Contract Devs",
    members: "15.1K",
    category: "Development",
    joined: true,
    description: "Writing secure and efficient contracts",
  },
  {
    id: "5",
    name: "Crypto Trading",
    members: "22.3K",
    category: "Trading",
    joined: false,
    description: "Technical analysis and trading strategies",
  },
  {
    id: "6",
    name: "Web3 Gaming",
    members: "9.7K",
    category: "Gaming",
    joined: false,
    description: "Play-to-earn and blockchain gaming",
  },
]

export default function CommunitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [communities, setCommunities] = useState(allCommunities)

  const filteredCommunities = communities.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const joinedCommunities = filteredCommunities.filter((c) => c.joined)
  const discoverCommunities = filteredCommunities.filter((c) => !c.joined)

  const toggleJoin = (id: string) => {
    setCommunities((prev) => prev.map((c) => (c.id === id ? { ...c, joined: !c.joined } : c)))
  }

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto px-4 py-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Communities</h1>
          <p className="text-muted-foreground">Discover and join communities</p>
        </header>

        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search communities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground h-12 rounded-xl"
          />
        </div>

        <Tabs defaultValue="discover" className="w-full">
          <TabsList className="w-full mb-6 bg-secondary/50 p-1 rounded-xl">
            <TabsTrigger
              value="discover"
              className="flex-1 rounded-lg data-[state=active]:bg-card data-[state=active]:text-foreground"
            >
              Discover
            </TabsTrigger>
            <TabsTrigger
              value="joined"
              className="flex-1 rounded-lg data-[state=active]:bg-card data-[state=active]:text-foreground"
            >
              Joined ({joinedCommunities.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-3">
            {discoverCommunities.map((community) => (
              <div
                key={community.id}
                className="bg-card rounded-2xl p-5 border border-border hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {community.name}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">{community.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                        {community.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{community.members} members</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => toggleJoin(community.id)}
                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Join
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="joined" className="space-y-3">
            {joinedCommunities.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">You haven{"'"}t joined any communities yet</p>
              </div>
            ) : (
              joinedCommunities.map((community) => (
                <div
                  key={community.id}
                  className="bg-card rounded-2xl p-5 border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {community.name}
                      </h3>
                      <p className="text-sm text-muted-foreground truncate">{community.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                          {community.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{community.members} members</span>
                      </div>
                    </div>
                    <Button
                      variant="secondary"
                      onClick={() => toggleJoin(community.id)}
                      className="rounded-full text-muted-foreground"
                    >
                      Joined
                    </Button>
                  </div>
                </div>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}
