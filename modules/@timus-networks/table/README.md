Installation

- First install package
  `npm i @timus-networks/table`

- Add module path to `module` property in `nuxt.config.js` file

```json
  modules: [
    '@nuxtjs/axios',
    ['@timus-networks/table', {client: false, typescript: false}],
  ]
```

- You can set manually `client` and `typescript` support properties.
- If you render this component on client set value to `true`
- If your prefer to use `typescript` while development set `typescipt` to `true`
- Also you can set `namespace` of module path in `.nuxt` folder

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
      ref="table"
      :data="tableData"
      :columns="tableColumns"
      :hide="[]"
      :select="tableOptions.select"
      :sort="tableOptions.sort"
      :filter="tableOptions.filter"
      :paging="tableOptions.paging"
      no-filter
      no-select
      @event-filter="emit"
      @event-sort="emit"
      @event-select="emit"
      @event-paging="emit"
      @event="emit"
    >
      <!--
      <template #head.name>Name</template>
      <template #head.surname>Surname</template>
      <template #head.age>Age Of Trones</template>
      <template #filter.name>Add some HTML</template>
      <template #column.surname>Add some HTML</template>
      <template #column.name>{{ scope.row[column.field]}}</template>
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
import Checkbox from '~/components/Checkbox.vue';
import { Column, TnTableEmitOutput } from '~/modules/@timus-networks/table';

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
  select: [Hollywood[0]],
};

export default Vue.extend({
  name: 'TableSample',
  data: (): Data => ({
    tableColumns: [
      {
        field: 'name',
        label: 'Name',
        width: '245px',
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
      console.log('emit:', value);
    },
  },
  components: { Checkbox },
});
</script>
```

### Notlar

- Filter için gönderdiğiniz değerler mevcut kolonda ilgili yere yazılıyor olacak, bu sayede dışardan bir filtre uygulandıysa bu önyüzde tabloda ilgili alanda gösterilecek. Aynı işlemler `select`, `paging`, `sort` için de geçerlidir. Dışarıdan verdiğiniz değerler tabloya yansıyacaktır.

- Her `select`, `paging`, `sort`, `select` in kendi event'ı tanımlanmıştır ve değeri methoda verilmektedir. `@event-select=onSelect` ile seçilen bir şey olduğunda onSelect methodu trigger edilecektir.

- Her yaptığınız select, filter, sort ya da paging'den sonra @emit props'una vereceğiniz method tetiklenecektir. Bu methoda hepsi tek objede verilecektir. Bu sayede API'ye istek atarken bunları merge etmeye gerek duymayabilirsiniz. `@emit=onAnyAction` ile `{filtre, sort, paging, select}` bilgisine tek seferde ulaşabilirsiniz.
