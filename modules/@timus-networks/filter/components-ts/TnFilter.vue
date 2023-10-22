<template>
  <div class="filter-groups">
    <button @click="groupAdd" class="btn btn-primary-outline btn-md">+ Group</button>
    <button @click="fieldAdd" class="btn btn-primary-outline btn-md">+ Fields</button>
    <template class="filter-item" v-for="(item, index) in currentFilters">
      <div>item: {{ item }}</div>
      <TnFilter :fields="fields" :filters="item" v-if="isGroup(item)"></TnFilter>
      <TnFilterItem :fields="fields" :value="item" :index="index" v-else></TnFilterItem>
    </template>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue/types';
import Vue from 'vue';
import { utils } from './utils';

export type Field = {
  id: string;
  field: string | null;
  operator: string | null;
  value: string;
  condition: 'and' | 'or' | null;
};

export type Group = {
  id: string;
  condition: string;
  rules: Field[];
};

export default Vue.extend({
  props: {
    fields: {
      type: Array as PropType<Field[]>,
      required: true,
    },
    filters: {
      type: [Array, Object] as PropType<(Field | Group)[] | Group>,
      default: () => [] as (Field | Group)[] | Group,
    },
  },
  computed: {
    currentFilters(): (Field | Group)[] {
      return 'rules' in this.filters ? this.filters.rules : (this.filters as (Field | Group)[]);
    },
  },
  methods: {
    isGroup(item: Field | Group): item is Group {
      return 'rules' in item;
    },
    fieldAdd() {
      const newFilter: Field = {
        id: utils.generateRandomId(),
        field: null,
        operator: null,
        value: '',
        condition: null,
      };
      this.currentFilters.push(newFilter);
    },
    fieldRemove(index: number) {
      this.currentFilters.splice(index, 1);
    },
    groupAdd() {
      this.currentFilters.push({
        id: utils.generateRandomId(),
        condition: '',
        rules: [],
      });
    },
    groupRemove(index: number) {
      this.currentFilters.splice(index, 1);
    },
  },
});
</script>

<style>
.filter-groups {
  margin-bottom: 12px;
  padding: 16px;
  border: 1px solid red;
}

.filter-item {
  margin: 16px 0;
  padding: 16px;
  border: 1px solid green;
}
</style>
