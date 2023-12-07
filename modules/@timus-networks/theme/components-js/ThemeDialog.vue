<template>
    <div class="pt-8 pb-16 flex gap-12 flex-col">
        <section>
            <h1>Sizes</h1>
            <p class="p-md-c my-6">
                Our logos are available in three sizes: small, medium, and large. To tailor your choice, use the size tags
                <b>'small', 'medium', 'large'</b> to determine the appropriate size for your needs.
            </p>
            <div class="grid grid-flow-col auto-cols-max gap-6 items-center">
                <el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>
                <el-dialog title="Tips" :visible.sync="dialogVisible" :before-close="handleClose">
                    <span>This is a message</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
                    </span>
                </el-dialog>
            </div>
            <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
                <p class="text-xs">
                    <code>&lt;div class="logo-medium"&gt;&lt;/div&gt;</code>
                </p>
            </div>
        </section>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            dialogVisible: false,
        };
    },
    methods: {
        handleClose(done) {
            this.$confirm('Are you sure to close this dialog?')
                .then((_) => {
                    done();
                })
                .catch((_) => {});
        },
    },
});
</script>
