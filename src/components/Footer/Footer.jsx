import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Gamma Tasks</span>
            </div>
            <p>Connecting learners with experts for personalized education experiences.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Platform</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/instructors">Instructors</Link></li>
              <li><Link href="/categories">Categories</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/help">Help Center</Link></li>
              <li><Link href="/community">Community</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Gamma Tasks. All rights reserved.</p>
        </div>
      </footer>
  )
}