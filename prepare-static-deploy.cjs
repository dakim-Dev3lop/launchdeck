const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  throw new Error('dist directory not found. Run npm run build first.');
}

const out = path.join(__dirname, '.vercelignore');
const lines = [
  'node_modules',
  'src',
  'public',
  '.git',
  '.vercel',
  'package-lock.json',
  'package.json',
  'vite.config.js',
  'eslint.config.js',
  'README.md',
  'SUBMISSION.md'
];
fs.writeFileSync(out, lines.join('\n') + '\n');
console.log('Wrote .vercelignore for static deploy');
