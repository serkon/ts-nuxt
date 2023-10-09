<!-- TnTable.vue -->
<template>
  <div class="flex">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'TnTable',
  provide() {
    return {
      tableData: this.data,
    };
  },
  props: {
    data: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  },
});
</script>
