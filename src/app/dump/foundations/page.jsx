import styles from './CssFoundations.module.css';

export default function CssFoundations() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>CSS Foundations Guide</h1>
        <p>Understanding the core concepts and building blocks of CSS</p>
      </header>

      <div className={styles.section}>
        <h2>What is CSS & How It Works</h2>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p>CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents.</p>
            <p>CSS works by selecting HTML elements and applying styles to them through rulesets consisting of selectors and declarations.</p>
          </div>
          <div className={styles.codeExample}>
            <div className={styles.code}>
              {`/* This is a CSS rule */
selector {
  property: value; /* This is a declaration */
}`}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>CSS Implementation Methods</h2>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>Inline Styles</h3>
            <div className={styles.code}>
              {`<div style="color: red; font-size: 16px;">
  This is inline styling
</div>`}
            </div>
            <p>Styles applied directly to HTML elements using the style attribute.</p>
          </div>
          
          <div className={styles.column}>
            <h3>Internal Stylesheet</h3>
            <div className={styles.code}>
              {`<head>
  <style>
    div {
      color: red;
      font-size: 16px;
    }
  </style>
</head>`}
            </div>
            <p>CSS placed within a &lt;style&gt; tag in the HTML document head.</p>
          </div>
          
          <div className={styles.column}>
            <h3>External Stylesheet</h3>
            <div className={styles.code}>
              {`<head>
  <link rel="stylesheet" href="styles.css">
</head>

/* styles.css */
div {
  color: red;
  font-size: 16px;
}`}
            </div>
            <p>CSS in a separate file linked to the HTML document.</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>How Browsers Read CSS</h2>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>Cascade</h3>
            <p>The process of combining different stylesheets and resolving conflicts between different CSS rules.</p>
            <div className={styles.code}>
              {`/* Later rules override earlier ones */
p { color: red; }
p { color: blue; } /* This wins */`}
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Inheritance</h3>
            <p>Some CSS properties are inherited by child elements from their parent elements.</p>
            <div className={styles.code}>
              {`div {
  color: blue; /* Child elements inherit this */
  border: 1px solid black; /* Not inherited */
}`}
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Specificity</h3>
            <p>The algorithm browsers use to determine which CSS rule takes precedence.</p>
            <div className={styles.code}>
              {`/* Specificity hierarchy:
1. Inline styles
2. ID selectors
3. Class/attribute selectors
4. Type selectors */`}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Selectors</h2>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>Basic Selectors</h3>
            <div className={styles.code}>
              {`/* Type selector */
div { color: red; }

/* Class selector */
.classname { color: blue; }

/* ID selector */
#idname { color: green; }`}
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Universal & Grouping</h3>
            <div className={styles.code}>
              {`/* Universal selector */
* { margin: 0; padding: 0; }

/* Grouping selectors */
h1, h2, h3 {
  font-family: Arial;
}`}
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Multiple Selectors</h3>
            <div className={styles.code}>
              {`/* Element with multiple classes */
div.class1.class2 { color: purple; }

/* Combined selector */
div#special.bold { font-weight: bold; }`}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Combinators</h2>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>Descendant (space)</h3>
            <div className={styles.code}>
              {`/* Selects all <p> inside <div> */
div p { color: red; }`}
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Child (&gt;)</h3>
            <div className={styles.code}>
              {`/* Selects direct children <p> of <div> */
div > p { color: blue; }`}
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Adjacent Sibling (+)</h3>
            <div className={styles.code}>
              {`/* Selects <p> immediately after <h1> */
h1 + p { color: green; }`}
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>General Sibling (~)</h3>
            <div className={styles.code}>
              {`/* Selects all <p> after <h1> */
h1 ~ p { color: purple; }`}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Basic Properties</h2>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>Color & Background</h3>
            <div className={styles.code}>
              {`color: #333333;
background-color: #ffffff;
background-image: url('image.jpg');
background-repeat: no-repeat;
background-position: center;`}
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Font Properties</h3>
            <div className={styles.code}>
              {`font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
font-style: italic;
line-height: 1.5;`}
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Text Properties</h3>
            <div className={styles.code}>
              {`text-align: center;
text-decoration: underline;
text-transform: uppercase;
letter-spacing: 1px;
word-spacing: 2px;`}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Units & Values</h2>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>Absolute Units</h3>
            <div className={styles.code}>
              {`width: 300px;   /* Pixels */
height: 2cm;    /* Centimeters */
font-size: 12pt; /* Points */`}
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Relative Units</h3>
            <div className={styles.code}>
              {`width: 50%;     /* Percentage */
font-size: 1.2em; /* Relative to parent */
font-size: 1.5rem; /* Relative to root */
height: 50vh;    /* Viewport height */
width: 25vw;     /* Viewport width */`}
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>CSS Functions</h3>
            <div className={styles.code}>
              {`width: calc(100% - 40px);
color: var(--main-color);
font-size: clamp(1rem, 2.5vw, 2rem);
margin: min(10px, 5%);
padding: max(20px, 2rem);`}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Box Model</h2>
        <div className={styles.boxModelVisual}>
          <div className={styles.boxModel}>
            <div className={styles.margin}>
              <div className={styles.border}>
                <div className={styles.padding}>
                  <div className={styles.content}>
                    Content
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.boxModelLabels}>
            <div className={styles.marginLabel}>Margin</div>
            <div className={styles.borderLabel}>Border</div>
            <div className={styles.paddingLabel}>Padding</div>
            <div className={styles.contentLabel}>Content</div>
          </div>
        </div>
        
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>Content Box (Default)</h3>
            <div className={styles.code}>
              {`box-sizing: content-box;
width: 300px;   /* Content width only */
padding: 20px;  /* Adds to total width */
border: 5px solid black; /* Adds more */`}
            </div>
            <p>Total width: 300 + 40 + 10 = 350px</p>
          </div>
          
          <div className={styles.column}>
            <h3>Border Box</h3>
            <div className={styles.code}>
              {`box-sizing: border-box;
width: 300px;   /* Includes padding & border */
padding: 20px;  /* Inside the 300px */
border: 5px solid black; /* Inside the 300px */`}
            </div>
            <p>Total width: 300px (content: 250px)</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Shorthand vs Longhand Properties</h2>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>Margin/Padding Shorthand</h3>
            <div className={styles.code}>
              {`/* Longhand */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;

/* Shorthand */
margin: 10px 20px; /* top/bottom left/right */

/* Four values: top right bottom left */
margin: 10px 20px 15px 20px;`}
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Border Shorthand</h3>
            <div className={styles.code}>
              {`/* Longhand */
border-width: 2px;
border-style: solid;
border-color: red;

/* Shorthand */
border: 2px solid red;`}
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Background Shorthand</h3>
            <div className={styles.code}>
              {`/* Longhand */
background-color: #fff;
background-image: url('image.jpg');
background-repeat: no-repeat;
background-position: center;

/* Shorthand */
background: #fff url('image.jpg') no-repeat center;`}
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>CSS Foundations Guide | Created with Next.js and CSS Modules</p>
      </footer>
    </div>
  );
}