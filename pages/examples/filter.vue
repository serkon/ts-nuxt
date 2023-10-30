<template>
  <div class="filter-sample-page">
    <div>
      <h1 class="text-3xl font-bold w-full mb-4">Filter Component Sample</h1>
    </div>

    <TnFilter :fields="fields" :filters="filters" @emit="emit"></TnFilter>

    <pre class="exported mt-4 text-monospace bg-gray-50 p-2 rounded-md">
      {{ filters }}
    </pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const Hollywood = [
  {
    name: 'Johnny',
    surname: 'Depp',
    age: 58,
    birthday: '1963-06-09',
    horoscope: 'İkizler',
    height: '178cm',
    weight: '70kg',
    married: false,
  },
  {
    name: 'Sandra',
    surname: 'Bullock',
    age: 57,
    birthday: '1964-07-26',
    horoscope: 'Aslan',
    height: '171cm',
    weight: '54kg',
    married: true,
  },
];

interface Data {
  options: any;
}

const option = {};

export default Vue.extend({
  name: 'TableFilter',
  data() {
    return {
      fields: ['name', 'age', 'city'],
      filters: [
        // [
        //   { id: 'user-001', field: 'name', operator: 'equals', value: 'John' },
        //   { id: 'user-002', field: 'age', operator: 'not equals', value: '25' },
        // ],
      ],
    };
  },
  mounted() {
    console.log('translate:', this.$t);
  },
  methods: {
    emit(value: any) {
      console.log('emit:', value);
    },
  },
});
</script>
