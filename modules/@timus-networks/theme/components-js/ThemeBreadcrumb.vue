<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Temel Kullanım</h1>
      <p class="p-md-c my-6">
        Butonlar ve simgeler üzerinde sayı veya durum işareti. Yeni mesajların miktarını görüntüler. Miktar, `Number` veya `String` kabul eden `value`
        ile tanımlanır.
      </p>
      <el-breadcrumb separator-class="isax-arrow-right-1">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">promotion management</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>
            &lt;el-breadcrumb separator-class="el-icon-arrow-right""&gt; &lt;el-breadcrumb-item :to="{ path: '/'
            }"&gt;Comments&lt;/el-breadcrumb-item&gt; &lt;/el-breadcrumb&gt;
          </code>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimusBreadcrumb',
  data() {
    return {
      colors: ['primary', 'info', 'success', 'warning', 'danger'],
      sizeList: ['large', 'medium', 'small'],
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
});
</script>
