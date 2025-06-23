import { LanguageProvider } from "@/contexts/language-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppIcon from "@/components/whatsapp-icon"
import GallerySection from "@/components/gallery-section"

export default function GalleryPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen page-transition">
        <Navbar />
        <main className="pt-20">
          <GallerySection />
        </main>
        <Footer />
        <WhatsAppIcon />
      </div>
    </LanguageProvider>
  )
}
