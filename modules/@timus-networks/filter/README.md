# Timus Filter - Nuxt Module

`TnFilter` Vue bileşeni, kullanıcılara gelişmiş bir filtreleme arayüzü sağlar. Bu bileşen, belirli kurallara göre bir veri kümesini filtrelemek için kullanılabilir ve JQL (Jira Query Language) formatında bir çıktı üretir.

## Installation

- First install package `npm i @timus-networks/table`

- Add package to `module` property in `nuxt.config.js` file

```json
{
  "modules": ["@nuxtjs/axios", ["@timus-networks/filter", { "client": false, "typescript": false }]]
}
```

- You can manually set the `client` and `typescript` support properties.
- If you render this component on the client side, set the value to `true`.
- If you prefer to use `typescript` during development, set `typescript` to `true`.
- You can also set the `namespace` to define the module path's position within the .nuxt folder.

## Kullanım

`TnFilter` bileşeni, kullanıcının belirttiği filtreleme kurallarına göre JQL formatında bir sorgu string'i üretir.

**Props:**

- `fields`: Filtrelenen alanların listesi.
- `filters`: Filtreleme kurallarının listesi.

**Örnek Kullanım:**

```vue
<template>
  <div>
    <TnFilter :fields="['name', 'age', 'city']" :filters="filters" @emit="handleEmit" />
    <!-- Filtrelenen sonuçları JQL formatında göstermek için -->
    <pre>{{ jqlQuery }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jqlQuery: '',
    };
  },
  methods: {
    // Bu fonksiyon JQL formatında bir string alır.
    handleEmit(jql) {
      this.jqlQuery = jql;
    },
  },
};
</script>
```

## Katkıda Bulunanlar

Bu projeye katkıda bulunmak için lütfen [CONTRIBUTING.md](./CONTRIBUTING.md) dosyasına başvurun.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için [LICENCE.md](./LICENCE.md) dosyasına başvurun.
