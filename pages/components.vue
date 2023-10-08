<template>
  <section class="page-components container">
    <ul class="flex gap-4 list-none items-center">
      <li v-for="component in components" :key="component" class="inline-flex">
        <NuxtLink v-titlecase :to="`/components/${component}`" class="btn btn-outline btn-outline-primary">{{ component.toLocaleUpperCase() }}</NuxtLink>
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
