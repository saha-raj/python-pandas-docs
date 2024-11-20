// Sidebar.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Select from 'react-select';
import TreeNode from './TreeNode';
import styles from './Sidebar.module.css';

const Sidebar = ({ content, onSelect }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedNodes, setExpandedNodes] = useState(new Set());
  const [selectedNode, setSelectedNode] = useState(null);

  // Directly add findNodePath function here
  const findNodePath = (sections, nodeId) => {
    const path = [];

    const search = (nodes, currentPath = []) => {
      for (const node of nodes) {
        const newPath = [...currentPath, node.id];
        if (node.id === nodeId) {
          path.push(...newPath);
          return true;
        }
        if (node.items && search(node.items, newPath)) {
          return true;
        }
      }
      return false;
    };

    search(sections);
    return path;
  };

  // Expand relevant nodes when loading directly from URL
  useEffect(() => {
    const urlPath = location.pathname.split('/').pop();
    if (urlPath && urlPath !== '') {
      const path = findNodePath(content.sections, urlPath);
      if (path.length > 0) {
        setExpandedNodes(new Set(path.slice(0, -1))); // Expand grandparent and parent
        setSelectedNode(urlPath);
        onSelect(urlPath);
      }
    } else {
      setSelectedNode(null);
      setExpandedNodes(new Set());
    }
  }, [location.pathname, content]);

  const getSearchOptions = (sections) => {
    let options = [];
    const processNode = (node, parentPath = '') => {
      const currentPath = parentPath ? `${parentPath} > ${node.title}` : node.title;

      if (node.content) {
        options.push({
          value: node.id,
          label: node.title,
          path: currentPath,
        });
      }

      if (node.items) {
        node.items.forEach(item => processNode(item, currentPath));
      }
    };

    sections.forEach(section => processNode(section));
    return options;
  };

  const searchOptions = getSearchOptions(content.sections);

  const handleSelect = (selected) => {
    if (selected) {
      const selectedId = selected.value;

      // Update expanded nodes to ensure only the grandparent and parent are expanded
      const path = findNodePath(content.sections, selectedId);
      const newExpandedNodes = new Set(path.slice(0, -1)); // Expand only grandparent and parent
      setExpandedNodes(newExpandedNodes);

      // Set the selected node and update URL
      setSelectedNode(selectedId);
      navigate(`/${selectedId}`);
      onSelect(selectedId);
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarSearch}>
        <Select
          className={styles.select}
          classNamePrefix="select"
          options={searchOptions}
          onChange={handleSelect}
          placeholder="Type to search..."
          isClearable
        />
      </div>
      <div className={styles.sidebarTree}>
        {content.sections.map((section) => (
          <TreeNode
            key={section.id}
            node={section}
            depth={0}
            onSelect={handleSelect}
            expandedNodes={expandedNodes}
            setExpandedNodes={setExpandedNodes}
            selectedNode={selectedNode}
            setSelectedNode={setSelectedNode}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
