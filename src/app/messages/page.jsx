'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { 
  FaSearch, 
  FaPaperPlane, 
  FaEllipsisV, 
  FaPaperclip,
  FaSmile,
  FaCircle,
  FaCheckDouble,
  FaClock,
  FaUser,
  FaArrowLeft
} from 'react-icons/fa';
import styles from './messages.module.css';

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState(1);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock conversations - replace with actual API data
  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Web Development Instructor',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Thanks for your question! I can help with that.',
      timestamp: '2 hours ago',
      unread: 3,
      online: true,
      messages: [
        {
          id: 1,
          sender: 'Sarah Johnson',
          content: 'Hi Alex! How can I help you today?',
          timestamp: '2024-04-15T10:30:00',
          isOwn: false
        },
        {
          id: 2,
          sender: 'You',
          content: 'Hi Sarah, I\'m having trouble with the React hooks assignment.',
          timestamp: '2024-04-15T10:32:00',
          isOwn: true
        },
        {
          id: 3,
          sender: 'Sarah Johnson',
          content: 'Which part specifically are you struggling with?',
          timestamp: '2024-04-15T10:35:00',
          isOwn: false
        },
        {
          id: 4,
          sender: 'You',
          content: 'I can\'t get the useEffect dependency array to work correctly.',
          timestamp: '2024-04-15T10:40:00',
          isOwn: true
        },
        {
          id: 5,
          sender: 'Sarah Johnson',
          content: 'Thanks for your question! I can help with that.',
          timestamp: '2024-04-15T12:15:00',
          isOwn: false
        }
      ]
    },
    {
      id: 2,
      name: 'Alex Rivera',
      role: 'Data Science Instructor',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'The assignment is due next week.',
      timestamp: '1 day ago',
      unread: 0,
      online: false,
      messages: [
        {
          id: 1,
          sender: 'Alex Rivera',
          content: 'Hello! Do you have any questions about the data visualization project?',
          timestamp: '2024-04-14T14:20:00',
          isOwn: false
        },
        {
          id: 2,
          sender: 'You',
          content: 'Yes, I was wondering about the deadline.',
          timestamp: '2024-04-14T14:25:00',
          isOwn: true
        },
        {
          id: 3,
          sender: 'Alex Rivera',
          content: 'The assignment is due next week.',
          timestamp: '2024-04-14T14:30:00',
          isOwn: false
        }
      ]
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      role: 'Student - Web Development',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Did you understand the last lesson?',
      timestamp: '3 days ago',
      unread: 0,
      online: true,
      messages: [
        {
          id: 1,
          sender: 'Maria Rodriguez',
          content: 'Hey! Did you understand the last lesson about React context?',
          timestamp: '2024-04-13T16:45:00',
          isOwn: false
        },
        {
          id: 2,
          sender: 'You',
          content: 'Most of it, but I\'m still confused about providers.',
          timestamp: '2024-04-13T16:50:00',
          isOwn: true
        },
        {
          id: 3,
          sender: 'Maria Rodriguez',
          content: 'Same here. Maybe we can study together?',
          timestamp: '2024-04-13T16:55:00',
          isOwn: false
        },
        {
          id: 4,
          sender: 'You',
          content: 'That would be great! When are you free?',
          timestamp: '2024-04-13T17:00:00',
          isOwn: true
        },
        {
          id: 5,
          sender: 'Maria Rodriguez',
          content: 'Did you understand the last lesson?',
          timestamp: '2024-04-13T17:05:00',
          isOwn: false
        }
      ]
    },
    {
      id: 4,
      name: 'Study Group - Web Dev',
      role: 'Group Chat',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'James: I found a great resource for hooks!',
      timestamp: '5 days ago',
      unread: 0,
      online: true,
      isGroup: true,
      members: 5,
      messages: [
        {
          id: 1,
          sender: 'James Wilson',
          content: 'Has everyone started the new project?',
          timestamp: '2024-04-11T09:15:00',
          isOwn: false
        },
        {
          id: 2,
          sender: 'You',
          content: 'I\'m just getting started. Any tips?',
          timestamp: '2024-04-11T09:20:00',
          isOwn: true
        },
        {
          id: 3,
          sender: 'Sarah Chen',
          content: 'The documentation is really helpful for this one.',
          timestamp: '2024-04-11T09:25:00',
          isOwn: false
        },
        {
          id: 4,
          sender: 'James Wilson',
          content: 'I found a great resource for hooks!',
          timestamp: '2024-04-11T09:30:00',
          isOwn: false
        }
      ]
    }
  ];

  const filteredConversations = conversations.filter(conv => 
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeConv = conversations.find(conv => conv.id === activeConversation);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    
    // In a real app, you would send the message to your API
    console.log('Sending message:', messageInput);
    setMessageInput('');
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Messages</h1>
        <p>Connect with instructors and classmates</p>
      </div>

      <div className={styles.content}>
        {/* Conversations Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.searchBar}>
            <div className={styles.searchContainer}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>

          <div className={styles.conversationsList}>
            {filteredConversations.map(conversation => (
              <div
                key={conversation.id}
                className={`${styles.conversationItem} ${activeConversation === conversation.id ? styles.active : ''}`}
                onClick={() => setActiveConversation(conversation.id)}
              >
                <div className={styles.avatar}>
                  <div className={styles.avatarPlaceholder}></div>
                  {conversation.online && <FaCircle className={styles.onlineIndicator} />}
                </div>
                <div className={styles.conversationInfo}>
                  <div className={styles.conversationHeader}>
                    <h3>{conversation.name}</h3>
                    <span className={styles.timestamp}>{conversation.timestamp}</span>
                  </div>
                  <div className={styles.conversationDetails}>
                    <p className={styles.lastMessage}>
                      {conversation.lastMessage}
                    </p>
                    {conversation.unread > 0 && (
                      <span className={styles.unreadBadge}>{conversation.unread}</span>
                    )}
                  </div>
                  <div className={styles.role}>
                    {conversation.isGroup ? (
                      <span>{conversation.members} members</span>
                    ) : (
                      <span>{conversation.role}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredConversations.length === 0 && (
            <div className={styles.noConversations}>
              <p>No conversations found</p>
            </div>
          )}
        </div>

        {/* Chat Area */}
        <div className={styles.chatArea}>
          {activeConv ? (
            <>
              <div className={styles.chatHeader}>
                <div className={styles.chatInfo}>
                  <div className={styles.chatAvatar}>
                    <div className={styles.avatarPlaceholder}></div>
                    {activeConv.online && <FaCircle className={styles.onlineIndicator} />}
                  </div>
                  <div className={styles.chatDetails}>
                    <h2>{activeConv.name}</h2>
                    <p>
                      {activeConv.isGroup ? (
                        <span>{activeConv.members} members</span>
                      ) : (
                        <span>{activeConv.role} • {activeConv.online ? 'Online' : 'Offline'}</span>
                      )}
                    </p>
                  </div>
                </div>
                <div className={styles.chatActions}>
                  <button className={styles.actionButton}>
                    <FaEllipsisV />
                  </button>
                </div>
              </div>

              <div className={styles.messagesContainer}>
                <div className={styles.messagesList}>
                  {activeConv.messages.map(message => (
                    <div
                      key={message.id}
                      className={`${styles.message} ${message.isOwn ? styles.ownMessage : ''}`}
                    >
                      <div className={styles.messageContent}>
                        {!message.isOwn && (
                          <div className={styles.senderName}>{message.sender}</div>
                        )}
                        <div className={styles.messageBubble}>
                          <p>{message.content}</p>
                          <div className={styles.messageTime}>
                            {formatTime(message.timestamp)}
                            {message.isOwn && <FaCheckDouble className={styles.readReceipt} />}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.messageInputContainer}>
                <form onSubmit={handleSendMessage} className={styles.messageForm}>
                  <div className={styles.inputContainer}>
                    <button type="button" className={styles.attachmentButton}>
                      <FaPaperclip />
                    </button>
                    <input
                      type="text"
                      placeholder="Type your message..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      className={styles.messageInput}
                    />
                    <button type="button" className={styles.emojiButton}>
                      <FaSmile />
                    </button>
                  </div>
                  <button
                    type="submit"
                    className={styles.sendButton}
                    disabled={!messageInput.trim()}
                  >
                    <FaPaperPlane />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className={styles.noChatSelected}>
              <div className={styles.noChatContent}>
                <FaUser size={48} />
                <h2>Select a conversation</h2>
                <p>Choose a conversation from the list to start messaging</p>
                <Link href="/search" className={styles.findInstructorsButton}>
                  Find Instructors
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}