"use client"

import { useLanguage } from "@/contexts/language-context"
import styles from "./plant-section.module.css"

const plantImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Main Plant Facility",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Concrete Mixing Equipment",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Quality Control Laboratory",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Storage Silos",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Delivery Fleet",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Plant Operations",
  },
]

export default function PlantSection() {
  const { t } = useLanguage()

  return (
    <section className={styles.plantSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t("plant")}</h1>
          <p className={styles.subtitle}>State-of-the-art facilities ensuring premium quality concrete production</p>
        </div>

        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.sectionTitle}>Our Modern Plant Facility</h2>
            <p className={styles.description}>
              Heritage Readymix operates a state-of-the-art concrete production facility in Jaipur, equipped with the
              latest technology and machinery. Our plant is designed to ensure consistent quality, efficient production,
              and environmental sustainability.
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>Advanced Mixing Technology</h3>
                <p>
                  Our computerized batching plant ensures precise mixing ratios for consistent quality in every batch.
                </p>
              </div>

              <div className={styles.feature}>
                <h3>Quality Control Laboratory</h3>
                <p>
                  On-site testing facility with modern equipment to monitor and maintain the highest quality standards.
                </p>
              </div>

              <div className={styles.feature}>
                <h3>Environmental Compliance</h3>
                <p>Eco-friendly operations with dust control systems and water recycling facilities.</p>
              </div>

              <div className={styles.feature}>
                <h3>Large Storage Capacity</h3>
                <p>Multiple silos for different cement types and aggregates ensuring uninterrupted production.</p>
              </div>
            </div>
          </div>

          <div className={styles.statsSection}>
            <div className={styles.stat}>
              <h3>50+</h3>
              <p>Cubic Meters/Hour Production Capacity</p>
            </div>
            <div className={styles.stat}>
              <h3>24/7</h3>
              <p>Plant Operations</p>
            </div>
            <div className={styles.stat}>
              <h3>15+</h3>
              <p>Delivery Vehicles</p>
            </div>
            <div className={styles.stat}>
              <h3>100%</h3>
              <p>Quality Assured</p>
            </div>
          </div>
        </div>

        <div className={styles.imageGallery}>
          <h2 className={styles.galleryTitle}>Plant Gallery</h2>
          <div className={styles.imagesGrid}>
            {plantImages.map((image) => (
              <div key={image.id} className={styles.imageCard}>
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className={styles.plantImage} />
                <div className={styles.imageOverlay}>
                  <span>{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
