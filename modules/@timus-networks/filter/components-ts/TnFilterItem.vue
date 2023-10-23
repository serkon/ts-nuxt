<template>
  <div class="filter-item">
    <select v-model="value.condition" class="form-control form-control-sm" :disabled="!index">
      <option v-for="(c, index) in ['and', 'or']" :key="index" :value="c">{{ c }}</option>
    </select>
    <select v-model="value.field" class="form-control form-control-sm">
      <option v-for="(field, index) in fields" :key="index" :value="field">{{ field }}</option>
    </select>
    <select v-model="value.operator" class="form-control form-control-sm">
      <option v-for="op in operators" :key="op" :value="op">{{ op }}</option>
    </select>
    <input v-model="value.value" class="form-control form-control-sm" />
    <button class="btn btn-sm btn-primary-outline" @click="$emit('field-remove', value)">remove</button>
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
  mounted() {
    if (!this.value.field) {
      this.value.field = this.fields[0];
      this.value.operator = this.operators[0];
      this.value.value = '';
      !this.value.condition && this.$set(this.value, 'condition', this.index === 0 ? 'and' : 'or');
    }
  },
  data(): Data {
    return {
      operators: ['equals', 'not equals', 'contains'],
    };
  },
});
</script>
