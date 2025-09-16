"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './ProjectsShowcase.module.css';

export default function ProjectsShowcase() {
  const [activeTab, setActiveTab] = useState('counter');
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [votes, setVotes] = useState({
    react: 0,
    vue: 0,
    angular: 0,
    svelte: 0
  });

  // Sample data for search filter
  const items = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Strawberry", "Blueberry"];

  // Filter items based on query
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  // Fetch weather data
  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current_weather=true"
        );
        const data = await res.json();
        setWeather(data.current_weather);
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      }
    }
    fetchWeather();
  }, []);

  // Fetch blog posts
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }
    fetchPosts();
  }, []);

  // Todo functions
  const addTodo = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Voting functions
  const voteFor = (framework) => {
    setVotes({
      ...votes,
      [framework]: votes[framework] + 1
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>JavaScript & Next.js Projects Showcase</h1>
        <p>Cement your understanding by building real projects</p>
      </header>

      <div className={styles.tabs}>
        <button 
          className={activeTab === 'counter' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('counter')}
        >
          Counter App
        </button>
        <button 
          className={activeTab === 'todo' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('todo')}
        >
          Todo List
        </button>
        <button 
          className={activeTab === 'search' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('search')}
        >
          Search Filter
        </button>
        <button 
          className={activeTab === 'weather' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('weather')}
        >
          Weather App
        </button>
        <button 
          className={activeTab === 'blog' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('blog')}
        >
          Blog
        </button>
        <button 
          className={activeTab === 'voting' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('voting')}
        >
          Voting App
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'counter' && (
          <div className={styles.section}>
            <h2>Counter App (useState)</h2>
            <p className={styles.description}>
              <strong>Concepts:</strong> <code>useState</code>, event handling
            </p>
            
            <div className={styles.code}>
{`"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}`}
            </div>

            <div className={styles.liveExample}>
              <h3>Live Example:</h3>
              <CounterExample />
            </div>

            <div className={styles.tip}>
              ✅ Reinforces: <code>useState</code> + events.
            </div>
          </div>
        )}

        {activeTab === 'todo' && (
          <div className={styles.section}>
            <h2>Todo List (arrays + map + filter)</h2>
            <p className={styles.description}>
              <strong>Concepts:</strong> arrays, <code>.map()</code>, <code>.filter()</code>, controlled inputs
            </p>
            
            <div className={styles.code}>
{`"use client";
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function addTodo(e) {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask("");
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={task} onChange={e => setTask(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
            </div>

            <div className={styles.liveExample}>
              <h3>Live Example:</h3>
              <div className={styles.todoDemo}>
                <form onSubmit={addTodo} className={styles.todoForm}>
                  <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task"
                    className={styles.todoInput}
                  />
                  <button type="submit" className={styles.button}>
                    Add
                  </button>
                </form>
                <ul className={styles.todoList}>
                  {todos.map(todo => (
                    <li key={todo.id} className={styles.todoItem}>
                      <span 
                        className={todo.completed ? styles.completed : ''}
                        onClick={() => toggleTodo(todo.id)}
                      >
                        {todo.text}
                      </span>
                      <button 
                        onClick={() => removeTodo(todo.id)}
                        className={styles.deleteButton}
                      >
                        X
                      </button>
                    </li>
                  ))}
                </ul>
                {todos.length === 0 && (
                  <p className={styles.emptyState}>No tasks yet. Add one above!</p>
                )}
              </div>
            </div>

            <div className={styles.tip}>
              ✅ Reinforces: arrays, <code>.map()</code>, <code>.filter()</code>, form handling.
            </div>
          </div>
        )}

        {activeTab === 'search' && (
          <div className={styles.section}>
            <h2>Search Filter (arrays + conditional rendering)</h2>
            <p className={styles.description}>
              <strong>Concepts:</strong> <code>.filter()</code>, conditional rendering
            </p>
            
            <div className={styles.code}>
{`"use client";
import { useState } from "react";

const items = ["Apple", "Banana", "Orange", "Mango"];

export default function Search() {
  const [query, setQuery] = useState("");

  const filtered = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {filtered.length > 0 ? (
          filtered.map((item, i) => <li key={i}>{item}</li>)
        ) : (
          <li>No results</li>
        )}
      </ul>
    </div>
  );
}`}
            </div>

            <div className={styles.liveExample}>
              <h3>Live Example:</h3>
              <div className={styles.searchDemo}>
                <input
                  type="text"
                  placeholder="Search fruits..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className={styles.searchInput}
                />
                <ul className={styles.searchResults}>
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, i) => (
                      <li key={i} className={styles.searchItem}>{item}</li>
                    ))
                  ) : (
                    <li className={styles.noResults}>No results found</li>
                  )}
                </ul>
              </div>
            </div>

            <div className={styles.tip}>
              ✅ Reinforces: <code>.filter()</code>, inline conditions.
            </div>
          </div>
        )}

        {activeTab === 'weather' && (
          <div className={styles.section}>
            <h2>Weather App (async fetch + useEffect)</h2>
            <p className={styles.description}>
              <strong>Concepts:</strong> async fetching, state, <code>useEffect</code>
            </p>
            
            <div className={styles.code}>
{`"use client";
import { useState, useEffect } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current_weather=true"
      );
      const data = await res.json();
      setWeather(data.current_weather);
    }
    fetchWeather();
  }, []);

  return (
    <div>
      {weather ? (
        <p>Temperature: {weather.temperature}°C</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}`}
            </div>

            <div className={styles.liveExample}>
              <h3>Live Example:</h3>
              <div className={styles.weatherDemo}>
                {weather ? (
                  <div className={styles.weatherInfo}>
                    <h4>Current Weather</h4>
                    <p>Temperature: <strong>{weather.temperature}°C</strong></p>
                    <p>Wind Speed: <strong>{weather.windspeed} km/h</strong></p>
                    <p>Wind Direction: <strong>{weather.winddirection}°</strong></p>
                  </div>
                ) : (
                  <p className={styles.loading}>Loading weather data...</p>
                )}
              </div>
            </div>

            <div className={styles.tip}>
              ✅ Reinforces: <code>useEffect</code>, async fetch.
            </div>
          </div>
        )}

        {activeTab === 'blog' && (
          <div className={styles.section}>
            <h2>Blog (Next.js routing + async fetch + JSX rendering)</h2>
            <p className={styles.description}>
              <strong>Concepts:</strong> App Router, async fetch, dynamic routes
            </p>
            
            <div className={styles.code}>
{`// app/blog/page.jsx
export default async function BlogPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <ul>
      {posts.slice(0, 5).map(post => (
        <li key={post.id}>
          <a href={\`/blog/\${post.id}\`}>{post.title}</a>
        </li>
      ))}
    </ul>
  );
}`}
            </div>

            <div className={styles.code}>
{`// app/blog/[id]/page.jsx
export default async function BlogPost({ params }) {
  const res = await fetch(
    \`https://jsonplaceholder.typicode.com/posts/\${params.id}\`
  );
  const post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}`}
            </div>

            <div className={styles.liveExample}>
              <h3>Live Example (Simulated):</h3>
              <div className={styles.blogDemo}>
                <div className={styles.blogList}>
                  <h4>Blog Posts</h4>
                  <ul>
                    {posts.map(post => (
                      <li key={post.id} className={styles.blogListItem}>
                        <button 
                          onClick={() => setSelectedPost(post)}
                          className={styles.blogPostButton}
                        >
                          {post.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.blogPost}>
                  {selectedPost ? (
                    <>
                      <h4>{selectedPost.title}</h4>
                      <p>{selectedPost.body}</p>
                    </>
                  ) : (
                    <p>Select a post to view its content</p>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.tip}>
              ✅ Reinforces: routing, dynamic params, async fetch.
            </div>
          </div>
        )}

        {activeTab === 'voting' && (
          <div className={styles.section}>
            <h2>Voting App (Full-Stack Example)</h2>
            <p className={styles.description}>
              <strong>Features to combine everything:</strong>
            </p>
            
            <ul className={styles.featureList}>
              <li><strong>State + Props:</strong> Track votes per team</li>
              <li><strong>Arrays + Map + Filter:</strong> Render categories and teams</li>
              <li><strong>Forms:</strong> Register/login or submit votes</li>
              <li><strong>Events:</strong> Click to cast votes</li>
              <li><strong>Async Fetch:</strong> Load teams/categories from database</li>
              <li><strong>Dynamic Routes:</strong> <code>/category/[slug]</code> for different categories</li>
              <li><strong>Server + Client Components:</strong> Server fetches → client handles interaction</li>
            </ul>

            <div className={styles.code}>
{`// Example structure:
app/
  page.jsx              → Homepage
  categories/[slug]/    → Dynamic category pages
  api/votes/route.js    → API route to handle voting
  components/TeamCard.jsx
  components/CategoryList.jsx`}
            </div>

            <div className={styles.liveExample}>
              <h3>Live Example (Simplified):</h3>
              <div className={styles.votingDemo}>
                <h4>Vote for your favorite JavaScript framework</h4>
                <div className={styles.votingOptions}>
                  {Object.entries(votes).map(([framework, count]) => (
                    <div key={framework} className={styles.votingOption}>
                      <h5>{framework.charAt(0).toUpperCase() + framework.slice(1)}</h5>
                      <p className={styles.voteCount}>{count} votes</p>
                      <button 
                        onClick={() => voteFor(framework)}
                        className={styles.voteButton}
                      >
                        Vote
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.tip}>
              ✅ By completing this, you'll have:
              <ul>
                <li>Hands-on knowledge of <strong>JavaScript in React/Next.js</strong></li>
                <li>Experience with <strong>server + client components</strong></li>
                <li>A working <strong>full-stack project</strong> to showcase</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className={styles.practicePath}>
        <h2>Practice Path (Suggested Order)</h2>
        
        <div className={styles.pathSteps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Counter</h3>
              <p>Build comfort with state</p>
            </div>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Todo List</h3>
              <p>Arrays + state</p>
            </div>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Search</h3>
              <p>Filtering + rendering</p>
            </div>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3>Weather</h3>
              <p>Async fetching + effects</p>
            </div>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h3>Blog</h3>
              <p>Routing + dynamic rendering</p>
            </div>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>6</div>
            <div className={styles.stepContent}>
              <h3>Voting App</h3>
              <p>Everything combined</p>
            </div>
          </div>
        </div>
        
        <div className={styles.finalNote}>
          <p>🎯 By completing these projects, you're no longer just "learning" JavaScript — you're <strong>building production-style projects with Next.js</strong>.</p>
        </div>
      </div>
      <div className={styles.nextlesson}>
                     <Link href="/javascript/phase-4" className={styles.backLink}>
                      &larr; Previous Lesson  
                    </Link>
                     {/* <Link href="/javascript/phase-6" className={styles.backLink}>
                      Next Lesson &rarr; 
                    </Link> */}
                  </div>
    </div>
  );
}

// Counter component for the live example
function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counterDemo}>
      <h1 className={styles.counterNumber}>{count}</h1>
      <div className={styles.counterButtons}>
        <button 
          onClick={() => setCount(count - 1)}
          className={styles.counterButton}
        >
          -
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          className={styles.counterButton}
        >
          +
        </button>
      </div>
    </div>
  );
}