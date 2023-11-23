<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Basic</h1>
      <p class="p-lg my-6">Standart metin girişi için temel <code>el-input</code> bileşenini kullanabilirsiniz.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-link href="https://element.eleme.io" target="_blank">default</el-link>
        <el-link type="primary" to="/">primary</el-link>
        <el-link type="success">success</el-link>
        <el-link type="warning">warning</el-link>
        <el-link type="danger">danger</el-link>
        <el-link type="info">info</el-link>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-input placeholder="Please input" v-model="input"&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>With Nuxt Link</h1>
      <p class="p-lg my-6">Standart metin girişi için temel <code>el-input</code> bileşenini kullanabilirsiniz.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <NuxtLink to="/"><el-link type="primary">Nuxt Link</el-link></NuxtLink>
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
        <el-link disabled>default</el-link>
        <el-link type="primary" disabled>primary</el-link>
        <el-link type="success" disabled>success</el-link>
        <el-link type="warning" disabled>warning</el-link>
        <el-link type="danger" disabled>danger</el-link>
        <el-link type="info" disabled>info</el-link>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-input placeholder="Please input" v-model="input"&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Underline</h1>
      <p class="p-lg my-6">Standart metin girişi için temel <code>el-input</code> bileşenini kullanabilirsiniz.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-link :underline="false">Without Underline</el-link>
        <el-link>With Underline</el-link>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-input placeholder="Please input" v-model="input"&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Icon</h1>
      <p class="p-lg my-6">Standart metin girişi için temel <code>el-input</code> bileşenini kullanabilirsiniz.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-link icon="el-icon-edit">Edit</el-link>
        <el-link>Check<i class="el-icon-view el-icon--right"></i> </el-link>
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
      inputNumber: '',
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      select: '',
      links: [],
      state: '',
      state1: '',
      state2: '',
      text: '',
      textarea: '',
      textarea1: '',
      textarea2: '',
      timeout: null,
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
