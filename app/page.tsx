import Navbar from '@/components/navbar'
import LandingSection from '@/components/landing-section'
import AboutCompany from '@/components/about-company'
import WhyChooseUs from '@/components/why-choose-us'
import ProjectsPreview from '@/components/projects-preview'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'
import WhatsAppIcon from '@/components/whatsapp-icon'
import { LanguageProvider } from '@/contexts/language-context'
import logo from '../public/heritage-logo.png'

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen page-transition">
        <Navbar />
        <link rel="icon" href={logo.src} />
        <main>
          <LandingSection />
          <AboutCompany />
          <WhyChooseUs />
          <ProjectsPreview />
          <Testimonials />
        </main>
        <Footer />
        <WhatsAppIcon />
      </div>
    </LanguageProvider>
  )
}
