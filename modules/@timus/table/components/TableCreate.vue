<template>
  <div>
    <h1>Tablo Component From Module</h1>
    <button @click="getOptions">Get Options</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TableCreate',
  data: (): { posts: string[] } => ({
    posts: [],
  }),
  fetch() {
    this.posts = ['12']
  },
  methods: {
    getOptions() {
      console.log(this)
    },
  },
})
</script>
