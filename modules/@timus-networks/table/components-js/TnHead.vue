<template>
  <th v-if="!hide.includes(column.field)" class="header">
    <slot v-bind="{ index, column, hide, sorting }">{{ column.label }}</slot>
    <span class="sort" :class="{ deactive: !sort }" @click="$emit('event-sort', column.field)">
      {{ sort?.alignment === 'asc' ? '↑' : sort?.alignment === 'desc' ? '↓' : '↑' }}
    </span>
  </th>
</template>

<script>"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.default = vue_1.default.extend({
    name: 'TnRow',
    props: {
        column: {
            type: Object,
            default: function () { return ({}); },
        },
        index: {
            type: Number,
            default: null,
        },
        hide: {
            type: Array,
            default: function () { return []; },
        },
        sorting: {
            type: Array,
            default: function () { return []; },
        },
    },
    computed: {
        sort: function () {
            var _this = this;
            return this.sorting.find(function (item) { return item.field === _this.column.field; });
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
