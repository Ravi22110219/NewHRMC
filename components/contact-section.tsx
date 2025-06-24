'use client'

import type React from 'react'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import styles from './contact-section.module.css'

export default function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t('contactUs')}</h1>
          <p className={styles.subtitle}>
            Get in touch with us for all your concrete needs. We're here to
            help!
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.iconContainer}>
                <Phone className={styles.icon} />
              </div>
              <div className={styles.infoContent}>
                <h3>{t('contactNumber')}</h3>
                <p>+91 80033 49997 </p>
                <p>+91 98288 28582 </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconContainer}>
                <Mail className={styles.icon} />
              </div>
              <div className={styles.infoContent}>
                <h3>{t('email')}</h3>

                <p>sales@heritagereadymix.com</p>
                <p>readymixheritage@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconContainer}>
                <MapPin className={styles.icon} />
              </div>
              <div className={styles.infoContent}>
                <h3>Address</h3>
                <p>Near Bombay Hospital, Goner Road, Jagatpura</p>
                <p>Jaipur, Rajasthan 302001</p>
                <p>India</p>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  {t('name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  {t('email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                  placeholder="Enter your email address"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  {t('message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={styles.textarea}
                  placeholder="Tell us about your concrete requirements..."
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                <Send size={20} />
                {t('sendMessage')}
              </button>
            </form>
          </div>
        </div>

        <div className={styles.mapSection}>
          <h2 className={styles.mapTitle}>Find Us Here</h2>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1260.4038730932746!2d75.89058097983202!3d26.78332327688653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc900343eec23%3A0x59b8864b60d33a0!2sHeritage%20Ready%20Mix%20Jaipur!5e1!3m2!1sen!2sin!4v1750600131155!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
