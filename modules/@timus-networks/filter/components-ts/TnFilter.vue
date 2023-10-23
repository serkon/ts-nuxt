<template>
  <div class="filter-groups">
    <div class="filter-actions">
      <button @click="groupAdd" class="filter-add-group btn btn-primary-outline btn-xs">Add Group</button>
      <button @click="fieldAdd" class="filter-add-field btn btn-primary-outline btn-xs">Add Fields</button>
      <button @click="groupRemove" class="filter-remove-group btn btn-primary-outline btn-xs">Remove</button>
    </div>
    <template class="filter-item" v-for="(item, index) in currentFilters">
      <!-- <div>item: {{ item }}</div> -->
      <TnFilter :fields="fields" :filters="item" v-if="isGroup(item)" @group-remove="eventRemove"></TnFilter>
      <TnFilterItem :fields="fields" :value="item" :index="index" v-else @field-remove="eventRemove"></TnFilterItem>
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
    groupAdd() {
      this.currentFilters.push({
        id: utils.generateRandomId(),
        condition: '',
        rules: [],
      });
    },
    groupRemove() {
      this.$emit('group-remove', this.filters);
    },
    eventRemove($event: Group) {
      const index = this.currentFilters.findIndex((item) => item.id === $event.id);
      index > -1 && this.currentFilters.splice(index, 1);
      console.log('eventRemove', $event);
    },
  },
});
</script>

<style>
.filter-actions {
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
}

.filter-groups {
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid rgba(250, 0, 0, 5%);
  background-color: rgba(250, 0, 0, 1%);
  gap: 0;
}

.filter-item {
  display: flex;
  padding: 8px;
  border-bottom: 1px solid rgba(0, 250, 150, 15%);
  background-color: rgba(0, 250, 150, 5%);
  gap: 12px;
}
</style>
