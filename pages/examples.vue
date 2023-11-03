<template>
  <section class="page-components container">
    <ul class="flex gap-2 list-none items-center mb-4">
      <li v-for="component in components" :key="component" class="inline-flex">
        <NuxtLink as="button" :to="`/examples/${component}`" class="flex items-center btn btn-primary-outline btn-sm">{{
          component.toLocaleUpperCase()
        }}</NuxtLink>
      </li>
    </ul>
    <template v-if="$route.path.includes('/examples/')">
      <NuxtChild />
    </template>
  </section>
</template>

<script lang="ts">
interface Data {
  components: string[];
}

export default {
  data(): Data {
    return {
      components: ['table', 'filter', 'theme', 'dropdown', 'render', 'attrs'],
    };
  },
};
</script>
