<template>
  <div class="main-page container">
    Homepage
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  head: {
    title: 'Home page',
  },
  mounted() {
    console.log(this);
  },
});
</script>

<style>
.nuxt-logo {
  height: 180px;
  border: 1 px solid red;
}
</style>
