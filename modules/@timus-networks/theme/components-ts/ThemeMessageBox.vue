<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Confirm</h1>
      <p class="p-lg-c my-6">
        Confirm is used to ask users' confirmation. A set of modal boxes simulating system message box, mainly for alerting information, confirm
        operations and prompting messages. By design MessageBox provides simulations of system's alert, confirm and prompt，so it's content should be
        simple. For more complicated contents, please use Dialog.
      </p>
      <el-button type="primary" size="medium" class="outline" @click="open">Click to open Message Box</el-button>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Click to open Message Box&lt;/el-button&gt;</code>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TimusMessageBox',
  methods: {
    open() {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed',
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled',
          });
        });
    },
  },
});
</script>
