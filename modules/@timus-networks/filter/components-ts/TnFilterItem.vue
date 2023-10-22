<template>
  <div class="items">
    <select v-model="value.condition" class="form-control form-control-md" :disabled="!index">
      <option v-for="(c, index) in ['and', 'or']" :key="index" :value="c">{{ c }}</option>
    </select>
    <select v-model="value.field" class="form-control form-control-md">
      <option v-for="(field, index) in fields" :key="index" :value="field">{{ field }}</option>
    </select>

    <select v-model="value.operator" class="form-control form-control-md">
      <option v-for="op in operators" :key="op" :value="op">{{ op }}</option>
    </select>

    <input v-model="value.value" class="form-control form-control-md" />
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
