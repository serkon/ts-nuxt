<template>
  <div class="text-black dark:text-white dark:bg-gray-800 p-4">
    <h1 class="isax-airdrop icon-xxl">Dynamic Theming with Nuxt</h1>
    <p>Experience the power of dynamic theming. Click the button below to toggle between light and dark modes.</p>
    <button @click="toggleTheme" class="btn btn-sm btn-primary dark:btn-light mt-12">{{ buttonText }}</button>
    <div class="bg-primary-800">teeeee</div>
    +<TnIcon icon="isax-activity" size="md" />+
    <button class="btn btn-primary btn-sm">asdasdad</button>

    <h2 class="mt-12">Fill Button</h2>
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary" class="isax-airdrop icon-right">Primary</el-button>
      <el-button type="text" class="danger">Text</el-button>
      <el-button type="light">Light</el-button>
      <el-button type="gray">Gray</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <h2 class="mt-12">Outline Button</h2>
    <el-row>
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="light" plain>Light</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <h2 class="mt-12">Ghost Button</h2>
    <el-row>
      <el-button type="primary" class="ghost">Plain</el-button>
      <el-button type="primary" class="ghost">Primary</el-button>
      <el-button type="success" class="ghost">Success</el-button>
      <el-button type="info" class="ghost">Info</el-button>
      <el-button type="light" class="ghost">Light</el-button>
      <el-button type="warning" class="ghost">Warning</el-button>
      <el-button type="danger" class="ghost">Danger</el-button>
    </el-row>

    <h2 class="mt-12">Sized Button</h2>
    <el-row>
      <el-button>Default</el-button>
      <el-button size="large">Large</el-button>
      <el-button size="medium">Medium</el-button>
      <el-button size="small">Small</el-button>
      <el-button size="mini">Mini</el-button>
    </el-row>

    <h2 class="mt-12">Rounded Sized Button</h2>
    <el-row>
      <el-button round>Default</el-button>
      <el-button size="medium" round>Medium</el-button>
      <el-button size="small" round>Small</el-button>
      <el-button size="mini" round>Mini</el-button>
    </el-row>

    <h2 class="mt-12">Disabled Sized Button</h2>
    <el-row>
      <el-button disabled>Default</el-button>
      <el-button type="primary" disabled>Primary</el-button>
      <el-button type="success" disabled>Success</el-button>
      <el-button type="info" disabled>Info</el-button>
      <el-button type="warning" disabled>Warning</el-button>
      <el-button type="danger" disabled>Danger</el-button>
    </el-row>

    <el-row>
      <el-button plain disabled>Plain</el-button>
      <el-button type="primary" plain disabled>Primary</el-button>
      <el-button type="success" plain disabled>Success</el-button>
      <el-button type="info" plain disabled>Info</el-button>
      <el-button type="warning" plain disabled>Warning</el-button>
      <el-button type="danger" plain disabled>Danger</el-button>
    </el-row>

    <h2 class="mt-12">Icon Button</h2>
    <el-button type="primary" class="isax-trash"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
    <el-button type="primary" icon="el-icon-search">Search</el-button>
    <el-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></el-button>

    <h2 class="mt-12">Input Text</h2>
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">Previous Page</el-button>
      <el-button type="primary" icon="el-icon-arrow-left">Previous Page</el-button>
      <el-button type="primary" icon="el-icon-arrow-left">Previous Page</el-button>
      <el-button type="primary" icon="el-icon-arrow-left">Previous Page</el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="danger" icon="el-icon-arrow-left">Previous Page</el-button>
      <el-button type="danger" icon="el-icon-arrow-left">Previous Page</el-button>
      <el-button type="danger" icon="el-icon-arrow-left">Previous Page</el-button>
    </el-button-group>

    <h2 class="mt-12">Input Text</h2>
    <el-row>
      <el-input placeholder="Please input"></el-input>
    </el-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    buttonText(): string {
      return this.$theme.isDark.toString();
    },
  },
  methods: {
    toggleTheme() {
      this.$theme.setDarkMode(!this.$theme.isDark);
    },
  },
  mounted() {
    console.log('Dark mode is:', this.$theme.isDark);
    this.$theme.$on('darkMode', (value: boolean) => {
      console.log('darkMode changed:', value);
    });
  },
});
</script>

<style scoped>
.test {
  color: red;
  @apply bg-primary-100;
}

.toggle-button {
  transition: background-color 0.3s ease;
}

.indicator {
  margin-top: 20px;
}
</style>
