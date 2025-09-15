import React from 'react';
import styles from './PseudoElementsDemo.module.css';

export default function PseudoElementsDemo() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>CSS Pseudo-Elements Guide</h1>
        <p>Understanding and using ::before and ::after pseudo-elements in CSS</p>
      </header>
      
      <div className={styles.explanation}>
        <h2>What Are Pseudo-Elements?</h2>
        <p>
          Pseudo-elements are keywords added to selectors that let you style a specific part of the selected element(s).
          The <code>::before</code> and <code>::after</code> pseudo-elements create virtual elements that become the first
          and last children of the selected element, respectively.
        </p>
        
        <div className={styles.code}>
          {`selector::before {
  content: "";
  /* Other styles */
}

selector::after {
  content: "";
  /* Other styles */
}`}
        </div>
      </div>
      
      <div className={styles.explanation}>
        <h2>The Content Property</h2>
        <p>
          The <code>content</code> property is required for pseudo-elements to render. It can contain text, images, or be empty.
        </p>
        
        <div className={styles.demoContainer}>
          <div className={styles.demoItem}>
            <h3>Text Content</h3>
            <div className={`${styles.exampleBox} ${styles.textContentExample}`}>
              <p>This paragraph has a ::before with text</p>
            </div>
            <div className={styles.code}>
              {`p::before {
  content: "Note: ";
  color: var(--accent-primary);
  font-weight: bold;
}`}
            </div>
          </div>
          
          <div className={styles.demoItem}>
            <h3>Empty Content (Decorative)</h3>
            <div className={`${styles.exampleBox} ${styles.emptyContentExample}`}>
              <p>This paragraph has a decorative ::after</p>
            </div>
            <div className={styles.code}>
              {`p::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background: var(--accent-primary);
  margin-top: 8px;
}`}
            </div>
          </div>
          
          <div className={styles.demoItem}>
            <h3>Attribute Content</h3>
            <div className={`${styles.exampleBox} ${styles.attrContentExample}`}>
              <p data-info="Important">This paragraph has a ::after with attribute content</p>
            </div>
            <div className={styles.code}>
              {`p::after {
  content: " (" attr(data-info) ")";
  color: var(--accent-secondary);
  font-size: 0.9em;
}`}
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.explanation}>
        <h2>Common Use Cases</h2>
        
        <div className={styles.demoContainer}>
          <div className={styles.demoItem}>
            <h3>Decorative Elements</h3>
            <div className={`${styles.exampleBox} ${styles.decorativeExample}`}>
              <h4>Fancy Heading</h4>
            </div>
            <div className={styles.code}>
              {`h4::before, h4::after {
  content: "✦";
  color: var(--accent-primary);
  margin: 0 10px;
}`}
            </div>
          </div>
          
          <div className={styles.demoItem}>
            <h3>Custom Bullets</h3>
            <div className={`${styles.exampleBox} ${styles.bulletsExample}`}>
              <ul>
                <li>List item one</li>
                <li>List item two</li>
                <li>List item three</li>
              </ul>
            </div>
            <div className={styles.code}>
              {`li::before {
  content: "➤";
  color: var(--accent-primary);
  margin-right: 8px;
}`}
            </div>
          </div>
          
          <div className={styles.demoItem}>
            <h3>Image Overlays</h3>
            <div className={`${styles.exampleBox} ${styles.imageOverlayExample}`}>
              <div className={styles.imageContainer}>
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Mountain" />
                <p>Hover over the image</p>
              </div>
            </div>
            <div className={styles.code}>
              {`.imageContainer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--accent-primary);
  opacity: 0;
  transition: opacity 0.3s;
}

.imageContainer:hover::before {
  opacity: 0.2;
}`}
            </div>
          </div>
          
          <div className={styles.demoItem}>
            <h3>Tooltips</h3>
            <div className={`${styles.exampleBox} ${styles.tooltipExample}`}>
              <span className={styles.tooltipTrigger} data-tooltip="This is a tooltip!">Hover for tooltip</span>
            </div>
            <div className={styles.code}>
              {`.tooltipTrigger::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--bg-primary);
  color: var(--text-primary);
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}

.tooltipTrigger:hover::after {
  opacity: 1;
  visibility: visible;
}`}
            </div>
          </div>
          
          <div className={styles.demoItem}>
            <h3>Custom Checkboxes</h3>
            <div className={`${styles.exampleBox} ${styles.checkboxExample}`}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" />
                <span>Option 1</span>
              </label>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" />
                <span>Option 2</span>
              </label>
            </div>
            <div className={styles.code}>
              {`.checkboxLabel input[type="checkbox"] {
  opacity: 0;
  position: absolute;
}

.checkboxLabel span::before {
  content: "";
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid var(--border-color);
  border-radius: 3px;
  margin-right: 8px;
  vertical-align: middle;
  transition: all 0.3s;
}

.checkboxLabel input[type="checkbox"]:checked + span::before {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
}

.checkboxLabel input[type="checkbox"]:checked + span::after {
  content: "✓";
  color: white;
  position: absolute;
  left: 4px;
  top: 1px;
  font-size: 12px;
}`}
            </div>
          </div>
          
          <div className={styles.demoItem}>
            <h3>Blockquote Styling</h3>
            <div className={`${styles.exampleBox} ${styles.blockquoteExample}`}>
              <blockquote>
                <p>This is a beautifully styled blockquote using pseudo-elements.</p>
              </blockquote>
            </div>
            <div className={styles.code}>
              {`blockquote::before {
  content: "“";
  font-size: 4rem;
  color: var(--accent-primary);
  position: absolute;
  left: -20px;
  top: -20px;
}

blockquote::after {
  content: "”";
  font-size: 4rem;
  color: var(--accent-primary);
  position: absolute;
  right: -20px;
  bottom: -40px;
}`}
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.explanation}>
        <h2>Advanced Techniques</h2>
        
        <div className={styles.demoContainer}>
          <div className={styles.demoItem}>
            <h3>Counters</h3>
            <div className={`${styles.exampleBox} ${styles.counterExample}`}>
              <h4>Chapter 1</h4>
              <h4>Chapter 2</h4>
              <h4>Chapter 3</h4>
            </div>
            <div className={styles.code}>
              {`.counterExample {
  counter-reset: chapter;
}

.counterExample h4::before {
  counter-increment: chapter;
  content: "Chapter " counter(chapter) ": ";
  color: var(--accent-primary);
}`}
            </div>
          </div>
          
          <div className={styles.demoItem}>
            <h3>Complex Shapes</h3>
            <div className={`${styles.exampleBox} ${styles.shapeExample}`}>
              <div className={styles.speechBubble}>Hello there!</div>
            </div>
            <div className={styles.code}>
              {`.speechBubble {
  position: relative;
  background: var(--bg-secondary);
  padding: 15px;
  border-radius: 10px;
}

.speechBubble::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 20px;
  border-width: 10px 10px 0;
  border-style: solid;
  border-color: var(--bg-secondary) transparent transparent;
}`}
            </div>
          </div>
          
          <div className={styles.demoItem}>
            <h3>Gradient Overlays</h3>
            <div className={`${styles.exampleBox} ${styles.gradientExample}`}>
              <div className={styles.gradientBox}>
                <p>Content with gradient overlay</p>
              </div>
            </div>
            <div className={styles.code}>
              {`.gradientBox {
  position: relative;
  padding: 20px;
  color: white;
}

.gradientBox::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
  z-index: -1;
  border-radius: 8px;
}`}
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.explanation}>
        <h2>Best Practices</h2>
        <div className={styles.tipsList}>
          <div className={styles.tip}>
            <h3>Always include the content property</h3>
            <p>Pseudo-elements won't render without a content property, even if it's empty: <code>content: ""</code>.</p>
          </div>
          
          <div className={styles.tip}>
            <h3>Consider accessibility</h3>
            <p>Screen readers may not always read content from pseudo-elements, so don't rely on them for critical information.</p>
          </div>
          
          <div className={styles.tip}>
            <h3>Use for presentational content</h3>
            <p>Pseudo-elements are best for decorative or presentational content rather than meaningful content.</p>
          </div>
          
          <div className={styles.tip}>
            <h3>Remember stacking context</h3>
            <p>Pseudo-elements are positioned within their parent element's stacking context.</p>
          </div>
        </div>
      </div>
      
      <footer className={styles.footer}>
        <p>CSS Pseudo-Elements Guide | Created with Next.js and CSS Modules</p>
      </footer>
    </div>
  );
}