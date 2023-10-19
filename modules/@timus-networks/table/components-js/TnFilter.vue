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

<script>import Vue from 'vue';
import { utils } from './utils';
export default Vue.extend({
    name: 'TnFilter',
    props: {
        column: {
            type: Object,
            default: () => ({}),
        },
        index: {
            type: Number,
            default: null,
        },
        hide: {
            type: Array,
            default: () => [],
        },
        filtering: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            filter: '',
            mergedFilter: Object.assign({ options: [], type: 'text', multi: false, callback: (value) => console.log('Filter:', value, this), disable: false }, this.$props.column.filterConfig),
        };
    },
    methods: {
        testChanged(value) {
            utils.debounce(() => {
                const newValue = value;
                console.log('Filter:', newValue);
                const updated = { field: this.column.field, value: newValue };
                this.$emit('event-filter', updated);
            }, 500)();
        },
    },
    mounted() {
        var _a, _b;
        this.filter = (_b = (_a = this.item) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
    },
    computed: {
        item() {
            return this.filtering.find((item) => item.field === this.column.field);
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
