<template>
  <div>
    {{ selectedFriends }}
    <div v-for="(friend, index) in friends" :key="index">
      <label>
        <input type="checkbox" :value="friend" v-model="selectedFriends" />
        {{ friend }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    friends: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedFriends: [],
    };
  },
  watch: {
    selectedFriends(newValue) {
      this.$emit('input', newValue);
    },
  },
};
</script>
