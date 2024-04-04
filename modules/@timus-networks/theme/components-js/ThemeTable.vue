<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Fixed Height</h1>
      <p class="p-md-c my-6">
        This example demonstrates the basic usage of creating a data table using the `el-table` component provided by Element UI. Please note that the
        outer border is applied with `table-container`.
      </p>
      <div class="grid flex-column">
        <div class="table-container mb-4">
          <el-table
            ref="multipleTable"
            :data="tableData"
            :default-sort="{ prop: 'date', order: 'descending' }"
            height="360px"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="16" />
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
            />
            <el-table-column prop="name" label="Name" width="60" :show-overflow-tooltip="true" />
            <el-table-column prop="address" label="Address" :formatter="formatter" />
            <el-table-column
              prop="tag"
              label="Tag"
              :filters="[
                { text: 'Home', value: 'Home' },
                { text: 'Office', value: 'Office' },
                { text: 'Potato', value: 'Potato' },
              ]"
              :filter-method="filterTag"
              filter-placement="top-start"
            />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="120" />
            <el-table-column prop="address" label="Address" width="300" />
            <el-table-column prop="zip" label="Zip" width="120" />
            <el-table-column fixed="right" label="Operations" width="120">
              <template #default="scope">
                <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)"> Remove </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <el-pagination
          v-model:current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, prev, pager, next, jumper, sizes"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>

      <div class="grid flex-column">
        <div class="table-container mb-4">
          <el-table
            ref="multipleTable"
            :data="tableData"
            :default-sort="{ prop: 'date', order: 'descending' }"
            height="360px"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="16" />
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
            />
            <el-table-column prop="name" label="Name" width="60" :show-overflow-tooltip="true" />
            <el-table-column prop="address" label="Address" :formatter="formatter" />
            <el-table-column
              prop="tag"
              label="Tag"
              :filters="[
                { text: 'Home', value: 'Home' },
                { text: 'Office', value: 'Office' },
                { text: 'Potato', value: 'Potato' },
              ]"
              :filter-method="filterTag"
              filter-placement="top-start"
            />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="120" />
            <el-table-column prop="address" label="Address" width="300" />
            <el-table-column prop="zip" label="Zip" width="120" />
            <el-table-column label="Operations" width="420" class="items-end patates" align="center">
              <template #default="scope">
                teeee <el-button size="small" @click.native.prevent="deleteRow(scope.$index, tableData)"> Remove </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <el-pagination
          v-model:current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, prev, pager, next, jumper, sizes"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
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

    <section>
      <h1>Expandable Row</h1>
      <p class="p-md-c my-6">
        When the row content is too long and you do not want to display the horizontal scroll bar, you can use the expandable row feature. Activate
        expandable row by adding type="expand" and scoped slot. The template for el-table-column will be rendered as the contents of the expanded row,
        and you can access the same attributes as when you are using Scoped slot in custom column templates.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <div class="table-container mb-4">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="expand">
              <template #default="props">
                <p>State: {{ props.row.state }}</p>
                <p>City: {{ props.row.city }}</p>
                <p>Address: {{ props.row.address }}</p>
                <p>Zip: {{ props.row.zip }}</p>
              </template>
            </el-table-column>
            <el-table-column label="Date" prop="date" />
            <el-table-column label="Name" prop="name" />
          </el-table>
        </div>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>
            &lt;el-table :data="tableData"&gt; &lt;el-table-column type="expand"&gt; &lt;template v-slot="props"&gt; &lt;p&gt;State: { props.row.state
            } &lt;/p&gt; &lt;/template&gt; &lt;/el-table-column&gt; &lt;/el-table&gt;
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
          name: 'Tom Tom Tom Tom Tom Tom Tom Tom Tom Tom Tom Kruz',
          state: 'California ST',
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
      const { property } = column;

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
