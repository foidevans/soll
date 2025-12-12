"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface Comment {
  id: string
  postId: string
  user: string
  userAvatar?: string
  text: string
  timestamp: Date
}

interface CommentsState {
  comments: Comment[]
  addComment: (postId: string, user: string, userAvatar: string | undefined, text: string) => void
  getCommentsByPostId: (postId: string) => Comment[]
}

const CommentsContext = createContext<CommentsState | undefined>(undefined)

// Initial mock comments
const mockComments: Comment[] = [
  {
    id: "c1",
    postId: "1",
    user: "defi_queen",
    userAvatar: "/woman-crypto-avatar.jpg",
    text: "Amazing work! Can't wait to see the gas optimizations.",
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
  },
  {
    id: "c2",
    postId: "2",
    user: "web3_dev",
    userAvatar: "/developer-avatar.png",
    text: "Solid advice as always!",
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
  },
]

export function CommentsProvider({ children }: { children: ReactNode }) {
  const [comments, setComments] = useState<Comment[]>(mockComments)

  const addComment = (postId: string, user: string, userAvatar: string | undefined, text: string) => {
    const newComment: Comment = {
      id: crypto.randomUUID(),
      postId,
      user,
      userAvatar,
      text,
      timestamp: new Date(),
    }
    setComments((prev) => [...prev, newComment])
  }

  const getCommentsByPostId = (postId: string) => {
    return comments.filter((c) => c.postId === postId)
  }

  return (
    <CommentsContext.Provider value={{ comments, addComment, getCommentsByPostId }}>
      {children}
    </CommentsContext.Provider>
  )
}

export function useComments() {
  const context = useContext(CommentsContext)
  if (!context) {
    throw new Error("useComments must be used within CommentsProvider")
  }
  return context
}
