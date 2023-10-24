<!-- TnTable.vue -->
<template>
  <div class="tn-table">
    <div class="tn-table-container">
      <div class="tn-table-overflow">
        <table aria-describedby="Data table" class="tn-table-item">
          <thead>
            <tr>
              <th class="tn-header" v-if="!isNoSelect">
                <div class="th-container">
                  <input type="checkbox" :checked="isAllSelected" @change="toggleAll" ref="checkbox" class="tn-checkbox" />
                </div>
              </th>
              <TnTableHead v-for="(column, index) in columns" :key="'th' + index" v-bind="{ index, column, hide, sorting }" @event-sort="eventSort">
                <slot v-if="hasSlot('head.' + column.field)" :name="'head.' + column.field" v-bind="{ index, column, hide, sorting }" />
                <slot v-else :name="'head'" v-bind="{ index, column, hide }" />
              </TnTableHead>
            </tr>
            <tr v-if="!isNoFilter">
              <th class="tn-column" v-if="!isNoSelect"></th>
              <TnTableFilter
                v-for="(column, index) in columns"
                :key="'th' + index"
                v-bind="{ index, column, hide, filtering }"
                @event-filter="eventFilter"
              >
                <slot v-if="hasSlot('filter.' + column.field)" :name="'filter.' + column.field" v-bind="{ index, column, hide, filtering }" />
                <slot v-else :name="'filter'" v-bind="{ index, column, hide, filtering }" />
              </TnTableFilter>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in data" :key="'tr' + rowIndex">
              <td class="tn-column" v-if="!isNoSelect">
                <div class="td-container">
                  <input type="checkbox" v-model="selection" :value="row" @change="eventSelection" class="tn-checkbox" />
                </div>
              </td>
              <TnTableColumn
                v-for="(column, index) in columns"
                :key="'tr' + rowIndex + index + column.field"
                v-bind="{ rowIndex, row, index, column, hide }"
              >
                <slot v-if="hasSlot('column.' + column.field)" :name="'column.' + column.field" v-bind="{ index, rowIndex, row, column, hide }" />
                <slot else :name="'column'" v-bind="{ index: rowIndex, row, column, hide }" />
              </TnTableColumn>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <TnTablePagination :page="pagination.page" :limit="pagination.limit" :total="pagination.total" @event-paging="eventPagination" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Filter, Paging, Sort } from './interfaces';

interface Data {
  sorting: Sort[];
  filtering: Filter[];
  pagination: Paging;
  selection: any[];
}

/**
 * TnTable component
 *
 * @emitters
 * eventSort - (sorting: Order[]) Changes sorting and call change event
 */

export default Vue.extend({
  name: 'TnTable',
  props: ['data', 'columns', 'hide', 'sort', 'filter', 'paging', 'select', 'noFilter', 'noSelect'],
  data(): Data {
    return {
      filtering: this.filter || [],
      sorting: this.sort || [],
      pagination: this.paging || { page: 1, limit: 10, total: 0 },
      selection: this.select || [],
    };
  },
  computed: {
    isNoSelect() {
      return this.noSelect === '';
    },
    isNoFilter() {
      return this.noFilter === '';
    },
    status() {
      return { sort: this.sorting, filter: this.filtering, paging: this.pagination, select: this.selection };
    },
    isAllSelected(): boolean {
      const allSelected = this.selection.length === this.data.length;
      const checkboxElement = this.$refs.checkbox as HTMLInputElement | undefined;
      checkboxElement && (checkboxElement.indeterminate = !allSelected && !!this.selection.length);
      return this.selection.length === this.data.length;
    },
    isAnySelected(): boolean {
      return this.selection.length > 0 && !this.isAllSelected;
    },
  },
  mounted() {
    const checkboxElement = this.$refs.checkbox as HTMLInputElement | undefined;
    checkboxElement && (checkboxElement.indeterminate = this.isAnySelected);
  },
  methods: {
    hasSlot(name: string) {
      // eslint-disable-next-line vue/no-deprecated-dollar-scopedslots-api
      return !!this.$scopedSlots[name];
    },
    toggleAll() {
      if (this.selection.length === this.data.length) {
        this.selection = [];
      } else {
        this.selection = [...this.data];
      }
      this.eventSelection();
    },
    emitter() {
      this.$emit('event', this.status);
    },
    eventSort(field: string) {
      const found = this.sorting.find((item) => item.field === field);

      found && found.alignment === 'asc'
        ? (found.alignment = 'desc')
        : (this.sorting = !found ? [...this.sorting, { field, alignment: 'asc' }] : this.sorting.filter((item) => item.field !== field));
      this.$emit('event-sort', this.sorting);
      this.emitter();
    },
    eventFilter(filter: Filter): void {
      const found = this.filtering.find((item) => item.field === filter.field);

      (found &&
        (filter.value.length > 0 ? (found.value = filter.value) : (this.filtering = this.filtering.filter((item) => item.field !== filter.field)))) ||
        (this.filtering = [...this.filtering, filter]);
      this.$emit('event-filter', this.filtering);
      this.emitter();
    },
    eventPagination(paging: Paging): void {
      this.pagination = paging;
      this.$emit('event-paging', paging);
      this.emitter();
    },
    eventSelection(): void {
      this.$emit('event-select', this.selection);
      this.emitter();
    },
  },
  watch: {
    $props: {
      deep: true,
      immediate: true,
      handler(value) {
        this.sorting = value.sort;
        this.pagination = value.paging;
        this.filtering = value.filter;
        this.selection = value.select;
      },
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

<style lang="scss">
.tn-checkbox {
  cursor: pointer;
}

.tn-table-container {
  padding: 12px 24px;
  border: 1px solid #dad9dd;
  border-radius: 12px;

  .tn-table-overflow {
    overflow: auto;

    .tn-table-item {
      width: 100%;
      border-collapse: collapse;

      tr {
        height: 48px;

        th,
        td {
          padding: 8px 12px;
          border-bottom: 1px solid #dad9dd;
          color: #83818f;
          font-size: 14px;
          font-weight: 400;
          text-align: left;
          gap: 4px;
        }
      }

      thead {
        // background-color: #f5f7fa;
        .tn-header {
          padding: 6px 10px;

          .th-container {
            position: relative;
            display: flex;
            gap: 4px;
            align-items: center;

            .sort {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 12px;
              height: 12px;
              cursor: pointer;
              user-select: none;
              color: #222222;

              &.deactive {
                opacity: 0.4;
              }
            }
          }
        }

        .filter {
          border-top: none;
          // background-color: #f9fbfd;
        }
      }

      tbody {
        tr {
          .tn-column {
            padding: 6px 10px;
          }

          &:nth-child(odd) {
            // background-color: #fafafa;
          }

          &:last-child {
            td {
              border-bottom: none;
            }
          }

          .td-container {
            display: flex;
            align-items: center;
            gap: 4px;
          }
        }
      }
    }
  }
}
</style>
