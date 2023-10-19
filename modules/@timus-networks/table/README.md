###Installation

- First install package `npm i @timus-networks/table`

- Add package to `module` property in `nuxt.config.js` file

```json
  modules: [
    '@nuxtjs/axios',
    ['@timus-networks/table', {client: false, typescript: false}],
  ]
```

- You can manually set the `client` and `typescript` support properties.
- If you render this component on the client side, set the value to `true`.
- If you prefer to use `typescript` during development, set `typescript` to `true`.
- You can also set the `namespace` to define the module path's position within the .nuxt folder.

### Notes

- The table will directly reflect the values provided from outside for `select`, `filter`, `paging`, and `sort`.

- For actions like `select`, `paging`, and `sort`, specific events have been defined. When these events are triggered, the corresponding values are passed to designated methods. For example, upon making a selection, using `@event-select=onSelect` will activate the `onSelect` method, and the selected items will be passed to it.

- When any action such as select, filter, sort, or paging is executed, the `@emit` event will automatically be triggered. This event aggregates the results of all the aforementioned actions into a single object. This can be especially useful for API requests, eliminating the need to merge these data separately. By using `@emit=onAnyAction`, you can access the aggregated data in the format `{select, paging, sort, filter}` in a single step.

####Usage Example:

Just add `data` and `columns` attributes, and it will be handled with minimum requirements

**Simple:**

```html
<template>
  <TnTable :data="tableData" :columns="tableColumns" />
</template>
```

**Detailed:**

```html
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

- Tablo, dışarıdan sağlanan `select`, `filter`, `paging` ve `sort` değerlerini doğrudan yansıtacaktır.

- `select`, `paging` ve `sort` gibi işlemlerin her biri için özel event'lar tanımlanmıştır. Bu event'lar tetiklendiğinde, belirlenen metotlara ilgili değerler iletilir. Örneğin, bir seçim işlemi gerçekleştiğinde `@event-select=onSelect` kullanılarak `onSelect` metodu aktif hale gelir ve seçilen öğeler bu metoda gönderilir.

- Bir select, filter, sort ya da paging işlemi yapıldığında, `@emit` event'ı otomatik olarak tetiklenir. Bu event, yukarıda belirtilen tüm işlemlerin sonuçlarını tek bir objede toplar. Bu, API isteklerinde bu verileri ayrı ayrı birleştirmenize gerek kalmadan kullanışlı olabilir. `@emit=onAnyAction` kullanımıyla `{select, paging, sort, filter}` şeklindeki toplu bilgilere kolayca erişebilirsiniz.
