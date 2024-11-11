import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './ContentDisplay.module.css';  // Add this import


// Define custom theme
const beardedLightTheme = {
  'code[class*="language-"]': {
    color: '#4a4543',  // Default text color
    //    background: '#ffffff',
  },
  'pre[class*="language-"]': {
    color: '#4a4543',
    background: '#ffffff',
  },
  'keyword': {
    color: '#a46d1f'  // Keywords like def, return, import
  },
  'builtin': {
    color: '#e3116c'  // Built-in functions
  },
  'function': {
    color: '#7a3e9d'  // Function names
  },
  'string': {
    color: '#1b9431'  // String literals
  },
  'number': {
    color: '#07a'  // Numbers
  },
  'comment': {
    color: '#989a9c',
    fontStyle: 'italic'  // Comments
  },
  'class-name': {
    color: '#e3116c'  // Class names, types
  },
  'parameter': {
    color: '#4a4543'  // Function parameters
  },
  'operator': {
    color: '#4a4543'  // Operators
  },
  'punctuation': {
    color: '#4a4543'  // Punctuation
  }
};

const findContent = (sections, id) => {
  let result = null;

  const search = (items) => {
    for (const item of items) {
      if (item.id === id && item.content) {
        return item.content;
      }
      if (item.items) {
        const found = search(item.items);
        if (found) return found;
      }
    }
    return null;
  };

  sections.forEach(section => {
    const found = search([section]);
    if (found) result = found;
  });

  return result;
};

const ContentDisplay = ({ selectedItem, content }) => {
  const selectedContent = selectedItem ? findContent(content.sections, selectedItem) : null;

  return (
    <div className="content">
      {selectedContent ? (
        <>
          <h2 style={{
            marginBottom: '1rem',
            color: '#2b2b2b'
          }}>
            {selectedItem}
          </h2>
          <p style={{
            marginBottom: '1rem',
            color: '#2b2b2b'
          }}>
            {selectedContent.description}
          </p>
          {selectedContent.codeBlocks?.map((block, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              {/* Input code block */}
              <div style={{
                backgroundColor: '#eeeeee',
                // borderRadius: '6px',
                borderTopLeftRadius: '6px',
                borderTopRightRadius: '6px',
                border: '1px solid #efefef',
                marginBottom: '1px',
                overflow: 'hidden'
              }}>
                <SyntaxHighlighter
                  language="python"
                  style={beardedLightTheme}
                  customStyle={{
                    margin: 0,
                    padding: '16px',
                    backgroundColor: 'transparent',
                    fontFamily: "'Consolas', monospace",
                    fontSize: '14px'
                  }}
                >
                  {block.code}
                </SyntaxHighlighter>
              </div>

              {/* Output block */}
              {block.output && (
                <div style={{
                  backgroundColor: '#eff1f3',
                  // borderRadius: '6px',
                  borderBottomLeftRadius: '6px',
                  borderBottomRightRadius: '6px',
                  border: '1px solid #efefef',
                  padding: '12px 16px',
                  fontFamily: "'Consolas', monospace",
                  fontSize: '12px',
                  color: '#1f3a41'
                }}>
                  {block.output}
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <p>Select a topic to view details</p>
      )}
    </div>
  );
};

export default ContentDisplay;
