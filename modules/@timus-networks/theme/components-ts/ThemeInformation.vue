<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Custom Tag</h1>
      <p class="p-lg my-6">Standart metin girişi için temel <code>el-input</code> bileşenini kullanabilirsiniz.</p>
      <div class="flex gap-4">
        <div class="el-custom-tag">
          Ahmet Polat MacBook Pro, Ahmet Fatih Sez...
          <span class="suffix">23</span>
        </div>

        <div class="el-custom-tag">
          Ahmet Polat MacBook Pro, Ahmet Fatih Sez...
          <span class="suffix">23</span>
        </div>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>
            &lt;div class=&quot;el-custom-tag&quot;&gt;Ahmet Polat MacBook Pro, Ahmet Fatih Sez...&lt;span
            class=&quot;suffix&quot;&gt;23&lt;/span&gt;&lt;/div&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h1>Basic</h1>
      <p class="p-lg my-6">Standart metin girişi için temel <code>el-input</code> bileşenini kullanabilirsiniz.</p>
      <div class="flex gap-4">
        <div class="el-information">
          <div class="title">Text</div>
          <div class="description">Description</div>
        </div>

        <div class="el-information vertical">
          <div class="title">Text</div>
          <div class="description">Description</div>
        </div>

        <div class="el-information">
          <div class="title">Text</div>
          <div class="description">Description</div>
        </div>

        <div class="el-information">
          <div class="title">Text</div>
          <div class="description">Description</div>
        </div>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>
            &lt;div class=&quot;information&quot;&gt;&lt;div class=&quot;title&quot;&gt;Text&lt;/div&gt;&lt;div
            class=&quot;description&quot;&gt;Description&lt;/div&gt;&lt;/div&gt;
          </code>
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
