"use client"

import { useState } from "react"

interface UploadResult {
  hash: string
  url: string
}

export function useIPFSUpload() {
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const upload = async (file: File): Promise<UploadResult> => {
    setIsUploading(true)
    setProgress(0)

    // Mock IPFS upload - simulates upload progress
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsUploading(false)
            return 100
          }
          return prev + 10
        })
      }, 200)

      setTimeout(() => {
        clearInterval(interval)
        setIsUploading(false)
        setProgress(100)
        resolve({
          hash: `Qm${Math.random().toString(36).substring(2, 15)}`,
          url: URL.createObjectURL(file),
        })
      }, 2000)
    })
  }

  return { upload, isUploading, progress }
}
