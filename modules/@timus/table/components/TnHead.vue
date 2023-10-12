<!-- TnColumn.vue -->
<template>
  <th v-if="!hide.includes(field)" class="th">
    <slot :row="row" :field="field" :label="label" :hide="hide" :sorting="sorting">{{ label }}</slot>
    <span class="sort" :class="{ deactive: !sort }" @click="$emit('event-sort', field)">
      {{ sort?.alignment === 'asc' ? '↑' : sort?.alignment === 'desc' ? '↓' : '↑' }}
    </span>
  </th>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { Sort } from './TnTable.vue';

export default Vue.extend({
  name: 'TnRow',
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
    sorting: {
      type: Array as PropType<Sort[]>,
      default: () => [],
    },
  },
  computed: {
    sort() {
      return this.sorting.find((item) => item.field === this.field);
    },
  },
});
</script>
<style scoped>
.sort {
  cursor: pointer;

  &.deactive {
    opacity: 0.5;
  }
}
</style>
