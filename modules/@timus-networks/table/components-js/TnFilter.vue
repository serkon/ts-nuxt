<template>
  <th v-if="!hide.includes(column.field)" class="filter" :style="{ width: column.width }">
    <slot v-bind="{ index, column, hide, filter }" v-if="!mergedFilter.disable">
      <!--
        <input
          class="filter-input"
          v-model="filter"
          type="text"
          v-if="mergedFilter.type === 'text' && !mergedFilter.options?.length"
          @input="testChanged"
        />
      -->
      <el-input
        v-if="mergedFilter.type === 'text' && !mergedFilter.options?.length"
        clearable
        v-model="filter"
        placeholder="Please input"
        size="small"
        @input="testChanged"
        class="w-full"
      />
      <!--
        <select clearable placeholder="Select" v-model="filter" v-if="mergedFilter.type === 'select'">
          <option v-for="option in mergedFilter.options" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      -->
      <el-select
        v-if="mergedFilter.type === 'select'"
        v-model="filter"
        clearable
        collapse-tags
        filterable
        size="small"
        placeholder="Select"
        :multiple="mergedFilter.multi"
        @change="testChanged"
        class="w-full"
      >
        <el-option v-for="item in mergedFilter.options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
    </slot>
  </th>
</template>

<script>"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var utils_1 = require("./utils");
exports.default = vue_1.default.extend({
    name: 'TnFilter',
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
        filtering: {
            type: Array,
            default: function () { return []; },
        },
    },
    data: function () {
        var _this = this;
        return {
            filter: '',
            mergedFilter: __assign({ options: [], type: 'text', multi: false, callback: function (value) { return console.log('Filter:', value, _this); }, disable: false }, this.$props.column.filterConfig),
        };
    },
    methods: {
        testChanged: function (value) {
            var _this = this;
            utils_1.utils.debounce(function () {
                var newValue = value;
                console.log('Filter:', newValue);
                var updated = { field: _this.column.field, value: newValue };
                _this.$emit('event-filter', updated);
            }, 500)();
        },
    },
    mounted: function () {
        var _a, _b;
        this.filter = (_b = (_a = this.item) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
    },
    computed: {
        item: function () {
            var _this = this;
            return this.filtering.find(function (item) { return item.field === _this.column.field; });
        },
    },
});
</script>
<style lang="scss" scoped>
.filter {
  input,
  select {
    width: 100%;
    @apply form-control form-control-sm;
  }
}
</style>
