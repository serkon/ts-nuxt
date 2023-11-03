## Installation:

1. First install package `npm i @timus-networks/theme`
2. Add package to `modules` property in `nuxt.config.js` file

```json
{
  "modules": ["@nuxtjs/axios", ["@timus-networks/filter", { "client": false, "typescript": false }]]
}
```

- You can manually set the `client` and `typescript` support properties.
- If you render this component on the client side, set the value to `true`.
- If you prefer to use `typescript` during development, set `typescript` to `true`.
- You can also set the `namespace` to define the module path's position within the .nuxt folder.

3. Add below configuration to your **nuxt.config.js** file.

<sub>nuxt.config.js</sub>

```js
tailwindcss: {
  // cssPath: '~/static/scss/main.scss',
  configPath: '@/tailwind.config.js',
  exposeConfig: false,
  exposeLevel: 2,
  config: {
    darkMode: 'class',
  },
  injectPosition: 'first',
  viewer: true,
},
```

### Usage

Default dark theme is `false`

- Change the theme on button click:
  `this.$theme.setDarkMode(!this.$theme.isDark);`

- Register the theme change listener:
  `this.$theme.$on('darkMode', (value) => { console.log('darkMode:', value); });`

<sub>SamplePage.vue</sub>

```ts
<template>
  <div class="text-black dark:text-white dark:bg-gray-800 p-4">
    <h1>Dynamic Theming with Nuxt</h1>
    <p>Experience the power of dynamic theming. Click the button below to toggle between light and dark modes.</p>
    <button @click="toggleTheme" class="btn btn-sm btn-primary dark:btn-light mt-4">{{ buttonText }}</button>
    <div class="indicator">
      Current Theme: <strong>{{ $theme.isDark ? 'Dark' : 'Light' }}</strong>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    buttonText(): string {
      return this.$theme.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    },
  },
  methods: {
    toggleTheme() {
      this.$theme.setDarkMode(!this.$theme.isDark);
    },
  },
  mounted() {
    console.log('Dark mode is:', this.$theme.isDark);
    this.$theme.$on('darkMode', (value: boolean) => {
      console.log('darkMode changed:', value);
    });
  },
});
</script>

<style scoped>
.toggle-button {
  transition: background-color 0.3s ease;
}

.indicator {
  margin-top: 20px;
}
</style>
```
