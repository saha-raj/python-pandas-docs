// App.js
import React, { useState, useEffect } from 'react';
// import { HashRouter as Router, Route, Routes, useParams, useNavigate, useLocation } from 'react-router-dom';
import { HashRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import ContentDisplay from './components/ContentDisplay';
import { fetchDocContent } from './data/content';
import styles from './App.module.css';
import logo from './assets/python_origami_logo.png';

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
    <Router>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
          <Link to="/" className={styles.headerLink}>
            <img src={logo} alt="Logo" className={styles.headerLogo} />
            <h1>Fundamentals of Python for Data Analysis</h1>
          </Link>
          </div>
        </header>

        <div className={styles.mainArea}>
          <Sidebar content={docContent} onSelect={setSelectedItem} />
          <div className={styles.contentWrapper}>
            <Routes>
              <Route
                path="/"
                element={<ContentDisplay content={docContent} selectedItem={null} />}
              />
              <Route
                path="/:nodeId"
                element={<NodeContentDisplay content={docContent} />}
              />
            </Routes>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>© 2024 Raj Saha</div>
        </footer>
      </div>
    </Router>
  );
}

function NodeContentDisplay({ content }) {
  const { nodeId } = useParams();
  const [selectedItem, setSelectedItem] = useState(nodeId);

  // Adjust URL-based navigation to expand the tree properly
  useEffect(() => {
    setSelectedItem(nodeId);
  }, [nodeId]);

  return <ContentDisplay content={content} selectedItem={selectedItem} />;
}

export default App;
