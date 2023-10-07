<template>
  <div>asdad</div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AutoLoadComponent',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  beforeCreate(): void {
    console.log('beforeCreate')
  },
})
</script>
