'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { 
  FaQuestionCircle, 
  FaLightbulb, 
  FaUsers, 
  FaGraduationCap,
  FaBook,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaComments
} from 'react-icons/fa';
import styles from './about.module.css';

export default function AboutPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState('general');

  // FAQ data organized by categories
  const faqCategories = {
    general: [
      {
        question: 'What is Gamma Tasks?',
        answer: 'Gamma Tasks is a customizable teaching platform that connects students with expert instructors for personalized learning experiences. We facilitate direct communication, structured lessons, and collaborative learning environments.'
      },
      {
        question: 'How is Gamma Tasks different from other learning platforms?',
        answer: 'Unlike traditional course platforms, Gamma Tasks focuses on building real teacher-student relationships. Students can directly communicate with instructors, join specialized classrooms, and participate in collaborative learning communities.'
      },
      {
        question: 'Do I need any special equipment or software?',
        answer: 'You just need a modern web browser and internet connection. Some classrooms might require specific software for specialized subjects (like design or programming tools), which will be specified in the classroom requirements.'
      }
    ],
    account: [
      {
        question: 'How do I create an account?',
        answer: 'Click on the "Sign Up" button in the top navigation. You\'ll need to provide your name, email address, and create a password. After verifying your email, you can complete your profile and start exploring classrooms.'
      },
      {
        question: 'Can I change my account information later?',
        answer: 'Yes, you can update your account information at any time through your profile settings. This includes your name, profile picture, bio, and notification preferences.'
      },
      {
        question: 'How do I reset my password?',
        answer: 'Click on "Forgot Password" on the login page. Enter your email address, and we\'ll send you a link to reset your password. The link will expire after 24 hours for security reasons.'
      }
    ],
    classrooms: [
      {
        question: 'How do I join a classroom?',
        answer: 'You can join a classroom in two ways: 1) Use a classroom code provided by your instructor, or 2) Browse available classrooms and request to join. Some classrooms may require approval from the instructor.'
      },
      {
        question: 'Can I join multiple classrooms?',
        answer: 'Yes, you can join as many classrooms as you want. Each classroom functions independently, so you can learn multiple subjects simultaneously from different instructors.'
      },
      {
        question: 'What happens if I leave a classroom?',
        answer: 'If you leave a classroom, you\'ll lose access to its materials, discussions, and future updates. However, any completed work or certificates will remain in your profile.'
      }
    ],
    payments: [
      {
        question: 'How do payments work?',
        answer: 'Payments are processed per classroom. Some classrooms are free, while others require payment. You can pay using credit/debit cards, PayPal, or other available payment methods. All payments are secure and encrypted.'
      },
      {
        question: 'Can I get a refund?',
        answer: 'Refund policies vary by instructor. Most offer a 14-day money-back guarantee if you\'re not satisfied with the classroom experience. Check the specific refund policy for each classroom before joining.'
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No, we believe in transparent pricing. The price shown is what you pay. There are no hidden fees or additional charges unless explicitly stated before payment.'
      }
    ]
  };

  // Support topics
  const supportTopics = [
    {
      icon: <FaComments />,
      title: 'Community Support',
      description: 'Get help from our community of instructors and students',
      action: 'Visit Community',
      link: '/community'
    },
    {
      icon: <FaBook />,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation and guides',
      action: 'View Guides',
      link: '/help'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Support',
      description: 'Send us a message and we\'ll respond within 24 hours',
      action: 'Contact Us',
      link: 'mailto:support@gammatasks.com'
    },
    {
      icon: <FaPhone />,
      title: 'Live Chat',
      description: 'Chat with our support team during business hours',
      action: 'Start Chat',
      link: '#chat'
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>About Gamma Tasks</h1>
        <p>Learn about our platform, get answers to common questions, and find support</p>
      </div>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <div className={styles.missionText}>
            <h2>Our Mission</h2>
            <p>
              At Gamma Tasks, we believe that education should be personalized, accessible, and collaborative. 
              Our mission is to create meaningful connections between learners and experts, fostering environments 
              where knowledge can be shared directly and questions can be answered in real-time.
            </p>
            <p>
              We're building more than just a learning platform—we're creating communities where students 
              and instructors grow together through structured lessons, practical tasks, and open communication.
            </p>
          </div>
          <div className={styles.missionStats}>
            <div className={styles.stat}>
              <FaUsers className={styles.statIcon} />
              <div className={styles.statContent}>
                <span className={styles.statNumber}>10,000+</span>
                <span className={styles.statLabel}>Active Learners</span>
              </div>
            </div>
            <div className={styles.stat}>
              <FaGraduationCap className={styles.statIcon} />
              <div className={styles.statContent}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Expert Instructors</span>
              </div>
            </div>
            <div className={styles.stat}>
              <FaBook className={styles.statIcon} />
              <div className={styles.statContent}>
                <span className={styles.statNumber}>200+</span>
                <span className={styles.statLabel}>Learning Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <h2>How Gamma Tasks Works</h2>
        <div className={styles.workflow}>
          <div className={styles.workflowStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Find Your Instructor</h3>
            <p>Browse instructors or search for specific skills and subjects that match your learning goals.</p>
          </div>
          <div className={styles.workflowStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>Join a Classroom</h3>
            <p>Enroll in a classroom using a code or by requesting to join. Start accessing lessons and tasks.</p>
          </div>
          <div className={styles.workflowStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Learn & Collaborate</h3>
            <p>Engage with lessons, complete tasks, ask questions, and collaborate with peers and instructors.</p>
          </div>
          <div className={styles.workflowStep}>
            <div className={styles.stepNumber}>4</div>
            <h3>Track Your Progress</h3>
            <p>Monitor your learning journey, receive feedback, and celebrate your achievements.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.faqHeader}>
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about Gamma Tasks</p>
        </div>

        <div className={styles.faqContent}>
          <div className={styles.faqCategories}>
            <button 
              className={`${styles.categoryButton} ${activeCategory === 'general' ? styles.active : ''}`}
              onClick={() => setActiveCategory('general')}
            >
              General
            </button>
            <button 
              className={`${styles.categoryButton} ${activeCategory === 'account' ? styles.active : ''}`}
              onClick={() => setActiveCategory('account')}
            >
              Account
            </button>
            <button 
              className={`${styles.categoryButton} ${activeCategory === 'classrooms' ? styles.active : ''}`}
              onClick={() => setActiveCategory('classrooms')}
            >
              Classrooms
            </button>
            <button 
              className={`${styles.categoryButton} ${activeCategory === 'payments' ? styles.active : ''}`}
              onClick={() => setActiveCategory('payments')}
            >
              Payments
            </button>
          </div>

          <div className={styles.faqList}>
            {faqCategories[activeCategory].map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button 
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  {activeFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {activeFaq === index && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className={styles.supportSection}>
        <h2>Get Support</h2>
        <p>We're here to help you with any questions or issues</p>

        <div className={styles.supportGrid}>
          {supportTopics.map((topic, index) => (
            <div key={index} className={styles.supportCard}>
              <div className={styles.supportIcon}>
                {topic.icon}
              </div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <Link href={topic.link} className={styles.supportAction}>
                {topic.action}
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <div>
              <h4>Email Us</h4>
              <p>support@gammatasks.com</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <FaClock className={styles.contactIcon} />
            <div>
              <h4>Response Time</h4>
              <p>Typically within 24 hours</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <FaSearch className={styles.contactIcon} />
            <div>
              <h4>Help Center</h4>
              <p>Browse comprehensive guides and tutorials</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Start Learning?</h2>
          <p>Join thousands of students who are already advancing their skills with Gamma Tasks</p>
          <div className={styles.ctaButtons}>
            <Link href="/join-classroom" className={styles.primaryButton}>
              Join a Classroom
            </Link>
            <Link href="/search" className={styles.secondaryButton}>
              Find Instructors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}