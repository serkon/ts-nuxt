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

Usage Example:

```html
<template>
  <section>
    <h1>Table Component Sample</h1>
    <TnTable :data="tableData">
      <TnColumn v-slot="{ item }" field="name"> {{ item.name.toUpperCase() }} </TnColumn>
      <TnColumn field="surname">
        <template #default="{ item }">
          <!-- Özel render işlemi için içerik -->
          {{ item.surname.toLowerCase() }}
        </template>
      </TnColumn>
    </TnTable>
  </section>
</template>
```
