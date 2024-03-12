const fs = require('fs');
const path = require('path');
const sass = require('sass');
// SCSS dosyasını oku
const importScssPath = path.resolve(__dirname, 'scss/main.scss');
const outputCssPath = path.resolve(__dirname, 'output/main.css');

// Yeni API kullanarak SCSS dosyasını compile edin
function compileSass() {
  try {
    const result = sass.compile(importScssPath, { style: 'compressed' });

    // Eğer output klasörü yoksa oluştur
    if (!fs.existsSync(path.dirname(outputCssPath))) {
      fs.mkdirSync(path.dirname(outputCssPath), { recursive: true });
    }

    // CSS dosyasını kaydedin
    fs.writeFileSync(outputCssPath, result.css);
    console.log('### @timus-networks/theme SCSS compiled successfully.');
  } catch (err) {
    console.error('### @timus-networks/theme SCSS compile error:', err);
  }
}

compileSass();
