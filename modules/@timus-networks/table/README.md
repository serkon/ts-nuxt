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
"@timus-networks/table": {server: false},
```

Usage Example:
Simple: Just add `data` and `columns` attribute, it be handled will handle with minimum requirement

Simple:

```html
<template>
  <TnTable :data="tableData" :columns="columns" />
</template>
```

Detailed:

```vue
<template>
  <div class="table-sample-page">
    <div>
      <h1 class="text-3xl font-bold w-full mb-4">Table Component Sample</h1>
    </div>

    <TnTable
      :data="tableData"
      :columns="tableColumns"
      :hide="[]"
      :sort="tableOptions.sort"
      :filter="tableOptions.filter"
      :paging="tableOptions.paging"
      :select="[]"
      @event-filter="emit"
      @event-sort="emit"
      @event-select="emit"
      @event-pagination="emit"
      @event="emit"
    >
      <!--
      <template #head.name>Name</template>
      <template #head.surname>Patates</template>
      <template #head.age>sad</template>
      template #filter.name>general</template>
      <template #filter.surname />
      <template #column.surname><button>...</button></template>
      <template #column.name><button>...</button></template>
      <template #column="scope">{{ scope.row }}</template>
    -->
      <template v-for="column in tableColumns" #[`column.${column.field}`]="scope">{{ scope.row[column.field] }}</template>
      <template #column.married="scope">
        <span :class="scope.row.married ? 'text-green-500' : 'text-red-500'">{{ scope.row.married ? 'Married' : 'Single' }}</span>
      </template>
    </TnTable>

    <pre class="exported mt-4 text-monospace bg-gray-50 p-2 rounded-md">
      {{ tableOptions }}
    </pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Column, TnTableEmitOutput } from '~/modules/@timus-networks/table/components/TnTable.vue';

const Hollywood = [
  {
    name: 'Johnny',
    surname: 'Depp',
    age: 58,
    birthday: '1963-06-09',
    horoscope: 'İkizler',
    height: '178cm',
    weight: '70kg',
    married: false,
  },
  {
    name: 'Sandra',
    surname: 'Bullock',
    age: 57,
    birthday: '1964-07-26',
    horoscope: 'Aslan',
    height: '171cm',
    weight: '54kg',
    married: true,
  },
];

interface Data {
  tableColumns: Column[];
  tableData: any[];
  tableOptions: TnTableEmitOutput;
}

const option: TnTableEmitOutput = {
  filter: [
    { field: 'surname', value: 'Johansson' },
    {
      field: 'name',
      value: ['user-001', 'user-002', 'user-003'],
    },
  ],
  sort: [{ field: 'age', alignment: 'asc' }],
  paging: { page: 1, limit: 10, total: 323 },
};

export default Vue.extend({
  name: 'TableSample',
  data: (): Data => ({
    tableColumns: [
      {
        field: 'name',
        label: 'Name',
        width: '220px',
        // TODO: filter type'a göre filtreleme component'leri eklenecek
        filterConfig: {
          options: [
            { label: 'John Travolta', value: 'user-001' },
            { label: 'Scarlett Johansson', value: 'user-002' },
            { label: 'İlyas Salman', value: 'user-003' },
          ],
          type: 'select',
          multi: true,
          disable: false,
        },
      },
      { field: 'surname', label: 'Surname' },
      { field: 'age', label: 'Age', width: '200px' },
      { field: 'height', label: 'Height' },
      { field: 'weight', label: 'Weight' },
      { field: 'horoscope', label: 'Horoscope' },
      { field: 'birthday', label: 'Birthday' },
      { field: 'married', label: 'Married' },
    ],
    tableData: Hollywood,
    tableOptions: option,
  }),
  methods: {
    emit(value: any) {
      this.tableOptions = value;
      console.log('emit. ', value);
    },
  },
});
</script>
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