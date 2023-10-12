<!-- TnTable.vue -->
<template>
  <div>
    {{ sorting }}
    <table aria-describedby="Data table">
      <thead>
        <tr>
          <TnHead v-for="(column, index) in columns" :key="'th' + index" :hide="hide" :field="column.field" :label="column.label" :sorting="sorting" @event-sort="eventSort">
            <slot v-if="hasSlot('head.' + column.field)" :name="'head.' + column.field" v-bind="{ field: column.field, label: column.label, hide: hide }" />
            <slot v-else :name="'head'" v-bind="{ field: column.field, label: column.label, hide: hide }" />
          </TnHead>
        </tr>
        <tr>
          <TnFilter v-for="(column, index) in columns" :key="'th' + index" :hide="hide" :field="column.field" :label="column.label" @event-filter="eventFilter">
            <slot v-if="hasSlot('filter.' + column.field)" :name="'filter.' + column.field" v-bind="{ field: column.field, label: column.label, hide: hide }" />
            <slot v-else :name="'filter'" v-bind="{ field: column.field, label: column.label, hide: hide }" />
          </TnFilter>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="'tr' + index">
          <TnColumn v-for="(column, colIndex) in columns" :key="'tr' + index + colIndex + column.field" :row="row" :hide="hide" :field="column.field" :label="column.label">
            <slot v-if="hasSlot('column.' + column.field)" :name="'column.' + column.field" v-bind="{ row, field: column.field, label: column.label, hide: hide }" />
            <slot v-else :name="'column'" v-bind="{ row, field: column.field, label: column.label }" :hide="hide" />
          </TnColumn>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export interface Sort {
  field: string;
  alignment: 'asc' | 'desc';
}

export interface Filter {
  field: string;
  text: string;
}

export interface Data {
  sorting: Sort[];
  filtering: Filter[];
}

/**
 * @emitters
 * eventSort - (sorting: Order[]) Changes sorting and call change event
 */

export default Vue.extend({
  name: 'TnTable',
  props: ['data', 'columns', 'hide', 'sort', 'filter'],
  data() {
    return {
      sorting: [],
      filtering: [],
    } as Data;
  },
  mounted() {
    console.log('data', this.data);
  },
  methods: {
    hasSlot(name: string) {
      // eslint-disable-next-line vue/no-deprecated-dollar-scopedslots-api
      return !!this.$scopedSlots[name];
    },
    eventSort(field: string) {
      const found = this.sorting.find((item) => item.field === field);

      found && found.alignment === 'asc'
        ? (found.alignment = 'desc')
        : (this.sorting = !found ? [...this.sorting, { field, alignment: 'asc' }] : this.sorting.filter((item) => item.field !== field));
      this.$emit('eventSort', this.sorting);
    },
    eventFilter({ field, text }: Filter): void {
      // TODO: Set timeout for debounce
      console.log('input', field, text);
      this.$emit('eventFilter', { field, text });
    },
  },
});

/*
props: {
  data: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  columns: {
    type: Array as PropType<{ field: string; label: string }[]>,
    default: () => [],
  },
  hide: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
},
*/
</script>
