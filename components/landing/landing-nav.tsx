// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { SollLogo } from "@/components/ui/soll-logo"

// export function LandingNav() {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
//       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
//         <Link href="/" className="flex items-center gap-2">
//           <SollLogo className="h-8 w-8" />
//           <span className="font-semibold text-xl text-foreground">Soll</span>
//         </Link>

//         <div className="hidden md:flex items-center gap-8">
//           <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
//             Features
//           </Link>
//           <Link href="#communities" className="text-muted-foreground hover:text-foreground transition-colors">
//             Communities
//           </Link>
//           <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
//             How it Works
//           </Link>
//         </div>

//         <div className="flex items-center gap-3">
//           <Link href="/signup">
//             <Button variant="ghost" className="text-foreground">
//               Sign In
//             </Button>
//           </Link>
//           <Link href="/signup">
//             <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Connect Wallet</Button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SollLogo } from "@/components/ui/soll-logo"

export function LandingNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <SollLogo className="h-8 w-8" />
          <span className="font-semibold text-xl text-foreground">Soll</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#communities" className="text-muted-foreground hover:text-foreground transition-colors">
            Communities
          </Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/signin">
            <Button variant="ghost" className="text-foreground">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}