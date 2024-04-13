<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Temel Kullanım</h1>
      <p class="p-md-c my-6">
        Butonlar ve simgeler üzerinde sayı veya durum işareti. Yeni mesajların miktarını görüntüler. Miktar, `Number` veya `String` kabul eden `value`
        ile tanımlanır.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-badge :value="12"> <el-button size="small">Yorumlar</el-button> </el-badge>
        <el-badge v-for="(item, key) in colors" :key="key" :value="randomNumber()" :type="item">
          <el-button size="small" :class="randomButtonType()" :type="randomColor()">{{ item }}</el-button>
        </el-badge>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link"> Beni Tıkla<i class="el-icon-caret-bottom el-icon--right" /> </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="clearfix">
              Yorumlar
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              Yanıtlar
              <el-badge class="mark" :value="3" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-badge :value="12"&gt; &lt;el-button size="small"&gt;Comments&lt;/el-button&gt; &lt;/el-badge&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Point</h1>
      <p class="p-md-c my-6">Use a red dot to mark content that needs to be noticed.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-badge is-dot class="item">query</el-badge>
        <el-badge is-dot class="item">
          <el-button class="share-button" icon="el-icon-share" />
        </el-badge>
        <el-badge v-for="size in sizeList" :key="size + 'avatar'" is-dot class="item"><el-avatar :size="size">SK</el-avatar></el-badge>
        <el-badge v-for="size in sizeList" :key="size + 'shape'" is-dot class="item"><el-avatar shape="square" :size="size">SK</el-avatar></el-badge>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-badge :value="12"&gt; &lt;el-button size="small"&gt;Comments&lt;/el-button&gt; &lt;/el-badge&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Max Değer</h1>
      <p class="p-md-c my-6">
        Maksimum değer, bir Sayı (Number) olan max özelliği ile belirlenir. Unutmayın ki, bu özellik yalnızca value özelliği de bir Sayı (Number)
        olduğunda çalışır.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-badge :value="200" :max="99" class="item">
          <el-button size="small">Yorumlar</el-button>
        </el-badge>
        <el-badge :value="100" :max="10" class="item">
          <el-button size="small">Yanıtlar</el-button>
        </el-badge>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-badge :value="12"&gt; &lt;el-button size="small"&gt;Yorumlar&lt;/el-button&gt; &lt;/el-badge&gt;</code>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TimusCascader',
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
    randomNumber() {
      return Math.round(Math.random() * 1000);
    },
    randomColor() {
      return this.colors[Math.round(Math.random() * 7)];
    },
    randomButtonType() {
      const type = ['outline'];

      return type[Math.round(Math.random() * 2)];
    },
  },
});
</script>
