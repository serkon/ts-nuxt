import { resolve, join } from 'path';
import { promises as fs } from 'fs';
import { LoadComponent, LoadPlugins } from './loader';
import PackageJson from './package.json';

async function copyDirectory(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

export default function (moduleOptions) {
  this.nuxt.hook('ready', (_nuxt) => {
    console.log(`#### ${PackageJson.name} has been prepared with version: ${PackageJson.version}`);
  });

  // Assest'si, static fonts altına iconsax olarak gönderiyorum ve nuxt.config'in css'ine ekliyorum
  this.options.css.push('@/static/fonts/iconsax/style.scss');
  this.nuxt.hook('build:before', async () => {
    const sourceDir = resolve(__dirname, './assets/');
    const destDir = resolve(this.options.srcDir, 'static/fonts/iconsax/');

    await copyDirectory(sourceDir, destDir);
  });

  // get all options for the module
  const options = {
    ...moduleOptions,
    ...this.options[PackageJson.name], // bu external olarak nuxt.config içerisinde tanımlanan değer '@timus-networks/table' olarak direk json'daki
    version: PackageJson.version,
  };

  options.namespace = !options.namespace ? 'timus-networks/' + PackageJson.name.split('/')[1] : options.namespace;
  options.typescript = !!options.typescript;
  options.client = options.client === true;

  LoadPlugins.bind(this)(options, this.options);
  LoadComponent.bind(this)(options);

  // Componenti global olarak ekleyin
  // this.addTemplate({
  //   src: path.resolve(__dirname, 'components/TableCreate.vue'),
  //   fileName: 'components/TableCreate.vue'
  // });
}

// REQUIRED if publishing the module as npm package
module.exports.meta = require('./package.json');

