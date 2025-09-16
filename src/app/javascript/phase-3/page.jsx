"use client";
import React, { useState, useEffect, useRef, useContext, createContext } from 'react';
import Link from "next/link"
import styles from './ReactHooksAdvancedJS.module.css';

// Create context for the useContext example
const ThemeContext = createContext('light');
const UserContext = createContext();

export default function ReactHooksAdvancedJS() {
  const [activeTab, setActiveTab] = useState('useEffect');
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [githubUsers, setGithubUsers] = useState([]);
  const [theme, setTheme] = useState('light');
  const [userName, setUserName] = useState('Chuka');

  // useEffect example - Log count changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  // useEffect example - Fetch posts
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data.slice(0, 5));
      } catch (err) {
        console.error(err);
      }
    }
    fetchPosts();
  }, []);

  // useRef example
  const countRef = useRef(0);
  const inputRef = useRef();

  const incrementRef = () => {
    countRef.current += 1;
    console.log("Ref count:", countRef.current);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  // Fetch GitHub users for async example
  const fetchGithubUsers = async () => {
    try {
      const res = await fetch("https://api.github.com/users");
      const data = await res.json();
      setGithubUsers(data.slice(0, 5));
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className={`${styles.container} ${theme === 'dark' ? styles.dark : ''}`}>
      <header className={styles.header}>
        <h1>React Hooks & Advanced JS in Next.js</h1>
        <p>Deep Dive into React-style JavaScript tools for Next.js apps</p>
      </header>

      <div className={styles.tabs}>
        <button 
          className={activeTab === 'useEffect' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('useEffect')}
        >
          useEffect
        </button>
        <button 
          className={activeTab === 'useRef' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('useRef')}
        >
          useRef
        </button>
        <button 
          className={activeTab === 'useContext' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('useContext')}
        >
          useContext
        </button>
        <button 
          className={activeTab === 'async' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('async')}
        >
          Async JavaScript
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'useEffect' && (
          <div className={styles.section}>
            <h2>1. useEffect Hook</h2>
            
            <h3>What is it?</h3>
            <ul className={styles.list}>
              <li>A React hook for running <strong>side effects</strong> → things that happen <em>outside</em> rendering</li>
              <li>Examples: fetching data, updating <code>document.title</code>, logging, timers</li>
            </ul>

            <div className={styles.codeExample}>
              <h4>Basic example:</h4>
              <div className={styles.code}>
{`import { useEffect, useState } from "react";

export default function Logger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // dependency array

  return <button onClick={() => setCount(count + 1)}>+</button>;
}`}
              </div>
              <div className={styles.liveExample}>
                <h4>Live Example:</h4>
                <p>Check your browser console to see the effect in action</p>
                <div className={styles.counterDemo}>
                  <p>Count: {count}</p>
                  <button 
                    className={styles.button}
                    onClick={() => setCount(count + 1)}
                  >
                    Increment
                  </button>
                </div>
              </div>
            </div>

            <h3>Dependency Array:</h3>
            <ul className={styles.list}>
              <li><code>[]</code> → run once (on mount)</li>
              <li><code>[count]</code> → run whenever <code>count</code> changes</li>
            </ul>

            <h3>Cleanup functions:</h3>
            <div className={styles.code}>
{`useEffect(() => {
  const timer = setInterval(() => console.log("Tick"), 1000);
  return () => clearInterval(timer); // cleanup when unmounted
}, []);`}
            </div>
            
            <div className={styles.tip}>
              ✅ Prevents memory leaks.
            </div>
          </div>
        )}

        {activeTab === 'useRef' && (
          <div className={styles.section}>
            <h2>2. useRef Hook</h2>
            
            <h3>What is it?</h3>
            <ul className={styles.list}>
              <li>A hook to store values across renders <strong>without re-rendering</strong></li>
              <li>Two main uses:
                <ol>
                  <li>Store values (like instance variables)</li>
                  <li>Access DOM elements directly</li>
                </ol>
              </li>
            </ul>

            <h3>Storing values:</h3>
            <div className={styles.code}>
{`import { useRef } from "react";

export default function Counter() {
  const countRef = useRef(0);

  function increment() {
    countRef.current += 1;
    console.log("Ref count:", countRef.current);
  }

  return <button onClick={increment}>Click</button>;
}`}
            </div>
            <div className={styles.liveExample}>
              <h4>Live Example:</h4>
              <p>Check your browser console to see the ref value changing without re-renders</p>
              <div className={styles.refDemo}>
                <p>Component render count: {count}</p>
                <button 
                  className={styles.button}
                  onClick={incrementRef}
                >
                  Increment Ref
                </button>
                <button 
                  className={styles.button}
                  onClick={() => setCount(count + 1)}
                >
                  Re-render Component
                </button>
              </div>
            </div>

            <h3>Accessing DOM:</h3>
            <div className={styles.code}>
{`function InputFocus() {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}`}
            </div>
            <div className={styles.liveExample}>
              <h4>Live Example:</h4>
              <div className={styles.domDemo}>
                <input 
                  ref={inputRef}
                  type="text" 
                  placeholder="Click the button to focus" 
                  className={styles.input}
                />
                <button 
                  className={styles.button}
                  onClick={focusInput}
                >
                  Focus Input
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'useContext' && (
          <div className={styles.section}>
            <h2>3. useContext Hook</h2>
            
            <h3>Problem:</h3>
            <p>Passing props through many levels = <em>prop drilling</em>.</p>

            <h3>Solution:</h3>
            <p><code>useContext</code> provides data globally.</p>

            <div className={styles.code}>
{`import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Child() {
  const theme = useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}`}
            </div>

            <div className={styles.liveExample}>
              <h4>Live Example:</h4>
              <div className={styles.contextDemo}>
                <div className={styles.controls}>
                  <label>
                    Theme:
                    <select 
                      value={theme} 
                      onChange={(e) => setTheme(e.target.value)}
                      className={styles.select}
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </label>
                  <label>
                    User Name:
                    <input 
                      type="text" 
                      value={userName} 
                      onChange={(e) => setUserName(e.target.value)}
                      className={styles.input}
                    />
                  </label>
                </div>

                <ThemeContext.Provider value={theme}>
                  <UserContext.Provider value={userName}>
                    <div className={styles.contextExample}>
                      <h5>Theme Context Consumer:</h5>
                      <ThemeConsumer />
                      
                      <h5>User Context Consumer:</h5>
                      <UserConsumer />
                      
                      <h5>Nested Component:</h5>
                      <NestedComponent />
                    </div>
                  </UserContext.Provider>
                </ThemeContext.Provider>
              </div>
            </div>

            <div className={styles.warning}>
              <strong>⚠️ Note:</strong> Great for theme, auth, or global settings.
            </div>
          </div>
        )}

        {activeTab === 'async' && (
          <div className={styles.section}>
            <h2>4. Async JavaScript in Next.js</h2>
            
            <h3><code>async/await</code> basics:</h3>
            <div className={styles.code}>
{`async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}`}
            </div>

            <h3>Using inside <code>useEffect</code>:</h3>
            <div className={styles.code}>
{`import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <ul>
      {posts.slice(0, 5).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`}
            </div>

            <div className={styles.liveExample}>
              <h4>Live Example - Posts from API:</h4>
              <div className={styles.asyncDemo}>
                <ul className={styles.list}>
                  {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.liveExample}>
              <h4>Live Example - GitHub Users:</h4>
              <div className={styles.asyncDemo}>
                <button 
                  className={styles.button}
                  onClick={fetchGithubUsers}
                >
                  Fetch GitHub Users
                </button>
                {githubUsers.length > 0 && (
                  <ul className={styles.list}>
                    {githubUsers.map(user => (
                      <li key={user.id}>{user.login}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className={styles.tip}>
              <p><code>fetch()</code> → makes HTTP request</p>
              <p><code>.json()</code> → parse response into JS object</p>
              <p>Wrapped in <code>try...catch</code> for error handling</p>
            </div>
          </div>
        )}
      </div>

      <div className={styles.exercises}>
        <h2>Mini Exercises (Try It Yourself)</h2>
        
        <div className={styles.exerciseGrid}>
          <div className={styles.exercise}>
            <h3>1. useEffect</h3>
            <p>Log "Component mounted" once when a component loads.</p>
            <div className={styles.codeHint}>
{`useEffect(() => {
  console.log("Component mounted");
}, []);`}
            </div>
          </div>
          
          <div className={styles.exercise}>
            <h3>2. useEffect Cleanup</h3>
            <p>Start a timer on mount and stop it on unmount.</p>
            <div className={styles.codeHint}>
{`useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer tick");
  }, 1000);
  
  return () => clearInterval(timer);
}, []);`}
            </div>
          </div>
          
          <div className={styles.exercise}>
            <h3>3. useRef Value</h3>
            <p>Build a counter that increases a hidden ref value but doesn't re-render.</p>
            <div className={styles.codeHint}>
{`const counterRef = useRef(0);

const increment = () => {
  counterRef.current += 1;
  console.log('Current count:', counterRef.current);
};`}
            </div>
          </div>
          
          <div className={styles.exercise}>
            <h3>4. useRef DOM</h3>
            <p>Create a button that focuses an input when clicked.</p>
            <div className={styles.codeHint}>
{`const inputRef = useRef();

return (
  <>
    <input ref={inputRef} />
    <button onClick={() => inputRef.current.focus()}>
      Focus Input
    </button>
  </>
);`}
            </div>
          </div>
          
          <div className={styles.exercise}>
            <h3>5. useContext</h3>
            <p>Make a <code>UserContext</code> with a name, and display it in a nested component.</p>
            <div className={styles.codeHint}>
{`const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="Chuka">
      <ChildComponent />
    </UserContext.Provider>
  );
}

function ChildComponent() {
  const userName = useContext(UserContext);
  return <p>User: {userName}</p>;
}`}
            </div>
          </div>
          
          <div className={styles.exercise}>
            <h3>6. Async Fetch</h3>
            <p>Fetch GitHub users (<code>https://api.github.com/users</code>) and display the first 5 usernames.</p>
            <div className={styles.codeHint}>
{`useEffect(() => {
  async function fetchUsers() {
    const res = await fetch('https://api.github.com/users');
    const data = await res.json();
    setUsers(data.slice(0, 5));
  }
  fetchUsers();
}, []);`}
            </div>
          </div>
        </div>
        
        <div className={styles.nextSteps}>
          <p>✅ With these tools, you'll have the <strong>everyday toolkit</strong> used in React + Next.js apps.</p>
          <p>The next phase should focus on <strong>Next.js features (routing, API routes, server vs client components)</strong>.</p>
        </div>
      </div>
      <div className={styles.nextlesson}>
                     <Link href="/javascript/phase-2" className={styles.backLink}>
                      &larr; Previous Lesson  
                    </Link>
                     <Link href="/javascript/phase-4" className={styles.backLink}>
                      Next Lesson &rarr; 
                    </Link>
                  </div>
    </div>
  );
}

// Consumer components for useContext example
function ThemeConsumer() {
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.themeDisplay}>
      <p>Current theme: <strong>{theme}</strong></p>
      <div className={`${styles.themeBox} ${theme === 'dark' ? styles.darkBox : styles.lightBox}`}>
        This box changes based on the theme context
      </div>
    </div>
  );
}

function UserConsumer() {
  const user = useContext(UserContext);
  return <p>Current user: <strong>{user}</strong></p>;
}

function NestedComponent() {
  // This component demonstrates that context can be accessed at any depth
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);
  
  return (
    <div className={styles.nestedComponent}>
      <p>This is a deeply nested component</p>
      <p>It has access to both theme (<strong>{theme}</strong>) and user (<strong>{user}</strong>) contexts</p>
    </div>
  );
}