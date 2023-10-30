<template>
  <div class="filter-item">
    {{ setValue }}
    <select v-model="setValue.condition" class="filter-condition form-control form-control-sm" :disabled="!index">
      <option v-for="(c, optionIndex) in ['and', 'or']" :key="optionIndex" :value="c">{{ c }}</option>
    </select>
    <select v-model="setValue.field" class="filter-field form-control form-control-sm">
      <option v-for="(field, optionIndex) in fields" :key="optionIndex" :value="field">{{ field }}</option>
    </select>
    <select v-model="setValue.operator" class="filter-operator form-control form-control-sm">
      <option v-for="op in operators" :key="op" :value="op">{{ op }}</option>
    </select>
    <input v-model="setValue.value" class="filter-value form-control form-control-sm" />
    <button class="btn btn-sm btn-primary-outline" @click="fieldRemove">x</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Field } from './TnFilter.vue';

interface Data {
  operators: string[];
}

export default Vue.extend({
  name: 'TnFilterField',
  props: {
    fields: {
      type: Array as () => Field[],
      required: true,
      default: () => [],
    },
    value: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
    },
  },
  data(): Data {
    return {
      operators: ['equals', 'not equals', 'contains'],
    };
  },
  computed: {
    setValue() {
      if (!this.value.field) {
        this.value.field = this.fields[0];
        this.value.operator = this.operators[0];
        this.value.value = '';
        this.value.condition = 'and';
      }
      return this.value;
    },
  },
  watch: {
    setValue: {
      deep: true,
      immediate: true,
      handler() {
        this.$emit('trigger-parent');
      },
    },
  },
  methods: {
    fieldRemove() {
      this.$emit('field-remove', this.value);
    },
  },
});
</script>
