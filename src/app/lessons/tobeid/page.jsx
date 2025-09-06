import Link from 'next/link';
import styles from './lesson.module.css';

// Mock data - replace with API call
const mockLesson = {
  id: 1,
  title: 'Introduction to Calculus',
  date: '2024-04-10',
  duration: '45 min',
  teacher: 'Dr. Sarah Johnson',
  subject: 'Mathematics',
  description: 'Learn the fundamentals of calculus including limits and derivatives',
  completed: true,
  content: `
    <h2>What is Calculus?</h2>
    <p>Calculus is the mathematical study of continuous change, in the same way that geometry is the study of shape and algebra is the study of generalizations of arithmetic operations.</p>
    
    <h2>Main Concepts</h2>
    <ul>
      <li>Limits</li>
      <li>Derivatives</li>
      <li>Integrals</li>
    </ul>
    
    <h2>Applications</h2>
    <p>Calculus has widespread applications in science, economics, and engineering and can solve many problems that algebra alone cannot.</p>
  `,
  videoUrl: 'https://example.com/video/calculus-intro',
  attachments: [
    { name: 'Lecture_Slides.pdf', type: 'pdf', size: '3.2 MB' },
    { name: 'Practice_Problems.docx', type: 'doc', size: '1.8 MB' },
    { name: 'Additional_Resources.zip', type: 'zip', size: '5.4 MB' }
  ]
};

export default function LessonPage({ params }) {
  const lesson = mockLesson; // In real app, fetch based on params.id

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/lessons" className={styles.backLink}>
          &larr; Back to Lessons
        </Link>
        <h1>{lesson.title}</h1>
        <div className={styles.meta}>
          <span className={styles.subject}>{lesson.subject}</span>
          <span className={styles.date}>{lesson.date}</span>
          <span className={styles.duration}>{lesson.duration}</span>
          <span className={`${styles.status} ${lesson.completed ? styles.completed : styles.pending}`}>
            {lesson.completed ? 'Completed' : 'Upcoming'}
          </span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.main}>
          <section className={styles.section}>
            <h2>Description</h2>
            <p>{lesson.description}</p>
          </section>

          {lesson.videoUrl && (
            <section className={styles.section}>
              <h2>Video Lesson</h2>
              <div className={styles.videoContainer}>
                <div className={styles.videoPlaceholder}>
                  <span>Video Player Placeholder</span>
                  <p>URL: {lesson.videoUrl}</p>
                </div>
              </div>
            </section>
          )}

          <section className={styles.section}>
            <h2>Lesson Content</h2>
            <div 
              className={styles.lessonContent}
              dangerouslySetInnerHTML={{ __html: lesson.content }}
            />
          </section>

          <section className={styles.section}>
            <h2>Attachments</h2>
            <div className={styles.attachments}>
              {lesson.attachments.map((file, index) => (
                <div key={index} className={styles.file}>
                  <div className={styles.fileIcon}>
                    {file.type === 'pdf' ? '📄' : file.type === 'doc' ? '📝' : '📦'}
                  </div>
                  <div className={styles.fileInfo}>
                    <div className={styles.fileName}>{file.name}</div>
                    <div className={styles.fileSize}>{file.size}</div>
                  </div>
                  <button className={styles.downloadBtn}>Download</button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.teacherInfo}>
            <h3>Teacher</h3>
            <p>{lesson.teacher}</p>
            <button className={styles.contactBtn}>Ask Question</button>
          </div>

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>
              {lesson.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
            <button className={styles.secondaryBtn}>Take Notes</button>
            <button className={styles.secondaryBtn}>Share Lesson</button>
          </div>

          <div className={styles.relatedLessons}>
            <h3>Related Lessons</h3>
            <ul>
              <li><Link href="#">Derivatives and Applications</Link></li>
              <li><Link href="#">Integration Techniques</Link></li>
              <li><Link href="#">Differential Equations</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}