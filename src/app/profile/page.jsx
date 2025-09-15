'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { 
  FaHome, 
  FaBook, 
  FaChartLine, 
  FaCog, 
  FaEdit,
  FaCheckCircle,
  FaTasks,
  FaGraduationCap,
  FaUserFriends,
  FaTrophy,
  FaCertificate,
  FaCalendarAlt
} from 'react-icons/fa';
import styles from './profile.module.css';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data - replace with actual user data from context/API
  const [userData, setUserData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    bio: 'Passionate learner interested in web development and data science.',
    avatar: '/api/placeholder/150/150',
    joinedDate: 'January 2024'
  });

  // Mock classrooms data - replace with actual API data
  const classrooms = [
    {
      id: 1,
      name: 'Advanced Web Development',
      instructor: 'Sarah Johnson',
      progress: 75,
      nextTask: 'Project: E-commerce Dashboard',
      dueDate: '2024-04-20'
    },
    {
      id: 2,
      name: 'Data Science Fundamentals',
      instructor: 'Alex Rivera',
      progress: 45,
      nextTask: 'Assignment: Data Visualization',
      dueDate: '2024-04-18'
    },
    {
      id: 3,
      name: 'Digital Painting Masterclass',
      instructor: 'Marcus Lee',
      progress: 30,
      nextTask: 'Exercise: Color Theory',
      dueDate: '2024-04-22'
    }
  ];

  // Mock user stats
  const userStats = {
    completedLessons: 24,
    completedTasks: 18,
    averageGrade: 'A-',
    activeClassrooms: 3
  };

  // Mock recent activity
  const recentActivity = [
    {
      id: 1,
      type: 'completed',
      title: 'Completed Lesson: React Hooks',
      date: '2 hours ago',
      classroom: 'Advanced Web Development'
    },
    {
      id: 2,
      type: 'submitted',
      title: 'Submitted Assignment: Data Analysis',
      date: '1 day ago',
      classroom: 'Data Science Fundamentals'
    },
    {
      id: 3,
      type: 'joined',
      title: 'Joined Classroom: Digital Painting',
      date: '3 days ago',
      classroom: 'Digital Painting Masterclass'
    }
  ];

  // Mock achievements
  const achievements = [
    {
      id: 1,
      title: 'Fast Learner',
      description: 'Completed 5 lessons in one week',
      icon: <FaTrophy />,
      earned: true
    },
    {
      id: 2,
      title: 'Task Master',
      description: 'Submitted 10 assignments on time',
      icon: <FaTasks />,
      earned: true
    },
    {
      id: 3,
      title: 'Course Completer',
      description: 'Finished your first course',
      icon: <FaCertificate />,
      earned: false
    }
  ];

  const handleSaveProfile = (e) => {
    e.preventDefault();
    // Handle profile save logic here
    setIsEditing(false);
    // In a real app, you would update the user data via API
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Your Profile</h1>
        <p>Manage your personal information and classroom preferences</p>
      </div>

      <div className={styles.content}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.profileSummary}>
            <div className={styles.avatar}>
              <div className={styles.avatarPlaceholder}></div>
              <button className={styles.editAvatarBtn}>
                <FaEdit size={12} />
              </button>
            </div>
            <h2>{userData.name}</h2>
            <p>{userData.email}</p>
            <div className={styles.memberSince}>
              Member since {userData.joinedDate}
            </div>
          </div>

          <nav className={styles.sidebarNav}>
            <button 
              className={`${styles.navItem} ${activeTab === 'overview' ? styles.active : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <FaHome size={18} />
              Overview
            </button>
            <button 
              className={`${styles.navItem} ${activeTab === 'classrooms' ? styles.active : ''}`}
              onClick={() => setActiveTab('classrooms')}
            >
              <FaBook size={18} />
              Classrooms
            </button>
            <button 
              className={`${styles.navItem} ${activeTab === 'progress' ? styles.active : ''}`}
              onClick={() => setActiveTab('progress')}
            >
              <FaChartLine size={18} />
              Progress
            </button>
            <button 
              className={`${styles.navItem} ${activeTab === 'settings' ? styles.active : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <FaCog size={18} />
              Settings
            </button>
            <button 
              className={`${styles.navItem} ${activeTab === 'instructor' ? styles.active : ''}`}
              onClick={() => setActiveTab('instructor')}
            >
              <FaCog size={18} />
              Become an Instructor
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className={styles.tabContent}>
              <h2>Dashboard Overview</h2>
              
              {/* Stats Grid */}
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <FaCheckCircle size={24} />
                  </div>
                  <div className={styles.statValue}>{userStats.completedLessons}</div>
                  <div className={styles.statLabel}>Completed Lessons</div>
                </div>
                
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <FaTasks size={24} />
                  </div>
                  <div className={styles.statValue}>{userStats.completedTasks}</div>
                  <div className={styles.statLabel}>Completed Tasks</div>
                </div>
                
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <FaGraduationCap size={24} />
                  </div>
                  <div className={styles.statValue}>{userStats.averageGrade}</div>
                  <div className={styles.statLabel}>Average Grade</div>
                </div>
                
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <FaUserFriends size={24} />
                  </div>
                  <div className={styles.statValue}>{userStats.activeClassrooms}</div>
                  <div className={styles.statLabel}>Active Classrooms</div>
                </div>
              </div>
              
              {/* Recent Activity */}
              <div className={styles.recentActivity}>
                <h3>Recent Activity</h3>
                <div className={styles.activityList}>
                  {recentActivity.map(activity => (
                    <div key={activity.id} className={styles.activityItem}>
                      <div className={styles.activityIcon}>
                        {activity.type === 'completed' && <FaCheckCircle size={20} />}
                        {activity.type === 'submitted' && <FaTasks size={20} />}
                        {activity.type === 'joined' && <FaUserFriends size={20} />}
                      </div>
                      <div className={styles.activityContent}>
                        <div className={styles.activityTitle}>{activity.title}</div>
                        <div className={styles.activityClassroom}>{activity.classroom}</div>
                        <div className={styles.activityDate}>{activity.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Classrooms Tab */}
          {activeTab === 'classrooms' && (
            <div className={styles.tabContent}>
              <h2>Your Classrooms</h2>
              <div className={styles.classroomGrid}>
                {classrooms.map(classroom => (
                  <div key={classroom.id} className={styles.classroomCard}>
                    <div className={styles.classroomHeader}>
                      <h3>{classroom.name}</h3>
                      <p className={styles.instructor}>by {classroom.instructor}</p>
                    </div>
                    <div className={styles.classroomContent}>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill} 
                          style={{ width: `${classroom.progress}%` }}
                        ></div>
                      </div>
                      <div className={styles.progressText}>
                        <span>Progress</span>
                        <span>{classroom.progress}%</span>
                      </div>
                      <div className={styles.nextTask}>
                        <strong>Next Task:</strong> {classroom.nextTask}
                      </div>
                      <div className={styles.dueDate}>
                        <FaCalendarAlt size={14} /> Due: {classroom.dueDate}
                      </div>
                    </div>
                    <div className={styles.classroomActions}>
                      <Link href={`/classrooms/${classroom.id}`} className={styles.primaryButton}>
                        Continue Learning
                      </Link>
                      <button className={styles.secondaryButton}>
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Progress Tab */}
          {activeTab === 'progress' && (
            <div className={styles.tabContent}>
              <h2>Your Learning Progress</h2>
              
              <div className={styles.progressSection}>
                <h3>Overall Progress</h3>
                <div className={styles.chartContainer}>
                  <div className={styles.chartPlaceholder}>
                    <FaChartLine size={48} />
                    <p>Progress charts would be displayed here</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.progressSection}>
                <h3>Achievements</h3>
                <div className={styles.achievements}>
                  {achievements.map(achievement => (
                    <div key={achievement.id} className={`${styles.achievement} ${achievement.earned ? styles.earned : styles.locked}`}>
                      <div className={styles.achievementIcon}>
                        {achievement.icon}
                      </div>
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                      <div className={styles.achievementStatus}>
                        {achievement.earned ? 'Earned' : 'Locked'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className={styles.tabContent}>
              <h2>Profile Settings</h2>
              
              <form onSubmit={handleSaveProfile} className={styles.settingsForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={userData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                
                <div className={styles.formActions}>
                  {isEditing ? (
                    <>
                      <button 
                        type="button" 
                        className={styles.cancelButton}
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </button>
                      <button type="submit" className={styles.saveButton}>
                        Save Changes
                      </button>
                    </>
                  ) : (
                    <button 
                      type="button" 
                      className={styles.primaryButton}
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Profile
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}