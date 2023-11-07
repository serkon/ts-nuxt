<template>
  <div class="container list">
    <h3 class="mb-4">Iconsax</h3>
    <el-input placeholder="Search..." v-model="search" clearable></el-input>
    <div class="icon-container">
      <template v-for="(item, index) in filter">
        <div :class="`icon isax-${item}`">isax-{{ item }}</div>
      </template>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Icons } from '@/static/fonts/iconsax/icons.js';

export default Vue.extend({
  name: 'Iconsax',
  data() {
    return {
      icons: Icons,
      search: '',
    };
  },
  computed: {
    filter() {
      return this.icons.filter((item) => item.includes(this.search));
    },
  },
  mounted() {
    console.log('data:', this.icons);
  },
});
</script>

<style scoped>
.icon-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-gap: 10px; /* Kutular arası boşluk */
  place-items: start center;
  margin-top: 24px;

  .icon {
    display: inline-flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    padding: 24px 12px;
    width: 100%;
    border: 1px solid var(--gray-200);
    border-radius: 4px;
    background-color: #fdfdfd;
    color: var(--gray-500);
    font-size: 12px;
    gap: 6px;
    cursor: pointer;
    transition: all 0.4s;

    &::before {
      color: var(--gray-800);
      font-size: 24px;
      font-weight: 400;
      transition: all 0.4s;
    }

    &:hover {
      background-color: var(--primary-500);
      color: #ffffff;
      transition: all 0.4s;

      &::before {
        color: #ffffff;
        transition: all 0.4s;
      }
    }
  }
}
</style>
