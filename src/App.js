import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ContentDisplay from './components/ContentDisplay';
import { fetchDocContent } from './data/content';
import styles from './App.module.css';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [docContent, setDocContent] = useState(null); // State to hold fetched content

  useEffect(() => {
    const loadContent = async () => {
      const content = await fetchDocContent();
      setDocContent(content);
    };

    loadContent();
  }, []);

  // Show a loading message while content is being fetched
  if (!docContent) return <div>Loading content...</div>;

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
