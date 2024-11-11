import React, { useState } from 'react';
import Select from 'react-select';
import TreeNode from './TreeNode';
import { flattenContent, findNodePath } from '../utils/utils';
import styles from './Sidebar.module.css';

const Sidebar = ({ content, onSelect }) => {
  const [expandedNodes, setExpandedNodes] = useState(new Set());
  const [selectedNode, setSelectedNode] = useState(null);

  // Modified to include child nodes when parent matches
  const getSearchOptions = (sections) => {
    let options = [];

    const processNode = (node, parentPath = '') => {
      const currentPath = parentPath ? `${parentPath} > ${node.title}` : node.title;

      // Add the current node if it has content
      if (node.content) {
        options.push({
          value: node.id,
          label: node.title,
          path: currentPath
        });
      }

      // Process children if they exist
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
      onSelect({
        id: selected.value,
        title: selected.label  // Pass the title along
      });
    }
  };

  // Find all child nodes of a matching node
  const findChildNodes = (node) => {
    let children = [];
    if (node.content) {
      children.push({
        value: node.id,
        label: node.title
      });
    }
    if (node.items) {
      node.items.forEach(item => {
        children = [...children, ...findChildNodes(item)];
      });
    }
    return children;
  };

  // New filter function
  const filterOptions = (option, inputValue) => {
    if (!inputValue) return false;

    const searchTerm = inputValue.toLowerCase();

    // Search through the entire content tree
    const findMatches = (node) => {
      if (node.title.toLowerCase().includes(searchTerm)) {
        // If this node matches, return all its child nodes plus itself
        return findChildNodes(node);
      }

      if (node.items) {
        let matches = [];
        node.items.forEach(item => {
          matches = [...matches, ...findMatches(item)];
        });
        return matches;
      }

      return [];
    };

    // Get all matching options
    const matches = content.sections.flatMap(findMatches);

    // Check if current option is in matches
    return matches.some(match => match.value === option.value);
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
          noOptionsMessage={({ inputValue }) =>
            inputValue ? "No matches found" : null
          }
          onInputChange={(inputValue, { action }) => {
            if (action === "input-change" && inputValue === "") {
              return "";
            }
          }}
          filterOption={filterOptions}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null
          }}
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