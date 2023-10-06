Installation:

- Adım:1

Aşağıdaki kodu kullanmak istediğiniz Nuxt projesinin içerisindeki `nuxt.config.js` dosyasındaki
`build/transpile` altına tanımlaman gerekiyor. External olarak yani node_modules altından gelen pluginler için bunu yapmak icap ediyor.

<sub>nuxt.config.js</sub>

```js
  build: {
    transpile: [/^element-ui/, '@timus-networks/selectbox'],
  }
```

- Adım:2

Aşağıdaki dosyayı `plugins` altında oluşturmanız gerekmektedir. Bu sayede `@timus-networks/selectbox` altında tanımlı olan pluginler sisteme otomatik inject edilecektir.

<sub>./plugins/selectbox.js</sub>

```
import Vue from 'vue'
import Plugin from '@timus-networks/selectbox'

Vue.use(Plugin)
```

- Adım: 3
  Az önce oluşturduğumuz `plugins/selectbox.js` isimli plugin'i uzantısı olmayacak şekilde `nuxt.config.js` altınaki `plugins` property'sine tanımlaman gerekir. Bu sayede uygulama ayağa kalktığında bu plugin'i bulup yapması gereken görevi ifa etsin.

```json
  plugins: ['@/plugins/element-ui', '@/plugins/selectbox'],
```
