"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './JSXReactContext.module.css';

export default function JSXReactContext() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(["Learn JS", "Learn React"]);
  const [activeTab, setActiveTab] = useState('jsx');

  const users = ["Chuka", "Ada"];
  const favoriteFoods = ["Pizza", "Sushi", "Tacos", "Burgers"];

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>JavaScript in JSX/React Context</h1>
        <p>Deep Dive for Next.js Development</p>
      </header>

      <div className={styles.tabs}>
        <button 
          className={activeTab === 'jsx' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('jsx')}
        >
          JSX Basics
        </button>
        <button 
          className={activeTab === 'components' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('components')}
        >
          Components & Props
        </button>
        <button 
          className={activeTab === 'state' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('state')}
        >
          State Management
        </button>
        <button 
          className={activeTab === 'events' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('events')}
        >
          Events
        </button>
        <button 
          className={activeTab === 'conditional' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('conditional')}
        >
          Conditional Rendering
        </button>
        <button 
          className={activeTab === 'lists' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('lists')}
        >
          Lists
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'jsx' && (
          <div className={styles.section}>
            <h2>1. Introduction to JSX</h2>
            
            <h3>What is JSX?</h3>
            <ul className={styles.list}>
              <li>JSX = JavaScript + XML-like syntax</li>
              <li>Lets you write HTML-like code inside JavaScript</li>
              <li>Browser doesn't understand JSX directly → Next.js compiles it into plain JS</li>
            </ul>

            <h3>Key differences from HTML:</h3>
            <ul className={styles.list}>
              <li><code>class</code> → <code>className</code></li>
              <li><code>for</code> → <code>htmlFor</code></li>
              <li>Attributes are camelCase (<code>onClick</code>, not <code>onclick</code>)</li>
              <li>JavaScript expressions go inside <code>{'{}'}</code></li>
            </ul>

            <div className={styles.codeExample}>
              <h4>Example:</h4>
              <div className={styles.code}>
{`// Example
export default function Hello() {
  const name = "Chuka";
  return <h1 className="title">Hello, {name}!</h1>;
}`}
              </div>
              <div className={styles.liveExample}>
                <h4 className={styles.title}>Hello, Chuka!</h4>
              </div>
            </div>

            <div className={styles.warning}>
              <strong>⚠️ Pitfall:</strong> You cannot write <code>if</code> directly inside <code>{'{}'}</code>. Use ternary (<code>? :</code>) or logical AND (<code>&&</code>).
            </div>
          </div>
        )}

        {activeTab === 'components' && (
          <div className={styles.section}>
            <h2>2. Functions as Components</h2>
            
            <div className={styles.codeComparison}>
              <div>
                <h4>Normal JS function:</h4>
                <div className={styles.code}>
{`function greet(name) {
  return \`Hello \${name}\`;
}`}
                </div>
              </div>
              <div>
                <h4>React functional component:</h4>
                <div className={styles.code}>
{`function Greet(props) {
  return <h1>Hello {props.name}</h1>;
}`}
                </div>
              </div>
            </div>

            <h3>Props: Data passed to components</h3>
            <div className={styles.code}>
{`<Greet name="Chuka" />`}
            </div>

            <h3>Destructuring props:</h3>
            <div className={styles.code}>
{`function Greet({ name }) {
  return <h1>Hello {name}</h1>;
}`}
            </div>
            
            <div className={styles.tip}>
              ✅ Cleaner and easier to read.
            </div>

            <div className={styles.liveExample}>
              <h4>Live Example:</h4>
              <div className={styles.componentDemo}>
                <Greet name="Chuka" />
                <Greet name="Ada" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'state' && (
          <div className={styles.section}>
            <h2>3. State Management (useState)</h2>
            
            <h3>What is state?</h3>
            <ul className={styles.list}>
              <li>A variable that React tracks</li>
              <li>When state changes → component re-renders</li>
            </ul>

            <div className={styles.codeExample}>
              <h4>Example:</h4>
              <div className={styles.code}>
{`import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`}
              </div>
              <div className={styles.liveExample}>
                <h4>Live Counter:</h4>
                <div className={styles.counterDemo}>
                  <p>Count: {count}</p>
                  <button 
                    className={styles.button}
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                  <button 
                    className={styles.button}
                    onClick={() => setCount(count - 1)}
                  >
                    -
                  </button>
                  <button 
                    className={styles.button}
                    onClick={() => setCount(0)}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            <h3>Arrays/Objects in state:</h3>
            <div className={styles.code}>
{`const [todos, setTodos] = useState(["Learn JS"]);

setTodos([...todos, "Learn React"]); // Use spread!`}
            </div>

            <div className={styles.warning}>
              <strong>⚠️ Pitfall:</strong> Never mutate state directly (<code>todos.push(...)</code>) → React won't re-render.
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className={styles.section}>
            <h2>4. Events in JSX</h2>
            
            <h3>Adding event handlers:</h3>
            <div className={styles.code}>
{`<button onClick={() => alert("Clicked!")}>Click Me</button>`}
            </div>

            <h3>Passing a function:</h3>
            <div className={styles.code}>
{`function sayHi() {
  alert("Hi!");
}

<button onClick={sayHi}>Say Hi</button>`}
            </div>

            <h3>With arguments:</h3>
            <div className={styles.code}>
{`<button onClick={() => sayHi("Chuka")}>Say Hi</button>`}
            </div>

            <div className={styles.warning}>
              <strong>⚠️ Warning:</strong> If you do <code>onClick={sayHi()}</code>, it runs immediately. Always wrap in arrow function when passing arguments.
            </div>

            <div className={styles.liveExample}>
              <h4>Try it out:</h4>
              <div className={styles.eventDemo}>
                <button 
                  className={styles.button}
                  onClick={() => alert("You clicked me!")}
                >
                  Show Alert
                </button>
                <button 
                  className={styles.button}
                  onClick={() => {
                    const name = prompt("What's your name?");
                    if (name) alert(`Hello, ${name}!`);
                  }}
                >
                  Greet Me
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'conditional' && (
          <div className={styles.section}>
            <h2>5. Conditional Rendering</h2>
            
            <h3>Before return (vanilla JS logic):</h3>
            <div className={styles.code}>
{`if (loggedIn) {
  return <p>Welcome!</p>;
}
return <p>Please login.</p>;`}
            </div>

            <h3>Inline with &&:</h3>
            <div className={styles.code}>
{`{loggedIn && <p>Welcome!</p>}`}
            </div>

            <h3>Ternary operator:</h3>
            <div className={styles.code}>
{`{loggedIn ? <p>Welcome!</p> : <p>Please login.</p>}`}
            </div>

            <h3>Combine with map:</h3>
            <div className={styles.code}>
{`{users.map(user => (
  user.active && <p key={user.id}>{user.name}</p>
))}`}
            </div>

            <div className={styles.liveExample}>
              <h4>Live Example:</h4>
              <div className={styles.conditionalDemo}>
                <div className={styles.toggleContainer}>
                  <span>Login Status: </span>
                  <button 
                    className={isLoggedIn ? styles.activeButton : styles.button}
                    onClick={toggleLogin}
                  >
                    {isLoggedIn ? 'Logged In' : 'Logged Out'}
                  </button>
                </div>
                
                <div className={styles.renderingResult}>
                  <h5>Using if/else:</h5>
                  {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
                  
                  <h5>Using &&:</h5>
                  {isLoggedIn && <p>You are seeing this because you're logged in!</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'lists' && (
          <div className={styles.section}>
            <h2>6. Rendering Lists</h2>
            
            <h3>Basic .map():</h3>
            <div className={styles.code}>
{`const users = ["Chuka", "Ada"];

return (
  <ul>
    {users.map((user, index) => (
      <li key={index}>{user}</li>
    ))}
  </ul>
);`}
            </div>

            <h3>Keys:</h3>
            <ul className={styles.list}>
              <li>Needed so React can track each item</li>
              <li>Use <code>id</code> from database if possible, not index</li>
            </ul>

            <div className={styles.code}>
{`{users.map(user => (
  <li key={user.id}>{user.name}</li>
))}`}
            </div>

            <div className={styles.warning}>
              <strong>⚠️ Pitfall:</strong> If you forget <code>key</code>, React gives a warning → unpredictable re-renders.
            </div>

            <div className={styles.liveExample}>
              <h4>Live Examples:</h4>
              
              <div className={styles.listDemo}>
                <h5>Users List (with index keys):</h5>
                <ul>
                  {users.map((user, index) => (
                    <li key={index}>{user}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.listDemo}>
                <h5>Favorite Foods (with better keys):</h5>
                <ul>
                  {favoriteFoods.map((food, index) => (
                    <li key={food}>{food}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.listDemo}>
                <h5>Todos List (interactive):</h5>
                <div className={styles.todoDemo}>
                  <div className={styles.todoInput}>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Add a new todo"
                    />
                    <button 
                      className={styles.button}
                      onClick={addTodo}
                    >
                      Add
                    </button>
                  </div>
                  <ul>
                    {todos.map((todo, index) => (
                      <li key={index}>{todo}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.exercises}>
        <h2>Mini Exercises (Try It Yourself)</h2>
        
        <div className={styles.exerciseGrid}>
          <div className={styles.exercise}>
            <h3>1. JSX practice</h3>
            <p>Create a component that displays your name and age using <code>{'{}'}</code> inside JSX.</p>
          </div>
          
          <div className={styles.exercise}>
            <h3>2. Props</h3>
            <p>Make a <code>Greeting</code> component that accepts a <code>name</code> prop and renders <code>Hello {'{name}'}</code>.</p>
          </div>
          
          <div className={styles.exercise}>
            <h3>3. useState</h3>
            <p>Build a button that toggles between <code>ON</code> and <code>OFF</code>.</p>
          </div>
          
          <div className={styles.exercise}>
            <h3>4. Events</h3>
            <p>Create an input field that updates a state variable as you type.</p>
          </div>
          
          <div className={styles.exercise}>
            <h3>5. Conditional Rendering</h3>
            <p>Show <code>Welcome back</code> if <code>isLoggedIn = true</code>, else show <code>Please log in</code>.</p>
          </div>
          
          <div className={styles.exercise}>
            <h3>6. List Rendering</h3>
            <p>Render a list of favorite foods from an array.</p>
          </div>
        </div>
        
        <div className={styles.nextSteps}>
          <p>✅ By mastering these, you'll be ready for <strong>Phase 3: Hooks Deep Dive (useEffect, useContext, etc.) + Component Patterns in Next.js</strong>.</p>
        </div>
      </div>

      <div className={styles.nextlesson}>
               <Link href="/javascript" className={styles.backLink}>
                &larr; Previous Lesson  
              </Link>
               <Link href="/javascript/phase-3" className={styles.backLink}>
                Next Lesson &rarr; 
              </Link>
            </div>
    </div>
  );
}

// Helper component for the Props section
function Greet({ name }) {
  return <h3 className={styles.greetDemo}>Hello {name}!</h3>;
}