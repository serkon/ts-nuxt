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
          <NuxtLink to="/components">Components</NuxtLink>
        </ul>
      </section>
    </header>
    <section class="content fluid mt-4">
      <Nuxt />
    </section>
  </main>
</template>

<style scoped lang="scss">
.logo {
  height: 35px;
}
</style>
