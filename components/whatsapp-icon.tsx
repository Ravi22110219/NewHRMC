'use client'

import { MessageCircle } from 'lucide-react'
import styles from './whatsapp-icon.module.css'

export default function WhatsAppIcon() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+916375925113'
    const message = 'Hello! I am interested in your concrete services.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      className={styles.whatsappButton}
      onClick={handleWhatsAppClick}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}
