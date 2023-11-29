<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Fill</h1>
      <p class="p-lg my-6">
        "Fill" stili butonlar, içeriği tamamen kaplayan renge sahip butonlardır. Bu butonlar, kullanıcının dikkatini çekmek ve önemli eylemleri
        vurgulamak için idealdir.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-button :type="item" v-for="(item, index) in colors" :key="index">{{ item }}</el-button>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          Örnek kullanım:
          <code>&lt;el-button :type="'primary'"&gt;Primary&lt;/el-button&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Outline</h1>
      <p class="p-lg my-6">Çevresi çizgili ve içi transparan olan 'outline' butonlarımız, daha hafif bir tasarım dili sunar.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-button :type="item" v-for="(item, index) in colors" :key="index" class="outline" plain>{{ item }}</el-button>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Outline görünümü için, buton elementinize <code>class="outline"</code> ekleyin. Örnek:
          <code>&lt;el-button class="outline"&gt;Button&lt;/el-button&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Ghost</h1>
      <p class="p-lg my-6">Hemen hemen şeffaf 'ghost' butonlarımız, minimalist tasarımlar için uygundur ve arka planla uyum sağlar.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-button :type="item" v-for="(item, index) in colors" :key="index" class="ghost">{{ item }}</el-button>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Ghost görünümü için, buton elementinize <code>class="ghost"</code> ekleyin. Örnek:
          <code>&lt;el-button class="ghost"&gt;Button&lt;/el-button&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Size</h1>
      <p class="p-lg my-6">Farklı boyutlardaki butonlarımız, çeşitli arayüz ihtiyaçlarına yanıt vermek için tasarlanmıştır.</p>
      <div class="grid grid-flow-col auto-cols-max items-center gap-4">
        <el-button :size="item" v-for="(item, index) in sizes" :key="index" type="primary">{{ item }}</el-button>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Örnekler:
          <code>&lt;el-button :size="'large'"&gt;Button&lt;/el-button&gt;</code> ya da
          <code>&lt;el-button :size="'small'"&gt;Button&lt;/el-button&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Disabled</h1>
      <p class="p-lg my-6">Etkileşime kapalı 'disabled' butonlarımız, kullanılamaz durumları göstermek için kullanılır.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-button :type="item" v-for="(item, index) in colors" :key="index" disabled>{{ item }}</el-button>
      </div>
      <div class="my-4 p-4 border-l-4 border-red-600 bg-red-100">
        <p class="text-xs">
          Butonu devre dışı bırakmak için, <code>disabled</code> özelliğini ekleyin. Örnek:
          <code>&lt;el-button disabled&gt;Button&lt;/el-button&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Icons</h1>
      <p class="p-lg my-6">
        İkonlarla zenginleştirilmiş butonlarımız, görsel bir ipucu sunar ve kullanıcı deneyimini artırır. Tüm ikonlarımızın listesini görmek için
        <nuxt-link to="/icons" class="text-blue-600 hover:underline">buraya tıklayın</nuxt-link>.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-button type="primary" class="isax-trash"></el-button>
        <el-button type="primary" class="isax-chart"></el-button>
        <el-button type="primary" class="isax-clipboard-text icon-right">icon-right</el-button>
        <el-button type="primary" :class="item" v-for="(item, index) in icons" :key="index">{{ item }}</el-button>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Örnekler:
          <code>&lt;el-button type="primary" class="isax-trash"&gt;&lt;/el-button&gt;</code>. Sağda ikon için <code>class="icon-right"</code> ekleyin.
        </p>
      </div>
    </section>

    <section>
      <h1>Groups</h1>
      <p class="p-lg my-6">Buton gruplarımız, ilgili işlemleri bir arada toplayarak kullanıcı arayüzünü düzenler.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-button-group>
          <el-button type="primary" class="isax-arrow-left">Previous Page</el-button>
          <el-button type="primary" class="isax-arrow-right-1 icon-right">Next Page</el-button>
        </el-button-group>
        <el-button-group>
          <el-button type="primary" icon="isax-textalign-justifyleft"></el-button>
          <el-button type="primary" icon="isax-textalign-center"></el-button>
          <el-button type="primary" icon="isax-textalign-justifyright"></el-button>
        </el-button-group>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">Buton grupları için <code>&lt;el-button-group&gt;</code> kullanın.</p>
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
      status: ['outline', 'ghost', 'rounder', 'disabled'],
      sizes: ['large', 'medium', 'small', 'mini'],
      icons: ['isax-bag', 'isax-calculator'],
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
});
</script>
