<!-- TnColumn.vue -->
<template>
  <th v-if="!hide.includes(field)" class="filter">
    <slot :row="row" :field="field" :label="label" :hide="hide">
      <input class="filter border" :class="{ deactive: !order }" @input="$emit('event-filter', { field, text: $event.target.value })" />
    </slot>
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
    ordering: {
      type: Array as PropType<Sort[]>,
      default: () => [],
    },
  },
  computed: {
    order() {
      return this.ordering.find((item) => item.field === this.field);
    },
  },
});
</script>
<style scoped>
.order {
  cursor: pointer;

  &.deactive {
    opacity: 0.5;
  }
}
</style>
