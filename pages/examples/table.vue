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
      <template #column.actions><button class="btn btn-sm btn-primary-outline">...</button></template>
    </TnTable>

    <pre class="exported mt-4 text-monospace bg-gray-50 p-2 rounded-md">
      {{ tableOptions }}
    </pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Column, TnTableEmitOutput } from '~/modules/@timus-networks/table/components/TnTable.vue';

interface Data {
  tableColumns: Column[];
  tableData: any[];
  tableOptions: TnTableEmitOutput;
  options?: any[];
  value4?: string;
}

const option: TnTableEmitOutput = {
  filter: [
    { field: 'surname', value: 'Konakcı' },
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
        width: '200',
        // TODO: filter type'a göre filtreleme component'leri eklenecek
        filterConfig: {
          options: [
            { label: 'John', value: 'user-001' },
            { label: 'Jessica', value: 'user-002' },
            { label: 'Alba', value: 'user-003' },
          ],
          type: 'select',
          multi: true,
          disable: false,
        },
      },
      { field: 'age', label: 'Age' },
      { field: 'surname', label: 'Surname' },
      { field: 'actions', label: 'Actions', filterConfig: { disable: true } },
    ],
    tableData: [
      { name: 'Serkan', surname: 'Konakcı', age: 43 },
      { name: 'Sarp', surname: 'Konakcı', age: 13 },
    ],
    tableOptions: option,
    options: [
      {
        value: 'Option1',
        label: 'Option1',
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
      {
        value: 'Option3',
        label: 'Option3',
      },
      {
        value: 'Option4',
        label: 'Option4',
      },
      {
        value: 'Option5',
        label: 'Option5',
      },
    ],
    value4: '',
  }),
  methods: {
    emit(value: any) {
      this.tableOptions = value;
      console.log('emit. ', value);
    },
  },
});
</script>
