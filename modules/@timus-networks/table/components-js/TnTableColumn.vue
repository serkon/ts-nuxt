<!-- TnColumn.vue -->
<template>
  <td v-if="!hide.includes(column.field)" class="tn-column">
    <div class="td-container">
      <slot v-bind="{ row, hide, column, index, rowIndex }">{{ row[column.field] }}</slot>
    </div>
  </td>
</template>

<script>import Vue from 'vue';
export default Vue.extend({
    name: 'TnTableColumn',
    props: {
        row: {
            type: Object,
            default: () => { },
        },
        rowIndex: {
            type: Number,
        },
        hide: {
            type: Array,
            default: () => [],
        },
        column: {
            type: Object,
            default: () => ({}),
        },
        index: {
            type: Number,
        },
    },
});
</script>
