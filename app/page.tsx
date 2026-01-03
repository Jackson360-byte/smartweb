import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"
import { ProblemSolution } from "@/components/problem-solution"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { OfferSection } from "@/components/offer-section"
import { ValueProposition } from "@/components/value-proposition"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <ProblemSolution />
      <FeaturesSection />
      <OfferSection />
      <HowItWorks />
      <ValueProposition />
      <FinalCta />
      <Footer />
    </main>
  )
}
