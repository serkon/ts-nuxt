import { Context, Inject, Plugin } from '@nuxt/types/app'
import Vue from 'vue'

import CaseCoverter from './case-converter'

declare module 'vue/types/vue' {
  interface Vue {
    $toTitleCase: (this: { context: Context }, str: string) => string
    $toTitleCasePrototype: (this: { context: Context }, str: string) => string
    $toTitleCaseMixin: (this: { context: Context }, str: string) => string
  }
}

const Plugins: Plugin = (context: Context, inject: Inject) => {
  inject('toTitleCase', CaseCoverter.bind({ context })) // $toTitleCase'yu Vue, context ve store'a inject edin.
}

export default Plugins

// @ALTERNATIVE: prototype ile global variable bağlamanın diğer yolu
Vue.prototype.$toTitleCasePrototype = (str: string): string =>
  str.replace(/\w\S*/g, function (txt: string) {
    console.log('Prototype')

    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })

// @ALTERNATIVE: mixin ile global variable bağlamanın diğer yolu
Vue.mixin({
  methods: {
    $toTitleCaseMixin(str: string): string {
      return str.replace(/\w\S*/g, function (txt: string) {
        console.log('Mixin')

        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    },
  },
})
