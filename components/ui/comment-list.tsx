// "use client"

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { useCommentsStore } from "@/lib/comments-store"

// interface CommentListProps {
//   postId: string
// }

// function formatTimestamp(date: Date): string {
//   const now = new Date()
//   const diffMs = now.getTime() - new Date(date).getTime()
//   const diffMins = Math.floor(diffMs / (1000 * 60))
//   const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
//   const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

//   if (diffMins < 1) return "just now"
//   if (diffMins < 60) return `${diffMins}m ago`
//   if (diffHours < 24) return `${diffHours}h ago`
//   return `${diffDays}d ago`
// }

// export function CommentList({ postId }: CommentListProps) {
//   const { getCommentsByPostId } = useCommentsStore()
//   const comments = getCommentsByPostId(postId)

//   if (comments.length === 0) {
//     return null
//   }

//   return (
//     <div className="mt-4 space-y-3">
//       {comments.map((comment) => (
//         <div
//           key={comment.id}
//           className="flex gap-3 p-3 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/20 transition-colors"
//         >
//           <Avatar className="h-8 w-8 shrink-0">
//             <AvatarImage src={comment.userAvatar || "/placeholder.svg"} alt={comment.username} />
//             <AvatarFallback className="bg-accent text-accent-foreground text-xs">
//               {comment.username.slice(0, 2).toUpperCase()}
//             </AvatarFallback>
//           </Avatar>
//           <div className="flex-1 min-w-0">
//             <div className="flex items-center gap-2 mb-1">
//               <span className="font-semibold text-sm text-foreground">{comment.username}</span>
//               <span className="text-xs text-muted-foreground">{formatTimestamp(comment.timestamp)}</span>
//             </div>
//             <p className="text-sm text-foreground leading-relaxed break-words">{comment.text}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }


"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Comment } from "@/lib/comments-store"

interface CommentListProps {
  comments: Comment[]
}

function formatTimestamp(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffMins < 1) return "just now"
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  return `${diffDays}d ago`
}

export function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return null
  }

  return (
    <div className="space-y-3 mt-3 pt-3 border-t border-border/50">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-3 animate-slide-in">
          <Avatar className="h-8 w-8">
            <AvatarImage src={comment.userAvatar || "/placeholder.svg"} alt={comment.user} />
            <AvatarFallback className="bg-accent/50 text-accent-foreground text-xs">
              {comment.user.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm text-foreground">{comment.user}</span>
              <span className="text-xs text-muted-foreground">{formatTimestamp(comment.timestamp)}</span>
            </div>
            <p className="text-sm text-foreground/90 mt-0.5 wrap-break-word">{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
