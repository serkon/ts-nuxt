import Vue from 'vue'

Vue.directive('case', {
  bind: (el) => {
    el.style.opacity = '0'
  },
  inserted: (el) => {
    el.innerText = toTitleCase(el.innerText)
    el.style.opacity = '1'
  },
  update: (el) => {
    el.innerText = toTitleCase(el.innerText)
  },
})

function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}
