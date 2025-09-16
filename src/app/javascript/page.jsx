"use client";
import React, { useState } from 'react';
import Link from 'next/link';   
import styles from './JavaScriptEssentials.module.css';

export default function JavaScriptEssentials() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>JavaScript Essentials for Next.js</h1>
        <p>A practical guide to the JavaScript you'll actually use in Next.js development</p>
      </header>

      <div className={styles.explanation}>
        <h2>Phase 1 — Core JavaScript Essentials (Groundwork)</h2>
        <p>
          <strong>Target reader:</strong> a beginner who wants to become an expert at JavaScript <em>as used inside Next.js 14 + JSX</em>.
          This note focuses on clear, hands-on explanations, short analogies, and practical examples that map directly to Next.js usage.
        </p>
        <p>
          <strong>Goal:</strong> understand the language well enough to read, write, and reason about code in Next.js projects — with special attention to patterns you'll use in components, hooks, data fetching, and state updates.
        </p>
      </div>

      <div className={styles.explanation}>
        <h2>Quick Orientation</h2>
        <ul className={styles.list}>
          <li>
            <strong>Why learn this specific subset?</strong> Next.js apps are written using modern JavaScript (ES6+) and JSX. You don't need every JS feature, but you <em>do</em> need to be fluent in variables, functions, arrays/objects, modern syntax (destructuring, spread), async/await, and the array methods commonly used to process lists for rendering.
          </li>
          <li>
            <strong>Tone:</strong> practical + minimal theory. Examples show both plain JS and how it maps into React/Next.
          </li>
        </ul>
      </div>

      <div className={styles.explanation}>
        <h2>1. Introduction to JavaScript</h2>
        
        <h3>What is JavaScript?</h3>
        <ul className={styles.list}>
          <li>JavaScript (JS) is a programming language used to make web pages interactive and to write server-side code (Node.js).</li>
          <li>In Next.js projects you'll use JS both on the <strong>server</strong> (server components, server routes) and the <strong>client</strong> (client components that run in the browser).</li>
        </ul>

        <h3>Where JS runs</h3>
        <ul className={styles.list}>
          <li><strong>Browser</strong> — DOM, user events, rendering, client-side interactions.</li>
          <li><strong>Node.js</strong> — server-side runtime. Next.js uses Node for server components, API routes, build processes.</li>
        </ul>

        <h3>Vanilla JS vs React/Next.js JS</h3>
        <ul className={styles.list}>
          <li><strong>Vanilla JS</strong> manipulates the DOM directly (<code>document.getElementById(...)</code>, <code>addEventListener</code>, etc.).</li>
          <li><strong>React/Next.js</strong> uses declarative components and virtual DOM; you write components, update state, and React re-renders the UI. You rarely call <code>document.*</code> in React (except in special cases via refs).</li>
        </ul>
        
        <div className={styles.analogy}>
          <strong>Analogy:</strong> Vanilla JS is hand-building a crate with a hammer. React is using a templating machine: you describe the crate (component + state) and React builds it for you.
        </div>
      </div>

      <div className={styles.explanation}>
        <h2>2. Variables & Data Types</h2>
        
        <h3><code>var</code>, <code>let</code>, <code>const</code> (focus on <code>const</code> and <code>let</code>)</h3>
        
        <ul className={styles.list}>
          <li>
            <strong><code>const</code>:</strong> creates a binding that cannot be reassigned. Use it for almost everything (functions, arrays, objects) <em>unless you need to reassign the variable itself.</em>
            <div className={styles.code}>
{`const name = 'Chuka';
// name = 'Sam'; // ❌ TypeError: Assignment to constant variable.

const arr = [1,2,3];
arr.push(4); // ✅ allowed — this mutates the array, but doesn't reassign the variable

const obj = { a: 1 };
obj.a = 2; // ✅ allowed`}
            </div>
          </li>
          <li>
            <strong><code>let</code>:</strong> use when you need to reassign the variable (loop counters, changing value through time).
            <div className={styles.code}>
{`let count = 0;
count = count + 1; // ✅`}
            </div>
          </li>
          <li>
            <strong><code>var</code>:</strong> older, function-scoped, hoisted variable. <strong>Avoid</strong> in modern React/Next projects — it causes surprising bugs.
          </li>
        </ul>
        
        <div className={styles.tip}>
          <strong>Rule of thumb:</strong> default to <code>const</code>. Use <code>let</code> only when you must reassign.
        </div>

        <h3>Primitive types</h3>
        <ul className={styles.list}>
          <li><strong>String</strong> — <code>'hello'</code>, <code>"hi"</code>, template literals <code>{'`hey ${name}`'}</code></li>
          <li><strong>Number</strong> — <code>1, 3.14, -5</code></li>
          <li><strong>Boolean</strong> — <code>true</code> / <code>false</code></li>
          <li><strong>null</strong> — explicitly empty value</li>
          <li><strong>undefined</strong> — value not assigned</li>
          <li><strong>Symbol</strong> — unique identifiers (rare in everyday Next.js apps)</li>
          <li><strong>BigInt</strong> — integers larger than <code>Number.MAX_SAFE_INTEGER</code> (rare)</li>
        </ul>
        
        <div className={styles.warning}>
          <strong>Gotcha:</strong> <code>typeof null</code> returns <code>'object'</code> — it's a historical JavaScript quirk.
        </div>

        <h3>Objects and arrays (core building blocks)</h3>
        
        <ul className={styles.list}>
          <li>
            <strong>Object</strong> — key-value map, often used for props, state objects, configuration.
            <div className={styles.code}>
{`const user = { name: 'Ada', age: 28 };
console.log(user.name); // 'Ada'`}
            </div>
          </li>
          <li>
            <strong>Array</strong> — ordered list, used for lists of items (e.g., posts, products).
            <div className={styles.code}>
{`const posts = [
  { id: 1, title: 'Hello' },
  { id: 2, title: 'World' }
];`}
            </div>
          </li>
        </ul>
        
        <div className={styles.tip}>
          <strong>Why these matter in React:</strong> Props and state are often objects/arrays. You'll use them to render lists and pass structured data through components.
        </div>
      </div>

      <div className={styles.explanation}>
        <h2>3. Operators</h2>
        
        <h3>Arithmetic: <code>+ - * / %</code></h3>
        <div className={styles.code}>
{`1 + 2; // 3
5 % 2; // 1 (remainder)`}
        </div>

        <h3>Comparison: <code>===</code>, <code>!==</code>, <code>&gt;</code>, <code>&lt;</code></h3>
        <ul className={styles.list}>
          <li>Use <strong>strict equality <code>===</code> / <code>!==</code></strong> to avoid type coercion surprises.</li>
        </ul>
        <div className={styles.code}>
{`1 == '1'; // true  (loose equality, coerces types)
1 === '1'; // false (strict equality)`}
        </div>

        <h3>Logical: <code>&&</code>, <code>||</code>, <code>!</code></h3>
        <ul className={styles.list}>
          <li>Useful for short-circuiting and conditional JSX.</li>
        </ul>
        <div className={styles.code}>
{`const loggedIn = true;
const name = loggedIn && 'Chuka'; // 'Chuka' when loggedIn is true, otherwise false
const label = username || 'Guest'; // fallback`}
        </div>
        
        <div className={styles.tip}>
          <strong>React tip:</strong> In JSX you'll often see <code>{'condition && <Component />'}</code> to conditionally render.
        </div>
      </div>

      <div className={styles.explanation}>
        <h2>4. Functions</h2>
        
        <h3>Function declaration vs function expression</h3>
        
        <ul className={styles.list}>
          <li>
            <strong>Declaration</strong> (hoisted):
            <div className={styles.code}>
{`function add(a, b) {
  return a + b;
}`}
            </div>
          </li>
          <li>
            <strong>Expression</strong> (not hoisted):
            <div className={styles.code}>
{`const add = function(a, b) { return a + b };`}
            </div>
          </li>
        </ul>

        <h3>Arrow functions</h3>
        
        <ul className={styles.list}>
          <li>Shorter syntax and <strong>no own <code>this</code></strong> (they inherit <code>this</code> from surrounding scope). Very common in React.</li>
        </ul>
        
        <div className={styles.code}>
{`const square = x => x * x;
const add = (a, b) => {
  const sum = a + b;
  return sum;
};

// React component example
const Button = ({ onClick }) => (
  <button onClick={onClick}>Click</button>
);`}
        </div>
        
        <div className={styles.tip}>
          <strong>Why React uses arrow functions:</strong> concise, and avoids <code>this</code> binding issues that occur in class components (less relevant if you only use functional components, but arrow functions remain a common style).
        </div>

        <h3>Parameters & return values</h3>
        
        <ul className={styles.list}>
          <li>
            Parameters can have default values:
            <div className={styles.code}>
{`function greet(name = 'Guest') {
  return \`Hello \${name}\`;
}
greet(); // 'Hello Guest'`}
            </div>
          </li>
          <li>
            Rest parameters capture an unknown number of args:
            <div className={styles.code}>
{`function sum(...nums) {
  return nums.reduce((a,b) => a + b, 0);
}
sum(1,2,3); // 6`}
            </div>
          </li>
        </ul>
        
        <div className={styles.warning}>
          <strong>Common bug:</strong> forgetting <code>return</code> inside curly-bodied arrow functions:
          <div className={styles.code}>
{`const fn = x => { x * 2 }; // returns undefined
const fnCorrect = x => x * 2;`}
          </div>
        </div>
      </div>

      <div className={styles.explanation}>
        <h2>5. Control Flow</h2>
        
        <h3><code>if</code>, <code>else</code>, <code>switch</code></h3>
        
        <div className={styles.code}>
{`if (user) {
  console.log('has user')
} else {
  console.log('no user')
}

switch(role) {
  case 'admin':
    // do admin things
    break;
  default:
    // default
}`}
        </div>

        <h3>Loops: <code>for</code>, <code>for...of</code>, <code>while</code></h3>
        
        <ul className={styles.list}>
          <li>You'll see loops sometimes, but prefer <strong>array methods</strong> for transformations in React.</li>
        </ul>
        
        <div className={styles.code}>
{`// classic loop
for (let i = 0; i < items.length; i++) {
  // ...
}

// modern iteration
for (const item of items) {
  // ...
}`}
        </div>
        
        <div className={styles.tip}>
          <strong>Why array methods often win in React:</strong> They return new arrays (immutable-friendly), are more declarative, and work cleanly with JSX.
        </div>
      </div>

      <div className={styles.explanation}>
        <h2>6. Array Methods (Most Relevant for React/Next.js)</h2>
        <p>We use these a LOT. They help you transform data before rendering.</p>
        
        <h3><code>.map()</code> — transform + render lists</h3>
        
        <ul className={styles.list}>
          <li>Use <code>.map()</code> to create arrays of JSX elements.</li>
        </ul>
        
        <div className={styles.code}>
{`// posts → <li> elements
const posts = [{id:1, title:'A'}, {id:2, title:'B'}];

function PostsList() {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`}
        </div>
        
        <div className={styles.warning}>
          <strong>Important:</strong> always include a stable <code>key</code> prop. Prefer <code>id</code> over <code>index</code>.
        </div>

        <h3><code>.filter()</code> — choose a subset</h3>
        
        <div className={styles.code}>
{`const active = users.filter(u => u.isActive);`}
        </div>
        
        <p>Use with <code>.map()</code> to render filtered results.</p>

        <h3><code>.find()</code> — find first match</h3>
        
        <div className={styles.code}>
{`const firstAdmin = users.find(u => u.role === 'admin');`}
        </div>

        <h3><code>.some()</code> / <code>.every()</code> — boolean checks</h3>
        
        <div className={styles.code}>
{`const anyActive = users.some(u => u.isActive);
const allAdults = users.every(u => u.age >= 18);`}
        </div>

        <h3><code>.forEach()</code> — side effects</h3>
        
        <ul className={styles.list}>
          <li>Runs a function for each element; <strong>does not return</strong> a new array.</li>
        </ul>
        
        <div className={styles.code}>
{`arr.forEach(x => console.log(x));`}
        </div>

        <h3><code>.reduce()</code> — reduce to a single value (sums, grouping)</h3>
        
        <div className={styles.code}>
{`const total = items.reduce((sum, it) => sum + it.price, 0);

// Example: group by property
const byCategory = items.reduce((acc, item) => {
  acc[item.category] = acc[item.category] || [];
  acc[item.category].push(item);
  return acc;
}, {});`}
        </div>
        
        <div className={styles.tip}>
          <strong>Style tip:</strong> prefer <code>.map()</code>/<code>.filter()</code> for UI transforms; use <code>.reduce()</code> when you need aggregation or grouping.
        </div>
      </div>

      <div className={styles.explanation}>
        <h2>7. Objects</h2>
        
        <h3>Key-value pairs</h3>
        
        <div className={styles.code}>
{`const person = { name: 'Ada', age: 30 };
console.log(person['name']); // bracket notation
console.log(person.name);    // dot notation`}
        </div>

        <h3>Dot vs bracket notation</h3>
        
        <ul className={styles.list}>
          <li>Use dot <code>obj.prop</code> for static keys.</li>
          <li>Use bracket <code>obj[varKey]</code> when the key is dynamic:</li>
        </ul>
        
        <div className={styles.code}>
{`const key = 'name';
person[key]; // 'Ada'`}
        </div>

        <h3>Destructuring (objects & arrays)</h3>
        
        <ul className={styles.list}>
          <li>
            <strong>Object destructuring</strong>
            <div className={styles.code}>
{`const user = { name: 'Ada', age: 30 };
const { name, age } = user;
// you can rename
const { name: fullName } = user;
// defaults
const { nickname = 'friend' } = user;`}
            </div>
          </li>
          <li>
            <strong>Array destructuring</strong>
            <div className={styles.code}>
{`const coords = [10, 20];
const [x, y] = coords;
// skip elements
const [, second] = [1,2,3]; // 2`}
            </div>
          </li>
        </ul>

        <h3>Spread & Rest</h3>
        
        <ul className={styles.list}>
          <li>
            <strong>Spread</strong> copies elements/props into new objects/arrays:
            <div className={styles.code}>
{`const a = [1,2];
const b = [...a, 3]; // [1,2,3]

const user = { name: 'Ada' };
const updated = { ...user, age: 30 };`}
            </div>
          </li>
          <li>
            <strong>Rest</strong> collects remaining items:
            <div className={styles.code}>
{`const { password, ...safeUser } = user; // remove password before sending data

function sum(...nums) { /* nums is array */ }`}
            </div>
          </li>
        </ul>
        
        <div className={styles.warning}>
          <strong>Very important (state updates):</strong> always create a new object/array when updating state. Don't mutate the previous state.
          <div className={styles.code}>
{`// incorrect — mutates state (bad)
user.age = 31; setUser(user);

// correct — create new object (good)
setUser(prev => ({ ...prev, age: 31 }));`}
          </div>
        </div>
        
        <div className={styles.tip}>
          <strong>Gotcha:</strong> spread creates a <em>shallow</em> copy. If nested objects exist, deeper levels are still references to the same objects.
        </div>
      </div>

      <div className={styles.explanation}>
        <h2>8. ES6+ Features Commonly Used in React</h2>
        
        <h3>Template literals</h3>
        
        <div className={styles.code}>
{`const name = 'Chuka';
const msg = \`Hello \${name}\`; // Hello Chuka`}
        </div>

        <h3>Default parameters</h3>
        
        <div className={styles.code}>
{`function greet(name = 'Guest') { return \`Hello \${name}\` }`}
        </div>

        <h3>Destructuring (covered above) — central in hooks and props</h3>
        
        <div className={styles.code}>
{`// useState destructuring
const [count, setCount] = useState(0);

// props destructuring
function Card({ title, children }) { return <div>{title}{children}</div> }`}
        </div>

        <h3>Import / Export modules (ES Modules)</h3>
        
        <div className={styles.code}>
{`// default export --- MyComp.js
export default function MyComp() { return <div/> }

// named exports --- utils.js
export function add(a,b) { return a+b }
export const PI = 3.14;

// importing
import MyComp from './MyComp';
import { add, PI } from './utils';`}
        </div>
        
        <div className={styles.tip}>
          <strong>Why this matters in Next.js:</strong> the file system and component imports rely on ES modules. Next.js's code splitting and bundling work with these imports.
        </div>
      </div>

      <div className={styles.explanation}>
        <h2>9. Examples that tie it all together (short, practical)</h2>
        
        <h3>1) Simple Counter (useState + functions + arrow)</h3>
        
        <div className={styles.code}>
{`'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);
  const reset = () => setCount(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`}
        </div>

        <h3>2) Rendering filtered list</h3>
        
        <div className={styles.code}>
{`const todos = [
  { id: 1, text: 'Build app', done: false },
  { id: 2, text: 'Write doc', done: true }
];

function TodoList({ showDone }) {
  const visible = todos.filter(t => (showDone ? true : !t.done));

  return (
    <ul>
      {visible.map(t => (
        <li key={t.id}>{t.text}</li>
      ))}
    </ul>
  );
}`}
        </div>

        <h3>3) Update nested state safely</h3>
        
        <div className={styles.code}>
{`const [profile, setProfile] = useState({ name: 'Ada', prefs: { theme: 'dark' } });

// update top-level
setProfile(prev => ({ ...prev, name: 'Adele' }));

// update nested safely (shallow copy of nested level too)
setProfile(prev => ({
  ...prev,
  prefs: { ...prev.prefs, theme: 'light' }
}));`}
        </div>
      </div>

      <div className={styles.explanation}>
        <h2>10. Common mistakes & how to avoid them</h2>
        
        <ul className={styles.errorList}>
          <li><strong>Mutating state directly</strong>: always return new object/array.</li>
          <li><strong>Missing <code>key</code> on lists</strong>: leads to wrong diffing and bugs.</li>
          <li><strong>Using <code>index</code> as key</strong> when list order can change — avoid it unless list is static.</li>
          <li><strong>Forgetting <code>return</code> in block-bodied arrow functions</strong>: returns <code>undefined</code>.</li>
          <li><strong>Confusing <code>==</code> and <code>===</code></strong>: prefer <code>===</code>.</li>
          <li><strong>Assuming <code>typeof null !== 'object'</code></strong>: it <em>is</em> <code>'object'</code> due to legacy behavior.</li>
        </ul>
      </div>

      <div className={styles.explanation}>
        <h2>11. Short exercises (practice)</h2>
        
        <ol className={styles.exerciseList}>
          <li>Use <code>map</code> to convert <code>['a','b','c']</code> into <code>['A','B','C']</code>.</li>
          <li>Filter the array <code>[1,2,3,4,5]</code> to only even numbers.</li>
          <li>Given <code>{'const user = {name:"Ada", age:30}'}</code>, create a new object with age 31 (without mutating original).</li>
          <li>What does the following return?
            <div className={styles.code}>
{`const x = 0 || 'hi' && 'bye';`}
            </div>
          </li>
          <li>Write a function <code>sum</code> that accepts any number of arguments and returns their sum.</li>
        </ol>
        
        <button 
          className={styles.toggleButton}
          onClick={() => setShowAnswers(!showAnswers)}
        >
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
        </button>
        
        {showAnswers && (
          <div className={styles.answers}>
            <h3>Answers</h3>
            <ol className={styles.answerList}>
              <li><code>{'[\'a\',\'b\',\'c\'].map(s => s.toUpperCase()); // [\'A\',\'B\',\'C\']'}</code></li>
              <li><code>{'[1,2,3,4,5].filter(n => n % 2 === 0); // [2,4]'}</code></li>
              <li><code>{'{ ...user, age: 31 }'}</code> (creates a new object)</li>
              <li>Evaluate step-by-step: <code>{'\'hi\' && \'bye\''}</code> is <code>'bye'</code> (because 'hi' is truthy), then <code>{'0 || \'bye\''}</code> → <code>'bye'</code>. So result: <code>'bye'</code>.</li>
              <li>
                <div className={styles.code}>
{`function sum(...nums) { 
  return nums.reduce((a,b) => a + b, 0); 
}`}
                </div>
              </li>
            </ol>
          </div>
        )}
      </div>

      <div className={styles.explanation}>
        <h2>12. Cheatsheet (one-page reference)</h2>
        
        <ul className={styles.cheatsheet}>
          <li><code>const</code> (default), <code>let</code> (reassign), avoid <code>var</code>.</li>
          <li>Use <code>===</code> / <code>!==</code>.</li>
          <li>Use array methods: <code>.map()</code>, <code>.filter()</code>, <code>.find()</code>, <code>.some()</code>, <code>.reduce()</code>.</li>
          <li>Create new state with spread: <code>{'setState(prev => ({ ...prev, x: 1 }))'}</code>.</li>
          <li>JSX uses <code>{'{}'}</code> for expressions and <code>className</code> not <code>class</code>.</li>
          <li>Import/export: <code>export default</code>, <code>export const</code>, <code>{'import X from \'./X\''}</code>, <code>{'import { x } from \'./x\''}</code>.</li>
        </ul>
      </div>

      <div className={styles.explanation}>
        <h2>13. Next steps / recommended practice</h2>
        
        <ul className={styles.nextSteps}>
          <li>Build small counter & todo apps and focus on using array methods + immutability.</li>
          <li>Read your component code and ask: "am I mutating anything?" — if yes, fix it.</li>
          <li>When you see loops, try rewriting them with array methods.</li>
        </ul>
      </div>

      <div className={styles.nextlesson}>
         <Link href="/javascript/phase-2" className={styles.backLink}>
          Next Lesson &rarr; 
        </Link>
      </div>

      <footer className={styles.footer}>
        <p>JavaScript Essentials for Next.js | Created with React and CSS Modules</p>
      </footer>
    </div>
  );
}