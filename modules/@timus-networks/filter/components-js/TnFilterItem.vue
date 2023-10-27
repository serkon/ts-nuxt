<template>
  <div class="filter-item">
    <select v-model="value.condition" class="filter-condition form-control form-control-sm" :disabled="!index">
      <option v-for="(c, index) in ['and', 'or']" :key="index" :value="c">{{ c }}</option>
    </select>
    <select v-model="value.field" class="filter-field form-control form-control-sm">
      <option v-for="(field, index) in fields" :key="index" :value="field">{{ field }}</option>
    </select>
    <select v-model="value.operator" class="filter-operator form-control form-control-sm">
      <option v-for="op in operators" :key="op" :value="op">{{ op }}</option>
    </select>
    <input v-model="value.value" class="filter-value form-control form-control-sm" />
    <button class="btn btn-sm btn-primary-outline" @click="$emit('field-remove', value)">x</button>
  </div>
</template>

<script>import Vue from 'vue';
export default Vue.extend({
    name: 'TnFilterField',
    props: {
        fields: {
            type: Array,
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
    data() {
        return {
            operators: ['equals', 'not equals', 'contains'],
        };
    },
});
</script>
