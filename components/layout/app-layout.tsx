"use client"

import type { ReactNode } from "react"
import { Navbar } from "./navbar"

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-20 md:pb-0 md:pl-20">{children}</main>
    </div>
  )
}
