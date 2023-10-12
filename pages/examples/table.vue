<template>
  <TnTable :data="tableData" :columns="columns" :hide="[]" :order="[]" :filter="[]">
    <template #head.name="scope">custom headers</template>
    <template #head="scope">custom headers</template>
    <template #filter.surname="scope">test</template>
    <template #filter="scope">general</template>
    <template v-for="column in columns" #[column.field]="scope">{{ scope.row[column.field] }}</template>
  </TnTable>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TableSample',
  data: () => ({
    columns: [
      { field: 'name', label: 'Name' },
      { field: 'surname', label: 'Knowledges' },
    ],
    tableData: [
      { name: 'Serkan', surname: 'Konakcı' },
      { name: 'Sarp', surname: 'Konakcı' },
    ],
  }),
});
</script>
