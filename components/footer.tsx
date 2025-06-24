'use client'

import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import styles from './footer.module.css'
import logo from '.././public/heritage-logo.png'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Company Info */}
          <div className={styles.section}>
            <div className={styles.logo}>
              <img src={logo.src} alt="Heritage Readymix" />
            </div>
            <h3 className={styles.companyName}>{t('companyName')}</h3>
            <div className={styles.address}>
              <MapPin size={16} />
              <span>
                Near Bombay Hospital, Goner Road, Jagatpura, Jaipur, Rajasthan
              </span>
            </div>
            <div className={styles.contact}>
              <Phone size={16} />
              <span>+91 6375925113 </span>
              {','}
              <span>+91 7568746566 </span>
            </div>
            <div className={styles.contact}>
              <Mail size={16} />
              <span>sales@heritagereadymix.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>{t('quickLinks')}</h4>
            <div className={styles.links}>
              <Link href="/" className={styles.link}>
                {t('home')}
              </Link>
              <Link href="/projects" className={styles.link}>
                {t('projects')}
              </Link>
              <Link href="/gallery" className={styles.link}>
                {t('gallery')}
              </Link>
              <Link href="/contact" className={styles.link}>
                {t('contact')}
              </Link>
              <Link href="/about/team" className={styles.link}>
                {t('ourTeam')}
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>{t('followUs')}</h4>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <Facebook size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Instagram size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Twitter size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>{t('location')}</h4>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1260.4038730932746!2d75.89058097983202!3d26.78332327688653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc900343eec23%3A0x59b8864b60d33a0!2sHeritage%20Ready%20Mix%20Jaipur!5e1!3m2!1sen!2sin!4v1750600131155!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.terms}>
            <Link href="/terms" className={styles.termsLink}>
              {t('termsConditions')}
            </Link>
          </div>
          <div className={styles.copyright}>
            <Link
              href="https://ravi22110219.github.io/BidsukTechnoCreation/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.termsLink}
            >
              <span>{t('copyright')}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
