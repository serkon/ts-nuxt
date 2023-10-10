<template>
  <section>
    <h1>Table Component Sample</h1>
    <TnTable
      :data="tableData"
      @select="selectEmit"
    >
      <TnColumn
        v-slot="{ item }"
        field="name"
      >
        {{ item.name.toUpperCase() }}
      </TnColumn>
      <TnColumn field="surname">
        <template #default="{ item }">
          {{ item.surname.toLowerCase() }}
        </template>
      </TnColumn>
    </TnTable>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TableSample',

  data: () => ({
    tableData: [
      { id: 1, name: 'Serkan', surname: 'A', age: 23 },
      { id: 2, name: 'Sarp', surname: 'B', age: 45 },
    ],
  }),
  methods: {
    selectEmit(item: { [key: string]: any }) {
      console.log('selected rows: ', item);
    },
  },
});
</script>
