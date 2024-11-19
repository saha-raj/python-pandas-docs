import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import styles from './ContentDisplay.module.css';
import { defaultProps } from 'react-syntax-highlighter';

const beardedLightTheme = {
  'code[class*="language-"]': { color: '#ec4476' },
  // 'comment': { color: '#7f8c8d', fontStyle: 'italic' }, 
  'comment': { color: '#A9B2B2', fontStyle: 'italic' },
  'string': { color: '#0a9621' },
  'number': { color: '#e06900' },
  'variable': { color: '#ec4476' },
  'operator': { color: '#0983d5' },
  'builtin': { color: '#0983d5' },
  'support.function': { color: '#0983d5' },
  'entity.name.function': { color: '#0983d5' },
  'keyword': { color: '#c39c00' },
  'punctuation': { color: '#2c3e50' },
  'plain': { color: '#ec4476' },
  'identifier': { color: '#0983d5' },
  'parameter': { color: '#0983d5' },
  'attr-name': { color: '#0983d5' },
  'property': { color: '#0983d5' },
  'constant': { color: '#e06900' }
};

const enhancedLightTheme = {
  'code[class*="language-"]': { color: '#E06C75' },
  'comment': { color: '#5C6370', fontStyle: 'italic' },
  'prolog': { color: '#5C6370' },
  'doctype': { color: '#5C6370' },
  'cdata': { color: '#5C6370' },
  'punctuation': { color: '#56B6C2' },
  'namespace': { color: '#E5C07B' },
  'property': { color: '#E06C75' },
  'tag': { color: '#E06C75' },
  'boolean': { color: '#D19A66' },
  'number': { color: '#D19A66' },
  'constant': { color: '#D19A66' },
  'symbol': { color: '#D19A66' },
  'deleted': { color: '#D19A66' },
  'selector': { color: '#98C379' },
  'attr-name': { color: '#98C379' },
  'string': { color: '#98C379' },
  'char': { color: '#98C379' },
  'builtin': { color: '#98C379' },
  'inserted': { color: '#98C379' },
  'operator': { color: '#56B6C2' },
  'entity': { color: '#56B6C2' },
  'url': { color: '#56B6C2' },
  'variable': { color: '#E5C07B' },
  'atrule': { color: '#C678DD' },
  'attr-value': { color: '#C678DD' },
  'function': { color: '#61AFEF' },
  'class-name': { color: '#E5C07B' },
  'keyword': { color: '#C678DD' },
  'regex': { color: '#56B6C2' },
  'important': { fontWeight: 'bold' },
  'bold': { fontWeight: 'bold' },
  'italic': { fontStyle: 'italic' },
};

const divergentTheme = {
  'code[class*="language-"]': { color: '#1184a7' },
  'comment': { color: '#6fb1a0', fontStyle: 'italic' },
  'prolog': { color: '#6fb1a0' },
  'doctype': { color: '#6fb1a0' },
  'cdata': { color: '#6fb1a0' },
  'punctuation': { color: '#15a2a2' },
  'namespace': { color: '#15a2a2' },
  'property': { color: '#b4418e' },
  'tag': { color: '#d94a8c' },
  'boolean': { color: '#fe7434' },
  'number': { color: '#fe7434' },
  'constant': { color: '#fe7434' },
  'symbol': { color: '#fe7434' },
  'deleted': { color: '#ea515f' },
  'selector': { color: '#1184a7' },
  'attr-name': { color: '#15a2a2' },
  'string': { color: '#fe7434' },
  'char': { color: '#fe7434' },
  'builtin': { color: '#15a2a2' },
  'inserted': { color: '#6fb1a0' },
  'operator': { color: '#d94a8c' },
  'entity': { color: '#d94a8c' },
  'url': { color: '#d94a8c' },
  'variable': { color: '#b4418e' },
  'atrule': { color: '#ea515f' },
  'attr-value': { color: '#fe7434' },
  'function': { color: '#1184a7' },
  'class-name': { color: '#b4418e' },
  'keyword': { color: '#ea515f' },
  'regex': { color: '#fe7434' },
  'important': { fontWeight: 'bold' },
  'bold': { fontWeight: 'bold' },
  'italic': { fontStyle: 'italic' },
};

