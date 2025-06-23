'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import styles from './navbar.module.css'
import logo from '.././public/heritage-logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en')
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img src={logo.src} alt="Heritage Readymix" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>
            {t('home')}
          </Link>
          <Link href="/projects" className={styles.navLink}>
            {t('projects')}
          </Link>
          <Link href="/gallery" className={styles.navLink}>
            {t('gallery')}
          </Link>
          <Link href="/contact" className={styles.navLink}>
            {t('contact')}
          </Link>

          <div
            className={styles.dropdown}
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <button className={styles.dropdownButton}>
              {t('aboutUs')} <ChevronDown className={styles.chevron} />
            </button>
            {isAboutOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/about/team" className={styles.dropdownItem}>
                  {t('ourTeam')}
                </Link>
                <Link href="/about/plant" className={styles.dropdownItem}>
                  {t('plant')}
                </Link>
                <Link href="/about/vision" className={styles.dropdownItem}>
                  {t('ourVision')}
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className={styles.rightSection}>
          <button onClick={toggleLanguage} className={styles.languageToggle}>
            <Globe size={20} />
            {language === 'en' ? 'हिं' : 'EN'}
          </button>

          <Link href="/contact" className={styles.orderButton}>
            {t('orderNow')}
          </Link>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={styles.mobileNav}>
          <Link
            href="/"
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            {t('home')}
          </Link>
          <Link
            href="/projects"
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            {t('projects')}
          </Link>
          <Link
            href="/gallery"
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            {t('gallery')}
          </Link>
          <Link
            href="/contact"
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            {t('contact')}
          </Link>
          <Link
            href="/about/team"
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            {t('ourTeam')}
          </Link>
          <Link
            href="/about/plant"
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            {t('plant')}
          </Link>
          <Link
            href="/about/vision"
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            {t('ourVision')}
          </Link>
        </div>
      )}
    </nav>
  )
}
