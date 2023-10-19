<template>
  <th v-if="!hide.includes(column.field)" class="tn-header">
    <div class="th-container">
      <slot v-bind="{ index, column, hide, sorting }">{{ column.label }}</slot>
      <span class="sort" :class="{ deactive: !sort }" @click="$emit('event-sort', column.field)">
        {{ sort?.alignment === 'asc' ? '↑' : sort?.alignment === 'desc' ? '↓' : '↑' }}
      </span>
    </div>
  </th>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Column, Sort } from './interfaces';

export default Vue.extend({
  name: 'TnRow',
  props: {
    column: {
      type: Object as PropType<Column>,
      default: () => ({} as Column),
    },
    index: {
      type: Number,
      default: null,
    },
    hide: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    sorting: {
      type: Array as PropType<Sort[]>,
      default: () => [] as Sort[],
    },
  },
  computed: {
    sort() {
      return this.sorting.find((item) => item.field === this.column.field);
    },
  },
});
</script>
