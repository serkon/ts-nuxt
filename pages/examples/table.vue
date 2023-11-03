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
<style>
.tc {
  border: 1px solid red;
  font-family: iconsax, Helvetica, sans-serif;
}
</style>
