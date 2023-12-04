<template>
    <div class="pt-8 pb-16 flex gap-12 flex-col">
        <section>
            <h1>Sizes</h1>
            <p class="p-md-c my-6">
                Our logos are available in three sizes: small, medium, and large. To tailor your choice, use the size tags
                <b>'small', 'medium', 'large'</b> to determine the appropriate size for your needs.
            </p>
            <div class="grid grid-flow-col auto-cols-max gap-6 items-center">
                <div class="logo-icon-small"></div>
                <div class="logo-icon-medium"></div>
                <div class="logo-icon-large"></div>
                <el-divider direction="vertical" content-position="center"></el-divider>
                <div class="logo-small"></div>
                <div class="logo-medium"></div>
                <div class="logo-large"></div>
            </div>
            <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
                <p class="text-xs">
                    <code>&lt;div class="logo-medium"&gt;&lt;/div&gt;</code>
                </p>
            </div>
        </section>

        <section>
            <h1>Types</h1>
            <p class="p-md-c my-6">
                There are two different types of logo usage available: <b>"icon"</b> or <b>"logo"</b>. When used as a <b>"logo"</b>, an additional
                icon along with the word <b>"timus"</b> will be displayed.
            </p>
            <div class="grid grid-flow-col auto-cols-max gap-6 items-center">
                <div class="logo-icon-small"></div>
                <el-divider direction="vertical" content-position="center"></el-divider>
                <div class="logo-small"></div>
            </div>
            <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
                <p class="text-xs">
                    <code>&lt;div class="logo-icon-medium"&gt;&lt;/div&gt; | &lt;div class="logo-medium"&gt;&lt;/div&gt;</code>
                </p>
            </div>
        </section>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'TimusCascader',
    data() {
        return {
            url: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Princess',
            sizeList: ['xlarge', 'large', 'medium', 'small', 'xsmall'],
        };
    },
});
</script>
