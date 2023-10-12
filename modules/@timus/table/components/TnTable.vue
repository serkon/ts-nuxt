<template>
  <table class="container">
    <tbody>
      <component :is="'TnColumn'" v-for="(row, index) in data" :key="index" class="table-row" :row="row">
        <slot />
      </component>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export interface TableProvide {
  shared: {
    filterEnable: boolean;
    tableData: any[];
    selected: any[];
    selectUpdater: (item: { [key: string]: any }) => void;
  };
}

export default Vue.extend({
  name: 'TnTable',
  provide(): TableProvide {
    return {
      shared: {
        filterEnable: this.filterEnable,
        tableData: this.data,
        selected: this.localSelected,
        selectUpdater: this.updateSelected,
      },
    };
  },
  props: {
    data: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    filterEnable: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  },
  data: () => ({
    localSelected: [] as any[],
  }),
  methods: {
    slots() {
      const slots = this.$slots.default?.filter((slot) => slot.componentOptions?.tag === 'TnColumn');

      // return slots && slots.length > 0 ? slots : null;
      return slots && slots.length > 0 ? slots[0].componentOptions?.Ctor : null;
    },
    updateSelected(item: { [key: string]: any }) {
      !this.localSelected.includes(item) ? this.localSelected.push(item) : (this.localSelected = this.localSelected.filter((i: { [key: string]: any }) => i !== item));
      this.$emit('select', this.localSelected);
    },
  },
});
</script>
