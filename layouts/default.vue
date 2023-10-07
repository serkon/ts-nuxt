<template>
  <main>
    <header class="flex justify-center items-center bg-gray-100 fluid">
      <section class="flex py-4 gap-4 container">
        <h1 class="text-4xl font-bold">Timus-Networks</h1>
        <ul class="flex grow list-none items-center justify-center">
          <NuxtLink to="/sample">Sample</NuxtLink>
        </ul>
      </section>
    </header>
    <section class="content fluid mt-4">
      <Nuxt />
    </section>
  </main>
</template>
