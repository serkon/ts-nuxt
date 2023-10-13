<template>
  <TnTable
    :data="tableData"
    :columns="tableColumns"
    :hide="[]"
    :sort="[]"
    :filter="[{ field: 'surname', value: ['Konakcı'] }]"
    :pagination="[]"
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
    <template #column="scope">{{ scope.row[scope.field] }} {{ scope.row.age < 20 ? '↓' : '↑' }}</template>

    <template v-for="column in tableColumns" #[`column.${column.field}`]="scope">444{{ scope.row[column.field] }}</template>
  </TnTable>
</template>

<script lang="ts">
import Vue from 'vue';
import { Column } from '~/modules/@timus/table/components/TnTable.vue';

interface Data {
  tableColumns: Column[];
  tableData: any[];
}

export default Vue.extend({
  name: 'TableSample',
  data: (): Data => ({
    tableColumns: [
      {
        field: 'name',
        label: 'Name',
        width: '200',
        filter: { options: [{ label: 'John', value: 'user-001' }], type: 'dropdown', mutli: true },
      },
      { field: 'age', label: 'Age' },
      { field: 'surname', label: 'Surname' },
    ],
    tableData: [
      { name: 'Serkan', surname: 'Konakcı', age: 43 },
      { name: 'Sarp', surname: 'Konakcı', age: 13 },
    ],
  }),
  methods: {
    emit(value: any) {
      console.log('emit. ', value);
    },
  },
});
</script>
