"use client"

import { useState, useEffect } from "react"
import { User, Wallet, Sparkles, Users, MessageSquare, Check } from "lucide-react"

const steps = [
  { icon: User, title: "Choose Username", description: "Pick your unique identity" },
  { icon: Wallet, title: "Connect Wallet", description: "Link your Web3 wallet" },
  { icon: Sparkles, title: "Pick Interests", description: "Customize your feed" },
  { icon: Users, title: "Join Communities", description: "Find your tribe" },
  { icon: MessageSquare, title: "Start Posting", description: "Share with the world" },
]

export function OnboardingShowcase() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="how-it-works" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Get Started in Minutes</h2>
          <p className="text-lg text-muted-foreground text-pretty">Five simple steps to own your social presence</p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border md:hidden" />
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border" />

          <div className="flex flex-col md:flex-row gap-6 md:gap-4">
            {steps.map((step, index) => {
              const isActive = index === activeStep
              const isComplete = index < activeStep

              return (
                <div
                  key={step.title}
                  className={`flex-1 relative transition-all duration-500 ${isActive ? "scale-105" : ""}`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step indicator */}
                  <div
                    className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto cursor-pointer
                    transition-all duration-500
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110"
                        : isComplete
                          ? "bg-accent text-accent-foreground"
                          : "bg-card border border-border text-muted-foreground"
                    }
                  `}
                  >
                    {isComplete ? <Check className="w-7 h-7" /> : <step.icon className="w-7 h-7" />}
                  </div>

                  <div
                    className={`text-center transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-60"}`}
                  >
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
