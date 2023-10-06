// index.js

import TnCheckbox from './TnCheckbox.vue'
import TnSelectbox from './TnSelectbox.vue'

const TnSelectboxPlugin = {
  install(Vue) {
    Vue.component('TnSelectbox', TnSelectbox)
    Vue.component('TnCheckbox', TnCheckbox)
  },
}

export default TnSelectboxPlugin
