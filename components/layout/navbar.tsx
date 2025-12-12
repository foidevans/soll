"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, PlusSquare, Users, User, Compass } from "lucide-react"
import { cn } from "@/lib/utils"
import { SollLogo } from "@/components/ui/soll-logo"

const navItems = [
  { href: "/home", icon: Home, label: "Home" },
  { href: "/create", icon: PlusSquare, label: "Create" },
  { href: "/communities", icon: Compass, label: "Communities" },
  { href: "/network", icon: Users, label: "Network" },
  { href: "/profile", icon: User, label: "Profile" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-20 flex-col items-center py-6 bg-card border-r border-border">
        <Link href="/" className="mb-8">
          <SollLogo className="h-8 w-8" />
        </Link>
        <div className="flex flex-col gap-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                )}
                aria-label={item.label}
              >
                <Icon className="h-5 w-5" />
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-card border-t border-border flex items-center justify-around px-4 z-50">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
              aria-label={item.label}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </>
  )
}
