<template>
  <div>
    <div class="border">{{ field }}</div>
    <slot name="filter">
      <div class="border">filter comes here</div>
    </slot>
    <div v-for="(item, index) in shared.tableData" :key="index" class="border" :title="item.name" @click="htmlRowClicked(item)">
      <slot :item="item" :field="field" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { TableProvide } from './TnTable.vue';

// import { TableProvide } from './TnTable.vue';

type TableData = Array<{ [key: string]: any }>;

export default Vue.extend({
  name: 'TnColumn',
  inject: {
    shared: {
      default: () => ({
        tableData: [],
        selected: [],
        selectUpdater: (): any => {},
      }),
    },
  },
  props: {
    field: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    selected: {} as TableData,
  }),
  computed: {
    // @NOTE:
    // `Shared` ile aynı isimde bir computed method tanımladım.
    // Amacım Typescript'in provider içerisindeki this.shared'i bulamamasından dolayı hata vermemesi için.
    // Bunu yapmazsam typescript inject içerisinde tanımlanan variable'ı görmediği
    // için hata veriyor ve hiç bir yerde Type Defination yapılamıyor.
    shared(): TableProvide['shared'] {
      return this.shared;
    },
    parent(): any {
      return this.$parent as Vue;
    },
  },
  methods: {
    htmlRowClicked(item: { [key: string]: any }) {
      this.shared.selectUpdater(item);
    },
  },
});
</script>
