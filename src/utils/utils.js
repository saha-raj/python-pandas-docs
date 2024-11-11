// export const flattenContent = (sections, parentPath = '') => {
//   let items = [];

//   const processNode = (node, path) => {
//     const currentPath = path ? `${path} > ${node.title}` : node.title;

//     if (node.content) {
//       items.push({
//         value: node.id,
//         label: currentPath,
//         content: node.content
//       });
//     }

//     if (node.items) {
//       node.items.forEach(item => processNode(item, currentPath));
//     }
//   };

//   sections.forEach(section => processNode(section, ''));
//   return items;
// };

export const flattenContent = (sections) => {
  let options = [];

  const processNode = (node) => {
    // If node has content but no items, it's a leaf node
    if (node.content && (!node.items || node.items.length === 0)) {
      options.push({
        value: node.id,
        label: node.title,
        path: [] // We'll use this for expansion
      });
    }

    // Process children if they exist
    if (node.items) {
      node.items.forEach(processNode);
    }
  };

  sections.forEach(processNode);
  return options;
};

// New helper function to find a node's path in the tree
export const findNodePath = (sections, targetId) => {
  const path = [];

  const search = (nodes, id) => {
    for (const node of nodes) {
      if (node.id === id) {
        return true;
      }

      if (node.items) {
        if (search(node.items, id)) {
          path.unshift(node.id);
          return true;
        }
      }
    }
    return false;
  };

  sections.forEach(section => {
    if (search([section], targetId)) {
      path.unshift(section.id);
    }
  });

  return path;
};