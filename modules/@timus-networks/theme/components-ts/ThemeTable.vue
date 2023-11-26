<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Fixed Height</h1>
      <p class="p-lg my-6">Standart metin girişi için temel <code>el-input</code> bileşenini kullanabilirsiniz.</p>
      <div class="grid grid-flow-col gap-4">
        <div class="table-container">
          <el-table
            :data="tableData"
            :default-sort="{ prop: 'date', order: 'descending' }"
            @selection-change="handleSelectionChange"
            ref="multipleTable"
          >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column
              prop="date"
              label="Date"
              sortable
              width="180"
              column-key="date"
              :filters="[
                { text: '2016-05-01', value: '2016-05-01' },
                { text: '2016-05-02', value: '2016-05-02' },
                { text: '2016-05-03', value: '2016-05-03' },
                { text: '2016-05-04', value: '2016-05-04' },
              ]"
              :filter-method="filterHandler"
            >
            </el-table-column>
            <el-table-column prop="name" label="Name" width="180"> </el-table-column>
            <el-table-column prop="address" label="Address" :formatter="formatter"> </el-table-column>
            <el-table-column
              prop="tag"
              label="Tag"
              :filters="[
                { text: 'Home', value: 'Home' },
                { text: 'Office', value: 'Office' },
              ]"
              :filter-method="filterTag"
              filter-placement="bottom-end"
            >
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-input placeholder="Please input" v-model="input"&gt;&lt;/el-input&gt;</code>
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
      multipleSelection: [],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office',
        },
      ],
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
  },
});
</script>
