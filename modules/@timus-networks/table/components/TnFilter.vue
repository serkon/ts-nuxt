<template>
  <th v-if="!hide.includes(column.field)" class="filter" :style="{ width: column.width }">
    <slot v-bind="{ index, column, hide, filter }" v-if="!mergedFilter.disable">
      <input class="filter-input" v-model="filter" type="text" v-if="mergedFilter.type === 'text'" />
    </slot>
  </th>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { Column, Filter, FilterConfig, Sort } from './TnTable.vue';
import { utils } from './utils';

interface Data {
  mergedFilter: FilterConfig;
}

export default Vue.extend({
  name: 'TnFilter',
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
    filtering: {
      type: Array as PropType<Filter[]>,
      default: () => [] as Filter[],
    },
  },
  data(): Data {
    return {
      mergedFilter: {
        options: [],
        type: 'text',
        multi: false,
        callback: (value: any) => console.log('Filter:', value, this),
        disable: false,
        ...this.$props.column.filterConfig,
      },
    };
  },
  computed: {
    item() {
      return this.filtering.find((item) => item.field === this.column.field);
    },
    filter: {
      get(): Filter | [] {
        return this.item?.value[0] ?? [];
      },
      set(value: any | any[]) {
        utils.debounce(() => {
          const newValue = value ? (!this.mergedFilter.multi ? [value] : value) : [];
          const updated: Filter = { field: this.column.field, value: newValue };
          this.$emit('event-filter', updated);
        }, 500)();
      },
    },
  },
});
</script>
<style lang="scss" scoped>
.filter {
  input {
    width: 100%;
    @apply form-control form-control-sm;
  }
}
</style>
