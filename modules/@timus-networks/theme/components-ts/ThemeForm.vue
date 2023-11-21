<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <h1>Checkbox</h1>

    <section>
      <h2>Basic Usage</h2>
      <p class="p-lg my-6">Checkbox can be used alone to switch between two states. Disabled state for checkbox.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-checkbox v-model="checked">Option</el-checkbox>
        <el-checkbox :value="true" disabled>selected & disabled</el-checkbox>
        <el-checkbox :value="false" disabled>unselected & disabled</el-checkbox>
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
    <section>
      <h2>Checkbox group</h2>
      <p class="p-lg my-6">
        Tarih aralığı seçici, kullanıcının bir başlangıç ve bitiş tarihi seçmesine olanak tanır, bu da planlama ve raporlama işlemleri için idealdir.
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
            &lt;el-date-picker v-model="input" type="daterange" align="left" start-placeholder="Start" end-placeholder="End"
            default-value=""&gt;&lt;/el-date-picker&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h2>Indeterminate</h2>
      <p class="p-lg my-6">
        Tarih aralığı seçici, kullanıcının bir başlangıç ve bitiş tarihi seçmesine olanak tanır, bu da planlama ve raporlama işlemleri için idealdir.
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

    <el-time-select
      v-model="time"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
      placeholder="Select time"
    >
    </el-time-select>
    <el-time-picker
      v-model="time"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00',
      }"
      placeholder="Arbitrary time"
    >
    </el-time-picker>
    <el-time-picker
      arrow-control
      v-model="time"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00',
      }"
      placeholder="Arbitrary time"
    >
    </el-time-picker>
    <el-form ref="form" :model="sizeForm" label-width="120px" size="mini">
      <el-form-item label="Activity name bazen uzun olabilir">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="sizeForm.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="sizeForm.date1" style="width: 100%"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="Pick a time" v-model="sizeForm.date2" style="width: 100%"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="sizeForm.type">
          <el-checkbox-button label="Online activities" name="type"></el-checkbox-button>
          <el-checkbox-button label="Promotion activities" name="type"></el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="sizeForm.resource" size="medium">
          <el-radio border label="Sponsor"></el-radio>
          <el-radio border label="Venue"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
    <el-form
      data-testid="pages-login-gczfftvrml"
      :rules="rules"
      ref="form"
      :model="form"
      label-position="left"
      label-width="120px"
      @submit.native.prevent="submit"
    >
      <el-form-item data-testid="pages-login-irbdfwxfbt" :label="$t('login.email')" prop="email">
        <el-input v-model="form.email" :disabled="loading ? 'disabled' : false" data-testid="login-email-input"></el-input>
      </el-form-item>
      <el-form-item data-testid="pages-login-brtpgzfwqb" :label="$t('login.password')" prop="password">
        <el-input
          data-testid="pages-login-niigwirnsa"
          type="password"
          autocomplete="off"
          v-model="form.password"
          :disabled="loading ? 'disabled' : false"
          show-password
        ></el-input>
      </el-form-item>
      <el-row data-testid="pages-login-leusdzih">
        <el-col data-testid="pages-login-wakdcwpdgr" :span="12">
          <el-checkbox v-model="form.remember" data-testid="login-remember-me-checkbox">{{ $t('login.remember_me') }}</el-checkbox>
        </el-col>
        <el-col data-testid="pages-login-lngmwepdom" :span="12">
          <nuxt-link to="/forgot-password" data-testid="login-forgot-password">{{ $t('login.forgot_password') }}</nuxt-link>
        </el-col>
      </el-row>
      <div data-testid="pages-login-labwsipjet" style="margin-top: 10px; color: grey; font-size: 12px; text-align: left">
        {{ $t('register.by_register_text') }}
        <b class="agreement_text" @click="showAgreementDialog('privacy_policy')" data-testid="register-terms-of-use">{{
          $t('register.privacy_policy')
        }}</b>
        {{ $t('messages.and') }}
        <b class="agreement_text" @click="showAgreementDialog('terms_of_use')" data-testid="register-terms-of-use">{{
          $config.TP === 'berqnet' ? $t('register.terms_of_use') : $t('register.terms_of_service')
        }}</b>
        {{ $t('register.by_register_text2') }}
      </div>
      <el-form-item data-testid="pages-login-lunbdhbztj">
        <el-button type="danger" native-type="submit" :loading="loading" data-testid="login-continue">{{ $t('login.continue') }}</el-button>
        <br />
        <el-button @click="$router.push('/register')" type="primary" data-testid="login-create-account" :loading="loading">{{
          $t('login.register')
        }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
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
    handleCheckAllChange(val: string) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value: string[]) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
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
