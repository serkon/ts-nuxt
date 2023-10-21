<template>
  <div class="groups">
    <button @click="groupAdd(filters, filters.length - 1 ?? 0)" class="btn btn-primary-outline btn-md">+ Group</button>
    <button @click="fieldAdd(filters, filters.length - 1)" class="btn btn-primary-outline btn-md">+ Fields</button>
    <div class="items" v-for="(item, index) in filters" :key="index">
      <div>item: {{ item }}</div>
      <TnFilter :fields="fields" :filters="item" v-if="isArray(item)"></TnFilter>
      <TnFilterItem :fields="fields" :value="item" :index="index" v-else></TnFilterItem>
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
  condition: 'and' | 'or';
}

interface Data {}

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
  methods: {
    isArray(a: any) {
      return Array.isArray(a);
    },
    fieldAdd(group: any, position: number) {
      const newFilter = { id: utils.generateRandomId(), field: null, operator: null, value: '' };
      group.splice(position + 1, 0, newFilter);
    },
    fieldRemove(group: any, index: number) {
      group.splice(index, 1);
    },
    groupAdd(group: any, groupIndex: number) {
      group.push([]);
    },
    groupRemove(index: number) {
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
