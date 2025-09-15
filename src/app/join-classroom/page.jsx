'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import styles from './join-classroom.module.css';

export default function JoinClassroom() {
  const [classCode, setClassCode] = useState('');
  const [activeTab, setActiveTab] = useState('join');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data - replace with actual API calls
  const availableClassrooms = [
    {
      id: 1,
      title: 'Advanced Web Development',
      instructor: 'Sarah Johnson',
      subject: 'Technology',
      level: 'Intermediate',
      students: 24,
      description: 'Learn modern web development with React, Node.js, and advanced JavaScript concepts.',
      schedule: 'Mon & Wed, 6:00 PM - 8:00 PM',
      price: 49,
      rating: 4.9,
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Digital Painting Masterclass',
      instructor: 'Marcus Lee',
      subject: 'Creative Arts',
      level: 'All Levels',
      students: 18,
      description: 'Master digital painting techniques using Photoshop and Procreate with professional guidance.',
      schedule: 'Tue & Thu, 7:00 PM - 9:00 PM',
      price: 39,
      rating: 4.8,
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Data Science Fundamentals',
      instructor: 'Alex Rivera',
      subject: 'Technology',
      level: 'Beginner',
      students: 32,
      description: 'Introduction to data science concepts, Python programming, and statistical analysis.',
      schedule: 'Sat, 10:00 AM - 1:00 PM',
      price: 59,
      rating: 4.7,
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: 'Business Communication Skills',
      instructor: 'Jessica Chen',
      subject: 'Business',
      level: 'Intermediate',
      students: 15,
      description: 'Improve your professional communication, presentation, and negotiation skills.',
      schedule: 'Mon & Fri, 5:00 PM - 6:30 PM',
      price: 35,
      rating: 4.9,
      image: '/api/placeholder/300/200'
    },
    {
      id: 5,
      title: 'Spanish for Beginners',
      instructor: 'David Wilson',
      subject: 'Languages',
      level: 'Beginner',
      students: 28,
      description: 'Learn Spanish from scratch with focus on conversation and practical usage.',
      schedule: 'Wed & Fri, 6:30 PM - 8:00 PM',
      price: 45,
      rating: 4.6,
      image: '/api/placeholder/300/200'
    },
    {
      id: 6,
      title: 'Calculus I: Foundations',
      instructor: 'Emily Parker',
      subject: 'Mathematics',
      level: 'Beginner',
      students: 22,
      description: 'Master the fundamentals of calculus with practical applications and problem-solving.',
      schedule: 'Tue & Thu, 4:00 PM - 5:30 PM',
      price: 42,
      rating: 4.8,
      image: '/api/placeholder/300/200'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'technology', name: 'Technology' },
    { id: 'creative', name: 'Creative Arts' },
    { id: 'business', name: 'Business' },
    { id: 'science', name: 'Science' },
    { id: 'languages', name: 'Languages' },
    { id: 'math', name: 'Mathematics' }
  ];

  const handleJoinClassroom = (e) => {
    e.preventDefault();
    // Handle classroom joining logic here
    console.log('Joining classroom with code:', classCode);
    // Redirect or show success message
  };

  const filteredClassrooms = selectedCategory === 'all' 
    ? availableClassrooms 
    : availableClassrooms.filter(classroom => classroom.subject.toLowerCase() === selectedCategory);

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Join a Classroom</h1>
        <p>Enter a classroom code or browse available classrooms to start learning</p>
      </div>

      {/* Tab Navigation */}
      <div className={styles.tabContainer}>
        <button 
          className={`${styles.tab} ${activeTab === 'join' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('join')}
        >
          Join with Code
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'browse' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('browse')}
        >
          Browse Classrooms
        </button>
      </div>

      {/* Join with Code Section */}
      {activeTab === 'join' && (
        <div className={styles.joinSection}>
          <div className={styles.joinCard}>
            <div className={styles.joinIllustration}>
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M150 50H50C41.7157 50 35 56.7157 35 65V135C35 143.284 41.7157 150 50 150H150C158.284 150 165 143.284 165 135V65C165 56.7157 158.284 50 150 50Z" stroke="var(--accent-light)" strokeWidth="4"/>
                <path d="M70 85C72.7614 85 75 82.7614 75 80C75 77.2386 72.7614 75 70 75C67.2386 75 65 77.2386 65 80C65 82.7614 67.2386 85 70 85Z" fill="var(--accent-light)"/>
                <path d="M70 105C72.7614 105 75 102.761 75 100C75 97.2386 72.7614 95 70 95C67.2386 95 65 97.2386 65 100C65 102.761 67.2386 105 70 105Z" fill="var(--accent-light)"/>
                <path d="M70 125C72.7614 125 75 122.761 75 120C75 117.239 72.7614 115 70 115C67.2386 115 65 117.239 65 120C65 122.761 67.2386 125 70 125Z" fill="var(--accent-light)"/>
                <path d="M105 85H130" stroke="var(--accent-light)" strokeWidth="4" strokeLinecap="round"/>
                <path d="M105 105H130" stroke="var(--accent-light)" strokeWidth="4" strokeLinecap="round"/>
                <path d="M105 125H130" stroke="var(--accent-light)" strokeWidth="4" strokeLinecap="round"/>
                <path d="M145 85C147.761 85 150 82.7614 150 80C150 77.2386 147.761 75 145 75C142.239 75 140 77.2386 140 80C140 82.7614 142.239 85 145 85Z" fill="var(--accent-primary)"/>
              </svg>
            </div>
            <div className={styles.joinContent}>
              <h2>Enter Classroom Code</h2>
              <p>If you have a classroom code from your instructor, enter it below to join immediately</p>
              <form onSubmit={handleJoinClassroom} className={styles.codeForm}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder="Enter classroom code (e.g., ABC123)"
                    value={classCode}
                    onChange={(e) => setClassCode(e.target.value)}
                    className={styles.codeInput}
                    required
                  />
                  <button type="submit" className={styles.primaryButton}>
                    Join Classroom
                  </button>
                </div>
              </form>
              <div className={styles.helpText}>
                <p>Don't have a code? <span onClick={() => setActiveTab('browse')}>Browse available classrooms</span></p>
                <p>Where can I find my classroom code? <Link href="/help">Learn more</Link></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Browse Classrooms Section */}
      {activeTab === 'browse' && (
        <div className={styles.browseSection}>
          {/* Filters */}
          <div className={styles.filters}>
            <h3>Filter Classrooms</h3>
            <div className={styles.filterOptions}>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`${styles.filterButton} ${selectedCategory === category.id ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Classroom Grid */}
          <div className={styles.classroomGrid}>
            {filteredClassrooms.map(classroom => (
              <div key={classroom.id} className={styles.classroomCard}>
                <div className={styles.cardImage}>
                  <div className={styles.imagePlaceholder}></div>
                  <div className={styles.cardBadge}>
                    ${classroom.price}/month
                  </div>
                  <div className={styles.rating}>
                    ⭐ {classroom.rating}
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3>{classroom.title}</h3>
                  <p className={styles.instructor}>by {classroom.instructor}</p>
                  <p className={styles.description}>{classroom.description}</p>
                  <div className={styles.details}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Level:</span>
                      <span className={styles.detailValue}>{classroom.level}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Schedule:</span>
                      <span className={styles.detailValue}>{classroom.schedule}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Students:</span>
                      <span className={styles.detailValue}>{classroom.students} enrolled</span>
                    </div>
                  </div>
                </div>
                <div className={styles.cardActions}>
                  <Link href={`/classrooms/${classroom.id}`} className={styles.primaryButton}>
                    View Details
                  </Link>
                  <button className={styles.secondaryButton}>
                    Join Classroom
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredClassrooms.length === 0 && (
            <div className={styles.noResults}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 17H8" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 9H8" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3>No classrooms found</h3>
              <p>Try selecting a different category or check back later for new classrooms</p>
            </div>
          )}
        </div>
      )}

      {/* Help Section */}
      <div className={styles.helpSection}>
        <h2>Need Help Joining a Classroom?</h2>
        <div className={styles.helpGrid}>
          <div className={styles.helpCard}>
            <div className={styles.helpIcon}>📋</div>
            <h3>Get a Code from Your Instructor</h3>
            <p>Contact your instructor directly to receive a classroom code for immediate access.</p>
          </div>
          <div className={styles.helpCard}>
            <div className={styles.helpIcon}>🔍</div>
            <h3>Browse Available Classrooms</h3>
            <p>Explore our directory of classrooms and join those that match your learning goals.</p>
          </div>
          <div className={styles.helpCard}>
            <div className={styles.helpIcon}>❓</div>
            <h3>Having Trouble?</h3>
            <p>Visit our help center for detailed instructions on joining classrooms.</p>
            <Link href="/help" className={styles.helpLink}>Get Help</Link>
          </div>
        </div>
      </div>
    </div>
  );
}