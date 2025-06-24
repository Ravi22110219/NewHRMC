'use client'

import type React from 'react'
import { createContext, useContext, useState } from 'react'

type Language = 'en' | 'hi'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navbar
    home: 'Home',
    projects: 'Projects',
    gallery: 'Gallery',
    contact: 'Contact',
    aboutUs: 'About Us',
    ourTeam: 'Our Team',
    plant: 'Plant',
    ourVision: 'Our Vision',
    orderNow: 'Order Now',

    // Landing Section
    landingHeadline: 'Premium ReadyMix Concrete Solutions',
    landingDescription:
      'Heritage Readymix Jaipur - Your trusted partner for high-quality concrete solutions across Rajasthan. We deliver excellence in every mix.',

    // About Company
    aboutCompanyTitle: 'About Heritage Readymix',
    aboutCompanyText:
      'With years of experience in the concrete industry, Heritage Readymix Jaipur has established itself as a leading supplier of premium ready-mix concrete solutions. We are committed to delivering quality, reliability, and excellence in every project.',

    // Why Choose Us
    whyChooseUsTitle: 'Why Choose Us',
    bestConcrete: 'Best Concrete',
    bestConcreteDesc:
      'Premium quality concrete mix designed for durability and strength',
    highQualityCement: 'High-Quality Cement',
    highQualityCementDesc:
      'Using only the finest cement brands for superior construction',
    timelyDelivery: 'Timely Delivery',
    timelyDeliveryDesc:
      'Reliable delivery schedule to keep your projects on track',
    expertTeam: 'Expert Team',
    expertTeamDesc: 'Experienced professionals ensuring quality at every step',

    // Projects
    projectsTitle: 'Our Projects',
    viewAllProjects: 'View All Projects',

    // Testimonials
    testimonialsTitle: 'What Our Clients Say',

    // Footer
    companyName: 'Heritage Readymix Jaipur',
    address: 'Jaipur, Rajasthan, India',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    location: 'Our Location',
    copyright: 'Copyright © 2025 Bidsuk Techno Creation. All rights reserved.',
    termsConditions: 'Terms & Conditions',

    // Contact
    contactUs: 'Contact Us',
    contactNumber: 'Contact Number',
    email: 'Email',
    name: 'Name',
    message: 'Message',
    sendMessage: 'Send Message',

    // Gallery
    sitePhotos: 'Site Photos',
    plantPhotos: 'Plant Photos',
    otherPhotos: 'Other Photos',
  },
  hi: {
    // Navbar
    home: 'होम',
    projects: 'प्रोजेक्ट्स',
    gallery: 'गैलरी',
    contact: 'संपर्क',
    aboutUs: 'हमारे बारे में',
    ourTeam: 'हमारी टीम',
    plant: 'प्लांट',
    ourVision: 'हमारा विजन',
    orderNow: 'अभी ऑर्डर करें',

    // Landing Section
    landingHeadline: 'प्रीमियम रेडी मिक्स कंक्रीट समाधान',
    landingDescription:
      'हेरिटेज रेडीमिक्स जयपुर - राजस्थान भर में उच्च गुणवत्ता वाले कंक्रीट समाधान के लिए आपका विश्वसनीय साझीदार। हम हर मिश्रण में उत्कृष्टता प्रदान करते हैं।',

    // About Company
    aboutCompanyTitle: 'हेरिटेज रेडीमिक्स के बारे में',
    aboutCompanyText:
      'कंक्रीट उद्योग में वर्षों के अनुभव के साथ, हेरिटेज रेडीमिक्स जयपुर ने खुद को प्रीमियम रेडी-मिक्स कंक्रीट समाधान के अग्रणी आपूर्तिकर्ता के रूप में स्थापित किया है। हम हर परियोजना में गुणवत्ता, विश्वसनीयता और उत्कृष्टता प्रदान करने के लिए प्रतिबद्ध हैं।',

    // Why Choose Us
    whyChooseUsTitle: 'हमें क्यों चुनें',
    bestConcrete: 'सर्वोत्तम कंक्रीट',
    bestConcreteDesc:
      'स्थायित्व और मजबूती के लिए डिज़ाइन किया गया प्रीमियम गुणवत्ता कंक्रीट मिश्रण',
    highQualityCement: 'उच्च गुणवत्ता सीमेंट',
    highQualityCementDesc:
      'बेहतर निर्माण के लिए केवल बेहतरीन सीमेंट ब्रांड का उपयोग',
    timelyDelivery: 'समय पर डिलीवरी',
    timelyDeliveryDesc:
      'आपकी परियोजनाओं को ट्रैक पर रखने के लिए विश्वसनीय डिलीवरी शेड्यूल',
    expertTeam: 'विशेषज्ञ टीम',
    expertTeamDesc: 'हर कदम पर गुणवत्ता सुनिश्चित करने वाले अनुभवी पेशेवर',

    // Projects
    projectsTitle: 'हमारी परियोजनाएं',
    viewAllProjects: 'सभी परियोजनाएं देखें',

    // Testimonials
    testimonialsTitle: 'हमारे ग्राहक क्या कहते हैं',

    // Footer
    companyName: 'हेरिटेज रेडीमिक्स जयपुर',
    address: 'जयपुर, राजस्थान, भारत',
    quickLinks: 'त्वरित लिंक',
    followUs: 'हमें फॉलो करें',
    location: 'हमारा स्थान',
    copyright: 'कॉपीराइट © 2025 हेरिटेज रेडीमिक्स जयपुर। सभी अधिकार सुरक्षित।',
    termsConditions: 'नियम और शर्तें',

    // Contact
    contactUs: 'संपर्क करें',
    contactNumber: 'संपर्क नंबर',
    email: 'ईमेल',
    name: 'नाम',
    message: 'संदेश',
    sendMessage: 'संदेश भेजें',

    // Gallery
    sitePhotos: 'साइट फोटो',
    plantPhotos: 'प्लांट फोटो',
    otherPhotos: 'अन्य फोटो',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)['en']] || key
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
