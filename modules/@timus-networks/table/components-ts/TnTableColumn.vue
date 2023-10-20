<!-- TnColumn.vue -->
<template>
  <td v-if="!hide.includes(column.field)" class="tn-column">
    <div class="td-container">
      <slot v-bind="{ row, hide, column, index, rowIndex }">{{ row[column.field] }}</slot>
    </div>
  </td>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Column } from './interfaces';

export default Vue.extend({
  name: 'TnTableColumn',
  props: {
    row: {
      type: Object as PropType<any>,
      default: () => {},
    },
    rowIndex: {
      type: Number,
    },
    hide: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    column: {
      type: Object as PropType<Column>,
      default: () => ({} as Column),
    },
    index: {
      type: Number,
    },
  },
});
</script>
