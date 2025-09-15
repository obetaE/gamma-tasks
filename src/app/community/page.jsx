'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { 
  FaSearch, 
  FaPlus, 
  FaFilter, 
  FaComments, 
  FaQuestionCircle, 
  FaLightbulb,
  FaUser,
  FaClock,
  FaHeart,
  FaComment,
  FaShare,
  FaBook,
  FaUsers,
  FaBell
} from 'react-icons/fa';
import styles from './community.module.css';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostTitle, setNewPostTitle] = useState('');

  // Mock data - replace with actual API data
  const classrooms = [
    {
      id: 1,
      name: 'Advanced Web Development',
      instructor: 'Sarah Johnson',
      memberCount: 24
    },
    {
      id: 2,
      name: 'Data Science Fundamentals',
      instructor: 'Alex Rivera',
      memberCount: 32
    },
    {
      id: 3,
      name: 'Digital Painting Masterclass',
      instructor: 'Marcus Lee',
      memberCount: 18
    }
  ];

  // Mock community posts
  const communityPosts = [
    {
      id: 1,
      title: 'How to optimize React component rendering?',
      content: 'I\'m having performance issues with my React components. Any tips on how to optimize rendering for better performance?',
      author: 'Alex Johnson',
      classroom: 'Advanced Web Development',
      timestamp: '2 hours ago',
      likes: 12,
      comments: 8,
      type: 'question',
      tags: ['react', 'performance', 'web development']
    },
    {
      id: 2,
      title: 'Completed my first data visualization project!',
      content: 'Just finished my first project using D3.js and wanted to share it with everyone. The instructor provided great feedback!',
      author: 'Maria Rodriguez',
      classroom: 'Data Science Fundamentals',
      timestamp: '5 hours ago',
      likes: 24,
      comments: 5,
      type: 'achievement',
      tags: ['data visualization', 'd3.js', 'project']
    },
    {
      id: 3,
      title: 'Tips for color theory in digital art',
      content: 'I\'ve been struggling with color combinations in my digital paintings. Does anyone have good resources or tips for understanding color theory better?',
      author: 'James Wilson',
      classroom: 'Digital Painting Masterclass',
      timestamp: '1 day ago',
      likes: 18,
      comments: 12,
      type: 'question',
      tags: ['color theory', 'digital art', 'tips']
    },
    {
      id: 4,
      title: 'Study group for upcoming exam',
      content: 'Is anyone interested in forming a study group for the upcoming web development exam? We could meet virtually and review concepts together.',
      author: 'Sarah Chen',
      classroom: 'Advanced Web Development',
      timestamp: '2 days ago',
      likes: 15,
      comments: 6,
      type: 'collaboration',
      tags: ['study group', 'exam', 'web development']
    }
  ];

  // Mock community members
  const topContributors = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Student',
      contributions: 42,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      role: 'Student',
      contributions: 38,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 3,
      name: 'Dr. Sarah Johnson',
      role: 'Instructor',
      contributions: 56,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Student',
      contributions: 29,
      avatar: '/api/placeholder/40/40'
    }
  ];

  const handleCreatePost = (e) => {
    e.preventDefault();
    // Handle post creation logic here
    console.log('Creating post:', { title: newPostTitle, content: newPostContent });
    // Reset form
    setNewPostTitle('');
    setNewPostContent('');
    setShowNewPostForm(false);
    // In a real app, you would send this data to your API
  };

  const filteredPosts = activeTab === 'all' 
    ? communityPosts 
    : communityPosts.filter(post => post.type === activeTab);

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Community Hub</h1>
        <p>Connect with your classmates, ask questions, and share knowledge</p>
      </div>

      <div className={styles.content}>
        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Search and Filter Bar */}
          <div className={styles.searchBar}>
            <div className={styles.searchContainer}>
              <FaSearch className={styles.searchIcon} />
              <input 
                type="text" 
                placeholder="Search discussions, questions, or members..." 
                className={styles.searchInput}
              />
            </div>
            <div className={styles.filterButtons}>
              <button 
                className={`${styles.filterButton} ${activeTab === 'all' ? styles.active : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All
              </button>
              <button 
                className={`${styles.filterButton} ${activeTab === 'question' ? styles.active : ''}`}
                onClick={() => setActiveTab('question')}
              >
                Questions
              </button>
              <button 
                className={`${styles.filterButton} ${activeTab === 'achievement' ? styles.active : ''}`}
                onClick={() => setActiveTab('achievement')}
              >
                Achievements
              </button>
              <button 
                className={`${styles.filterButton} ${activeTab === 'collaboration' ? styles.active : ''}`}
                onClick={() => setActiveTab('collaboration')}
              >
                Collaboration
              </button>
            </div>
            <button 
              className={styles.newPostButton}
              onClick={() => setShowNewPostForm(true)}
            >
              <FaPlus /> New Post
            </button>
          </div>

          {/* New Post Form */}
          {showNewPostForm && (
            <div className={styles.newPostForm}>
              <h3>Create New Post</h3>
              <form onSubmit={handleCreatePost}>
                <div className={styles.formGroup}>
                  <label htmlFor="postTitle">Title</label>
                  <input
                    type="text"
                    id="postTitle"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    placeholder="Enter a title for your post"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="postContent">Content</label>
                  <textarea
                    id="postContent"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="What would you like to share with the community?"
                    rows="5"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Select Classroom</label>
                  <select>
                    {classrooms.map(classroom => (
                      <option key={classroom.id} value={classroom.id}>
                        {classroom.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.formActions}>
                  <button 
                    type="button" 
                    className={styles.cancelButton}
                    onClick={() => setShowNewPostForm(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    Post to Community
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Community Posts */}
          <div className={styles.postsContainer}>
            <h2>Community Discussions</h2>
            {filteredPosts.length === 0 ? (
              <div className={styles.noPosts}>
                <FaComments size={48} />
                <p>No posts found. Be the first to start a discussion!</p>
              </div>
            ) : (
              <div className={styles.postsList}>
                {filteredPosts.map(post => (
                  <div key={post.id} className={styles.postCard}>
                    <div className={styles.postHeader}>
                      <div className={styles.postType}>
                        {post.type === 'question' && <FaQuestionCircle />}
                        {post.type === 'achievement' && <FaLightbulb />}
                        {post.type === 'collaboration' && <FaUsers />}
                        <span>{post.type}</span>
                      </div>
                      <div className={styles.postMeta}>
                        <span className={styles.author}>
                          <FaUser size={12} /> {post.author}
                        </span>
                        <span className={styles.timestamp}>
                          <FaClock size={12} /> {post.timestamp}
                        </span>
                        <span className={styles.classroom}>
                          <FaBook size={12} /> {post.classroom}
                        </span>
                      </div>
                    </div>
                    <div className={styles.postContent}>
                      <h3>{post.title}</h3>
                      <p>{post.content}</p>
                    </div>
                    <div className={styles.postTags}>
                      {post.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <div className={styles.postActions}>
                      <button className={styles.actionButton}>
                        <FaHeart /> <span>{post.likes}</span>
                      </button>
                      <button className={styles.actionButton}>
                        <FaComment /> <span>{post.comments}</span>
                      </button>
                      <button className={styles.actionButton}>
                        <FaShare /> <span>Share</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          {/* Your Classrooms */}
          <div className={styles.sidebarSection}>
            <h3>Your Classrooms</h3>
            <div className={styles.classroomsList}>
              {classrooms.map(classroom => (
                <div key={classroom.id} className={styles.classroomItem}>
                  <div className={styles.classroomInfo}>
                    <h4>{classroom.name}</h4>
                    <p>Instructor: {classroom.instructor}</p>
                    <span className={styles.memberCount}>
                      <FaUsers size={12} /> {classroom.memberCount} members
                    </span>
                  </div>
                  <button className={styles.viewButton}>
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Top Contributors */}
          <div className={styles.sidebarSection}>
            <h3>Top Contributors</h3>
            <div className={styles.contributorsList}>
              {topContributors.map(contributor => (
                <div key={contributor.id} className={styles.contributorItem}>
                  <div className={styles.contributorAvatar}>
                    <div className={styles.avatarPlaceholder}></div>
                  </div>
                  <div className={styles.contributorInfo}>
                    <h4>{contributor.name}</h4>
                    <p>{contributor.role}</p>
                    <span className={styles.contributions}>
                      {contributor.contributions} contributions
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className={styles.sidebarSection}>
            <h3>Community Guidelines</h3>
            <div className={styles.guidelines}>
              <p>• Be respectful and inclusive</p>
              <p>• Keep discussions relevant to learning</p>
              <p>• Provide helpful, constructive feedback</p>
              <p>• Report any inappropriate content</p>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className={styles.sidebarSection}>
            <h3>Upcoming Events</h3>
            <div className={styles.events}>
              <div className={styles.eventItem}>
                <div className={styles.eventDate}>
                  <span>APR</span>
                  <span>25</span>
                </div>
                <div className={styles.eventInfo}>
                  <h4>Web Dev Q&A Session</h4>
                  <p>With Sarah Johnson • 6:00 PM</p>
                </div>
                <button className={styles.reminderButton}>
                  <FaBell />
                </button>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDate}>
                  <span>APR</span>
                  <span>28</span>
                </div>
                <div className={styles.eventInfo}>
                  <h4>Data Science Workshop</h4>
                  <p>With Alex Rivera • 4:00 PM</p>
                </div>
                <button className={styles.reminderButton}>
                  <FaBell />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}