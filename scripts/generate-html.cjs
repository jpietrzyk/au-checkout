const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');

const md = new MarkdownIt();

const inputDir = path.join(__dirname, '../src/assets/legal');
const outputDir = inputDir;

const files = ['terms.md', 'privacy.md', 'consents.md', 'security.md', 'contact.md'];

files.forEach(file => {
  const mdPath = path.join(inputDir, file);
  const htmlPath = path.join(outputDir, file.replace('.md', '.html'));

  if (fs.existsSync(mdPath)) {
    const mdContent = fs.readFileSync(mdPath, 'utf8');
    const htmlContent = md.render(mdContent);

    fs.writeFileSync(htmlPath, htmlContent);
    console.log(`Generated ${htmlPath}`);
  }
});
