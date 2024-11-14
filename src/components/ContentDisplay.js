import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './ContentDisplay.module.css';

const beardedLightTheme = {
  'code[class*="language-"]': { color: '#ec4476' },  // Default to pink

  'comment': { color: '#7f8c8d', fontStyle: 'italic' },
  'string': { color: '#0a9621' },                    // Green
  'number': { color: '#e06900' },                    // Orange
  'variable': { color: '#ec4476' },                  // Pink
  'operator': { color: '#0983d5' },                  // Blue for operators like `+`, `-`

  // Built-in functions (e.g., print) prioritized above keywords
  'builtin': { color: '#0983d5' },                   // Blue for built-ins
  'support.function': { color: '#0983d5' },          // Blue (another built-in option)
  'entity.name.function': { color: '#0983d5' },      // Blue for function names

  'keyword': { color: '#c39c00' },                   // Gold (for, in, from, import)
  'punctuation': { color: '#2c3e50' },               // Dark

  // Additional selectors for comprehensive coverage
  'plain': { color: '#ec4476' },
  'identifier': { color: '#0983d5' },
  'parameter': { color: '#0983d5' },
  'attr-name': { color: '#0983d5' },
  'property': { color: '#0983d5' },
  'constant': { color: '#e06900' }
};

const findContent = (sections, id) => {
  let result = null;

  const search = (items) => {
    for (const item of items) {
      if (item.id === id) {
        return { content: item.content, title: item.title };
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
  const selected = selectedItem ? findContent(content.sections, selectedItem) : null;

  return (
    <div className="content">
      {selected ? (
        <>
          <h2 style={{
            marginBottom: '1rem',
            color: '#2b2b2b'
          }}>
            {selected.title}
          </h2>
          <p style={{
            marginBottom: '1rem',
            color: '#2b2b2b'
          }}>
            {selected.content.description}
          </p>
          {selected.content.codeBlocks?.map((block, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              {/* Input code block */}
              <div style={{
                backgroundColor: '#fafaff',
                borderTopLeftRadius: '6px',
                borderTopRightRadius: '6px',
                border: '1px solid #efefef',
                marginBottom: '0px',
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
                    fontSize: '14px',
                    lineHeight: '1.6'
                  }}
                >
                  {block.code}
                </SyntaxHighlighter>
              </div>

              {/* Output block */}
              {block.output && (
                <div style={{
                  backgroundColor: '#eef0f2',
                  borderBottomLeftRadius: '6px',
                  borderBottomRightRadius: '6px',
                  border: '1px solid #efefef',
                  padding: '12px 16px',
                  fontFamily: "'Consolas', monospace",
                  fontSize: '14px',
                  color: '#70798c'
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