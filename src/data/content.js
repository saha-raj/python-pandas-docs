// src/data/content.js
import yaml from 'js-yaml';

export const fetchDocContent = async () => {
  try {
    // Fetch the content.yaml file from the public directory
    const response = await fetch(`${process.env.PUBLIC_URL}/content.yaml`);
    const text = await response.text();
    // Parse the YAML content to a JavaScript object
    const docContent = yaml.load(text);
    return docContent;
  } catch (error) {
    console.error("Failed to load content:", error);
    return null;
  }
};
