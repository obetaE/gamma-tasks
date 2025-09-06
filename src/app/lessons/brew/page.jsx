'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function BrewHavenCoffee() {
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <a href="#" className={styles.logo}>Brew<span>Haven</span></a>
            <button 
              className={styles.mobileToggle}
              onClick={() => setIsNavActive(!isNavActive)}
            >
              <i className={`fas ${isNavActive ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            <nav className={`${styles.mainNav} ${isNavActive ? styles.active : ''}`}>
              <ul>
                <li><a href="#home" className={styles.active}>Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Experience the Perfect Brew</h1>
          <p>Discover handcrafted coffee in a cozy atmosphere that feels like home</p>
          <a href="#menu" className={styles.btn}>Explore Our Menu</a>
        </div>
      </section>

      <section id="menu" className={styles.menu}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Specialties</h2>
          <div className={styles.menuGrid}>
            <div className={styles.menuCard}>
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400" alt="Latte" />
              <h3>Vanilla Latte</h3>
              <p>Rich espresso blended with steamed milk and natural vanilla flavor</p>
              <span className={styles.price}>$4.50</span>
            </div>
            <div className={styles.menuCard}>
              <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400" alt="Mocha" />
              <h3>Mocha Delight</h3>
              <p>Chocolatey goodness with a perfect coffee kick</p>
              <span className={styles.price}>$5.00</span>
            </div>
            <div className={styles.menuCard}>
              <img src="https://images.unsplash.com/photo-1559628233-97a031f55c4f?w=400" alt="Cold Brew" />
              <h3>Cold Brew</h3>
              <p>Slow brewed for 24 hours for a smooth, bold taste</p>
              <span className={styles.price}>$3.75</span>
            </div>
          </div>
          <div className={styles.menuCta}>
            <a href="#contact" className={styles.btn}>View Full Menu</a>
          </div>
        </div>
      </section>

      <section id="testimonials" className={styles.testimonials}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <div className={styles.rating}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>"The best coffee in town! The vanilla latte is my go-to morning ritual. The atmosphere is perfect for getting work done or catching up with friends."</p>
              <h4>- Sarah K.</h4>
            </div>
            <div className={styles.testimonial}>
              <div className={styles.rating}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>"Love the cozy vibe. Perfect place to work or relax. The baristas remember my name and my usual order, which makes me feel right at home."</p>
              <h4>- James P.</h4>
            </div>
            <div className={styles.testimonial}>
              <div className={styles.rating}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <p>"Amazing cold brew. Smooth and refreshing every time. I also love their seasonal specials - always something new and delicious to try!"</p>
              <h4>- Maria L.</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Visit Us</h2>
          <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
              <h3>Get in Touch</h3>
              <div className={styles.contactDetail}>
                <div className={styles.contactIcon}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p>123 Coffee Lane<br />Brewville, BC 12345</p>
                </div>
              </div>
              <div className={styles.contactDetail}>
                <div className={styles.contactIcon}>
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <p>Monday-Friday: 6:30am - 8pm<br />Saturday-Sunday: 7:30am - 9pm</p>
                </div>
              </div>
              <div className={styles.contactDetail}>
                <div className={styles.contactIcon}>
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <p>(123) 456-7890<br />info@brewhaven.com</p>
                </div>
              </div>
            </div>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className={styles.btn}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerAbout}>
              <a href="#" className={styles.footerLogo}>BrewHaven</a>
              <p>Crafting exceptional coffee experiences since 2010. We source sustainable beans and roast them to perfection.</p>
              <div className={styles.socialLinks}>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-tiktok"></i></a>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <h3 className={styles.footerHeading}>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className={styles.footerHours}>
              <h3 className={styles.footerHeading}>Opening Hours</h3>
              <div className={styles.hoursItem}>
                <span>Monday - Friday</span>
                <span>6:30am - 8pm</span>
              </div>
              <div className={styles.hoursItem}>
                <span>Saturday</span>
                <span>7:30am - 9pm</span>
              </div>
              <div className={styles.hoursItem}>
                <span>Sunday</span>
                <span>7:30am - 9pm</span>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>&copy; 2023 Brew Haven Coffee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}