'use client'

import { Instagram, Mail, Facebook } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import styles from './team-section.module.css'
import santoshPhoto from '.././public/santoshPhoto.jpg'
import ajamalPhoto from '.././public/ajamalPhoto.jpg'

const founders = [
  {
    id: 1,
    name: 'Santosh Kumar',
    position: 'Founder & CEO',
    email: 'santosh@heritagereadymix.com',
    instagram: '@rajesh_heritage',
    facebook: 'rajesh.heritage',
    image: santoshPhoto.src || '/placeholder.svg?height=400&width=400',
    message:
      "It's a proud privilege for me to welcome you to Heritage Readymix. At Heritage, we take pride in delivering premium quality concrete solutions with innovation and excellence. Our commitment to quality and customer satisfaction drives us to provide the best concrete products in Rajasthan. I invite you to join us in building a stronger future with our reliable and sustainable concrete solutions.",
  },
  {
    id: 2,
    name: 'Ajamal',
    position: 'Co-Founder & COO',
    email: 'ajamal@heritagereadymix.com',
    instagram: '@priya_heritage',
    facebook: 'priya.heritage',
    image: ajamalPhoto.src || '/placeholder.svg?height=400&width=400',
    message:
      'At Heritage Readymix, we believe in operational excellence and strategic planning. Our focus on efficient delivery and quality control ensures that every project receives the attention it deserves. We are committed to building lasting relationships with our clients through consistent service and innovative solutions that meet the evolving needs of the construction industry.',
  },
  {
    id: 3,
    name: 'Amit Singh Rathore',
    position: 'Co-Founder & CTO',
    email: 'amit@heritagereadymix.com',
    instagram: '@amit_heritage',
    facebook: 'amit.heritage',
    image: '/placeholder.svg?height=400&width=400',
    message:
      'Technology and quality control are at the heart of our operations. We continuously invest in advanced equipment and testing procedures to ensure that every batch of concrete meets the highest industry standards. Our technical expertise and commitment to innovation help us deliver superior products that exceed customer expectations.',
  },
  {
    id: 4,
    name: 'Sunita Meena',
    position: 'Co-Founder & CFO',
    email: 'sunita@heritagereadymix.com',
    instagram: '@sunita_heritage',
    facebook: 'sunita.heritage',
    image: '/placeholder.svg?height=400&width=400',
    message:
      'Financial stability and business growth go hand in hand with quality service. At Heritage Readymix, we maintain transparent business practices while driving sustainable growth. Our focus on customer satisfaction and operational efficiency ensures that we continue to be the preferred choice for concrete solutions in the region.',
  },
]

const teamMembers = [
  {
    id: 5,
    name: 'Vikram Singh',
    position: 'Site Supervisor',
    experience: '8+ Years Experience',
    speciality: 'Construction Management',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    id: 6,
    name: 'Ramesh Kumar',
    position: 'Senior Driver',
    experience: '12+ Years Experience',
    speciality: 'Safe Concrete Delivery',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    id: 7,
    name: 'Dr. Anjali Sharma',
    position: 'Quality Control Engineer',
    experience: '6+ Years Experience',
    speciality: 'Concrete Testing & Analysis',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    id: 8,
    name: 'Mohan Lal',
    position: 'Plant Operator',
    experience: '10+ Years Experience',
    speciality: 'Batching Plant Operations',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    id: 9,
    name: 'Kavita Jain',
    position: 'Customer Relations Manager',
    experience: '5+ Years Experience',
    speciality: 'Client Relationship Management',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    id: 10,
    name: 'Suresh Chand',
    position: 'Maintenance Engineer',
    experience: '9+ Years Experience',
    speciality: 'Equipment Maintenance',
    image: '/placeholder.svg?height=300&width=300',
  },
]

export default function TeamSection() {
  const { t } = useLanguage()

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        {/* Founders Section */}
        <div className={styles.foundersSection}>
          <h2 className={styles.sectionTitle}>What Our Founders Say</h2>
          <div className={styles.foundersContainer}>
            {founders.map((founder, index) => (
              <div
                key={founder.id}
                className={`${styles.founderCard} ${
                  index % 2 === 1 ? styles.reverse : ''
                }`}
              >
                <div className={styles.founderContent}>
                  <div className={styles.founderImageSection}>
                    <img
                      src={founder.image || '/placeholder.svg'}
                      alt={founder.name}
                      className={styles.founderImage}
                    />
                    <div className={styles.founderDetails}>
                      <h3 className={styles.founderName}>{founder.name}</h3>
                      <p className={styles.founderPosition}>
                        {founder.position}
                      </p>
                      <div className={styles.socialIcons}>
                        <a
                          href={`mailto:${founder.email}`}
                          className={styles.socialIcon}
                        >
                          <Mail size={18} />
                        </a>
                        <a
                          href={`https://instagram.com/${founder.instagram.replace(
                            '@',
                            ''
                          )}`}
                          className={styles.socialIcon}
                        >
                          <Instagram size={18} />
                        </a>
                        <a
                          href={`https://facebook.com/${founder.facebook}`}
                          className={styles.socialIcon}
                        >
                          <Facebook size={18} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={styles.founderMessage}>
                    <p className={styles.messageText}>"{founder.message}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className={styles.teamMembersSection}>
          <h2 className={styles.sectionTitle}>Our Team</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.memberCard}>
                <div className={styles.memberImageContainer}>
                  <img
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    className={styles.memberImage}
                  />
                  <div className={styles.memberOverlay}>
                    <div className={styles.memberExtraInfo}>
                      <p className={styles.memberExperience}>
                        {member.experience}
                      </p>
                      <p className={styles.memberSpeciality}>
                        {member.speciality}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberPosition}>{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
