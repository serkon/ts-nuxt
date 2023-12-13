<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Link</h1>
      <p class="p-lg my-6">
        `el-link` bileşeni, sayfadaki metni veya bağlantıyı temsil eder ve stil ve davranışlarını özelleştirmenize olanak tanır.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-link href="https://element.eleme.io" target="_blank">default</el-link>
        <el-link :type="item" v-for="(item, index) in colors" :key="index">{{ item }}</el-link>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-link type="primary"&gt;Bağlantı&lt;/el-link&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Nuxt Link ile Kullanım</h1>
      <p class="p-lg my-6">El Link bileşenini Nuxt Link ile kullanabilirsiniz. Bu, Nuxt.js projelerinde sayfa geçişlerini kolaylaştırır.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <NuxtLink to="/" v-for="(item, index) in colors" :key="index" :class="`el-link ${item}`"> Router: {{ item }} </NuxtLink>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;NuxtLink to="/" class="el-link primary"&gt;Link&lt;/NuxtLink&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Devre Dışı Bırakılmış Durum</h1>
      <p class="p-lg my-6">El Link bileşenini devre dışı bırakmak için <code>disabled</code> özelliğini kullanabilirsiniz.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-link disabled>default</el-link>
        <el-link :type="item" v-for="(item, index) in colors" :key="index" disabled>{{ item }}</el-link>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-link disabled&gt;Devre Dışı&lt;/el-link&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Sizes</h1>
      <p class="p-lg my-6">
        El Link bileşeninin farklı boyutlarda kullanımı için 5 örnek yer almaktadır. 'large', 'medium', 'medium-custom', 'small', 'xsmall'
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-link type="primary" :underline="false">Alt Çizgi Yok</el-link>
        <el-link type="primary" class="large">Alt Çizgiyle</el-link>
        <el-link type="primary" class="medium">Alt Çizgiyle</el-link>
        <el-link type="primary" class="medium-custom">Alt Çizgiyle</el-link>
        <el-link type="primary" class="small">Alt Çizgiyle</el-link>
        <el-link type="primary" class="xsmall">Alt Çizgiyle</el-link>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-link :underline="false"&gt;Alt Çizgi Yok&lt;/el-link&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Alt Çizgi</h1>
      <p class="p-lg my-6">
        El Link bileşeninin alt çizgisini göstermek veya gizlemek için <code>:underline="false"</code> özelliğini kullanabilirsiniz.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-link type="primary" :underline="false">Alt Çizgi Yok</el-link>
        <el-link type="primary">Alt Çizgiyle</el-link>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-link :underline="false"&gt;Alt Çizgi Yok&lt;/el-link&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>İkon</h1>
      <p class="p-lg my-6">El Link bileşeni, metin veya bağlantı ile birlikte ikonlar eklemenize olanak tanır.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-link type="primary" icon="el-icon-edit">Düzenle</el-link>
        <el-link type="primary">Onayla<i class="el-icon-view el-icon--right"></i> </el-link>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-link icon="el-icon-edit"&gt;Düzenle&lt;/el-link&gt;</code>
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
      colors: ['primary', 'secondary', 'gray', 'info', 'success', 'warning', 'danger'],
    };
  },
});
</script>
