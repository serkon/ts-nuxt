<template>
  <div>
    <h1>Welcome to library</h1>
    <NuxtLink to="/sample">Sample</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style>
.nuxt-logo {
  height: 180px;
  border: 1 px solid red;
}
</style>
