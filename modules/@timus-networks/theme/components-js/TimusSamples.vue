<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Button" name="first"><ThemeButtons></ThemeButtons></el-tab-pane>
      <el-tab-pane label="Typo" name="second"><ThemeTypo></ThemeTypo></el-tab-pane>
      <el-tab-pane label="Input" name="third"><ThemeInputs></ThemeInputs></el-tab-pane>
      <el-tab-pane label="Checkbox" name="fourth"><ThemeCheckbox></ThemeCheckbox></el-tab-pane>
      <el-tab-pane label="Radio" name="five"><ThemeRadio></ThemeRadio></el-tab-pane>
      <el-tab-pane label="Number" name="six"><ThemeInputNumbers></ThemeInputNumbers></el-tab-pane>
      <el-tab-pane label="Popover & Dropdown" name="seven"><ThemePopover></ThemePopover></el-tab-pane>
      <el-tab-pane label="Select" name="eight"><ThemeSelect></ThemeSelect></el-tab-pane>
      <el-tab-pane label="Form" name="nine"><ThemeForm></ThemeForm></el-tab-pane>
      <el-tab-pane label="Link" name="ten"><ThemeLink></ThemeLink></el-tab-pane>
      <el-tab-pane label="Tag" name="eleven"><ThemeTag></ThemeTag></el-tab-pane>
      <el-tab-pane label="Switch" name="twelve"><ThemeToggle></ThemeToggle></el-tab-pane>
      <el-tab-pane label="Table" name="thirteen"><ThemeTable></ThemeTable></el-tab-pane>
      <el-tab-pane label="Tooltip" name="fourteen"><ThemeTooltip></ThemeTooltip></el-tab-pane>
      <el-tab-pane label="Alert" name="fifteen"><ThemeAlert></ThemeAlert></el-tab-pane>
      <el-tab-pane label="Cascader" name="sixteen"><ThemeCascader></ThemeCascader></el-tab-pane>
      <el-tab-pane label="Badge" name="seventeen"><ThemeBadge></ThemeBadge></el-tab-pane>
      <el-tab-pane label="Avatar" name="eighteen"><ThemeAvatar></ThemeAvatar></el-tab-pane>
      <el-tab-pane label="Logo" name="nineteen"><ThemeLogo></ThemeLogo></el-tab-pane>
      <el-tab-pane label="Dialog" name="twenty"><ThemeDialog></ThemeDialog></el-tab-pane>
      <el-tab-pane label="Sidebar" name="twenty-one"><ThemeSidebar></ThemeSidebar></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ThemeInputNumbers from './ThemeInputNumbers.vue';
import ThemeInputs from './ThemeInputs.vue';
import ThemePopover from './ThemePopover.vue';

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
  components: { ThemeInputs, ThemeInputNumbers, ThemePopover },
};
</script>
