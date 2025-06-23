import { LanguageProvider } from "@/contexts/language-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppIcon from "@/components/whatsapp-icon"
import TeamSection from "@/components/team-section"

export default function TeamPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen page-transition">
        <Navbar />
        <main className="pt-20">
          <TeamSection />
        </main>
        <Footer />
        <WhatsAppIcon />
      </div>
    </LanguageProvider>
  )
}
