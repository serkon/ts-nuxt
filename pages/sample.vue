<template>
  <div>
    <h1>Welcome to library</h1>
    <TnTable />
    <NuxtTutorial />
    <TableCreate ref="table" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    // TableCreate: () => import('@/components/TableCreate.vue'),
  },
  mounted() {
    const { table } = this.$refs

    console.log('module @timus-networks/table altındaki TableCreate componenti özellikleri: ', (table as any).timus)
  },
})
</script>
