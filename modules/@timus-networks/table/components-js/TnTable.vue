<!-- TnTable.vue -->
<template>
  <div>
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
    <TnPagination :page="pagination.page" :limit="pagination.limit" :total="pagination.total" @event-paging="eventPagination" />
  </div>
</template>

<script>"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
/**
 * TnTable component
 *
 * @emitters
 * eventSort - (sorting: Order[]) Changes sorting and call change event
 */
exports.default = vue_1.default.extend({
    name: 'TnTable',
    props: ['data', 'columns', 'hide', 'sort', 'filter', 'paging', 'select'],
    data: function () {
        return {
            filtering: this.filter || [],
            sorting: this.sort || [],
            pagination: this.paging || { page: 1, limit: 10, total: 0 },
        };
    },
    mounted: function () {
        console.log('data', this.data);
    },
    computed: {
        status: function () {
            return { sorting: this.sorting, filtering: this.filtering, paging: this.pagination };
        },
    },
    methods: {
        hasSlot: function (name) {
            // eslint-disable-next-line vue/no-deprecated-dollar-scopedslots-api
            return !!this.$scopedSlots[name];
        },
        emitter: function () {
            this.$emit('event', this.status);
        },
        eventSort: function (field) {
            var found = this.sorting.find(function (item) { return item.field === field; });
            found && found.alignment === 'asc'
                ? (found.alignment = 'desc')
                : (this.sorting = !found ? __spreadArray(__spreadArray([], this.sorting, true), [{ field: field, alignment: 'asc' }], false) : this.sorting.filter(function (item) { return item.field !== field; }));
            this.$emit('event-sort', this.sorting);
            this.emitter();
        },
        eventFilter: function (filter) {
            var found = this.filtering.find(function (item) { return item.field === filter.field; });
            (found &&
                (filter.value.length > 0 ? (found.value = filter.value) : (this.filtering = this.filtering.filter(function (item) { return item.field !== filter.field; })))) ||
                (this.filtering = __spreadArray(__spreadArray([], this.filtering, true), [filter], false));
            this.$emit('event-filter', this.filtering);
            this.emitter();
        },
        eventPagination: function (paging) {
            console.log('paging', paging);
            this.pagination = paging;
            this.$emit('event-paging', paging);
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
