<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <h1>Checkbox</h1>

    <section>
      <h2>Basic Usage</h2>
      <p class="p-lg-c my-6">Checkbox, iki durum arasında geçiş yapmak için kullanılır. Checkbox için devre dışı bırakılmış durum da mevcuttur.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-checkbox v-model="checked">Option</el-checkbox>
        <el-checkbox :value="true" disabled>selected & disabled</el-checkbox>
        <el-checkbox :value="false" disabled>unselected & disabled</el-checkbox>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code> &lt;el-checkbox :value="true" disabled&gt;Seçili & Devre Dışı&lt;/el-checkbox&gt; </code>
        </p>
      </div>
    </section>

    <section>
      <h2>Checkbox group</h2>
      <p class="p-lg-c my-6">
        Checkbox grubu, birden fazla seçeneği bir arada sunarak kullanıcının birden çok seçim yapmasına olanak tanır. Bu grup içerisindeki
        seçeneklerden bazıları devre dışı bırakılabilir veya önceden seçilmiş ve devre dışı bırakılmış olabilir.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-checkbox-group v-model="checkList" class="mb-6">
          <el-checkbox label="Option A"></el-checkbox>
          <el-checkbox label="Option B"></el-checkbox>
          <el-checkbox label="Option C"></el-checkbox>
          <el-checkbox label="disabled" disabled></el-checkbox>
          <el-checkbox label="selected and disabled" disabled></el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-checkbox-group v-model="checkList"&gt; &lt;el-checkbox label="Seçenek A"&gt;&lt;/el-checkbox&gt; &lt;el-checkbox label="Seçenek
            B"&gt;&lt;/el-checkbox&gt; &lt;/el-checkbox-group&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h2>Indeterminate</h2>
      <p class="p-lg-c my-6">
        Belirsiz durum (indeterminate) checkbox, tüm seçeneklerin seçili olup olmadığını belirsiz bırakır. Bu durum, özellikle kullanıcının bir grup
        içerisindeki tüm seçenekleri aynı anda kontrol etmesini sağlamak için kullanışlıdır.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</el-checkbox>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
        </el-checkbox-group>
      </div>
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
<script>import Vue from 'vue';
const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
export default Vue.extend({
    data() {
        return {
            checked: true,
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
