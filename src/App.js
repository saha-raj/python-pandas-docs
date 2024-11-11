import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ContentDisplay from './components/ContentDisplay';
import { docContent } from './data/content';
import styles from './App.module.css';  // We'll create this

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Fundamentals of Python for Data Analysis</h1>
          {/* Add your logo or other header content here */}
        </div>
      </header>

      {/* Main content area */}
      <div className={styles.mainArea}>
        <Sidebar content={docContent} onSelect={setSelectedItem} />
        <div className={styles.contentWrapper}>
          <ContentDisplay content={docContent} selectedItem={selectedItem} />
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          © 2024 Raj Saha
        </div>
      </footer>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import ContentDisplay from './components/ContentDisplay';
// import { docContent } from './data/content';
// import './App.css';

// function App() {
//   const [selectedItem, setSelectedItem] = useState(null);

//   return (
//     <div className="app">
//       <Sidebar content={docContent} onSelect={setSelectedItem} />
//       <ContentDisplay selectedItem={selectedItem} content={docContent} />
//     </div>
//   );
// }

// export default App;
