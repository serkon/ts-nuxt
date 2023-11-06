const sass = require('sass');
const fs = require('fs');
const path = require('path');

const scssPath = path.resolve(__dirname, 'scss/main.scss');
const cssPath = path.resolve(__dirname, 'output/main.css');

// Yeni API kullanarak SCSS dosyasını compile edin
function compileSass() {
  try {
    const result = sass.compile(scssPath, { style: "compressed" });

    // Eğer output klasörü yoksa oluştur
    if (!fs.existsSync(path.dirname(cssPath))) {
      fs.mkdirSync(path.dirname(cssPath), { recursive: true });
    }

    // CSS dosyasını kaydedin
    fs.writeFileSync(cssPath, result.css);
    console.log('### @timus-networks/theme SCSS compiled successfully.');
  } catch (err) {
    console.error('### @timus-networks/theme SCSS compile error:', err);
  }
}

compileSass();
