<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>InputNumber Sample</h1>
      <p class="p-lg my-6">
        Tarih aralığı seçici, kullanıcının bir başlangıç ve bitiş tarihi seçmesine olanak tanır, bu da planlama ve raporlama işlemleri için idealdir.
      </p>
      <el-input-number v-model="input" size="large" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
      <el-input-number v-model="input" size="medium" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
      <el-input-number v-model="input" size="small" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
      <el-input-number v-model="input" size="mini" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-date-picker v-model="input" type="daterange" align="left" start-placeholder="Start" end-placeholder="End"
            default-value=""&gt;&lt;/el-date-picker&gt;
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
      input: 1,
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
