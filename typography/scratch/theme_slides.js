const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, '..', 'slides');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDir(filePath);
    } else if (file.endsWith('.html')) {
      processHtml(filePath);
    } else if (file.endsWith('.css')) {
      processCss(filePath);
    }
  }
}

const fontLink = '<link id="barbarian-font" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />';

const styleBlock = `
    <!-- Barbarian Brand Overrides -->
    <style id="barbarian-styles">
      body {
        background: #000000 !important;
        color: #ffffff !important;
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
      }
      .container {
        background: #121212 !important;
        border: 1px solid #222222 !important;
        color: #ffffff !important;
        box-shadow: 0 5px 15px rgba(0,0,0,0.5) !important;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: Inter, sans-serif !important;
      }
      h1 { color: #ff4400 !important; }
      h2 { color: #ffffff !important; }
      p, li, td { color: #cfcfcf !important; }
      a { color: #1a73e8 !important; }
      code, pre, .code, .number, .file, .tag {
        font-family: 'Fira Code', monospace !important;
      }
      .highlight, strong, b {
        color: #ff4400 !important;
      }
      footer {
        color: #777777 !important;
      }
    </style>
`;

function processHtml(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already themed
  if (content.includes('id="barbarian-styles"')) {
    console.log(`Skipping already themed: ${filePath}`);
    return;
  }
  
  // Insert fontLink and styleBlock before </head>
  if (content.includes('</head>')) {
    content = content.replace('</head>', `  ${fontLink}\n${styleBlock}\n</head>`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Themed: ${filePath}`);
  } else {
    console.log(`No </head> found in: ${filePath}`);
  }
}

function processCss(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Simple body styling updates for css files directly
  if (content.includes('body')) {
    content = content.replace(/body\s*\{([^}]+)\}/, (match, bodyContent) => {
      // replace font-family and background if present
      let newBody = bodyContent;
      if (newBody.includes('font-family')) {
        newBody = newBody.replace(/font-family\s*:[^;]+;/, 'font-family: Inter, -apple-system, sans-serif;');
      } else {
        newBody += '\n    font-family: Inter, -apple-system, sans-serif;';
      }
      if (newBody.includes('background')) {
        newBody = newBody.replace(/background\s*:[^;]+;/, 'background: #000000;');
      } else {
        newBody += '\n    background: #000000;';
      }
      return `body {${newBody}}`;
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated CSS body styles: ${filePath}`);
  }
}

console.log('Starting theme injection...');
processDir(slidesDir);
console.log('Theme injection completed.');
