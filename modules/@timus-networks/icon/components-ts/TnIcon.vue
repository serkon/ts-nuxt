<template>
  <i :class="classes" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TnIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'sm',
    },
  },
  computed: {
    classes() {
      return {
        [`icon-${this.size}`]: true,
        [`${this.icon}`]: true,
      };
    },
  },
});
</script>
