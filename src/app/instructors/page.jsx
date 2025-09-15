'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import styles from './search.module.css';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [ratingFilter, setRatingFilter] = useState(0);

  // Mock data - replace with actual API calls
  const instructors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      subject: 'Web Development',
      rating: 4.9,
      reviews: 128,
      price: 49,
      image: '/api/placeholder/100/100',
      bio: 'Full-stack developer with 8+ years of experience. Specialized in React, Node.js, and modern web technologies.',
      tags: ['React', 'JavaScript', 'Node.js']
    },
    {
      id: 2,
      name: 'Marcus Lee',
      subject: 'Digital Art',
      rating: 4.8,
      reviews: 94,
      price: 39,
      image: '/api/placeholder/100/100',
      bio: 'Professional digital artist and illustrator with expertise in Photoshop, Illustrator, and Procreate.',
      tags: ['Photoshop', 'Illustration', 'Digital Painting']
    },
    {
      id: 3,
      name: 'Alex Rivera',
      subject: 'Data Science',
      rating: 4.7,
      reviews: 156,
      price: 59,
      image: '/api/placeholder/100/100',
      bio: 'Data scientist and machine learning engineer with focus on Python, R, and statistical analysis.',
      tags: ['Python', 'Machine Learning', 'Statistics']
    },
    {
      id: 4,
      name: 'Jessica Chen',
      subject: 'Language Learning',
      rating: 4.9,
      reviews: 203,
      price: 35,
      image: '/api/placeholder/100/100',
      bio: 'Certified language instructor specializing in English and Mandarin with 10+ years of teaching experience.',
      tags: ['English', 'Mandarin', 'ESL']
    },
    {
      id: 5,
      name: 'David Wilson',
      subject: 'Music Production',
      rating: 4.6,
      reviews: 87,
      price: 45,
      image: '/api/placeholder/100/100',
      bio: 'Award-winning music producer with expertise in Ableton Live, FL Studio, and sound design.',
      tags: ['Ableton', 'FL Studio', 'Sound Design']
    },
    {
      id: 6,
      name: 'Emily Parker',
      subject: 'Mathematics',
      rating: 4.8,
      reviews: 142,
      price: 42,
      image: '/api/placeholder/100/100',
      bio: 'Mathematics professor specializing in calculus, algebra, and advanced mathematical concepts.',
      tags: ['Calculus', 'Algebra', 'Advanced Math']
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

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const filteredInstructors = instructors.filter(instructor => {
    // Filter by search query
    const matchesSearch = searchQuery === '' || 
      instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      instructor.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      instructor.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Filter by category (simplified for demo)
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'technology' && instructor.subject === 'Web Development') ||
      (selectedCategory === 'creative' && instructor.subject === 'Digital Art') ||
      (selectedCategory === 'science' && instructor.subject === 'Data Science') ||
      (selectedCategory === 'languages' && instructor.subject === 'Language Learning') ||
      (selectedCategory === 'math' && instructor.subject === 'Mathematics');
    
    // Filter by price
    const matchesPrice = instructor.price >= priceRange[0] && instructor.price <= priceRange[1];
    
    // Filter by rating
    const matchesRating = instructor.rating >= ratingFilter;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Find Your Perfect Instructor</h1>
        <p>Browse our directory of expert instructors across various subjects and specialties</p>
      </div>

      {/* Search and Filters */}
      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <div className={styles.searchInputContainer}>
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search by name, subject, or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        <div className={styles.content}>
          {/* Filters Sidebar */}
          <div className={styles.filters}>
            <h3>Filters</h3>
            
            <div className={styles.filterGroup}>
              <h4>Category</h4>
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

            <div className={styles.filterGroup}>
              <h4>Skill Level</h4>
              <div className={styles.filterOptions}>
                {levels.map(level => (
                  <button
                    key={level.id}
                    className={`${styles.filterButton} ${selectedLevel === level.id ? styles.active : ''}`}
                    onClick={() => setSelectedLevel(level.id)}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h4>Price Range</h4>
              <div className={styles.rangeContainer}>
                <span>${priceRange[0]} - ${priceRange[1]}</span>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className={styles.rangeSlider}
                />
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h4>Minimum Rating</h4>
              <div className={styles.ratingFilter}>
                {[1, 2, 3, 4, 5].map(rating => (
                  <button
                    key={rating}
                    className={`${styles.ratingButton} ${ratingFilter === rating ? styles.active : ''}`}
                    onClick={() => setRatingFilter(ratingFilter === rating ? 0 : rating)}
                  >
                    {rating}+ ⭐
                  </button>
                ))}
              </div>
            </div>

            <button 
              className={styles.resetButton}
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLevel('all');
                setPriceRange([0, 200]);
                setRatingFilter(0);
              }}
            >
              Reset Filters
            </button>
          </div>

          {/* Results */}
          <div className={styles.results}>
            <div className={styles.resultsHeader}>
              <h2>{filteredInstructors.length} Instructors Found</h2>
              <div className={styles.sortOptions}>
                <span>Sort by:</span>
                <select className={styles.sortSelect}>
                  <option>Relevance</option>
                  <option>Rating (High to Low)</option>
                  <option>Price (Low to High)</option>
                  <option>Price (High to Low)</option>
                </select>
              </div>
            </div>

            {filteredInstructors.length === 0 ? (
              <div className={styles.noResults}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>No instructors found</h3>
                <p>Try adjusting your search criteria or filters</p>
              </div>
            ) : (
              <div className={styles.instructorGrid}>
                {filteredInstructors.map(instructor => (
                  <div key={instructor.id} className={styles.instructorCard}>
                    <div className={styles.cardImage}>
                      <div className={styles.imagePlaceholder}></div>
                      <div className={styles.cardBadge}>
                        ${instructor.price}/session
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.instructorHeader}>
                        <h3>{instructor.name}</h3>
                        <div className={styles.rating}>
                          <span>⭐ {instructor.rating}</span>
                          <span>({instructor.reviews} reviews)</span>
                        </div>
                      </div>
                      <p className={styles.subject}>{instructor.subject}</p>
                      <p className={styles.bio}>{instructor.bio}</p>
                      <div className={styles.tags}>
                        {instructor.tags.map((tag, index) => (
                          <span key={index} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.cardActions}>
                      <Link href={`/instructors/${instructor.id}`} className={styles.primaryButton}>
                        View Profile
                      </Link>
                      <button className={styles.secondaryButton}>
                        Message
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}