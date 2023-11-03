<template>
  <div class="text-black dark:text-white dark:bg-gray-800 p-4">
    <h1 class="isax-airdrop icon-xxl">Dynamic Theming with Nuxt</h1>
    <p>Experience the power of dynamic theming. Click the button below to toggle between light and dark modes.</p>
    <button @click="toggleTheme" class="btn btn-sm btn-primary dark:btn-light mt-4">{{ buttonText }}</button>
    <div class="bg-primary-800">teeeee</div>
    +<TnIcon icon="isax-activity" size="md" />+
    <button class="btn btn-primary btn-sm">asdasdad</button>
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
    <el-row>
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="light" plain>Light</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
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
