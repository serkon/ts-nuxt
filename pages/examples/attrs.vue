<template>
  <Attribute @click="callMe" />
</template>
<script>
import Vue from 'vue';

import Attribute from '~/components/Attribute.vue';

export default Vue.extend({
  name: 'RemovePage',
  components: { Attribute },
  methods: {
    callMe() {
      console.log('parent attrs asdad');
    },
  },
});
</script>
