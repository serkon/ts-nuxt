const fs = require('fs');
const path = require('path');

const svgDirectory = path.resolve(__dirname, './svgs'); // SVG dosyalarının bulunduğu klasör
const outputSCSS = path.resolve(__dirname, '../assets/icons.js') ; // Çıktı alınacak TS dosyası

const svgFiles = fs.readdirSync(svgDirectory).filter(file => path.extname(file).toLowerCase() === '.svg');

const PREFIX = 'isax-';
let scssContent = `export const Icons = [`;

svgFiles.forEach(file => {
    const className = path.basename(file, '.svg').replace(/[^a-z0-9]/gi, '-').toLowerCase();
    scssContent += `'${className}',`;
});
scssContent += `];`
fs.writeFileSync(outputSCSS, scssContent);
