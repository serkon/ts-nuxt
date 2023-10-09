import Vue from 'vue'

Vue.directive('focus', {
  // Direktif bağlandığında (inserted hook) elemente otomatik odaklama yapalım.
  inserted: (el) => {
    el.focus()
  },
})
