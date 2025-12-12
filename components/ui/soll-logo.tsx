"use client"

import { cn } from "@/lib/utils"

interface SollLogoProps {
  className?: string
}

export function SollLogo({ className }: SollLogoProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={cn("text-primary", className)} xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="20" cy="20" r="8" fill="currentColor" />
      <path
        d="M20 2C20 2 28 10 28 20C28 30 20 38 20 38"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 2C20 2 12 10 12 20C12 30 20 38 20 38"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
