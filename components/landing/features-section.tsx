"use client"

import { Fingerprint, Database, Share2, Users } from "lucide-react"

const features = [
  {
    icon: Fingerprint,
    title: "Own Your Identity",
    description: "Your wallet is your identity. No emails, no passwords, just pure decentralized ownership.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Database,
    title: "Decentralized Storage",
    description: "All your posts and media are stored on IPFS. Your content, your rules, forever.",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: Share2,
    title: "On-chain Social Graph",
    description: "Your connections live on the blockchain. Take your network anywhere you go.",
    color: "bg-accent-lime text-accent-foreground",
  },
  {
    icon: Users,
    title: "Community Control",
    description: "Create and govern communities with transparent, token-based voting systems.",
    color: "bg-primary/20 text-primary",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Built for the Future</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Soll combines the best of Web3 with a beautiful social experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
