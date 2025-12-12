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
