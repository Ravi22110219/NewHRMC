import { LanguageProvider } from "@/contexts/language-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppIcon from "@/components/whatsapp-icon"
import PlantSection from "@/components/plant-section"

export default function PlantPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen page-transition">
        <Navbar />
        <main className="pt-20">
          <PlantSection />
        </main>
        <Footer />
        <WhatsAppIcon />
      </div>
    </LanguageProvider>
  )
}
