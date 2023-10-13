<template>
  <TnTable
    :data="tableData"
    :columns="columns"
    :hide="[]"
    :sort="[]"
    :filter="[]"
    :pagination="[]"
    :select="[]"
    @event-filter="emit"
    @event-sort="emit"
    @event-select="emit"
    @event-pagination="emit"
    @event="emit"
  >
    <template #head.name>Name</template>
    <template #head.surname>Patates</template>
    <template #filter.surname />
    <template #filter>general</template>
    <template #column="scope">{{ scope.row[scope.field] }} {{ scope.row.age < 20 ? '↓' : '↑' }}</template>
    <template #column.surname><button>...</button></template>
    <template #column.name><button>...</button></template>
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
  methods: {
    emit(value: any) {
      console.log('emit. ', value);
    },
  },
});
</script>
