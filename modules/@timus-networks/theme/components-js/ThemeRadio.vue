<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <h1>Radio</h1>

    <section>
      <h2>Temel Kullanım</h2>
      <p class="p-lg-c my-6">El Radio, çok fazla seçeneğe sahip olmamalıdır. Aksi takdirde, Select bileşenini kullanmalısınız.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-radio v-model="radio" :label="0">Seçenek A</el-radio>
        <el-radio v-model="radio" :label="1">Seçenek B</el-radio>
        <el-radio v-model="radio" :label="2" disabled>Seçenek C (Devre Dışı)</el-radio>
        <el-radio :value="false" disabled>Seçili Olmayan ve Devre Dışı</el-radio>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Örnek Kullanım:
          <code> &lt;el-radio :value="true" disabled&gt;Seçili & Devre Dışı&lt;/el-radio&gt; </code>
        </p>
      </div>
    </section>

    <section>
      <h2>Radio group</h2>
      <p class="p-lg-c my-6">
        `el-radio-group` ile `el-radio` bileşenini bir araya getirerek bir radyo grubu görüntüleyebilirsiniz. el-radio-group elementinin v-model ile
        bağlı olduğu bir değişkeni belirleyin ve el-radio içindeki etiket değerini ayarlayın. Ayrıca, mevcut değeri parametre olarak alan bir
        değişiklik olayı sağlar.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-radio-group v-model="radio">
          <el-radio :label="3">Seçenek A</el-radio>
          <el-radio :label="6">Seçenek B</el-radio>
          <el-radio :label="9">Seçenek C</el-radio>
        </el-radio-group>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          Örnek Kullanım:
          <code>
            &lt;el-radio-group v-model="radio"&gt; &lt;el-radio :label="3"&gt;Seçenek A&lt;/el-radio&gt; &lt;el-radio :label="6"&gt;Seçenek
            B&lt;/el-radio&gt; &lt;/el-radio-group&gt;
          </code>
        </p>
      </div>
    </section>
  </div>
</template>
<script>import Vue from 'vue';
const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
export default Vue.extend({
    data() {
        return {
            checked: true,
            radio: 2,
            checkboxGroup1: ['Shanghai'],
            cities: cityOptions,
            checkList: ['selected and disabled', 'Option A'],
            checkAll: false,
            checkedCities: ['Shanghai', 'Beijing'],
            isIndeterminate: true,
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
            rules: {
                email: [
                    {
                        validator: 'validateEmail',
                        trigger: 'submit',
                        message: this.$t('messages.please_provide_valid_email'),
                    },
                ],
                password: [
                    {
                        required: true,
                        trigger: 'submit',
                        message: this.$t('messages.please_fill', {
                            field: this.$t('login.password'),
                        }),
                    },
                ],
            },
        };
    },
    methods: {
        handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },
        showAgreementDialog(type) {
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
