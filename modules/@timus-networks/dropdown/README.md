Installation

- First install package
  `npm i @timus-networks/table`

- Add module path to `module` property in `nuxt.config.js` file

```json
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@timus-networks/dropdown', {sample: 'Enter your config text', other: 'Other option text'}],
  ]
```

- You can set manually some options inside the nuxt.config.js file. You can access these options from Component's variables using ref. This options holds under the `timus` property.

```json
"@timus-networks/dropdown": {server: false},
```

Usage Example:

```html
Simple: Just add `data` and `columns` attribute, it be handled will handle with minimum requirement

<template>
  <TnTable :data="tableData" :columns="columns" />
</template>

Detailed:

<template>
  <TnTable
    :data="tableData"
    :columns="columns"
    :hide="[]"
    :sort="[]"
    :filter="[]"
    :pagination="[]"
    :select="[]"
    @event-filter="filterEmit"
    @event-sort="sortEmit"
    @event-select="selectEmit"
    @event-pagination="paginationEmit"
    @event="changed"
  >
    <template #head.name="scope">Name</template>
    <template #head.surname="scope">Patates</template>
    <template #filter.surname="scope" />
    <template #filter="scope">general</template>
    <template #column="scope">{{ scope.row[scope.field] }} {{ scope.row.age < 20 ? '↓' : '↑' }}</template>
    <template #column.surname="scope"> <button>...</button> </template>
    <template #column.name="scope"> <button>...</button> </template>
    <template v-for="column in columns" #[`column.${column.field}`]="scope">444{{ scope.row[column.field] }}</template>
  </TnTable>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'TableSample',
    data: () => ({
      columns: [
        { field: 'name', label: 'Name', width: '200', filter: { data: ['11', '123', '1234'], type: 'dropdown', mutli: true } },
        { field: 'age', label: 'Age' },
        { field: 'surname', label: 'Surname' },
      ],
      tableData: [
        { name: 'Serkan', surname: 'Konakcı', age: 43 },
        { name: 'Sarp', surname: 'Konakcı', age: 13 },
      ],
    }),
  });
</script>
```

```

```

### Filtering

Filter için gönderdiğiniz değerler mevcut kolonda ilgili yere yazılıyor olacak:

```ts
  data() {
    return {
      dFilter: {
        ...{
          data: { field: this.column.field, value: '' },
          type: 'text',
          mutli: false,
          callback: (value: any) => console.log('Filter:', value, this),
          disable: false,
        },
        ...this.$props.filtering,
      },
    };
  },
```
