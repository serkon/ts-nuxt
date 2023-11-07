<template>
  <div class="sample-page container">
    <h1>Welcome to library</h1>
    <AutoLoadComponent />
    <NuxtTestSample />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  head() {
    return {
      title: 'Sample page',
    };
  },
});
</script>
