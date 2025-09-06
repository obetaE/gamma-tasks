import styles from './BackgroundDemo.module.css';

export default function BackgroundDemo() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>CSS Background Properties</h1>
        <p>Understanding and using background properties in CSS</p>
      </header>
      
      <div className={styles.explanation}>
        <h2>Background Attachment</h2>
        <p>The <code>background-attachment</code> property specifies how a background image moves relative to the viewport.</p>
        
        <div className={styles.code}>
          background-attachment: fixed | scroll | local;
        </div>
        
        <div className={styles.demoContainer}>
          <div>
            <h3>Fixed Background</h3>
            <div className={`${styles.demoBox} ${styles.fixedBg}`}>
              background-attachment: fixed;
            </div>
            <p>Background stays fixed when scrolling</p>
          </div>
          
          <div>
            <h3>Scroll Background</h3>
            <div className={`${styles.demoBox} ${styles.scrollBg}`}>
              <div className={styles.scrollContent}>
                background-attachment: scroll;<br /><br />
                (This content is scrollable inside the container)
              </div>
            </div>
            <p>Background scrolls with element content</p>
          </div>
        </div>
      </div>
      
      <div className={styles.explanation}>
        <h2>Background Blend Mode</h2>
        <p>The <code>background-blend-mode</code> property defines how element backgrounds should blend.</p>
        
        <div className={styles.code}>
          background-blend-mode: normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity;
        </div>
        
        <div className={styles.demoContainer}>
          <div>
            <h3>Multiply Blend Mode</h3>
            <div className={`${styles.demoBox} ${styles.blendMultiply}`}>
              background-blend-mode: multiply;
            </div>
          </div>
          
          <div>
            <h3>Screen Blend Mode</h3>
            <div className={`${styles.demoBox} ${styles.blendScreen}`}>
              background-blend-mode: screen;
            </div>
          </div>
          
          <div>
            <h3>Overlay Blend Mode</h3>
            <div className={`${styles.demoBox} ${styles.blendOverlay}`}>
              background-blend-mode: overlay;
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.explanation}>
        <h2>Other Background Properties</h2>
        <p>CSS provides many properties to control element backgrounds.</p>
        
        <div className={styles.propertyGrid}>
          <div className={styles.propertyCard}>
            <h3>background-color</h3>
            <p>Sets the background color of an element</p>
            <div className={styles.code}>background-color: #3498db;</div>
          </div>
          
          <div className={styles.propertyCard}>
            <h3>background-image</h3>
            <p>Sets one or more background images</p>
            <div className={styles.code}>background-image: url('image.jpg');</div>
          </div>
          
          <div className={styles.propertyCard}>
            <h3>background-position</h3>
            <p>Sets the position of background images</p>
            <div className={styles.code}>background-position: center top;</div>
          </div>
          
          <div className={styles.propertyCard}>
            <h3>background-size</h3>
            <p>Specifies the size of background images</p>
            <div className={styles.code}>background-size: cover | contain | 50%;</div>
          </div>
          
          <div className={styles.propertyCard}>
            <h3>background-repeat</h3>
            <p>Defines how background images are repeated</p>
            <div className={styles.code}>background-repeat: no-repeat | repeat-x | repeat-y | repeat;</div>
          </div>
          
          <div className={styles.propertyCard}>
            <h3>background-origin</h3>
            <p>Specifies the positioning area of background images</p>
            <div className={styles.code}>background-origin: padding-box | border-box | content-box;</div>
          </div>
          
          <div className={styles.propertyCard}>
            <h3>background-clip</h3>
            <p>Defines how far the background extends</p>
            <div className={styles.code}>background-clip: border-box | padding-box | content-box | text;</div>
          </div>
        </div>
        
        <div className={styles.demoContainer}>
          <div>
            <h3>Linear Gradient</h3>
            <div className={`${styles.demoBox} ${styles.gradientBg}`}>
              background: linear-gradient(...);
            </div>
          </div>
          
          <div>
            <h3>Radial Gradient</h3>
            <div className={`${styles.demoBox} ${styles.radialBg}`}>
              background: radial-gradient(...);
            </div>
          </div>
          
          <div>
            <h3>Background Position</h3>
            <div className={`${styles.demoBox} ${styles.positionBg}`}>
              background-position: bottom right;
            </div>
          </div>
          
          <div>
            <h3>Background Size: Cover</h3>
            <div className={`${styles.demoBox} ${styles.sizeCoverBg}`}>
              background-size: cover;
            </div>
          </div>
          
          <div>
            <h3>Background Repeat</h3>
            <div className={`${styles.demoBox} ${styles.repeatBg}`}>
              background-repeat: repeat;
            </div>
          </div>
          
          <div>
            <h3>Origin & Clip</h3>
            <div className={`${styles.demoBox} ${styles.originClipBg}`}>
              background-origin: content-box;<br />
              background-clip: content-box;
            </div>
          </div>
          
          <div>
            <h3>Multiple Backgrounds</h3>
            <div className={`${styles.demoBox} ${styles.multipleBg}`}>
              Multiple background layers
            </div>
          </div>
        </div>
      </div>
      
      <footer className={styles.footer}>
        <p>CSS Background Properties Reference | Created with pure CSS</p>
      </footer>
    </div>
  );
}