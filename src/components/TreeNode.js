import React from 'react';
import './TreeNode.css';

const TreeNode = ({
  node,
  depth = 0,
  onSelect,
  expandedNodes,
  setExpandedNodes,
  selectedNode,
  setSelectedNode,
}) => {
  const hasItems = node.items && node.items.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  const isSelected = node.id === selectedNode;

  const handleClick = () => {
    if (node.content) {
      onSelect(node.id);
      setSelectedNode(node.id);
    }

    if (hasItems) {
      const newExpanded = new Set(expandedNodes);
      if (isExpanded) {
        newExpanded.delete(node.id);
      } else {
        newExpanded.add(node.id);
      }
      setExpandedNodes(newExpanded);
    }
  };

  return (
    <div className="tree-node-container">
      {depth > 0 && (
        <div
          className="tree-node-vertical-line"
          style={{
            left: `${depth * 16 - 8}px`,
          }}
        />
      )}

      <div
        className={`tree-node-content ${isSelected ? 'selected' : ''}`}
        style={{
          marginLeft: `${depth * 16}px`,
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        {hasItems ? (
          <div className="tree-node-expand-button">
            {isExpanded ? '−' : '+'}
          </div>
        ) : (
          <div className="tree-node-spacer" />
        )}

        <span className={`tree-node-title ${node.content ? 'has-content' : ''} ${depth === 0 ? 'root' : hasItems ? 'parent' : 'leaf'}`}>
          {node.title}
        </span>
      </div>

      {hasItems && isExpanded && (
        <div>
          {node.items.map((item) => (
            <TreeNode
              key={item.id}
              node={item}
              depth={depth + 1}
              onSelect={onSelect}
              expandedNodes={expandedNodes}
              setExpandedNodes={setExpandedNodes}
              selectedNode={selectedNode}
              setSelectedNode={setSelectedNode}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
