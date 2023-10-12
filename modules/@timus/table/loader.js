import { readdirSync } from 'fs';
import { join, resolve } from 'path';

export function LoadComponent(options) {
  const foldersToSync = ['components'];

  for (const pathString of foldersToSync) {
    const path = resolve(__dirname, pathString);

    for (const file of readdirSync(path)) {
      this.addTemplate({
        src: resolve(path, file),
        fileName: join(options.namespace, pathString, file),
        options,
      });
    }
  }
}

export function LoadPlugins(options) {
  const pluginsToSync = ['plugins/components.js'];

  for (const pathString of pluginsToSync) {
    const str = pathString.replace(/(\.[^\.]+)$/, `.${options.server}$1`);

    console.log('sttttttr: ', str);

    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(options.namespace, str),
      options,
    });
  }
}
