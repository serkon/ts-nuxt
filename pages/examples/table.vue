<template>
  <TnTable
    :data="tableData"
    :columns="tableColumns"
    :hide="[]"
    :sort="tableSort"
    :filter="tableFilter"
    :paging="tablePaging"
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
    -->
    <template v-for="column in tableColumns" #[`column.${column.field}`]="scope">{{ scope.row[column.field] }}</template>
    <template #column.actions><button class="btn btn-sm btn-primary-outline">...</button></template>
    <template #column="scope">{{ scope.row }}</template>
  </TnTable>
</template>

<script lang="ts">
import Vue from 'vue';
import { Paging } from '~/modules/@timus/table/components/TnPagination.vue';
import { Column, Filter, Sort } from '~/modules/@timus/table/components/TnTable.vue';

interface Data {
  tableColumns: Column[];
  tableData: any[];
  tableFilter: Filter[];
  tableSort: Sort[];
  tablePaging: Paging;
}

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
    tableFilter: [{ field: 'surname', value: ['Konakcı'] }],
    tableSort: [
      { field: 'age', alignment: 'asc' },
      { field: 'surname', alignment: 'desc' },
    ],
    tablePaging: {
      page: 1,
      limit: 10,
      total: 323,
    },
  }),
  methods: {
    emit(value: any) {
      console.log('emit. ', value);
    },
  },
});
</script>
