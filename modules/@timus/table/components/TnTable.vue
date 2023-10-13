<!-- TnTable.vue -->
<template>
  <div>
    {{ sorting }}
    {{ filtering }}
    <table aria-describedby="Data table" class="tn-table">
      <thead>
        <tr>
          <TnHead v-for="(column, index) in columns" :key="'th' + index" v-bind="{ index, column, hide, sorting }" @event-sort="eventSort">
            <slot v-if="hasSlot('head.' + column.field)" :name="'head.' + column.field" v-bind="{ index, column, hide, sorting }" />
            <slot v-else :name="'head'" v-bind="{ index, column, hide }" />
          </TnHead>
        </tr>
        <tr>
          <TnFilter v-for="(column, index) in columns" :key="'th' + index" v-bind="{ index, column, hide, filtering }" @event-filter="eventFilter">
            <slot v-if="hasSlot('filter.' + column.field)" :name="'filter.' + column.field" v-bind="{ index, column, hide, filtering }" />
            <slot v-else :name="'filter'" v-bind="{ index, column, hide, filtering }" />
          </TnFilter>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="'tr' + index">
          <TnColumn v-for="(column, colIndex) in columns" :key="'tr' + index + colIndex + column.field" v-bind="{ index, row, column, hide }">
            <slot v-if="hasSlot('column.' + column.field)" :name="'column.' + column.field" v-bind="{ index, row, column, hide }" />
            <slot else :name="'column'" v-bind="{ index, row, column, hide }" />
          </TnColumn>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export interface Column {
  field: string;
  label: string;
  width?: string;
  filter?: FilterConfig;
}

export interface Sort {
  field: string;
  alignment: 'asc' | 'desc';
}

export interface Filter {
  field: string;
  value: any[];
}

export interface FilterConfig {
  options?: FilterOption[];
  type?: 'text' | 'dropdown' | 'checkbox';
  mutli?: boolean;
  callback?: (value: any) => void;
  disable?: boolean;
}

interface FilterOption {
  label: string;
  value: any;
  group?: string;
}

export interface Data {
  sorting: Sort[];
  filtering: Filter[];
}

/**
 * TnTable component
 *
 * @emitters
 * eventSort - (sorting: Order[]) Changes sorting and call change event
 */

export default Vue.extend({
  name: 'TnTable',
  props: ['data', 'columns', 'hide', 'sort', 'filter'],
  data() {
    return {
      filtering: this.filter || [],
      sorting: [],
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
      this.$emit('event-sort', this.sorting);
      this.$emit('event', this.data);
    },
    eventFilter(filter: Filter): void {
      // TODO: Set timeout for debounce
      console.log('input', filter);
      const found = this.filtering.find((item) => item.field === filter.field);

      (found &&
        (filter.value.length > 0 ? (found.value = filter.value) : (this.filtering = this.filtering.filter((item) => item.field !== filter.field)))) ||
        (this.filtering = [...this.filtering, filter]);
      this.$emit('event-filter', this.filtering);
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

<style scoped lang="scss">
.tn-table {
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px 12px;
    border: 1px solid #ebebeb;
    text-align: left;
  }

  thead {
    background-color: #f5f7fa;

    .header {
      position: relative;
      cursor: pointer;

      .sort {
        position: absolute;
        top: 50%;
        right: 4px;
        transform: translateY(-50%);
        opacity: 0.7;

        &.deactive {
          opacity: 0.3;
        }
      }
    }

    .filter {
      border-top: none;
      background-color: #f9fbfd;

      input.filter {
        padding: 6px 10px;
        width: 100%;
        border: 2px solid #acb8e1; // Daha kalın bir çerçeve
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 10%); // Hafif bir gölge

        &.deactive {
          opacity: 0.5;
        }
      }
    }
  }

  tbody {
    .column {
      background-color: #ffffff;
    }

    tr:nth-child(odd) {
      background-color: #fafafa;
    }
  }
}
</style>
