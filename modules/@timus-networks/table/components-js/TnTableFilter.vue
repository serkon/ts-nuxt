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
        placeholder=""
        size="mini"
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
        size="mini"
        placeholder=""
        :multiple="mergedFilter.multi"
        @change="testChanged"
        class="w-full"
      >
        <el-option v-for="item in mergedFilter.options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
    </slot>
  </th>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Column, Filter, FilterConfig } from './interfaces';
import { utils } from './utils';

interface Data {
  filter: string | string[];
  mergedFilter: FilterConfig;
}

export default Vue.extend({
  name: 'TnTableFilter',
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
      filter: '',
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
  watch: {
    filtering: {
      deep: true,
      immediate: true,
      handler(item) {
        this.filter = this.item?.value ?? '';
      },
    },
  },
  methods: {
    testChanged(value: any) {
      utils.debounce(() => {
        const newValue = value;
        const updated: Filter = { field: this.column.field, value: newValue };
        this.$emit('event-filter', updated);
      }, 500)();
    },
  },
  computed: {
    item() {
      return this.filtering.find((item: Filter) => item.field === this.column.field);
    },
  },
});
</script>
