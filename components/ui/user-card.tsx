"use client"

import { Loader2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import type { User } from "@/lib/store"

interface UserCardProps {
  user: User
  onConnect?: () => void
  isConnected?: boolean
  isLoading?: boolean
}

export function UserCard({ user, onConnect, isConnected, isLoading }: UserCardProps) {
  return (
    <div className="bg-card rounded-2xl border border-border p-4 hover:border-primary/20 transition-all duration-200 hover:shadow-lg hover:shadow-primary/5 group">
      <div className="flex items-center gap-4">
        <Avatar className="h-14 w-14">
          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.username} />
          <AvatarFallback className="bg-accent text-accent-foreground">
            {user.username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
            {user.username}
          </p>
          <p className="text-sm text-muted-foreground truncate">{user.bio}</p>
        </div>
        <Button
          variant={isConnected ? "secondary" : "default"}
          size="sm"
          onClick={onConnect}
          disabled={isLoading}
          className={`rounded-full min-w-[100px] ${isConnected ? "text-muted-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin mr-1" />
              {isConnected ? "Removing..." : "Adding..."}
            </>
          ) : isConnected ? (
            "Connected"
          ) : (
            "Connect"
          )}
        </Button>
      </div>
    </div>
  )
}
