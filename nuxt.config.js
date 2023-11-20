import componentDirectories from './component-auto-loader';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ts-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/static/scss/_element-ui.scss',
    // 'element-ui/lib/theme-chalk/index.css',
    // "element-ui/packages/theme-chalk/src/index.scss",
    // '@/assets/scss/main.scss',
    // '~/assets/tailwind.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui', '@/plugins/directives', '@/plugins/globals'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: componentDirectories,
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    ['@/modules/@timus-networks/table/module', { friendlyFire: true, client: false, typescript: true }],
    ['@/modules/@timus-networks/filter/module', { friendlyFire: true, client: false, typescript: true }],
    ['@/modules/@timus-networks/icon/module', { friendlyFire: true, client: true, typescript: true }],
    ['@/modules/@timus-networks/theme/module', { friendlyFire: true, client: true, typescript: true }],
    ['@/modules/@timus-networks/dropdown/module', { client: true }],
  ],
  // '@timus-networks/table': { typescript: false },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr' },
      { code: 'tr', iso: 'tr-TR', file: 'tr.js' },
    ],
    defaultLocale: 'en',
    langDir: './locales',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
        },
        fr: {
          welcome: 'Bienvenue',
        },
        es: {
          welcome: 'Bienvenido',
        },
      },
    },
  },
};
