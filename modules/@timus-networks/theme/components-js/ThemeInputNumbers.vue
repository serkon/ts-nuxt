<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Controls Position</h1>
      <p class="p-lg my-6">Bu örnek, farklı boyutlarda ve konfigürasyonlarda bir sayı giriş bileşeni olan el-input-number'ı göstermektedir.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4 items-center">
        <el-input-number v-model="input" controls-position="right" @change="handleChange" disabled></el-input-number>
        <el-input-number v-model="input" size="large" controls-position="right" @change="handleChange"></el-input-number>
        <el-input-number v-model="input" size="medium" controls-position="right" @change="handleChange"></el-input-number>
        <el-input-number v-model="input" size="small" controls-position="right" @change="handleChange"></el-input-number>
        <el-input-number v-model="input" size="mini" controls-position="right" @change="handleChange"></el-input-number>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-input-number v-model=&quot;input&quot; size=&quot;large&quot; controls-position=&quot;right&quot;
            @change=&quot;handleChange&quot;&gt;&lt;/el-input-number&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h1>Basic usage</h1>
      <p class="p-lg my-6">Bu örnek, minimum ve maksimum değerlerle sınırlı bir el-input-number bileşenini göstermektedir.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4 items-center">
        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10000" disabled></el-input-number>
        <el-input-number size="large" v-model="num" @change="handleChange" :min="1" :max="10000"></el-input-number>
        <el-input-number size="medium" v-model="num" @change="handleChange" :min="1" :max="10000"></el-input-number>
        <el-input-number size="small" v-model="num" @change="handleChange" :min="1" :max="10000"></el-input-number>
        <el-input-number size="mini" v-model="num" @change="handleChange" :min="1" :max="10000"></el-input-number>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-input-number v-model=&quot;num&quot; @change=&quot;handleChange&quot; :min=&quot;1&quot;
            :max=&quot;10000&quot;&gt;&lt;/el-input-number&gt;
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
      input: 3532,
      num: 213,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
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
