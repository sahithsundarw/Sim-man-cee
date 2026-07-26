import Hero from "@/components/landing/Hero"
import TickerStrip from "@/components/landing/TickerStrip"
import CategoryStrip from "@/components/landing/CategoryStrip"
import FoundersSection from "@/components/landing/FoundersSection"
import AboutSection from "@/components/landing/AboutSection"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <TickerStrip />
      <CategoryStrip />
      <AboutSection />
      <FoundersSection />
    </>
  )
}
