"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const communities = [
  { name: "DeFi Builders", members: "12.4K", category: "Finance", color: "from-primary/20 to-accent/20" },
  { name: "NFT Collectors", members: "8.9K", category: "Art", color: "from-accent/30 to-accent-lime/20" },
  { name: "DAO Governance", members: "5.2K", category: "Governance", color: "from-accent-lime/20 to-primary/20" },
  { name: "Smart Contract Devs", members: "15.1K", category: "Development", color: "from-primary/30 to-accent/20" },
  { name: "Crypto Trading", members: "22.3K", category: "Trading", color: "from-accent/20 to-primary/10" },
  { name: "Web3 Gaming", members: "9.7K", category: "Gaming", color: "from-accent-lime/30 to-accent/20" },
]

export function CommunitiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="communities" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Discover Communities</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Join vibrant communities owned and governed by their members
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full border-border hover:bg-card"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full border-border hover:bg-card"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {communities.map((community) => (
            <div
              key={community.name}
              className={`flex-shrink-0 w-80 p-6 rounded-3xl bg-gradient-to-br ${community.color} backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 snap-start cursor-pointer group`}
            >
              <div className="bg-card/80 backdrop-blur rounded-2xl p-6 h-full">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                  {community.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {community.name}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{community.members} members</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
