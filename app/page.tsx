import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import PricingSection from '@/components/PricingSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ConfettiBackground from '@/components/ui/confetti-background'

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: '#020818' }}>
      {/* Global confetti layer */}
      <ConfettiBackground />

      {/* Nav */}
      <Navbar />

      {/* Sections */}
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
