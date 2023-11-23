<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Basic usage</h1>
      <p class="p-lg my-6">v-model is the value of el-option that is currently selected.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-select v-model="value" placeholder="Select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-button :type="'primary'"&gt;Primary&lt;/el-button&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Disabled option</h1>
      <p class="p-lg my-6">Set the value of disabled in el-option to true to disable this option.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-select v-model="value" placeholder="Select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"> </el-option>
        </el-select>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Outline görünümü için, buton elementinize <code>class="outline"</code> ekleyin. Örnek:
          <code>&lt;el-button class="outline"&gt;Button&lt;/el-button&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Disabled select</h1>
      <p class="p-lg my-6">Set disabled of el-select to make it disabled.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-select v-model="value" disabled placeholder="Select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Ghost görünümü için, buton elementinize <code>class="ghost"</code> ekleyin. Örnek:
          <code>&lt;el-button class="ghost"&gt;Button&lt;/el-button&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Clearable single select</h1>
      <p class="p-lg my-6">Farklı boyutlardaki butonlarımız, çeşitli arayüz ihtiyaçlarına yanıt vermek için tasarlanmıştır.</p>
      <div class="grid grid-flow-col auto-cols-max items-center gap-4">
        <el-select v-model="value" clearable placeholder="Select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Örnekler:
          <code>&lt;el-button :size="'large'"&gt;Button&lt;/el-button&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Basic multiple select</h1>
      <p class="p-lg my-6">Etkileşime kapalı 'disabled' butonlarımız, kullanılamaz durumları göstermek için kullanılır.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4 items-center">
        <el-select v-model="value1" multiple placeholder="Select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
        <el-select v-model="value2" multiple collapse-tags placeholder="Select" type="primary">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
      <div class="my-4 p-4 border-l-4 border-red-600 bg-red-100">
        <p class="text-xs">
          Butonu devre dışı bırakmak için, <code>disabled</code> özelliğini ekleyin. Örnek:
          <code>&lt;el-button disabled&gt;Button&lt;/el-button&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Custom template</h1>
      <p class="p-lg my-6">
        İkonlarla zenginleştirilmiş butonlarımız, görsel bir ipucu sunar ve kullanıcı deneyimini artırır. Tüm ikonlarımızın listesini görmek için
        <nuxt-link to="/icons" class="text-blue-600 hover:underline">buraya tıklayın</nuxt-link>.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-select v-model="value" placeholder="Select">
          <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Örnekler:
          <code>&lt;el-button type="primary" class="isax-trash"&gt;&lt;/el-button&gt;</code>. Sağda ikon için <code>class="icon-right"</code> ekleyin.
        </p>
      </div>
    </section>

    <section>
      <h1>Grouping</h1>
      <p class="p-lg my-6">Display options in groups.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-select v-model="value" placeholder="Select">
          <el-option-group v-for="group in groups" :key="group.label" :label="group.label">
            <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-option-group>
        </el-select>
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
      cities: [
        {
          value: 'Beijing',
          label: 'Beijing',
        },
        {
          value: 'Shanghai',
          label: 'Shanghai',
        },
        {
          value: 'Nanjing',
          label: 'Nanjing',
        },
        {
          value: 'Chengdu',
          label: 'Chengdu',
        },
        {
          value: 'Shenzhen',
          label: 'Shenzhen',
        },
        {
          value: 'Guangzhou',
          label: 'Guangzhou',
        },
      ],
      groups: [
        {
          label: 'Popular cities',
          options: [
            {
              value: 'Shanghai',
              label: 'Shanghai',
            },
            {
              value: 'Beijing',
              label: 'Beijing',
            },
          ],
        },
        {
          label: 'City name',
          options: [
            {
              value: 'Chengdu',
              label: 'Chengdu',
            },
            {
              value: 'Shenzhen',
              label: 'Shenzhen',
            },
            {
              value: 'Guangzhou',
              label: 'Guangzhou',
            },
            {
              value: 'Dalian',
              label: 'Dalian',
            },
          ],
        },
      ],
      options: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
          disabled: true,
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ],
      value: '',
      value1: [],
      value2: [],
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
