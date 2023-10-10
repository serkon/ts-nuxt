<template>
  <div>
    <span>Fallthrough attributes: {{ JSON.stringify($attrs) }}</span>
    <button v-on="$listeners">button</button>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TnRemove',
  methods: {
    callMe() {
      console.log('remove component asdad');
    },
  },
});
</script>
