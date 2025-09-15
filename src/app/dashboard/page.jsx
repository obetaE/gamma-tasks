import React from 'react'
import styles from './dashboard.module.css'
import Link from "next/link"

export default function Dashboard() {
  // Sample data - replace with actual data from your backend
  const teacher = {
    name: "Mr. Chuka Obeta",
    subject: "FullStack Web Development",
    recentLessons: [
      { title: "Brew-Haven", date: "2025-09-5" },
      { title: "CSS Background Properties", date: "2025-09-11" }
    ],
    upcomingTasks: [
      { title: "Floral-Meets", dueDate: "2024-03-20" },
      // { title: "Midterm Project", dueDate: "2024-03-25" }
    ]
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.welcomeSection}>
        <h1>Welcome back, Chirstian!</h1>
        <p>You're enrolled in {teacher.subject} with {teacher.name}</p>
      </div>

      <div className={styles.dashboardGrid}>
        <div className={styles.card}>
          <h2>Recent Lessons</h2>
          <div className={styles.list}>
            {teacher.recentLessons.map((lesson, index) => (
              <div key={index} className={styles.listItem}>
                <Link href="/lessons">{lesson.title}</Link>
                <p>Posted: {lesson.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h2>Upcoming Tasks</h2>
          <div className={styles.list}>
            {teacher.upcomingTasks.map((task, index) => (
              <div key={index} className={styles.listItem}>
                <Link href="/tasks">{task.title}</Link>
                <p>Due: {task.dueDate}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h2>Quick Actions</h2>
          <div className={styles.actionButtons}>
            <button className={styles.primaryBtn}>Ask a Question</button>
            <button className={styles.secondaryBtn}>View Community</button>
            <button className={styles.secondaryBtn}>View All Lessons</button>
          </div>
        </div>

        <div className={styles.card}>
          <h2>Recent Discussions</h2>
          <div className={styles.discussions}>
            <p>No recent discussions. Join the community to get started!</p>
          </div>
        </div>
      </div>
    </div>
  )
}