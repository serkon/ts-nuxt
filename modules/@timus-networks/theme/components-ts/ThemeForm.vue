<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <h1>Form</h1>

    <section class="flex gap-8 flex-col">
      <h2>Etiket Konumu: {{ labelPosition }}</h2>
      <el-radio-group v-model="labelPosition" size="small">
        <el-radio-button label="left">Sol</el-radio-button>
        <el-radio-button label="right">Sağ</el-radio-button>
        <el-radio-button label="top">Üst</el-radio-button>
      </el-radio-group>
      <p class="p-lg-c">Form elemanlarının etiketlerinin konumunu belirlemek için kullanılır. Etiketler sol, sağ veya üst tarafında olabilir.</p>
      <div class="p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Kullanım Örneği:
          <br />
          <code>
            &lt;el-form :model="sizeForm" label-width="120px" label-position="{{ labelPosition }}"> &lt;el-form-item label="Aktivite Adı">
            &lt;el-input v-model="sizeForm.name">&lt;/el-input> &lt;/el-form-item>
            <!-- Diğer form elemanları burada -->
            &lt;/el-form>
          </code>
        </p>
      </div>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-form ref="form" :model="sizeForm" label-width="120px" class="gap-4 flex flex-col" :label-position="labelPosition">
          <el-form-item label="Aktivite Adı">
            <el-input v-model="sizeForm.name"></el-input>
          </el-form-item>
          <el-form-item label="Aktivite Bölgesi">
            <el-select v-model="sizeForm.region" placeholder="Lütfen bölgenizi seçin" class="w-full">
              <el-option label="Bölge Bir" value="shanghai"></el-option>
              <el-option label="Bölge İki" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Aktivite Zamanı">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Tarih seçin" v-model="sizeForm.date1" style="width: 100%"></el-date-picker>
            </el-col>
            <el-col class="text-center" :span="1">-</el-col>
            <el-col :span="12">
              <el-time-picker placeholder="Saat seçin" v-model="sizeForm.date2" style="width: 100%"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="Kaynaklar">
            <el-radio-group v-model="sizeForm.resource" size="medium" class="flex gap-4">
              <el-radio label="Sponsor"></el-radio>
              <el-radio label="Mekan"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button class="outline">İptal Et</el-button>
            <el-button type="primary" @click="onSubmit">Oluştur</el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

export default Vue.extend({
  data() {
    return {
      labelPosition: 'right',
      checked: true,
      time: '',
      sizeForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      loading: false,
      form: {
        email: '',
        password: '',
        remember: false,
        token: null,
        correlation_id: null,
        action: null,
        platform: 'manager',
        version: '1.0.10',
      },
    };
  },
  methods: {
    showAgreementDialog(type: string) {
      console.log('agreement: ', type);
    },
    submit() {
      this.$emit('submit', this.form);
    },
    onSubmit() {
      console.log('submit!');
    },
  },
});
</script>
