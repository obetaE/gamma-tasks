import React from 'react';
import Link from 'next/link';
import styles from './tasks.module.css';

// Mock data - replace with actual API calls
const mockTasks = [
// {
//     id: 1,
//     title: 'Calculus Problem Set 1',
//     dueDate: '2024-04-15',
//     status: 'pending',
//     description: 'Complete problems 1-10 from chapter 3',
//     teacher: 'Dr. Sarah Johnson',
//     subject: 'Mathematics'
//   },
//   {
//     id: 2,
//     title: 'Physics Lab Report',
//     dueDate: '2024-04-18',
//     status: 'completed',
//     description: 'Write a report on the pendulum experiment',
//     teacher: 'Prof. Robert Chen',
//     subject: 'Physics'
//   },
//   {
//     id: 3,
//     title: 'Literature Essay',
//     dueDate: '2024-04-20',
//     status: 'pending',
//     description: 'Analyze the symbolism in The Great Gatsby',
//     teacher: 'Dr. Emily Williams',
//     subject: 'Literature'
//   } ,

  {
    id: 4,
    title: 'Floral-Meets',
    dueDate: '2024-09-11',
    status: 'pending',
    description: 'Finish the cloning of the rest of the project.',
    teacher: 'Mr. Chuka  Obeta',
    subject: 'Full-Stack Development'
  },
];

export default function TasksPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Your Tasks</h1>
        <p>View and manage all your assigned tasks</p>
      </div>

      <div className={styles.filters}>
        <button className={styles.filterBtn}>All</button>
        <button className={styles.filterBtn}>Pending</button>
        <button className={styles.filterBtn}>Completed</button>
        <button className={styles.filterBtn}>Overdue</button>
      </div>

      <div className={styles.taskGrid}>
        {mockTasks.map((task) => (
          <div key={task.id} className={styles.taskCard}>
            <div className={styles.taskHeader}>
              <span className={`${styles.status} ${styles[task.status]}`}>
                {task.status}
              </span>
              <span className={styles.subject}>{task.subject}</span>
            </div>
            
            <h3 className={styles.taskTitle}>{task.title}</h3>
            <p className={styles.taskDescription}>{task.description}</p>
            
            <div className={styles.taskMeta}>
              <div className={styles.teacher}>
                <span>Teacher: {task.teacher}</span>
              </div>
              <div className={styles.dueDate}>
                <span>Due: {task.dueDate}</span>
              </div>
            </div>
            
            <div className={styles.taskActions}>
              <Link href={`/tasks/${task.id}`} className={styles.viewBtn}>
                View Details
              </Link>
              <button className={styles.actionBtn}>
                {task.status === 'completed' ? 'Reopen' : 'Mark Complete'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}