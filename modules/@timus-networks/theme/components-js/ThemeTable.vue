<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Fixed Height</h1>
      <p class="p-lg-c my-6">
        Bu örnek, Element UI tarafından sağlanan <code>el-table</code> bileşenini kullanarak bir veri tablosu oluşturmanın temel bir örneğini
        göstermektedir. `table-container` ile dışarıya border verildiğini unutmamanızı tavsiye ediyoruz.
      </p>
      <div class="grid flex-column">
        <div class="table-container mb-4">
          <el-table
            :data="tableData"
            :default-sort="{ prop: 'date', order: 'descending' }"
            @selection-change="handleSelectionChange"
            ref="multipleTable"
            height="360px"
            style="width: 100%"
          >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column
              fixed
              prop="date"
              label="Date"
              sortable
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
                { text: 'Patates', value: 'Patates' },
              ]"
              :filter-method="filterTag"
              filter-placement="top-start"
            >
            </el-table-column>
            <el-table-column prop="name" label="Name" width="120"> </el-table-column>
            <el-table-column prop="state" label="State" width="120"> </el-table-column>
            <el-table-column prop="city" label="City" width="120"> </el-table-column>
            <el-table-column prop="address" label="Address" width="300"> </el-table-column>
            <el-table-column prop="zip" label="Zip" width="120"> </el-table-column>
            <el-table-column fixed="right" label="Operations" width="120">
              <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> Remove </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, prev, pager, next, jumper, sizes"
          :total="400"
        >
        </el-pagination>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>
            &lt;div class="table-container">&lt;el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending'
            }"&gt;&lt;/el-table&gt;&lt;/div&gt;
          </code>
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
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office',
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office',
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home',
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
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
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    },
  },
});
</script>
