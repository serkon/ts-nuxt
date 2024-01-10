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
          <code>
            &lt;el-form :model="sizeForm" label-width="120px" label-position="{{ labelPosition }}">&lt;el-form-item label="Title">&lt;el-input
            v-model="form.name">&lt;/el-input>&lt;/el-form-item>&lt;/el-form>
          </code>
        </p>
      </div>
      <div class="grid grid-flow-col">
        <el-form ref="form" :model="form" label-width="130px" class="gap-4 flex flex-col" :label-position="labelPosition">
          <el-form-item class="form-content-left" prop="minimum_character_length">
            <el-checkbox :disabled="true"> {{ $t('password_policies') }} </el-checkbox>
            <el-input-number size="mini" class="grow" controls-position="right" :min="8" :max="10" v-model="count"> </el-input-number>
          </el-form-item>

          <el-form-item label="Aktivite Adı">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="Aktivite Bölgesi">
            <el-select v-model="form.region" placeholder="Lütfen bölgenizi seçin" class="w-full">
              <el-option label="Bölge Bir" value="shanghai"></el-option>
              <el-option label="Bölge İki" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="form-content-left" label="Aktivite Zamanı">
            <el-date-picker type="date" placeholder="Tarih seçin" v-model="form.date1" style="width: 100%"></el-date-picker>
            <el-time-picker placeholder="Saat seçin" v-model="form.date2" style="width: 100%"></el-time-picker>
          </el-form-item>

          <el-form-item label="Kaynaklar">
            <el-radio-group v-model="form.resource" size="medium" class="flex gap-4">
              <el-radio label="Sponsor"></el-radio>
              <el-radio label="Mekan"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item class="form-content-left">
            <el-button class="outline grow">İptal Et</el-button>
            <el-button type="primary grow" @click="onSubmit">Oluştur</el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>

    <el-descriptions title="User Info" :column="4" colon="false">
      <el-description-item label="Username" labelClassName="w-28"> Ahmet Polat MacBook Pro, Ahmet Fatih Sez...</el-description-item>
      <el-description-item label="Username" labelClassName="w-28"> Ahmet Polat MacBook Pro, Ahmet Fatih Sez...</el-description-item>
    </el-descriptions>
  </div>
</template>
<script>import Vue from 'vue';
const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
export default Vue.extend({
    data() {
        return {
            labelPosition: 'right',
            count: '9',
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
            },
        };
    },
    methods: {
        showAgreementDialog(type) {
            console.log('agreement: ', type);
        },
        submit() { },
        onSubmit() {
            console.log('submit!');
        },
    },
});
</script>
