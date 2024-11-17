import React, { useState } from 'react';
import Select from 'react-select';
import TreeNode from './TreeNode';
import { flattenContent, findNodePath } from '../utils/utils';
import styles from './Sidebar.module.css';

const Sidebar = ({ content, onSelect }) => {
  const [expandedNodes, setExpandedNodes] = useState(new Set());
  const [selectedNode, setSelectedNode] = useState(null);

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
      const path = findNodePath(content.sections, selected.value);
      setExpandedNodes(new Set(path));
      setSelectedNode(selected.value);
      onSelect(selected.value);
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
            onSelect={onSelect}
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
