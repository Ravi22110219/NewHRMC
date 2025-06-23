'use client'

import { useState } from 'react'
import { X, Download, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import styles from './gallery-section.module.css'
import Hrp1 from '../public/hrp1.jpg'
import Hrp2 from '../public/hrp2.jpg'
import Hrp3 from '../public/hrp3.jpg'
import Hrp4 from '../public/hrp4.jpg'
import Hrp5 from '../public/hrp5.jpg'
import Hrp6 from '../public/hrp6.jpg'
import Hrp7 from '../public/hrp7.jpg'
import Hrp8 from '../public/hrp8.jpg'
import Hrp9 from '../public/hrp9.jpg'
import Hrp10 from '../public/hrp10.jpg'
import Hrp11 from '../public/hrp11.jpg'
import Hrp12 from '../public/hrp12.jpg'
import Hrp13 from '../public/hrp13.jpg'
import Hrp14 from '../public/hrp14.jpg'
import Hrp15 from '../public/hrp15.jpg'
import Shrp1 from '../public/shrp1.jpg'
import Shrp2 from '../public/shrp2.jpg'
import Shrp3 from '../public/shrp3.jpg'

const galleryData = {
  sitePhotos: [
    {
      id: 1,
      src: Hrp12.src,
      alt: 'Construction Site 1',
    },
    {
      id: 2,
      src: Shrp2.src,
      alt: 'Construction Site 2',
    },
    {
      id: 3,
      src: Hrp11.src,
      alt: 'Construction Site 3',
    },
    {
      id: 4,
      src: Hrp10.src,
      alt: 'Construction Site 4',
    },
    {
      id: 5,
      src: Hrp4.src,
      alt: 'Construction Site 5',
    },
    {
      id: 6,
      src: Hrp5.src,
      alt: 'Construction Site 6',
    },
  ],
  plantPhotos: [
    { id: 7, src: Hrp1.src, alt: 'Plant Equipment 1' },
    {
      id: 8,
      src: Hrp7.src,
      alt: 'Plant Equipment 2',
    },
    {
      id: 9,
      src: Hrp6.src,
      alt: 'Plant Equipment 3',
    },
    {
      id: 10,
      src: Hrp4.src,
      alt: 'Plant Equipment 4',
    },
  ],
  otherPhotos: [
    {
      id: 11,
      src: Hrp12.src,
      alt: 'Team Photo 1',
    },
    {
      id: 12,
      src: Hrp14,
      alt: 'Team Photo 2',
    },
    {
      id: 13,
      src: Hrp15.src,
      alt: 'Awards & Certificates',
    },
    {
      id: 14,
      src: Hrp11.src,
      alt: 'Company Events',
    },
  ],
}

export default function GallerySection() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('sitePhotos')
  const [lightboxImage, setLightboxImage] = useState<any>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const getCurrentGallery = () => {
    return galleryData[activeTab as keyof typeof galleryData]
  }

  const openLightbox = (image: any, index: number) => {
    setLightboxImage(image)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const nextImage = () => {
    const gallery = getCurrentGallery()
    const nextIndex = (lightboxIndex + 1) % gallery.length
    setLightboxIndex(nextIndex)
    setLightboxImage(gallery[nextIndex])
  }

  const prevImage = () => {
    const gallery = getCurrentGallery()
    const prevIndex = (lightboxIndex - 1 + gallery.length) % gallery.length
    setLightboxIndex(prevIndex)
    setLightboxImage(gallery[prevIndex])
  }

  const downloadImage = () => {
    if (lightboxImage) {
      const link = document.createElement('a')
      link.href = lightboxImage.src
      link.download = lightboxImage.alt
      link.click()
    }
  }

  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Gallery</h1>
          <p className={styles.subtitle}>
            Explore our work through images - from construction sites to our
            modern plant facilities
          </p>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${
              activeTab === 'sitePhotos' ? styles.activeTab : ''
            }`}
            onClick={() => setActiveTab('sitePhotos')}
          >
            {t('sitePhotos')}
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === 'plantPhotos' ? styles.activeTab : ''
            }`}
            onClick={() => setActiveTab('plantPhotos')}
          >
            {t('plantPhotos')}
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === 'otherPhotos' ? styles.activeTab : ''
            }`}
            onClick={() => setActiveTab('otherPhotos')}
          >
            {t('otherPhotos')}
          </button>
        </div>

        <div className={styles.gallery}>
          {getCurrentGallery().map((image, index) => (
            <div
              key={image.id}
              className={styles.imageCard}
              onClick={() => openLightbox(image, index)}
            >
              <img
                src={
                  typeof image.src === 'string'
                    ? image.src
                    : image.src.src || '/placeholder.svg'
                }
                alt={image.alt}
                className={styles.image}
              />
              <div className={styles.imageOverlay}>
                <span>Click to view</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div className={styles.lightbox} onClick={closeLightbox}>
            <div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeLightbox}>
                <X size={24} />
              </button>

              <button className={styles.navButtonPrev} onClick={prevImage}>
                <ChevronLeft size={24} />
              </button>

              <img
                src={lightboxImage.src || '/placeholder.svg'}
                alt={lightboxImage.alt}
                className={styles.lightboxImage}
              />

              <button className={styles.navButtonNext} onClick={nextImage}>
                <ChevronRight size={24} />
              </button>

              <button className={styles.downloadButton} onClick={downloadImage}>
                <Download size={20} />
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
