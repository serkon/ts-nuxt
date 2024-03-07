<template>
  <th v-if="!hide.includes(column.field)" class="tn-header">
    <div class="th-container">
      <slot v-bind="{ index, column, hide, sorting }">{{ column.label }}</slot>
      <span class="sort" :class="{ deactive: !sort }" @click="$emit('event-sort', column.field)">
        {{ sort?.alignment === 'asc' ? '↑' : sort?.alignment === 'desc' ? '↓' : '↑' }}
      </span>
    </div>
  </th>
</template>

<script>import Vue from 'vue';
export default Vue.extend({
    name: 'TnTableHead',
    props: {
        column: {
            type: Object,
            default: () => ({}),
        },
        index: {
            type: Number,
            default: null,
        },
        hide: {
            type: Array,
            default: () => [],
        },
        sorting: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        sort() {
            return this.sorting.find((item) => item.field === this.column.field);
        },
    },
});
</script>
