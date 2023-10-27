<template>
  <i :icon="icon" />
</template>

<script>import Vue from 'vue';
export default Vue.extend({
    name: 'TnIcon',
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
});
</script>
