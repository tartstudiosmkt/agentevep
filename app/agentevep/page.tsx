import Image from "next/image"
import { HeroSection } from "@/components/sections/hero-section"
import { VSLSection } from "@/components/sections/vsl-section"
import { TruthSection } from "@/components/sections/truth-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { OfferSection } from "@/components/sections/offer-section"
import { FAQSection } from "@/components/sections/faq-section"
import { BioSection } from "@/components/sections/bio-section"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <VSLSection />
      <TruthSection />
      <SolutionSection />
      <OfferSection />
      <FAQSection />
      <BioSection />

      <WhatsAppFloat />
    </main>
  )
}
