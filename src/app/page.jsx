import React from 'react';
import Link from 'next/link';
import styles from './home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Learn <span className={styles.gradientText}>Directly</span> from Experts
          </h1>
          <p className={styles.heroSubtitle}>
            Gamma Tasks connects you with specialized instructors for personalized learning experiences. 
            From coding to creative arts, join classrooms where you can ask questions, collaborate, and grow.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/join-classroom" className={styles.primaryButton}>
              <span>Join a Classroom</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/instructors" className={styles.secondaryButton}>
              Find Instructors
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Expert Instructors</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10k+</span>
              <span className={styles.statLabel}>Active Students</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>200+</span>
              <span className={styles.statLabel}>Skill Categories</span>
            </div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.floatingCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>💻</div>
              <div className={styles.cardTitle}>Web Development</div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.instructor}>
                <div className={styles.avatar}></div>
                <span>Sarah Johnson</span>
              </div>
              <div className={styles.rating}>⭐ 4.9 (128 reviews)</div>
            </div>
          </div>
          <div className={styles.floatingCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>🎨</div>
              <div className={styles.cardTitle}>Digital Art</div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.instructor}>
                <div className={styles.avatar}></div>
                <span>Marcus Lee</span>
              </div>
              <div className={styles.rating}>⭐ 4.8 (94 reviews)</div>
            </div>
          </div>
          <div className={styles.floatingCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>📊</div>
              <div className={styles.cardTitle}>Data Science</div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.instructor}>
                <div className={styles.avatar}></div>
                <span>Alex Rivera</span>
              </div>
              <div className={styles.rating}>⭐ 4.7 (156 reviews)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Why Choose Gamma Tasks?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--accent-light)" strokeWidth="2"/>
                <path d="M8 12H16M16 12L12 8M16 12L12 16" stroke="var(--accent-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Direct Access to Instructors</h3>
            <p>Get personalized feedback and ask questions directly to experts in your field of study.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="var(--accent-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="var(--accent-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="var(--accent-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="var(--accent-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Collaborative Learning</h3>
            <p>Join a community of learners, share insights, and grow together with your peers.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="var(--accent-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Structured Progress</h3>
            <p>Follow a clear learning path with lessons and tasks designed to build your skills systematically.</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categories}>
        <h2 className={styles.sectionTitle}>Explore Learning Categories</h2>
        <div className={styles.categoriesGrid}>
          <div className={styles.categoryCard}>
            <div className={styles.categoryIcon}>💻</div>
            <h3>Technology</h3>
            <p>Programming, Web Development, Data Science, Cybersecurity</p>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryIcon}>🎨</div>
            <h3>Creative Arts</h3>
            <p>Design, Photography, Music, Writing, Digital Art</p>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryIcon}>📊</div>
            <h3>Business</h3>
            <p>Marketing, Finance, Management, Entrepreneurship</p>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryIcon}>🔬</div>
            <h3>Science</h3>
            <p>Biology, Chemistry, Physics, Mathematics</p>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryIcon}>🌍</div>
            <h3>Languages</h3>
            <p>English, Spanish, French, Mandarin, and more</p>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryIcon}>🧠</div>
            <h3>Personal Development</h3>
            <p>Productivity, Leadership, Communication, Mindfulness</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join thousands of students mastering new skills with direct access to expert instructors</p>
          <div className={styles.ctaButtons}>
            <Link href="/auth?mode=register" className={styles.primaryButton}>Create Account</Link>
            <Link href="/about" className={styles.secondaryButton}>Learn More</Link>
          </div>
        </div>
      </section>


    </div>
  );
}