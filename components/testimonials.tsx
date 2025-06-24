'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import styles from './testimonials.module.css'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    image: '/placeholder.svg?height=80&width=80',
    text: 'Heritage Readymix provided excellent quality concrete for our residential project. Their timely delivery and professional service exceeded our expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ajay Prajapat',
    image: '/placeholder.svg?height=80&width=80',
    text: 'Outstanding service and quality! The team was very professional and the concrete quality was top-notch. Highly recommended for any construction project.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Singh',
    image: '/placeholder.svg?height=80&width=80',
    text: 'We have been using Heritage Readymix for multiple projects. Their consistency in quality and reliability makes them our preferred concrete supplier.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ravi kumawat',
    image: '/placeholder.svg?height=80&width=80',
    text: 'Excellent concrete quality and prompt delivery. The customer service team is very responsive and helpful. Great experience overall.',
    rating: 5,
  },
]

export default function Testimonials() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('testimonialsTitle')}</h2>

        <div
          className={styles.slider}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={styles.slidesContainer}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.slide}>
                <div className={styles.testimonialCard}>
                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className={styles.star}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <p className={styles.testimonialText}>"{testimonial.text}"</p>

                  <div className={styles.author}>
                    <img
                      src={testimonial.image || '/placeholder.svg'}
                      alt={testimonial.name}
                      className={styles.authorImage}
                    />
                    <div className={styles.authorInfo}>
                      <h4 className={styles.authorName}>{testimonial.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.activeIndicator : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
