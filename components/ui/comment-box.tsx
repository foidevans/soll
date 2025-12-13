// "use client"

// import { useState } from "react"
// import { Send, Loader2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
// import { useCommentsStore } from "@/lib/comments-store"
// import { useAppStore } from "@/lib/store"
// import { useWallet } from "@/hooks/use-wallet"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
// import { ConnectWalletButton } from "@/components/ui/connect-wallet-button"

// interface CommentBoxProps {
//   postId: string
//   onCommentAdded?: () => void
// }

// export function CommentBox({ postId, onCommentAdded }: CommentBoxProps) {
//   const [text, setText] = useState("")
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [showConnectDialog, setShowConnectDialog] = useState(false)
//   const { addComment } = useCommentsStore()
//   const { currentUser } = useAppStore()
//   const { isConnected } = useWallet()

//   const handleSubmit = async () => {
//     if (!text.trim()) return

//     if (!isConnected || !currentUser) {
//       setShowConnectDialog(true)
//       return
//     }

//     setIsSubmitting(true)

//     setTimeout(() => {
//       addComment({
//         postId,
//         userId: currentUser.id,
//         username: currentUser.username,
//         userAvatar: currentUser.avatar,
//         text: text.trim(),
//       })

//       setText("")
//       setIsSubmitting(false)
//       onCommentAdded?.()
//     }, 300)
//   }

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
//       e.preventDefault()
//       handleSubmit()
//     }
//   }

//   return (
//     <>
//       <div className="flex gap-3 mt-4 pt-4 border-t border-border">
//         <Textarea
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           onKeyDown={handleKeyPress}
//           placeholder="Add a comment..."
//           className="min-h-[80px] bg-background/50 border-border text-foreground placeholder:text-muted-foreground resize-none rounded-xl focus:border-primary/40"
//         />
//         <Button
//           onClick={handleSubmit}
//           disabled={!text.trim() || isSubmitting}
//           size="icon"
//           className="h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shrink-0 self-end"
//         >
//           {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
//         </Button>
//       </div>

//       <Dialog open={showConnectDialog} onOpenChange={setShowConnectDialog}>
//         <DialogContent className="bg-card border-border rounded-3xl">
//           <DialogHeader>
//             <DialogTitle className="text-foreground text-xl">Connect Wallet</DialogTitle>
//             <DialogDescription className="text-muted-foreground">
//               You need to connect your wallet to add comments
//             </DialogDescription>
//           </DialogHeader>
//           <div className="flex justify-center py-4">
//             <ConnectWalletButton />
//           </div>
//         </DialogContent>
//       </Dialog>
//     </>
//   )
// }




"use client"

import type React from "react"
import { useState } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface CommentBoxProps {
  onSubmit: (text: string) => void
  isSubmitting?: boolean
  placeholder?: string
}

export function CommentBox({ onSubmit, isSubmitting = false, placeholder = "Add a comment..." }: CommentBoxProps) {
  const [text, setText] = useState("")

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text.trim())
      setText("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="flex gap-2 items-end">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="min-h-[60px] max-h-[120px] resize-none bg-secondary/50 border-border rounded-xl text-foreground placeholder:text-muted-foreground"
        disabled={isSubmitting}
      />
      <Button
        onClick={handleSubmit}
        disabled={!text.trim() || isSubmitting}
        size="icon"
        className="h-10 w-10 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
      </Button>
    </div>
  )
}