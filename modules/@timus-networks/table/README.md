## Installation

- First install package `npm i @timus-networks/table`

- Add package to `module` property in `nuxt.config.js` file

```json
{
  "modules": ["@nuxtjs/axios", ["@timus-networks/table", { "client": false, "typescript": false }]]
}
```

- You can manually set the `client` and `typescript` support properties.
- If you render this component on the client side, set the value to `true`.
- If you prefer to use `typescript` during development, set `typescript` to `true`.
- You can also set the `namespace` to define the module path's position within the .nuxt folder.

## Language File

Add below text to your language files. And set `translate` props to your translation method: <TnTable :translate='$t'></TnTable>

<sub>`~/locals/en.js`</sub>

```json
  "No Data": 'No data',
  "Total Records": 'Total {total} Records',
  "GoTo": 'Go to',
  "page": 'page',
  "Records per page": "Records per page:",
```

## Events

- The table will directly reflect the values provided from outside for `select`, `filter`, `paging`, and `sort`.

- For actions like `select`, `paging`, `filter` and `sort`, specific events have been defined. When these events are triggered, the corresponding values are passed to designated methods. For example, upon making a selection, using `@event-select=onSelect` will activate the `onSelect` method, and the selected items will be passed to it. `@event-select, @event-filter`, `@event-sort`, `@event-paging` are defined.

- When any action such as select, filter, sort, or paging is executed, the `@emit` event will automatically be triggered. This event aggregates the results of all the aforementioned actions into a single object. This can be especially useful for API requests, eliminating the need to merge these data separately. By using `@emit=onAnyAction`, you can access the aggregated data in the format `{select, paging, sort, filter}` in a single step.

## Usage Example:

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
      height="500px"
      :data="tableData"
      :columns="tableColumns"
      :hide="[]"
      :select="tableOptions.select"
      :sort="tableOptions.sort"
      :filter="tableOptions.filter"
      :paging="tableOptions.paging"
      :translate="$t"
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
  import { Column, TnTableEmitOutput } from '~/modules/@timus-networks/table';
  // import Hol from '@/assets/data/hollywood-50.json';

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

  /* This will be your main table variables will send you backend */

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
        /* All acceptable configuration for columns */
        {
          field: 'name',
          label: 'Name',
          width: '245px',
          sticky: 'left',
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
        /* simple (minimum) column configuration */
        { field: 'surname', label: 'Surname' },
        { field: 'age', label: 'Age', width: '200px' },
        { field: 'height', label: 'Height' },
        { field: 'weight', label: 'Weight', sticky: 'both' },
        { field: 'horoscope', label: 'Horoscope' },
        { field: 'birthday', label: 'Birthday' },
        { field: 'married', label: 'Married', sticky: 'right' },
      ],
      tableData: Hollywood, // <TnTable :data="tableData" /> The tableData property passed to the table component can either be set as an empty array or initialized with initial data.
      tableOptions: option, // handling all table options to one point
    }),
    methods: {
      emit(value: any) {
        this.tableOptions = value;
        console.log('emit:', value);
      },
    },
    mounted() {
      setTimeout(() => {
        this.tableOptions.sort = [{ field: 'surname', alignment: 'asc' }];
        this.tableOptions.select = [Hollywood[1], Hollywood[0]];
        this.tableOptions.paging.total = 2500;
        this.tableOptions.filter = [{ field: 'surname', value: 'Johansson' }];
        // this.tableData = [];
        console.log('Updated with Async Data sample');
      }, 3000);
    },
  });
</script>
```

### Notlar

- Tablo, dışarıdan sağlanan `select`, `filter`, `paging` ve `sort` değerlerini doğrudan yansıtacaktır.

- `select`, `paging` ve `sort` gibi işlemlerin her biri için özel event'lar tanımlanmıştır. Bu event'lar tetiklendiğinde, belirlenen metotlara ilgili değerler iletilir. Örneğin, bir seçim işlemi gerçekleştiğinde `@event-select=onSelect` kullanılarak `onSelect` metodu aktif hale gelir ve seçilen öğeler bu metoda gönderilir.

- Bir select, filter, sort ya da paging işlemi yapıldığında, `@emit` event'ı otomatik olarak tetiklenir. Bu event, yukarıda belirtilen tüm işlemlerin sonuçlarını tek bir objede toplar. Bu, API isteklerinde bu verileri ayrı ayrı birleştirmenize gerek kalmadan kullanışlı olabilir. `@emit=onAnyAction` kullanımıyla `{select, paging, sort, filter}` şeklindeki toplu bilgilere kolayca erişebilirsiniz.
