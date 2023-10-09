<!-- TnColumn.vue -->
<template>
  <div>
    <div class="border">{{ field }}</div>
    <slot name="filter">
      <div class="border">pearl</div>
    </slot>
    <div v-for="(item, index) in tableData" :key="index" class="border">
      <slot :item="item" :field="field" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TnColumn',
  inject: ['tableData'],
  props: {
    field: {
      type: String,
      required: true,
    },
  },
  computed: {
    tableData() {
      // Üst bileşenden (TnTable) veriyi alıyoruz
      return (this.$parent as any).data;
    },
  },
});
</script>
