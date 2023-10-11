<template>
  <div class="table-column">
    <slot :slo="dataDon" :item="$parent?.$props" :field="$attrs" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

type TableData = Array<{ [key: string]: any }>;

export default Vue.extend({
  name: 'TnColumn',
  inject: {
    shared: {
      default: () => ({
        filterEnable: false,
        tableData: [],
        selected: [],
        selectUpdater: (): any => {},
      }),
    },
  },
  props: {
    row: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  computed: {
    dataDon(): TableData {
      return (this.$parent as any).data;
    },
  },
  mounted() {
    // debugger;
    console.log(this.$slots.default);
  },
  methods: {
    slots() {
      const slots = this.$slots.default?.filter((slot) => slot.componentOptions?.tag === 'TnColumn');

      return slots && slots.length > 0 ? slots[0].componentOptions?.Ctor : null;
    },
  },
});
</script>
