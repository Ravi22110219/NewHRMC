'use client'
import { useLanguage } from '@/contexts/language-context'
import styles from './why-choose-us.module.css'

const features = [
  {
    key: 'bestConcrete',
    image:
      'https://aacmaterialsupplies.com/wp-content/uploads/2020/06/jelly-1.png',
    icon: '🏗️',
  },
  {
    key: 'highQualityCement',
    image:
      'https://www.jkcement.com/wp-content/uploads/2024/02/cement-powder-with-trowel-put-brick-construction-work-1-1024x683-jpg.webp',
    icon: '🏭',
  },
  {
    key: 'timelyDelivery',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/express-delivery-service-design-template-50f2e6bc50a3abea60ae3d57a2edd78e_screen.jpg?ts=1584350715',
    icon: '🚛',
  },
  {
    key: 'expertTeam',
    image:
      'https://www.rmcindia.com/wp-content/uploads/2024/04/About_us_rmc-1024x683.jpg',
    icon: '👷',
  },
]

export default function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('whyChooseUsTitle')}</h2>

        <div className={styles.cardsGrid}>
          {features.map((feature, index) => (
            <div key={feature.key} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <img
                    src={feature.image || '/placeholder.svg'}
                    alt={t(feature.key)}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay}>
                    <div className={styles.cardIcon}>{feature.icon}</div>
                    <h3 className={styles.cardTitle}>{t(feature.key)}</h3>
                  </div>
                </div>

                <div className={styles.cardBack}>
                  <div className={styles.cardBackContent}>
                    <div className={styles.cardIcon}>{feature.icon}</div>
                    <h3 className={styles.cardTitle}>{t(feature.key)}</h3>
                    <p className={styles.cardDescription}>
                      {t(`${feature.key}Desc`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
