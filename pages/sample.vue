<template>
  <div class="sample-page container">
    <h1>Welcome to library</h1>
    <AutoLoadComponent />
    <NuxtTestSample />
    <TableCreate ref="table" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  head() {
    return {
      title: 'Sample page',
    }
  },
  mounted() {
    const { table } = this.$refs

    console.log('module @timus-networks/table altındaki TableCreate componenti özellikleri: ', (table as any).timus)
  },
})
</script>
