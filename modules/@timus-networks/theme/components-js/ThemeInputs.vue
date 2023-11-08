<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Basic</h1>
      <p class="p-lg my-6">
        "Fill" stili butonlar, içeriği tamamen kaplayan renge sahip butonlardır. Bu butonlar, kullanıcının dikkatini çekmek ve önemli eylemleri
        vurgulamak için idealdir.
      </p>
      <div class="grid grid-flow-col auto-cols-max">
        <el-input placeholder="Please input" v-model="input"></el-input>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          Örnek kullanım:
          <code>&lt;el-button :type="'primary'"&gt;Primary&lt;/el-button&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Disabled</h1>
      <p class="p-lg my-6">Çevresi çizgili ve içi transparan olan 'outline' butonlarımız, daha hafif bir tasarım dili sunar.</p>
      <div class="grid grid-flow-col auto-cols-max">
        <el-input placeholder="Please input" v-model="input" :disabled="true"> </el-input>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Outline görünümü için, buton elementinize <code>class="outline"</code> ekleyin. Örnek:
          <code>&lt;el-button class="outline"&gt;Button&lt;/el-button&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Clearable</h1>
      <p class="p-lg my-6">Hemen hemen şeffaf 'ghost' butonlarımız, minimalist tasarımlar için uygundur ve arka planla uyum sağlar.</p>
      <div class="grid grid-flow-col auto-cols-max">
        <el-input placeholder="Please input" v-model="input" clearable> </el-input>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Ghost görünümü için, buton elementinize <code>class="ghost"</code> ekleyin. Örnek:
          <code>&lt;el-button class="ghost"&gt;Button&lt;/el-button&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Password box</h1>
      <p class="p-lg my-6">Farklı boyutlardaki butonlarımız, çeşitli arayüz ihtiyaçlarına yanıt vermek için tasarlanmıştır.</p>
      <div class="grid grid-flow-col auto-cols-max items-center">
        <el-input placeholder="Please input password" v-model="input" show-password></el-input>
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
      <h1>Input with icon</h1>
      <p class="p-lg my-6">Etkileşime kapalı 'disabled' butonlarımız, kullanılamaz durumları göstermek için kullanılır.</p>
      <div class="grid grid-flow-col auto-cols-max">
        <el-input placeholder="Pick a date" suffix-icon="el-icon-date" v-model="input1"> </el-input>
        <el-input placeholder="Type something" prefix-icon="el-icon-search" v-model="input2"> </el-input>
      </div>
      <div class="my-4 p-4 border-l-4 border-red-600 bg-red-100">
        <p class="text-xs">
          Butonu devre dışı bırakmak için, <code>disabled</code> özelliğini ekleyin. Örnek:
          <code>&lt;el-button disabled&gt;Button&lt;/el-button&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Textarea</h1>
      <p class="p-lg my-6">Buton gruplarımız, ilgili işlemleri bir arada toplayarak kullanıcı arayüzünü düzenler.</p>
      <el-input type="textarea" :rows="2" placeholder="Please input" v-model="textarea"></el-input>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">Buton grupları için <code>&lt;el-button-group&gt;</code> kullanın.</p>
      </div>
    </section>

    <section>
      <h1>Autosize Textarea</h1>
      <p class="p-lg my-6">Buton gruplarımız, ilgili işlemleri bir arada toplayarak kullanıcı arayüzünü düzenler.</p>
      <el-input type="textarea" autosize placeholder="Please input" v-model="textarea1"></el-input>
      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="Please input" v-model="textarea2"></el-input>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">Buton grupları için <code>&lt;el-button-group&gt;</code> kullanın.</p>
      </div>
    </section>

    <section>
      <h1>Mixed input</h1>
      <p class="p-lg my-6">Buton gruplarımız, ilgili işlemleri bir arada toplayarak kullanıcı arayüzünü düzenler.</p>
      <el-input placeholder="Please input" v-model="input1">
        <template slot="prepend">Http://</template>
      </el-input>
      <el-input placeholder="Please input" v-model="input2">
        <template slot="append">.com</template>
      </el-input>
      <el-input placeholder="Please input" v-model="input3" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="Select">
          <el-option label="Restaurant" value="1"></el-option>
          <el-option label="Order No." value="2"></el-option>
          <el-option label="Tel" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">Buton grupları için <code>&lt;el-button-group&gt;</code> kullanın.</p>
      </div>
    </section>

    <section>
      <h1>Sizes</h1>
      <p class="p-lg my-6">
        İkonlarla zenginleştirilmiş butonlarımız, görsel bir ipucu sunar ve kullanıcı deneyimini artırır. Tüm ikonlarımızın listesini görmek için
        <nuxt-link to="/icons" class="text-blue-600 hover:underline">buraya tıklayın</nuxt-link>.
      </p>
      <div class="grid grid-flow-col auto-cols-max">
        <el-input placeholder="Please Input" v-model="input1"> </el-input>
        <el-input size="medium" placeholder="Please Input" v-model="input2"> </el-input>
        <el-input size="small" placeholder="Please Input" v-model="input3"> </el-input>
        <el-input size="mini" placeholder="Please Input" v-model="input4"> </el-input>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Örnekler:
          <code>&lt;el-button type="primary" class="isax-trash"&gt;&lt;/el-button&gt;</code>. Sağda ikon için <code>class="icon-right"</code> ekleyin.
        </p>
      </div>
    </section>

    <section>
      <h1>Autocomplete</h1>
      <p class="p-lg my-6">Buton gruplarımız, ilgili işlemleri bir arada toplayarak kullanıcı arayüzünü düzenler.</p>
      <el-autocomplete
        class="inline-input"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="Please Input"
        @select="handleSelect"
      ></el-autocomplete>
      <el-autocomplete
        class="inline-input"
        v-model="state2"
        :fetch-suggestions="querySearch"
        placeholder="Please Input"
        :trigger-on-focus="false"
        @select="handleSelect"
      ></el-autocomplete>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">Buton grupları için <code>&lt;el-button-group&gt;</code> kullanın.</p>
      </div>
    </section>

    <section>
      <h1>Custom template</h1>
      <p class="p-lg my-6">Buton gruplarımız, ilgili işlemleri bir arada toplayarak kullanıcı arayüzünü düzenler.</p>
      <el-autocomplete
        popper-class="my-autocomplete"
        v-model="state"
        :fetch-suggestions="querySearch"
        placeholder="Please input"
        @select="handleSelect"
      >
        <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"> </i>
        <template slot-scope="{ item }">
          <div class="value">{{ item.value }}</div>
          <span class="link">{{ item.link }}</span>
        </template>
      </el-autocomplete>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">Buton grupları için <code>&lt;el-button-group&gt;</code> kullanın.</p>
      </div>
    </section>

    <section>
      <h1>Remote search</h1>
      <p class="p-lg my-6">Buton gruplarımız, ilgili işlemleri bir arada toplayarak kullanıcı arayüzünü düzenler.</p>
      <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="Please input" @select="handleSelect"></el-autocomplete>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">Buton grupları için <code>&lt;el-button-group&gt;</code> kullanın.</p>
      </div>
    </section>

    <section>
      <h1>Limit length</h1>
      <p class="p-lg my-6">Buton gruplarımız, ilgili işlemleri bir arada toplayarak kullanıcı arayüzünü düzenler.</p>
      <el-input type="text" placeholder="Please input" v-model="text" maxlength="10" show-word-limit> </el-input>
      <el-input type="textarea" placeholder="Please input" v-model="textarea" maxlength="30" show-word-limit> </el-input>
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
      input: '',
      input1: '',
      input2: '',
      input3: '',
      select: '',
      links: [],
      state1: '',
      state2: '',
      text: '',
      textarea: '',
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
  },
  mounted() {
    this.links = this.loadAll();
  },
});
</script>
