import Vue from 'vue'

Vue.directive('highlight', {
  bind: (el) => {
    el.style.backgroundColor = 'yellow'
  },
})
