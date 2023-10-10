<template>
  <div class="don">
    <div class="flex">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export interface TableProvide {
  shared: {
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
    selected: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  },
  data: () => ({
    localSelected: [] as any[],
  }),
  methods: {
    updateSelected(item: { [key: string]: any }) {
      !this.localSelected.includes(item) ? this.localSelected.push(item) : (this.localSelected = this.localSelected.filter((i: { [key: string]: any }) => i !== item));
      this.$emit('select', this.localSelected);
    },
  },
});
</script>
