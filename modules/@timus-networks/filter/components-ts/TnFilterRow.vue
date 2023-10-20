<template>
  <div>
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
  name: 'TnFilterRow',
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
  },
  data(): Data {
    return {
      operators: ['equals', 'not equals', 'contains'],
    };
  },
  methods: {
    forceUpdate() {
      this.$forceUpdate();
    },
    // diğer metodlar...
  },
  // watch: {
  //   dataFieldValue: {
  //     handler(newValue) {
  //       this.$emit('event-field', newValue); // Ana bileşene değişikliği bildiriyoruz
  //     },
  //     deep: true,
  //   },
  // },
});
</script>
