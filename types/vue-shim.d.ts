import Vue from 'vue'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $myAxios: any // replace 'any' with the actual type if you know it
  }
}
