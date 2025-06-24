'use client'

import { useLanguage } from '@/contexts/language-context'
import styles from './about-company.module.css'
import plant from '.././public/plant2.jpg'

export default function AboutCompany() {
  const { t } = useLanguage()

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img
              src={plant.src}
              alt="Heritage Readymix Company"
              className={styles.companyImage}
            />
          </div>

          <div className={styles.textSection}>
            <h2 className={styles.title}>{t('aboutCompanyTitle')}</h2>
            <p className={styles.description}>{t('aboutCompanyText')}</p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h3>10+</h3>
                <p>Years Experience Founders</p>
              </div>
              <div className={styles.stat}>
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className={styles.stat}>
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
