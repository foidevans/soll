"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Plus } from "lucide-react"
import { AppLayout } from "@/components/layout/app-layout"
import { PostCard } from "@/components/ui/post-card"
import { PostCardSkeleton } from "@/components/ui/post-card-skeleton"
import { Button } from "@/components/ui/button"
import { useAppStore } from "@/lib/store"

export default function HomePage() {
  const { posts } = useAppStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto px-4 py-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Home</h1>
          <p className="text-muted-foreground">Your decentralized feed</p>
        </header>

        <div className="space-y-4">
          {isLoading ? (
            <>
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
            </>
          ) : (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          )}
        </div>

        {/* Floating create button with Soll style */}
        <Link href="/create">
          <Button
            size="lg"
            className="fixed bottom-24 right-4 md:bottom-6 md:right-6 h-14 w-14 rounded-full shadow-lg shadow-primary/30 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 transition-all"
            aria-label="Create post"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </AppLayout>
  )
}
