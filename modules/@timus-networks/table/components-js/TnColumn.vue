<!-- TnColumn.vue -->
<template>
  <td v-if="!hide.includes(field)" class="column">
    <slot :row="row" :field="field" :label="label" :hide="hide">{{ row[field] }}</slot>
  </td>
</template>

<script>import Vue from 'vue';
export default Vue.extend({
    name: 'TnColumn',
    props: {
        field: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        row: {
            type: Object,
            default: () => { },
        },
        hide: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        sort() {
            return this.label;
        },
    },
});
</script>
