<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Basic</h1>
      <p class="p-lg my-6">Standart metin girişi için temel <code>el-input</code> bileşenini kullanabilirsiniz.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-switch v-model="value1"> </el-switch>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-input placeholder="Please input" v-model="input"&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Custom Color</h1>
      <p class="p-lg my-6">Standart metin girişi için temel <code>el-input</code> bileşenini kullanabilirsiniz.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-input placeholder="Please input" v-model="input"&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Text description</h1>
      <p class="p-lg my-6">You can add active-text and inactive-text attribute to show texts.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-switch v-model="value1" active-text="Pay by month" inactive-text="Pay by year"> </el-switch>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-input placeholder="Please input" v-model="input"&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Disabled</h1>
      <p class="p-lg my-6">Standart metin girişi için temel <code>el-input</code> bileşenini kullanabilirsiniz.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-switch v-model="value1" disabled inactive-text="Pay by year"></el-switch>
        <el-switch v-model="value2" disabled inactive-text="Pay by year"></el-switch>
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
  name: 'TimusButtonSample',
  data() {
    return {
      value1: true,
      value2: true,
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
    querySearch(queryString, cb) {
      var links = this.links;
      var results = queryString ? links.filter(this.createFilter(queryString)) : links;
      // call callback function to return suggestions
      cb(results);
    },
    querySearchAsync(queryString, cb) {
      var links = this.links;
      var results = queryString ? links.filter(this.createFilter(queryString)) : links;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createFilter(queryString) {
      return (link) => {
        return link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    },
    loadAll() {
      return [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' },
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
  },
  mounted() {
    this.links = this.loadAll();
  },
});
</script>
