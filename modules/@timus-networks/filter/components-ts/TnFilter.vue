<template>
  <div class="groups">
    <button @click="addGroup(filters, filters.length - 1 ?? 0)" class="btn btn-primary-outline btn-md">Add Group</button>
    <button @click="addFilter(filters, filters.length - 1)" class="btn btn-primary-outline btn-md">Add Fields +</button>

    <div class="items" v-for="(item, itemIndex) in filters" :key="itemIndex">
      <div>group: {{ item }}</div>
      <template v-if="isArray(item)">
        <!--
          <button @click="addGroup(item, itemIndex)" class="btn btn-primary-outline btn-md">Add Group</button>
        <button @click="removeGroup(itemIndex)" class="btn btn-primary-outline btn-md">Remove Group</button>
        <button @click="addFilter(item, item.length - 1)" class="btn btn-primary-outline btn-md">+</button>
        -->
        <TnFilter :fields="fields" :filters="item"></TnFilter>
      </template>
      <template v-else>
        <TnFilterRow :fields="fields" :value="item"></TnFilterRow>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue/types';
import Vue from 'vue';
import { utils } from './utils';

export interface Field {
  id: string;
  field: string;
  operator: string;
  value: string;
}

interface Data {
  operators: string[];
  // filters: any[];
  // fields: string[];
}

export default Vue.extend({
  props: {
    fields: {
      type: Array as PropType<Field[]>,
      required: true,
    },
    filters: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  },
  data(): Data {
    return {
      operators: ['equals', 'not equals', 'contains'],
      // fields: ['name', 'age', 'city'],
      // filters: [
      //   [
      //     { id: 1, field: 'name', operator: 'equals', value: 'John' },
      //     { id: 2, field: 'age', operator: 'not equals', value: '25' },
      //     { id: 3, field: 'city', operator: 'contains', value: 'Ankara' },
      //   ],
      // ],
      // filters: this.value,
    };
  },
  watch: {
    filters: {
      handler(newValue) {
        // this.$emit('input', newValue); // Ana bileşene değişikliği bildiriyoruz
      },
      deep: true,
    },
  },
  methods: {
    isArray(a: any) {
      return Array.isArray(a);
    },
    forceUpdate() {
      this.$forceUpdate();
    },
    addFilter(group: any, position: number) {
      debugger;
      const newFilter = { id: utils.generateRandomId(), field: null, operator: null, value: '' };
      group.splice(position + 1, 0, newFilter);
    },
    addX(group: any, position: number) {
      this.filters.push(123);
    },
    removeFilter(group: any, index: number) {
      group.splice(index, 1);
    },
    applyFilters() {
      // for (let filter of this.filters) {
      //   console.log(`Filter: ${filter.field} ${filter.operator} ${filter.value}`);
      // }
    },
    resetFilters() {
      // this.filters = [{ field: null, operator: null, value: '' }];
    },
    saveFilters() {
      console.log(this.filters);
      this.$emit('emit', this.filters);
    },
    addGroup(group: any, groupIndex: number) {
      console.log('addGroup', groupIndex);
      group.push([]);
    },
    removeGroup(index: number) {
      this.filters.splice(index, 1);
    },
  },
});
</script>

<style>
.groups {
  margin-bottom: 12px;
  padding: 16px;
  border: 1px solid red;
}

.items {
  margin: 16px 0;
  padding: 16px;
  border: 1px solid green;
}
</style>
