"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Comment {
  id: string
  postId: string
  userId: string
  username: string
  userAvatar: string
  text: string
  timestamp: Date
}

interface CommentsState {
  comments: Comment[]
  addComment: (comment: Omit<Comment, "id" | "timestamp">) => void
  getCommentsByPostId: (postId: string) => Comment[]
  deleteComment: (commentId: string) => void
}

export const useCommentsStore = create<CommentsState>()(
  persist(
    (set, get) => ({
      comments: [],

      addComment: (comment) => {
        const newComment: Comment = {
          ...comment,
          id: crypto.randomUUID(),
          timestamp: new Date(),
        }
        set((state) => ({
          comments: [...state.comments, newComment],
        }))
      },

      getCommentsByPostId: (postId) => {
        return get().comments.filter((comment) => comment.postId === postId)
      },

      deleteComment: (commentId) => {
        set((state) => ({
          comments: state.comments.filter((comment) => comment.id !== commentId),
        }))
      },
    }),
    {
      name: "soll-comments-storage",
    }
  )
)
