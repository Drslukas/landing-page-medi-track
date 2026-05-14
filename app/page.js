import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import DoctorsSection from '@/components/sections/DoctorsSection'
import UsersSection from '@/components/sections/UsersSection'
import SecuritySection from '@/components/sections/SecuritySection'
import DifferentialsSection from '@/components/sections/DifferentialsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <DoctorsSection />
      <UsersSection />
      <SecuritySection />
      <DifferentialsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
