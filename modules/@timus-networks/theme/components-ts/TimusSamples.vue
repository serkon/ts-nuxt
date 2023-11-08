<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Button" name="first"><ThemeButtons></ThemeButtons></el-tab-pane>
      <el-tab-pane label="Typography" name="second"><ThemeTypo></ThemeTypo></el-tab-pane>
      <el-tab-pane label="Inputs" name="third"><ThemeInputs></ThemeInputs></el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ThemeInputs from './ThemeInputs.vue';

export default {
  data() {
    return {
      activeName: 'first',
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  components: { ThemeInputs },
};
</script>
