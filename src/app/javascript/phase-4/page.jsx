"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './NextJSContext.module.css';

export default function NextJSContext() {
  const [activeTab, setActiveTab] = useState('appRouter');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showText, setShowText] = useState(false);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [productId, setProductId] = useState('');

  // Simulate fetching data for server component example
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data.slice(0, 5));
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  // Simulate fetching users for client component example
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data.slice(0, 5));
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with email: ${email}`);
    setEmail('');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>JavaScript in Next.js 14 Context</h1>
        <p>Applying JavaScript knowledge in real-world Next.js features</p>
      </header>

      <div className={styles.tabs}>
        <button 
          className={activeTab === 'appRouter' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('appRouter')}
        >
          App Router
        </button>
        <button 
          className={activeTab === 'serverComponents' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('serverComponents')}
        >
          Server Components
        </button>
        <button 
          className={activeTab === 'clientComponents' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('clientComponents')}
        >
          Client Components
        </button>
        <button 
          className={activeTab === 'forms' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('forms')}
        >
          Form Handling
        </button>
        <button 
          className={activeTab === 'dynamic' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('dynamic')}
        >
          Dynamic Routes
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'appRouter' && (
          <div className={styles.section}>
            <h2>1. Next.js App Router</h2>
            
            <h3>File-based routing:</h3>
            <ul className={styles.list}>
              <li>Next.js creates routes based on the folder/file structure inside <code>app/</code></li>
              <li>Example:</li>
            </ul>

            <div className={styles.code}>
{`app/
  page.jsx          → "/"
  about/page.jsx    → "/about"
  blog/[slug]/page.jsx → dynamic routes like "/blog/hello-world"`}
            </div>

            <div className={styles.tip}>
              ✅ No need to manually configure routes.
            </div>

            <h3>Server vs Client components:</h3>
            <ul className={styles.list}>
              <li><strong>Server Component (default):</strong> Runs only on the server → can fetch data directly</li>
              <li><strong>Client Component:</strong> Runs in the browser → for interactivity (state, events)</li>
            </ul>

            <h3>When to use <code>"use client"</code>:</h3>
            <ul className={styles.list}>
              <li>Add at the <strong>top</strong> of a file if you need hooks like <code>useState</code>, <code>useEffect</code>, or event handlers</li>
            </ul>

            <div className={styles.code}>
{`// Client component
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`}
            </div>

            <div className={styles.warning}>
              ⚠️ Without <code>"use client"</code>, you'll get errors if you try to use hooks.
            </div>
          </div>
        )}

        {activeTab === 'serverComponents' && (
          <div className={styles.section}>
            <h2>2. JavaScript in Server Components</h2>
            
            <h3>Fetching data with async/await:</h3>
            <div className={styles.code}>
{`// app/posts/page.jsx
export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <ul>
      {posts.slice(0, 5).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`}
            </div>

            <ul className={styles.list}>
              <li>Runs only on server → data is fetched before HTML is sent to the browser</li>
              <li>No need for <code>useEffect</code> or <code>useState</code> here</li>
            </ul>

            <h3>Passing props to client components:</h3>
            <div className={styles.code}>
{`// app/posts/page.jsx
import PostsClient from "./PostsClient";

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return <PostsClient posts={posts} />;
}`}
            </div>

            <div className={styles.code}>
{`// app/posts/PostsClient.jsx
"use client";

export default function PostsClient({ posts }) {
  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}`}
            </div>

            <div className={styles.tip}>
              Server fetches → passes data as props → client handles display/interaction.
            </div>

            <div className={styles.liveExample}>
              <h4>Live Example (Simulated Server Component):</h4>
              <div className={styles.postsDemo}>
                <h5>Posts from JSONPlaceholder API:</h5>
                <ul>
                  {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'clientComponents' && (
          <div className={styles.section}>
            <h2>3. JavaScript in Client Components</h2>
            
            <h3>State & Events:</h3>
            <div className={styles.code}>
{`"use client";
import { useState } from "react";

