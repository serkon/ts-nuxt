<template>
  <div class="text-black dark:text-white dark:bg-gray-800 p-4 bg-gray-500 md:bg-warning-500">
    <h1 class="isax-airdrop icon-xxl">Dynamic Theming with Nuxt</h1>
    <p>Experience the power of dynamic theming. Click the button below to toggle between light and dark modes.</p>
    <button @click="toggleTheme" class="btn btn-sm btn-primary dark:btn-light mt-12">{{ buttonText }}</button>
    <div class="bg-primary-800">teeeee</div>
    +<TnIcon icon="isax-activity" size="md" />+
    <button class="btn btn-primary btn-sm">asdasdad</button>

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
      return this.$theme?.isDark.toString();
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
