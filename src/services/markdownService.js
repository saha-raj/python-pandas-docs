import matter from 'gray-matter';

// Read all .md files from src/content
const markdownFiles = require.context('../content', false, /\.md$/);

export async function getAllMarkdownFiles() {
    const files = markdownFiles.keys();
    console.log("Found markdown files:", files);

    return files.map(filename => {
        const content = markdownFiles(filename);
        const { data, content: markdownContent } = matter(content.default);
        console.log(`Processed ${filename}:`, data);

        return {
            metadata: data,
            content: markdownContent,
            id: filename.replace('./', '').replace('.md', '')
        };
    });
}

export function buildTreeFromFiles(files) {
    console.log("Starting tree build with files:", files);

    let tree = [];
    let grandParents = new Map();  // Use Map to ensure uniqueness

    files.forEach(file => {
        const { metadata } = file;
        console.log("Processing metadata:", metadata);

        // Get or create grandparent node
        let grandParent = grandParents.get(metadata.grandParent);
        if (!grandParent) {
            grandParent = {
                id: metadata.grandParent.toLowerCase().replace(/\s+/g, '-'),
                title: metadata.grandParent,
                order: metadata.grandParentOrder,
                items: []
            };
            grandParents.set(metadata.grandParent, grandParent);
            tree.push(grandParent);
        }

        // Find or create parent node
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

        // Create leaf node
        const leaf = {
            id: file.id,
            title: metadata.self,
            order: metadata.selfOrder,
            content: {
                description: file.content.split('\n')[0],
                codeBlocks: parseCodeBlocks(file.content)
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

    console.log("Final tree:", { sections: tree });
    return { sections: tree };
}

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