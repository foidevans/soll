"use client"

import { useState } from "react"
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { VideoPlayer } from "./video-player"
import type { Post } from "@/lib/store"

interface PostCardProps {
  post: Post
}

function formatTimestamp(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  return `${diffDays}d ago`
}

export function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1))
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-5 hover:border-primary/20 transition-all duration-200 hover:shadow-lg hover:shadow-primary/5">
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-11 w-11">
          <AvatarImage src={post.userAvatar || "/placeholder.svg"} alt={post.username} />
          <AvatarFallback className="bg-accent text-accent-foreground">
            {post.username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-semibold text-foreground">{post.username}</p>
          <p className="text-xs text-muted-foreground">{formatTimestamp(post.timestamp)}</p>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground rounded-full">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <p className="text-foreground leading-relaxed mb-4">{post.content}</p>

      {post.videoUrl && (
        <div className="mb-4 rounded-xl overflow-hidden">
          <VideoPlayer src={post.videoUrl} />
        </div>
      )}

      <div className="flex items-center gap-1 pt-3 border-t border-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLike}
          className={`gap-2 rounded-full ${liked ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
          <span>{likeCount}</span>
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-2 rounded-full">
          <MessageCircle className="h-4 w-4" />
          <span>Reply</span>
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-2 rounded-full">
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </div>
    </div>
  )
}
