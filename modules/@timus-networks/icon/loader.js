import { readdirSync } from 'fs';
import { join, resolve } from 'path';

export function LoadComponent(options) {
  const foldersToSync = [options.typescript ? 'components-ts' : 'components-js'];

  // const tsIndexFile = resolve(__dirname, './'); // bu index.ts dosyasını .nuxt/timus-networks/table adresine kopyalar
  // this.addTemplate({
  //   src: resolve(tsIndexFile, 'index.ts'),
  //   fileName: join(options.namespace, './', 'index.ts'),
  //   options,
  // });

  for (const pathString of foldersToSync) {
    const path = resolve(__dirname, pathString);
    for (const file of readdirSync(path)) {
      // console.log('#### loading:', `.nuxt/${ options.namespace }/${ pathString }/${ file}` );
      this.addTemplate({
        src: resolve(path, file),
        fileName: join(options.namespace, pathString, file),
        options,
      });
    }
  }

  this.extendRoutes((routes, resolve) => {
    const pathString = options.typescript ? 'components-ts' : 'components-js';
    routes.push({
      path: '/icons',
      component: resolve(__dirname, pathString, 'TimusIcons.vue'),
    });
  });
}

export function LoadPlugins(options, all) {
  const pluginsToSync = [options.typescript ? 'plugins/ts-components-installer.js' : 'plugins/js-components-installer.js'];

  for (const pathString of pluginsToSync) {
    const str = pathString.replace(/(\.[^\.]+)$/, `.${options.server}$1`);

    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(options.namespace, pathString),
      options,
      ...(options.client && { mode: 'client' }),
    });
  }
}
