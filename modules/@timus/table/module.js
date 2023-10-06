import { LoadComponent, LoadPlugins } from './loader'
import PackageJson from './package.json'

export default function(moduleOptions) {
  this.nuxt.hook('ready', (_nuxt) => {
    console.log('Nuxt is ready')
  })

  // get all options for the module
  const options = {
    ...moduleOptions,
    ...this.options[PackageJson.name],
    version: PackageJson.version,
  }

  // expose the namespace / set a default
  if (!options.namespace) {
    options.namespace = 'timus-networks'
  }

  LoadPlugins.bind(this)(options)
  LoadComponent.bind(this)(options)

  // Componenti global olarak ekleyin
  // this.addTemplate({
  //   src: path.resolve(__dirname, 'components/TableCreate.vue'),
  //   fileName: 'components/TableCreate.vue'
  // });
}

// REQUIRED if publishing the module as npm package
module.exports.meta = require('./package.json')
