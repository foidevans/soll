"use client"

import { HeroSection } from "./hero-section"
import { FeaturesSection } from "./features-section"
import { CommunitiesSection } from "./communities-section"
import { OnboardingShowcase } from "./onboarding-showcase"
import { LandingFooter } from "./landing-footer"
import { LandingNav } from "./landing-nav"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <LandingNav />
      <HeroSection />
      <FeaturesSection />
      <CommunitiesSection />
      <OnboardingShowcase />
      <LandingFooter />
    </div>
  )
}
