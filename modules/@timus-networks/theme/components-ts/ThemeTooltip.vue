<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Tooltip</h1>
      <p class="p-lg-c my-6">
        Bu örnek, Element UI tarafından sağlanan <code>el-table</code> bileşenini kullanarak bir veri tablosu oluşturmanın temel bir örneğini
        göstermektedir. `table-container` ile dışarıya border verildiğini unutmamanızı tavsiye ediyoruz.
      </p>
      <div class="flex flex-wrap gap-4">
        <el-tooltip class="item h-24 outline" effect="dark" content="Top Left prompts info" placement="top-start">
          <el-button size="large">top-start</el-button>
        </el-tooltip>
        <el-tooltip class="item h-24 outline" effect="dark" content="Top Center prompts info" placement="top">
          <el-button size="large">top</el-button>
        </el-tooltip>
        <el-tooltip class="item h-24 outline" effect="dark" content="Top Right prompts info" placement="top-end">
          <el-button size="large">top-end</el-button>
        </el-tooltip>

        <el-tooltip class="item h-24 outline" effect="dark" content="Left Top prompts info" placement="left-start">
          <el-button size="large">left-start</el-button>
        </el-tooltip>
        <el-tooltip class="item h-24 outline" effect="dark" content="Left Center prompts info" placement="left">
          <el-button size="large">left</el-button>
        </el-tooltip>
        <el-tooltip class="item h-24 outline" effect="dark" content="Left Bottom prompts info" placement="left-end">
          <el-button size="large">left-end</el-button>
        </el-tooltip>

        <el-tooltip class="item h-24 outline" effect="dark" content="Right Top prompts info" placement="right-start">
          <el-button size="large">right-start</el-button>
        </el-tooltip>
        <el-tooltip class="item h-24 outline" effect="dark" content="Right Center prompts info" placement="right">
          <el-button size="large">right</el-button>
        </el-tooltip>
        <el-tooltip class="item h-24 outline" effect="dark" content="Right Bottom prompts info" placement="right-end">
          <el-button size="large">right-end</el-button>
        </el-tooltip>

        <el-tooltip class="item h-24 outline" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
          <el-button size="large">bottom-start</el-button>
        </el-tooltip>
        <el-tooltip class="item h-24 outline" effect="dark" content="Bottom Center prompts info" placement="bottom">
          <el-button size="large">bottom</el-button>
        </el-tooltip>
        <el-tooltip class="item h-24 outline" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
          <el-button size="large">bottom-end</el-button>
        </el-tooltip>
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
