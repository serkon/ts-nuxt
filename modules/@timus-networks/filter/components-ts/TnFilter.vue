<template>
  <div class="filter-group">
    <div class="filter-actions" :class="{ 'filter-header-first': !index }">
      <select v-model="filters.condition" class="filter-condition form-control form-control-sm" :disabled="!index">
        <option v-for="(c, index) in ['and', 'or']" :key="index" :value="c">{{ c }}</option>
      </select>
      <div class="filter-buttons">
        <button @click="groupAdd" class="filter-add-group btn btn-primary-outline btn-xs">Add Group</button>
        <button @click="fieldAdd" class="filter-add-field btn btn-primary-outline btn-xs">Add Fields</button>
        <button @click="groupRemove" class="filter-remove-group btn btn-primary-outline btn-xs">X</button>
      </div>
    </div>
    <template class="filter-item" v-for="(item, index) in currentFilters">
      <TnFilter :fields="fields" :filters="item" v-if="isGroup(item)" @group-remove="eventRemove" :index="index"></TnFilter>
      <TnFilterItem
        :fields="fields"
        :value="item"
        :index="index"
        v-else
        @field-remove="eventRemove"
        :class="{ 'filter-item-first': index === lastField }"
      >
      </TnFilterItem>
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
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    currentFilters(): (Field | Group)[] {
      return 'rules' in this.filters ? this.filters.rules : (this.filters as (Field | Group)[]);
    },
    lastField(): number | null {
      for (let i = this.currentFilters.length - 1; i >= 0; i--) {
        if (!this.isGroup(this.currentFilters[i])) {
          return i;
        }
      }
      return null;
    },
  },
  methods: {
    isGroup(item: Field | Group): item is Group {
      return 'rules' in item;
    },
    fieldAdd(): void {
      this.currentFilters.push({
        id: utils.generateRandomId(),
        field: null,
        operator: null,
        value: '',
        condition: null,
      });
    },
    groupAdd(): void {
      this.currentFilters.push({
        id: utils.generateRandomId(),
        condition: this.currentFilters.length === 0 ? 'and' : 'or',
        rules: [],
      });
    },
    groupRemove(): void {
      Array.isArray(this.filters) ? this.currentFilters.splice(0, this.currentFilters.length) : this.$emit('group-remove', this.filters);
    },
    eventRemove($event: Group): void {
      // Burası parent gibi düşün alttan trigger edilen burada yakalanır ve listeden silinir
      const index = this.currentFilters.findIndex((item) => item.id === $event.id);
      index > -1 && this.currentFilters.splice(index, 1);
    },
  },
});
</script>

<style>
.filter-actions {
  display: flex;
  align-items: center;

  .filter-buttons {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    gap: 4px;
  }
}

.filter-group,
.filter-item {
  display: flex;
  padding: 8px;
  border-radius: 6px;
  gap: 8px;
}

.filter-group {
  flex-direction: column;
  border: 1px solid rgba(250, 0, 0, 15%);
  background-color: rgba(250, 0, 0, 1%);
}

.filter-item {
  border: 1px solid rgba(0, 179, 107, 20%);
  background-color: rgba(0, 179, 107, 5%);
}
</style>
