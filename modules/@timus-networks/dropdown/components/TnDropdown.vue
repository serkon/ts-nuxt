<template>
  <div class="dropdown">
    <button @click="toggleDropdown">
      {{ selectedOption || 'Seçenek Seç' }}
    </button>
    <ul v-if="isOpen">
      <li v-for="option in options" :key="option" @click="selectOption(option)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TnDropdown',
  data() {
    return {
      isOpen: false,
      options: ['Seçenek 1', 'Seçenek 2', 'Seçenek 3'],
      selectedOption: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown ul {
  position: absolute;
  margin: 0;
  padding: 0;
  border: 1px solid #cccccc;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 10%);
  list-style-type: none;
}

.dropdown li {
  padding: 10px;
  cursor: pointer;
}

.dropdown li:hover {
  background-color: #eeeeee;
}
</style>
