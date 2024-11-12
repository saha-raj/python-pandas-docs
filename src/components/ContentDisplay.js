import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './ContentDisplay.module.css';  // Add this import


// Define custom theme
// const beardedLightTheme = {
//   'code[class*="language-"]': { color: '#2c3e50' },  // Default text color for other elements
//   'pre[class*="language-"]': { background: '#ecf0f1' },  // Background color for code blocks

//   // Assigning exact colors based on your specifications
//   'comment': { color: '#7f8c8d', fontStyle: 'italic' },  // Comments (Light Gray)
//   'string': { color: '#0a9621' },  // Strings (Green)
//   'keyword': { color: '#0983d5' },  // Keywords like import, for, in (Gold)
//   'builtin': { color: '#0983d5' },  // Built-in functions like print (Blue)
//   'function': { color: '#0983d5' },  // Function calls like print (Blue)
//   'variable': { color: '#ec4476' },  // Variables (Pinkish Red)
//   'parameter': { color: '#ec4476' },  // Function parameters (Pinkish Red to match variables)
//   'number': { color: '#e06900' },  // Numbers (Orange)
//   'constant': { color: '#e06900' },  // Constants and literals (Orange)
//   'operator': { color: '#c39c00' },  // Operators like +, - to match keywords (Gold)
//   'punctuation': { color: '#2c3e50' },  // Punctuation (Default dark color)
// };

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
                // backgroundColor: '#eeeeee',
                backgroundColor: '#fafaff',
                // borderRadius: '6px',
                borderTopLeftRadius: '6px',
                borderTopRightRadius: '6px',
                border: '1px solid #efefef',
                marginBottom: '0px',
                overflow: 'hidden'
              }}>
                <SyntaxHighlighter
                  language="python"
                  style={beardedLightTheme}
                  // style={darcula}
                  customStyle={{
                    margin: 0,
                    padding: '16px',
                    backgroundColor: 'transparent',
                    fontFamily: "'Consolas', monospace",
                    fontSize: '14px',
                    lineHeight: '1.6'  // Adjust this value to increase or decrease line spacing
                  }}
                >
                  {block.code}
                </SyntaxHighlighter>
              </div>

              {/* Output block */}
              {block.output && (
                <div style={{
                  // backgroundColor: '#eff1f3',
                  backgroundColor: '#eef0f2',
                  // borderRadius: '6px',
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
