<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Alert</h1>
      <p class="p-lg-c my-6">Uyarı bileşenleri, sayfada otomatik olarak kaybolmayan non-overlay mesajlarını görüntülemek için kullanılır.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-alert :title="`${item}`" :type="item" class="isax-activity" v-for="(item, key) in colors" :key="key"></el-alert>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-alert title="Success alert" type="success" class="isax-activity"&gt;&lt;/el-alert&gt;</code>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ThemeTable',
  computed: {
    gridSize() {
      const grids = {
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8',
      };
      return grids;
    },
  },
  data() {
    return {
      colors: ['primary', 'secondary', 'gray', 'warning', 'danger', 'info', 'success'],
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date');
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      console.log(row, column, value);
      const property = column['property'];
      return row[property] === value;
    },
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    },
  },
});
</script>
