import yaml from 'js-yaml';

export const fetchDocContent = async () => {
  try {
    const mdContext = require.context('!!raw-loader!../content', false, /\.md$/);
    const mdFiles = mdContext.keys();

    // Process files
    const processedFiles = mdFiles.map(filename => {
      const content = mdContext(filename).default;
      const [, frontmatter, mainContent] = content.split('---\n');

      return {
        id: filename.replace('./', '').replace('.md', ''),
        metadata: yaml.load(frontmatter),
        content: mainContent.trim()
      };
    });

    // Build tree structure
    const tree = [];
    const grandParentMap = new Map();

    processedFiles.forEach(file => {
      const { metadata } = file;

      // Handle grandparent level
      let grandParent = grandParentMap.get(metadata.grandParent);
      if (!grandParent) {
        grandParent = {
          id: metadata.grandParent.toLowerCase().replace(/\s+/g, '-'),
          title: metadata.grandParent,
          order: metadata.grandParentOrder,
          items: []
        };
        grandParentMap.set(metadata.grandParent, grandParent);
        tree.push(grandParent);
      }

      // Handle parent level
      let parent = grandParent.items.find(item => item.title === metadata.parent);
      if (!parent) {
        parent = {
          id: `${grandParent.id}-${metadata.parent.toLowerCase().replace(/\s+/g, '-')}`,
          title: metadata.parent,
          order: metadata.parentOrder,
          items: []
        };
        grandParent.items.push(parent);
      }

      // Process content keeping the markdown and code blocks in order
      const { description, codeBlocks } = parseContent(file.content);

      // Modified leaf node creation
      const leaf = {
        id: metadata.self.toLowerCase().replace(/\s+/g, '-'),
        title: metadata.self,
        order: metadata.selfOrder,
        content: {
          description,
          codeBlocks
        }
      };
      parent.items.push(leaf);
    });

    // Sort all levels
    tree.sort((a, b) => a.order - b.order);
    tree.forEach(grandParent => {
      grandParent.items.sort((a, b) => a.order - b.order);
      grandParent.items.forEach(parent => {
        parent.items.sort((a, b) => a.order - b.order);
      });
    });

    return { sections: tree };
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};

function parseContent(content) {
  // Normalize line endings and remove empty lines after front matter
  let normalizedContent = content.replace(/\r\n/g, '\n').trim();

  const parts = normalizedContent.split(/```(python|output)?/);
  const codeBlocks = [];
  let description = '';
  let currentBlock = null;

  parts.forEach((part, index) => {
    if (part === 'python') {
      // Store any text that came before this code block
      const previousText = parts[index - 1];
      if (previousText && !['python', 'output'].includes(parts[index - 2])) {
        const text = previousText.trim();
        if (text) {
          description += (description ? '\n\n' : '') + text;
        }
      }
      currentBlock = { code: parts[index + 1].trim() };
      codeBlocks.push(currentBlock);
    } else if (part === 'output' && currentBlock) {
      currentBlock.output = parts[index + 1].trim();
      currentBlock = null;
    } else if (index === parts.length - 1 && part.trim()) {
      // Handle any remaining text after the last code block
      description += (description ? '\n\n' : '') + part.trim();
    }
  });

  // Clean up the description: normalize multiple newlines to double newlines
  description = description
    .replace(/\n{3,}/g, '\n\n')  // Replace triple+ newlines with double
    .trim();                      // Remove leading/trailing whitespace

  console.log("Processed content:", {
    description,
    codeBlocks,
    originalContent: normalizedContent
  });

  return {
    description,
    codeBlocks
  };
}