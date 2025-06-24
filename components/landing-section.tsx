'use client'

import { useLanguage } from '@/contexts/language-context'
import styles from './landing-section.module.css'
import landingImage from '.././public/landing2.jpg'

export default function LandingSection() {
  const { t } = useLanguage()

  return (
    <section className={styles.landing}>
      <div className={styles.background}>
        <img
          src={landingImage.src}
          alt="Construction Background"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h1 className={styles.headline}>
              Heritage ReadyMix Concrete Plant
            </h1>
            <p className={styles.description}>{t('landingDescription')}</p>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.animatedGif}>
              {/* <img
                src="https://www.transconcrete.com/wp-content/themes/transconcrete-2017/images/trucks.gif"
                alt="Concrete Mixing Animation"
                className={styles.gif}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
