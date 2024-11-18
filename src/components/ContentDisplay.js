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
        style={beardedLightTheme}
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