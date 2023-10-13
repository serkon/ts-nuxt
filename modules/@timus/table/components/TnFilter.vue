<template>
  <th v-if="!hide.includes(column.field)" class="filter">
    <slot v-bind="{ index, column, hide, filter }">
      <input class="filter border" v-model="filter" type="text" v-if="dFilter.type === 'text'" />
    </slot>
  </th>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { Column, Filter, FilterConfig, Sort } from './TnTable.vue';
import { utils } from './utils';

interface Data {
  dFilter: FilterConfig;
}

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
    filtering: {
      type: Array as PropType<Filter[]>,
      default: () => [] as Filter[],
    },
  },
  data(): Data {
    return {
      dFilter: {
        options: [],
        type: 'text',
        mutli: false,
        callback: (value: any) => console.log('Filter:', value, this),
        disable: false,
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
          const newValue = value ? (!this.dFilter.mutli ? [value] : value) : [];
          const updated: Filter = { field: this.column.field, value: newValue };
          this.$emit('event-filter', updated);
        }, 800)();
      },
    },
  },
});
</script>
