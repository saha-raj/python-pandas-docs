import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ContentDisplay from './components/ContentDisplay';
import { fetchDocContent } from './data/content';
import styles from './App.module.css';
import logo from './assets/python_origami_logo.png'; // Import your logo image


function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [docContent, setDocContent] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      const content = await fetchDocContent();
      setDocContent(content);
    };

    loadContent();
  }, []);

  if (!docContent) return <div>Loading content...</div>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img src={logo} alt="Logo" className={styles.headerLogo} /> {/* Add logo image */}

          <h1>Fundamentals of Python for Data Analysis</h1>
        </div>
      </header>

      <div className={styles.mainArea}>
        <Sidebar content={docContent} onSelect={setSelectedItem} />
        <div className={styles.contentWrapper}>
          <ContentDisplay content={docContent} selectedItem={selectedItem} />
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>© 2024 Raj Saha</div>
      </footer>
    </div>
  );
}

export default App;
