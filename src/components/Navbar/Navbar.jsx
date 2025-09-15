"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { data: session } = useSession();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">Gamma Tasks</Link>
        </div>

        {/* Hamburger menu button for mobile */}
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Navigation links - hidden on mobile when menu is closed */}
        {session ? (
          <div
            className={`${styles.navLinks} ${
              isMenuOpen ? styles.navLinksOpen : ""
            }`}
          >
            <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
              Dashboard
            </Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Messages
            </Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Community
            </Link>
            <Link href="/search" onClick={() => setIsMenuOpen(false)}>
              Find Other Instructors
            </Link>
            <Link href="/join-classroom" onClick={() => setIsMenuOpen(false)}>
              Other Classrooms
            </Link>
            <Link href="/profile" className={styles.userProfile}>
              <div className={styles.imgcontainer}>
                <Image
                  className={styles.img}
                  alt="profile image"
                  src="data:image/jpeg;base64,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"
                  fill
                />
              </div>
              <span>Christian</span>
            </Link>
            <button onClick={() => signOut()} className={styles.signupBtn}>
              Sign Out
            </button>
          </div>
        ) : (
          <div
            className={`${styles.navLinks} ${
              isMenuOpen ? styles.navLinksOpen : ""
            }`}
          >
            <Link href="/about">About</Link>
            <Link href="/instructors">Instructors</Link>
            <Link href="/join-classroom">Classroom</Link>
            <Link href="/auth?mode=login" className={styles.loginBtn}>
              Login
            </Link>
            <Link href="/auth?mode=register" className={styles.signupBtn}>
              Sign Up
            </Link>
          </div>
        )}
      </nav>

      {/* Overlay for when mobile menu is open */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}
    </>
  );
}
