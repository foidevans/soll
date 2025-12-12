"use client"

import Link from "next/link"
import { SollLogo } from "@/components/ui/soll-logo"

export function LandingFooter() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <SollLogo className="h-8 w-8" />
            <span className="font-semibold text-xl text-foreground">Soll</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Discord
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Twitter
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">Social, Owned by You.</p>
        </div>
      </div>
    </footer>
  )
}
