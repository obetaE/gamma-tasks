import Link from 'next/link';
import styles from './task.module.css';

// Mock data - replace with API call
const mockTask = {
  id: 1,
  title: 'Floral-Meets',
  dueDate: '2025-09-11',
  status: 'pending',
  description: 'Completely clone the rest of the project.',
  teacher: 'Mr. Chuka Obeta',
  subject: 'Full-Stack Development',
  instructions: `
    1. Review the project requirements and ensure you understand all features to be implemented.
    2. Set up your development environment with the necessary tools and libraries.
    3. Break down the project into smaller tasks and create a timeline for completion.
    4. Start coding, focusing on one feature at a time, and test thoroughly as you go.
  `,
  attachments: [
    // { name: 'Problem_Set_1.pdf', type: 'pdf', size: '2.4 MB' },
    // { name: 'Supplementary_Notes.docx', type: 'doc', size: '1.1 MB' }
     { name: 'Url to the site', type: 'URL', size: '125KB' }
  ]
};

export default function TaskPage({ params }) {
  const task = mockTask; // In real app, fetch based on params.id

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/tasks" className={styles.backLink}>
          &larr; Back to Tasks
        </Link>
        <h1>{task.title}</h1>
        <div className={styles.meta}>
          <span className={styles.subject}>{task.subject}</span>
          <span className={`${styles.status} ${styles[task.status]}`}>
            {task.status}
          </span>
          <span className={styles.dueDate}>Due: {task.dueDate}</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.main}>
          <section className={styles.section}>
            <h2>Description</h2>
            <p>{task.description}</p>
          </section>

          <section className={styles.section}>
            <h2>Instructions</h2>
            <pre className={styles.instructions}>{task.instructions}</pre>
          </section>

          <section className={styles.section}>
            <h2>Attachments</h2>
            <div className={styles.attachments}>
              {task.attachments.map((file, index) => (
                <div key={index} className={styles.file}>
                  <div className={styles.fileIcon}>
                    {file.type === 'pdf' ? '📄' : '📝'}
                  </div>
                  <div className={styles.fileInfo}>
                    <div className={styles.fileName}>{file.name}</div>
                    <div className={styles.fileSize}>{file.size}</div>
                  </div>
                  <Link href="/tasks/floral" className={styles.downloadBtn}>Follow Link</Link>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Submit Your Work</h2>
            <div className={styles.submission}>
              <p>Upload your completed task here</p>
              <div className={styles.uploadArea}>
                <input type="file" className={styles.fileInput} />
                <button className={styles.uploadBtn}>Upload File</button>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.teacherInfo}>
            <h3>Teacher</h3>
            <p>{task.teacher}</p>
            <button className={styles.contactBtn}>Contact Teacher</button>
          </div>

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>
              {task.status === 'completed' ? 'Reopen Task' : 'Mark as Complete'}
            </button>
            <button className={styles.secondaryBtn}>Request Extension</button>
            <button className={styles.secondaryBtn}>Ask for Help</button>
          </div>
        </div>
      </div>
    </div>
  );
}