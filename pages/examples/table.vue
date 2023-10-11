<template>
  <section>
    <h1>Table Component Sample</h1>
    <TnTable :data="tableData">
      <TnColumn v-slot="item" field="name"> col 1 {{ item }} </TnColumn>
      <TnColumn v-slot="item" field="surname">col 2 {{ item }}</TnColumn>
    </TnTable>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

import TnColumn from '~/modules/@timus/table/components/TnColumn.vue';

export default Vue.extend({
  name: 'TableSample',
  components: { TnColumn },
  data: () => ({
    tableData: [
      { id: 1, name: 'Serkan Serkan Serkan Serkan Serkan', surname: 'A', age: 23 },
      { id: 2, name: 'Sarp', surname: 'B', age: 45 },
    ],
  }),
});
</script>
