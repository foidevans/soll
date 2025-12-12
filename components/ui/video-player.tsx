"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"
import Image from "next/image"

interface VideoPlayerProps {
  src: string
  poster?: string
}

export function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // For mock purposes, we'll display as an image with play overlay
  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm")

  if (isVideo) {
    return (
      <div className="relative rounded-lg overflow-hidden bg-secondary">
        <video src={src} poster={poster} controls className="w-full aspect-video object-cover" />
      </div>
    )
  }

  // For placeholder images, show as media preview
  return (
    <div className="relative rounded-lg overflow-hidden bg-secondary group">
      <Image
        src={src || "/placeholder.svg"}
        alt="Post media"
        width={400}
        height={300}
        className="w-full aspect-video object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
        </button>
      </div>
    </div>
  )
}
