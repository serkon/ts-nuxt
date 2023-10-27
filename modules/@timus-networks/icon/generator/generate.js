const fs = require('fs');
const path = require('path');

const svgDirectory = './svgs'; // SVG dosyalarının bulunduğu klasör
const outputSCSS = './style.scss'; // Çıktı alınacak SCSS dosyası

const svgFiles = fs.readdirSync(svgDirectory).filter(file => path.extname(file).toLowerCase() === '.svg');

const PREFIX = 'tn-';
let scssContent = `
/* stylelint-disable value-keyword-case */
/* IMPORTANT: THIS TS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN! */
[class^='${PREFIX}'], [class*=' ${PREFIX}'] {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before, &::after {
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    /* transform: scale(1.2); */
    display: inline-block;
    content: '';
    background-color: currentColor;
    stroke: currentColor;
    stroke-width: 1;
  }
}
`;

svgFiles.forEach(file => {
    const className = path.basename(file, '.svg').replace(/[^a-z0-9]/gi, '-').toLowerCase();
    scssContent += `
.${PREFIX}${className} {
  &::before, &::after {
    mask-image: url('/svgs/${file}');
  }
}
`;
});

fs.writeFileSync(outputSCSS, scssContent);
