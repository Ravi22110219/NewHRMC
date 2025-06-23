"use client"

import { useLanguage } from "@/contexts/language-context"
import styles from "./vision-section.module.css"

export default function VisionSection() {
  const { t } = useLanguage()

  return (
    <section className={styles.visionSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t("ourVision")}</h1>
          <p className={styles.subtitle}>Building the future with sustainable and innovative concrete solutions</p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Heritage Readymix Vision"
              className={styles.visionImage}
            />
          </div>

          <div className={styles.textSection}>
            <div className={styles.visionCard}>
              <h2 className={styles.cardTitle}>Our Vision</h2>
              <p className={styles.visionText}>
                To be the leading provider of premium ready-mix concrete solutions in Rajasthan, setting industry
                standards for quality, innovation, and customer satisfaction. We envision a future where our sustainable
                concrete solutions contribute to building stronger, more resilient communities across the region.
              </p>
            </div>

            <div className={styles.missionCard}>
              <h2 className={styles.cardTitle}>Our Mission</h2>
              <p className={styles.missionText}>
                Heritage Readymix is committed to delivering exceptional concrete solutions through cutting-edge
                technology, rigorous quality control, and unparalleled customer service. We strive to build lasting
                relationships with our clients while contributing to the development of sustainable infrastructure.
              </p>
            </div>

            <div className={styles.valuesCard}>
              <h2 className={styles.cardTitle}>Our Values</h2>
              <div className={styles.valuesList}>
                <div className={styles.value}>
                  <h3>Quality Excellence</h3>
                  <p>Uncompromising commitment to delivering the highest quality concrete products</p>
                </div>
                <div className={styles.value}>
                  <h3>Innovation</h3>
                  <p>Embracing new technologies and methods to improve our products and services</p>
                </div>
                <div className={styles.value}>
                  <h3>Sustainability</h3>
                  <p>Environmental responsibility in all our operations and product development</p>
                </div>
                <div className={styles.value}>
                  <h3>Customer Focus</h3>
                  <p>Building long-term partnerships through exceptional service and reliability</p>
                </div>
                <div className={styles.value}>
                  <h3>Integrity</h3>
                  <p>Honest, transparent, and ethical business practices in all our dealings</p>
                </div>
                <div className={styles.value}>
                  <h3>Team Excellence</h3>
                  <p>Fostering a culture of collaboration, growth, and professional development</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.futureGoals}>
          <h2 className={styles.goalsTitle}>Future Goals</h2>
          <div className={styles.goalsGrid}>
            <div className={styles.goal}>
              <div className={styles.goalIcon}>🌱</div>
              <h3>Sustainable Growth</h3>
              <p>Expand our operations while maintaining environmental responsibility and sustainable practices</p>
            </div>
            <div className={styles.goal}>
              <div className={styles.goalIcon}>🔬</div>
              <h3>Innovation Leadership</h3>
              <p>Lead the industry in adopting new technologies and developing innovative concrete solutions</p>
            </div>
            <div className={styles.goal}>
              <div className={styles.goalIcon}>🤝</div>
              <h3>Community Impact</h3>
              <p>Contribute to the development of stronger communities through quality infrastructure projects</p>
            </div>
            <div className={styles.goal}>
              <div className={styles.goalIcon}>🏆</div>
              <h3>Market Leadership</h3>
              <p>Become the most trusted and preferred concrete supplier across Rajasthan and beyond</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
