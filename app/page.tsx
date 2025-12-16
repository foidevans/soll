// import Link from "next/link"

// export default function RootPage() {
//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//       {/* Navigation */}
//       <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
//         <Link href="/" className="text-2xl font-bold text-foreground">
//           Soll
//         </Link>
//         <div className="flex items-center gap-4">
//           <Link href="/home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
//             Explore
//           </Link>
//           <Link
//             href="/signup"
//             className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
//           >
//             Get Started
//           </Link>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
//         <div className="max-w-2xl mx-auto space-y-8">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 bg-accent/30 text-accent-foreground px-4 py-2 rounded-full text-sm">
//             <span className="w-2 h-2 bg-primary rounded-full" />
//             Powered by Scroll
//           </div>

//           {/* Heading */}
//           <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
//             Social, Owned by You.
//           </h1>

//           {/* Subheading */}
//           <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto text-pretty">
//             A decentralized social network where you own your identity, content, and communities. Built on Scroll for
//             speed and security.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
//             <Link
//               href="/signup"
//               className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
//             >
//               Get Started
//             </Link>
//             <Link
//               href="/home"
//               className="bg-card text-card-foreground border border-border px-8 py-3 rounded-full text-lg font-medium hover:bg-muted transition-colors w-full sm:w-auto"
//             >
//               Go to Home
//             </Link>
//           </div>

//           {/* Stats */}
//           <div className="flex items-center justify-center gap-8 pt-8 text-muted-foreground">
//             <div className="text-center">
//               <p className="text-2xl font-bold text-foreground">100%</p>
//               <p className="text-sm">User Owned</p>
//             </div>
//             <div className="w-px h-10 bg-border" />
//             <div className="text-center">
//               <p className="text-2xl font-bold text-foreground">0</p>
//               <p className="text-sm">Central Servers</p>
//             </div>
//             <div className="w-px h-10 bg-border" />
//             <div className="text-center">
//               <p className="text-2xl font-bold text-foreground">Web3</p>
//               <p className="text-sm">Native</p>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="px-6 py-6 border-t border-border text-center text-sm text-muted-foreground">
//         <p>Built with love on Scroll. Your data, your rules.</p>
//       </footer>
//     </div>
//   )
// }

import Link from "next/link"

export default function RootPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
        <Link href="/" className="text-2xl font-bold text-foreground">
          Soll
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Explore
          </Link>
          <Link
            href="/signin"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/30 text-accent-foreground px-4 py-2 rounded-full text-sm">
            <span className="w-2 h-2 bg-primary rounded-full" />
            Powered by Scroll
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
            Social, Owned by You.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto text-pretty">
            A decentralized social network where you own your identity, content, and communities. Built on Scroll for
            speed and security.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/signup"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Get Started
            </Link>
            <Link
              href="/signin"
              className="bg-card text-card-foreground border border-border px-8 py-3 rounded-full text-lg font-medium hover:bg-muted transition-colors w-full sm:w-auto"
            >
              Sign In
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 pt-8 text-muted-foreground">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">100%</p>
              <p className="text-sm">User Owned</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">0</p>
              <p className="text-sm">Central Servers</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">Web3</p>
              <p className="text-sm">Native</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-border text-center text-sm text-muted-foreground">
        <p>Built with love on Scroll. Your data, your rules.</p>
      </footer>
    </div>
  )
}