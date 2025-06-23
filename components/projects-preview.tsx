"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import styles from "./projects-preview.module.css"
import Link from "next/link"

const projects = [
  {
    id: 1,
    name: "Residential Complex A",
    location: "Malviya Nagar, Jaipur",
    date: "2024-01-15",
    area: "5000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    name: "Commercial Plaza B",
    location: "C-Scheme, Jaipur",
    date: "2024-02-20",
    area: "8000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    name: "Highway Bridge Project",
    location: "Jaipur-Delhi Highway",
    date: "2024-03-10",
    area: "12000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    name: "Industrial Warehouse",
    location: "Sitapura, Jaipur",
    date: "2024-04-05",
    area: "15000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ProjectsPreview() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t("projectsTitle")}</h2>
          <Link href="/projects" className={styles.viewAllButton}>
            {t("viewAllProjects")}
          </Link>
        </div>

        <div
          className={styles.slider}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          ref={sliderRef}
        >
          <div className={styles.projectsGrid}>
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.imageContainer}>
                  <img src={project.image || "/placeholder.svg"} alt={project.name} className={styles.projectImage} />
                  <div className={styles.imageOverlay}>
                    <button className={styles.viewButton}>View Details</button>
                  </div>
                </div>

                <div className={styles.projectInfo}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <div className={styles.projectDetails}>
                    <div className={styles.detail}>
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </div>
                    <div className={styles.detail}>
                      <Calendar size={16} />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <div className={styles.projectFooter}>
                    <div className={styles.area}>
                      <span>{project.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide}>
            <ChevronLeft />
          </button>

          <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide}>
            <ChevronRight />
          </button>
        </div>

        <div className={styles.dots}>
          {projects.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
