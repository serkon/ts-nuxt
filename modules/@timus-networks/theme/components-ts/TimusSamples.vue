<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Button" name="first"><ThemeButtons /></el-tab-pane>
      <el-tab-pane label="Breadcrumb" name="twenty-six"><ThemeBreadcrumb /></el-tab-pane>
      <el-tab-pane label="Typo" name="second"><ThemeTypo /></el-tab-pane>
      <el-tab-pane label="Input" name="third"><ThemeInputs /></el-tab-pane>
      <el-tab-pane label="Checkbox" name="fourth"><ThemeCheckbox /></el-tab-pane>
      <el-tab-pane label="Radio" name="five"><ThemeRadio /></el-tab-pane>
      <el-tab-pane label="Number" name="six"><ThemeInputNumbers /></el-tab-pane>
      <el-tab-pane label="Popover & Dropdown" name="seven"><ThemePopover /></el-tab-pane>
      <el-tab-pane label="Select" name="eight"><ThemeSelect /></el-tab-pane>
      <el-tab-pane label="Form" name="nine"><ThemeForm /></el-tab-pane>
      <el-tab-pane label="Link" name="ten"><ThemeLink /></el-tab-pane>
      <el-tab-pane label="Tag" name="eleven"><ThemeTag /></el-tab-pane>
      <el-tab-pane label="Switch" name="twelve"><ThemeToggle /></el-tab-pane>
      <el-tab-pane label="Table" name="thirteen"><ThemeTable /></el-tab-pane>
      <el-tab-pane label="Tooltip" name="fourteen"><ThemeTooltip /></el-tab-pane>
      <el-tab-pane label="Alert" name="fifteen"><ThemeAlert /></el-tab-pane>
      <el-tab-pane label="Cascader" name="sixteen"><ThemeCascader /></el-tab-pane>
      <el-tab-pane label="Badge" name="seventeen"><ThemeBadge /></el-tab-pane>
      <el-tab-pane label="Avatar" name="eighteen"><ThemeAvatar /></el-tab-pane>
      <el-tab-pane label="Logo" name="nineteen"><ThemeLogo /></el-tab-pane>
      <el-tab-pane label="Dialog" name="twenty"><ThemeDialog /></el-tab-pane>
      <el-tab-pane label="Sidebar" name="twenty-one"><ThemeSidebar /></el-tab-pane>
      <el-tab-pane label="Upload" name="twenty-two"><ThemeUpload /></el-tab-pane>
      <el-tab-pane label="MessageBox" name="twenty-three"><ThemeMessageBox /></el-tab-pane>
      <el-tab-pane label="Information" name="twenty-four"><ThemeInformation /></el-tab-pane>
      <el-tab-pane label="Collapse" name="twenty-five"><ThemeCollapse /></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ThemeInputNumbers from './ThemeInputNumbers.vue';
import ThemeInputs from './ThemeInputs.vue';
import ThemePopover from './ThemePopover.vue';

export default {
  components: { ThemeInputs, ThemeInputNumbers, ThemePopover },
  data() {
    return {
      activeName: 'fifteen',
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
