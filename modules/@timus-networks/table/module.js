import { LoadComponent, LoadPlugins } from './loader';
import PackageJson from './package.json';

export default function(moduleOptions) {
  this.nuxt.hook('ready', (_nuxt) => {
    console.log('@timus-networks/table is ready');
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

  console.log('Timus Table Options:', options);

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
