<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Sizes</h1>
      <p class="p-md-c my-6">
        Avatarlar, resimler, ikonlar veya alfanumerik karakterleri destekler. Avatar'ın şeklini ve boyutunu ayarlamak için `shape` ve `size`
        özelliklerini kullanabilirsiniz. Ayrıca avatarın resim kaynağını belirlemek için `src` özelliğini kullanabilirsiniz. Şekil tipleri
        <b>'circle | square'</b> şeklindedir. Boyutlar ise <b>'xlarge', 'large', 'medium', 'small', 'xsmall'</b> şeklindedir. Veya boyutu manuel
        olarak `size` özelliğini kullanarak belirleyebilirsiniz, örneğin <b>size='50'</b>.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4 items-center">
        <el-avatar :size="50">SK</el-avatar>
        <el-avatar v-for="size in sizeList" :key="size + ''" :size="size">SK</el-avatar>
        <el-divider direction="vertical" content-position="center" />
        <el-avatar shape="square" :size="50" :src="url" />
        <el-avatar v-for="size in sizeList" :key="size" shape="square" :size="size" :src="url" />
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-avatar :size="50"&gt;SK&lt;/el-avatar&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Types</h1>
      <p class="p-md-c my-6">You can use any 'string' expression within the tag, in addition to a type that accepts 'src' or 'icon' as a property.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4 items-center">
        <el-avatar icon="isax-add-circle" />
        <el-avatar icon="isax-add-circle" size="xlarge" />
        <el-avatar :src="url" />
        <el-avatar>SK</el-avatar>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-avatar icon="isax-add-circle" size="xlarge"&gt;&lt;/el-avatar&gt;</code>
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
