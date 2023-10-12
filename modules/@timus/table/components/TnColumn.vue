<!-- TnColumn.vue -->
<template>
  <td v-if="!hide.includes(field)" class="col">
    <slot :row="row" :field="field" :label="label" :hide="hide">{{ row[field] }} ++</slot>
  </td>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'TnColumn',
  props: {
    field: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    row: {
      type: Object as PropType<any>,
      default: () => {},
    },
    hide: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
});
</script>
