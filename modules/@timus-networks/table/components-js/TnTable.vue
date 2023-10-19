<!-- TnTable.vue -->
<template>
  <div class="tn-table-container">
    <table aria-describedby="Data table" class="tn-table">
      <thead>
        <tr>
          <th><input type="checkbox" :checked="isAllSelected" @change="toggleAll" ref="checkbox" class="tn-checkbox" /></th>
          <TnHead v-for="(column, index) in columns" :key="'th' + index" v-bind="{ index, column, hide, sorting }" @event-sort="eventSort">
            <slot v-if="hasSlot('head.' + column.field)" :name="'head.' + column.field" v-bind="{ index, column, hide, sorting }" />
            <slot v-else :name="'head'" v-bind="{ index, column, hide }" />
          </TnHead>
        </tr>
        <tr>
          <th></th>
          <TnFilter v-for="(column, index) in columns" :key="'th' + index" v-bind="{ index, column, hide, filtering }" @event-filter="eventFilter">
            <slot v-if="hasSlot('filter.' + column.field)" :name="'filter.' + column.field" v-bind="{ index, column, hide, filtering }" />
            <slot v-else :name="'filter'" v-bind="{ index, column, hide, filtering }" />
          </TnFilter>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="'tr' + index">
          <td><input type="checkbox" v-model="selection" :value="row" @change="eventSelection" class="tn-checkbox" /></td>
          <TnColumn v-for="(column, colIndex) in columns" :key="'tr' + index + colIndex + column.field" v-bind="{ index, row, column, hide }">
            <slot v-if="hasSlot('column.' + column.field)" :name="'column.' + column.field" v-bind="{ index, row, column, hide }" />
            <slot else :name="'column'" v-bind="{ index, row, column, hide }" />
          </TnColumn>
        </tr>
      </tbody>
    </table>
    <TnPagination :page="pagination.page" :limit="pagination.limit" :total="pagination.total" @event-paging="eventPagination" />
  </div>
</template>

<script>import Vue from 'vue';
/**
 * TnTable component
 *
 * @emitters
 * eventSort - (sorting: Order[]) Changes sorting and call change event
 */
export default Vue.extend({
    name: 'TnTable',
    props: ['data', 'columns', 'hide', 'sort', 'filter', 'paging', 'select'],
    data() {
        return {
            filtering: this.filter || [],
            sorting: this.sort || [],
            pagination: this.paging || { page: 1, limit: 10, total: 0 },
            selection: this.select || [],
        };
    },
    computed: {
        status() {
            return { sort: this.sorting, filter: this.filtering, paging: this.pagination, select: this.selection };
        },
        isAllSelected() {
            const allSelected = this.selection.length === this.data.length;
            const checkboxElement = this.$refs.checkbox;
            checkboxElement && (checkboxElement.indeterminate = !allSelected && !!this.selection.length);
            return this.selection.length === this.data.length;
        },
        isAnySelected() {
            return this.selection.length > 0 && !this.isAllSelected;
        },
    },
    mounted() {
        const checkboxElement = this.$refs.checkbox;
        checkboxElement && (checkboxElement.indeterminate = this.isAnySelected);
    },
    methods: {
        hasSlot(name) {
            // eslint-disable-next-line vue/no-deprecated-dollar-scopedslots-api
            return !!this.$scopedSlots[name];
        },
        toggleAll() {
            if (this.selection.length === this.data.length) {
                this.selection = [];
            }
            else {
                this.selection = [...this.data];
            }
            this.eventSelection();
        },
        emitter() {
            this.$emit('event', this.status);
        },
        eventSort(field) {
            const found = this.sorting.find((item) => item.field === field);
            found && found.alignment === 'asc'
                ? (found.alignment = 'desc')
                : (this.sorting = !found ? [...this.sorting, { field, alignment: 'asc' }] : this.sorting.filter((item) => item.field !== field));
            this.$emit('event-sort', this.sorting);
            this.emitter();
        },
        eventFilter(filter) {
            const found = this.filtering.find((item) => item.field === filter.field);
            (found &&
                (filter.value.length > 0 ? (found.value = filter.value) : (this.filtering = this.filtering.filter((item) => item.field !== filter.field)))) ||
                (this.filtering = [...this.filtering, filter]);
            this.$emit('event-filter', this.filtering);
            this.emitter();
        },
        eventPagination(paging) {
            console.log('paging', paging);
            this.pagination = paging;
            this.$emit('event-paging', paging);
            this.emitter();
        },
        eventSelection() {
            console.log('### selection', this.selection);
            this.$emit('event-select', this.selection);
            this.emitter();
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
.tn-checkbox {
  cursor: pointer;
}

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
