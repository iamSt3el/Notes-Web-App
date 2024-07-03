const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

// Function to recursively read directory
async function readDirectory(dir) {
  const items = await fs.readdir(dir, { withFileTypes: true });
  const result = [];

  for (const item of items) {
    if (item.isDirectory()) {
      result.push({
        type: 'folder',
        name: item.name,
        children: await readDirectory(path.join(dir, item.name))
      });
    } else if (item.name.endsWith('.md')) {
      result.push({
        type: 'file',
        name: item.name,
        path: path.join(dir, item.name)
      });
    }
  }

  return result;
}

// API endpoint to get folder structure
app.get('/api/folder-structure', async (req, res) => {
  try {
    const rootDir = 'docs'; // Replace with your actual path
    const structure = await readDirectory(rootDir);
    res.json(structure);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/file-content', async (req, res) => {
  try {
    const filePath = req.query.path;
    const content = await fs.readFile(filePath, 'utf-8');
    res.json({ content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));