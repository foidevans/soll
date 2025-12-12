"use client"

import { useState } from "react"
import { Heart, MessageCircle, Share2, MoreHorizontal, ChevronDown, ChevronUp } from "lucide-react"
import { useAccount } from "wagmi"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { VideoPlayer } from "./video-player"
import { CommentBox } from "./comment-box"
import { CommentList } from "./comment-list"
import { ConnectWalletModal } from "./connect-wallet-modal"
import { useComments } from "@/lib/comments-store"
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
  const { address, isConnected } = useAccount()
  const { addComment, getCommentsByPostId } = useComments()
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)
  const [showCommentBox, setShowCommentBox] = useState(false)
  const [showConnectModal, setShowConnectModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const comments = getCommentsByPostId(post.id)

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1))
  }

  const handleCommentClick = () => {
    if (!isConnected) {
      setShowConnectModal(true)
      return
    }
    setShowCommentBox(!showCommentBox)
    if (!showCommentBox) {
      setShowComments(true)
    }
  }

  const handleSubmitComment = async (text: string) => {
    if (!isConnected || !address) {
      setShowConnectModal(true)
      return
    }

    setIsSubmitting(true)
    // Simulate a small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 300))

    // Use shortened address as username for now
    const username = `${address.slice(0, 6)}...${address.slice(-4)}`
    addComment(post.id, username, undefined, text)
    setIsSubmitting(false)
    setShowComments(true)
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
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCommentClick}
          className={`gap-2 rounded-full ${showCommentBox ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
        >
          <MessageCircle className={`h-4 w-4 ${showCommentBox ? "fill-current" : ""}`} />
          <span>Comment</span>
          {comments.length > 0 && <span className="text-xs">({comments.length})</span>}
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-2 rounded-full">
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </div>

      {showCommentBox && (
        <div className="mt-4 pt-3 border-t border-border/50 animate-slide-in">
          <CommentBox onSubmit={handleSubmitComment} isSubmitting={isSubmitting} />
        </div>
      )}

      {comments.length > 0 && (
        <div className="mt-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowComments(!showComments)}
            className="text-muted-foreground hover:text-foreground gap-1 -ml-2"
          >
            {showComments ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            <span>
              {showComments ? "Hide" : "Show"} {comments.length} comment{comments.length !== 1 ? "s" : ""}
            </span>
          </Button>
          {showComments && <CommentList comments={comments} />}
        </div>
      )}

      <ConnectWalletModal open={showConnectModal} onOpenChange={setShowConnectModal} />
    </div>
  )
}
