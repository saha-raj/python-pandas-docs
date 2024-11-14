import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import styles from './ContentDisplay.module.css';

const beardedLightTheme = {
  'code[class*="language-"]': { color: '#ec4476' },
  'comment': { color: '#7f8c8d', fontStyle: 'italic' },
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

  sections.forEach(section => {
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
          padding: '16px',
          backgroundColor: 'transparent',
          fontFamily: "'Consolas', monospace",
          fontSize: '14px',
          lineHeight: '1.6'
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

  const renderContent = (description, codeBlocks) => {
    const textParts = description.split('\n\n');
    const result = [];
    let codeBlockIndex = 0;

    textParts.forEach((part, index) => {
      if (part.trim()) {
        result.push(
          <ReactMarkdown
            key={`text-${index}`}
            rehypePlugins={[rehypeRaw]}
            components={{
              h2: ({ node, ...props }) => (
                <h2 className={styles.h2Header} {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className={styles.h3Header} {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h4 className={styles.h4Header} {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className={styles.description} {...props} />
              ),
              // old
              // code: ({ node, inline, ...props }) =>
              //   inline ? (
              //     <code className={styles.inlineCode} {...props} />
              //   ) : (
              //     <code {...props} />
              //   )

              // new
              code: ({ node, inline, ...props }) => {
                const style = inline ? styles.inlineCode : '';
                return <code className={style} {...props} />
              }
            }}
          >
            {part}
          </ReactMarkdown>
        );

        if (codeBlockIndex < codeBlocks.length) {
          result.push(
            <CodeBlock
              key={`code-${codeBlockIndex}`}
              code={codeBlocks[codeBlockIndex].code}
              output={codeBlocks[codeBlockIndex].output}
            />
          );
          codeBlockIndex++;
        }
      }
    });

    return result;
  };

  return (
    <div className={styles.content}>
      {selected ? (
        <>
          <h2 className={styles.title}>
            {selected.title}
          </h2>
          {renderContent(
            selected.content.description,
            selected.content.codeBlocks
          )}
        </>
      ) : (
        <p className={styles.emptyMessage}>Select a topic to view details</p>
      )}
    </div>
  );
};

export default ContentDisplay;