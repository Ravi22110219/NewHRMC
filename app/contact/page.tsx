import { LanguageProvider } from "@/contexts/language-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppIcon from "@/components/whatsapp-icon"
import ContactSection from "@/components/contact-section"

export default function ContactPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen page-transition">
        <Navbar />
        <main className="pt-20">
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppIcon />
      </div>
    </LanguageProvider>
  )
}
