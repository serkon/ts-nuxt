<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Button" name="first"><ThemeButtons></ThemeButtons></el-tab-pane>
      <el-tab-pane label="Typography" name="second"><ThemeTypo></ThemeTypo></el-tab-pane>
      <el-tab-pane label="Inputs" name="third"><ThemeInputs></ThemeInputs></el-tab-pane>
      <el-tab-pane label="Checkbox" name="fourth"><ThemeCheckbox></ThemeCheckbox></el-tab-pane>
      <el-tab-pane label="Numbers" name="five"><ThemeInputNumbers></ThemeInputNumbers></el-tab-pane>
      <el-tab-pane label="Picker" name="six"><ThemeTimePicker></ThemeTimePicker></el-tab-pane>
      <el-tab-pane label="Select" name="sevent"><ThemeSelect></ThemeSelect></el-tab-pane>
      <el-tab-pane label="Form" name="eight"><ThemeForm></ThemeForm>></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ThemeInputNumbers from './ThemeInputNumbers.vue';
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
  components: { ThemeInputs, ThemeInputNumbers },
};
</script>
