<template>
  <section class="page-components">
    <h1>Components</h1>
    <ul>
      <li v-for="component in components" :key="component">
        <NuxtLink :to="`/components/${component}`">{{ component }}</NuxtLink>
      </li>
    </ul>
    <template v-if="$route.path.includes('/components/')">
      <NuxtChild />
    </template>
  </section>
</template>

<script lang="ts">
interface Data {
  components: string[]
}

export default {
  data(): Data {
    return {
      components: ['table', 'selectbox'],
    }
  },
}
</script>
