<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Popover</h1>
      <p class="p-lg my-6">
        Popover bileşeni, kullanıcı tıkladığında veya üzerine geldiğinde ek bilgileri veya eylemleri göstermek için kullanılır. Örneğinizde, farklı
        yönlere (right, bottom, top, left) yerleştirilmiş dört popover var. Her bir popover, içeriğini ve başlığını göstermek için bir tetikleyici
        düğme (el-button) kullanır.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-popover placement="right" title="Title" width="200" trigger="click" content="this is content, this is content, this is content">
          <el-button slot="reference">Right</el-button>
        </el-popover>
        <el-popover placement="bottom" title="Title" width="200" trigger="click" content="this is content, this is content, this is content">
          <el-button slot="reference">Bottom</el-button>
        </el-popover>
        <el-popover placement="top" title="Title" width="200" trigger="click" content="this is content, this is content, this is content">
          <el-button slot="reference">Top</el-button>
        </el-popover>
        <el-popover placement="left" title="Title" width="200" trigger="click" content="this is content, this is content, this is content">
          <el-button slot="reference">Left</el-button>
        </el-popover>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-popover placement=&quot;right&quot; title=&quot;Popover Title&quot; trigger=&quot;click&quot;&gt; &lt;el-button
            slot=&quot;reference&quot;&gt;Click Me&lt;/el-button&gt; &lt;/el-popover&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h1>Fixed time picker</h1>
      <p class="p-lg my-6">
        Fixed Time Picker, kullanıcının sabit zaman aralıklarından birini seçmesine olanak tanır. Bu örnekte, saat 08:30 ile 18:30 arasında 15
        dakikalık adımlarla sabit zaman dilimleri belirlenmiştir. Kullanıcı bu zamanlardan birini seçebilir.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-time-select v-model="value" :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }" placeholder="Select time"> </el-time-select>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-time-select v-model=&quot;value&quot; :picker-options=&quot;{ start: '08:30', step: '00:15', end: '18:30'
            }&quot;&gt;&lt;/el-time-select&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h1>Arbitrary time picker</h1>
      <p class="p-lg my-6">
        Arbitrary Time Picker, kullanıcıya belirli bir zaman aralığında serbestçe zaman seçme imkanı sunar. Örneğinizde, seçilebilir zaman aralığı
        18:30 - 20:30 arasındadır. Kullanıcılar bu zaman aralığı içinde herhangi bir zamanı seçebilirler.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-time-picker v-model="value1" :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }" placeholder="Arbitrary time"> </el-time-picker>
        <el-time-picker arrow-control v-model="value2" :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }" placeholder="Arbitrary time">
        </el-time-picker>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-time-picker v-model=&quot;value&quot; :picker-options=&quot;{ selectableRange: '18:30:00 - 20:30:00'
            }&quot;&gt;&lt;/el-time-picker&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h1>Fixed time range</h1>
      <p class="p-lg my-6">
        Bu bileşen, kullanıcıya sabit bir zaman aralığında başlangıç ve bitiş zamanları seçme olanağı sunar. İki el-time-select bileşeni kullanılarak,
        kullanıcılar belirli bir zaman aralığı içinde başlangıç ve bitiş zamanlarını seçebilirler.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-time-select placeholder="Start time" v-model="startTime" :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }">
        </el-time-select>
        <el-time-select
          placeholder="End time"
          v-model="endTime"
          :picker-options="{ start: '08:30', step: '00:15', end: '18:30', minTime: startTime }"
        >
        </el-time-select>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-time-select v-model=&quot;startTime&quot; :picker-options=&quot;{ start: '08:30', step: '00:15', end: '18:30'
            }&quot;&gt;&lt;/el-time-select&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h1>Arbitrary time range</h1>
      <p class="p-lg my-6">
        Arbitrary Time Range bileşeni, kullanıcıya serbestçe bir zaman aralığı seçme imkanı tanır. is-range özelliği sayesinde, kullanıcılar başlangıç
        ve bitiş zamanlarını serbestçe seçebilirler. Bu, zaman aralıklı işlemler için idealdir.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-time-picker is-range v-model="value1" range-separator="To" start-placeholder="Start time" end-placeholder="End time"> </el-time-picker>
        <el-time-picker is-range arrow-control v-model="value2" range-separator="To" start-placeholder="Start time" end-placeholder="End time">
        </el-time-picker>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-time-picker is-range v-model=&quot;value&quot; start-placeholder=&quot;Start time&quot; end-placeholder=&quot;End
            time&quot;&gt;&lt;/el-time-picker&gt;
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
      value: '',
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
      startTime: '',
      endTime: '',
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
