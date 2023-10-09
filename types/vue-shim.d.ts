import { Context } from '@nuxt/types'
import Vue from 'vue'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {}
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $toTitleCase: (this: { context: Context }, str: string) => string
  }
  interface Context {
    $toTitleCase: (msg: string) => void
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $toTitleCase: (msg: string) => void
  }
}
