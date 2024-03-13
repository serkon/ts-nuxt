<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Basic</h1>
      <p class="p-lg my-6">
        Use the type attribute to define Tag's type. In addition, the color attribute can be used to set the background color of the Tag.
      </p>
      <div class="grid grid-flow-col gap-4">
        <el-upload
          class="el-upload-container"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          multiple
        >
          <!-- <i class="el-icon-upload" />-->
          <img src="~/assets/images/upload-drop.svg" alt="upload" class="w-[56px] h-[56px]" />
          <div class="el-upload__text">
            <span class="title">Drag CSV here</span>
            <span class="description">or click to browse (5MB Max)</span>
          </div>
          <div slot="tip" class="el-upload__tip">
            Category: Maximum 30 characters. Domain: Valid domain value (wildcard domains are acceptable).You can upload up to 1000 domains at a time.
            Categories that are not in the system will be created as new custom categories.
          </div>
        </el-upload>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>
            &lt;el-upload class=&quot;el-upload-container&quot; drag multiple&gt;&lt;i class=&quot;el-icon-upload&quot;&gt;&lt;/i&gt;&lt;div
            class=&quot;el-upload__text&quot;&gt;&lt;span class=&quot;title&quot;&gt;Drop file here or&lt;/span&gt;&lt;span
            class=&quot;description&quot;&gt;click to upload&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;el-upload__tip&quot;
            slot=&quot;tip&quot;&gt;description&lt;/div&gt;&lt;/el-upload&gt;
          </code>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TimusUpload',
  data() {
    return {
      imageUrl: '',
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('Avatar picture must be JPG format!');
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!');
      }

      return isJPG && isLt2M;
    },
  },
});
</script>