const freshTheme = {
  'code[class*="language-"]': { color: '#118ab2' }, // Overall code color
  'comment': { color: '#118ab2', fontStyle: 'italic' }, // e.g., # This is a comment
  'punctuation': { color: '#f78c6b' }, // e.g., {}, [], (), ;, .
  'namespace': { color: '#0cb0a9' }, // e.g., import numpy as np (the "as" keyword)
  'property': { color: '#ef476f' }, // e.g., obj.property
  'boolean': { color: '#f78c6b' }, // e.g., True, False
  'number': { color: '#f78c6b' }, // e.g., 42, 3.14
  'constant': { color: '#f78c6b' }, // e.g., PI = 3.14159
  'symbol': { color: '#f78c6b' }, // e.g., :, ->, => (not commonly used in Python)
  'deleted': { color: '#ef476f' }, // Deleted code (e.g., in a diff)
  'string': { color: '#0cb0a9' }, // e.g., "Hello, world!", 'Python is great!'
  'char': { color: '#0cb0a9' }, // e.g., 'a', '\n'
  'builtin': { color: '#0cb0a9' }, // e.g., print(), len(), range()
  'inserted': { color: '#83d483' }, // Inserted code (e.g., in a diff)
  'operator': { color: '#06d6a0' }, // e.g., +, -, *, /, %, =, ==, !=, >, 
  'variable': { color: '#ef476f' }, // e.g., x, my_var, _private_var
  'function': { color: '#118ab2' }, // e.g., def my_function():
  'class-name': { color: '#ef476f' }, // e.g., class MyClass:
  'keyword': { color: '#ef476f' }, // e.g., if, else, for, while, return, def, class
  'regex': { color: '#ffd166' }, // e.g., re.search(r'\d+', text)
};

const pythonTheme = {
  'code[class*="language-"]': { color: '#52b2cf' }, // Overall code color
  'comment': { color: '#a7aeb4', fontStyle: 'italic' }, // e.g., # This is a comment
  'punctuation': { color: '#71a5de' }, // e.g., {}, [], (), ;, .
  'namespace': { color: '#3e8bd8' }, // e.g., import numpy as np (the "as" keyword)
  'property': { color: '#f15bb5' }, // e.g., obj.property
  'boolean': { color: '#ff7c43' }, // e.g., True, False
  'number': { color: '#f95d6a' }, // e.g., 42, 3.14
  'constant': { color: '#f95d6a' }, // e.g., PI = 3.14159
  'string': { color: '#55d6c2' }, // e.g., "Hello, world!", 'Python is great!'
  'char': { color: '#55d6c2' }, // e.g., 'a', '\n'
  'builtin': { color: '#3e8bd8' }, // e.g., print(), len(), range()
  'operator': { color: '#3e8bd8' }, // e.g., +, -, *, /, %, =, ==, !=, >, 
  'variable': { color: '#f95d6a' }, // e.g., x, my_var, _private_var
  'function': { color: '#d45087' }, // e.g., def my_function():
  'class-name': { color: '#f15bb5' }, // e.g., class MyClass:
  'keyword': { color: '#ff7480' }, // e.g., if, else, for, while, return, def, class
  'regex': { color: '#f95d6a' }, // e.g., re.search(r'\d+', text)
};

const pastelPythonTheme = {
  'code[class*="language-"]': { color: '#52b2cf' }, // Overall code color (pastel blue-gray)
  'comment': { color: '#a8bfc7', fontStyle: 'italic' }, // Pastel gray for comments
  'punctuation': { color: '#9cafb7' }, // Punctuation (pastel gray-blue)
  'namespace': { color: '#6c7b95' }, // Namespace (e.g., "as" keyword)
  'property': { color: '#e4a1b1' }, // Pastel pink for properties
  'boolean': { color: '#a3d9a5' }, // Pastel green for booleans (True, False)
  'number': { color: '#60d394' }, // Pastel green for numbers
  'constant': { color: '#a3d9a5' }, // Pastel green for constants
  'string': { color: '#90be6d' }, // Pastel green for strings
  'char': { color: '#00afb9' }, // Pastel blue for characters
  'builtin': { color: '#6d9dc5' }, // Pastel blue for built-in functions like print(), len(), range()
  'operator': { color: '#6c7b95' }, // Operators (e.g., +, -, *, /)
  'variable': { color: 'purple' }, // Pastel purple for variables
  'function': { color: '#4ecdc4' }, // Pastel blue-green for function names
  'class-name': { color: 'red' }, // Pastel pink for class names
  'keyword': { color: '#ff70a6' }, // Pastel red for keywords (if, else, for, while, return, def, class)
  'regex': { color: '#a3d9a5' }, // Pastel green for regex patterns
};