export default function Toggle() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <p>Hello from client!</p>}
    </div>
  );
}`}
            </div>

            <div className={styles.liveExample}>
              <h4>Live Example:</h4>
              <div className={styles.toggleDemo}>
                <button 
                  className={styles.button}
                  onClick={() => setShowText(!showText)}
                >
                  {showText ? "Hide" : "Show"}
                </button>
                {showText && <p>Hello from client component!</p>}
              </div>
            </div>

            <h3>Client-side fetching:</h3>
            <div className={styles.code}>
{`"use client";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      setUsers(await res.json());
    }
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}`}
            </div>

            <div className={styles.liveExample}>
              <h4>Live Example:</h4>
              <div className={styles.usersDemo}>
                <h5>Users from JSONPlaceholder API:</h5>
                <ul>
                  {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'forms' && (
          <div className={styles.section}>
            <h2>4. Form Handling</h2>
            
            <h3>Controlled components with useState:</h3>
            <div className={styles.code}>
{`"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(\`Submitted: \${name}\`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}`}
            </div>

            <h3>Submitting with async functions:</h3>
            <div className={styles.code}>
{`async function handleSubmit(e) {
  e.preventDefault();
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    console.log(await res.json());
  } catch (err) {
    console.error(err);
  }
}`}
            </div>

            <div className={styles.liveExample}>
              <h4>Live Example:</h4>
              <div className={styles.formDemo}>
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.input}
                      required
                    />
                  </div>
                  <button type="submit" className={styles.button}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dynamic' && (
          <div className={styles.section}>
            <h2>5. Dynamic Rendering with <code>[slug]</code></h2>
            
            <h3>Dynamic route:</h3>
            <div className={styles.code}>
{`app/blog/[slug]/page.jsx`}
            </div>

            <h3>Accessing params:</h3>
            <div className={styles.code}>
{`export default function BlogPost({ params }) {
  return <h1>Blog: {params.slug}</h1>;
}`}
            </div>

            <h3>Fetching with params:</h3>
            <div className={styles.code}>
{`export default async function BlogPost({ params }) {
  const res = await fetch(\`https://api.example.com/blog/\${params.slug}\`);
  const post = await res.json();

  return <h1>{post.title}</h1>;
}`}
            </div>

            <div className={styles.tip}>
              ✅ <code>params.slug</code> comes from the URL → automatically injected by Next.js.
            </div>

            <div className={styles.liveExample}>
              <h4>Live Example (Simulated Dynamic Route):</h4>
              <div className={styles.dynamicDemo}>
                <div className={styles.formGroup}>
                  <label htmlFor="productId">Enter Product ID:</label>
                  <input
                    id="productId"
                    type="text"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    className={styles.input}
                    placeholder="e.g., 123"
                  />
                </div>
                {productId && (
                  <div className={styles.productResult}>
                    <h5>Product Page for ID: {productId}</h5>
                    <p>This would be the product page for ID: {productId}</p>
                    <p>In a real app, you would fetch product data for this ID.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.exercises}>
        <h2>Mini Exercises (Try It Yourself)</h2>
        
        <div className={styles.exerciseGrid}>
          <div className={styles.exercise}>
            <h3>1. App Router</h3>
            <p>Create <code>/about</code> and <code>/contact</code> pages using file-based routing.</p>
            <div className={styles.codeHint}>
{`// Create folders and files:
app/about/page.jsx
app/contact/page.jsx`}
            </div>
          </div>
          
          <div className={styles.exercise}>
            <h3>2. Server Component</h3>
            <p>Fetch and display 5 posts from JSONPlaceholder.</p>
            <div className={styles.codeHint}>
{`export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  
  return (
    <ul>
      {posts.slice(0, 5).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`}
            </div>
          </div>
          
          <div className={styles.exercise}>
            <h3>3. Client Component</h3>
            <p>Make a toggle button that shows/hides text.</p>
            <div className={styles.codeHint}>
{`"use client";
import { useState } from "react";

export default function Toggle() {
  const [show, setShow] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <p>Hello from client!</p>}
    </div>
  );
}`}
            </div>
          </div>
          
          <div className={styles.exercise}>
            <h3>4. Form Handling</h3>
            <p>Build a form that takes an email and logs it on submit.</p>
            <div className={styles.codeHint}>
{`"use client";
import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Email submitted:", email);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}
            </div>
          </div>
          
          <div className={styles.exercise}>
            <h3>5. Dynamic Route</h3>
            <p>Create <code>/products/[id]</code> page that shows the product ID.</p>
            <div className={styles.codeHint}>
{`// File: app/products/[id]/page.jsx
export default function ProductPage({ params }) {
  return <h1>Product ID: {params.id}</h1>;
}`}
            </div>
          </div>
        </div>
        
        <div className={styles.nextSteps}>
          <p>✅ By finishing this phase, you'll fully understand how JavaScript powers <strong>Next.js 14's App Router, server/client split, forms, and dynamic routes</strong>.</p>
        </div>
      </div>
      <div className={styles.nextlesson}>
                           <Link href="/javascript/phase-3" className={styles.backLink}>
                            &larr; Previous Lesson  
                          </Link>
                           <Link href="/javascript/phase-5" className={styles.backLink}>
                            Next Lesson &rarr; 
                          </Link>
                        </div>
    </div>
  );
}