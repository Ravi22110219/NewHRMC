"use client"

import { useState } from "react"
import { MapPin, Calendar, Maximize } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import styles from "./projects-grid.module.css"

const projects = [
  {
    id: 1,
    name: "Residential Complex A",
    location: "Malviya Nagar, Jaipur",
    date: "2024-01-15",
    area: "5000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    description: "Modern residential complex with premium concrete finishing",
  },
  {
    id: 2,
    name: "Commercial Plaza B",
    location: "C-Scheme, Jaipur",
    date: "2024-02-20",
    area: "8000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    description: "High-rise commercial building with advanced concrete technology",
  },
  {
    id: 3,
    name: "Highway Bridge Project",
    location: "Jaipur-Delhi Highway",
    date: "2024-03-10",
    area: "12000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    description: "Infrastructure project requiring high-strength concrete",
  },
  {
    id: 4,
    name: "Industrial Warehouse",
    location: "Sitapura, Jaipur",
    date: "2024-04-05",
    area: "15000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    description: "Large-scale industrial facility with specialized concrete mix",
  },
  {
    id: 5,
    name: "Shopping Mall Complex",
    location: "Vaishali Nagar, Jaipur",
    date: "2024-05-12",
    area: "20000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    description: "Multi-story shopping complex with decorative concrete elements",
  },
  {
    id: 6,
    name: "Hospital Building",
    location: "JLN Marg, Jaipur",
    date: "2024-06-18",
    area: "10000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    description: "Healthcare facility requiring precision concrete work",
  },
]

export default function ProjectsGrid() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState("all")

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t("projectsTitle")}</h1>
          <p className={styles.subtitle}>Explore our completed projects showcasing quality concrete solutions</p>
        </div>

        <div className={styles.filters}>
          <button
            className={`${styles.filterButton} ${filter === "all" ? styles.active : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button
            className={`${styles.filterButton} ${filter === "residential" ? styles.active : ""}`}
            onClick={() => setFilter("residential")}
          >
            Residential
          </button>
          <button
            className={`${styles.filterButton} ${filter === "commercial" ? styles.active : ""}`}
            onClick={() => setFilter("commercial")}
          >
            Commercial
          </button>
          <button
            className={`${styles.filterButton} ${filter === "infrastructure" ? styles.active : ""}`}
            onClick={() => setFilter("infrastructure")}
          >
            Infrastructure
          </button>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img src={project.image || "/placeholder.svg"} alt={project.name} className={styles.projectImage} />
                <div className={styles.imageOverlay}>
                  <button className={styles.viewButton}>
                    <Maximize size={20} />
                    View Details
                  </button>
                </div>
              </div>

              <div className={styles.projectInfo}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

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
                  <button className={styles.contactButton}>Get Quote</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
