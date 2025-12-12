"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FloatingShapes } from "./floating-shapes"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <FloatingShapes />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/30 text-foreground text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Now in Public Beta
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight mb-6 text-balance">
          Welcome to <span className="text-primary">Soll</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          A decentralized social network where you own your identity, content, and communities. Take back control of
          your digital life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Connect Wallet
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg rounded-full border-foreground/20 text-foreground hover:bg-foreground/5 bg-transparent"
          >
            Build on Soll
          </Button>
        </div>

        {/* Isometric blocks decoration */}
        <div className="mt-20 relative">
          <div className="flex justify-center gap-4">
            <div className="w-20 h-20 bg-accent rounded-2xl animate-float shadow-lg" style={{ animationDelay: "0s" }} />
            <div
              className="w-16 h-16 bg-primary/20 rounded-2xl animate-float-slow shadow-lg"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="w-24 h-24 bg-accent-lime/50 rounded-2xl animate-float-delayed shadow-lg"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="w-14 h-14 bg-primary/30 rounded-2xl animate-float shadow-lg"
              style={{ animationDelay: "1.5s" }}
            />
            <div
              className="w-18 h-18 bg-accent/60 rounded-2xl animate-float-slow shadow-lg"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
