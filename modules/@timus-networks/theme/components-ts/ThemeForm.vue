<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <h1>Form</h1>

    <section class="flex gap-8 flex-col">
      <h2>Etiket Konumu: {{ labelPosition }}</h2>
      <div class="p-4 border-l-4 border-info-600 bg-info-100">
        Birkaç custom class ekledim. <b>`class='bordered'`</b> eklerseniz &lt;el-form class="bordered"> itemlar arasında border çıkar, `info` derseniz
        info tipinde bir forma dönüşür (title ve content daha soft renkte oluşur, ayrıca content sağa yaslı olur), `info left` eklerseniz itemlar sola
        yaslı çıkar.
      </div>
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
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="150px"
          class="bordered info"
          :label-position="labelPosition"
          size="mini"
        >
          <el-form-item label="Activity name" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="Activity zone" prop="region">
            <el-select v-model="ruleForm.region" placeholder="Activity zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="Activity time" required class="form-content-left">
            <el-date-picker v-model="ruleForm.date1" type="date" placeholder="Pick a date" style="width: 100%" />
            <el-time-picker v-model="ruleForm.date2" placeholder="Pick a time" style="width: 100%" />
          </el-form-item>
          <el-form-item label="Instant delivery" prop="delivery">
            <el-switch v-model="ruleForm.delivery" />
          </el-form-item>
          <el-form-item label="Activity type" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="Online activities" name="type" />
              <el-checkbox label="Promotion activities" name="type" />
              <el-checkbox label="Offline activities" name="type" />
              <el-checkbox label="Simple brand exposure" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Resources" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="Sponsorship" />
              <el-radio label="Venue" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Activity form" prop="desc">
            <el-input v-model="ruleForm.desc" type="textarea" />
          </el-form-item>
          <el-form-item class="form-content-left">
            <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
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
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
        ],
        region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
        date1: [{ type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }],
        date2: [{ type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }],
        type: [{ type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }],
        resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
        desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
      },
    };
  },
  methods: {
    showAgreementDialog(type: string) {
      console.log('agreement: ', type);
    },
    submit() {},
    onSubmit() {
      console.log('submit!');
    },
    submitForm(formName: any) {
      console.log('submit');
    },
    resetForm(formName: any): void {
      console.log('reset');
    },
  },
});
</script>
