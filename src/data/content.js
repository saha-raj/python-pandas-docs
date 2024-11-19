import yaml from 'js-yaml';
// import { homeContent } from './homeContent';

function parseContent(content) {
  try {
    // Normalize line endings
    let normalizedContent = content.replace(/\r\n/g, '\n').trim();

    // Split content into sections using @end-section markers
    const sections = normalizedContent.split('@end-section').map(section => section.trim());
    
    let finalDescription = '';
    const codeBlocks = [];

    // Process each section
    sections.forEach(section => {
      if (!section) return;
      
      // Add section text to description with proper spacing
      finalDescription += section + '\n\n';

      // Extract code blocks from this section
      const parts = section.split(/```(python|output)?/);
      let currentBlock = null;

      parts.forEach((part, index) => {
        if (part === 'python') {
          currentBlock = { code: parts[index + 1].trim() };
          codeBlocks.push(currentBlock);
        } else if (part === 'output' && currentBlock) {
          currentBlock.output = parts[index + 1].trim();
          currentBlock = null;
        }
      });
    });

    // Clean up final description
    finalDescription = finalDescription.trim();

    console.log('Parsed content:', {
      descriptionLength: finalDescription.length,
      numCodeBlocks: codeBlocks.length
    });

    return {
      description: finalDescription,
      codeBlocks
    };
  } catch (error) {
    console.error('Error in parseContent:', error);
    return {
      description: '',
      codeBlocks: []
    };
  }
}

export const fetchDocContent = async () => {
  try {
    const mdContext = require.context('!!raw-loader!../content', false, /\.md$/);
    const mdFiles = mdContext.keys();

    // home content
    // const parsedHomeContent = parseContent(homeContent);

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
    console.error("Error in fetchDocContent:", error);
    return { sections: [] };
  }
};