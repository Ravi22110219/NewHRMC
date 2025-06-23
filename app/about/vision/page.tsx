import { LanguageProvider } from "@/contexts/language-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppIcon from "@/components/whatsapp-icon"
import VisionSection from "@/components/vision-section"

export default function VisionPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen page-transition">
        <Navbar />
        <main className="pt-20">
          <VisionSection />
        </main>
        <Footer />
        <WhatsAppIcon />
      </div>
    </LanguageProvider>
  )
}
