import Vue from 'vue'

Vue.directive('titlecase', {
  inserted: (el) => {
    el.innerText = toTitleCase(el.innerText)
  },
  update: (el) => {
    el.innerText = toTitleCase(el.innerText)
  },
})

function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}
