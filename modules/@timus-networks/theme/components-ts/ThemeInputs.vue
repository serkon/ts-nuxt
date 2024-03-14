<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Basic</h1>
      <p class="p-lg my-6">Standart metin girişi için temel <code>el-input</code> bileşenini kullanabilirsiniz.</p>
      <div class="grid grid-flow-col auto-cols-max">
        <el-input v-model="input" placeholder="Please input" class="danger" />
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          Örnek kullanım:
          <code>&lt;el-input placeholder="Please input" v-model="input"&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Disabled</h1>
      <p class="p-lg my-6">Kullanıcı etkileşimini engellemek için giriş bileşenini devre dışı bırakabilirsiniz.</p>
      <div class="grid grid-flow-col auto-cols-max gap-7">
        <el-input v-model="input" placeholder="Please input" :disabled="true" />
        <el-input value="some input value" placeholder="Please input" :disabled="true" />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Devre dışı bırakmak için, <code>disabled</code> özelliğini ekleyin. Örnek:
          <code>&lt;el-input placeholder="Please input" v-model="input" disabled&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Clearable</h1>
      <p class="p-lg my-6">Kullanıcıların girdikleri metni tek bir tıklamayla silmelerini sağlayan temizlenebilir giriş bileşeni.</p>
      <div class="grid grid-flow-col auto-cols-max">
        <el-input v-model="input" placeholder="Please input" clearable />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Temizlenebilir bir giriş için, <code>clearable</code> özelliğini ekleyin. Örnek:
          <code>&lt;el-input placeholder="Please input" v-model="input" clearable&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Password</h1>
      <p class="p-lg my-6">Şifre girişi için kullanılan giriş bileşeni, metni gizler ve şifre gösterme/ gizleme seçeneği sunar.</p>
      <div class="grid grid-flow-col auto-cols-max items-center">
        <el-input v-model="input" placeholder="Please input password" show-password />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Örnekler:
          <code>&lt;el-input placeholder="Please input password" v-model="input" show-password&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Input with icon</h1>
      <p class="p-lg my-6">İkonlarla zenginleştirilmiş giriş bileşenleri, görsel bir ipucu sunar ve kullanıcı deneyimini artırır.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-input v-model="input2" placeholder="Type something" prefix-icon="el-icon-search" />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Bir ikon ile giriş için, <code>prefix-icon</code> veya <code>suffix-icon</code> özelliklerini kullanın. Örnek:
          <code>&lt;el-input placeholder="Type something" prefix-icon="el-icon-search" v-model="input2"&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Textarea</h1>
      <p class="p-lg my-6">Metin alanı girişi, birden fazla satırı destekleyen ve daha büyük metin bloklarını girmek için kullanılır.</p>
      <el-input v-model="textarea" type="textarea" :rows="2" placeholder="Please input" />
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Textarea kullanımı için:
          <code>&lt;el-input type="textarea" :rows="2" placeholder="Please input" v-model="textarea"&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Autosize Textarea</h1>
      <p class="p-lg my-6">Otomatik boyutlandırma özelliği, içeriğe bağlı olarak yüksekliği otomatik olarak ayarlayan bir metin alanıdır.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-input v-model="textarea1" type="textarea" autosize placeholder="Please input" />
        <el-input v-model="textarea2" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="Please input" />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Autosize Textarea için:
          <code>&lt;el-input type="textarea" autosize placeholder="Please input" v-model="textarea1"&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Mixed input</h1>
      <p class="p-lg my-6">Ön ek veya son ek içeren giriş bileşenleri, giriş alanlarına ekstra içerik ekleyerek daha açıklayıcı olabilir.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-input v-model="input1" placeholder="Please input" type="success">
          <template #prepend>Http://</template>
        </el-input>

        <el-input v-model="input2" placeholder="Please input">
          <template #append>.com</template>
        </el-input>

        <el-input v-model="input3" placeholder="Please input" class="input-with-select">
          <el-select slot="append" v-model="select" placeholder="Select">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
          <el-button slot="prepend" icon="el-icon-search" />
        </el-input>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Ön ek veya son ek içeren giriş bileşenleri için:
          <code>&lt;el-input placeholder="Please input"&gt;&lt;template slot="prepend"&gt;Http://&lt;/template&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Sizes</h1>
      <p class="p-lg my-6">Farklı boyutlardaki giriş bileşenleri, çeşitli arayüz ihtiyaçlarına yanıt vermek için tasarlanmıştır.</p>
      <div class="grid grid-flow-col auto-cols-max items-center gap-4">
        <el-input v-model="input1" size="large" placeholder="Please Input" />
        <el-input v-model="input2" size="medium" placeholder="Please Input" />
        <el-input v-model="input3" size="small" placeholder="Please Input" />
        <el-input v-model="input4" size="mini" placeholder="Please Input" />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Farklı boyutlardaki giriş bileşenleri için:
          <code>&lt;el-input size="large" placeholder="Please Input" v-model="input1"&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Autocomplete</h1>
      <p class="p-lg my-6">Otomatik tamamlama bileşeni, kullanıcıların yazarken öneriler almasını sağlar ve verimliliği artırır.</p>
      <div class="grid grid-flow-col auto-cols-max items-center gap-4">
        <el-autocomplete v-model="state1" class="inline-input" :fetch-suggestions="querySearch" placeholder="Please Input" @select="handleSelect" />
        <el-autocomplete
          v-model="state2"
          class="inline-input"
          :fetch-suggestions="querySearch"
          placeholder="Please Input"
          :trigger-on-focus="false"
          @select="handleSelect"
        />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Otomatik tamamlama bileşeni için:
          <code>
            &lt;el-autocomplete v-model="state1" :fetch-suggestions="querySearch" placeholder="Please Input"
            @select="handleSelect"&gt;&lt;/el-autocomplete&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h1>Custom template</h1>
      <p class="p-lg my-6">Otomatik tamamlama bileşeni, özel şablonlar ile özelleştirilebilir, böylece daha fazla bilgi gösterebilirsiniz.</p>
      <el-autocomplete
        v-model="state"
        popper-class="my-autocomplete"
        :fetch-suggestions="querySearch"
        placeholder="Please input"
        @select="handleSelect"
      >
        <i slot="suffix" class="el-icon-edit el-input__icon" @click="handleIconClick" />
        <template #default="{ item }">
          <div class="value">{{ item.value }}</div>
          <span class="link">{{ item.link }}</span>
        </template>
      </el-autocomplete>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Özel şablon kullanımı için:
          <code>
            &lt;el-autocomplete v-model="state" :fetch-suggestions="querySearch" @select="handleSelect"&gt;&lt;!-- slotlar
            --&gt;&lt;/el-autocomplete&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h1>Remote search</h1>
      <p class="p-lg my-6">Uzaktan arama ile otomatik tamamlama, sunucu tarafında gerçek zamanlı arama sonuçları getirir.</p>
      <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="Please input" @select="handleSelect" />
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Uzaktan arama için:
          <code>
            &lt;el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="Please input"
            @select="handleSelect"&gt;&lt;/el-autocomplete&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h1>Limit length</h1>
      <p class="p-lg my-6">Uzunluk sınırı, kullanıcıların girebileceği karakter sayısını sınırlar ve aşırı uzun girişleri önler.</p>
      <div class="grid grid-flow-col auto-cols-max items-center gap-4">
        <el-input v-model="text" type="text" placeholder="Please input" maxlength="10" show-word-limit />
        <el-input v-model="textarea" type="textarea" placeholder="Please input" maxlength="30" show-word-limit />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Uzunluk sınırı için:
          <code>&lt;el-input type="text" placeholder="Please input" v-model="text" maxlength="10" show-word-limit&gt;&lt;/el-input&gt;</code>
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
      inputNumber: '',
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      select: '',
      links: [],
      state: '',
      state1: '',
      state2: '',
      text: '',
      textarea: '',
      textarea1: '',
      textarea2: '',
      timeout: null,
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
  mounted() {
    this.links = this.loadAll();
  },
  methods: {
    querySearch(queryString, cb) {
      const { links } = this;
      const results = queryString ? links.filter(this.createFilter(queryString)) : links;

      // call callback function to return suggestions
      cb(results);
    },
    querySearchAsync(queryString, cb) {
      const { links } = this;
      const results = queryString ? links.filter(this.createFilter(queryString)) : links;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createFilter(queryString) {
      return (link) => link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
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
});
</script>
