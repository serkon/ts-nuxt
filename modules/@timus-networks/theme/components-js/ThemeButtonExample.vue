<template>
  <el-row>
    <code>{{ rawHtmlCode }}</code>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      rawHtmlCode: '<el-button>Default</el-button>',
    };
  },
};
</script>
