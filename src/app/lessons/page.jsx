import React from 'react';
import Link from 'next/link';
import styles from './lessons.module.css';

// Mock data - replace with actual API calls
const mockLessons = [
   {
    id: 1,
    title: 'Brew Haven',
    date: '2025-09-11',
    duration: '1 week',
    teacher: 'Mr. Chuka Obeta',
    subject: 'FullStack Web-dev',
    description: 'We are going to clone this entire website',
    completed: false,
    link: 'brew'
  },
   {
    id: 2,
    title: 'Background-Properties',
    date: '2025-09-11',
    duration: '15-mins',
    teacher: 'Mr. Chuka Obeta',
    subject: 'FullStack Web-dev',
    description: 'This is a quick lesson on background-properties in CSS',
    completed: false,
    link: 'bg'
  },
];

export default function LessonsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Your Lessons</h1>
        <p>Access all your course materials and lessons</p>
      </div>

      <div className={styles.filters}>
        <button className={styles.filterBtn}>All Lessons</button>
        <button className={styles.filterBtn}>Completed</button>
        <button className={styles.filterBtn}>Upcoming</button>
      </div>

      <div className={styles.lessonGrid}>
        {mockLessons.map(lesson => (
          <div key={lesson.id} className={styles.lessonCard}>
            <div className={styles.lessonHeader}>
              <span className={styles.subject}>{lesson.subject}</span>
              <span className={`${styles.status} ${lesson.completed ? styles.completed : styles.pending}`}>
                {lesson.completed ? 'Completed' : 'Upcoming'}
              </span>
            </div>
            
            <h3 className={styles.lessonTitle}>{lesson.title}</h3>
            <p className={styles.lessonDescription}>{lesson.description}</p>
            
            <div className={styles.lessonMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Teacher:</span>
                <span>{lesson.teacher}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Date:</span>
                <span>{lesson.date}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Duration:</span>
                <span>{lesson.duration}</span>
              </div>
            </div>
            
            <div className={styles.lessonActions}>
              <Link href={`/lessons/${lesson.link}`} className={styles.viewBtn}>
                View Lesson
              </Link>
              {!lesson.completed && (
                <button className={styles.actionBtn}>
                  Mark as Complete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}