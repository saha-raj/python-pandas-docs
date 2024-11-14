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
        id: filename.replace('./', '').replace('.md', ''), // Keep ID as filename
        metadata: yaml.load(frontmatter),
        content: mainContent.trim()
      };
    });

    // Build tree structure
    const tree = [];
    const grandParentMap = new Map();

    processedFiles.forEach(file => {
      const { metadata } = file;

      // Handle grandparent level (same as before)
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

      // Handle parent level (same as before)
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

      // Modified leaf node creation
      const leaf = {
        id: metadata.self.toLowerCase().replace(/\s+/g, '-'),  // Create ID from metadata.self
        title: metadata.self,  // Use metadata.self directly
        order: metadata.selfOrder,
        content: {
          description: file.content.split('\n')[0],
          codeBlocks: parseCodeBlocks(file.content)
        }
      };
      parent.items.push(leaf);
    });

    // Sort all levels (same as before)
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

// parseCodeBlocks function stays the same

function parseCodeBlocks(content) {
  const blocks = [];
  const regex = /```(python|output)?\n([\s\S]*?)```/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const type = match[1];
    const code = match[2].trim();

    if (type === 'output') {
      if (blocks.length > 0) {
        blocks[blocks.length - 1].output = code;
      }
    } else {
      blocks.push({ code });
    }
  }

  return blocks;
}