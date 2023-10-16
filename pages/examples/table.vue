<template>
  <div class="table-sample-page">
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
import { Paging } from '~/modules/@timus/table/components/TnPagination.vue';
import { Column, Filter, Sort, TnTableEmitOutput } from '~/modules/@timus/table/components/TnTable.vue';

interface Data {
  tableColumns: Column[];
  tableData: any[];
  tableOptions: TnTableEmitOutput;
}

const option: TnTableEmitOutput = {
  filter: [{ field: 'surname', value: ['Konakcı'] }],
  sort: [
    { field: 'age', alignment: 'asc' },
    { field: 'surname', alignment: 'desc' },
  ],
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
        filter: { options: [{ label: 'John', value: 'user-001' }], type: 'dropdown', mutli: true },
      },
      { field: 'age', label: 'Age' },
      { field: 'surname', label: 'Surname' },
      { field: 'actions', label: 'Actions' },
    ],
    tableData: [
      { name: 'Serkan', surname: 'Konakcı', age: 43 },
      { name: 'Sarp', surname: 'Konakcı', age: 13 },
    ],
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
