const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;
const glob = require('glob');

// components klasörü ile aynı seviyede output klasörü olup olmadığını kontrol et
if (!fs.existsSync('output')) {
    fs.mkdirSync('output');
}

// components'in içerisindeki her şeyi output'a kopyala
const copyRecursiveSync = function(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (exists && isDirectory) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(childItemName => {
            copyRecursiveSync(path.join(src, childItemName),
                path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
};

copyRecursiveSync('./components-ts', './components-js');

// output klasöründeki .vue dosyalarını bul
const vueFiles = glob.sync('./components-js/**/*.vue');

vueFiles.forEach((file) => {
  const content = fs.readFileSync(file, 'utf-8');
  const scriptMatch = content.match(/<script lang="ts">(.*?)<\/script>/s);

  if (scriptMatch) {
      let tsCode = scriptMatch[1];
      tsCode = tsCode.replace(/import .*?from '.*?.vue';/g, (match) => `// ${match}`);

      const tsFilePath = file.replace('.vue', '.temp.ts');
      fs.writeFileSync(tsFilePath, tsCode, 'utf-8');

      let hasError = false;

      try {
          execSync(`tsc ${tsFilePath}`);
      } catch (e) {
          // console.error("### Derleme hatası:", tsFilePath, e);
          // console.error('DERLEME HATASI: ', e.stdout.toString());
          hasError = true;
      }

      if (hasError) {
          const jsCode = fs.readFileSync(tsFilePath.replace('.ts', '.js'), 'utf-8');
          const finalJsCode = jsCode.replace(/\/\/ import/g, 'import');
          const newContent = content.replace(/<script lang="ts">(.*?)<\/script>/s, `<script>${finalJsCode}</script>`);
          fs.writeFileSync(file, newContent, 'utf-8');
      }

      // Dosyaları sil
      if (fs.existsSync(tsFilePath)) fs.unlinkSync(tsFilePath);
      if (fs.existsSync(tsFilePath.replace('.ts', '.js'))) fs.unlinkSync(tsFilePath.replace('.ts', '.js'));
  }
});
