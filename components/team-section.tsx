'use client'

import { Instagram, Mail, Facebook } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import styles from './team-section.module.css'
import santoshPhoto from '.././public/santosh.jpg'
import pavanPhoto from '.././public/pavanPhoto.jpg'
import ashokPhoto from '.././public/ashok2.jpg'
import siyaramPhoto from '.././public/siyaram.jpg'

const founders = [
  {
    id: 1,
    name: 'Ashok Kumawat',
    position: 'Founder & Director',
    email: 'santosh@heritagereadymix.com',
    instagram: '@rajesh_heritage',
    facebook: 'rajesh.heritage',
    image: ashokPhoto.src || '/placeholder.svg?height=400&width=400',
    message:
      'It is my honor and privilege to welcome you to Heritage Readymix. With over 15 years of hands-on experience in the Ready-Mix Concrete (RMC) industry and an extensive track record of managing and optimizing operations across three major RMC plants, I bring deep knowledge and expertise in plant workflows and concrete solutions.\n\n\
      At Heritage, we pride ourselves on delivering premium-quality concrete solutions backed by innovation, precision, and a relentless commitment to excellence. Our unwavering dedication to quality and customer satisfaction inspires us to provide the finest concrete products in Rajasthan, ensuring reliability and sustainability in every project we undertake.',
  },
  {
    id: 2,
    name: 'Siyaram Sharma',
    position: 'Founder & Director',
    email: 'ajamal@heritagereadymix.com',
    instagram: '@priya_heritage',
    facebook: 'priya.heritage',
    image: siyaramPhoto.src || '/placeholder.svg?height=400&width=400',
    message:
      'At Heritage Readymix, we believe in operational excellence and strategic planning. Our focus on efficient delivery and quality control ensures that every project receives the attention it deserves. We are committed to building lasting relationships with our clients through consistent service and innovative solutions that meet the evolving needs of the construction industry.',
  },
  {
    id: 3,
    name: 'Santosh Kumawat',
    position: 'Co-Founder & Director',
    email: 'amit@heritagereadymix.com',
    instagram: '@santosh_kumar7568',
    facebook: 'profile.php?id=100005927948791&sk=about',
    image: santoshPhoto.src || '/placeholder.svg?height=400&width=400',
    message:
      'Technology and quality control are at the heart of our operations. We continuously invest in advanced equipment and testing procedures to ensure that every batch of concrete meets the highest industry standards. Our technical expertise and commitment to innovation help us deliver superior products that exceed customer expectations.',
  },
  {
    id: 4,
    name: 'Pavan Kumar Sharma',
    position: 'Co-Founder & Director',
    email: 'sunita@heritagereadymix.com',
    instagram: '@sunita_heritage',
    facebook: 'sunita.heritage',
    image: pavanPhoto.src || '/placeholder.svg?height=400&width=400',
    message:
      'Financial stability and business growth go hand in hand with quality service. At Heritage Readymix, we maintain transparent business practices while driving sustainable growth. Our focus on customer satisfaction and operational efficiency ensures that we continue to be the preferred choice for concrete solutions in the region.',
  },
  {
    id: 5,
    name: 'Ajamal Khan',
    position: 'Co-Founder & Director',
    email: 'sunita@heritagereadymix.com',
    instagram: '@sunita_heritage',
    facebook: 'sunita.heritage',
    image: '/placeholder.svg?height=400&width=400',
    message:
      ' I warmly welcome you to Heritage Readymix. Leveraging my experience and proficiency in marketing and strategic growth, I have ensured that Heritage Readymix remains a trusted name in the industry. At Heritage, we prioritize financial stability and sustainable business growth alongside delivering premium-quality concrete solutions. Transparent business practices, customer satisfaction, and operational efficiency are the cornerstones of our success, making us the preferred choice for concrete solutions in the region. Let’s build a stronger, more sustainable future together.',
  },
]

const teamMembers = [
  {
    id: 5,
    name: 'Narsi Kumawat',
    position: 'Lab oratory Manager',
    experience: '2+ Years Experience',
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
    name: 'Pavan Sharma',
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
    name: 'Mukesh Singh',
    position: 'Driver',
    experience: '5+ Years Experience',
    speciality: 'Concrete Transportation',
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
