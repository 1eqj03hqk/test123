
const colors = ['red', 'green', 'blue', 'orange', 'purple']


const fs = require('fs');
const path = require('path');

// Target: ../data/myScript.js
const targetDir = path.join(__dirname, '..', 'data');
const fileName = 'test.js';
const fileContent = `
  export const data = { color: "${colors[Math.floor(Math.random()* colors.length)]}" };
`

// Ensure the directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Write the file
const filePath = path.join(targetDir, fileName);
fs.writeFileSync(filePath, fileContent, 'utf8');

console.log(`File created at: ${filePath}`);
