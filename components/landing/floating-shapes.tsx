"use client"

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large accent orb - top right */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />

      {/* Primary orb - bottom left */}
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      {/* Lime accent orb - center right */}
      <div
        className="absolute top-1/2 -right-20 w-72 h-72 rounded-full bg-accent-lime/15 blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      {/* Geometric shapes */}
      <div className="absolute top-32 left-20 w-8 h-8 bg-accent rounded-lg rotate-45 animate-float opacity-60" />
      <div className="absolute top-48 right-32 w-6 h-6 bg-primary/40 rounded-full animate-float-slow" />
      <div className="absolute bottom-48 left-40 w-10 h-10 bg-accent-lime/40 rounded-xl animate-float-delayed" />
      <div
        className="absolute top-1/3 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border-2 border-accent/30 rounded-xl rotate-12 animate-float-slow" />
    </div>
  )
}
