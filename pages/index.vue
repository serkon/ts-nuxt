<template>
  <div class="main-page container">Homepage j9</div>
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
