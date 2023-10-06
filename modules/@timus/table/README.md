Installation

- First install package
  `npm i @timus-networks/table`

- Add module path to `module` property in `nuxt.config.js` file

```json
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['@timus-networks/table', {deger: 'Serkan', patate: 'Kahve'}],
  ]
```

- You can set manually some options inside the nuxt.config.js file. You can access these options from Component's variables using ref. This options holds under the `timus` property.

```json
"@timus-networks/table": {kader: 456},
```
