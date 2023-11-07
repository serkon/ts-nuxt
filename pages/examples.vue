<template>
  <section class="page-components container">
    <NuxtChild />
  </section>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PageComponents',
  head() {
    return {
      title: 'Components',
    };
  },
  mounted() {
    console.log('PageComponents mounted');
    this.$router.push('table');
  },
});
</script>
