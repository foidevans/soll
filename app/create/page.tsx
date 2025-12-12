"use client"

import type React from "react"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { X, ImageIcon, Video, Loader2, Sparkles } from "lucide-react"
import { AppLayout } from "@/components/layout/app-layout"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { useAppStore } from "@/lib/store"
import { useIPFSUpload } from "@/hooks/use-ipfs-upload"
import { useContentVault } from "@/hooks/blockchain"

export default function CreatePostPage() {
  const router = useRouter()
  const { currentUser, addPost } = useAppStore()
  const { upload, isUploading, progress } = useIPFSUpload()
  const { uploadContent, isLoading: isUploadingToChain, isConfirming, isPending } = useContentVault()
  const [content, setContent] = useState("")
  const [mediaFile, setMediaFile] = useState<File | null>(null)
  const [mediaPreview, setMediaPreview] = useState<string | null>(null)
  const [isPublishing, setIsPublishing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setMediaFile(file)
      setMediaPreview(URL.createObjectURL(file))
    }
  }

  const handleRemoveMedia = () => {
    setMediaFile(null)
    setMediaPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handlePublish = async () => {
    if (!content.trim() && !mediaFile) return

    setIsPublishing(true)

    try {
      let ipfsHash = ""
      let videoUrl: string | undefined

      if (mediaFile) {
        const result = await upload(mediaFile)
        ipfsHash = result.hash || result.url
        videoUrl = result.url
      }

      // Prepare metadata for on-chain storage
      const metadata = JSON.stringify({
        content: content.trim(),
        mediaType: mediaFile?.type || "text",
        timestamp: Date.now(),
        username: currentUser?.username,
      })

      // Upload to blockchain
      const txResult = await uploadContent(ipfsHash || "text-only", metadata)

      if (txResult) {
        // Add to local store for immediate UI update
        const newPost = {
          id: crypto.randomUUID(),
          userId: currentUser?.id || "guest",
          username: currentUser?.username || "guest.soll",
          userAvatar: currentUser?.avatar || "/diverse-profile-avatars.png",
          content: content.trim(),
          videoUrl,
          timestamp: new Date(),
          likes: 0,
        }

        addPost(newPost)
        router.push("/home")
      }
    } catch (error) {
      console.error("Publish error:", error)
    } finally {
      setIsPublishing(false)
    }
  }

  const getButtonText = () => {
    if (isUploading) return "Uploading to IPFS..."
    if (isConfirming) return "Confirm in wallet..."
    if (isPending) return "Publishing on-chain..."
    if (isPublishing) return "Publishing..."
    return "Publish"
  }

  const isLoading = isPublishing || isUploading || isUploadingToChain

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto px-4 py-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Create Post</h1>
          <p className="text-muted-foreground">Share with your network</p>
        </header>

        <div className="bg-card rounded-3xl p-6 border border-border">
          <Textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-40 bg-transparent border-0 text-foreground placeholder:text-muted-foreground resize-none text-lg focus-visible:ring-0 p-0"
          />

          {/* Media preview */}
          {mediaPreview && (
            <div className="relative rounded-2xl overflow-hidden mt-4">
              {mediaFile?.type.startsWith("video/") ? (
                <video src={mediaPreview} controls className="w-full aspect-video object-cover rounded-2xl" />
              ) : (
                <img
                  src={mediaPreview || "/placeholder.svg"}
                  alt="Preview"
                  className="w-full aspect-video object-cover rounded-2xl"
                />
              )}
              <button
                onClick={handleRemoveMedia}
                className="absolute top-3 right-3 p-2 rounded-full bg-foreground/80 text-background hover:bg-foreground transition-colors"
                aria-label="Remove media"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Upload progress */}
          {isUploading && (
            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Uploading to IPFS...</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {(isConfirming || isPending) && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>{isConfirming ? "Waiting for wallet confirmation..." : "Transaction pending..."}</span>
            </div>
          )}

          {/* Action bar */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,video/*"
                onChange={handleFileSelect}
                className="hidden"
                id="media-upload"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
                className="text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full"
              >
                <ImageIcon className="h-5 w-5 mr-2" />
                Image
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
                className="text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full"
              >
                <Video className="h-5 w-5 mr-2" />
                Video
              </Button>
            </div>

            <Button
              onClick={handlePublish}
              disabled={(!content.trim() && !mediaFile) || isLoading}
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  {getButtonText()}
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Publish
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
