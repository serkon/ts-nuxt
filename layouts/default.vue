<template>
  <main>
    <header class="flex justify-center items-center bg-gray-100 fluid">
      <section class="flex py-4 container">
        <aside class="flex gap-3">
          <img src="https://www.timusnetworks.com/timuscms/upload/timus-logo-icon.png" alt="timus logo" class="logo" />
          <img src="https://www.timusnetworks.com/timuscms/upload/timus-logo23-rev-1.png" alt="timus logo" class="logo" />
        </aside>
        <ul class="flex grow gap-4 list-none items-center justify-center">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/sample">Sample</NuxtLink>
          <NuxtLink to="/examples">Components</NuxtLink>
        </ul>
      </section>
    </header>
    <section class="page-components container mt-3">
      <ul class="flex gap-2 list-none items-center mb-4">
        <li v-for="(path, name) in components" :key="name" class="inline-flex">
          <NuxtLink as="button" :to="`${path}`" class="flex items-center btn btn-primary-outline btn-sm">{{
            String(name).toLocaleUpperCase()
          }}</NuxtLink>
        </li>
      </ul>
    </section>
    <section class="content fluid mt-4">
      <Nuxt />
    </section>
  </main>
</template>

<script lang="ts">
interface Data {
  components: { [name: string]: string };
}

export default {
  data(): Data {
    return {
      components: {
        table: '/examples/table',
        filter: '/examples/filter',
        icons: '/icons',
        theme: '/theme',
        dropdown: '/examples/dropdown',
        render: '/examples/render',
        attrs: '/examples/attrs',
      },
    };
  },
};
</script>

<style scoped lang="scss">
.logo {
  height: 35px;
}
</style>