const neoPythonTheme = {
  'code[class*="language-"]': { color: '#66818F' }, // Overall code color (pastel blue-gray)
  'comment': { color: '#a8bfc7', fontStyle: 'italic' }, // Pastel gray for comments
  'punctuation': { color: '#9bc7c5' }, // Punctuation (pastel gray-blue)
  'namespace': { color: '#6c7b95' }, // Namespace (e.g., "as" keyword)
  'property': { color: '#e4a1b1' }, // Pastel pink for properties
  'boolean': { color: '#F47CC4' }, // Pastel green for booleans (True, False)
  // 'number': { color: '#0096c7' }, // Pastel green for numbers 06d6a0
  'number': { color: '#06d6a0' }, // Pastel green for numbers 06d6a0
  'constant': { color: '#a3d9a5' }, // Pastel green for constants
  'string': { color: '#43aa8b' }, // Pastel green for strings
  'char': { color: '#00afb9' }, // Pastel blue for characters
  'builtin': { color: '#0cb2af' }, // Pastel blue for built-in functions like print(), len(), range()
  'operator': { color: '#F47CC4' }, // Operators (e.g., +, -, *, /)
  'variable': { color: 'green' }, // Pastel purple for variables
  'function': { color: '#ee6c4d' }, // Pastel blue-green for function names
  'class-name': { color: '#9d4edd' }, // Pastel pink for class names
  // 'keyword': { color: '#db7f8e' }, // Pastel red for keywords (if, else, for, while, return, def, class) 80a1d4
  'keyword': { color: '#2ab7ca' }, // Pastel red for keywords (if, else, for, while, return, def, class) 80a1d4
  'regex': { color: '#a3d9a5' }, // Pastel green for regex patterns
};

const neobeardedLightTheme = {
  'code[class*="language-"]': { color: '#ec4476' },
  // 'comment': { color: '#7f8c8d', fontStyle: 'italic' }, 
  'comment': { color: '#A9B2B2', fontStyle: 'italic' },
  'string': { color: '#1dc39a' },
  'number': { color: '#eb806f' },
  'variable': { color: '#ec4476' },
  'operator': { color: '#0983d5' },
  'builtin': { color: '#0983d5' },
  'support.function': { color: '#0983d5' },
  'entity.name.function': { color: '#0983d5' },
  'keyword': { color: '#239AA9' },
  'punctuation': { color: '#246a73' },
  'plain': { color: '#ec4476' },
  'identifier': { color: '#0983d5' },
  'parameter': { color: '#0983d5' },
  'attr-name': { color: '#0983d5' },
  'property': { color: '#0983d5' },
  'constant': { color: '#e06900' },
  'function': { color: '#737796' }, 

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

  sections.forEach((section) => {
    const found = search([section]);
    if (found) result = found;
  });

  return result;
};

const CodeBlock = ({ code, output }) => (
  <div className={styles.codeBlock}>
    <div className={`${styles.codeContainer} ${!output ? styles.codeContainerSingle : ''}`}>
      <SyntaxHighlighter
        language="python"
        // style={beardedLightTheme}
        style={neobeardedLightTheme}
        customStyle={{
          margin: 0,
          padding: '5px',
          backgroundColor: 'transparent',
          fontFamily: "'Consolas', monospace",
          fontSize: '14px',
          lineHeight: '1.6',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
    {output && (
      <div className={styles.outputBlock}>
        {output}
      </div>
    )}
  </div>
);

const ContentDisplay = ({ selectedItem, content }) => {
  const selected = selectedItem ? findContent(content.sections, selectedItem) : null;

  if (!selected) {
    return <p className={styles.emptyMessage}>Select a topic to view details</p>;
  }

  const renderContent = (description, codeBlocks) => {
    // Split content into sections at each header
    const sections = description.split(/(?=## )/).filter(Boolean);
    
    // Count code blocks per section by looking for python blocks
    const codeBlockCounts = sections.map(section => 
      (section.match(/```python/g) || []).length
    );
  
    // Now we can distribute code blocks correctly
    let blockIndex = 0;
    return sections.map((section, i) => {
      // Get the code blocks for this section
      const sectionCodeBlocks = codeBlocks.slice(
        blockIndex, 
        blockIndex + codeBlockCounts[i]
      );
      blockIndex += codeBlockCounts[i];
  
      // Remove code blocks from the text content
      const textContent = section
        .replace(/@end-section/, '')  // Remove section marker
        .replace(/```python[\s\S]*?```output[\s\S]*?```/g, '') // Remove code blocks
        .trim();
  
      return (
        <div key={i} className={styles.contentRow}>
          <div className={styles.textCell}>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ node, ...props }) => <h2 className={styles.h2Header} {...props} />,
                h3: ({ node, ...props }) => <h3 className={styles.h3Header} {...props} />,
                h4: ({ node, ...props }) => <h4 className={styles.h4Header} {...props} />,
                p: ({ node, ...props }) => <p className={styles.description} {...props} />,
                code: ({ node, inline, ...props }) => {
                  const style = inline ? styles.inlineCode : '';
                  return <code className={style} {...props} />;
                },
              }}
            >
              {textContent}
            </ReactMarkdown>
          </div>
          <div className={styles.codeCell}>
            {sectionCodeBlocks.map((block, j) => (
              <CodeBlock 
                key={`${i}-${j}`}
                code={block.code}
                output={block.output}
              />
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{selected.title}</h2>
      {renderContent(selected.content.description, selected.content.codeBlocks)}
    </div>
  );
};

export default ContentDisplay;