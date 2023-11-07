<template>
  <div class="mb-16">
    <h1 class="mt-12">Headins</h1>
    <p class="p-lg my-6">Aşağıda heading örnekleri yer almaktadır.</p>

    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-500">
      <div class="h2 text-gray-600">Class Name</div>
      <div class="h2 text-gray-600">FontSize</div>
      <div class="h2 text-gray-600 hidden md:block">LineHeight</div>
      <template v-for="(item, index) in headingClasses">
        <component :is="item.name" class="flex items-center text-gray-800">{{ item.name }}</component>
        <div class="flex items-center">{{ item.fontSize }}</div>
        <div class="flex items-center hidden md:block">{{ item.lineHeight }}</div>
      </template>
    </div>

    <h1 class="mt-12">Others</h1>
    <p class="p-lg my-6">Aşağıda paragraflar ve diğer html elementleri için kullanılabilecek ön tanımlı class nameler yer almaktadır.</p>

    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-500">
      <div class="h2 text-gray-600">Class Name</div>
      <div class="h2 text-gray-600">FontSize</div>
      <div class="h2 text-gray-600 hidden md:block">LineHeight</div>
      <template v-for="(item, index) in helperClasses">
        <component :is="item.name" class="flex items-center text-gray-800">{{ item.name }}</component>
        <div class="flex items-center">{{ item.fontSize }}</div>
        <div class="flex items-center hidden md:block">{{ item.lineHeight }}</div>
      </template>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TimusTypoSample',
  data() {
    return {
      headingClasses: [
        { name: 'h1', fontSize: '24px', lineHeight: '30px' },
        { name: 'h2', fontSize: '20px', lineHeight: '24px' },
        { name: 'h3', fontSize: '18px', lineHeight: '22px' },
        { name: 'h4', fontSize: '14px', lineHeight: '18px' },
        { name: 'h5', fontSize: '12px', lineHeight: '16px' },
        { name: 'h6', fontSize: '10px', lineHeight: '14px' },
      ],
      helperClasses: [
        { name: 'p-lg', fontSize: '16px', lineHeight: '18px' },
        { name: 'p-md', fontSize: '14px', lineHeight: '16px' },
        { name: 'p-md-c', fontSize: '14px', lineHeight: '24px' },
        { name: 'p-sm', fontSize: '12px', lineHeight: '14px' },
        { name: 'p-xs', fontSize: '10px', lineHeight: '14px' },
        { name: 'p-xxs', fontSize: '8px', lineHeight: '10px' },
        { name: 'b-md', fontSize: '16px', lineHeight: '24px' },
        { name: 'b-lg', fontSize: '16px', lineHeight: '24px' },
        { name: 'b-sm', fontSize: '14px', lineHeight: '18px' },
        { name: 'b-md-u', fontSize: '16px', lineHeight: '24px' },
        { name: 'b-lg-u', fontSize: '16px', lineHeight: '24px' },
        { name: 'b-sm-u', fontSize: '14px', lineHeight: '18px' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
}
</style>
